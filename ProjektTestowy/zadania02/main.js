import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);


    // Zadanie 8
    System.out.println("\nZadanie 8");
    System.out.println("Podaj rok:");
    int rok = scanner.nextInt();

    if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0) {
    System.out.println("Rok jest przestępny");
} else {
    System.out.println("Rok nie jest przestępny");
}