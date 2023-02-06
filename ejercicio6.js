const nombre = "environmental systems research institute";
const nombreMayuscula = nombre.split(" ").map(palabra => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}).join(" ");
console.log(nombreMayuscula);