'use client';

import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Share2, 
  Settings, 
  UserPlus, 
  LayoutGrid, 
  List, 
  Calendar, 
  FileText, 
  MessageSquare,
  SlidersHorizontal,
  Plus,
  Menu,
  X,
  Home,
  LayoutDashboard,
  CheckSquare,
  Users,
  Headphones,
  LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BoardIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

const avatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
];

interface TabProps {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
}

const Tab = ({ icon: Icon, label, active = false }: TabProps) => (
  <button 
    className={`flex items-center justify-center gap-1.5 px-3 md:px-4 py-1.5 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 flex-shrink-0 ${
      active 
        ? 'bg-[#FCD34D] text-[#1E293B] font-bold shadow-sm' 
        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
    }`}
  >
    <Icon className={`${active ? 'text-[#1E293B]' : 'text-gray-400'} w-[18px] h-[18px] md:w-[14px] md:h-[14px]`} />
    <span className={`${active ? 'block' : 'hidden md:block'}`}>{label}</span>
  </button>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper component for mobile menu items
  const MobileMenuItem = ({ icon: Icon, label, active = false, className = "" }: { icon: any, label: string, active?: boolean, className?: string }) => (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
      active ? 'bg-[#FCD34D]/20 text-[#0D9488]' : 'text-gray-600 hover:bg-gray-50'
    } ${className}`}>
      <Icon size={20} className={active ? 'stroke-[2.5] text-[#0D9488]' : 'text-gray-400'} />
      {label}
    </button>
  );

  return (
    <header className="w-full px-4 md:px-8 pt-4 md:pt-6 pb-2 flex flex-col gap-4 md:gap-5 relative z-40">
      {/* ========== ROW 1: Mobile-First Navbar ========== */}
      <div className="flex items-center justify-between gap-3 md:gap-4 w-full">
        
        {/* Left Side: Mobile Logo */}
        <div className="md:hidden flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-8 h-8">
              <defs>
                <mask id="header-logo-mask">
                  <rect x="0" y="0" width="100" height="100" fill="white" />
                  <path d="M 50,30 Q 50,50 30,50 Q 50,50 50,70 Q 50,50 70,50 Q 50,50 50,30 Z" fill="black" />
                  <rect x="10" y="47.5" width="22" height="5" fill="black" />
                </mask>
              </defs>
              <path 
                d="M 15,85 C 15,87 18,90 22,90 L 78,90 C 82,90 85,87 85,85 L 85,50 C 85,30 70,15 50,15 C 30,15 15,30 15,50 Z" 
                fill="#0D9488" 
                mask="url(#header-logo-mask)" 
              />
              <circle cx="82" cy="18" r="6" fill="#0D9488" />
            </svg>
          </div>

          {/* Center: Global Search Bar */}
          <div className="relative flex-1 min-w-0 md:max-w-80 group mx-2 md:mx-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search a task..." 
              className="w-full pl-10 pr-4 md:pr-12 py-2 md:py-2.5 bg-white border border-gray-200/80 rounded-2xl text-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition-all placeholder:text-gray-400 text-gray-700 shadow-sm"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded-lg">
              <span>⌘</span><span>S</span>
            </kbd>
          </div>
        {/* Note: Removed the enclosing div from the previous desktop structure to make Search sibling of Logo and Hamburger */}

        {/* Right Side: Notification Bell & Profile Dropdown (Desktop Only) */}
        <div className="hidden md:flex items-center flex-shrink-0">
          <div className="flex items-center gap-1 bg-white border border-gray-200/80 rounded-2xl px-1.5 py-1 shadow-sm">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-xl transition-all relative group">
              <Bell size={18} className="stroke-[2]" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#FCD34D] rounded-full"></span>
              
              {/* Notification Tooltip */}
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-800 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg z-50">
                Notifications
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></span>
              </span>
            </button>
            <div className="w-px h-6 bg-gray-200/80"></div>
            <button className="flex items-center gap-2 pl-2 py-1 pr-2 hover:bg-gray-50 rounded-xl transition-all relative group">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" 
                alt="John Doe" 
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="text-xs font-semibold text-gray-700 hidden md:inline">John Doe</span>
              <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
              
              {/* Profile Tooltip */}
              <span className="absolute top-full mt-2 right-0 px-2.5 py-1 bg-gray-800 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg z-50">
                Profile
                <span className="absolute bottom-full right-4 border-4 border-transparent border-b-gray-800"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Mobile Hamburger Menu (Mobile Only) */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 -mr-2"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          aria-controls="mobile-navigation-drawer"
        >
          <Menu size={24} />
        </button>

      </div>

      {/* ========== ROW 2: Project Title, Metadata & Action Buttons ========== */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Title & Metadata */}
          <div className="space-y-1.5">
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">NovaBoard Mobile App</h1>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-gray-400 font-medium">
              <span>Client: <span className="text-gray-700 font-semibold">Arcadia Solutions</span></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Timeline: <span className="text-gray-700 font-semibold">May 20 – June 30, 2025</span></span>
              <span className="px-2.5 py-0.5 bg-[#75e2fa] text-green-600 text-[10px] font-bold rounded-full tracking-wide">
                In Progress
              </span>
            </div>
          </div>

          {/* Members Avatar Stack & Action Buttons */}
          <div className="flex items-center justify-end flex-wrap gap-3 md:gap-4 w-full lg:w-auto">
            {/* Avatars */}
            <div className="flex items-center -space-x-2">
              {avatars.slice(0, 3).map((url, idx) => (
                <img 
                  key={idx}
                  src={url}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white object-cover shadow-sm"
                  alt={`Member ${idx + 1}`}
                />
              ))}
              {avatars.slice(3).map((url, idx) => (
                <img 
                  key={idx + 3}
                  src={url}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white object-cover shadow-sm hidden sm:block"
                  alt={`Member ${idx + 4}`}
                />
              ))}
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 shadow-sm">
                +5
              </div>
            </div>

            {/* Action Buttons — icon-only on mobile */}
            <div className="flex items-center gap-2">
              <button className="group relative flex items-center gap-1.5 px-2.5 md:px-3.5 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200/80 rounded-full hover:bg-gray-50 transition-all shadow-sm">
                <Share2 size={13} className="text-gray-400" />
                <span className="hidden sm:inline">Share</span>
                
                {/* Tooltip for mobile */}
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg z-50 sm:hidden">
                  Share
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></span>
                </span>
              </button>
              
              <button className="group relative flex items-center gap-1.5 px-2.5 md:px-3.5 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200/80 rounded-full hover:bg-gray-50 transition-all shadow-sm">
                <Settings size={13} className="text-gray-400" />
                <span className="hidden sm:inline">Settings</span>
                
                {/* Tooltip for mobile */}
                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg z-50 sm:hidden">
                  Settings
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800"></span>
                </span>
              </button>
              
              <button className="group relative flex items-center gap-1.5 px-2.5 md:px-3.5 py-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200/80 rounded-full hover:bg-gray-50 transition-all shadow-sm">
                <UserPlus size={13} className="text-gray-400" />
                <span className="hidden sm:inline">Invite People</span>
                
                {/* Tooltip for mobile */}
                <span className="absolute top-full mt-2 right-0 px-2 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none shadow-lg z-50 sm:hidden">
                  Invite
                  <span className="absolute bottom-full right-3 border-4 border-transparent border-b-gray-800"></span>
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* ========== ROW 3: Tab Bar Navigation (floating white pill container) ========== */}
        <div className="w-full">
          <div className="flex items-center justify-between md:justify-start gap-0.5 md:gap-1 bg-white rounded-full p-1 md:px-2 md:py-1.5 shadow-sm border border-gray-100/50 w-full md:w-fit">
            <Tab icon={LayoutGrid} label="Overview" />
            <Tab icon={List} label="List" />
            <Tab icon={BoardIcon} label="Board" active />
            <Tab icon={Calendar} label="Calendar" />
            <Tab icon={FileText} label="Documents" />
            <Tab icon={MessageSquare} label="Messages" />
          </div>
        </div>
      </div>

      {/* ========== ROW 4: Board Filter Search Bar + Sort/Filter + Add New Task ========== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-0">
        
        {/* Left Side: Filter inputs */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Board Filter Search (second, smaller search) */}
          <div className="relative group w-[120px] sm:w-44">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              type="text" 
              placeholder="Search task" 
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200/80 rounded-xl text-xs focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 transition-all placeholder:text-gray-400 shadow-sm"
            />
          </div>

          {/* Sort Menu */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400 font-medium">Sort by:</span>
            <button className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-200/80 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 shadow-sm">
              <span>Stage</span>
              <ChevronDown size={12} className="text-gray-400" />
            </button>
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200/80 rounded-xl text-xs text-gray-600 font-semibold hover:bg-gray-50 shadow-sm">
            <SlidersHorizontal size={12} className="text-gray-400" />
            <span>Filter</span>
          </button>
        </div>

        {/* Right Side: Add New Task Button */}
        <button className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#FCD34D] text-[#1E293B] rounded-full font-bold text-xs shadow-md shadow-amber-200/40 hover:shadow-lg active:scale-95 transition-all self-stretch sm:self-auto">
          <Plus size={14} className="stroke-[3]" />
          <span>Add New Task</span>
        </button>

      </div>

      {/* ========== Mobile Slide-out Drawer ========== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Sidebar Drawer */}
            <motion.nav 
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 z-[101] w-[280px] h-full bg-white shadow-2xl flex flex-col md:hidden overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Header: Notifications & Close */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                {/* Notification Bell inside Drawer */}
                <button className="flex items-center gap-3 p-2 bg-gray-50 border border-gray-200/80 rounded-xl hover:bg-gray-100 transition-all relative">
                  <Bell size={20} className="text-gray-600 stroke-[2]" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FCD34D] rounded-full ring-2 ring-white"></span>
                  <span className="text-sm font-semibold text-gray-700 pr-2">Notifications</span>
                </button>
                
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                <MobileMenuItem icon={Home} label="Home" />
                <MobileMenuItem icon={LayoutDashboard} label="Dashboard" active />
                <MobileMenuItem icon={CheckSquare} label="Tasks" />
                <MobileMenuItem icon={Users} label="Team" />
                <MobileMenuItem icon={Calendar} label="Calendar" />
                
                <div className="h-px bg-gray-100 my-4 mx-2"></div>
                
                <MobileMenuItem icon={Settings} label="Settings" />
                <MobileMenuItem icon={Headphones} label="Support" />
              </div>

              {/* Drawer Footer: Profile & Logout */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-2">
                <button className="w-full flex items-center gap-3 p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all border border-transparent hover:border-gray-100">
                  <img 
                    src={avatars[0]} 
                    alt="John Doe" 
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                  />
                  <div className="flex flex-col items-start">
                     <span className="text-sm font-bold text-gray-900">John Doe</span>
                     <span className="text-xs text-gray-500 font-medium">View Profile</span>
                  </div>
                </button>
                
                <MobileMenuItem icon={LogOut} label="Logout" className="!text-red-600 hover:!bg-red-50 mt-2" />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
