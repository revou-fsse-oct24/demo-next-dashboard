import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

interface ProductsSSRProps {
  products: Product[];
}

export default function ProductsSSR({ products }: ProductsSSRProps) {
  return (
    <Layout>
      <Head>
        <title>Products (SSR) - E-commerce Admin Dashboard</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-6">
          Products (Server-Side Rendered)
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-300 mb-2 h-12 overflow-hidden">
                  {product.description.slice(0, 60)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-400">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded">
                    {product.category.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
};
