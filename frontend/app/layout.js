import '../styles/globals.css';
import Navbar from './manager/components/navbar/Navbar';
import Sidebar from './manager/components/Sidebar';
import Header from './manager/components/header/Header';

export default function RootLayout({ children }) {
    // Role should be set based on user authentication
    const role = 'manager'; // Example role, replace with dynamic role based on authentication

    return (
        <html>
            <body>
                {/* <Header /> */}
                {/* <Navbar /> */}
                <div style={{ display: 'flex' }}>
                    {/* <Sidebar role={role} /> */}
                    <main style={{ flex: 1 }}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
