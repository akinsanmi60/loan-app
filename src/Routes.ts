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
import CryptoHome from "pages/CryptoPage/featurePages/Home";
import CoinPage from "pages/CryptoPage/featurePages/CoinPage";
import ResetFormPage from "pages/Login&Register/ResetPassword";

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
  ResetFormPage: {
    id: "4",
    element: ResetFormPage,
    path: "/resetpassword",
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
  CryptoHome: {
    id: "13",
    element: CryptoHome,
    path: "/cryptohome",
  },
  CoinPage: {
    id: "14",
    element: CoinPage,
    path: "/coins/:id",
  },
};
