import firebase_app from "../config";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";

const db = getFirestore(firebase_app)
export async function updateDocument(collectionToUse, id, data) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collectionToUse, id),  {
            title: data.title,
            content: data.content
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function addDocument(collectionToUse, data) {
    let result = null;
    let error = null;

    try {
        result = await addDoc(collection(db, collectionToUse),  {
            title: data.title,
            content: data.content
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}





// How to use addData

// 'use client'
// import addData from "@/firebase/firestore/addData";

// export default function Home() {

//   const handleForm = async () => {
//     const data = {
//       name: 'John snow',
//       house: 'Stark'
//     }
//     const { result, error } = await addData('users', 'user-id', data)

//     if (error) {
//       return console.log(error)
//     }
//   }
  
//   return (
//     ...
//   )
// }

