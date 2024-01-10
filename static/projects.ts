import { ProjectCardParams } from '@/types/ProjectCardParams';

const projects: ProjectCardParams[] = [
  {
    title: 'gwright170.dev',
    excerpt: 'This website, open source',
    progress: 65,
    color: 'teal',
    icon: 'up',
    link: 'https://github.com/gwright170/gwright170.dev',
  },
  {
    title: 'Advent of Code 2023',
    excerpt: 'Learning Rust through Advent of Code',
    progress: 0,
    color: 'red',
    icon: 'down',
    link: 'https://github.com/gwright170/advent-of-code-2023',
  },
];

export { projects };
