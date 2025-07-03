import { RegisterOptions } from "react-hook-form";

// Base field types
export type FieldType =
  | "text"
  | "number"
  | "select"
  | "radio"
  | "checkbox"
  | "textarea"
  | "date"
  | "password"
  | "header"
  | "email"
  | "url"
  | "file";

// Grid configuration for responsive layout
export interface GridConfig {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

// Conditional field display
export interface ConditionalDisplay {
  field: string;
  value: string | number | boolean;
  operator?: 'equals' | 'not-equals' | 'greater-than' | 'less-than';
}

// Field validation rules
export interface ValidationRules extends RegisterOptions {
  required?: string | boolean;
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: any) => boolean | string;
}

// Base field configuration
export interface BaseFieldConfig {
  name: string;
  label: string;
  type: FieldType;
  defaultValue?: string | number | boolean;
  validation?: ValidationRules;
  grid?: GridConfig;
  showIf?: ConditionalDisplay;
  optional?: boolean;
}

// Field with options (select, radio)
export interface FieldWithOptions extends BaseFieldConfig {
  type: "select" | "radio";
  options: string[];
}

// Text-based fields
export interface TextFieldConfig extends BaseFieldConfig {
  type: "text" | "email" | "password" | "url" | "textarea";
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
}

// Number field
export interface NumberFieldConfig extends BaseFieldConfig {
  type: "number";
  min?: number;
  max?: number;
  step?: number;
}

// Date field
export interface DateFieldConfig extends BaseFieldConfig {
  type: "date";
  min?: string;
  max?: string;
}

// File field
export interface FileFieldConfig extends BaseFieldConfig {
  type: "file";
  accept?: string;
  multiple?: boolean;
}

// Header field (for sections)
export interface HeaderFieldConfig extends BaseFieldConfig {
  type: "header";
  style?: React.CSSProperties;
}

// Checkbox field
export interface CheckboxFieldConfig extends BaseFieldConfig {
  type: "checkbox";
}

// Union type for all field configurations
export type FieldConfig = 
  | TextFieldConfig
  | NumberFieldConfig
  | DateFieldConfig
  | FileFieldConfig
  | HeaderFieldConfig
  | CheckboxFieldConfig
  | FieldWithOptions;

// Form section configuration
export interface SectionConfig {
  section: string;
  description?: string;
  fields: FieldConfig[];
}

// Form configuration with actions
export interface FormConfig {
  sections: SectionConfig[];
  actions?: FormAction[];
}

// Form actions (submit, reset, etc.)
export interface FormAction {
  type: "submit" | "reset" | "cancel";
  label: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  onClick?: () => void;
}

// Form data types
export type FormData = Record<string, any>;

// Form submission handler
export type FormSubmissionHandler = (data: FormData) => void | Promise<void>;

// Form validation errors
export interface FormErrors {
  [key: string]: {
    message: string;
    type: string;
  };
}

// Form state
export interface FormState {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormErrors;
  touchedFields: string[];
}

export type UrlStatus = {
  url: string;
  status: "success" | "error";
};
