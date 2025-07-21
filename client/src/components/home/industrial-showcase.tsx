const IndustrialShowcase = () => {
  const showcaseItems = [
    {
      image: "/attached_assets/WhatsApp Image 2025-07-10 at 16.37.27_7dd6d74b.jpg",
      title: "Manufacturing",
      description: "Advanced production facilities"
    },
    {
      image: "/attached_assets/WhatsApp Image 2025-07-10 at 16.37.47_865b5666.jpg",
      title: "Quality Control",
      description: "Rigorous testing standards"
    },
    {
      image: "/attached_assets/WhatsApp Image 2025-07-10 at 16.37.47_aaed2203.jpg",
      title: "Infrastructure",
      description: "Modern industrial solutions"
    }
  ];

  return (
    <section className="py-20 bg-#0a2348">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Industrial Excellence</h2>
          <p className="text-white max-w-2xl mx-auto">
            State-of-the-art manufacturing facilities and quality control processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialShowcase;
