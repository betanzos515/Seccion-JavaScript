const numero1 = 30,
      numero2 = "20",
      numero3 = 20.20,
      numero4 = -3,
      numero5 = 20;


    console.log(numero1);
    console.log(numero2);

    let resultado;
    console.log(resultado);
    //sumas 

    resultado = numero1 + numero5;

    //resta
    resultado = numero1-numero5;
    //multiplicar
    resultado = numero1* numero5;
    resultado = numero1/numero5;

    console.log(resultado);

    let dato;
    dato =Number("20");
    dato = Number("-10.20");
    dato = Number(true);
    dato = Number(false);
    dato = Number(null);
    dato = Number("Hola Mundo");
    dato = Number([1,2,3,4]);


    dato = parseFloat(10.54);
    dato = parseInt(10.54);

    console.log(dato);

    //toFixed nos permite elegir el numero
    //de decimales que manejaremos en una sifra

    let num1 = "10120180.1021082812";
    let num2 = 10294294859238.2385820203948;

    //estamos convirtiendo a valor numerico y eligiendo el numero de decimales que se tomarán en cuenta.
    console.log(Number(num1).toFixed(2));
    console.log(num2.toFixed(10));

    let dato1 = 98475638472;
    let year = 1985;

    console.log(String(dato1));
    console.log(String(year));

    //objetos en javaScript

    //Object Literal 
    const persona = {
        nombre:'juan',
        apellido:'De la Torre',
        edad:80,
        trabajo:true,
        musica:['Trance','Rock','Grunge'],
        hogar : {
            ciudad:'Oaxaca',
            pais:'Mexico'
        }
    }

    console.log(persona.nombre + " "+ persona.trabajo+" "+persona.hogar.pais);
    console.log(persona);

    console.log(persona['nombre']+persona['hogar']['pais']);
