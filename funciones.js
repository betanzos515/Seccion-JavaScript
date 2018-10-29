
//function declaration

saludar('david','programador'); 
function saludar(nombre = 'desconocido', trabajo = 'no se sabe'){
    console.log(`Hola ${nombre} tu trabajo es: ${trabajo}`);
}

saludar();


//function Expression.


var suma = function(num1=1,num2=3){
    console.log(num1+num2);
}

suma(4,7);
//suma(); 


(function(tecnologia){
    console.log(`aqui estoy aprendiendo ${tecnologia}`);
})('javaScript');


//metodos como propiedad o metodos de propiedad

const musica = {
    //aqui podemos ver que estamos declarando una funcion o metodo dentro del objeto musica
    reproducir: function(cancion){
        console.log('reproduciendo la cancion : '+ cancion);
    },
    pausar: function(cancion){
        console.log('Pausado ...');
    }
}

musica.reproducir('Y al final');
musica.pausar();


//Funciones con retorno.

const resultado = function(a =0,b=0){
    return a+b;
}

console.log(resultado(5,3));

const saludo = saludar =>{
    console.log(saludar);
}

saludo("Que onda amigos");


//objet literal 
//object literal

var objetoLiteral = {
    primera:'primero',
    segundo:'segundo',
    tercero:'tercero'
}

console.log(objetoLiteral);

//notacion object constructor

function Tarea(nombre = 'Default',urgencia ='Default'){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea();





