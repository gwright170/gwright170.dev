'use client';

import { Burger, Container, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ColorSchemeToggle } from '../../atoms/ColorSchemeToggle/ColorSchemeToggle';
import { Logo } from '../../atoms/Logo/Logo';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'home' },
  { link: '/blog', label: 'blog' },
];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
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

  useEffect(() => {
    closeDrawer();
  }, [pathname]);

  return (
    <header className={classes['header']}>
      <Container size="xl" className={classes['inner']}>
        <div className={classes['box']} style={{ justifyContent: 'left' }}>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="xs"
            className={classes['burger']}
            style={{ height: '100%' }}
          ></Burger>
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

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          withCloseButton={false}
          withOverlay={false}
          size="100%"
          padding="lg"
          hiddenFrom="sm"
          zIndex={1000000}
          className={classes['drawer']}
        >
          <ScrollArea>{items}</ScrollArea>
        </Drawer>
      </Container>
    </header>
  );
};

export { Header };
