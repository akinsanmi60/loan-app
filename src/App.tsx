import React from "react";
import { Routes, Route } from "react-router-dom";
import OuterLayout from "./styles/layout";
import LayoutWrapper from "./utils/WebpageWrap";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import About from "./pages/About";
import Question from "./pages/Question";
import Student from "./pages/Loans/student";
import Business from "./pages/Loans/Business";
import Press from "./pages/Press";
import StudentQA from "./pages/Question/components/studentQA";
import BusinessQA from "./pages/Question/components/businessQA";
import StudentLoanForm from "./pages/Loan Signup/StudentLoanSign/UserForm";
import Register from "./pages/Login&Register/StudentPage/register";
import Login from "./pages/Login&Register/StudentPage/login";

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
                <Student />
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
                <Business />
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
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
