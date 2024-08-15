//import { fetchUsers } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default async function Users() {
    //const users = await fetchUsers();

    const users2 = [
        {
            id: 1,
            username: 'John Doe',
            role: 'Dr. Smith',
            email: '2024-08-15',
           
        },]

    return (
        <div className={styles.container}>
            <h2>Users</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users2.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
