import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { productsData, productCategories, Product } from "@/data/products";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Handle URL parameters for category selection
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam));
    }
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProducts = productsData.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      searchTerm === "" ||
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      (product.subcategory &&
        product.subcategory.toLowerCase().includes(searchLower));

    // Exclude a product named exactly 'M.S Pipes & Fittings' when viewing the main category
    if (selectedCategory === "M.S Pipes & Fittings" && product.name === "M.S Pipes & Fittings") {
      return false;
    }

    // Special logic for Fittings subcategory
    if (selectedCategory === "Fittings") {
      // Get the parent category from the expandedCategories state
      // (since the sidebar expands the parent before subcategory is selected)
      const parentCategory = expandedCategories.find(cat =>
        ((productCategories as any)[cat]?.subcategories || []).includes("Fittings")
      );
      if (parentCategory === "DI, CI Pipes & Fittings") {
        // Exclude M.S Fittings
        return (
          product.category === "DI, CI Pipes & Fittings" &&
          product.subcategory === "Fittings" &&
          product.name !== "M.S Fittings" &&
          matchesSearch
        );
      }
      if (parentCategory === "M.S Pipes & Fittings") {
        // Only show M.S Fittings
        return (
          product.category === "M.S Pipes & Fittings" &&
          product.subcategory === "Fittings" &&
          product.name === "M.S Fittings" &&
          matchesSearch
        );
      }
    }

    if (selectedCategory === "all") {
      return matchesSearch;
    }

    const matchesCategory = product.category === selectedCategory;
    const matchesSubcategory = (product.subcategory || "") === selectedCategory;

    let isSubcategoryOfSelected = false;
    try {
      const categoryConfig = (productCategories as any)[selectedCategory];
      isSubcategoryOfSelected =
        categoryConfig?.subcategories?.includes(product.category) || false;
    } catch (e) {
      isSubcategoryOfSelected = false;
    }

    let isParentOfProductCategory = false;
    try {
      const productCategoryConfig = (productCategories as any)[
        product.category
      ];
      isParentOfProductCategory =
        productCategoryConfig?.parent === selectedCategory;
    } catch (e) {
      isParentOfProductCategory = false;
    }

    return (
      (matchesCategory ||
        matchesSubcategory ||
        isSubcategoryOfSelected ||
        isParentOfProductCategory) &&
      matchesSearch
    );
  });

  return (
    <div className="min-h-screen bg-#0a2348">
      {/* Hero Section */}
      <div className="bg-#0a2348 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Mercury Valves Products</h1>
          <p className="text-xl mb-8">
            Comprehensive range of valves, pipes, and fittings for industrial
            applications
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-white placeholder-gray-400 bg-transparent border border-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 bg-white rounded-lg shadow-lg p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Product Categories
            </h3>

            <button
              onClick={() => setSelectedCategory("all")}
              className={`w-full text-left px-4 py-3 mb-2 rounded-lg hover:bg-gray-100 transition-colors ${
                selectedCategory === "all"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "text-gray-700"
              }`}
            >
              All Products
            </button>

            {Object.entries(productCategories).map(
              ([categoryName, categoryData]) => {
                if ("parent" in categoryData && categoryData.parent)
                  return null;

                return (
                  <div key={categoryName} className="mb-2">
                    <div className="flex items-center">
                      <button
                        onClick={() => setSelectedCategory(categoryName)}
                        className={`flex-1 text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors ${
                          selectedCategory === categoryName
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : "text-gray-700"
                        }`}
                      >
                        {categoryName}
                      </button>
                      {categoryData.subcategories.length > 0 && (
                        <button
                          onClick={() => toggleCategory(categoryName)}
                          className="p-2 text-gray-500 hover:text-gray-700"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              expandedCategories.includes(categoryName)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {expandedCategories.includes(categoryName) &&
                      categoryData.subcategories.length > 0 && (
                        <div className="ml-4 mt-2 space-y-1">
                          {categoryData.subcategories
                            .filter((subcategory: string) => subcategory !== categoryName)
                            .map((subcategory: string) => {
                              const subCategoryData = (
                                productCategories as any
                              )[subcategory];
                              const hasSubSubcategories =
                                subCategoryData &&
                                subCategoryData.subcategories &&
                                Array.isArray(subCategoryData.subcategories) &&
                                subCategoryData.subcategories.length > 0;

                              return (
                                <div key={subcategory} className="space-y-1">
                                  <div className="flex items-center">
                                    <button
                                      onClick={() =>
                                        setSelectedCategory(subcategory)
                                      }
                                      className={`flex-1 text-left px-3 py-2 text-sm rounded hover:bg-gray-50 transition-colors ${
                                        selectedCategory === subcategory
                                          ? "text-red-600 font-medium"
                                          : "text-gray-600 hover:text-red-600"
                                      }`}
                                    >
                                      {subcategory}
                                    </button>
                                    {hasSubSubcategories && (
                                      <button
                                        onClick={() =>
                                          toggleCategory(subcategory)
                                        }
                                        className="p-1 text-gray-400 hover:text-gray-600"
                                      >
                                        <ChevronDown
                                          className={`w-3 h-3 transition-transform ${
                                            expandedCategories.includes(
                                              subcategory,
                                            )
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                    )}
                                  </div>

                                  {expandedCategories.includes(subcategory) &&
                                    hasSubSubcategories && (
                                      <div className="ml-4 space-y-1">
                                        {subCategoryData.subcategories.map(
                                          (subSubcategory: string) => (
                                            <button
                                              key={`${subcategory}-${subSubcategory}`}
                                              onClick={() =>
                                                setSelectedCategory(
                                                  subSubcategory,
                                                )
                                              }
                                              className={`block w-full text-left px-3 py-1 text-xs rounded hover:bg-gray-50 transition-colors ${
                                                selectedCategory ===
                                                subSubcategory
                                                  ? "text-red-600 font-medium bg-red-50"
                                                  : "text-gray-500 hover:text-red-600"
                                              }`}
                                            >
                                              {subSubcategory}
                                            </button>
                                          ),
                                        )}
                                      </div>
                                    )}
                                </div>
                              );
                            },
                          )}
                        </div>
                      )}
                  </div>
                );
              },
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {selectedCategory === "all" ? "All Products" : selectedCategory}
              </h2>
              <span className="text-white">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-4">
                      <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {product.subcategory || product.category}
                        </Badge>
                        <h3 className="font-semibold text-base text-gray-900 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or select a different category
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-#0a2348 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Our team of experts can help you find the perfect industrial
            solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
