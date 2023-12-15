import { Container } from '@mantine/core';
import { getSortedPostsData } from '../../blog/getSortedPostsData';
import { PostData } from '../../types/PostData';

const generateStaticParams = () => getSortedPostsData();

const Page = ({ params }: { params: PostData }) => (
  <Container size="xl">
    <div>
      <section>
        <h2>Blog</h2>
        <p>{params.id}</p>
        <p>{params.date}</p>
        <p>{params.title}</p>
      </section>
    </div>
  </Container>
);

export { generateStaticParams };
export default Page;
