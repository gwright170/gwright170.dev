'use client';

import { Button, Group } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import classes from './SocialButtons.module.css';

interface SocialButtonProps {
  href: string;
  children: ReactNode;
}

const SocialButton = ({ href, children }: SocialButtonProps) => {
  return (
    <Button
      variant="subtle"
      color="gray"
      className={classes.control}
      component={Link}
      href={href}
    >
      {children}
    </Button>
  );
};

// TODO: margin-top 30 should be part of a util component
const SocialButtons = () => {
  return (
    <Group mt={30}>
      <SocialButton href="https://github.com/gwright170">
        <IconBrandGithub />
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/gwright170">
        <IconBrandLinkedin />
      </SocialButton>
      <SocialButton href="https://www.x.com/gwright170">
        <IconBrandX />
      </SocialButton>
    </Group>
  );
};

export { SocialButtons };
