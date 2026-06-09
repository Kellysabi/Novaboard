'use client';

import React from 'react';
import { 
  Home,
  LayoutDashboard, 
  CheckSquare, 
  Users,
  Calendar, 
  Settings, 
  Headphones,
  LogOut 
} from 'lucide-react';
import Link from 'next/link';

interface NavItemProps {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, active = false }: NavItemProps) => (
  <Link 
    href="#" 
    className={`p-3 transition-all duration-200 flex items-center justify-center relative group ${
      active 
        ? 'rounded-full bg-[#FCD34D] text-gray-900 shadow-md shadow-amber-200/50' 
        : 'rounded-2xl text-gray-400 hover:text-gray-600 hover:bg-gray-50'
    }`}
  >
    <Icon size={20} className={active ? "stroke-[2.5]" : "stroke-[1.8]"} />
    <span className="absolute left-full ml-3 px-2.5 py-1 bg-gray-800 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg">
      {label}
      <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></span>
    </span>
  </Link>
);

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-[72px] h-[calc(100vh-32px)] fixed top-4 left-4 items-center py-4 justify-between z-30 gap-6">
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Logo - Teal */}
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-9 h-9">
            <defs>
              <mask id="sidebar-logo-mask">
                <rect x="0" y="0" width="100" height="100" fill="white" />
                <path d="M 50,30 Q 50,50 30,50 Q 50,50 50,70 Q 50,50 70,50 Q 50,50 50,30 Z" fill="black" />
                <rect x="10" y="47.5" width="22" height="5" fill="black" />
              </mask>
            </defs>
            <path 
              d="M 15,85 C 15,87 18,90 22,90 L 78,90 C 82,90 85,87 85,85 L 85,50 C 85,30 70,15 50,15 C 30,15 15,30 15,50 Z" 
              fill="#0D9488" 
              mask="url(#sidebar-logo-mask)" 
            />
            <circle cx="82" cy="18" r="6" fill="#0D9488" />
          </svg>
        </div>

        <nav className="flex flex-col items-center gap-2 w-[60px] bg-white rounded-full py-4 shadow-sm border border-gray-100/50">
          <NavItem icon={Home} label="Home" />
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={CheckSquare} label="Tasks" />
          <NavItem icon={Users} label="Team" />
          <NavItem icon={Calendar} label="Calendar" />
        </nav>
      </div>

      <div className="flex flex-col items-center gap-2 w-[60px] bg-white rounded-full py-4 shadow-sm border border-gray-100/50">
        <NavItem icon={Settings} label="Settings" />
        <NavItem icon={Headphones} label="Support" />
        <NavItem icon={LogOut} label="Logout" />
      </div>
    </aside>
  );
};

export default Sidebar;
