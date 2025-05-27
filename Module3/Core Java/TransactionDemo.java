import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TransactionDemo {
    private Connection conn;

    public TransactionDemo(Connection conn) {
        this.conn = conn;
    }

    public void transferMoney(int fromAccount, int toAccount, double amount) throws SQLException {
        try {
            conn.setAutoCommit(false);

            String debitSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            String creditSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";

            try (PreparedStatement debit = conn.prepareStatement(debitSql);
                 PreparedStatement credit = conn.prepareStatement(creditSql)) {

                debit.setDouble(1, amount);
                debit.setInt(2, fromAccount);
                debit.executeUpdate();

                credit.setDouble(1, amount);
                credit.setInt(2, toAccount);
                credit.executeUpdate();

                conn.commit();
                System.out.println("Transfer successful");
            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Transfer failed, rolled back");
                throw e;
            } finally {
                conn.setAutoCommit(true);
            }
        } catch (SQLException e) {
            throw e;
        }
    }
}
