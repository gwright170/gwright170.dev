import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { PostData } from '../types/PostData';

const postsDirectory = path.join(process.cwd(), 'blog', 'posts');

const getSortedPostsData = (): PostData[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return <PostData>{
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export { getSortedPostsData };
