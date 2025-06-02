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
        grid: { xs: 12, sm: 6, md: 4 }, // Grid for this field
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        validation: { required: "Last name is required" },
        grid: { xs: 12, sm: 6, md: 4 }, // Grid for this field
      },
      {
        name: "birthDate",
        label: "Date of Birth",
        type: "date",
        validation: { required: "Date of birth is required" },
        grid: { xs: 12, sm: 6, md: 4 }, // Grid for this field
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        validation: { required: "Age is required" },
        showIf: { field: "birthDate", value: "2000-01-01" },
        grid: { xs: 12, sm: 6, md: 4 }, // Grid for this field
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

export const patientRegistrationFormConfig = [
  {
    section: "Personal Information",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        validation: { required: "First name is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        validation: { required: "Last name is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "dob",
        label: "Date of Birth",
        type: "date",
        validation: { required: "Date of birth is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "gender",
        label: "Gender",
        type: "radio",
        options: ["Male", "Female", "Other"],
        validation: { required: "Gender is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "text",
        validation: { required: "Phone number is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "email",
        label: "Email Address",
        type: "text",
        validation: {
          required: "Email is required",
          pattern: /^\S+@\S+\.\S+$/,
        },
        grid: { xs: 12, sm: 6 },
      },
    ],
  },
  {
    section: "Medical History",
    fields: [
      {
        name: "preExistingConditions",
        label: "Pre-existing Conditions",
        type: "textarea",
        grid: { xs: 12 },
      },
      {
        name: "medications",
        label: "Current Medications",
        type: "textarea",
        grid: { xs: 12 },
      },
      {
        name: "allergies",
        label: "Allergies",
        type: "textarea",
        grid: { xs: 12 },
      },
    ],
  },
  {
    section: "Emergency Contact",
    fields: [
      {
        name: "emergencyContactName",
        label: "Emergency Contact Name",
        type: "text",
        validation: { required: "Emergency contact name is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "emergencyContactPhone",
        label: "Emergency Contact Phone",
        type: "text",
        validation: { required: "Emergency contact phone is required" },
        grid: { xs: 12, sm: 6 },
      },
    ],
  },
  {
    section: "Insurance Information",
    fields: [
      {
        name: "insuranceProvider",
        label: "Insurance Provider",
        type: "text",
        validation: { required: "Insurance provider is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "insurancePolicyNumber",
        label: "Insurance Policy Number",
        type: "text",
        validation: { required: "Insurance policy number is required" },
        grid: { xs: 12, sm: 6 },
      },
      {
        name: "insuranceExpiryDate",
        label: "Insurance Expiry Date",
        type: "date",
        validation: { required: "Insurance expiry date is required" },
        grid: { xs: 12, sm: 6 },
      },
    ],
  },
  {
    section: "Additional Notes",
    fields: [
      {
        name: "additionalNotes",
        label: "Additional Notes",
        type: "textarea",
        grid: { xs: 12 },
      },
    ],
  },
];
