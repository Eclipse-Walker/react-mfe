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
      type={field.type}
      placeholder={field.placeholder}
      variant="outlined"
      fullWidth
      multiline={field.multiline || field.type === 'textarea'}
      rows={field.rows || (field.type === 'textarea' ? 4 : 1)}
      error={!!error}
      helperText={error?.message}
      margin="normal"
    />
  );
};

export default TextFieldComponent; 