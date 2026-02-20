export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  description:string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Amante Noir Tee",
    price: 1999,
    image: "/products/noir.jpg",
    slug: "amante-noir-tee",
     description: "amante",
  },
  {
    id: 2,
    name: "Crimson Silence",
    price: 2499,
    image: "/products/crimson.jpg",
    slug: "crimson-silence",
    description: "amante",
  },
];
