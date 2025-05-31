import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Rose Bouquet",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1549561896-139a5b0d1003?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Beautiful red roses arranged in a stunning bouquet",
    },
    {
      id: 2,
      name: "Tulip Collection",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Colorful tulips in a spring arrangement",
    },
    {
      id: 3,
      name: "Lily Mix",
      price: 45.99,
      image:
        "https://images.unsplash.com/photo-1566908829550-e6551b00979b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Elegant lilies in a mixed arrangement",
    },
    {
      id: 4,
      name: "Sunflower Bundle",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Bright and cheerful sunflowers",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="mb-4 text-gray-600">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
