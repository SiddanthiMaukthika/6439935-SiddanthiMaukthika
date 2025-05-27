interface Playable {
    void play();
}

// Guitar class implements Playable
class Guitar implements Playable {
    public void play() {
        System.out.println("Strumming the guitar!");
    }
}

// Piano class implements Playable
class Piano implements Playable {
    public void play() {
        System.out.println("Playing the piano!");
    }
}


public class InterfaceDemo {
    public static void main(String[] args) {
        Playable guitar = new Guitar();
        Playable piano = new Piano();

        guitar.play();  // Output: Strumming the guitar!
        piano.play();   // Output: Playing the piano!
    }
}
