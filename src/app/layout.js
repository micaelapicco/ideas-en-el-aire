import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ideas en el Aire",
  description: "Escuchá Ideas en el Aire en vivo por radio Quilpo",
  keywords: [
    "Radio",
    "San Marcos Sierras",
    "Radio en vivo",
    "Radio Quilpo",
    "San Marcos",
    "Córdoba",
    "Argentina",
    "Radio argentina",
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar>
          {children}
        </Navbar>
      </body>
    </html>
  );
};

export default RootLayout;
