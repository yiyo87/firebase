// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";



// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";//es valido para cualquier tipo de servicio de firebase
// https://firebase.google.com/docs/web/setup#available-libraries
import {firebaseConfig} from  "./credenciales.js";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional




// Initialize Firebase

const app = initializeApp(firebaseConfig);//aqui se inicializa el servicio de firebase
export const db = getFirestore(app);//esto se importa dentro del archivo de firebase
