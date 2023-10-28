"use client";

import { Avatar, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import classes from './HeroMe.module.css';

export function HeroMe() {
  return (
    <>
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>

          <Avatar src="HeroMe.jpg" size={"xl"} alt="it's me" />

          <Title className={classes.title}>
            <span className={classes.highlight}>Software Engineer</span>, 
            explorer, 
            amateur runner
          </Title>

          <List mt={30} spacing="sm" size="md">
            <List.Item icon={'👋'}>
              Hi, I'm George!
            </List.Item>
            <List.Item icon={'💻'}>
              Full-Stack Software Engineer at Skyscanner
            </List.Item>
            <List.Item icon={'🛠️'}>
              Specializing in React, TypeScript, and Java
            </List.Item>
            <List.Item icon={'🚀'}>
              Passionate about elevating developer and user experiences
            </List.Item>
            <List.Item icon={'👟'}>
              Amateur runner gearing up for my first marathon!
            </List.Item>
            <List.Item icon={'📍'}>
              Based in London
            </List.Item>
          </List>

          <Group mt={30}>
            <Button variant="subtle" color="gray" size="sm" className={classes.control}>
              <IconBrandGithub />
            </Button>
            <Button variant="subtle" color="gray" className={classes.control}>
              <IconBrandLinkedin />
            </Button>
            <Button variant="subtle" color="gray" className={classes.control}>
              <IconBrandX />
            </Button>
          </Group>

        </div>
      </div>
    </Container>
    </>
  );
}