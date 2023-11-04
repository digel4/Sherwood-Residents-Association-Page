import { blogRepo } from "@/repos/blogRepo";

export const blogService = {
  getAllBlogItems,
  removeBlogItemById,
  getBlogItemById,
  editBlogItemById
}

async function getAllBlogItems() {
  return blogRepo.getAllBlogItems();
}

async function getBlogItemById(id: string) {
  return blogRepo.getBlogItemById(id);
}

async function removeBlogItemById(id: string) {
  return blogRepo.removeBlogItemById(id);
}

async function editBlogItemById(id: string) {
  return blogRepo.editBlogItemById(id);
}
