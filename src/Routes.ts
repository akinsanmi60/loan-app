import React from "react";
import Home from "pages/Home";

const VerificationPage = React.lazy(
  () => import("pages/Login&Register/Verify/verify"),
);
const Unauthorized = React.lazy(() => import("pages/Error/unauthorized"));
const Error = React.lazy(() => import("pages/Error/error"));
const LazyContact = React.lazy(() => import("pages/Contact"));
const Service = React.lazy(() => import("pages/ServicesPage"));
const About = React.lazy(() => import("pages/About"));
const Question = React.lazy(() => import("pages/Question"));
const Press = React.lazy(() => import("pages/Press"));
const StudentPage = React.lazy(() => import("pages/LoansPage/student"));
const BusinessPage = React.lazy(() => import("pages/LoansPage/Business"));
const LoanCalculator = React.lazy(() => import("pages/LoanCalculator"));
const RemittancePage = React.lazy(() => import("pages/Remittance"));
const CarLoanPage = React.lazy(() => import("pages/CarLoan"));
const MortgagePage = React.lazy(() => import("pages/Mortgage"));
const CryptoHome = React.lazy(
  () => import("pages/CryptoPage/featurePages/Home"),
);
const CoinPage = React.lazy(
  () => import("pages/CryptoPage/featurePages/CoinPage"),
);
const ResetFormPage = React.lazy(
  () => import("pages/Login&Register/ResetPassword"),
);

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
    element: LazyContact,
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
