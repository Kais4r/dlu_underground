import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  thumbnailImage: string;
};

export default function ProductCard(product: Product) {
  const discountPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;
  return (
    <div
      className="relative mt-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white"
      key={product._id}
    >
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href={`/pages/productDetails/${product._id}`}
      >
        <Image
          fill={true}
          className="object-cover"
          src={product.thumbnailImage} // Use the thumbnailImage
          alt="product thumbnail"
        />
        {product.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {product.discount}% OFF
          </span>
        )}
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl tracking-tight text-slate-900 line-clamp-1">
            {product.name}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <span className="text-3xl font-bold text-slate-900">
            ${discountPrice.toFixed(2)}
          </span>
          {product.discount && (
            <span className="text-sm text-slate-900 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
