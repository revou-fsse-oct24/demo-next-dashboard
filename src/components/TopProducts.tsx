import Image from "next/image";

const topProducts = [
  { name: "Wireless Earbuds", sales: 1234, image: "/placeholder.svg" },
  { name: "Smart Watch", sales: 987, image: "/placeholder.svg" },
  { name: "Laptop Stand", sales: 879, image: "/placeholder.svg" },
  { name: "Phone Case", sales: 765, image: "/placeholder.svg" },
];

export default function TopProducts() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-card-foreground">
        Top Products
      </h2>
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-card-foreground">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.sales} sales
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
