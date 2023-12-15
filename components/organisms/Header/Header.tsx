'use client';

import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ColorSchemeToggle } from '../../atoms/ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../../atoms/Logo/Logo';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'home' },
  { link: '/blog', label: 'blog' },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();

  const items = links.map(link => (
    <Link
      key={link.label}
      href={link.link}
      className={classes['link']}
      data-active={pathname === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  // TODO: mobile menu doesn't work
  return (
    <header className={classes['header']}>
      <Container size="xl" className={classes['inner']}>
        <div className={classes['box']} style={{ justifyContent: 'left' }}>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
        </div>
        <div className={classes['box']} style={{ justifyContent: 'center' }}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className={classes['box']} style={{ justifyContent: 'right' }}>
          <ColorSchemeToggle />
        </div>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export { Header };
