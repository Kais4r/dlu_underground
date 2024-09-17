import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>My Account</h1>
      <Link href="/pages/order">My order</Link>
      {/* <Link href="/dashboard">Dashboard</Link> */}
    </>
  );
}
