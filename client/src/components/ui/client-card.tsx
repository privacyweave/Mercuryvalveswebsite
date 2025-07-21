import { Card, CardContent } from "@/components/ui/card";
import { Building, Hammer, Factory, Wrench, Building2, Cog } from "lucide-react";
import { type Client } from "@shared/schema";

interface ClientCardProps {
  client: Client;
}

const getIconForIndustry = (industry: string) => {
  switch (industry.toLowerCase()) {
    case "infrastructure":
      return <Building className="h-5 w-5" />;
    case "construction":
      return <Hammer className="h-5 w-5" />;
    case "engineering":
      return <Cog className="h-5 w-5" />;
    case "contracting":
      return <Wrench className="h-5 w-5" />;
    case "technology":
      return <Factory className="h-5 w-5" />;
    default:
      return <Building2 className="h-5 w-5" />;
  }
};

const ClientCard = ({ client }: ClientCardProps) => {
  return (
    <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-mercury-blue rounded-full flex items-center justify-center">
            {getIconForIndustry(client.industry)}
          </div>
          <div>
            <h3 className="font-semibold text-mercury-dark">{client.name}</h3>
            <p className="text-mercury-gray text-sm">{client.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientCard;
