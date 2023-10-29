'use client';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './Header.module.css';

// TODO: add logo

const links = [
  { link: '/blog', label: 'Blog' }, // blog posts
  { link: '/career', label: 'Career' }, // interactive resume
  { link: '/toolset', label: 'Toolset' }, // the languages, frameworks, etc. that I use
  { link: '/community', label: 'Community' }, // links to socials / conferences
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
