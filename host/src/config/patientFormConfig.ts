import { FormConfig, ValidationPatterns } from './types';

export const patientFormConfig: FormConfig = {
  title: "Patient Registration",
  description: "Complete patient information form",
  theme: {
    primaryColor: "#1976d2",
    secondaryColor: "#dc004e",
    backgroundColor: "#f5f5f5",
    textColor: "#333333",
    borderColor: "#e0e0e0",
    borderRadius: 8,
    fontSize: "medium",
    fontWeight: "normal",
    spacing: 16
  },
  layout: {
    type: "grid",
    grid: { xs: 12 },
    flex: {
      direction: "column",
      gap: 24
    }
  },
  validation: {
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true
  },
  sections: [
    {
      section: "Patient Photo",
      layout: {
        type: "card",
        flex: {
          direction: "column",
          alignItems: "center",
          gap: 16
        }
      },
      theme: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        spacing: 20
      },
      fields: [
        {
          name: "patientPhoto",
          label: "Patient Photo",
          type: "photo",
          accept: "image/*",
          maxSize: 5,
          maxFiles: 1,
          previewEnabled: true,
          grid: { xs: 12 },
          helpText: "Upload patient photo (Max 5MB)",
          validation: {
            required: false
          }
        }
      ]
    },
    {
      section: "Basic Information",
      layout: {
        type: "grid",
        grid: { xs: 12 },
        flex: {
          direction: "column",
          gap: 16
        }
      },
      theme: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        spacing: 20
      },
      fields: [
        {
          name: "hn",
          label: "HN",
          type: "text",
          placeholder: "00-0000-00",
          grid: { xs: 12, md: 4 },
          validation: {
            pattern: {
              value: /^[0-9]{2}-[0-9]{4}-[0-9]{2}$/,
              message: "HN format: 00-0000-00"
            }
          }
        },
        {
          name: "cid",
          label: "CID",
          type: "text",
          placeholder: "1100200990800",
          grid: { xs: 12, md: 4 },
          validation: {
            required: "CID is required",
            custom: {
              type: "thaiId",
              message: "Invalid Thai ID format"
            }
          }
        },
        {
          name: "passportNo",
          label: "Passport No.",
          type: "text",
          placeholder: "Input Passport No.",
          grid: { xs: 12, md: 4 },
          validation: {
            custom: {
              type: "passport",
              message: "Invalid passport format"
            }
          }
        },
        {
          name: "titleNameTh",
          label: "Title Name (TH)",
          type: "select",
          grid: { xs: 12, sm: 6, md: 3 },
          options: [
            { value: "", label: "Select title" },
            { value: "นาย", label: "นาย" },
            { value: "นาง", label: "นาง" },
            { value: "นางสาว", label: "นางสาว" },
            { value: "เด็กชาย", label: "เด็กชาย" },
            { value: "เด็กหญิง", label: "เด็กหญิง" }
          ],
          validation: {
            required: "Please select title"
          }
        },
        {
          name: "firstNameTh",
          label: "First Name (TH)",
          type: "text",
          placeholder: "ชื่อจริง",
          grid: { xs: 12, sm: 6, md: 3 },
          validation: {
            required: "First name is required",
            custom: {
              type: "thaiText",
              message: "Please enter Thai text only"
            }
          }
        },
        {
          name: "lastNameTh",
          label: "Last Name (TH)",
          type: "text",
          placeholder: "นามสกุล",
          grid: { xs: 12, sm: 6, md: 3 },
          validation: {
            required: "Last name is required",
            custom: {
              type: "thaiText",
              message: "Please enter Thai text only"
            }
          }
        },
        {
          name: "middleNameTh",
          label: "Middle Name (TH)",
          type: "text",
          placeholder: "ชื่อกลาง",
          grid: { xs: 12, sm: 6, md: 3 },
          validation: {
            custom: {
              type: "thaiText",
              message: "Please enter Thai text only"
            }
          }
        },
        {
          name: "titleNameEn",
          label: "Title Name (EN)",
          type: "select",
          grid: { xs: 12, sm: 6, md: 3 },
          options: [
            { value: "", label: "Select title" },
            { value: "Mr.", label: "Mr." },
            { value: "Mrs.", label: "Mrs." },
            { value: "Miss", label: "Miss" },
            { value: "Master", label: "Master" }
          ]
        },
        {
          name: "firstNameEn",
          label: "First Name (EN)",
          type: "text",
          placeholder: "Aung",
          grid: { xs: 12, sm: 6, md: 3 },
          validation: {
            required: "First name (EN) is required",
            custom: {
              type: "englishText",
              message: "Please enter English text only"
            }
          }
        },
        {
          name: "lastNameEn",
          label: "Last Name (EN)",
          type: "text",
          placeholder: "San Suu Kyi",
          grid: { xs: 12, sm: 6, md: 3 },
          validation: {
            required: "Last name (EN) is required",
            custom: {
              type: "englishText",
              message: "Please enter English text only"
            }
          }
        },
        {
          name: "middleNameEn",
          label: "Middle Name (EN)",
          type: "text",
          placeholder: "Middle Name",
          grid: { xs: 12, sm: 6, md: 3 },
          validation: {
            custom: {
              type: "englishText",
              message: "Please enter English text only"
            }
          }
        },
        {
          name: "birthDate",
          label: "Birth Date",
          type: "date",
          grid: { xs: 12, sm: 6, md: 4 },
          validation: {
            required: "Birth date is required"
          }
        },
        {
          name: "age",
          label: "Age",
          type: "age",
          grid: { xs: 12, sm: 6, md: 4 },
          disabled: true,
          validation: {
            min: { value: 0, message: "Age must be positive" },
            max: { value: 150, message: "Age must be realistic" }
          }
        },
        {
          name: "preferLanguage",
          label: "Prefer language",
          type: "select",
          grid: { xs: 12, sm: 6, md: 4 },
          options: [
            { value: "", label: "Select language" },
            { value: "th", label: "ไทย" },
            { value: "en", label: "English" },
            { value: "my", label: "Myanmar" },
            { value: "zh", label: "中文" }
          ],
          validation: {
            required: "Please select preferred language"
          }
        },
        {
          name: "interpreterNeed",
          label: "Interpreter need",
          type: "checkbox",
          grid: { xs: 12, md: 12 },
          checkedValue: true,
          uncheckedValue: false
        }
      ]
    },
    {
      section: "More Information",
      collapsible: true,
      defaultExpanded: true,
      layout: {
        type: "grid",
        grid: { xs: 12 },
        flex: {
          direction: "column",
          gap: 16
        }
      },
      theme: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        spacing: 20
      },
      fields: [
        {
          name: "gender",
          label: "Gender",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Female", label: "Female" },
            { value: "Male", label: "Male" },
            { value: "Other", label: "Other" }
          ],
          validation: {
            required: "Please select gender"
          }
        },
        {
          name: "bloodGroup",
          label: "Blood Group",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "A", label: "A" },
            { value: "B", label: "B" },
            { value: "AB", label: "AB" },
            { value: "O", label: "O" }
          ]
        },
        {
          name: "rh",
          label: "RH",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Positive", label: "Positive" },
            { value: "Negative", label: "Negative" }
          ]
        },
        {
          name: "occupation",
          label: "Occupation",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Officer", label: "Officer" },
            { value: "Teacher", label: "Teacher" },
            { value: "Doctor", label: "Doctor" },
            { value: "Engineer", label: "Engineer" },
            { value: "Businessman", label: "Businessman" },
            { value: "Student", label: "Student" },
            { value: "Other", label: "Other" }
          ]
        },
        {
          name: "aliasName",
          label: "Alias Name",
          type: "text",
          placeholder: "-",
          grid: { xs: 12, sm: 6, md: 2 }
        },
        {
          name: "contactNo",
          label: "Contact no.",
          type: "phone",
          placeholder: "064-459-6287",
          grid: { xs: 12, sm: 6, md: 2 },
          validation: {
            required: "Contact number is required",
            custom: {
              type: "thaiPhone",
              message: "Invalid Thai phone number format"
            }
          }
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "abc@email.com",
          grid: { xs: 12, md: 6 },
          validation: {
            custom: {
              type: "email",
              message: "Invalid email format"
            }
          }
        },
        {
          name: "nationality",
          label: "Nationality",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Myanmar", label: "Myanmar" },
            { value: "Thai", label: "Thai" },
            { value: "Cambodian", label: "Cambodian" },
            { value: "Laotian", label: "Laotian" },
            { value: "Vietnamese", label: "Vietnamese" },
            { value: "Chinese", label: "Chinese" },
            { value: "Other", label: "Other" }
          ]
        },
        {
          name: "race",
          label: "Race",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Myanmar", label: "Myanmar" },
            { value: "Thai", label: "Thai" },
            { value: "Chinese", label: "Chinese" },
            { value: "Indian", label: "Indian" },
            { value: "Other", label: "Other" }
          ]
        },
        {
          name: "religion",
          label: "Religion",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Buddhism", label: "Buddhism" },
            { value: "Christianity", label: "Christianity" },
            { value: "Islam", label: "Islam" },
            { value: "Hinduism", label: "Hinduism" },
            { value: "Other", label: "Other" }
          ]
        },
        {
          name: "maritalStatus",
          label: "Marital Status",
          type: "select",
          grid: { xs: 12, sm: 6, md: 2 },
          options: [
            { value: "", label: "Select" },
            { value: "Single", label: "Single" },
            { value: "Married", label: "Married" },
            { value: "Divorced", label: "Divorced" },
            { value: "Widowed", label: "Widowed" }
          ]
        }
      ]
    },
    {
      section: "Address",
      collapsible: true,
      defaultExpanded: false,
      layout: {
        type: "grid",
        grid: { xs: 12 }
      },
      fields: [
        {
          name: "addressInfo",
          label: "Address Information (Click to expand)",
          type: "header",
          level: 6,
          grid: { xs: 12 },
          helpText: "Add multiple addresses for home, work, etc."
        }
      ]
    },
    {
      section: "Next of Kin",
      collapsible: true,
      defaultExpanded: false,
      layout: {
        type: "grid",
        grid: { xs: 12 }
      },
      fields: [
        {
          name: "kinInfo",
          label: "Emergency Contact (Click to expand)",
          type: "header",
          level: 6,
          grid: { xs: 12 },
          helpText: "Add emergency contact information"
        }
      ]
    },
    {
      section: "Payor",
      collapsible: true,
      defaultExpanded: false,
      layout: {
        type: "grid",
        grid: { xs: 12 }
      },
      fields: [
        {
          name: "payorInfo",
          label: "บ่งการติดต่อเรื่องการเงิน (Click to expand)",
          type: "header",
          level: 6,
          grid: { xs: 12 },
          helpText: "Payment and billing information"
        }
      ]
    },
    {
      section: "Patient Document",
      collapsible: true,
      defaultExpanded: false,
      layout: {
        type: "card",
        flex: {
          direction: "column",
          gap: 16
        }
      },
      theme: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        spacing: 20
      },
      fields: [
        {
          name: "documents",
          label: "Upload Document",
          type: "file",
          accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
          multiple: true,
          maxSize: 10,
          maxFiles: 5,
          grid: { xs: 12 },
          helpText: "Upload patient documents (PDF, Images, Word documents - Max 10MB per file, 5 files total)"
        }
      ]
    }
  ],
  actions: [
    {
      type: "reset",
      label: "Reset Form",
      variant: "outlined",
      color: "secondary"
    },
    {
      type: "save",
      label: "Save Draft",
      variant: "outlined",
      color: "primary"
    },
    {
      type: "submit",
      label: "Submit Registration",
      variant: "contained",
      color: "primary"
    }
  ]
}; 