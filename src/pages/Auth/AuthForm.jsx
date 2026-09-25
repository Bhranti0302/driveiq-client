function AuthForm({ fields, buttonText }) {
  return (
    <form className="w-full max-w-md">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            {field.label}
          </label>

          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="w-full shadow-md rounded-md px-3 py-2 text-sm"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md mt-[1rem]"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
