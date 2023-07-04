import { Route, Routes } from "react-router-dom";
import SignInForm from "../../signIn-form/signIn.component";
import SignUpForm from "../../signUp-form/signUp.component";

const Authentication = () => {
  return (
    <Routes>
      <Route index element={<SignInForm />} />

      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
};

export default Authentication;
