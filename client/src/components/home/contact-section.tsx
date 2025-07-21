import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const SERVICE_ID = 'service_igw4tp7';
  const TEMPLATE_ID = 'template_vdbymbq';
  const PUBLIC_KEY = 'VVujzPytFelvErBGd';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    }, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We will get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive"
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-#0a2348">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-500 mb-4">Get In Touch</h2>
          <p className="text-white max-w-2xl mx-auto">
            Contact us for all your valve and pipe requirements. We're here to help with expert solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-mercury-red rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Address</h3>
                <p className="text-white">
                  12th Km, SF No.:809/1A,
                  Palakkad Main Road, Madukkarai,
                  Coimbatore 641 105. Tamil Nadu, India.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-mercury-red rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Phone</h3>
                <p className="text-white">+91 9585528255</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-mercury-red rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-white">a.n.dvalves@gmail.com    |    andmercury.enquiry@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="text-white"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="text-white"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  required
                  className="text-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-mercury-red hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
