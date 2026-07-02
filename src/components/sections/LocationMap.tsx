"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Train, Plane } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-32 bg-white text-[#10243E]" id="location">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-[#CDA85A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Strategic Connectivity
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              The Spiritual Epicenter.
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Perfectly situated on Chhata Govardhan Road, Shree Jee Vatika offers you divine peace without sacrificing modern connectivity. You are exactly in the center of the holy triangle.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#CDA85A]/30 transition-colors">
                <div className="bg-[#10243E] p-3 rounded-xl text-[#CDA85A]">
                  <Car size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">15 Minutes Drive</h4>
                  <p className="text-gray-500 text-sm">To Govardhan Parikrama, Radha Rani Mandir (Barsana), and Vrindavan Prem Mandir.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#CDA85A]/30 transition-colors">
                <div className="bg-[#10243E] p-3 rounded-xl text-[#CDA85A]">
                  <Navigation size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Massive Road Access</h4>
                  <p className="text-gray-500 text-sm">Directly connected to 100 ft. and 60 ft. pass roads, linking swiftly to the Yamuna Expressway.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#CDA85A]/30 transition-colors">
                <div className="bg-[#10243E] p-3 rounded-xl text-[#CDA85A]">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Future Proof</h4>
                  <p className="text-gray-500 text-sm">Positioned perfectly to benefit from the upcoming Airport Metro Project and Mathura Smart City developments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
              <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=27.6046,77.5303&zoom=11&size=800x800&maptype=roadmap&style=feature:all|element:geometry.fill|color:0xf4f4f4&style=feature:landscape.man_made|element:geometry.fill|color:0xececec&style=feature:poi|element:geometry.fill|color:0xd3eadb&style=feature:road|element:geometry.fill|color:0xffffff&style=feature:road|element:geometry.stroke|color:0xe0e0e0&style=feature:water|element:geometry.fill|color:0xa3ccff&key=YOUR_API_KEY_HERE')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
              
              {/* Fake Interactive Map Pins for aesthetics since API key is missing */}
              <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-[#10243E] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl mb-2 whitespace-nowrap border border-[#CDA85A]">
                  Shree Jee Vatika
                </div>
                <div className="text-[#CDA85A] drop-shadow-lg animate-bounce">
                  <MapPin size={40} fill="#10243E" />
                </div>
              </div>
              
              <div className="absolute inset-0 border-[8px] border-white/20 rounded-3xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
