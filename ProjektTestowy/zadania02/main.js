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
