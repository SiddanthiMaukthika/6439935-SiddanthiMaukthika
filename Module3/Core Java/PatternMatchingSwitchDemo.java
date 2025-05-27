public class PatternMatchingSwitchDemo {
    public static void checkType(Object obj) {
        // Enhanced switch with pattern matching
        String result = switch (obj) {
            case Integer i -> "It's an Integer with value " + i;
            case String s -> "It's a String: " + s;
            case Double d -> "It's a Double: " + d;
            case null -> "It's null!";
            default -> "Unknown type: " + obj.getClass().getSimpleName();
        };

        System.out.println(result);
    }

    public static void main(String[] args) {
        checkType(123);
        checkType("Hello");
        checkType(45.67);
        checkType(null);
        checkType(new java.util.Date());
    }
}
