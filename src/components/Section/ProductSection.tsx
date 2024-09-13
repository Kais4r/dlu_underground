import demoProducts from "@/app/api/Product";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProductSection() {
  const demoNotSaleProducts = demoProducts.filter((item) => !item.onSale);
  return (
    <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold">Look Around</h2>
          <Button className="mt-4">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
          {demoNotSaleProducts.map((item) => (
            <div
              className="relative mt-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white "
              key={item.id}
            >
              <Link
                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <Image
                  fill={true}
                  className="object-cover"
                  src={item.image}
                  alt="product image"
                />
              </Link>
              <div className="mt-4 px-5 pb-5">
                <Link href="#">
                  <h5 className="text-xl tracking-tight text-slate-900 line-clamp-1">
                    {item.name}
                  </h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      ${item.price}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      ${item.salePrice}
                    </span>
                  </p>
                </div>
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
