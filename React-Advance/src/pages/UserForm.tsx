import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "@/store";
import { addUser } from "@/store/slices/user/userSlice";
import { userSchema } from "@/utils/formSchemas";
import { useState } from "react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { getNames, getCode } from "country-list";

interface UserFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const UserForm = () => {
  const dispatch = useAppDispatch();
  const [selectedCountry, setSelectedCountry] = useState("US"); // Default country

  // Create a mapping of country codes to names
  const countryCodeToName: Record<string, string> = {};
  const countryNames = getNames();
  countryNames.forEach((name) => {
    const code = getCode(name);
    if (code) {
      countryCodeToName[code] = name;
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(userSchema(selectedCountry)), // Pass selected country
    mode: "onChange",
  });

  const onSubmit = (data: UserFormData) => {
    dispatch(addUser({ id: Date.now(), ...data }));
    alert("User added successfully!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 border rounded shadow-md bg-white"
      >
        {/* Country Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Country:</label>
          <select
            className="border p-2 w-full rounded"
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {getCountries().map((code) => (
              <option key={code} value={code}>
                {countryCodeToName[code] || code} (+{getCountryCallingCode(code)})
              </option>
            ))}
          </select>
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            {...register("name")}
            className={`border p-2 w-full rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            {...register("email")}
            className={`border p-2 w-full rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone:</label>
          <input
            {...register("phone")}
            className={`border p-2 w-full rounded ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            {...register("password")}
            type="password"
            className={`border p-2 w-full rounded ${errors.password ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;