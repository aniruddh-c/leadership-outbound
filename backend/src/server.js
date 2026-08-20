import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import {
  listPhotos,
  getPhotoStream,
  getPhotoMetadata
} from "./googleDrive.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*"
  })
);

app.use(express.json());

/*
|--------------------------------------------------------------------------
| Health check
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "TASL Leadership Event API"
  });
});

/*
|--------------------------------------------------------------------------
| List photographs
|--------------------------------------------------------------------------
*/

app.get("/api/photos", async (req, res) => {
  try {
    const photos = await listPhotos(
      process.env.GOOGLE_DRIVE_FOLDER_ID
    );

    res.json(
      photos.map((photo) => ({
        id: photo.id,
        name: photo.name,
        createdTime: photo.createdTime,
        modifiedTime: photo.modifiedTime
      }))
    );

  } catch (error) {
    console.error(
      "Error retrieving event photographs:",
      error
    );

    res.status(500).json({
      error: "Unable to retrieve event photographs."
    });
  }
});

app.get("/api/submissions", async (req, res) => {
  try {
    const photos = await listPhotos(
      process.env.GOOGLE_DRIVE_SUBMISSIONS_FOLDER_ID
    );

    res.json(
      photos.map((photo) => ({
        id: photo.id,
        name: photo.name,
        createdTime: photo.createdTime,
        modifiedTime: photo.modifiedTime
      }))
    );

  } catch (error) {
    console.error(
      "Error retrieving employee-submitted photographs:",
      error
    );

    res.status(500).json({
      error: "Unable to retrieve submitted photographs."
    });
  }
});

/*
|--------------------------------------------------------------------------
| Stream photograph
|--------------------------------------------------------------------------
*/

app.get("/api/photos/:id", async (req, res) => {

  try {

    const fileId = req.params.id;

    const metadata =
      await getPhotoMetadata(fileId);

    res.setHeader(
      "Content-Type",
      metadata.mimeType
    );

    if (metadata.size) {
      res.setHeader(
        "Content-Length",
        metadata.size
      );
    }

    const photo =
      await getPhotoStream(fileId);

    photo.data.pipe(res);

  } catch (error) {

    console.error(
      "Error streaming photograph:",
      error
    );

    res.status(404).send(
      "Photograph not found."
    );
  }
});

/*
|--------------------------------------------------------------------------
| Start server
|--------------------------------------------------------------------------
*/

app.listen(PORT, () => {

  console.log(
    `TASL event backend running on port ${PORT}`
  );

});