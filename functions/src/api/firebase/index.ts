import * as firebaseAdmin from "firebase-admin";

firebaseAdmin.initializeApp();

export const db = firebaseAdmin.firestore();
export default firebaseAdmin;
