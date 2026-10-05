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
