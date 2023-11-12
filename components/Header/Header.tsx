'use client';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../Logo/Logo';
import classes from './Header.module.css';

const links = [
  { link: '/expertise', label: 'expertise' },
  { link: '/career', label: 'career' },
  { link: '/projects', label: 'projects' },
  { link: '/contact', label: 'contact' },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map(link => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  // TODO: mobile menu doesn't work
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href="/">
          <Logo />
        </Link>
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
