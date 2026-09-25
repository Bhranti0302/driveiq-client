import AuthPage from "../AuthPage";

const loginFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Type your email...",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Type your password...",
  },
];

const Login = () => {
  return (
    <AuthPage
      highlightText="Log In"
      title="to your Account"
      fields={loginFields}
      buttonText="Register"
      linkQuestion="Already have an account?"
      linkText="Sign In"
      linkTo="/signup"
    />
  );
};

export default Login;
