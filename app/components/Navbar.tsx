import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed w-full py-6 px-6 lg:px-12 flex items-center justify-between">
      <h2>CoverageFi</h2>
      <div className="hidden lg:flex gap-8 text-lg">
        <span>Option1</span>
        <span>Option2</span>
        <span>Option3</span>
      </div>
      <Link href="/signin" className="rounded-xl">
        <button className="px-4 py-1 text-lg rounded-xl cursor-pointer bg-accent hover:bg-accent/80 duration-200 font-medium">
          Sign In
        </button>
      </Link>
    </div>
  );
}
