import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "AI Labs - Auth",
  description: "Firebase Auth with Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}