import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutSection = () => {
  return (
    <section className="py-20 bg-#0a2348 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-mercury-red">About Mercury Valves</h2>
            <p className="text-white leading-relaxed">
              A.N.D Valves and Castings Pvt. Ltd. is a well-known Company in the valve and HDPE pipe industries. 
              Since 2017 we have swiftly established ourselves as a dependable supplier of high-quality items.
            </p>
            <p className="text-white leading-relaxed">
              A.N.D Valves and Castings Private Limited specialises in supplying a comprehensive range of valves and 
              HDPE pipes to a variety of industries and applications. Our <strong className="text-mercury-red">Mercury Valves and Pipes</strong> products 
              are manufactured to meet the highest quality, durability, and performance standards.
            </p>
            <p className="text-white leading-relaxed">
              We recognise the importance of precision and dependability in valves and pipelines. As a result, we have 
              a dedicated team of professionals who ensure that every product passes severe quality inspections before 
              it reaches our clients.
            </p>
            <Link href="/about">
              <Button className="bg-mercury-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold">
                Read More
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img
              src="/attached_assets/WhatsApp Image 2025-07-09 at 14.27.40_75ed91b6.jpg"
              alt="Industrial pipe manufacturing"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;