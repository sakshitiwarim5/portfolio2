import Link from "next/link";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} <b>{OWNER_NAME}</b> | All rights reserved |{" "}
        <Link
          href={EXTRA_LINKS.source_code}
          className="font-semibold"
          target="_blank"
          rel="noreferrer noopener"
          title="View Source Code on GitHub"
        >
          View Source Code
        </Link>
      </small>
      <p className="text-xs">
        <b className="font-semibold">About this website:</b> built with React, Next.js,
        TypeScript, Tailwind CSS, Framer Motion, React Icons, EmailJS, and hosted on Vercel.
      </p>
    </footer>
  );
};

export default Footer;
