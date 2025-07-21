import { useQuery } from "@tanstack/react-query";
import ClientCard from "@/components/ui/client-card";
import { type Client } from "@shared/schema";

const clientNames = [
  "Akhil Infra Projects Pvt ltd",
  "Raja Construction",
  "Koya & Co Construction Ltd",
  "Mr. Asharaf Contractor",
  "Maruthi Construction",
  "Ujwala Infratech India Pvt Ltd",
  "R R Thulasi Builders Pvt Ltd",
  "Aiga Engineers Pvt ltd",
  "Jani Shree Corporate Services Pvt Ltd",
  "Clou Hi Tech Innovations Pvt ltd",
  "Future Fibres Engineering and Projects",
  "Larsen And Turbo Limited Construction ( L & T )",
  "TT K construction"
];

const Clients = () => {
  return (
    <div className="min-h-screen bg-#0a2348 flex flex-col items-center justify-start py-12">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-300">Clients</h1>
      <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientNames.map((name, idx) => (
          <div key={idx} className="flex items-center bg-transparent border border-blue-900 rounded-lg px-8 py-6 text-white text-lg font-semibold">
            <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-4"></span>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
