//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
void main() {
    // Zadanie 1
    System.out.println("Ania");
    System.out.println("Bartek");
    System.out.println("Kasia");

    // Zadanie 2
    String imie = "Maciek";
    int rokUrodzenia = 2008;
    double liczba = 0.66;

    // Zadanie 3
    int obecnyRok = 2026;
    System.out.println("Mam na imię " + imie + ", mam " + (obecnyRok - rokUrodzenia) + " lat i będę pisać maturę za " + liczba + " roku.");
//zadanie 4
    Scanner scanner = new Scanner(System.in);

    System.out.println("Podaj temperaturę w stopniach Celsjusza:");
    double stopnie = scanner.nextDouble();

    double fahrenheit = 1.8 * stopnie + 32.0;

    System.out.println("Temperatura w Fahrenheitach: " + fahrenheit);

   //zadanie 5
    System.out.println("Podaj trzy boki trójkąta:");
    int bok1 = scanner.nextInt();
    int bok2 = scanner.nextInt();
    int bok3 = scanner.nextInt();

    int obwod = bok1 + bok2 + bok3;
    System.out.println("Obwód trójkąta wynosi: " + obwod);

    //zadanie 6
    scanner.nextLine();

    System.out.println("Podaj trzy słowa:");
    String slowo1 = scanner.nextLine();
    String slowo2 = scanner.nextLine();
    String slowo3 = scanner.nextLine();

    System.out.println(slowo3 + ", " + slowo2 + ", " + slowo1);

    //zadanie 7
    System.out.println("Podaj jedno słowo:");
    String wyraz = scanner.nextLine();

    System.out.println("Liczba znaków: " + wyraz.length());

    //zadanie 8
    int x = 5;
    int y = 2;

    double wynik = (double) x / y;
    System.out.println(wynik);
    //zadanie 9
    System.out.println("Podaj słowo do zamiany na wielkie litery:");
    String tekst = scanner.nextLine();

    System.out.println(tekst.toUpperCase());


}
