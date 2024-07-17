'use client';
// react import
import React from 'react';
import { AppShell, Burger, Group, UnstyledButton, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// data import
import { homeNavbarLinks } from '@/data/home-navber-links';
// next js import
import Link from 'next/link';
// components import
import CustomContainer from './custom-container';

const HomeNavbar = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header withBorder={false}>
        <CustomContainer className='h-full'>
          <Group
            h='100%'
            px='md'
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            <Group
              justify='space-between'
              style={{ flex: 1 }}
            >
              <h1 className='font-semibold text-2xl'>Logo</h1>
              <Group
                ml='xl'
                gap={20}
                visibleFrom='sm'
              >
                {homeNavbarLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </Group>
              <Button radius='md'>Sign In</Button>
            </Group>
          </Group>
        </CustomContainer>
      </AppShell.Header>

      <AppShell.Navbar
        py='md'
        px={4}
      >
        <UnstyledButton>Home</UnstyledButton>
        <UnstyledButton>Blog</UnstyledButton>
        <UnstyledButton>Contacts</UnstyledButton>
        <UnstyledButton>Support</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default HomeNavbar;
