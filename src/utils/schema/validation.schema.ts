import { z } from "zod";

// Utility functions to validate email or phone number
const isValidEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const isValidPhoneNumber = (value: string): boolean => {
  const phoneRegex = /^(?:\+998|998)(9\d{8}|3\d{8})$/; 
  return phoneRegex.test(value);
};

// Define the Zod schema
export const contactSchema = z.object({
  contact: z.string().min(1, "Contact is required").refine(value => {
    return isValidEmail(value) || isValidPhoneNumber(value);
  }, "Must be a valid email or phone number"),
});

// You can also export the validation functions if needed
export { isValidEmail, isValidPhoneNumber };


// Define the schema for the second registration step
export const regStepTwoSchema = z.object({
  code: z.string().min(5, { message: 'Your one-time password must be 6 characters' })
});



const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const regStepThreeSchema = z.object({
  name: z.object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
  }),
  avatar: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
    region: z.string(),
    gender: z.string().max(6),
    birthdate: z.string(),
    username: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    })
})


// Define the schema for email and password
export const EmailSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Define the schema for the user
export const userSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  bio: z.string().min(3),
  location: z.string().min(3),
});