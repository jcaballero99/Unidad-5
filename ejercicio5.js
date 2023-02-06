const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const mesesLargos = meses.filter(mes => mes.length > 7);

const mesesMayusculas = mesesLargos.map(mes => mes.toUpperCase());

const cantidadMeses = mesesMayusculas.length;

console.log(mesesMayusculas);
console.log('Cantidad de meses: ' + cantidadMeses);
