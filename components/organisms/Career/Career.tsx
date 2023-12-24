import { Image, Stepper, Text } from '@mantine/core';
import NextImage from 'next/image';
import cgiLogo from '../../../public/icons/cgi.svg';
import daznLogo from '../../../public/icons/dazn.svg';
import skyscannerLogo from '../../../public/icons/skyscanner.svg';
import classes from './Career.module.css';

const Career = () => (
  <Stepper
    active={1}
    allowNextStepsSelect={false}
    size="lg"
    className={classes['container']}
    color="#AE3EC9"
  >
    <Stepper.Step
      label="Skyscanner"
      className={classes['skyscanner-blue-bullet']}
      completedIcon={
        <a href="https://www.skyscanner.net" className={classes['logo-link']}>
          <Image
            component={NextImage}
            w="70%"
            h="auto"
            src={skyscannerLogo}
            alt="Skyscanner Logo"
          />
        </a>
      }
      description={
        <>
          Building the&nbsp;
          <br />
          <a href="https:/developers.skyscanner.net">developer API</a>
          <Text size="sm" mt={8}>
            2023 - present
          </Text>
        </>
      }
    />
    <Stepper.Step
      label="DAZN"
      className={classes['dazn-black-bullet']}
      icon={
        <a href="https://www.dazn.com" className={classes['logo-link']}>
          <Image
            component={NextImage}
            w="80%"
            h="auto"
            src={daznLogo}
            alt="DAZN Logo"
          />
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
      label="CGI"
      className={classes['cgi-red-bullet']}
      icon={
        <a href="https://www.cgi.com" className={classes['logo-link']}>
          <Image
            component={NextImage}
            w="80%"
            h="auto"
            src={cgiLogo}
            alt="CGI Logo"
          />
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
      label="OceanWise"
      className={classes['oceanwise-blue-bullet']}
      icon={
        <a href="https://www.oceanwise.eu" className={classes['logo-link']}>
          <div style={{ width: 42, height: 42 }}></div>
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
);

export { Career };
