import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

public class JdbcConnectionDemo {
     public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb"; // Adjust port/db
        String user = "root";
        String pass = "your_password";

        try {
            // Load driver (optional for modern JDBC)
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conn = DriverManager.getConnection(url, user, pass);

            Statement stmt = (Statement) conn.createStatement();
            ResultSet rs = ((java.sql.Statement) stmt).executeQuery("SELECT id, name FROM students");

            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
            }

            rs.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
