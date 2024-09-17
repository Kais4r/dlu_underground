import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Shop page</h1>
      <br />
      <Link
        href="/pages/addProduct"
        passHref
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Add a product
      </Link>

      <br />
      <br />
    </>
  );
}
