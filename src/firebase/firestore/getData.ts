import firebase_app from "../config";
import { collection, getFirestore, doc, getDoc, getDocs } from "firebase/firestore";
import blogItem from "@/interfaces/blogItem";

const db = getFirestore(firebase_app)
// async function getDoument(collection: string, id: string) {

//     let docRef = doc(db, collection, id);

//     let result = null;
//     let error = null;

//     try {
//         result = await getDoc(docRef);
//     } catch (e) {
//         error = e;

//     }

//     return { result, error };
// }

async function getDoument(collection: string, id: string) {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const dataObj: blogItem = {
            id: docSnap.id,
            data: docSnap.data()
        }
        console.log(`dataObj is:
        ${dataObj}
        `)
        return dataObj; 
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null;
      }


}

async function getCollection(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName))
    .then(   (data) => {
        //console.log(data.docs)
        const docData = data.docs.map( (doc) => {
            //console.log(doc.id)
            //const {data, id} = doc
            const dataObj = {
                id: doc.id,
                data: doc.data()
            }
            //console.log(dataObj)
            //return doc.data()
            return dataObj

        } )
        //console.log(docData)
        return docData;
    }  )

    return querySnapshot
}

export {getDoument, getCollection}
