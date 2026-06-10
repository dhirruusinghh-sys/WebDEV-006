function ProductCard() {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Bag Image */}
      <div className="h-72 bg-gray-100 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-sm text-blue-500 font-medium uppercase">
          {product.category}
        </span>

        <h2 className="mt-2 text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 text-gray-600 text-sm">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

          <div className="text-yellow-500 font-semibold">
            ⭐ {product.rating.rate}
            <span className="text-gray-500 text-sm ml-1">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;