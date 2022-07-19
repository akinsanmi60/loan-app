/* eslint-disable import/prefer-default-export */
import {
  FaCalendarCheck,
  FaHome,
  FaMoneyBill,
  FaPenAlt,
  FaUserGraduate,
} from "react-icons/fa";

export const studentNavigation = [
  {
    path: "studentdashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "application",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "studentschedule",
    icon: <FaCalendarCheck />,
    title: "Loan Schedule",
  },
  {
    path: "studentpayment",
    icon: <FaMoneyBill />,
    title: "Loan Payment",
  },
  {
    path: "studentprofile",
    icon: <FaUserGraduate />,
    title: "Profile",
  },
];
export const businessNavigation = [
  {
    path: "businessdashboard",
    icon: <FaHome />,
    title: "home",
  },
];
