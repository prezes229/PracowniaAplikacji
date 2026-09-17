import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    // Zadanie 6
    System.out.println("\nZadanie 6");
    System.out.println("Podaj swoje imię:");
    String podaneImie = scanner.next();

    String mojeImie = "Maciek";

    if (podaneImie.equals(mojeImie)) {
    System.out.println("Twoje imię jest takie samo jak moje");
} else {
    System.out.println("Twoje imię jest inne niż moje");
}

