interface Product {
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
];

export default demoProducts;
