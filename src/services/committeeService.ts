import { committeeRepo } from "@/repos/committeeRepo";

export const committeeService = {
  getAllComitteeRoles,
  removeComitteeRoleById,
  getComitteeRoleById,
  editComitteeRoleById,
  createComitteeRole
}

async function getAllComitteeRoles() {
  return committeeRepo.getAllComitteeRoles();
}

async function getComitteeRoleById(id: string) {
  return committeeRepo.getComitteeRoleById(id);
}

async function removeComitteeRoleById(id: string) {
  return committeeRepo.removeComitteeRoleById(id);
}

async function editComitteeRoleById(id: string, data: object) {
  return committeeRepo.editComitteeRoleById(id, data);
}

async function createComitteeRole(data: object) {
  return committeeRepo.createComitteeRole(data);
}