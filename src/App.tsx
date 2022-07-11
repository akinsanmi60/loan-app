import React from "react";
import { Routes, Route } from "react-router-dom";
// Common Route
import VerificationPage from "pages/Login&Register/component";
import Unauthorized from "pages/Error/unauthorized";
import Error from "pages/Error/error";
import Home from "pages/Home";
import Contact from "pages/Contact";
import Service from "pages/Service";
import About from "pages/About";
import Question from "pages/Question";
import Press from "pages/Press";
// Student-Routes
import StudentPage from "pages/Loans/student";
import StudentQA from "pages/Question/components/studentQA";
import StudentLoanForm from "pages/Loan Signup/StudentLoanSign/UserForm";
import StudentRegister from "pages/Login&Register/StudentPage/register";
import StudentLogin from "pages/Login&Register/StudentPage/login";
import StudentBoard from "pages/Dashboards/Student";
// Business-Routes
import BusinessPage from "pages/Loans/Business";
import BusinessQA from "pages/Question/components/businessQA";
import BusinessRegister from "pages/Login&Register/BusinessPage/registerIndex";
import BusinessLogin from "pages/Login&Register/BusinessPage/loginIndex";
import BusinessBoard from "pages/Dashboards/Business";
// protected Route
import PrivateRoute from "hooks/privateRoute";
// utils
import LayoutWrapper from "utils/WebpageWrap";
// style
import OuterLayout from "styles/layout";

enum Account {
  Student = "student",
  Admin = "admin",
  Business = "business",
}

function App() {
  return (
    <div>
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
        >
          <Route index element={<StudentQA />} />
          <Route path="studentqa" element={<StudentQA />} />
          <Route path="businessqa" element={<BusinessQA />} />
        </Route>

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
        <Route
          path="/studentloansignup"
          element={
            <LayoutWrapper>
              <OuterLayout>
                <StudentLoanForm />
              </OuterLayout>
            </LayoutWrapper>
          }
        />

        {/* {Common} */}
        <Route path="/verificationpage" element={<VerificationPage />} />

        {/** Permission denied route */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/errorpage" element={<Error />} />

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
          <Route path="/studentdashboard" element={<StudentBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
