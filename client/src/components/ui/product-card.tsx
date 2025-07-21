import { Card, CardContent } from "@/components/ui/card";
import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
      <CardContent className="p-6">
        <div className="mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
          />
        </div>
        <h3 className="text-lg font-semibold text-mercury-dark mb-2">{product.name}</h3>
        <p className="text-mercury-gray text-sm">{product.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
