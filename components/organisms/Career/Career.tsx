import { Image, Stepper } from '@mantine/core';
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
          Building the
          <br />
          <a href="https:/developers.skyscanner.net">developer API</a>
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
          Core contributor of
          <br />
          <a href="https://dazngroup.com/technology/">Mercury player</a>
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
          Led the development
          <br />
          of React data portal
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
          Led development of RESTful
          <br />
          Web Mapping Systems
        </>
      }
    />
  </Stepper>
);

export { Career };
