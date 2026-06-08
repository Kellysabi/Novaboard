import { NextResponse } from 'next/server';
import { Column } from '@/types/kanban';

export async function GET() {
  const columns: Column[] = [
    {
      id: 'todo',
      title: 'To Do',
      colorTheme: 'todo',
      tasks: [
        {
          id: '1',
          title: 'Design Notification Banner',
          note: 'Note: Ensure it adapts well in both light and dark themes.',
          priority: 'Medium',
          progress: 0,
          comments: 0,
          attachments: 2,
          assignees: [
            { id: 'u1', name: 'User 1', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '2',
          title: 'Write Error Message Guidelines',
          note: 'Note: Follow the new brand voice and tone.',
          priority: 'Low',
          progress: 0,
          comments: 1,
          attachments: 1,
          assignees: [
            { id: 'u2', name: 'User 2', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '3',
          title: 'Create Avatar Component',
          note: 'Note: Support multiple sizes and fallback initials.',
          priority: 'Medium',
          progress: 10,
          comments: 2,
          attachments: 0,
          assignees: [
            { id: 'u3', name: 'User 3', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' }
          ],
        },
      ],
    },
    {
      id: 'progress',
      title: 'In Progress',
      colorTheme: 'progress',
      tasks: [
        {
          id: '4',
          title: 'Create Dashboard Wireframe',
          note: 'Note: Client wants more whitespace in the left sidebar.',
          priority: 'High',
          progress: 60,
          comments: 3,
          attachments: 5,
          assignees: [
            { id: 'u4', name: 'User 4', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
            { id: 'u5', name: 'User 5', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '5',
          title: 'API Endpoint Mapping',
          note: 'Note: Focus on the authentication and user profile routes.',
          priority: 'Medium',
          progress: 40,
          comments: 2,
          attachments: 1,
          assignees: [
            { id: 'u1', name: 'User 1', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '6',
          title: 'Dark Mode Theme Integration',
          note: 'Note: Ensure all components have proper dark mode styles.',
          priority: 'Low',
          progress: 25,
          comments: 1,
          attachments: 2,
          assignees: [
            { id: 'u2', name: 'User 2', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
            { id: 'u3', name: 'User 3', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' }
          ],
        },
      ],
    },
    {
      id: 'review',
      title: 'In Review',
      colorTheme: 'review',
      tasks: [
        {
          id: '7',
          title: 'Mobile Navigation Prototype',
          note: 'Note: Check responsiveness on iOS devices.',
          priority: 'Low',
          progress: 100,
          comments: 2,
          attachments: 4,
          assignees: [
            { id: 'u4', name: 'User 4', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '8',
          title: 'Team Settings Layout',
          note: 'Note: Include role management and invitation flow.',
          priority: 'Medium',
          progress: 100,
          comments: 1,
          attachments: 3,
          assignees: [
            { id: 'u5', name: 'User 5', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' },
            { id: 'u1', name: 'User 1', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' }
          ],
        },
      ],
    },
    {
      id: 'completed',
      title: 'Completed',
      colorTheme: 'completed',
      tasks: [
        {
          id: '9',
          title: 'Landing Page Copywriting',
          note: 'Note: Review for SEO and brand consistency.',
          priority: 'Medium',
          progress: 100,
          comments: 2,
          attachments: 6,
          assignees: [
            { id: 'u2', name: 'User 2', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
            { id: 'u3', name: 'User 3', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '10',
          title: 'Brand Color Exploration',
          note: 'Note: Colors approved for both web and mobile.',
          priority: 'Medium',
          progress: 100,
          comments: 3,
          attachments: 1,
          assignees: [
            { id: 'u4', name: 'User 4', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
            { id: 'u5', name: 'User 5', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' },
            { id: 'u1', name: 'User 1', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
            { id: 'u2', name: 'User 2', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' }
          ],
        },
        {
          id: '11',
          title: 'App Icon Design',
          note: 'Note: Create variants for iOS and Android.',
          priority: 'High',
          progress: 100,
          comments: 1,
          attachments: 3,
          assignees: [
            { id: 'u3', name: 'User 3', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
            { id: 'u4', name: 'User 4', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
            { id: 'u5', name: 'User 5', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' }
          ],
        },
      ],
    },
  ];

  return NextResponse.json(columns);
}
