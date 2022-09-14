import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Common Route
import VerificationPage from "pages/Login&Register/Verify/verify";
import Unauthorized from "pages/Error/unauthorized";
import Error from "pages/Error/error";
// Student-Routes
import StudentLoanForm from "pages/StudentLoanSign/UserForm";
import StudentRegister from "pages/Login&Register/StudentPage/register";
import StudentLogin from "pages/Login&Register/StudentPage/login";
import Board from "pages/UserDashboard";
// Business-Routes
// import BusinessPage from "pages/LoansPage/Business";
import BusinessRegister from "pages/Login&Register/BusinessPage/registerIndex";
import BusinessLogin from "pages/Login&Register/BusinessPage/loginIndex";
// protected Route
import PrivateRoute from "hooks/privateRoute";
// utils
import LayoutWrapper from "utils/WebpageWrap";
// style
import OuterLayout from "styles/layout";
import LoaderLayout from "common/LoaderLayout";

import AppLayout from "pages/App";
import UserPaymentPage from "pages/UserPayment";
import LoanSchedule from "pages/UserSchedule";
import { ROUTESWITHLAYER } from "Routes";
import ResetFormPage from "pages/Login&Register/ResetPassword";
import SettingsPage from "pages/SettingsPage";

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
    }, 3000);
  }, []);

  return (
    <div>
      <Wrapper />
      {loading ? (
        <LoaderLayout loading />
      ) : (
        <React.Suspense fallback>
          <Routes>
            {Object.entries(ROUTESWITHLAYER).map(itemRoute => {
              const [key, value] = itemRoute;
              const RouteComponent = value.element;
              return (
                <Route
                  key={key}
                  path={value.path}
                  element={
                    <LayoutWrapper>
                      <OuterLayout>
                        <RouteComponent />
                      </OuterLayout>
                    </LayoutWrapper>
                  }
                />
              );
            })}

            {/* {Common} */}
            <Route
              element={
                <PrivateRoute accounts={[Account.Business, Account.Student]} />
              }
            >
              <Route path="/verificationpage" element={<VerificationPage />} />
            </Route>

            {/** Permission denied route */}
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/*" element={<Error />} />
            <Route path="/resetpassword" element={<ResetFormPage />} />

            {/* {BusinessLogin} */}
            <Route path="/businessregister" element={<BusinessRegister />} />
            <Route path="/businesslogin" element={<BusinessLogin />} />
            {/** Protected routes */}
            <Route element={<PrivateRoute accounts={[Account.Business]} />}>
              <Route path="/auth" element={<AppLayout />}>
                <Route index element={<Board />} />
                <Route path="business_dashboard" element={<Board />} />
                <Route path="business_payment" element={<UserPaymentPage />} />
                <Route
                  path="business_application"
                  element={<StudentLoanForm />}
                />
                <Route path="business_schedule" element={<LoanSchedule />} />
                <Route path="business_setting" element={<SettingsPage />} />
              </Route>
            </Route>

            {/* {StudentLogin} */}
            <Route path="/studentregister" element={<StudentRegister />} />
            <Route path="/studentlogin" element={<StudentLogin />} />
            {/** Protected routes */}
            <Route element={<PrivateRoute accounts={[Account.Student]} />}>
              <Route path="/auth" element={<AppLayout />}>
                <Route index element={<Board />} />
                <Route path="student_dashboard" element={<Board />} />
                <Route
                  path="student_application"
                  element={<StudentLoanForm />}
                />
                <Route path="student_payment" element={<UserPaymentPage />} />
                <Route path="student_schedule" element={<LoanSchedule />} />
                <Route path="student_setting" element={<SettingsPage />} />
              </Route>
            </Route>
          </Routes>
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
