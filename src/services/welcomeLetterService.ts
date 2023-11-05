import { welcomeLetterRepo } from "@/repos/welcomeLetterRepo";

export const welcomeLetterService = {
  getWelcomeLetter,
  editWelcomeLetter
}

async function getWelcomeLetter(id: string) {
  return welcomeLetterRepo.getWelcomeLetter(id);
}

async function editWelcomeLetter(id: string, data: object) {
  return welcomeLetterRepo.editWelcomeLetter(id, data);
}
