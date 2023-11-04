import { getCollection, getDoument } from "@/firebase/firestore/getData";

export const blogRepo = {
  getAllBlogItems,
  removeBlogItemById,
  getBlogItemById,
  editBlogItemById
}

async function getAllBlogItems() {
  return await getCollection("news-&-events");
}

async function getBlogItemById(id: string) {
  return await getDoument("news-&-events", id);   
}

async function removeBlogItemById(id: string) {
  return ""
}

async function editBlogItemById(id: string) {
  return "Hit edit blog item in repo"
}

