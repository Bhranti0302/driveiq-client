import AuthPage from "../AuthPage";

const signupFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Type your name...",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Type your email...",
  },
  {
    name: "phone",
    label: "Phone No.",
    type: "tel",
    placeholder: "Type your phone number...",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Type your password...",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Type your password again...",
  },
];

const Signup = () => {
  return (
    <AuthPage
      highlightText="Create"
      title="Your Account"
      fields={signupFields}
      buttonText="Register"
      linkQuestion="Already have an account?"
      linkText="Login"
      linkTo="/login"
    />
  );
};

export default Signup;
