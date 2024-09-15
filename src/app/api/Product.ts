/* interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  onSale: boolean;
  salePrice?: number;
}

const demoProducts: Product[] = [
  {
    id: 1,
    name: "Nike Air MX Super 2500 - Red",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 449,
    onSale: true,
    salePrice: 699,
  },
  {
    id: 2,
    name: "Item 2",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 369,
    onSale: true,
    salePrice: 699,
  },
  {
    id: 3,
    name: "Item 3",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 299,
    onSale: true,
    salePrice: 499,
  },
  {
    id: 4,
    name: "Item 4",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 249,
    onSale: true,
    salePrice: 449,
  },
  {
    id: 5,
    name: "Item 5",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199,
    onSale: true,
    salePrice: 349,
  },
  {
    id: 6,
    name: "Item 6",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 149,
    onSale: true,
    salePrice: 249,
  },
  {
    id: 7,
    name: "Item 7",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 99,
    onSale: true,
    salePrice: 199,
  },
  {
    id: 8,
    name: "Item 8",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 99,
    onSale: false,
  },
  {
    id: 9,
    name: "Item 9",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 149,
    onSale: false,
  },
  {
    id: 10,
    name: "Item 10",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 199,
    onSale: false,
  },
  {
    id: 11,
    name: "Item 11",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 249,
    onSale: false,
  },
  {
    id: 12,
    name: "Item 12",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 299,
    onSale: false,
  },
  {
    id: 13,
    name: "Item 13",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 349,
    onSale: false,
  },
  {
    id: 14,
    name: "Item 14",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 399,
    onSale: false,
  },
  {
    id: 15,
    name: "Item 15",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 449,
    onSale: false,
  },
  {
    id: 16,
    name: "Item 16",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 499,
    onSale: false,
  },
  {
    id: 17,
    name: "Item 17",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 549,
    onSale: false,
  },
  {
    id: 18,
    name: "Item 18",
    image:
      "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 375,
    onSale: false,
  },
]; */

export interface Product {
  productID: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  sku: string;
  stockQuantity: number;
  images: string[];
  thumbnailImage: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  color?: string[];
  size?: string[];
  material?: string;
  rating?: number;
  reviews?: string[];
  dateAdded: Date;
  dateModified: Date;
  status: "in stock" | "out of stock" | "discontinued";
  discount?: number;
  tags?: string[];
  supplierID?: string;
  warranty?: string;
  shippingDetails?: string;
}

const demoProducts: Product[] = [
  {
    productID: "1",
    name: "Product 1",
    description: "Product 1 description",
    price: 100,
    category: "Category 1",
    brand: "Brand 1",
    sku: "SKU 1",
    stockQuantity: 10,
    images: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    thumbnailImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    dateAdded: new Date(),
    dateModified: new Date(),
    status: "in stock",
  },
  {
    productID: "2",
    name: "Product 2",
    description: "Product 2 description",
    price: 150,
    category: "Category 2",
    brand: "Brand 2",
    sku: "SKU 2",
    stockQuantity: 8,
    images: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    thumbnailImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    dateAdded: new Date(),
    dateModified: new Date(),
    status: "in stock",
    discount: 20,
  },
  {
    productID: "3",
    name: "Product 3",
    description: "Product 3 description",
    price: 200,
    category: "Category 3",
    brand: "Brand 3",
    sku: "SKU 3",
    stockQuantity: 15,
    images: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    thumbnailImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    dateAdded: new Date(),
    dateModified: new Date(),
    status: "in stock",
    discount: 15,
  },
  {
    productID: "4",
    name: "Product 4",
    description: "Product 4 description",
    price: 250,
    category: "Category 4",
    brand: "Brand 4",
    sku: "SKU 4",
    stockQuantity: 12,
    images: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    thumbnailImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    dateAdded: new Date(),
    dateModified: new Date(),
    status: "in stock",
    discount: 10,
  },
  {
    productID: "5",
    name: "Product 5",
    description: "Product 5 description",
    price: 300,
    category: "Category 5",
    brand: "Brand 5",
    sku: "SKU 5",
    stockQuantity: 20,
    images: [
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    thumbnailImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
    dateAdded: new Date(),
    dateModified: new Date(),
    status: "in stock",
    discount: 5,
  },
];

export default demoProducts;
