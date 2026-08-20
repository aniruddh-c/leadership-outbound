import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_FILE,
  scopes: [
    "https://www.googleapis.com/auth/drive.readonly"
  ]
});

const drive = google.drive({
  version: "v3",
  auth
});

export async function listPhotos(folderId) {
  const response = await drive.files.list({
    q: `'${folderId}' in parents
      and trashed = false
      and mimeType contains 'image/'`,

    fields:
      "files(id,name,mimeType,createdTime,modifiedTime,size)",

    orderBy: "createdTime desc",

    pageSize: 100
  });

  return response.data.files || [];
}

export async function getPhotoStream(fileId) {
  const response = await drive.files.get(
    {
      fileId,
      alt: "media"
    },
    {
      responseType: "stream"
    }
  );

  return response;
}

export async function getPhotoMetadata(fileId) {
  const response = await drive.files.get({
    fileId,
    fields: "id,name,mimeType,size"
  });

  return response.data;
}