'use client';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Logo } from '../reusable/Logo/Logo';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import classes from './Header.module.css';

const links = [
  { link: '/expertise', label: 'expertise' },
  { link: '/experience', label: 'experience' },
  { link: '/projects', label: 'projects' },
  { link: '/contact', label: 'contact' },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map(link => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={event => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <ColorSchemeToggle />
      </Container>
    </header>
  );
};

export { Header };
