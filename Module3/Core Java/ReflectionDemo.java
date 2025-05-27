import java.lang.reflect.Method;

public class ReflectionDemo {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("Sample");

        System.out.println("Methods in " + clazz.getName() + ":");
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println("- " + method.getName() + " params: " + method.getParameterCount());
        }

        Object obj = clazz.getDeclaredConstructor().newInstance();
        Method m = clazz.getDeclaredMethod("sayHello", String.class);
        m.invoke(obj, "Mawa");
    }
}

class Sample {
    public void sayHello(String name) {
        System.out.println("Hello, " + name);
    }
}
