import { Image, Stepper, Text } from '@mantine/core';
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
            src="/icons/skyscanner.svg"
            width={24}
            height={24}
            alt="Skyscanner logo"
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
          <Image src="/icons/dazn.svg" width={32} height={32} alt="DAZN logo" />
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
          <Image src="/icons/cgi.svg" width={16} height={16} alt="CGI logo" />
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
