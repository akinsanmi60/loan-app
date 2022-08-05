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
    path: "studentdashboard",
    icon: <FaHome />,
    title: "home",
  },
  {
    path: "studentapplication",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "studentschedule",
    icon: <FaCalendarCheck />,
    title: "Loan Schedule",
  },
  {
    path: "userpayment",
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
  {
    path: "businessapplication",
    icon: <FaPenAlt />,
    title: "Application",
  },
  {
    path: "businessschedule",
    icon: <FaCalendarCheck />,
    title: "Loan Schedule",
  },
  {
    path: "payment",
    icon: <FaMoneyBill />,
    title: "Loan Payment",
  },
  {
    path: "businessprofile",
    icon: <FaBuilding />,
    title: "Profile",
  },
];
