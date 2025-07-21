const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-#0a2348">
      {/* Hero Section */}
      <section className="bg-#0a2348 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-red-500">Infrastructure</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our main manufacturing facility is strategically located in Coimbatore, Tamil Nadu, spanning over 5 acres. This central location enables us to streamline production and distribution processes effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-500 mb-6">Manufacturing Facility</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-white leading-relaxed">
              <p>
                <strong>Location:</strong> Our main manufacturing facility is strategically located in Coimbatore, Tamil Nadu, spanning over 5 acres. This central location enables us to streamline production and distribution processes effectively.
              </p>
              <p>
                <strong>Production Capacity:</strong> Equipped with advanced machinery and technology, our facility has the capacity to produce a wide range of products including HDPE Pipes, PVC Pipes, OPVC Pipes, and various house connections.
              </p>
              <p>
                We utilize the latest innovations in pipe manufacturing, ensuring precision, durability, and compliance with international standards. Our automated systems and quality control measures guarantee consistent product excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HDPE Pipes Manufacturing Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-red-500 mb-6">HDPE Pipes Manufacturing</h3>
          </div>
          <div className="flex flex-col items-center gap-12">
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7421.jpg"
              alt="HDPE Manufacturing Process 1"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7428.jpg"
              alt="HDPE Manufacturing Process 2"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7430.jpg"
              alt="HDPE Manufacturing Process 3"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7434.jpg"
              alt="HDPE Manufacturing Process 4"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ductile Iron Pipes Manufacturing Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-red-500 mb-6">Ductile Iron Pipes Manufacturing</h3>
          </div>
          <div className="flex flex-col items-center gap-12">
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7432.jpg"
              alt="Ductile Iron Manufacturing Process 1"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7438.jpg"
              alt="Ductile Iron Manufacturing Process 2"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
            <img
              src="https://mercuryvalves.in/wp-content/uploads/2024/06/IMG_7487.jpg"
              alt="Ductile Iron Manufacturing Process 3"
              className="rounded-lg shadow-lg max-w-3xl w-full h-[28rem] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;