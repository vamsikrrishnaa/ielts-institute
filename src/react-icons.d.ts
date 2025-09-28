declare module 'react-icons/fa' {
  import { IconType } from 'react-icons';
  export const FaArrowRight: IconType;
  export const FaArrowUp: IconType;
  export const FaBars: IconType;
  export const FaBook: IconType;
  export const FaBookReader: IconType;
  export const FaBrain: IconType;
  export const FaCertificate: IconType;
  export const FaChalkboardTeacher: IconType;
  export const FaChartLine: IconType;
  export const FaCheck: IconType;
  export const FaCheckCircle: IconType;
  export const FaChevronLeft: IconType;
  export const FaChevronRight: IconType;
  export const FaClock: IconType;
  export const FaFileAlt: IconType;
  export const FaGlobe: IconType;
  export const FaMicrophone: IconType;
  export const FaPlayCircle: IconType;
  export const FaQuoteLeft: IconType;
  export const FaRocket: IconType;
  export const FaStar: IconType;
  export const FaTimes: IconType;
  export const FaTrophy: IconType;
  export const FaUserGraduate: IconType;
}

declare module 'react-icons' {
  import { FC } from 'react';
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  export type IconType = FC<IconBaseProps>;
}
