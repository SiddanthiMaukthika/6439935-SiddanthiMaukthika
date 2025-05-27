import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LambdaSortDemo {
    public static void main(String[] args) {
        List<String> fruits = Arrays.asList("Mango", "Apple", "Banana", "Cherry");

        // Sort using lambda expression
        Collections.sort(fruits, (a, b) -> a.compareToIgnoreCase(b));

        System.out.println("Sorted fruits:");
        fruits.forEach(System.out::println);
    }
}
