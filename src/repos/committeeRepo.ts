import { getCollection, getDocument } from "@/firebase/firestore/getData";
import { addDocument, updateDocument } from "@/firebase/firestore/addData";
import { deleteDocument } from "@/firebase/firestore/deleteData";

export const committeeRepo = {
  getAllComitteeRoles,
  removeComitteeRoleById,
  getComitteeRoleById,
  editComitteeRoleById,
  createComitteeRole
}

async function getAllComitteeRoles() {
  return await getCollection("committee");
}

async function removeComitteeRoleById(id: string) {
  return await deleteDocument("committee", id);   
}

async function getComitteeRoleById(id: string) {
  return await getDocument("committee", id)
}

async function editComitteeRoleById(id: string, data: object) {
  // return "Hit edit blog item in repo"
  return await updateDocument("committee", id, data)
}

async function createComitteeRole(data: object) {
  // return "Hit edit blog item in repo"
  return await addDocument("committee", data)
}

