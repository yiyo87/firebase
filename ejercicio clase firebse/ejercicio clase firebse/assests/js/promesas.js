import { db } from "./firebase.js";
import {addDoc,collection,getDocs,doc,updateDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


export const registrarPersona = async(persona)=>{//esto es como el DAO sirve para poder meter cosasa dentro de la base de datos 
    const docRef = await addDoc(collection(db, "personas"),persona );
}

export const obtenerPersonas = async()=>{
    //recuper la referencia (ruta)
    const ref = collection(db,"personas");
    //recuperamos una captura de la base de datos
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc) => {//recorre los documentos de la base de datos
        //console.log(doc.id);
        console.log(doc.data());//recuperar id del objeto
        listado.push({...doc.data(),id:doc.id})//dentro de listado se agrega los elementos de junto con el id para poder obtener en base a ka id las consultas que queramos  

    });
    console.log(listado);document.getElementById
    return listado;
}


export const actualizarPersona = async(objeto,id)=>{
    const ref=doc(db,"personas",id);
    await updateDoc(ref,objeto)
}

export const eliminarPersona = async(id) =>{
    const ref = doc(db,"personas",id);
    await deleteDoc (ref);
}


