"use client";

const Error = ({ error, reset }) => {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold text-primary">
        Something went wrong!
      </h1>
      <p className="text-lg text-red-600">{error.message}</p>

      <button
        className="cursor-pointer inline-block bg-accent-300 text-primary-800 px-6 py-3 text-lg hover:bg-accent-500 duration-300 transition-all"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
};

export default Error;
