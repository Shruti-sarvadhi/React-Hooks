import * as yup from "yup";
import { parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";

// Function to validate phone numbers based on country code
const validatePhoneNumber = (value: string, countryCode: string) => {
  if (!value || !countryCode) return false;

  try {
    const phoneNumber = parsePhoneNumberFromString(value, countryCode as CountryCode);
    return phoneNumber ? phoneNumber.isValid() : false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Phone number validation error:", error);
    return false;
  }
};

// Schema with dynamic phone validation
export const userSchema = (countryCode: string) =>
  yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .test("valid-phone", "Invalid phone number for selected country", (value) =>
        validatePhoneNumber(value || "", countryCode)
      )
      .required("Phone number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
