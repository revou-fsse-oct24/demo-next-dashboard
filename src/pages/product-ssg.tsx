import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { GetStaticProps } from "next";

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

interface ProductsPageProps {
  products: Product[];
  error?: string;
}

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const products = await res.json();

    return {
      props: {
        products,
      },
      // Revalidate every hour
      // Use revalidate means we already using ISR
      revalidate: 3600,
    };
  } catch (error) {
    // In production, you might want to handle this differently
    return {
      props: {
        products: [],
        error:
          error instanceof Error ? error.message : "Failed to fetch products",
      },
    };
  }
};

export default function Products({ products, error }: ProductsPageProps) {
  const handleImageError = (productId: number) => {
    // Since we're using SSG, we'll handle image errors locally without state
    const imageElement = document.querySelector(`#product-image-${productId}`);
    if (imageElement) {
      imageElement.classList.add("hidden");
      const fallback = document.querySelector(`#product-fallback-${productId}`);
      if (fallback) fallback.classList.remove("hidden");
    }
  };

  console.log("product", products);

  if (error) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-red-400">
          <p className="text-xl font-semibold mb-2">Error loading products</p>
          <p className="text-sm opacity-75">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Products - E-commerce Admin Dashboard</title>
        <meta
          name="description"
          content="View and manage your product catalog"
        />
      </Head>

      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">
            {products.length} products found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div id={`product-image-${product.id}`}>
                  <h1>image error</h1>
                  {/* <Image
                    src={product.images?.[0] || "/api/placeholder/400/320"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(product.id)}
                    priority={product.id <= 4}
                  /> */}
                </div>
                <div
                  id={`product-fallback-${product.id}`}
                  className="hidden absolute inset-0 bg-gray-100 flex items-center justify-center"
                >
                  <img
                    src="/api/placeholder/400/320"
                    alt="placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-lg font-semibold line-clamp-1">
                    {product.title}
                  </h2>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary-foreground whitespace-nowrap">
                    {product.category.name}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
