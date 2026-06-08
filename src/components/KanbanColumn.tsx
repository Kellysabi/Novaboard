'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import { Column } from '@/types/kanban';
import TaskCard from './TaskCard';

interface KanbanColumnProps {
  column: Column;
}

const KanbanColumn = ({ column }: KanbanColumnProps) => {
  const themeStyles = {
    todo: {
      bg: 'bg-[#FFE4F2]',
      dot: 'bg-[#F43F5E]',
    },
    progress: {
      bg: 'bg-[#FFE8D6]',
      dot: 'bg-[#F97316]',
    },
    review: {
      bg: 'bg-[#D6EFFF]',
      dot: 'bg-[#0EA5E9]',
    },
    completed: {
      bg: 'bg-[#E5D9FF]',
      dot: 'bg-[#A855F7]',
    },
  };

  const style = themeStyles[column.colorTheme];

  return (
    <div className={`flex flex-col gap-4 p-4 rounded-3xl ${style.bg}`}>
      {/* Column Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <div className={`w-2 h-2 rounded-full ${style.dot}`}></div>
          <h3 className="font-bold text-gray-800 text-[14px]">{column.title}</h3>
        </div>
        <button className="text-gray-300 hover:text-gray-500 p-1 rounded-lg hover:bg-white/50 transition-all">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Tasks List */}
      <div className="flex flex-col gap-3">
        {column.tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <TaskCard task={task} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
