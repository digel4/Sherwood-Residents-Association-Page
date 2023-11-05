import { getDocument } from "@/firebase/firestore/getData";
import { updateDocument } from "@/firebase/firestore/addData";


export const welcomeLetterRepo = {
  getWelcomeLetter,
  editWelcomeLetter
}



async function getWelcomeLetter(id: string) {
  return await getDocument("news-&-events", id);   
}

async function editWelcomeLetter(id: string, data: object) {
  // return "Hit edit blog item in repo"
  return await updateDocument("news-&-events", id, data)
}
