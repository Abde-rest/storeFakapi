import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container px-2 sm:px-5  m-auto bg-black text-white ">
        {children}
      </body>
    </html>
  );
}
