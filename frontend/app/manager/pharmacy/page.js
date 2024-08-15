//import { fetchPharmacyItems } from '../../../utils/api';
import styles from '../../../styles/manager.css';

export default async function Pharmacy() {
    //const items = await fetchPharmacyItems();

    const items2 = [
        {
            id: 1,
            name: 'John Doe',
            quantity: 'Dr. Smith',
            price: '2024-08-15',
           
        },]

    return (
        <div className={styles.container}>
            <h2>Pharmacy</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items2.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
