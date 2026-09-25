import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

import coverPhoto from "../../assets/images/svg/signup-image.svg";

function AuthPage({
  title,
  highlightText,
  fields,
  buttonText,
  linkText,
  linkTo,
  linkQuestion,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center m-12 rounded-md overflow-hidden shadow-md bg-gray-50 lg:mx-[24rem]">
      {/* Image Container */}
      <div className="w-full h-full flex items-center justify-center p-6 bg-gray-100">
        <img
          src={coverPhoto}
          alt="DriveIQ"
          className="w-full max-h-[550px] object-contain rounded-2xl"
        />
      </div>

      {/* Form Container */}
      <div className="flex flex-col items-center justify-center p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold leading-8 mb-6 text-center">
          <span className="text-primary">{highlightText}</span> {title}
        </h2>

        <div className="w-full">
          <AuthForm fields={fields} buttonText={buttonText} />
        </div>

        {/* Auth Link */}
        <div className="mt-4 text-sm text-center">
          <p>
            {linkQuestion}{" "}
            <Link
              to={linkTo}
              className="text-primary font-medium hover:underline"
            >
              {linkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
