import * as functions from "firebase-functions";
import { db } from "../../../../api/firebase";
import {
  DISPLAY_NAME,
  EMAIL,
  ID,
  PHOTO_URL,
  USERS,
} from "../../../../constants/db";

const onCreate = functions.auth.user().onCreate(async (user) => {
  return db
    .collection(USERS)
    .doc(user.uid)
    .set({
      [ID]: user.uid,
      [EMAIL]: user.email ?? "",
      [PHOTO_URL]: user.photoURL ?? "",
      [DISPLAY_NAME]: user.displayName ?? "",
    });
});

export default onCreate;
