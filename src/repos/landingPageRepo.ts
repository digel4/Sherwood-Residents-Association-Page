import { getCollection, getDocument } from "@/firebase/firestore/getData";
import { addDocument } from "@/firebase/firestore/addData";
import { deleteDocument } from "@/firebase/firestore/deleteData";

export const landingPageRepo = {
  getImageById,
  getAllImages,
  removeImageById,
  uploadImage
}

async function getAllImages() {
  return await getCollection("");
}

async function getImageById(id: string) {
  return await getDocument("landing", id);   
}

async function removeImageById(id: string) {
  return await deleteDocument("landing", id)
}

async function uploadImage(id: string, data: object) {
  // return "Hit edit blog item in repo"
  //return await addDocument("")
}


