const Highlights = () => {
  const items = [
    {
      icon: "🎁",
      title: "Custom Bouquets",
      text: "Tailored floral designs that reflect your style and the spirit of the occasion.",
    },
    {
      icon: "⏱️",
      title: "Fast Delivery",
      text: "Same-day delivery with real-time tracking and careful bloom handling.",
    },
    {
      icon: "🌿",
      title: "Eco Friendly",
      text: "Responsibly sourced flowers from sustainable farms with plastic-free packaging.",
    },
    {
      icon: "🎨",
      title: "Design Expertise",
      text: "Crafted by professional florists with an eye for harmony and detail.",
    },
    {
      icon: "💌",
      title: "Personalized Notes",
      text: "Include a handwritten note to make every gift even more meaningful.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      text: "Reach out any time — we're here to help you with your floral needs.",
    },
  ];

  return (
    <section
      id="highlights"
      className="max-w-maxAppWidth min-h-screen scroll-m-7 bg-rose-50 py-16 sm:py-24 md:scroll-m-10"
    >
      <div className="max-w-myapp mx-auto px-4 sm:px-10">
        <h2 className="font-parisienne text-subColor text-center text-3xl sm:text-4xl">
          Why Choose Us
        </h2>

        <p className="font-inter mx-auto mt-6 max-w-2xl text-center text-sm text-gray-700 sm:text-base">
          We're more than just flowers — we offer a full experience of elegance,
          convenience, and care.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-xl bg-white p-6 shadow-lg transition hover:shadow-2xl"
            >
              <div className="text-5xl">{icon}</div>
              <h3 className="font-inter text-subColor mt-4 text-lg font-semibold">
                {title}
              </h3>
              <p className="font-inter mt-2 text-center text-sm text-gray-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
