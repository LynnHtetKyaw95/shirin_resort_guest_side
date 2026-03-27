import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/action";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-3 px-5 hover:bg-primary-900  hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary w-full cursor-pointer">
        <ArrowRightOnRectangleIcon className="h-5 w-5 " />
        <span className="">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
