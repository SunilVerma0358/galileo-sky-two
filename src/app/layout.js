import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://galileo-sky-two.vercel.app/",
  title: "GALILED SKY",
  description: "Beyond Entertainment",
  openGraph: {
    title: "GALILED SKY",
    description:
      "Galileo Sky, founded by industry experts, is redefining the gaming landscape. With a blend of groundbreaking technology and immersive entertainment, we create world-class gaming experiences and thriving digital economies that captivate and inspire",
    images: ["/assets/images/webp/meta-data.wepb"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> {children} </body>{" "}
    </html>
  );
}
