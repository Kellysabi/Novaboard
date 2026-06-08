'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import KanbanBoard from '@/components/KanbanBoard';
import SplashScreen from '@/components/SplashScreen';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#EAF2F5] font-sans antialiased text-gray-600 w-full overflow-x-hidden">
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex min-h-screen w-full"
        >
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 w-full md:ml-[88px]">
            <Header />
            <main className="w-full flex-1 flex flex-col">
              <KanbanBoard />
            </main>
          </div>
        </motion.div>
      )}
    </div>
  );
}
