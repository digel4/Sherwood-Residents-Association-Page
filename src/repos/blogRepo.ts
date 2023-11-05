import { getCollection, getDocument } from "@/firebase/firestore/getData";
import { addDocument, updateDocument } from "@/firebase/firestore/addData";
import { deleteDocument } from "@/firebase/firestore/deleteData";

export const blogRepo = {
  getAllBlogItems,
  removeBlogItemById,
  getBlogItemById,
  editBlogItemById,
  createBlogItem
}

async function getAllBlogItems() {
  return await getCollection("news-&-events");
}

async function getBlogItemById(id: string) {
  return await getDocument("news-&-events", id);   
}

async function removeBlogItemById(id: string) {
  return await deleteDocument("news-&-events", id)
}

async function editBlogItemById(id: string, data: object) {
  // return "Hit edit blog item in repo"
  return await updateDocument("news-&-events", id, data)
}

async function createBlogItem(data: object) {
  // return "Hit edit blog item in repo"
  return await addDocument("news-&-events", data)
}

