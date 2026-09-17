import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    // Zadanie 7
    System.out.println("\nZadanie 7");
    System.out.println("Podaj swój wiek:");
    int wiek = scanner.nextInt();

    boolean pelnoletni = wiek >= 18 ? true : false;

    System.out.println("Czy jesteś pełnoletni? " + pelnoletni);
