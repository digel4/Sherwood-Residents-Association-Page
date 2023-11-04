import firebase_app from "../config";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export async function deleteDocument (collectionToUse, id) {

  let result = null;
  let error = null;
  await deleteDoc(doc(db, "cities", "DC"));
  try {
      result = await deleteDoc(doc(db, collectionToUse, id));
  } catch (e) {
      error = e;
  }

  return { result, error };


  
}
