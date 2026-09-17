import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    // Zadanie 1
    System.out.println("Zadanie 1");
    System.out.println("Podaj liczbę:");
    int liczba = scanner.nextInt();

    if (liczba % 3 == 0) {
    System.out.println("Liczba jest podzielna przez 3");
} else {
    System.out.println("Liczba nie jest podzielna przez 3");
}

// Zadanie 2
System.out.println("\nZadanie 2");
System.out.println("Podaj pierwszy bok:");
double bok1 = scanner.nextDouble();

System.out.println("Podaj drugi bok:");
double bok2 = scanner.nextDouble();

System.out.println("Podaj trzeci bok:");
double bok3 = scanner.nextDouble();

if (bok1 + bok2 > bok3 && bok1 + bok3 > bok2 && bok2 + bok3 > bok1) {
    System.out.println("Można zbudować trójkąt");
} else {
    System.out.println("Nie można zbudować trójkąta");
}