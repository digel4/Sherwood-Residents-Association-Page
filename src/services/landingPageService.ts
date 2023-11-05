import { landingPageRepo } from "@/repos/landingPageRepo";

export const landingPageService = {
  getImageById,
  getAllImages,
  removeImageById,
  uploadImage
}

async function getImageById(id: string) {
  return landingPageRepo.getImageById(id);
}

async function getAllImages() {
  return landingPageRepo.getAllImages();
}

async function removeImageById(id: string) {
  return landingPageRepo.removeImageById(id);
}

async function uploadImage(id: string, data: object) {
  return landingPageRepo.uploadImage(id, data);
}
