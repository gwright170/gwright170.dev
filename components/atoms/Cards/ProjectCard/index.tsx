import { ProjectCardParams } from '@/types/ProjectCardParams';
import { Center, Group, Paper, RingProgress, Text, Title } from '@mantine/core';
import { IconCoffee, IconMug } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './ProjectCard.module.css';

const icons = {
  up: IconCoffee,
  down: IconMug,
};

type LinkElementProps = Pick<ProjectCardParams, 'link'> & {
  children: React.ReactNode;
};

const LinkElement = ({ link, children }: LinkElementProps) => {
  return link.startsWith('http') ? (
    <a href={link}>{children}</a>
  ) : (
    <Link href={link}>{children}</Link>
  );
};

const ProjectCard = (project: ProjectCardParams) => {
  const Icon = icons[project.icon];

  return (
    <LinkElement link={project.link}>
      <Paper withBorder radius="md" className={classes['card']}>
        <Group>
          <RingProgress
            size={60}
            roundCaps
            thickness={4}
            sections={[{ value: project.progress, color: project.color }]}
            label={
              <Center>
                <Icon className={classes['icon']} />
              </Center>
            }
          />
          <div>
            <Title order={4}>{project.title}</Title>
            <Text mt="sm">{project.excerpt}</Text>
          </div>
        </Group>
      </Paper>
    </LinkElement>
  );
};

export { ProjectCard };
