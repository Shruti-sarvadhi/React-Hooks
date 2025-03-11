import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { getNames, getCode } from "country-list";
import { useAppDispatch } from "@/store";
import { addUser } from "@/store/slices/user/userSlice";
import { userSchema } from "@/utils/formSchemas";
import { Input, Button } from "@/components";

interface UserFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  profileImage?: string; // Store Base64 string
}

const UserForm = () => {
  const dispatch = useAppDispatch();
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [fileBase64, setFileBase64] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create country mapping
  const countryCodeToName: Record<string, string> = {};
  getNames().forEach((name) => {
    const code = getCode(name);
    if (code) countryCodeToName[code] = name;
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    reset,
  } = useForm<UserFormData>({
    resolver: yupResolver(userSchema(selectedCountry)), // Dynamic validation
    mode: "onChange",
  });

  // Update schema on country change
  useEffect(() => {
    reset();
  }, [selectedCountry, reset]);

  // Convert file to Base64
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64(reader.result as string);
        setValue("profileImage", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call delay

    dispatch(addUser({ id: Date.now(), ...data, profileImage: fileBase64 || undefined }));
    alert("User added successfully!");
    setIsSubmitting(false);
    reset();
    setFileBase64(null);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-md bg-white">
        {/* Country Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700">Country:</label>
          <select
            className="border p-2 w-full rounded"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {getCountries().map((code) => (
              <option key={code} value={code}>
                {countryCodeToName[code] || code} (+{getCountryCallingCode(code)})
              </option>
            ))}
          </select>
        </div>

        {/* Inputs */}
        <Input label="Name" {...register("name")} error={errors.name?.message} />
        <Input label="Email" {...register("email")} error={errors.email?.message} />
        <Input label="Phone" {...register("phone")} error={errors.phone?.message} />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture:</label>
          <Controller
            name="profileImage"
            control={control}
            render={({ field: _field }) => (
              <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
            )}
          />
          {fileBase64 && (
            <img src={fileBase64} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded" />
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          isLoading={isSubmitting}
          className="w-full mt-4 bg-blue-500 text-white"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserForm;
