/*Sustituye /***por las instrucciones adecuadas que cumplan las operaciones 
y salidas indicadas en los comentarios.*/


interface Plane{
    model:string,
    npassengers:number
}

class HangarHash {   
    [index: string]: any
}


let myHangar:HangarHash = {};

myHangar['123Z']={
  model:'airbus',
  npassengers:200
}
myHangar['H789']={ 
  model:'boeing',
  npassengers:151
}

//console.log(Object.keys(myHangar));
let x = Object.keys(myHangar);
x.length;
let y = x.pop();

console.log(x+':'+myHangar['123Z'].model + '(' + myHangar['123Z'].npassengers + ')');
console.log(y+':'+myHangar['H789'].model + '(' + myHangar['H789'].npassengers + ')');

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

 