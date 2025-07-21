import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ClientCard from "@/components/ui/client-card";
import { type Client } from "@shared/schema";

const ClientsSection = () => {
  const { data: clients, isLoading } = useQuery<Client[]>({
    queryKey: ["/api/clients"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-#0a2348">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-red-500 mb-4">Our Clients</h2>
            <p className="text-white max-w-2xl mx-auto">
              Trusted by leading construction companies and infrastructure developers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featuredClients = clients?.slice(0, 6) || [];

  return (
    <section className="py-20 bg-#0a2348">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Our Clients</h2>
          <p className="text-white max-w-2xl mx-auto">
            Trusted by leading construction companies and infrastructure developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        <div className="text-center mt-0">
          <Link href="/clients">
            <Button className="bg-mercury-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold mt-2">
              Meet Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
