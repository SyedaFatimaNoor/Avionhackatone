import Link from 'next/link';
import { Search, ShoppingCart, CircleUserRound } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white w-full flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center px-8 md:px-16 py-4 border-b">
        <Search className="w-4 h-4 text-[#2A254B] cursor-pointer" />
        <Link href="/" className="font-normal text-2xl text-[#2A254B]">
          Avion
        </Link>
        <div className="flex items-center space-x-6">
          <ShoppingCart className="w-4 h-4 text-[#2A254B] cursor-pointer" />
          <CircleUserRound className="w-4 h-4 text-[#2A254B] cursor-pointer" />
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center space-x-8 py-4 px-8 md:px-16 min-w-max">
          <Link href="/plant-pots" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Plant pots
          </Link>
          <Link href="/ceramics" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Ceramics
          </Link>
          <Link href="/tables" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Tables
          </Link>
          <Link href="/chairs" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Chairs
          </Link>
          <Link href="/crockery" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Crockery
          </Link>
          <Link href="/tableware" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Tableware
          </Link>
          <Link href="/cutlery" className="text-[#726E8D] hover:text-[#2A254B] text-base">
            Cutlery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;