import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);


    // Zadanie 9
    System.out.println("\nZadanie 9");
    System.out.println("Podaj wagę w kilogramach:");
    double waga = scanner.nextDouble();

    System.out.println("Podaj wzrost w metrach:");
    double wzrost = scanner.nextDouble();

    double bmi = waga / (wzrost * wzrost);

    System.out.println("BMI: " + bmi);

    if (bmi < 18.5) {
    System.out.println("niedowaga");
} else if (bmi <= 24.9) {
    System.out.println("waga prawidłowa");
} else {
    System.out.println("nadwaga");
}