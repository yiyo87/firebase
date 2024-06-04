import {registrarPersona,obtenerPersonas, actualizarPersona, eliminarPersona} from "./promesas.js";
window.addEventListener("load", ()=>{//espera que la pagina cargue
    document.getElementById("btnRegistrar").addEventListener("click",function(event){
        event.preventDefault();
    }); 
    document.getElementById("btnRegistrar").addEventListener("click",registrar);
    cargarDatos();
    document.getElementById("btnActualizar").addEventListener("click",actualizar);
})

const registrar = ()=>{
    //recupero elemento
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEdad = document.getElementById("edad")
    //recupero el valor del elemento
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vEdad = eEdad.value;
     //creo un objeto en base al elemento con los datos recuperados
    let objeto = {nombre:vNombre,apellido:vApellido,edad:vEdad};//{apellido:vApellido},{edad:vEdad},tengo que agregar eso mas dentro de mi archivohtml

    // envio a una funcion que registre
    console.log(objeto);

    registrarPersona(objeto).then(()=>{//el then funciona como un activador si se cumple la funcion cuando la promesa se cumple o se ejecuta
        alert("se registra con exito");
        cargarDatos();
    }).catch((error)=>{// es un activador cuando la promesa no se activa sale un error o mensaje de error 
        console.log(error);
    });
    
}

const cargarDatos = ()=>{
    //traer de las promesas todo lo registrado
    obtenerPersonas().then((personas) =>{
        console.log ("hola")
        console.log(personas)
        //cargarlo en la tabla del html
        let estructura = ""
        personas.forEach((p) =>{
            estructura += "<tr>"
            estructura += "<td>" +p.nombre+"</td>"
            estructura += "<td>" +p.apellido+"</td>"
            estructura += "<td>" +p.edad+"</td>"
            estructura += "<td><button id='UPD"+p.id+"'>actualizar</button></td>"
            estructura += "<td><button id='DEL"+p.id+"'>eliminar</button></td>"
            estructura +="</tr>";
            
        })
        document.getElementById("cuerpoTabla").innerHTML=estructura;
        personas.forEach((p)=>{
            let elemento = document.getElementById("UPD"+p.id);
            elemento.addEventListener("click",()=>{
                document.getElementById("UPDnombre").value = p.nombre;
                document.getElementById("UPDapellido").value = p.apellido;
                document.getElementById("UPDedad").value = p.edad;
                document.getElementById("btnActualizar").value = p.id
            });
            let btnEliminar = document.getElementById("DEL"+p.id);
            btnEliminar.addEventListener("click",()=>{
                if(confirm("desea eliminar a:\n"+p.nombre+""+p.apellido)){
                    console.log("vamos a eliminar")
                    eliminarPersona(p.id).then (()=>{
                        alert ("eliminaste con exito")
                        cargarDatos();
                    }).catch((e)=>{
                        console.log(e);
                    })

                }else{
                    console.log("cancelaste la eliminacion")
                }
            })
        })
    })
}
document.getElementById
const actualizar= ()=>{
   //recuperar campos del formulario
    //recupero elemento
    let eNombre = document.getElementById("UPDnombre");
    let eApellido = document.getElementById("UPDapellido");
    let eEdad = document.getElementById("UPDedad")
    //recupero el valor del elemento
    let vNombre = eNombre.value;
    let vApellido = eApellido.value;
    let vEdad = eEdad.value;
     //creo un objeto en base al elemento con los datos recuperados
    let objeto = {nombre:vNombre,apellido:vApellido,edad:vEdad};
   //creo un objeto
    console.log(objeto)
    let id = document.getElementById("btnActualizar").value;
   //envio el objeto y el id a las promesas
    document.getElementById("btnActualizar").disabled= "True";
    actualizarPersona(objeto,id).then(()=>{
    alert ("se actualiza con exito")
    cargarDatos()
    document.getElementById("btnActualizar").disabled= "";
    }).catch((e)=>{
    console.log(e);
    })
}
