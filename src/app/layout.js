import LodingImage from "@/app/componet/GetData/LodingImage";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
