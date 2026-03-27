import { Quicksand } from "next/font/google";

import "./_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

const thisYear = new Date().getFullYear();

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
        className={`bg-primary-950 flex flex-col text-primary min-h-screen  ${quicksand.className}`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto text-primary w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <footer className="py-10 flex justify-center items-center bg-primary-800">
          <div>
            <p>2025 - {thisYear} Created by Zeph | &copy; The Shirin Resort</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
