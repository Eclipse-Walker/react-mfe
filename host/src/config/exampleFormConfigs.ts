import { FormConfig } from './types';

// Simple Contact Form
export const contactFormConfig: FormConfig = {
  title: "Contact Us",
  description: "Get in touch with our team",
  theme: {
    primaryColor: "#2e7d32",
    backgroundColor: "#f1f8e9",
    borderRadius: 12,
    fontSize: "medium"
  },
  sections: [
    {
      section: "Contact Information",
      layout: {
        type: "grid",
        flex: {
          direction: "column",
          gap: 16
        }
      },
      fields: [
        {
          name: "name",
          label: "Full Name",
          type: "text",
          grid: { xs: 12, sm: 6 },
          validation: {
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" }
          }
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          grid: { xs: 12, sm: 6 },
          validation: {
            required: "Email is required",
            custom: { type: "email", message: "Please enter a valid email" }
          }
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "phone",
          grid: { xs: 12, sm: 6 },
          validation: {
            custom: { type: "thaiPhone", message: "Please enter a valid Thai phone number" }
          }
        },
        {
          name: "subject",
          label: "Subject",
          type: "select",
          grid: { xs: 12, sm: 6 },
          options: [
            { value: "", label: "Select a subject" },
            { value: "general", label: "General Inquiry" },
            { value: "support", label: "Technical Support" },
            { value: "billing", label: "Billing Question" },
            { value: "feedback", label: "Feedback" }
          ],
          validation: {
            required: "Please select a subject"
          }
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          rows: 4,
          grid: { xs: 12 },
          validation: {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" }
          }
        },
        {
          name: "newsletter",
          label: "Subscribe to our newsletter",
          type: "checkbox",
          grid: { xs: 12 }
        }
      ]
    }
  ],
  actions: [
    {
      type: "reset",
      label: "Clear",
      variant: "outlined"
    },
    {
      type: "submit",
      label: "Send Message",
      variant: "contained",
      color: "primary"
    }
  ]
};

// Employee Registration Form
export const employeeFormConfig: FormConfig = {
  title: "Employee Registration",
  description: "New employee onboarding form",
  theme: {
    primaryColor: "#1565c0",
    secondaryColor: "#1976d2",
    backgroundColor: "#e3f2fd",
    borderRadius: 8
  },
  validation: {
    mode: 'onBlur',
    shouldFocusError: true
  },
  sections: [
    {
      section: "Personal Information",
      collapsible: false,
      fields: [
        {
          name: "employeeId",
          label: "Employee ID",
          type: "text",
          grid: { xs: 12, sm: 4 },
          validation: {
            required: "Employee ID is required",
            pattern: {
              value: /^EMP[0-9]{6}$/,
              message: "Employee ID format: EMP000000"
            }
          }
        },
        {
          name: "title",
          label: "Title",
          type: "select",
          grid: { xs: 12, sm: 2 },
          options: [
            { value: "Mr", label: "Mr." },
            { value: "Ms", label: "Ms." },
            { value: "Mrs", label: "Mrs." },
            { value: "Dr", label: "Dr." }
          ],
          validation: {
            required: "Please select title"
          }
        },
        {
          name: "firstName",
          label: "First Name",
          type: "text",
          grid: { xs: 12, sm: 3 },
          validation: {
            required: "First name is required"
          }
        },
        {
          name: "lastName",
          label: "Last Name",
          type: "text",
          grid: { xs: 12, sm: 3 },
          validation: {
            required: "Last name is required"
          }
        },
        {
          name: "birthDate",
          label: "Date of Birth",
          type: "date",
          grid: { xs: 12, sm: 6 },
          validation: {
            required: "Date of birth is required"
          }
        },
        {
          name: "age",
          label: "Age",
          type: "age",
          grid: { xs: 12, sm: 6 },
          disabled: true
        }
      ]
    },
    {
      section: "Employment Details",
      fields: [
        {
          name: "department",
          label: "Department",
          type: "select",
          grid: { xs: 12, sm: 6 },
          options: [
            { value: "it", label: "Information Technology" },
            { value: "hr", label: "Human Resources" },
            { value: "finance", label: "Finance" },
            { value: "marketing", label: "Marketing" },
            { value: "operations", label: "Operations" }
          ],
          validation: {
            required: "Please select department"
          }
        },
        {
          name: "position",
          label: "Position",
          type: "text",
          grid: { xs: 12, sm: 6 },
          validation: {
            required: "Position is required"
          }
        },
        {
          name: "startDate",
          label: "Start Date",
          type: "date",
          grid: { xs: 12, sm: 6 },
          validation: {
            required: "Start date is required"
          }
        },
        {
          name: "salary",
          label: "Monthly Salary",
          type: "number",
          grid: { xs: 12, sm: 6 },
          prefix: "฿",
          formatType: "currency",
          validation: {
            required: "Salary is required",
            min: { value: 15000, message: "Minimum salary is ฿15,000" }
          }
        },
        {
          name: "employmentType",
          label: "Employment Type",
          type: "radio",
          grid: { xs: 12 },
          options: [
            { value: "fulltime", label: "Full-time" },
            { value: "parttime", label: "Part-time" },
            { value: "contract", label: "Contract" },
            { value: "intern", label: "Internship" }
          ],
          validation: {
            required: "Please select employment type"
          }
        }
      ]
    },
    {
      section: "Documents",
      fields: [
        {
          name: "profilePhoto",
          label: "Profile Photo",
          type: "photo",
          grid: { xs: 12, sm: 6 },
          maxSize: 2,
          helpText: "Upload your profile photo (Max 2MB)"
        },
        {
          name: "documents",
          label: "Required Documents",
          type: "file",
          grid: { xs: 12, sm: 6 },
          multiple: true,
          accept: ".pdf,.jpg,.jpeg,.png",
          maxFiles: 5,
          helpText: "Upload ID card, certificates, etc."
        }
      ]
    }
  ],
  actions: [
    {
      type: "save",
      label: "Save Draft",
      variant: "outlined",
      color: "secondary"
    },
    {
      type: "submit",
      label: "Submit Application",
      variant: "contained",
      color: "primary"
    }
  ]
};

// Survey Form with Complex Logic
export const surveyFormConfig: FormConfig = {
  title: "Customer Satisfaction Survey",
  description: "Help us improve our services",
  theme: {
    primaryColor: "#e91e63",
    backgroundColor: "#fce4ec",
    borderRadius: 16,
    fontSize: "medium"
  },
  sections: [
    {
      section: "Basic Information",
      fields: [
        {
          name: "customerType",
          label: "Customer Type",
          type: "radio",
          grid: { xs: 12 },
          options: [
            { value: "new", label: "New Customer" },
            { value: "existing", label: "Existing Customer" },
            { value: "former", label: "Former Customer" }
          ],
          validation: {
            required: "Please select customer type"
          }
        },
        {
          name: "serviceUsed",
          label: "Which service did you use?",
          type: "multiselect",
          grid: { xs: 12 },
          multiple: true,
          options: [
            { value: "web", label: "Website" },
            { value: "mobile", label: "Mobile App" },
            { value: "support", label: "Customer Support" },
            { value: "store", label: "Physical Store" }
          ],
          showIf: {
            field: "customerType",
            value: "existing"
          }
        }
      ]
    },
    {
      section: "Satisfaction Rating",
      fields: [
        {
          name: "overallSatisfaction",
          label: "Overall Satisfaction",
          type: "radio",
          grid: { xs: 12 },
          options: [
            { value: "5", label: "Very Satisfied" },
            { value: "4", label: "Satisfied" },
            { value: "3", label: "Neutral" },
            { value: "2", label: "Dissatisfied" },
            { value: "1", label: "Very Dissatisfied" }
          ],
          validation: {
            required: "Please rate your satisfaction"
          }
        },
        {
          name: "recommendationLikelihood",
          label: "How likely are you to recommend us? (0-10)",
          type: "number",
          grid: { xs: 12, sm: 6 },
          min: 0,
          max: 10,
          validation: {
            required: "Please provide a rating",
            min: { value: 0, message: "Rating must be 0 or higher" },
            max: { value: 10, message: "Rating must be 10 or lower" }
          }
        },
        {
          name: "improvementArea",
          label: "What can we improve?",
          type: "textarea",
          rows: 3,
          grid: { xs: 12 },
          showIf: {
            field: "overallSatisfaction",
            value: "3",
            operator: "less-than"
          }
        }
      ]
    },
    {
      section: "Additional Feedback",
      collapsible: true,
      defaultExpanded: false,
      fields: [
        {
          name: "additionalComments",
          label: "Additional Comments",
          type: "textarea",
          rows: 4,
          grid: { xs: 12 },
          placeholder: "Please share any additional feedback..."
        },
        {
          name: "contactForFollowUp",
          label: "May we contact you for follow-up?",
          type: "checkbox",
          grid: { xs: 12 }
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          grid: { xs: 12, sm: 6 },
          showIf: {
            field: "contactForFollowUp",
            value: true
          },
          validation: {
            required: "Email is required for follow-up",
            custom: { type: "email", message: "Please enter a valid email" }
          }
        },
        {
          name: "phone",
          label: "Phone Number",
          type: "phone",
          grid: { xs: 12, sm: 6 },
          showIf: {
            field: "contactForFollowUp",
            value: true
          }
        }
      ]
    }
  ],
  actions: [
    {
      type: "submit",
      label: "Submit Survey",
      variant: "contained",
      color: "primary"
    }
  ]
};

// Minimal Login Form
export const loginFormConfig: FormConfig = {
  title: "Sign In",
  theme: {
    primaryColor: "#424242",
    backgroundColor: "#ffffff",
    borderRadius: 8
  },
  layout: {
    type: "card",
    flex: {
      direction: "column",
      alignItems: "center",
      gap: 16
    }
  },
  sections: [
    {
      section: "Credentials",
      layout: {
        type: "flex",
        flex: {
          direction: "column",
          gap: 16
        }
      },
      fields: [
        {
          name: "username",
          label: "Username or Email",
          type: "text",
          grid: { xs: 12 },
          validation: {
            required: "Username is required"
          }
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          grid: { xs: 12 },
          validation: {
            required: "Password is required"
          }
        },
        {
          name: "rememberMe",
          label: "Remember me",
          type: "checkbox",
          grid: { xs: 12 }
        }
      ]
    }
  ],
  actions: [
    {
      type: "submit",
      label: "Sign In",
      variant: "contained",
      color: "primary",
      size: "large"
    }
  ]
}; 