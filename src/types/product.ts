// product.ts

export interface Product {
  _id: string;
  name: string;
  totalSale: number;
  totalSaleValue: number;
  description: string;
  price: number;
  category: string;
  brand: string;
  sku: string;
  stockQuantity: number;
  images: string[];
  thumbnailImage: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  color: string[];
  size: string[];
  material: string;
  rating: number;
  reviews: string[];
  dateAdded: Date;
  dateModified: Date;
  status: "in stock" | "out of stock" | "discontinued";
  discount: number;
  tags: string[];
  supplierID: string;
  warranty: string;
  shippingDetails: string;
}
