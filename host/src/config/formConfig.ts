// formConfig.ts

export const formConfig = [
  {
    section: "Personal Info",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        defaultValue: "",
        validation: { required: "First name is required" },
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        defaultValue: 18,
        validation: {
          required: "Age is required",
          min: { value: 18, message: "Must be at least 18" },
        },
      },
    ],
  },
  {
    section: "Preferences",
    fields: [
      {
        name: "gender",
        label: "Gender",
        type: "radio",
        options: ["Male", "Female", "Other"],
        validation: { required: "Please select gender" },
      },
      {
        name: "subscribe",
        label: "Subscribe to newsletter",
        type: "checkbox",
        defaultValue: false,
      },
      {
        name: "newsletterFrequency",
        label: "Newsletter Frequency",
        type: "select",
        options: ["Daily", "Weekly", "Monthly"],
        showIf: { field: "subscribe", value: true },
        validation: { required: "Please select a frequency" },
      },
    ],
  },
];

export const registrationFormConfig = [
  {
    section: "Personal Info",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        validation: { required: "First name is required" },
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        validation: { required: "Last name is required" },
      },
      {
        name: "birthDate",
        label: "Date of Birth",
        type: "date",
        validation: { required: "Date of birth is required" },
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        validation: { required: "Age is required" },
        showIf: { field: "birthDate", value: "2000-01-01" },
      },
    ],
  },
];

// formConfig.ts
export const resetPasswordFormConfig = [
  {
    section: "Reset Your Password",
    fields: [
      {
        name: "email",
        label: "Email",
        type: "text",
        validation: {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: "Please enter a valid email address",
          },
        },
      },
      {
        name: "newPassword",
        label: "New Password",
        type: "password",
        validation: {
          required: "New password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        },
      },
      {
        name: "confirmNewPassword",
        label: "Confirm New Password",
        type: "password",
        validation: {
          required: "Please confirm your new password",
          validate: (value: string, allValues: unknown) =>
            typeof allValues === "object" &&
            allValues !== null &&
            "newPassword" in allValues &&
            typeof allValues.newPassword === "string"
              ? value === allValues.newPassword || "Passwords don't match"
              : "Could not validate password match",
        },
      },
    ],
  },
];
