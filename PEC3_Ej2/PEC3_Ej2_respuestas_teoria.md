### Ejercicio 2 – Primeros códigos en TypeScript (3 puntos)

- Sitúate sobre las variables a, b, c y d y observa cómo TypeScript infiere el tipo de todas las variables por ti, de tal modo que a es un número, b es un número, c es un objeto con una específica forma, y d es también un número.
- Modifica el código para conseguir que aparezca una línea roja de error en el IDE avisándote de que se está disparando un TypeError . Toma una captura de pantalla de tu resultado y haz que se muestre dentro del fichero PEC3_Ej2_respuestas_teoria.md (0.5 puntos). Dentro de este mismo documento explica por qué se ha producido esto y qué ventajas tiene.


! [ error de tipo typescript- PEC3 - Visual Studio Code] (1.jpg)


![error de tipo- PEC3 - Visual Studio Code.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b03f4da3-ec18-4b5d-9927-0e46461dd64c/2021-11-05_23_35_18-code1.ts_-_PEC3_-_Visual_Studio_Code.jpg)

![error1_ejercicio 2.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/782037a1-4f10-4c04-bba6-63a69778994c/error1_ejercicio_2.jpg)

Para conseguir que se mostrara un TypeError en el IDE se simuló una declaración explícita tipo boolean en la constante **a** y una declaración explícita tipo string en la variable b, la ventaja es que el lenguaje typescript infiere automáticamente con el tipo correcto de dato al que corresponde, y alerta a tiempo sobre estos posibles errores humanos evitándonos intentar hacer operaciones imposibles que al crecer el código sería más difícil de diagnosticar y corregir.


---
---
### Contesta las siguientes cuestiones:

1. **(1 punto) Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.**
    
    ```tsx
    const a = 1042;//const a: 1042
    const b = 'apples and oranges';//const b: "apples and oranges"
    const c = 'pineapples'; ///const c: "pineapples"
    const d = [true, true, false]; //const d: boolean[]
    const e = { type: 'ficus' };// const e: {type: string;}
    const f = [1, false]; // const f: (number | boolean)[]
    const g = [3];//const g: number[]
    const h = null;//const h: null
    ```
    
    - Al hacer clic sobre las constantes a,b y c ⇒ ts infiere su tipo tal cual están declaradas, esto no sucede si se definiera las variables con let, en ese caso si infiere el tipo de dato. Por ejemplo⇒ let a: number //  let b: string. La causa podría ser que son valores primitivos declarados con const(?).
    - La inferencia de ts al declarar variables con const en  valores no primitivos si muestra que tipo de datos tiene cada constante:
        
        **const d: boolean[]**  ///puesto que es un array con valores de true & false.
        
        **const e: {type: string;}** /// ya que es un objeto que contiene un valor tipo cadena.
        
        **const f: (number | boolean)[] //** Al ser una tupla, es decir una colección de valores de diversos tipos en este caso numérico y boleano.
        
        **const g: number[]//** Es un array numérico.
        
        **const h: null//** Ts infiere que es un dato tipo null.
---
        
2. **(1 punto) ¿Por qué se dispara cada uno de los errores del fichero code3.ts?**


    ```tsx
    const i: 3 = 3;
    i = 4; // Error TS2588 : Cannot assign to 'i' because it is a constant.ts(2588)
    
    const j = [1, 2, 3];
    j.push(4);
    j.push('5'); // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
    
    let k: never = 4; // Error TSTS2322: Type '4' is not assignable to type 'never'.
    
    let l: unknown = 4;
    let m = l * 2; // Error TS2571: Object is of type 'unknown'.
    ```
    
    - En la ***const***  ***i :*** el error se da por que el valor de una constante nunca puede ser redefinido, además debe ser declarado e iniciado en la misma línea.
    - En ***j.push('5');***  el error se da por que el tipo de valor inferido por Ts  es de tipo number, y en la línea 6 del código se quiere insertar un valor tipo string, sin haber establecido de antemano mediante una tupla que el array podrá almacenar variables mixtas.
    - En ***let k:*** El error se da por que el tipo ***never*** es más bien aplicado a funciones que lanzan excepciones o nunca retornan un valor por lo que a 4 no se le puede asignar un tipo de valor never.
    - ***let m = l * 2;***  El error se da por que la variable ***l*** esta definida anteriormente como de tipo 'unknown'  por lo que su tipo de dato no es numérico y no se podría realizar la operación.

---

3. **(0.5 puntos) ¿Cuál es la diferencia entre una clase y una interface en TypeScript?**
    
    En TypeScript la palabra reservada **interface** se la utiliza para definir los parámetros y el tipado en el código para invocarlo en las funciones.
    
    Aunque las interfaces tengan una declaración similar a la de una clase, éstas solo indican la lista de propiedades y métodos que contendrán, a diferencia de las clases, éstas propiedades no pueden tener valores y sus métodos tampoco pueden incluir código.
    
    Una clase puede extender otra clase y hereda así sus métodos, propiedades y puede implementar una o varias interfaces. La diferencia de las clases que se extienden y las interfaces es que las interfaces no contienen implementación  de sus métodos, por lo que una clase que implemente una interfaz debe escribir el código de todos los métodos que una interfaz especifica que debe contener.