import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

// ZADANIE 1
    System.out.println("ZADANIE 1");

    System.out.print("Podaj liczbe: ");
    int n = scanner.nextInt();

    for (int i = 1; i <= n; i++) {
    if (i % 2 != 0) {
    System.out.println(i);
}
}


// ZADANIE 2
System.out.println("ZADANIE 2");

System.out.print("Podaj liczbe: ");
n = scanner.nextInt();

int potega = 1;

while (potega <= n) {
    System.out.println(potega);
    potega = potega * 2;
}


// ZADANIE 3
System.out.println("ZADANIE 3");

int liczba;
int suma = 0;

System.out.println("Podawaj liczby. 0 konczy.");

do {
    liczba = scanner.nextInt();
    suma = suma + liczba;
} while (liczba != 0);

System.out.println("Suma = " + suma);


// ZADANIE 4
System.out.println("ZADANIE 4");

int min = 0;
int max = 0;
suma = 0;
int ilosc = 0;

System.out.println("Podawaj liczby. 0 konczy.");

while (true) {

    liczba = scanner.nextInt();

    if (liczba == 0) {
        break;
    }

    if (ilosc == 0) {
        min = liczba;
        max = liczba;
    }

    if (liczba < min) {
        min = liczba;
    }

    if (liczba > max) {
        max = liczba;
    }

    suma = suma + liczba;
    ilosc++;
}

System.out.println("Suma najmniejszej i najwiekszej: " + (min + max));
System.out.println("Srednia: " + (double) suma / ilosc);


// ZADANIE 5
System.out.println("ZADANIE 5");

Random random = new Random();

int wylosowana = random.nextInt(100) + 1;

do {
    System.out.print("Podaj liczbe: ");
    liczba = scanner.nextInt();

    if (liczba > wylosowana) {
        System.out.println("Podałeś za dużą wartość");
    } else if (liczba < wylosowana) {
        System.out.println("Podałeś za małą wartość");
    } else {
        System.out.println("Gratulacje");
    }

} while (liczba != wylosowana);


// ZADANIE 6
System.out.println("ZADANIE 6");

System.out.print("Podaj znak: ");
char znak = scanner.next().charAt(0);

System.out.print("Podaj x: ");
int x = scanner.nextInt();

System.out.print("Podaj y: ");
int y = scanner.nextInt();

System.out.print("Podaj a: ");
int a = scanner.nextInt();

System.out.print("Podaj b: ");
int b = scanner.nextInt();

// Przejscie do odpowiedniego wiersza
for (int i = 1; i < y; i++) {
    System.out.println();
}

for (int i = 1; i <= b; i++) {

// Przejscie do odpowiedniej kolumny
    for (int j = 1; j < x; j++) {
        System.out.print(" ");
    }

// Rysowanie prostokata
    for (int j = 1; j <= a; j++) {
        System.out.print(znak);
    }

    System.out.println();
}


// ZADANIE 7
System.out.println("ZADANIE 7");

System.out.print("Podaj wysokosc choinki: ");
n = scanner.nextInt();

for (int i = 1; i <= n; i++) {

    for (int j = 1; j <= n - i; j++) {
        System.out.print(" ");
    }

    for (int j = 1; j <= 2 * i - 1; j++) {
        System.out.print("*");
    }

    System.out.println();
}


// ZADANIE 8
System.out.println("ZADANIE 8");

System.out.print("Podaj liczbe: ");
n = scanner.nextInt();

int silnia = 1;

for (int i = 1; i <= n; i++) {
    silnia = silnia * i;
}

System.out.println("Silnia = " + silnia);


// ZADANIE 9
System.out.println("ZADANIE 9");

System.out.print("Podaj slowo: ");
String slowo = scanner.next();

boolean palindrom = true;

for (int i = 0; i < slowo.length() / 2; i++) {

    if (slowo.charAt(i) != slowo.charAt(slowo.length() - 1 - i)) {
        palindrom = false;
        break;
    }
}

if (palindrom) {
    System.out.println("Podane slowo jest palindromem.");
} else {
    System.out.println("Podane slowo nie jest palindromem.");
}


// ZADANIE 10
System.out.println("ZADANIE 10");

petlaGlowna:
    for (int i = 1; i <= 10; i++) {

    if (i % 2 != 0) {
        continue;
    }

    for (int j = 1; j <= 10; j++) {

        if (j > i) {
            continue petlaGlowna;
        }

        System.out.println(j);
    }
}

scanner.close();
}
}