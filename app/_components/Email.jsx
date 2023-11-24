import Link from "next/link";

export default function Email({ text, logo }) {
  const emailAddress = "marionbaston84@gmail.com";

  return (
    <>
      <Link href={`mailto:${emailAddress}`} aria-labelledby="contact-me">
        <p>
          {text} {logo}
        </p>
      </Link>
    </>
  );
}
