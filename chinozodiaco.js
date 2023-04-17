function cal(){
    let dia, mes, year;
    dia = parseInt (document.formulario.dia.value);
    mes = parseInt (document.formulario.mes.value);

//////////////////////SIGNO ZODIACO///////////////////////////////////////////////////

    var image = document.getElementById("imagen");
    if ((dia>=21&&mes==3)||(dia<=20&&mes==4)){
        document.getElementById("imagen").src="Aries.jpg";
    }
    
    if ((dia>=24&&mes==9)||(dia<=23&&mes==10)){
        document.getElementById("imagen").src="Libra.jpg";
    }   
    
    if ((dia>=21&&mes==4)||(dia<=21&&mes==5)){
        document.getElementById("imagen").src="Tauro.jpg";
    } 
    
    if ((dia>=24&&mes==10)||(dia<=20&&mes==11)){
        document.getElementById("imagen").src="Escorpio.jpg";
    }   
    
    if ((dia>=22&&mes==5)||(dia<=21&&mes==6)){
        document.getElementById("imagen").src="Gemenis.jpg";
    }   
    if ((dia>=23&&mes==11)||(dia<=21&&mes==12)){
        document.getElementById("imagen").src="Sagitario.jpg";
    }
    if ((dia>=21&&mes==6)||(dia<=23&&mes==7)){
        document.getElementById("imagen").src="Cancer.jpg";
    } 
    if ((dia>=22&&mes==12)||(dia<=20&&mes==1)){
        document.getElementById("imagen").src="Capricornio.jpg";
    }  
    if ((dia>=24&&mes==7)||(dia<=23&&mes==8)){
        document.getElementById("imagen").src="Libra.jpg";
    } 
    if ((dia>=21&&mes==1)||(dia<=19&&mes==2)){
        document.getElementById("imagen").src="Acuario.jpg";
    } 
    if ((dia>=24&&mes==8)||(dia<=23&&mes==9)){
        document.getElementById("imagen").src="Virgo.jpg";
    } 
    if ((dia>=20&&mes==8)||(dia<=20&&mes==3)){
        document.getElementById("imagen").src="Picis.jpg";
    } 

////////////////////////////////SIGNO CHINO///////////////////////////////////
    year = parseInt (document.formulario.year.value);
    resto = year % 12;
    switch (resto) {
        case 0: year = "Mono"; 
        document.getElementById("imagen1").src="Mono.jpg";
        break;
        case 1: year = "Gallo"; 
        document.getElementById("imagen1").src="Gallo.jpg";
        break;
        case 2: year = "Perro"; 
        document.getElementById("imagen1").src="Perro.jpg";
        break;
        case 3: year = "Cerdo";
        document.getElementById("imagen1").src="Cerdo.jpg";
        break;
        case 4: year = "Rata";
        document.getElementById("imagen1").src="Rata.jpg";
        break;
        case 5: year = "Buey"; 
        document.getElementById("imagen1").src="Buey.jpg";
        break;
        case 6: year = "Tigre"; 
        document.getElementById("imagen1").src="Tigre.jpg";
        break;
        case 7: year = "Conejo"; 
        document.getElementById("imagen1").src="Conejo.jpg";
        break;
        case 8: year = "Dragon"; 
        document.getElementById("imagen1").src="Dragon.jpg";
        break;
        case 9: year = "Serpiente"; 
        document.getElementById("imagen1").src="Serpiente.jpg";
        break;
        case 10: year = "Caballo"; 
        document.getElementById("imagen1").src="Caballo.jpg";
        break;
        case 11: year = "Cabra"; 
        document.getElementById("imagen1").src="Cabra.jpg";
        break;
    }

}
