import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Factory, Shield } from "lucide-react";
import Counter from "@/components/ui/counter";

const About = () => {
  return (
    <div className="min-h-screen bg-#0a2348 flex flex-col items-center justify-start py-8">
      <div className="w-full flex justify-center mb-12">
        <img
          src="Images/HDPE Pipes.png"
          alt="HDPE Pipe and Fitting"
          className="max-w-4xl w-full h-auto rounded-xl shadow-2xl"
        />
      </div>
      {/* Add the image content section below the Managing Director */}
      <div className="w-full max-w-3xl mx-auto mt-12 bg-transparent">
        <div className="relative">
          <div className="absolute -top-4 left-0 w-32 h-2 bg-red-600 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-light text-white pt-8">
            Largest Manufacturer of <span className="font-bold text-red-500">Valves | Pipes & Fittings</span>
          </h2>
        </div>
        <div className="mt-2 mb-6">
          <div className="text-lg sm:text-xl font-bold text-white">
            Manufacturers | Traders | Importers
          </div>
        </div>
        <div className="text-white text-base sm:text-lg mb-4">
          <span className="font-bold text-white">A.N.D Valves and Castings Pvt. Ltd.</span>
          <span className="font-light text-white"> is a well-known Company in the valve and HDPE pipe industries. Since 2017 we have swiftly established ourselves as a dependable supplier of high-quality items.</span>
        </div>
        <div className="text-white text-sm sm:text-base mb-4">
          A.N.D Valves and Castings Private Limited specialises in supplying a comprehensive range of valves and HDPE pipes to a variety of industries and applications. Our <span className="font-bold text-white">Mercury Valves and Pipes</span> products are manufactured to meet the highest quality, durability, and performance standards. We have the right solution for your needs, whether you need <span className="font-bold text-white">Mercury valves</span> for fluid control or <span className="font-bold text-white">Mercury HDPE pipes</span> for effective fluid conveyance.
        </div>
        <div className="text-white text-sm sm:text-base mb-4">
          We recognise the importance of precision and dependability in valves and pipelines. As a result, we have a dedicated team of professionals who ensure that every product passes severe quality inspections before it reaches our clients. To offer goods that exceed expectations, we use reliable materials and advanced manufacturing techniques.
        </div>
        <div className="flex flex-row gap-16 mt-8">
          <div className="text-center">
            <Counter 
              end={35} 
              duration={2000} 
              className="text-5xl font-bold text-white"
            />
            <div className="text-gray-300 mt-2">Years<br/>Experience</div>
          </div>
          <div className="text-center">
            <Counter 
              end={865} 
              duration={2000} 
              className="text-5xl font-bold text-white"
            />
            <div className="text-gray-300 mt-2">Projects<br/>Completed</div>
          </div>
        </div>
      </div>
      {/* Vision & Mission Section */}
      <section className="w-full bg-black py-16 px-4 flex flex-col md:flex-row items-center justify-center mt-16 relative">
        <div className="flex-1 flex flex-col items-center justify-center text-center z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Vision</h2>
          <p className="text-white mb-2 max-w-2xl">Mercury’s vision is to be the premier supplier of valves and HDPE pipes in India, providing creative solutions that redefine industry norms.</p>
          <p className="text-white mb-8 max-w-2xl">We strive to provide great products and services that continually exceed consumer expectations. In all we do, we strive for quality, precision, and dependability.</p>

          <h2 className="text-4xl font-bold text-white mb-4 mt-8">
            Connecting <span className="text-mercury-blue">water</span> across the <span className="text-mercury-blue">globe</span>
          </h2>

          <h2 className="text-3xl font-bold text-white mb-4 mt-8">Mission</h2>
          <p className="text-white mb-2 max-w-2xl">Our mission is to continually offer products that meet or exceed industry standards.</p>
          <p className="text-white mb-2 max-w-2xl"><span className="font-bold">Mercury’s</span> purpose is to provide our customers with dependable and creative valve and HDPE pipe solutions while upholding the highest quality, customer satisfaction, and environmental responsibility standards.</p>
          <p className="text-white mb-2 max-w-2xl">We are dedicated to knowing and exceeding our clients’ expectations.<br />We endeavour to provide exceptional products and services that are valuable, dependable, and efficient.</p>
          <p className="text-white max-w-2xl">We persistently pursue perfection in our goods by using innovative manufacturing techniques, high-quality materials, and tight quality control systems.</p>
        </div>
        <div className="flex-1 flex justify-end items-center mt-12 md:mt-0 md:ml-8 z-10">
          <img
            src="/attached_assets/WhatsApp Image 2025-07-09 at 14.23.08_2c14cef6.jpg"
            alt="Vision and Mission"
            className="max-w-xl w-full h-auto rounded-xl shadow-2xl object-cover md:absolute md:right-40 md:top-1/2 md:-translate-y-1/2"
            style={{ right: '2rem' }}
          />
        </div>
      </section>
      {/* Map Section with Elementor-style container */}
      <section className="w-full flex flex-col items-center justify-center py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Our Presence Across India</h2>
        <div className="w-full e-con-full flex bg-[#0a2348] rounded-xl shadow-lg min-h-[350px] mb-12" style={{minHeight: '350px'}}>
          <img
            src="/attached_assets/image_1751887243293.png"
            alt="Our Presence Across India Map"
            className="max-w-2xl w-full h-auto object-contain rounded-xl mx-auto"
          />
        </div>
      </section>
      {/* City details grid below the map image */}
      <section className="w-full flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-5xl grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col items-start">
            <span className="inline-block mb-2"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="12" r="10" fill="#e3342f" /><circle cx="16" cy="12" r="6" fill="#e3342f" /><circle cx="16" cy="12" r="3" fill="#fff" /><circle cx="16" cy="28" r="2" fill="#e3342f" /></svg></span>
            <div className="text-white font-bold text-xl mb-2">Cochin</div>
            <div className="text-white text-base">Mercury Pipes And Valves LLP.<br/>40/4051- A, C New 67-11322 and 67-11324<br/>Revathika Complex, T.D Road<br/>Ernakulam, Kochi- 682 035.</div>
          </div>
          <div className="flex flex-col items-start">
            <span className="inline-block mb-2"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="12" r="10" fill="#e3342f" /><circle cx="16" cy="12" r="6" fill="#e3342f" /><circle cx="16" cy="12" r="3" fill="#fff" /><circle cx="16" cy="28" r="2" fill="#e3342f" /></svg></span>
            <div className="text-white font-bold text-xl mb-2">Punjab</div>
            <div className="text-white text-base">Kamboj International<br/>Lamba Pind Bye pass, Jalandhar<br/>Punjab-144009</div>
          </div>
          <div className="flex flex-col items-start">
            <span className="inline-block mb-2"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="12" r="10" fill="#e3342f" /><circle cx="16" cy="12" r="6" fill="#e3342f" /><circle cx="16" cy="12" r="3" fill="#fff" /><circle cx="16" cy="28" r="2" fill="#e3342f" /></svg></span>
            <div className="text-white font-bold text-xl mb-2">Telangana</div>
            <div className="text-white text-base">Varaha Metaliks Private Limited<br/>Flat No 203, 5-9-30/1/17/17A, US Residency<br/>Palace Colony, Basheerbagh, Himayathnagar<br/>Telangana-500063</div>
          </div>
          <div className="flex flex-col items-start">
            <span className="inline-block mb-2"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="12" r="10" fill="#e3342f" /><circle cx="16" cy="12" r="6" fill="#e3342f" /><circle cx="16" cy="12" r="3" fill="#fff" /><circle cx="16" cy="28" r="2" fill="#e3342f" /></svg></span>
            <div className="text-white font-bold text-xl mb-2">Hyderabad</div>
            <div className="text-white text-base">Chandrabahga Pipe<br/>20-1-534, Old Kabuttar Khana, Hyderabad<br/>Telangana-500064</div>
          </div>
          <div className="flex flex-col items-start">
            <span className="inline-block mb-2"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="12" r="10" fill="#e3342f" /><circle cx="16" cy="12" r="6" fill="#e3342f" /><circle cx="16" cy="12" r="3" fill="#fff" /><circle cx="16" cy="28" r="2" fill="#e3342f" /></svg></span>
            <div className="text-white font-bold text-xl mb-2">Kolkata</div>
            <div className="text-white text-base">AND Valves AND Casting India PVT LTD<br/>Taldanga, Chandannagar<br/>Hooghly-712136</div>
          </div>
        </div>
      </section>
      {/* Description below city details */}
      <div className="w-full max-w-5xl text-white text-base mb-12">
        <p className="mb-4">In the production of a wide variety of plumbing products. We have made a name for ourselves as the leading supplier in the sector by placing a high priority on quality, innovation, and sustainability.</p>
        <p className="mb-4">Galvanised pipes, mild steel, UPVC, PVC, and HDPE pipes are among the products that <span className="font-bold">Mercury Pipes and Valves</span> specialises in producing. In addition to meeting the complex requirements of government water development projects, our broad product selection also meets the needs of prestigious water-related businesses around the country.</p>
        <p>Motivated by an unwavering quest for perfection, we utilise state-of-the-art technology and follow strict quality control protocols to guarantee that every pipe satisfies the most exacting criteria for longevity and functionality. Our pipes are made to function best in any setting, whether they are being used for industrial applications, irrigation systems, or the transportation of potable water.</p>
      </div>
      {/* Footer Bar Section */}
      <div className="w-full bg-#0a2348 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-white text-sm mt-0">
        <div className="font-bold">A.N.D Valves and Castings Pvt. Ltd.</div>
        <div className="">© 2024 A.N.D Valves & Casting India Pvt. Ltd. All Right Reserved</div>
        <div className="md:text-right">Brand Management: <span className="text-mercury-orange">Privacy weave</span></div>
      </div>
    </div>
  );
};

export default About;
