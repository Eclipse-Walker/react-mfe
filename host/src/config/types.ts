// Types for dynamic form configuration

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
  | "file"
  | "phone"
  | "photo"
  | "age"
  | "multiselect"
  | "divider"
  | "custom";

// Layout types
export type LayoutType = "grid" | "flex" | "inline" | "card" | "section";

// Grid configuration for responsive layout
export interface GridConfig {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

// Flex configuration
export interface FlexConfig {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  gap?: number;
  flex?: string | number;
}

// Theme configuration
export interface ThemeConfig {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number;
  fontSize?: "small" | "medium" | "large";
  fontWeight?: "light" | "normal" | "bold";
  spacing?: number;
}

// Conditional field display
export interface ConditionalDisplay {
  field: string;
  value: string | number | boolean;
  operator?: 'equals' | 'not-equals' | 'greater-than' | 'less-than' | 'contains' | 'starts-with' | 'ends-with';
}

// Advanced validation patterns
export const ValidationPatterns = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+66|0)[0-9]{8,9}$/,
  thaiPhone: /^(0[689])[0-9]{8}$/,
  passport: /^[A-Z]{1,2}[0-9]{6,9}$/,
  thaiId: /^[1-8][0-9]{12}$/,
  hn: /^[0-9]{2}-[0-9]{4}-[0-9]{2}$/,
  url: /^https?:\/\/.+/,
  thaiText: /^[ก-๙\s]+$/,
  englishText: /^[a-zA-Z\s]+$/,
};

// Field validation rules
export interface ValidationRules {
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
  validate?: (value: string | number | boolean) => boolean | string;
  custom?: {
    type: 'email' | 'phone' | 'thaiPhone' | 'passport' | 'thaiId' | 'hn' | 'url' | 'thaiText' | 'englishText';
    message: string;
  };
}

// Base field configuration
export interface BaseFieldConfig {
  name: string;
  label: string;
  type: FieldType;
  defaultValue?: string | number | boolean | string[];
  validation?: ValidationRules;
  grid?: GridConfig;
  flex?: FlexConfig;
  showIf?: ConditionalDisplay;
  optional?: boolean;
  disabled?: boolean;
  placeholder?: string;
  helpText?: string;
  theme?: ThemeConfig;
  className?: string;
  style?: React.CSSProperties;
}

// Field with options (select, radio, multiselect)
export interface FieldWithOptions extends BaseFieldConfig {
  type: "select" | "radio" | "multiselect";
  options: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
    color?: string;
  }>;
  multiple?: boolean;
}

// Text-based fields
export interface TextFieldConfig extends BaseFieldConfig {
  type: "text" | "email" | "password" | "url" | "textarea" | "phone";
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "url" | "numeric";
}

// Number field
export interface NumberFieldConfig extends BaseFieldConfig {
  type: "number" | "age";
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  formatType?: "currency" | "percentage" | "decimal";
}

// Date field
export interface DateFieldConfig extends BaseFieldConfig {
  type: "date";
  min?: string;
  max?: string;
  format?: string;
  locale?: string;
}

// File field
export interface FileFieldConfig extends BaseFieldConfig {
  type: "file" | "photo";
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  maxFiles?: number;
  previewEnabled?: boolean;
  uploadUrl?: string;
}

// Header field (for sections)
export interface HeaderFieldConfig extends BaseFieldConfig {
  type: "header" | "divider";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  icon?: string;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

// Checkbox field
export interface CheckboxFieldConfig extends BaseFieldConfig {
  type: "checkbox";
  checkedValue?: string | number | boolean;
  uncheckedValue?: string | number | boolean;
}

// Custom field
export interface CustomFieldConfig extends BaseFieldConfig {
  type: "custom";
  component: string;
  props?: Record<string, unknown>;
}

// Union type for all field configurations
export type FieldConfig = 
  | TextFieldConfig
  | NumberFieldConfig
  | DateFieldConfig
  | FileFieldConfig
  | HeaderFieldConfig
  | CheckboxFieldConfig
  | CustomFieldConfig
  | FieldWithOptions;

// Layout configuration
export interface LayoutConfig {
  type: LayoutType;
  grid?: GridConfig;
  flex?: FlexConfig;
  className?: string;
  style?: React.CSSProperties;
  theme?: ThemeConfig;
}

// Dynamic section configuration
export interface DynamicSectionConfig {
  title: string;
  description?: string;
  addButtonText?: string;
  removeButtonText?: string;
  maxItems?: number;
  minItems?: number;
  defaultItems?: number;
  fields: FieldConfig[];
  layout?: LayoutConfig;
}

// Form section configuration
export interface SectionConfig {
  section: string;
  description?: string;
  layout?: LayoutConfig;
  fields: FieldConfig[];
  collapsible?: boolean;
  defaultExpanded?: boolean;
  theme?: ThemeConfig;
  isDynamic?: boolean;
  dynamicConfig?: DynamicSectionConfig;
}

// Form configuration with actions
export interface FormConfig {
  title?: string;
  description?: string;
  theme?: ThemeConfig;
  layout?: LayoutConfig;
  sections: SectionConfig[];
  actions?: FormAction[];
  validation?: {
    mode?: 'onChange' | 'onBlur' | 'onSubmit';
    reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
    shouldFocusError?: boolean;
  };
}

// Form actions (submit, reset, etc.)
export interface FormAction {
  type: "submit" | "reset" | "cancel" | "save" | "custom";
  label: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: "small" | "medium" | "large";
}

// Form data types
export type FormData = Record<string, unknown>;

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
  isDirty: boolean;
  dirtyFields: string[];
}

export type UrlStatus = {
  url: string;
  isLoading: boolean;
  error: string | null;
  isOnline: boolean;
};
