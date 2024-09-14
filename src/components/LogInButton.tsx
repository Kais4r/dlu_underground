import Link from "next/link";

export default function LogInButton() {
  return (
    <>
      <Link href="/pages/login" className="text-white">
        Log in
      </Link>
    </>
  );
}
