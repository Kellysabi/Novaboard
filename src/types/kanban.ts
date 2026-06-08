export interface User {
  id: string;
  name: string;
  avatar: string;
}

export type Priority = 'Low' | 'Medium' | 'High';

export interface Task {
  id: string;
  title: string;
  note: string;
  priority: Priority;
  progress: number;
  comments: number;
  attachments: number;
  assignees: User[];
}

export interface Column {
  id: string;
  title: string;
  colorTheme: 'todo' | 'progress' | 'review' | 'completed';
  tasks: Task[];
}
