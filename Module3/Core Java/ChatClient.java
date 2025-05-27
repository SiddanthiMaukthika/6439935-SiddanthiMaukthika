import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class ChatClient {
     public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 12345);

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));

        String serverMsg, clientMsg;
        while (true) {
            System.out.print("You: ");
            clientMsg = userInput.readLine();
            out.println(clientMsg);
            if ("bye".equalsIgnoreCase(clientMsg)) break;

            serverMsg = in.readLine();
            System.out.println("Server: " + serverMsg);
            if ("bye".equalsIgnoreCase(serverMsg)) break;
        }

        socket.close();
    }
}
