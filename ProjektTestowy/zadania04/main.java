import java.util.Random;
import java.util.Scanner;

void main() {

    // Zadanie 1

    int[] tablica1 = {1, 2, 3, 4, 5, 6};
    int[] tablica2 = {10, 20, 30, 40, 50};

    System.out.println("Zadanie 1:");

    for (int i = 0; i < tablica1.length; i += 2) {
        System.out.println(tablica1[i]);
    }

    for (int i = 0; i < tablica2.length; i += 2) {
        System.out.println(tablica2[i]);
    }
    // Zadanie 2

    int[] tablica3 = {5, 10, 2, 20, 7};

    int najwieksza = tablica3[0];

    for (int liczba : tablica3) {
        if (liczba > najwieksza) {
            najwieksza = liczba;
        }
    }

    System.out.println("Zadanie 2:");
    System.out.println("Największa liczba: " + najwieksza);

    // Zadanie 3

    String[] slowa = {"Ala", "Bartek", "Kasia", "Java"};

    System.out.println("Zadanie 3:");

    for (String slowo : slowa) {
        System.out.println(slowo.toUpperCase());
    }
// Zadanie 4

    Scanner scanner = new Scanner(System.in);

    String[] slowa2 = new String[5];

    System.out.println("Zadanie 4:");

    for (int i = 0; i < 5; i++) {
        System.out.println("Podaj słowo:");
        slowa2[i] = scanner.next();
    }

    for (int i = 4; i >= 0; i--) {

        for (int j = slowa2[i].length() - 1; j >= 0; j--) {
            System.out.print(slowa2[i].charAt(j));
        }

        System.out.println();
    }
// Zadanie 5

    int[] liczby = new int[8];

    System.out.println("Zadanie 5:");

    for (int i = 0; i < 8; i++) {
        System.out.println("Podaj liczbę:");
        liczby[i] = scanner.nextInt();
    }

    for (int i = 0; i < liczby.length - 1; i++) {

        for (int j = 0; j < liczby.length - 1; j++) {

            if (liczby[j] > liczby[j + 1]) {

                int pomocnicza = liczby[j];
                liczby[j] = liczby[j + 1];
                liczby[j + 1] = pomocnicza;
            }
        }
    }

    System.out.println("Posortowana tablica:");

    for (int liczba : liczby) {
        System.out.print(liczba + " ");
    }

    System.out.println();
    // Zadanie 6

    int[] liczby2 = new int[5];

    System.out.println("Zadanie 6:");

    for (int i = 0; i < 5; i++) {
        System.out.println("Podaj liczbę:");
        liczby2[i] = scanner.nextInt();
    }

    for (int liczba : liczby2) {

        int silnia = 1;

        for (int i = 1; i <= liczba; i++) {
            silnia = silnia * i;
        }

        System.out.println(liczba + "! = " + silnia);
    }

// Zadanie 7

    String[] tablica4 = {"Ala", "Bartek", "Kasia"};
    String[] tablica5 = {"Ala", "Bartek", "Kasia"};

    boolean takieSame = true;

    for (int i = 0; i < tablica4.length; i++) {

        if (!tablica4[i].equals(tablica5[i])) {
            takieSame = false;
        }
    }

    System.out.println("Zadanie 7:");

    if (takieSame) {
        System.out.println("Tablice są takie same");
    } else {
        System.out.println("Tablice nie są takie same");
    }