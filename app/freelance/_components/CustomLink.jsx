import Link from "next/link";

export default function CustomLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-white bg-black shadow-inner shadow-free_grey text-center px-8 py-3 rounded-full hover:bg-free_grey hover:text-txt_black border-[1px] border-white hover:border-txt_black transition-colors duration-300 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}
