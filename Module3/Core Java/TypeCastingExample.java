public class TypeCastingExample {
    public static void main(String[] args) {
        // Widening (int → double)
        int myInt = 42;
        double intToDouble = myInt; // implicit casting
        System.out.println("Integer to Double: " + intToDouble);

        // Narrowing (double → int)
        double myDouble = 99.99;
        int doubleToInt = (int) myDouble; // explicit casting
        System.out.println("Double to Integer: " + doubleToInt);
    }
    
}
