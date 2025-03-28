import Link from "next/link";

export default function CustomLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-white bg-free_purple shadow-inner shadow-free_grey  text-center px-3 py-3 rounded-full hover:bg-free_grey hover:text-free_purple duration-300 hover:border-free_purple/70 ${className}`}
    >
      {children}
    </Link>
  );
}
