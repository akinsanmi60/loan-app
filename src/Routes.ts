// import StudentLoanForm from "pages/Loan Signup/StudentLoanSign/UserForm";
// import StudentRegister from "pages/Login&Register/StudentPage/register";
// import StudentRegister from "pages/Login&Register/StudentPage/register";
// import StudentLogin from "pages/Login&Register/StudentPage/login";
// import StudentBoard from "pages/StudentDashboard";
// import PrivateRoute from "hooks/privateRoute";

import VerificationPage from "pages/Login&Register/Verify/verify";
import Unauthorized from "pages/Error/unauthorized";
import Error from "pages/Error/error";
import Home from "pages/Home";
import Contact from "pages/Contact";
import Service from "pages/ServicesPage";
import About from "pages/About";
import Question from "pages/Question";
import Press from "pages/Press";
import StudentPage from "pages/LoansPage/student";
import BusinessPage from "pages/LoansPage/Business";
import LoanCalculator from "pages/LoanCalculator";
import RemittancePage from "pages/Remittance";
import CarLoanPage from "pages/CarLoan";
import MortgagePage from "pages/Mortgage";

const ROUTESWITHOUTLAYER = {
  VerificationPage: {
    id: "1",
    element: VerificationPage,
    path: "/verificationpage ",
  },
  Unauthorized: {
    id: "2",
    element: Unauthorized,
    path: "/unauthorized ",
  },

  Error: {
    id: "3",
    element: Error,
    path: "/*",
  },
};

export default ROUTESWITHOUTLAYER;

export const ROUTESWITHLAYER = {
  Home: {
    id: "1",
    element: Home,
    path: "/",
  },
  Contact: {
    id: "2",
    element: Contact,
    path: "/contact",
  },
  Service: {
    id: "3",
    element: Service,
    path: "/service",
  },
  About: {
    id: "4",
    element: About,
    path: "/about",
  },
  Question: {
    id: "5",
    element: Question,
    path: "/question",
  },
  Press: {
    id: "6",
    element: Press,
    path: "/press",
  },
  StudentPage: {
    id: "7",
    element: StudentPage,
    path: "/student",
  },
  BusinessPage: {
    id: "8",
    element: BusinessPage,
    path: "/business",
  },
  LoanCalculator: {
    id: "9",
    element: LoanCalculator,
    path: "/calculator",
  },
  RemittancePage: {
    id: "10",
    element: RemittancePage,
    path: "/remittance",
  },
  CarLoanPage: {
    id: "11",
    element: CarLoanPage,
    path: "/carloan",
  },
  MortgagePage: {
    id: "12",
    element: MortgagePage,
    path: "/mortgage",
  },
};
