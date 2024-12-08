import { Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white">
      <div className="px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Menu</h3>
            <ul className="space-y-2 font-light text-[14px]">
              <li><a href="#" className="text-sm hover:underline">New arrivals</a></li>
              <li><a href="#" className="text-sm hover:underline">Best sellers</a></li>
              <li><a href="#" className="text-sm hover:underline">Recently viewed</a></li>
              <li><a href="#" className="text-sm hover:underline">Popular this week</a></li>
              <li><a href="#" className="text-sm hover:underline">All products</a></li>
            </ul>
          </div>
          
          <div>
          <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Categories</h3>
          <ul className="space-y-2 font-light text-[14px]">
              <li><a href="#" className="text-sm hover:underline">Crockery</a></li>
              <li><a href="#" className="text-sm hover:underline">Furniture</a></li>
              <li><a href="#" className="text-sm hover:underline">Homeware</a></li>
              <li><a href="#" className="text-sm hover:underline">Plant pots</a></li>
              <li><a href="#" className="text-sm hover:underline">Chairs</a></li>
              <li><a href="#" className="text-sm hover:underline">Crockery</a></li>
            </ul>
          </div>
          
          <div>
          <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Our company</h3>
            <ul className="space-y-2 font-light text-[14px]">
              <li><a href="#" className="text-sm hover:underline">About us</a></li>
              <li><a href="#" className="text-sm hover:underline">Vacancies</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact us</a></li>
              <li><a href="#" className="text-sm hover:underline">Privacy</a></li>
              <li><a href="#" className="text-sm hover:underline">Returns policy</a></li>
            </ul>
          </div>
          
          <div>
          <h3 style={{ fontFamily: 'ClashDisplay' }} className="font-light text-base mb-4">Join our mailing list</h3>
            <div className="flex flex-col md:flex-row gap-4">
            <input
            type="email"
            placeholder="your@email.com"
            className="w-[509px] flex-1 py-3 px-4 text-sm bg-[#FFFFFF26] text-[#F9F9F9] border-none focus:outline-none placeholder:text-[#B3B3B3]"
          />
              <button className="py-3 px-8 bg-[#ffff] text-[#2A254B] text-sm font-medium">
            Sign up
          </button>


        
          
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#4E4D93] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm">Copyright 2022 Avion LTD</p>
            <div className="flex gap-6">
              <Linkedin className="w-6 h-6 cursor-pointer" />
              <Facebook className="w-6 h-6 cursor-pointer" />
              <Instagram className="w-6 h-6 cursor-pointer" />
              <Twitter className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;