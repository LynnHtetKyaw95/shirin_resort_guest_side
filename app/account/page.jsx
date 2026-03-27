import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

const page = async () => {
  const session = await auth();

  return (
    <h2 className="font-semibold text-2xl text-primary mb-7">
      Welcome, <span className="text-accent-500">{session.user.name}</span>
    </h2>
  );
};
export default page;
