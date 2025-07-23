import Link from "next/link";

export default function CustomLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-white bg-custom-radial shadow-inner shadow-free_grey  text-center px-8 py-3 rounded-full hover:bg-custom-grey  hover:text-free_purple transition-colors duration-700 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}
