import React from 'react';
import { TextField } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { TextFieldConfig } from '../../../config/types';

interface PhoneFieldComponentProps {
  field: TextFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const PhoneFieldComponent: React.FC<PhoneFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    
    // Format as Thai phone number (XXX-XXX-XXXX)
    if (cleaned.length >= 10) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } else if (cleaned.length >= 6) {
      return cleaned.replace(/(\d{3})(\d{3})(\d*)/, '$1-$2-$3');
    } else if (cleaned.length >= 3) {
      return cleaned.replace(/(\d{3})(\d*)/, '$1-$2');
    }
    return cleaned;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(event.target.value);
    controllerField.onChange(formatted);
  };

  return (
    <TextField
      {...controllerField}
      onChange={handleChange}
      label={field.label}
      type="tel"
      placeholder={field.placeholder || "0XX-XXX-XXXX"}
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error?.message || field.helpText}
      disabled={field.disabled}
      inputProps={{
        maxLength: 12, // For XXX-XXX-XXXX format
        inputMode: 'tel',
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      }}
    />
  );
};

export default PhoneFieldComponent; 