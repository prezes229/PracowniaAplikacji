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


// Zadanie 5
System.out.println("\nZadanie 5");
System.out.println("Podaj numer miesiąca:");
int miesiac = scanner.nextInt();

switch (miesiac) {
    case 1:
        System.out.println("Styczeń");
        break;
    case 2:
        System.out.println("Luty");
        break;
    case 3:
        System.out.println("Marzec");
        break;
    case 4:
        System.out.println("Kwiecień");
        break;
    case 5:
        System.out.println("Maj");
        break;
    case 6:
        System.out.println("Czerwiec");
        break;
    case 7:
        System.out.println("Lipiec");
        break;
    case 8:
        System.out.println("Sierpień");
        break;
    case 9:
        System.out.println("Wrzesień");
        break;
    case 10:
        System.out.println("Październik");
        break;
    case 11:
        System.out.println("Listopad");
        break;
    case 12:
        System.out.println("Grudzień");
        break;
    default:
        System.out.println("Nieprawidlowy numer miesiaca");
}
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
// Zadanie 7
System.out.println("\nZadanie 7");
System.out.println("Podaj swój wiek:");
int wiek = scanner.nextInt();

boolean pelnoletni = wiek >= 18 ? true : false;

System.out.println("Czy jesteś pełnoletni? " + pelnoletni);


// Zadanie 8
System.out.println("\nZadanie 8");
System.out.println("Podaj rok:");
int rok = scanner.nextInt();

if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0) {
    System.out.println("Rok jest przestępny");
} else {
    System.out.println("Rok nie jest przestępny");
}
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


// Zadanie 10
System.out.println("\nZadanie 10");

double cena;
int liczbaRat;

do {
    System.out.println("Podaj cenę towaru od 100 do 10000 zł:");
    cena = scanner.nextDouble();

    if (cena < 100 || cena > 10000) {
        System.out.println("Nieprawidłowa cena.");
    }
} while (cena < 100 || cena > 10000);

do {
    System.out.println("Podaj liczbę rat od 6 do 48:");
    liczbaRat = scanner.nextInt();

    if (liczbaRat < 6 || liczbaRat > 48) {
        System.out.println("Nieprawidłowa liczba rat.");
    }
} while (liczbaRat < 6 || liczbaRat > 48);

double oprocentowanie;

if (liczbaRat >= 6 && liczbaRat <= 12) {
    oprocentowanie = 0.025;
} else if (liczbaRat <= 24) {
    oprocentowanie = 0.05;
} else {
    oprocentowanie = 0.10;
}

double rata = (cena + cena * oprocentowanie) / liczbaRat;

System.out.println("Miesięczna rata wynosi: " + rata + " zł");
// Zadanie 11
System.out.println("\nZadanie 11");
System.out.println("Prosty kalkulator");

System.out.println("Podaj pierwszą liczbę:");
double pierwsza = scanner.nextDouble();

System.out.println("Podaj symbol działania (+, -, *, /):");
char operacja = scanner.next().charAt(0);

System.out.println("Podaj drugą liczbę:");
double druga = scanner.nextDouble();

double wynik;

switch (operacja) {
    case '+':
        wynik = pierwsza + druga;
        System.out.println("Wynik: " + wynik);
        break;

    case '-':
        wynik = pierwsza - druga;
        System.out.println("Wynik: " + wynik);
        break;

    case '*':
        wynik = pierwsza * druga;
        System.out.println("Wynik: " + wynik);
        break;

    case '/':
        if (druga == 0) {
            System.out.println("Nie można dzielić przez zero");
        } else {
            wynik = pierwsza / druga;
            System.out.println("Wynik: " + wynik);
        }
        break;

    default:
        System.out.println("Błędny symbol działania");
}

scanner.close();
}
