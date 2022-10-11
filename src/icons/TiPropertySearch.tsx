// template: streamline-solid
import * as React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import { memo, forwardRef } from 'react';

const SvgTiPropertySearch = (props: SvgIconProps) => {
  const { sx, ...other } = props;
  return (
    <SvgIcon
      width={202}
      height={167}
      fill="none"
      viewBox="0 0 202 167"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      sx={{ ...sx }}
      {...other}
    >
      <path
        fillRule="evenodd"
        d="M75.7008 128.8C110.992 128.8 139.601 100.191 139.601 64.9C139.601 29.609 110.992 1 75.7008 1C40.4098 1 11.8008 29.609 11.8008 64.9C11.8008 100.191 40.4098 128.8 75.7008 128.8ZM75.7012 118.9C105.525 118.9 129.701 94.7233 129.701 64.8999C129.701 35.0765 105.525 10.8999 75.7012 10.8999C45.8778 10.8999 21.7012 35.0765 21.7012 64.8999C21.7012 94.7233 45.8778 118.9 75.7012 118.9Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M81.0992 128.8C116.39 128.8 144.999 100.191 144.999 64.9C144.999 29.609 116.39 1 81.0992 1C45.8082 1 17.1992 29.609 17.1992 64.9C17.1992 100.191 45.8082 128.8 81.0992 128.8ZM81.0996 118.9C110.923 118.9 135.1 94.7233 135.1 64.8999C135.1 35.0765 110.923 10.8999 81.0996 10.8999C51.2762 10.8999 27.0996 35.0765 27.0996 64.8999C27.0996 94.7233 51.2762 118.9 81.0996 118.9Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        d="M144.499 64.9C144.499 99.9148 116.114 128.3 81.0992 128.3V129.3C116.666 129.3 145.499 100.467 145.499 64.9H144.499ZM81.0992 1.5C116.114 1.5 144.499 29.8851 144.499 64.9H145.499C145.499 29.3329 116.666 0.5 81.0992 0.5V1.5ZM17.6992 64.9C17.6992 29.8851 46.0844 1.5 81.0992 1.5V0.5C45.5321 0.5 16.6992 29.3329 16.6992 64.9H17.6992ZM81.0992 128.3C46.0844 128.3 17.6992 99.9148 17.6992 64.9H16.6992C16.6992 100.467 45.5321 129.3 81.0992 129.3V128.3ZM134.6 64.8999C134.6 94.4471 110.647 118.4 81.0996 118.4V119.4C111.199 119.4 135.6 94.9994 135.6 64.8999H134.6ZM81.0996 11.3999C110.647 11.3999 134.6 35.3527 134.6 64.8999H135.6C135.6 34.8004 111.199 10.3999 81.0996 10.3999V11.3999ZM27.5996 64.8999C27.5996 35.3527 51.5524 11.3999 81.0996 11.3999V10.3999C51.0001 10.3999 26.5996 34.8004 26.5996 64.8999H27.5996ZM81.0996 118.4C51.5524 118.4 27.5996 94.4471 27.5996 64.8999H26.5996C26.5996 94.9994 51.0001 119.4 81.0996 119.4V118.4Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M82.0992 128.8C117.39 128.8 145.999 100.191 145.999 64.9C145.999 29.609 117.39 1 82.0992 1C46.8082 1 18.1992 29.609 18.1992 64.9C18.1992 100.191 46.8082 128.8 82.0992 128.8ZM82.0996 118.9C111.923 118.9 136.1 94.7233 136.1 64.8999C136.1 35.0765 111.923 10.8999 82.0996 10.8999C52.2762 10.8999 28.0996 35.0765 28.0996 64.8999C28.0996 94.7233 52.2762 118.9 82.0996 118.9Z"
        clipRule="evenodd"
        fill="white"
      />
      <path
        d="M145.499 64.9C145.499 99.9148 117.114 128.3 82.0992 128.3V129.3C117.666 129.3 146.499 100.467 146.499 64.9H145.499ZM82.0992 1.5C117.114 1.5 145.499 29.8851 145.499 64.9H146.499C146.499 29.3329 117.666 0.5 82.0992 0.5V1.5ZM18.6992 64.9C18.6992 29.8851 47.0844 1.5 82.0992 1.5V0.5C46.5321 0.5 17.6992 29.3329 17.6992 64.9H18.6992ZM82.0992 128.3C47.0844 128.3 18.6992 99.9148 18.6992 64.9H17.6992C17.6992 100.467 46.5321 129.3 82.0992 129.3V128.3ZM135.6 64.8999C135.6 94.4471 111.647 118.4 82.0996 118.4V119.4C112.199 119.4 136.6 94.9994 136.6 64.8999H135.6ZM82.0996 11.3999C111.647 11.3999 135.6 35.3527 135.6 64.8999H136.6C136.6 34.8004 112.199 10.3999 82.0996 10.3999V11.3999ZM28.5996 64.8999C28.5996 35.3527 52.5524 11.3999 82.0996 11.3999V10.3999C52.0001 10.3999 27.5996 34.8004 27.5996 64.8999H28.5996ZM82.0996 118.4C52.5524 118.4 28.5996 94.4471 28.5996 64.8999H27.5996C27.5996 94.9994 52.0001 119.4 82.0996 119.4V118.4Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="white"
        stroke="black"
        d="M148.615 39.467L165.691 39.3027L182.481 63.6088H165.548L148.615 39.467Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M182.818 63.8362V65.2108H152.465V63.1521L182.818 63.8362Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M126.963 48.6853L140.538 64.2106L174.589 64.444V98.4282H149.3V103.144L109.3 105.988L101.395 103.144L39.8133 104.335L30.9239 88.7042C30.9239 88.7042 26.1444 80.9738 24.7857 76.564C23.4271 72.1542 23.2441 63.778 23.2441 63.778L96.8149 63.911"
        clipRule="evenodd"
        fill="white"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="none"
        stroke="black"
        d="M126.963 48.6853L140.538 64.2106L174.589 64.444V98.4282H149.3V103.144L109.3 105.988L101.395 103.144L39.8133 104.335L30.9239 88.7042C30.9239 88.7042 26.1444 80.9738 24.7857 76.564C23.4271 72.1542 23.2441 63.778 23.2441 63.778L96.8149 63.911"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="white"
        stroke="black"
        d="M174.59 97.7451L140.326 98.5959V103.856L109.301 105.97L101.396 103.144L70.5996 103.856L88.1673 112.9L201.002 107.356L174.59 97.7451Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M92.5996 98.7342L93.6848 98.5959L99.6719 99.165L101.157 99.5379H95.7775L92.5996 98.7342Z"
        clipRule="evenodd"
        fill="#0F0F0F"
      />
      <path
        fillRule="evenodd"
        d="M93.6855 75.1001V98.5959L95.7782 99.165V75.1001H93.6855Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={0.5}
        fill="white"
        stroke="black"
        d="M96.0273 75.3501H99.4218V99.4201H96.0273V75.3501Z"
      />
      <path
        fillRule="evenodd"
        d="M92.5996 98.7341L92.5996 106.195L95.7775 108.175V99.5378L92.5996 98.7341Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={0.5}
        fill="white"
        stroke="black"
        d="M96.0273 99.7878H100.907V107.57L96.0273 107.907V99.7878Z"
      />
      <path
        fillRule="evenodd"
        d="M144.801 98.7339L145.886 98.5957L151.873 99.1648L153.358 99.5376H147.979L144.801 98.7339Z"
        clipRule="evenodd"
        fill="#0F0F0F"
      />
      <path
        fillRule="evenodd"
        d="M145.887 58.8999V98.5957L147.979 99.1648V58.8999H145.887Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={0.5}
        fill="white"
        stroke="black"
        d="M151.623 63.6988V99.4199H148.229V59.5945L151.623 63.6988Z"
      />
      <path
        fillRule="evenodd"
        d="M144.801 98.7339V107.172L147.979 108.175V99.5376L144.801 98.7339Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        strokeLinejoin="round"
        strokeWidth={0.5}
        fill="white"
        stroke="black"
        d="M148.229 99.7876H153.108V107.57L148.229 107.907V99.7876Z"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="white"
        stroke="black"
        d="M89.2235 83.8253L135.597 38.5911L117.869 42.4849L76.7344 83.8253H89.2235Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M89.3835 84.2541L76.4922 83.8253L76.7357 85.0517H89.9192L135.598 40.5335L154.826 64.0252L155.567 63.4288L135.598 38.5911L89.3835 84.2541Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M154.824 64.0252L152.464 63.1521L134.857 41.2437L135.597 40.5334L154.824 64.0252Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M161.144 75.1001H155.6V80.6441H161.144V75.1001ZM168.2 75.1001H162.656V80.6441H168.2V75.1001ZM155.6 82.1561H161.144V87.7001H155.6V82.1561ZM168.2 82.156H162.656V87.7H168.2V82.156Z"
        clipRule="evenodd"
        fill="#FC9332"
      />
      <path
        d="M156.5 76V75.55H156.05V76H156.5ZM162.044 76H162.494V75.55H162.044V76ZM156.5 81.544H156.05V81.994H156.5V81.544ZM162.044 81.544V81.994H162.494V81.544H162.044ZM163.557 76V75.55H163.107V76H163.557ZM169.101 76H169.551V75.55H169.101V76ZM163.557 81.544H163.107V81.994H163.557V81.544ZM169.101 81.544V81.994H169.551V81.544H169.101ZM162.044 83.056H162.494V82.606H162.044V83.056ZM156.5 83.056V82.606H156.05V83.056H156.5ZM162.044 88.6V89.05H162.494V88.6H162.044ZM156.5 88.6H156.05V89.05H156.5V88.6ZM163.557 83.0559V82.6059H163.107V83.0559H163.557ZM169.101 83.0559H169.551V82.6059H169.101V83.0559ZM163.557 88.5999H163.107V89.0499H163.557V88.5999ZM169.101 88.5999V89.0499H169.551V88.5999H169.101ZM156.5 76.45H162.044V75.55H156.5V76.45ZM156.95 81.544V76H156.05V81.544H156.95ZM162.044 81.094H156.5V81.994H162.044V81.094ZM161.594 76V81.544H162.494V76H161.594ZM163.557 76.45H169.101V75.55H163.557V76.45ZM164.007 81.544V76H163.107V81.544H164.007ZM169.101 81.094H163.557V81.994H169.101V81.094ZM168.651 76V81.544H169.551V76H168.651ZM162.044 82.606H156.5V83.506H162.044V82.606ZM162.494 88.6V83.056H161.594V88.6H162.494ZM156.5 89.05H162.044V88.15H156.5V89.05ZM156.05 83.056V88.6H156.95V83.056H156.05ZM163.557 83.5059H169.101V82.6059H163.557V83.5059ZM164.007 88.5999V83.0559H163.107V88.5999H164.007ZM169.101 88.1499H163.557V89.0499H169.101V88.1499ZM168.651 83.0559V88.5999H169.551V83.0559H168.651Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M50.128 73H43V80.128H50.128V73ZM59.2003 73H52.0723V80.128H59.2003V73ZM43 82.072H50.128V89.2H43V82.072ZM59.2003 82.072H52.0723V89.2H59.2003V82.072Z"
        clipRule="evenodd"
        fill="#FC9332"
      />
      <path
        d="M44.1562 74.1572V73.6572H43.6562V74.1572H44.1562ZM51.2842 74.1572H51.7842V73.6572H51.2842V74.1572ZM44.1562 81.2852H43.6562V81.7852H44.1562V81.2852ZM51.2842 81.2852V81.7852H51.7842V81.2852H51.2842ZM53.2285 74.1572V73.6572H52.7285V74.1572H53.2285ZM60.3565 74.1572H60.8565V73.6572H60.3565V74.1572ZM53.2285 81.2852H52.7285V81.7852H53.2285V81.2852ZM60.3565 81.2852V81.7852H60.8565V81.2852H60.3565ZM51.2842 83.2292H51.7842V82.7292H51.2842V83.2292ZM44.1562 83.2292V82.7292H43.6562V83.2292H44.1562ZM51.2842 90.3572V90.8572H51.7842V90.3572H51.2842ZM44.1562 90.3572H43.6562V90.8572H44.1562V90.3572ZM53.2285 83.2292V82.7292H52.7285V83.2292H53.2285ZM60.3565 83.2292H60.8565V82.7292H60.3565V83.2292ZM53.2285 90.3572H52.7285V90.8572H53.2285V90.3572ZM60.3565 90.3572V90.8572H60.8565V90.3572H60.3565ZM44.1562 74.6572H51.2842V73.6572H44.1562V74.6572ZM44.6562 81.2852V74.1572H43.6562V81.2852H44.6562ZM51.2842 80.7852H44.1562V81.7852H51.2842V80.7852ZM50.7842 74.1572V81.2852H51.7842V74.1572H50.7842ZM53.2285 74.6572H60.3565V73.6572H53.2285V74.6572ZM53.7285 81.2852V74.1572H52.7285V81.2852H53.7285ZM60.3565 80.7852H53.2285V81.7852H60.3565V80.7852ZM59.8565 74.1572V81.2852H60.8565V74.1572H59.8565ZM51.2842 82.7292H44.1562V83.7292H51.2842V82.7292ZM51.7842 90.3572V83.2292H50.7842V90.3572H51.7842ZM44.1562 90.8572H51.2842V89.8572H44.1562V90.8572ZM43.6562 83.2292V90.3572H44.6562V83.2292H43.6562ZM53.2285 83.7292H60.3565V82.7292H53.2285V83.7292ZM53.7285 90.3572V83.2292H52.7285V90.3572H53.7285ZM60.3565 89.8572H53.2285V90.8572H60.3565V89.8572ZM59.8565 83.2292V90.3572H60.8565V83.2292H59.8565Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M125 91.3675C125 88.845 127.045 86.8 129.567 86.8C132.09 86.8 134.135 88.845 134.135 91.3675V104.17L125 105.07V91.3675Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="#FFFEFE"
        stroke="black"
        d="M25.3613 44.613L23.1973 63.1816L96.3789 64.1816L117.87 42.4849L135.598 38.5911L155.787 63.609H165.691L143.127 31.6691L35.4972 25.0444L25.3613 44.613Z"
        clipRule="evenodd"
      />
      <circle cx={125.9} cy={64.3} r={4.5} strokeWidth={0.9} fill="white" stroke="black" />
      <path strokeWidth={0.9} fill="none" stroke="black" d="M109.3 105.988V65.2109" />
      <path strokeWidth={0.9} fill="none" stroke="black" d="M140.325 64.1814V103.972" />
      <path strokeWidth={3.6} fill="none" stroke="black" d="M99.6719 75.1L109.3 76L140.325 74.7327" />
      <path
        fillRule="evenodd"
        d="M64.6372 49.5344L55.5684 39.4467V30.0879H63.1086L64.952 28.521L64.6372 49.5344Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M62.8895 30.0879H54.9004L55.782 30.6199H63.612L85.7407 5.94246L104.968 29.4342L105.709 28.8377L85.7407 4L62.8895 30.0879Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="white"
        stroke="black"
        d="M62.8894 30.0878L85.4686 4.28491L71.1332 7.59773L52.0996 29.8529L62.8894 30.0878Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M104.967 29.4341L102.606 28.5611L85 6.65268L85.7398 5.94238L104.967 29.4341Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeWidth={0.9}
        fill="white"
        stroke="black"
        d="M64.9531 49.2343V29.018L85.0016 6.65283L102.608 28.5612V48.8227L64.9531 49.2343Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M83.3877 23.4089C80.3259 23.4089 77.8438 25.8911 77.8438 28.9529H83.3877V23.4089ZM90.4444 28.9529C90.4444 25.8911 87.9623 23.4089 84.9004 23.4089V28.9529H90.4444ZM77.8438 30.4649H83.3877V36.0089H77.8438V30.4649ZM90.4444 30.4648H84.9004V36.0088H90.4444V30.4648Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        d="M78.7422 29.8531H78.4722V30.1231H78.7422V29.8531ZM84.2862 24.3091H84.5562V24.0391H84.2862V24.3091ZM84.2862 29.8531V30.1231H84.5562V29.8531H84.2862ZM85.7988 24.3091V24.0391H85.5288V24.3091H85.7988ZM91.3428 29.8531V30.1231H91.6128V29.8531H91.3428ZM85.7988 29.8531H85.5288V30.1231H85.7988V29.8531ZM84.2862 31.3651H84.5562V31.0951H84.2862V31.3651ZM78.7422 31.3651V31.0951H78.4722V31.3651H78.7422ZM84.2862 36.9091V37.1791H84.5562V36.9091H84.2862ZM78.7422 36.9091H78.4722V37.1791H78.7422V36.9091ZM85.7988 31.365V31.095H85.5288V31.365H85.7988ZM91.3428 31.365H91.6128V31.095H91.3428V31.365ZM85.7988 36.909H85.5288V37.179H85.7988V36.909ZM91.3428 36.909V37.179H91.6128V36.909H91.3428ZM79.0122 29.8531C79.0122 26.9403 81.3734 24.5791 84.2862 24.5791V24.0391C81.0752 24.0391 78.4722 26.6421 78.4722 29.8531H79.0122ZM84.2862 29.5831H78.7422V30.1231H84.2862V29.5831ZM84.0162 24.3091V29.8531H84.5562V24.3091H84.0162ZM85.7988 24.5791C88.7116 24.5791 91.0728 26.9403 91.0728 29.8531H91.6128C91.6128 26.6421 89.0098 24.0391 85.7988 24.0391V24.5791ZM86.0688 29.8531V24.3091H85.5288V29.8531H86.0688ZM91.3428 29.5831H85.7988V30.1231H91.3428V29.5831ZM84.2862 31.0951H78.7422V31.6351H84.2862V31.0951ZM84.5562 36.9091V31.3651H84.0162V36.9091H84.5562ZM78.7422 37.1791H84.2862V36.6391H78.7422V37.1791ZM78.4722 31.3651V36.9091H79.0122V31.3651H78.4722ZM85.7988 31.635H91.3428V31.095H85.7988V31.635ZM86.0688 36.909V31.365H85.5288V36.909H86.0688ZM91.3428 36.639H85.7988V37.179H91.3428V36.639ZM91.0728 31.365V36.909H91.6128V31.365H91.0728Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        d="M99.7286 13.1259C99.7286 13.1259 69.6426 5.91001 48.0941 22.3525C37.4618 30.4654 31.3275 39.0277 28.2711 51.3976C25.2147 63.7676 26.8261 72.4626 28.0991 78.4093C28.7147 81.2851 31.2081 88.3431 35.9991 95.4816C43.5094 106.672 60.8336 118.806 78.3198 119.276L67.3497 124C67.3497 124 36.9991 115.038 27.0991 91.9741C17.1991 68.9106 20.4022 46.4055 27.0991 35.4855C33.796 24.5655 50.1897 7.62502 65.8162 4.47307C81.4428 1.32113 90.4176 2.99993 90.4176 2.99993L99.7286 13.1259Z"
        clipRule="evenodd"
        fill="white"
      />
      <path d="M65.7578 13.7653C65.7578 13.7653 79.6543 9.83636 93.7638 12.5187" stroke="black" />
      <path
        fillRule="evenodd"
        d="M34.6094 112.544L-17 165.387V131.161L25.601 102.97C25.601 102.97 28.5172 102.813 31.386 105.858C34.2547 108.903 34.6094 112.544 34.6094 112.544Z"
        clipRule="evenodd"
        fill="white"
        stroke="black"
      />
      <path
        fillRule="evenodd"
        d="M30.7532 105.184L-17 144.1V134.175L27.1 102.962L30.7532 105.184Z"
        clipRule="evenodd"
        fill="black"
      />
      <path
        d="M44.8716 25.0444C44.8716 25.0444 26.3904 41.6597 27.1005 67.5738C27.8106 93.4879 49.5209 116.987 77.8438 118.9"
        stroke="black"
      />
    </SvgIcon>
  );
};

const ForwardRef = forwardRef(SvgTiPropertySearch);
const Memo = memo(ForwardRef);
export default Memo;