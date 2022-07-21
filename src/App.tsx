import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Common Route
import VerificationPage from "pages/Login&Register/Verify/verify";
import Unauthorized from "pages/Error/unauthorized";
import Error from "pages/Error/error";
import Home from "pages/Home";
import Contact from "pages/Contact";
import Service from "pages/Service";
import About from "pages/About";
import Question from "pages/Question";
import Press from "pages/Press";
// Student-Routes
import StudentPage from "pages/LoansPage/student";
import StudentLoanForm from "pages/StudentLoanSign/UserForm";
import StudentRegister from "pages/Login&Register/StudentPage/register";
import StudentLogin from "pages/Login&Register/StudentPage/login";
import StudentBoard from "pages/StudentDashboard";
// Business-Routes
import BusinessPage from "pages/LoansPage/Business";
import BusinessRegister from "pages/Login&Register/BusinessPage/registerIndex";
import BusinessLogin from "pages/Login&Register/BusinessPage/loginIndex";
import BusinessBoard from "pages/BusinessDashboard";
// protected Route
import PrivateRoute from "hooks/privateRoute";
// utils
import LayoutWrapper from "utils/WebpageWrap";
// style
import OuterLayout from "styles/layout";
import LoaderLayout from "common/LoaderLayout";
import LoanCalculator from "pages/LoanCalculator";
import RemittancePage from "pages/Remittance";
import CarLoanPage from "pages/CarLoan";
import MortgagePage from "pages/Mortgage";
import AppLayout from "pages/App";

enum Account {
  Student = "student",
  Admin = "admin",
  Business = "business",
}

function Wrapper() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      <Wrapper />
      {loading ? (
        <LoaderLayout loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <Home />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <Contact />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/service"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <Service />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <About />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/calculator"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <LoanCalculator />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/student"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <StudentPage />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/question"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <Question />
                </OuterLayout>
              </LayoutWrapper>
            }
          />

          <Route
            path="/business"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <BusinessPage />
                </OuterLayout>
              </LayoutWrapper>
            }
          />
          <Route
            path="/press"
            element={
              <LayoutWrapper>
                <OuterLayout>
                  <Press />
                </OuterLayout>
              </LayoutWrapper>
            }
          />

          <Route path="/remittance" element={<RemittancePage />} />
          <Route path="/carloan" element={<CarLoanPage />} />
          <Route path="/mortgage" element={<MortgagePage />} />

          {/* {Common} */}
          <Route path="/verificationpage" element={<VerificationPage />} />

          {/** Permission denied route */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/*" element={<Error />} />

          {/* {StudentLogin} */}
          <Route path="/studentregister" element={<StudentRegister />} />
          <Route path="/studentlogin" element={<StudentLogin />} />

          {/* {BusinessLogin} */}
          <Route path="/businessregister" element={<BusinessRegister />} />
          <Route path="/businesslogin" element={<BusinessLogin />} />

          {/** Protected routes */}
          <Route element={<PrivateRoute accounts={[Account.Business]} />}>
            <Route path="/businessdashboard" element={<BusinessBoard />} />
          </Route>

          <Route element={<PrivateRoute accounts={[Account.Student]} />}>
            <Route path="/auth" element={<AppLayout />}>
              <Route index element={<StudentBoard />} />
              <Route path="studentdashboard" element={<StudentBoard />} />
              <Route path="studentapplication" element={<StudentLoanForm />} />
            </Route>
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
