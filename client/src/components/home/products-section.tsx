import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { type Product } from "@shared/schema";

const ProductsSection = () => {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products?.slice(0, 8) || [];

  if (isLoading) {
    return (
      <section className="py-20 bg-#0a2348 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mercury-red mb-4">Our Products</h2>
            <p className="text-white max-w-2xl mx-auto">
              Comprehensive range of high-quality valves, pipes, and <br />fittings for various industrial applications   
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-#0a2348 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-mercury-red mb-4">Our Products</h2>
          <p className="text-white max-w-2xl mx-auto">
            Comprehensive range of high-quality valves, pipes, and<br />fittings for various industrial applications
          </p>
          <Link href="/products">
            <Button className="bg-mercury-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold mt-6">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;