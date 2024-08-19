import { ProjectCard } from '@/components/atoms/Cards/ProjectCard';
import { projects } from '@/static/projects';
import { Text } from '@mantine/core';

type ProjectsProps = {
  limit?: number;
};

const Projects = ({ limit }: ProjectsProps) => {
  const data = limit ? projects.slice(0, limit) : projects;

  if (data.length === 0)
    return (
      <section>
        <Text c="var(--mantine-color-dark-2)" style={{ textAlign: 'center' }}>
          There&apos;s nothing here yet...
        </Text>
      </section>
    );

  return data.map(project => (
    <section key={project.title}>
      <ProjectCard {...project} />
    </section>
  ));
};

export { Projects };
