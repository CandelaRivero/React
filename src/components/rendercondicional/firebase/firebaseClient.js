// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, where, getDoc, doc, addDoc, DocumentSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmz0ybGy_CoEgvL02M0t0qfCOWatSw2fU",
  authDomain: "planes-9f42c.firebaseapp.com",
  projectId: "planes-9f42c",
  storageBucket: "planes-9f42c.appspot.com",
  messagingSenderId: "1019876651167",
  appId: "1:1019876651167:web:41ca34dab779e1d967b2aa",
  measurementId: "G-SSK4CK9YZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const db = getFirestore()
 const productsCollection = collection(db, "products")
 const ordersCollection = collection(db, "orders")

export const getProducts = async () => { 

   const querySnapshot = await getDocs(productsCollection);

   let products = []
      
   querySnapshot.forEach( doc => { 
       
      // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
      //  console.log(doc.data());
       // products.push(doc.data())
       products.push ({
         id: doc.id, 
         ...doc.data()
   })
   });

   return products
}

export const getProductsByProp = async (prop, value) => { 
  const q =  query (productsCollection, where(prop, "==", value)); 
  const querySnapshot = await getDocs(q);
  let products = []

  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  });
  return products
}

export const getProductById = async (id) => {
  const docRef = doc(productsCollection, id);
  const docSnap = await getDoc (docRef);

  return docSnap.data()
}

// export const getProductsById = async () => { 

//   const querySnapshot = await getDocs(collection(db,"products"));


//   return 
// }

export const addOrder = async (order) => {
    const docSnap =  await addDoc(ordersCollection, order)
    return docSnap.id

} 


const analytics = getAnalytics(app);

// export const getFirebase = () => {return app}

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
// appId: process.env.REACT_APP_FIREBASE_APPID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID