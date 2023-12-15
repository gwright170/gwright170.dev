import { Container } from '@mantine/core';
import Link from 'next/link';
import { getSortedPostsData } from '../../blog/getSortedPostsData';

const posts = getSortedPostsData();

const Page = () => (
  <Container size="xl">
    <div>
      <section>
        <h2>Blog</h2>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              <Link key={id} href={`/blog/${id}`}>
                {title}
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Container>
);

export default Page;
