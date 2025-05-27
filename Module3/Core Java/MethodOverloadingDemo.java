public class MethodOverloadingDemo  {
        // Method 1: Two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Method 2: Two doubles
    public static double add(double a, double b) {
        return a + b;
    }

    // Method 3: Three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        // Calling each overloaded method
        int sum1 = add(5, 10);           // Two integers
        double sum2 = add(3.5, 2.5);     // Two doubles
        int sum3 = add(1, 2, 3);         // Three integers

        // Displaying results
        System.out.println("Sum of 5 and 10 (int): " + sum1);
        System.out.println("Sum of 3.5 and 2.5 (double): " + sum2);
        System.out.println("Sum of 1, 2, and 3 (int): " + sum3);
    }

}
