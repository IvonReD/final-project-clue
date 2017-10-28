
var testArray =[];
for (var i = 0; i <= 10 ; i +=1){
  //agregar elementos del arreglo en la ultima posicion
  testArray.push(i);

}
console.log(testArray);
//eliminar el primer elemento del arreglo

testArray.shift();
console.log(testArray);


//eliminar el ultimo elemento del arreglo
testArray.pop();
console.log(testArray);

//Revertir los elementos del arreglo
testArray.reverse();
console.log(testArray);


/*------------------------------------------------------------*/
var testString = "abcde";
testString.charAt(2);
//c
/*Para obtener un caracter a partir del codigo Ascii utilizo el metodos
String.fromCharcode.
 Para obtener el codigo Ascii de un caracter utilizo string.charCodeAt(indice)*/
var codigo = testString.charAt(2)
console.log(codigo);
//99
String.fromCharCode(codigo);
//c
