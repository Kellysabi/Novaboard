import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import KanbanBoard from '@/components/KanbanBoard';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#EAF2F5] font-sans antialiased text-gray-600 w-full overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 w-full md:ml-[88px]">
        <Header />
        <main className="w-full flex-1 flex flex-col">
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
}
