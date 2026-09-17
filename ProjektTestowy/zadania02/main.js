import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);



// Zadanie 3
System.out.println("\nZadanie 3");
System.out.println("Podaj pierwszą liczbę:");
double liczba1 = scanner.nextDouble();

System.out.println("Podaj drugą liczbę:");
double liczba2 = scanner.nextDouble();

if (liczba1 > liczba2) {
    System.out.println("Największa liczba: " + liczba1);
} else {
    System.out.println("Największa liczba: " + liczba2);
}
