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
import StudentBoard from "pages/StudentDashboard";
// Business-Routes
// import BusinessPage from "pages/LoansPage/Business";
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

import AppLayout from "pages/App";
import UserPaymentPage from "pages/UserPayment";
import LoanSchedule from "pages/StudentSchedule";
import { ROUTESWITHLAYER } from "Routes";

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

          {/* {BusinessLogin} */}
          <Route path="/businessregister" element={<BusinessRegister />} />
          <Route path="/businesslogin" element={<BusinessLogin />} />
          {/** Protected routes */}
          <Route element={<PrivateRoute accounts={[Account.Business]} />}>
            <Route path="/businessdashboard" element={<BusinessBoard />} />
            <Route path="userpayment" element={<UserPaymentPage />} />
          </Route>

          {/* {StudentLogin} */}
          <Route path="/studentregister" element={<StudentRegister />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          {/** Protected routes */}
          <Route element={<PrivateRoute accounts={[Account.Student]} />}>
            <Route path="/auth" element={<AppLayout />}>
              <Route index element={<StudentBoard />} />
              <Route path="studentdashboard" element={<StudentBoard />} />
              <Route path="studentapplication" element={<StudentLoanForm />} />
              <Route path="userpayment" element={<UserPaymentPage />} />
              <Route path="studentschedule" element={<LoanSchedule />} />
            </Route>
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
