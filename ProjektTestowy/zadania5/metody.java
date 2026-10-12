public class Main {

    // Zadanie 1
    public static int mojWiek() {
        return 18;
    }
    // Zadanie 2
    public static String mojeImie() {
        return "TwojeImie";
    }
    // Zadanie 3
    public static void obliczDzialania(double a, double b) {
        System.out.println("Suma: " + (a + b));
        System.out.println("Roznica: " + (a - b));
        System.out.println("Iloczyn: " + (a * b));
    }

    // Zadanie 4
    public static boolean czyParzysta(int liczba) {
        return liczba % 2 == 0;
    }

    // Zadanie 5
    public static boolean czyPodzielnaPrzez3i5(int liczba) {
        return liczba % 3 == 0 && liczba % 5 == 0;
    }

    // Zadanie 6
    public static double doTrzeciejPotegi(double liczba) {
        return liczba * liczba * liczba;
    }

    // Zadanie 7
    public static double pierwiastek(double liczba) {
        return Math.sqrt(liczba);
    }

    // Zadanie 8
    public static boolean czyTrojkatProstokatny(
            double a, double b, double c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return false;
        }

        double[] boki = {a, b, c};
        java.util.Arrays.sort(boki);

        return boki[0] * boki[0] + boki[1] * boki[1]
                == boki[2] * boki[2];
    }

    // Zadanie 9
    public static char ostatniZnak(String tekst) {
        return tekst.charAt(tekst.length() - 1);
    }

    // Zadanie 10
    public static boolean czyPalindrom(String tekst) {
        tekst = tekst.toLowerCase();
        String odwrocony = new StringBuilder(tekst).reverse().toString();
        return tekst.equals(odwrocony);
    }

    // Zadanie 11
    public static int sumaTablicy(int[] liczby) {
        int suma = 0;

        for (int liczba : liczby) {
            suma += liczba;
        }

        return suma;
    }

    // Zadanie 12
    public static int zliczWystapienia(String tekst, char znak) {
        int licznik = 0;

        for (int i = 0; i < tekst.length(); i++) {
            if (tekst.charAt(i) == znak) {
                licznik++;
            }
        }

        return licznik;
    }

    public static void main(String[] args) {
        System.out.println(mojWiek());
        System.out.println(mojeImie());

        obliczDzialania(10, 5);

        System.out.println(czyParzysta(8));
        System.out.println(czyPodzielnaPrzez3i5(15));
        System.out.println(doTrzeciejPotegi(3));
        System.out.println(pierwiastek(25));
        System.out.println(czyTrojkatProstokatny(3, 4, 5));
        System.out.println(ostatniZnak("Witaj"));
        System.out.println(czyPalindrom("Kajak"));
        System.out.println(sumaTablicy(new int[]{1, 7, 20, 100}));
        System.out.println(zliczWystapienia("Ala ma kota", 'a'));
    }
}