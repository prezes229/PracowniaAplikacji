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