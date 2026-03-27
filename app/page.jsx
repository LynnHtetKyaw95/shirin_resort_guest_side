import Image from "next/image";
import bg from "@/public/bg.png";

const Page = () => {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
        className="object-cover blur-xs"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl mb-20 tracking-tight text-primary font-normal">
          Welcome to paradise.
        </h1>
        <a
          href="/cabins"
          className="bg-accent-300 px-8 py-6 text-primary text-lg font-semibold hover:bg-accent-400 transition-all duration-300"
        >
          Explore luxury cabins
        </a>
      </div>
    </main>
  );
};

export default Page;
