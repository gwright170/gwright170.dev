import { useComputedColorScheme } from '@mantine/core';

const Logo = () => {
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  console.log('logo rend');
  console.log(computedColorScheme);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 3160.0129303378053 552.1247308831205"
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="#f59f00">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M205.592 426.858a17.719 17.719 0 0 1-12.516-5.18L85.186 313.153c-3.323-3.323-5.18-7.85-5.18-12.57a17.81 17.81 0 0 1 5.198-12.586l107.89-108.491c6.894-6.93 18.085-6.965 24.997.018 6.894 6.982 6.894 18.208-.018 25.173l-95.356 95.887 95.374 95.922c6.894 6.943 6.894 18.19 0 25.138a17.58 17.58 0 0 1-12.499 5.215zM378.715 426.858c-4.521 0-9.069-1.737-12.499-5.215-6.93-6.947-6.93-18.195 0-25.178l95.392-95.882-95.392-95.887c-6.93-6.983-6.93-18.208 0-25.173 6.93-6.983 18.068-6.966 24.997-.036l107.89 108.509c3.324 3.306 5.18 7.85 5.18 12.587 0 4.72-1.856 9.228-5.18 12.57l-107.89 108.495c-3.425 3.478-7.977 5.21-12.498 5.21zM249.487 433.17c-2.103 0-4.26-.372-6.346-1.167-9.104-3.558-13.665-13.847-10.147-23.04L320.8 179.381a17.643 17.643 0 0 1 22.84-10.182c9.105 3.517 13.648 13.806 10.148 22.999l-87.843 229.587c-2.634 7.035-9.37 11.384-16.459 11.384z"
        />
      </g>
      <path
        fill={computedColorScheme === 'light' ? '#495057' : '#c1c2c5'}
        d="M827.487 212.32h51.75v167.488c0 51.05-37.414 92.31-91.261 92.31-29.722 0-52.1-13.637-71.681-35.316l36.714-33.217c10.84 16.084 20.63 25.875 34.967 25.875 24.476 0 39.162-26.924 39.162-56.296-6.294 8.392-24.826 14.336-35.666 14.336-50.351 0-87.415-37.763-87.415-88.814s37.064-89.163 87.415-89.163c11.889 0 30.42 6.294 36.015 14.336V212.32zM794.97 348.688c23.427 0 39.511-26.924 39.511-50.002 0-23.427-15.734-50.001-39.511-50.001-21.33 0-39.162 22.378-39.162 50.001 0 27.274 17.832 50.002 39.162 50.002zm303.64-136.368h52.799l-65.736 172.733h-33.917l-32.17-83.57c-10.839 29.023-21.329 56.296-31.469 83.57H953.85L887.764 212.32h53.148l30.07 95.108 29.722-95.108h38.113l29.721 95.458zm178.812 2.448-6.994 38.812c-12.937-5.594-15.385-4.545-21.329-4.545-20.98 0-33.218 11.189-33.218 38.812v97.206h-51.75V212.32h51.75v15.385c6.644-11.888 24.826-17.832 36.365-17.832 10.84 0 17.133.35 25.176 4.895zm57.828-2.448v172.733h-51.75V212.32h51.75zm1.4-49.652c0 14.686-11.89 26.225-27.624 26.225-15.036 0-27.274-11.539-27.274-26.225 0-14.336 12.238-25.525 27.274-25.525 15.735 0 27.623 11.19 27.623 25.525zm144.894 49.652h51.75v167.488c0 51.05-37.414 92.31-91.262 92.31-29.721 0-52.1-13.637-71.68-35.316l36.714-33.217c10.84 16.084 20.63 25.875 34.966 25.875 24.476 0 39.162-26.924 39.162-56.296-6.294 8.392-24.826 14.336-35.666 14.336-50.35 0-87.415-37.763-87.415-88.814s37.064-89.163 87.415-89.163c11.889 0 30.42 6.294 36.016 14.336V212.32zm-32.519 136.368c23.427 0 39.512-26.924 39.512-50.002 0-23.427-15.735-50.001-39.512-50.001-21.33 0-39.162 22.378-39.162 50.001 0 27.274 17.833 50.002 39.162 50.002zm278.115-62.24v98.605h-51.75v-98.605c0-26.574-6.993-37.763-27.273-37.763-20.98 0-33.218 11.19-33.218 37.763v98.605h-51.75V131.199h51.75v100.353c6.644-19.232 31.82-21.68 46.855-21.68 48.253 0 65.386 23.428 65.386 76.576zm90.348 25.176c0 12.588-.35 33.567 18.881 33.567 9.441 0 15.385-3.846 22.029-8.741v42.658c-8.042 4.546-17.833 8.742-28.323 8.742-44.407 0-64.337-18.882-64.337-76.226v-56.645h-19.232V212.32h19.232v-49.652h51.75v49.652h40.91v42.659h-40.91v56.645zm92.095-188.817h92.66v262.246h-55.945V169.312h-36.715v-46.505zm128.81 0h202.104l-146.158 262.246h-61.54l120.982-215.741h-115.388v-46.505zm300.843-2.797c51.75 0 93.36 38.812 94.059 90.562l.35.35-.35 86.366c-.35 52.449-41.96 90.912-94.059 90.912-51.75 0-93.36-38.463-94.059-90.912v-86.366c.7-52.1 42.31-90.912 94.06-90.912zm40.91 175.88v-83.57c0-24.826-18.531-41.61-40.91-41.61-22.028 0-40.56 16.784-40.56 41.61v83.57c0 24.825 18.532 41.958 40.56 41.958 22.379 0 40.91-17.133 40.91-41.959zm137.552 60.84c0 17.833-14.686 31.47-33.218 31.47s-32.868-13.637-32.868-31.47c0-16.784 14.336-30.77 32.868-30.77s33.218 13.986 33.218 30.77zm9.576-57.694c0-51.05 33.567-89.163 84.268-89.163 11.19 0 33.218 5.944 39.162 14.336v-93.01h52.1v253.854h-52.1v-11.54c-6.294 8.043-24.127 14.337-35.665 14.337-50.701 0-87.765-37.763-87.765-88.814zm52.1 0c0 27.274 17.482 49.652 39.161 49.652 23.777 0 39.162-26.574 39.162-49.652s-15.035-50.001-39.162-50.001c-21.679 0-39.162 22.378-39.162 50.001zm321.123 0v11.539h-123.081c0 20.28 20.63 34.616 37.763 34.616 16.784 0 32.17-6.643 40.211-21.329l34.617 31.82c-13.987 18.88-35.316 32.168-74.828 32.168-56.645 0-91.261-37.763-91.261-88.814s33.567-89.163 88.114-89.163 88.465 37.413 88.465 89.163zm-122.032-21.33h67.834c-2.797-16.433-14.686-25.175-34.267-25.175-18.881 0-30.42 10.14-33.567 25.176zm229.163 107.347h-33.917l-73.08-172.733h53.499l36.364 98.605c11.889-30.071 25.176-69.583 36.365-98.605h53.148z"
      />
    </svg>
  );
};

export default Logo;