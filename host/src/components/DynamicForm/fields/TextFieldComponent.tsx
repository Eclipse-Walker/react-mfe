import React from 'react';
import { TextField } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { TextFieldConfig } from '../../../config/types';

interface TextFieldComponentProps {
  field: TextFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  return (
    <TextField
      {...controllerField}
      label={field.label}
      type={field.type === 'textarea' ? 'text' : field.type}
      multiline={field.multiline || field.type === 'textarea'}
      rows={field.rows}
      placeholder={field.placeholder}
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error?.message || field.helpText}
      disabled={field.disabled}
      inputProps={{
        maxLength: field.maxLength,
        inputMode: field.inputMode,
        autoComplete: field.autoComplete,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      }}
    />
  );
};

export default TextFieldComponent; 