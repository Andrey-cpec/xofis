import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      {/* <h4>SYDNEY</h4> */}
      <svg
        width={127}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM32.3668 30.3616C33.8958 28.835 34.6798 28.1875 35.1534 28.0601C35.715 27.909 36.2052 28.0405 36.7168 28.4797C37.1497 28.8512 38.2438 29.9713 38.9927 30.8096C41.1931 33.2729 43.8747 36.6359 44.2503 37.4031C44.3639 37.6353 44.375 37.701 44.3558 38.0323C44.3204 38.643 44.196 38.8343 43.3793 39.5344C42.0767 40.6509 40.0803 42.739 39.3824 43.7149C38.9257 44.3535 38.9126 44.7536 39.3248 45.483C39.675 46.1027 41.378 48.345 42.5783 49.7667C44.5875 52.1467 46.9159 54.3696 49.1773 56.0669C50.8579 57.3283 53.2214 58.7821 54.8035 59.5275C55.9343 60.0603 56.2878 60.0303 57.0122 59.3401C57.7069 58.6782 58.5246 57.6102 59.8946 55.5759C60.3408 54.9132 60.7739 54.3136 60.857 54.2434C61.1104 54.0293 61.3967 53.9282 61.8141 53.9055C62.0813 53.891 62.2608 53.9062 62.4057 53.9555C62.6843 54.0504 63.4107 54.5045 66.36 56.4276C67.7285 57.32 69.2454 58.3032 69.7309 58.6125C72.4818 60.3651 72.7871 60.6005 72.9291 61.0781C73.1185 61.7157 72.9605 62.1254 72.063 63.3233C70.9487 64.8107 69.0734 66.8197 67.674 68.0252C66.5388 69.0032 65.0797 69.9865 63.6409 70.743L63.0188 71.0701L62.389 71.0696C60.5532 71.0685 58.822 70.7024 56.1724 69.7552C49.967 67.5366 44.465 64.2895 39.647 60.0025C38.7431 59.1981 36.6429 57.0816 35.8606 56.1866C33.2537 53.2039 31.2905 50.2948 29.5948 46.9021C28.373 44.4575 27.2502 41.6203 27.0609 40.4995C26.7835 38.8572 27.4592 36.7086 28.9757 34.4108C29.8832 33.0359 30.8773 31.8488 32.3668 30.3616V30.3616Z" fill="#004D73"></path>
        <path
          fill="currentColor"
          d="M33.43,1l2.4,1L31,12.64,26.23,3.2a5.17,5.17,0,0,0-1.66-2,4.51,4.51,0,0,0-2.66-.7h-4V1l1.6.48,6.56,13.12v7.36l-1.92.48v.48h9.12V22.4l-1.92-.48V14.24L37,1.92l2.56-1V.48H33.43Z"
        />
        <path
          fill="currentColor"
          d="M49,.48H40.79V1l1.92.48V21.92l-1.92.48v.48H49q5.73,0,8.77-2.94t3.07-8.26q0-5.31-3.07-8.26T49,.48Zm4.61,19.2A5.25,5.25,0,0,1,49,22.08H48V1.28h1a5.23,5.23,0,0,1,4.61,2.43q1.63,2.4,1.63,8T53.56,19.68Z"
        />
        <path
          fill="currentColor"
          d="M78.87,1l2.56,1v12.8l-10.24-12a8.07,8.07,0,0,0-1.83-1.63A4.88,4.88,0,0,0,66.71.48H63.35V1l2.24.64V21.44L63,22.4v.48h6.08V22.4l-2.56-1V5.92L81.43,23.36h1V1.92L85,1V.48H78.87Z"
        />
        <path
          fill="currentColor"
          d="M102.79,18.34a7.14,7.14,0,0,0-1,3.74H94.24V12.16h3.68a7.19,7.19,0,0,0,.83,2.27,7.82,7.82,0,0,0,.61.93h1V8.16h-1a7.82,7.82,0,0,0-.61.93,7.19,7.19,0,0,0-.83,2.27H94.24V1.28h6.88a7.14,7.14,0,0,0,1,3.74,4.66,4.66,0,0,0,1,1.22h1V.48H87V1L89,1.44V21.92L87,22.4v.48H104.8V17.12h-1A4.66,4.66,0,0,0,102.79,18.34Z"
        />
        <path
          fill="currentColor"
          d="M121.59.48V1l2.4,1-4.87,10.72L114.39,3.2a5.11,5.11,0,0,0-1.67-2,4.47,4.47,0,0,0-2.65-.7h-4V1l1.6.48,6.56,13.12v7.36l-1.92.48v.48h9.12V22.4l-1.92-.48V14.24l5.6-12.32,2.56-1V.48Z"
        />
      </svg>
    </div>
  );
};

export default Brand;
