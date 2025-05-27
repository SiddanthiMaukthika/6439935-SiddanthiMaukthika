public class VirtualThreadsDemo {
     public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();

        for (int i = 0; i < 100_000; i++) {
            Thread.startVirtualThread(() -> System.out.println("Virtual thread running"));
        }

        // Give some time for threads to complete
        Thread.sleep(2000);

        long end = System.currentTimeMillis();
        System.out.println("Time taken: " + (end - start) + " ms");
    }
}
