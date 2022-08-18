/* eslint-disable import/prefer-default-export */
import {
  FaBuilding,
  FaCalendarCheck,
  FaHome,
  FaMoneyBill,
  FaPenAlt,
  FaUserGraduate,
} from "react-icons/fa";

export const studentNavigation = [
  {
    path: "student_dashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "sstudent_application",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "student_schedule",
    icon: <FaCalendarCheck />,
    title: "Schedule",
  },
  {
    path: "student_payment",
    icon: <FaMoneyBill />,
    title: "Payment",
  },
  {
    path: "student_setting",
    icon: <FaUserGraduate />,
    title: "Settings",
  },
];
export const businessNavigation = [
  {
    path: "business_dashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "business_application",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "business_schedule",
    icon: <FaCalendarCheck />,
    title: "Schedule",
  },
  {
    path: "business_payment",
    icon: <FaMoneyBill />,
    title: "Payment",
  },
  {
    path: "business_setting",
    icon: <FaBuilding />,
    title: "Settings",
  },
];
