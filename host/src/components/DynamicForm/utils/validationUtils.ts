import { ValidationPatterns, ValidationRules } from '../../../config/types';

export const validateField = (value: any, validation?: ValidationRules): string | boolean => {
  if (!validation) return true;

  // Required validation
  if (validation.required && (!value || value === '')) {
    return typeof validation.required === 'string' 
      ? validation.required 
      : 'This field is required';
  }

  // Skip other validations if field is empty and not required
  if (!value || value === '') return true;

  // Min/Max length validation
  if (validation.minLength && value.length < validation.minLength.value) {
    return validation.minLength.message;
  }
  if (validation.maxLength && value.length > validation.maxLength.value) {
    return validation.maxLength.message;
  }

  // Min/Max value validation (for numbers)
  if (validation.min && Number(value) < validation.min.value) {
    return validation.min.message;
  }
  if (validation.max && Number(value) > validation.max.value) {
    return validation.max.message;
  }

  // Pattern validation
  if (validation.pattern && !validation.pattern.value.test(value)) {
    return validation.pattern.message;
  }

  // Custom validation patterns
  if (validation.custom) {
    const pattern = ValidationPatterns[validation.custom.type];
    if (pattern && !pattern.test(value)) {
      return validation.custom.message;
    }
  }

  // Custom validate function
  if (validation.validate) {
    const result = validation.validate(value);
    if (result !== true) {
      return typeof result === 'string' ? result : 'Invalid value';
    }
  }

  return true;
};

export const formatValue = (value: any, type: string): any => {
  switch (type) {
    case 'phone':
      return formatPhoneNumber(value);
    case 'thaiId':
      return formatThaiId(value);
    case 'passport':
      return formatPassport(value);
    default:
      return value;
  }
};

export const formatPhoneNumber = (value: string): string => {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length >= 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  } else if (cleaned.length >= 6) {
    return cleaned.replace(/(\d{3})(\d{3})(\d*)/, '$1-$2-$3');
  } else if (cleaned.length >= 3) {
    return cleaned.replace(/(\d{3})(\d*)/, '$1-$2');
  }
  return cleaned;
};

export const formatThaiId = (value: string): string => {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '');
  
  if (cleaned.length >= 13) {
    return cleaned.replace(/(\d{1})(\d{4})(\d{5})(\d{2})(\d{1})/, '$1-$2-$3-$4-$5');
  }
  return cleaned;
};

export const formatPassport = (value: string): string => {
  if (!value) return '';
  return value.toUpperCase();
};

export const calculateAge = (birthDate: string): number => {
  if (!birthDate) return 0;
  
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return Math.max(0, age);
}; 