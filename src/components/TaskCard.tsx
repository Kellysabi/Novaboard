'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText } from 'lucide-react';
import { Task } from '@/types/kanban';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const priorityStyles = {
    Low: {
      bg: 'bg-transparent',
      text: 'text-[#0D9488]',
    },
    Medium: {
      bg: 'bg-transparent',
      text: 'text-[#65A30D]',
    },
    High: {
      bg: 'bg-transparent',
      text: 'text-[#E11D48]',
    },
  };

  const priority = priorityStyles[task.priority];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4, scale: 1.01, boxShadow: "0px 12px 28px rgba(0, 0, 0, 0.06)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="bg-white p-4 rounded-2xl border border-gray-100/80 shadow-sm cursor-grab active:cursor-grabbing group"
    >
      <div className="flex flex-col gap-3">
        {/* Priority Badge */}
        <div>
          <span className={`inline-block text-[11px] font-bold ${priority.bg} ${priority.text}`}>
            {task.priority}
          </span>
        </div>

        {/* Title & Note */}
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-gray-900 leading-snug">
            {task.title}
          </h4>
          {task.note && (
            <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
              {task.note}
            </p>
          )}
        </div>

        {/* Progress Section */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-semibold">
            <span className="text-gray-400 tracking-wide">Progress</span>
            <span className="text-gray-700">{task.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${task.progress}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="h-full rounded-full bg-[#0D9488]"
            />
          </div>
        </div>

        {/* Footer: Assignees and Stats */}
        <div className="flex items-center justify-between pt-1">
          {/* Avatar stack — bottom left */}
          <div className="flex -space-x-2">
            {task.assignees.map((assignee) => (
              <img 
                key={assignee.id}
                src={assignee.avatar}
                alt={assignee.name}
                title={assignee.name}
                className="w-6 h-6 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-gray-100/50"
              />
            ))}
          </div>

          {/* Comments & Attachments — bottom right */}
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-pointer">
              <FileText size={13} />
              <span className="text-[11px] font-medium">{task.attachments}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-pointer">
              <MessageSquare size={13} />
              <span className="text-[11px] font-medium">{task.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
