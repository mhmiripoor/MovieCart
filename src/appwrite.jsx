// import { Client, Databases, ID, Query } from "appwrite";
// const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID = import.meta.env.VITE_APPWIRE_DATABASE_ID;
// const COLLENCTION_ID = import.meta.env.VITE_APPWRITE_COLLENCTION_ID;

// // const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID)

// // const Databases = new Databases(client);

// export const updateSearchCount = async (movie, searchTerm) => {
//     try {
//         const result = await Databases.listDocuments(DATABASE_ID, COLLENCTION_ID, [
//             Query.filter('searchTerm', searchTerm)
//         ])
//         if (result.documents.length > 0) {
//             const doc = result.documents[0];

//             await Databases.updateDocument(DATABASE_ID, COLLENCTION_ID, doc.$id, {
//                 count: doc.count + 1
//             })
//         } else {
//             // await.doc  
//         }

//     } catch (error) {
//         console.error(error);
//     }

// }