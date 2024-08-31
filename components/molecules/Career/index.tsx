'use client';

import cgiLogo from '@/public/icons/cgi.svg';
import daznLogo from '@/public/icons/dazn.svg';
import skyscannerLogo from '@/public/icons/skyscanner.svg';
import { Image, Stepper, Text, Title } from '@mantine/core';
import NextImage from 'next/image';
import classes from './Career.module.css';

const Career = () => (
  <section className={classes['container']}>
    <Stepper active={1} allowNextStepsSelect={false} size="lg" color="#AE3EC9">
      <Stepper.Step
        label={<Title order={4}>Skyscanner</Title>}
        className={classes['skyscanner-blue-bullet']}
        completedIcon={
          <a href="https://www.skyscanner.net" className={classes['logo-link']}>
            <div style={{ width: 42, height: 42 }}>
              <Image
                component={NextImage}
                w="70%"
                h="auto"
                src={skyscannerLogo}
                alt="Skyscanner Logo"
              />
            </div>
          </a>
        }
        description={
          <>
            Web platform&nbsp;
            <br />
            enablement
            <Text size="sm" mt={8}>
              2023 - present
            </Text>
          </>
        }
      />
      <Stepper.Step
        label={<Title order={4}>DAZN</Title>}
        className={classes['dazn-black-bullet']}
        icon={
          <a href="https://www.dazn.com" className={classes['logo-link']}>
            <div style={{ width: 42, height: 42 }}>
              <Image
                component={NextImage}
                w="80%"
                h="auto"
                src={daznLogo}
                alt="DAZN Logo"
              />
            </div>
          </a>
        }
        description={
          <>
            Core contributor of&nbsp;
            <br />
            <a href="https://dazngroup.com/technology/">Mercury player</a>
            <Text size="sm" mt={8}>
              2021 - 2023
            </Text>
          </>
        }
      />
      <Stepper.Step
        label={<Title order={4}>CGI</Title>}
        className={classes['cgi-red-bullet']}
        icon={
          <a href="https://www.cgi.com" className={classes['logo-link']}>
            <div style={{ width: 42, height: 42 }}>
              <Image
                component={NextImage}
                w="80%"
                h="auto"
                src={cgiLogo}
                alt="CGI Logo"
              />
            </div>
          </a>
        }
        description={
          <>
            Led development of&nbsp;
            <br />
            React data portal
            <Text size="sm" mt={8}>
              2019 - 2021
            </Text>
          </>
        }
      />
      <Stepper.Step
        label={<Title order={4}>OceanWise</Title>}
        className={classes['oceanwise-blue-bullet']}
        icon={
          <a href="https://www.oceanwise.eu" className={classes['logo-link']}>
            <div className={classes['oceanwise-logo']}>
              <i>OceanWise</i>
            </div>
          </a>
        }
        description={
          <>
            Led development of&nbsp;
            <br />
            Web Mapping Services
            <Text size="sm" mt={8}>
              2014 - 2019
            </Text>
          </>
        }
      />
    </Stepper>
  </section>
);

export { Career };
