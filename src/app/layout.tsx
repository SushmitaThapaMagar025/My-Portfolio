// src/app/layout.tsx
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import "../app/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
