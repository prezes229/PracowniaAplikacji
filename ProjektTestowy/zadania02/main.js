import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);


// Zadanie 4
    System.out.println("\nZadanie 4");
    System.out.println("Podaj pierwszą liczbę:");
    double a = scanner.nextDouble();

    System.out.println("Podaj drugą liczbę:");
    double b = scanner.nextDouble();

    System.out.println("Podaj trzecią liczbę:");
    double c = scanner.nextDouble();

    double najwieksza = a;

    if (b > najwieksza) {
    najwieksza = b;
}

if (c > najwieksza) {
    najwieksza = c;
}

System.out.println("Największa liczba: " + najwieksza);
