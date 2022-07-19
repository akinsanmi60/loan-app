import React from "react";
import { Routes, Route } from "react-router-dom";
// import StudentLoanForm from "pages/Loan Signup/StudentLoanSign/UserForm";
// import StudentRegister from "pages/Login&Register/StudentPage/register";
import StudentRegister from "pages/Login&Register/StudentPage/register";
import StudentLogin from "pages/Login&Register/StudentPage/login";
import StudentBoard from "pages/StudentDashboard";
import PrivateRoute from "hooks/privateRoute";

type Props = {
  accountType: string;
};

function RoutesStudent({ accountType }: Props) {
  return (
    <Routes>
      {/* {StudentLogin} */}
      <Route path="/studentregister" element={<StudentRegister />} />
      <Route path="/studentlogin" element={<StudentLogin />} />

      <Route element={<PrivateRoute accounts={[accountType]} />}>
        <Route path="/studentdashboard" element={<StudentBoard />} />
      </Route>
    </Routes>
  );
}

export default RoutesStudent;
