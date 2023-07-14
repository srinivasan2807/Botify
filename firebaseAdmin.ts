import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccount = JSON.parse(
  process.env.FIRBASE_SERVICE_ACC_KEY as string
);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
