import { sortedPostsData } from '@/static/sortedPostsData';
import { MetadataRoute } from 'next';

const getPostUrls = (): MetadataRoute.Sitemap =>
  sortedPostsData.sorted.map(post => ({
    url: `https://www.gwright170.dev/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'never',
    priority: 0.7,
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gwright170.dev/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.gwright170.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...getPostUrls(),
    {
      url: 'https://www.gwright170.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
