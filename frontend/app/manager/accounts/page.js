import { fetchAccounts } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default async function Accounts() {
    const accounts = await fetchAccounts();
    const accounts2 = [
        {
            id: 1,
            name: 'John Doe',
            balance: 'Dr. Smith',
        
        },
        
    ];

    return (
        <div className={styles.container}>
            <h2>Accounts</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account) => (
                        <tr key={account.id}>
                            <td>{account.name}</td>
                            <td>{account.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
