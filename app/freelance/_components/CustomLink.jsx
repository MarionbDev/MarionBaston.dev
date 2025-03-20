import Link from "next/link";

export default function CustomLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-white bg-free_purple text-center px-2 py-3 rounded-2xl ${className}`}
    >
      {children}
    </Link>
  );
}
