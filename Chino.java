import java.util.Scanner;
 
public class HoroscopoChino {
 
    public static void main(String[] args) {
        String horoscopo = "";
        int anyo = leerNumEntero("Introduce el año en el que naciste: ");
        int resto = anyo % 12;
        switch (resto) {
            case 0: horoscopo = "Mono"; break;
            case 1: horoscopo = "Gallo"; break;
            case 2: horoscopo = "Perro"; break;
            case 3: horoscopo = "Cerdo"; break;
            case 4: horoscopo = "Rata"; break;
            case 5: horoscopo = "Buey"; break;
            case 6: horoscopo = "Tigre"; break;
            case 7: horoscopo = "Conejo"; break;
            case 8: horoscopo = "Dragon"; break;
            case 9: horoscopo = "Serpiente"; break;
            case 10: horoscopo = "Caballo"; break;
            case 11: horoscopo = "Cabra"; break;
        }
 
        System.out.printf("%nHas nacido en el año %d, te corresponde el signo %s en el horoscopo chino.",
                            anyo, horoscopo);
    }   
 
    private static int leerNumEntero(String s){
        Scanner teclado = new Scanner(System.in);
        System.out.print(s);
        int num = teclado.nextInt();
        teclado.close();
        return num;
    }
}