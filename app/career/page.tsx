'use client';

import { Text, Timeline } from '@mantine/core';
import Image from 'next/image';
import { FullHeightContainer } from '../../components/FullHeightContainer/FullHeightContainer';
import classes from './career.module.css';

const Page = () => (
  <FullHeightContainer size="sm" background={classes['background']}>
    <Timeline bulletSize={60}>
      <Timeline.Item
        title="Skyscanner"
        className={classes['skyscanner-blue-bullet']}
        bullet={
          <a href="https://www.skyscanner.net" className={classes['logo-link']}>
            <Image
              src="/icons/skyscanner.svg"
              width={42}
              height={42}
              alt="Skyscanner logo"
            />
          </a>
        }
      >
        <div style={{ minHeight: '8vh' }}>
          <Text>2023 &#8226; Present</Text>
          <Text c="dimmed">Building developers.skyscanner.net</Text>
        </div>
      </Timeline.Item>
      <Timeline.Item
        title="DAZN"
        className={classes['dazn-black-bullet']}
        bullet={
          <a href="https://www.dazn.com" className={classes['logo-link']}>
            <Image
              src="/icons/dazn.svg"
              width={42}
              height={42}
              alt="DAZN logo"
            />
          </a>
        }
      >
        <div style={{ minHeight: '8vh' }}>
          <Text>2021 &#8226; 2023</Text>
          <Text c="dimmed">
            Lead development of{' '}
            <a href="https://dazngroup.com/technology/">Mercury player</a>{' '}
            (MSE/EME)
          </Text>
        </div>
      </Timeline.Item>
      <Timeline.Item
        title="CGI"
        className={classes['cgi-red-bullet']}
        bullet={
          <a href="https://www.cgi.com" className={classes['logo-link']}>
            <Image src="/icons/cgi.svg" width={42} height={42} alt="CGI logo" />
          </a>
        }
      >
        <div style={{ minHeight: '8vh' }}>
          <Text>2019 &#8226; 2021</Text>
          <Text c="dimmed">
            Lead the front-end migration of legacy data portal to React.js
          </Text>
        </div>
      </Timeline.Item>
      <Timeline.Item
        title="OceanWise"
        className={classes['oceanwise-blue-bullet']}
        bullet={
          <a href="https://www.oceanwise.eu" className={classes['logo-link']}>
            <div style={{ width: 42, height: 42 }}></div>
          </a>
        }
      >
        <Text>2014 &#8226; 2019</Text>
        <Text c="dimmed">
          Built RESTful Web Mapping Systems and data processing tools
        </Text>
      </Timeline.Item>
    </Timeline>
  </FullHeightContainer>
);

export default Page;
