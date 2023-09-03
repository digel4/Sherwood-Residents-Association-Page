import { DocumentData, Timestamp } from "firebase/firestore"

export default interface blogItem {
  id: string,
  data: DocumentData
}
