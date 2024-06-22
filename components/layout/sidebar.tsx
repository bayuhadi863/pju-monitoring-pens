'use client';

// react import
import React from 'react';
// mantine import
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// components import
import Header from '../dashboard/header';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding='md'
    >
      <AppShell.Navbar p='md'>
        <div className='flex justify-between'>
          <h3>Navbar</h3>
          <Group h='100%'>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom='sm'
              size='sm'
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom='sm'
              size='sm'
            />
          </Group>
        </div>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              h={28}
              mt='sm'
              animate={false}
            />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <div className='flex items-center'>
          <div>
            <Group h='100%'>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom='sm'
                size='sm'
              />
              {!desktopOpened && (
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom='sm'
                  size='sm'
                  mr={10}
                />
              )}
            </Group>
          </div>
          <div className='flex-grow'>
            <Header />
          </div>
        </div>
        <div>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
};

export default Sidebar;
