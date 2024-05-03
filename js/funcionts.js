// 4 formas de impresion
// alert("hola desde un archivo externo");
// console.log("hola desde la consola");
// document.write("hola desde la interfaz");
// Swal.fire(" hola desde SweetAlert2 ");
// Swal.fire({
    // title: "The Internet?",
    // text: "That thing is still around?",
    // icon: "error"
//   });

// variables y tipos de datos 
const pi  =3.14; //decimal
const pul = 2.54; 
var name  = "Merly Tarazona"; //string
let edad  = 17; //entero
var ver = true; //boolean
let fal = false; //boolean 

//operadores basicos
var suma = 5+2
console.log (suma);
var var_uno =10;
var var_dos =5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno%var_dos);

//operadores de comparacion 
//= asignacion 
//== comparacion (valor) 
//=== estrictamente comparado (valor y tipo de dato)
//> />= / </ <=

console.log("mi edad es "+ edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmButton:false,
       // imageHeight: 1500,
        imageAlt: "A tall image",
         timer: 2000
      });
}
function send_form(){
    let name =document.getElementById("name").value;
    let last_name =document.getElementById("last_name").value;
   
    if(name.length == 0 || last_name.length==0){
        Swal.fire({
            icon: "error",
            title: "cajas de texto vacia ",
            text: "alguna cja se encuentra vacia ",
           
          });
          if(name.length==0){
            document.getElementById("name").style.border="2px solid red";
          }else{
            document.getElementById("name").style.border="2px solid green";
          }
          if(last_name.length==0){
            document.getElementById("last_name").style.border="2px solid red";
          }else{
            document.getElementById("last_name").style.border="2px solid green";
          }

    }
    else{
        document.getElementById("print").innerText= "su nombre es "+ name+ " "+ "y su apellido es " +last_name;
    }
}
