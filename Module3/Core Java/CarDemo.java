class Car {
    String make;
    String model;
    int year;

    // Constructor to initialize the car object
    Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    void displayDetails() {
        System.out.println("Car Details:");
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("--------------------");
    }
}

public class CarDemo {
    public static void main(String[] args) {
        // Creating objects of Car
        Car car1 = new Car("Tesla", "Model S", 2022);
        Car car2 = new Car("Ford", "Mustang", 2021);

        // Calling the method to display details
        car1.displayDetails();
        car2.displayDetails();
    }
}
