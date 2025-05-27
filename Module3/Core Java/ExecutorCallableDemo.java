import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorCallableDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(5);

        List<Callable<String>> tasks = List.of(
            () -> "Task 1 done",
            () -> "Task 2 done",
            () -> "Task 3 done"
        );

        List<Future<String>> futures = executor.invokeAll(tasks);

        for (Future<String> f : futures) {
            System.out.println(f.get());
        }

        executor.shutdown();
    }
}
