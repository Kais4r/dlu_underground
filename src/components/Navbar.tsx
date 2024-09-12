import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          {/* <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              DLU Underground
            </span>
          </a> */}
          <Link href="/">DLU Underground</Link>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Navbar submenu */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/catalog"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
