import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="py-3 px-5 hover:bg-primary-900  hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary w-full">
      <ArrowRightOnRectangleIcon className="h-5 w-5 " />
      <span className="">Sign out</span>
    </button>
  );
}

export default SignOutButton;
