import { X, ArrowLeft, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCart();

  const formatPrice = (price) => {
    const parsedPrice = parseFloat(price.replace("$", ""));
    return isNaN(parsedPrice) ? "0.00" : parsedPrice.toFixed(2);
  };

  const handleClearCart = () => {
    clearCart();
    onClose(); // Close cart after clearing
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-96 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col p-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <button
            onClick={onClose}
            className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
            <span>Back to Shop</span>
          </button>
          <button
            onClick={onClose}
            className="cursor-pointer text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length === 0 ? (
            <div className="mt-8 text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-lg border p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.name || item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ${formatPrice(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-gray-400 transition-colors hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="cursor-pointer rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span className="text-gray-700">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="cursor-pointer rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t pt-4">
          <div className="mb-4 flex justify-between">
            <span className="font-medium">Total:</span>
            <span className="font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="space-y-2">
            <button
              className="w-full cursor-pointer rounded-lg bg-rose-600 py-2 text-white transition-colors hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
            {cartItems.length > 0 && (
              <button
                onClick={handleClearCart}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-red-600 py-2 text-red-600 transition-colors hover:bg-red-50"
              >
                <Trash2 size={18} />
                Clear Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
