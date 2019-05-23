var num=1;
var imagenVisible=0;
var imagenVisibleA=10;
var which=10;




//guardas imagenes en el array
var cambia_imagen = new Array();
cambia_imagen[0] = "images/img1.jpg";
cambia_imagen[1] = "images/img2.jpg";
cambia_imagen[2] = "images/img3.jpg";
cambia_imagen[3] = "images/img4.jpg";
cambia_imagen[4] = "images/img5.jpg";
cambia_imagen[5] = "images/img6.jpg";
cambia_imagen[6] = "images/img7.jpg";
cambia_imagen[7] = "images/img8.jpg";
cambia_imagen[8] = "images/img9.jpg";
cambia_imagen[9] = "images/img10.jpg";



//----------------Funcion ramdon--------------------

function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    

    //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
    //como no son tantas, puede que alguna vez se repita 2 veces la misma
    //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
    
    
    function cambiar(){

    
            document.getElementById("ia").src = cambia_imagen[rand(10)-1];
             
        
    }


    function aleatorio() {
        var azar = Math.floor(Math.random() * cambia_imagen.length);
        document.getElementById("ia").src = cambia_imagen[azar];
    }




















//---------------------Funcion adelantar------------

    function adelanta(img)
	{
		imagenVisible++;
		if(imagenVisible>=cambia_imagen.length)
		{
			imagenVisible=-1;
		}
		document.getElementById("ia").src=cambia_imagen[imagenVisible];
		cargarSiguienteImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<cambia_imagen.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			document.getElementById("ia").src=cambia_imagen[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
    }
    














    



//---------------------Funcion retroceder------------
function atras(img)
	{
		imagenVisibleA--;
		if(imagenVisibleA>=cambia_imagen.length)
		{
			imagenVisibleA=-1;
		}
		document.getElementById("ia").src=cambia_imagen[imagenVisibleA];
		cargarAnteriorImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarAnteriorImagen()
	{
		if((imagenVisibleA+1)<cambia_imagen.length)
		{
			
			var imgTmp=new Image();
			document.getElementById("ia").src=cambia_imagen[imagenVisibleA-1];
		}
	}
 
	window.onload=function() {
		cargarAnteriorImagen();
    }
	
	
	
    function prev() {
		if(which>0 ){
			which--;
        document.getElementById("ia").src=cambia_imagen[which];
		}
		if (document.imagenVisibleA == 1){
			document.getElementById("anterior").disabled;
		}
	
	
	}