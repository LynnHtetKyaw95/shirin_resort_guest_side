import { Quicksand } from "next/font/google";

import "./_styles/globals.css";
import Header from "./_components/Header";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Shirin Resort",
    default: "Welcome | The Shirin Resort",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Thailand, surrounded by beautiful mountains and dark forests",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`bg-primary-50 flex flex-col text-primary min-h-screen  ${quicksand.className}`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto text-accent-800 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
