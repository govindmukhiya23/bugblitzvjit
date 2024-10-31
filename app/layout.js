// app/layout.js
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bug Blitz Vjit</title>
        <link rel="icon" href="/title.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

