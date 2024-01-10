import { PostData } from '@/types/PostData';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'static', 'posts');

interface SortedPostsData {
  sorted: PostData[];
  posts: { [key: string]: PostData };
}

const getSortedPostsData = (): SortedPostsData => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents, { excerpt: true });

    return <PostData>{
      id,
      ...matterResult.data,
      content: matterResult.content.replace('---', ''),
      excerpt: matterResult.excerpt,
    };
  });

  return {
    sorted: allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else if (a.date === b.date) {
        return 0;
      } else {
        return -1;
      }
    }),
    posts: allPostsData.reduce((a, v) => ({ ...a, [v.id]: v }), {}),
  };
};

const sortedPostsData = getSortedPostsData();

export { sortedPostsData };
