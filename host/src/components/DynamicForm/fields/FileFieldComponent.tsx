import React from 'react';
import { Button, FormHelperText, TextField } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { FileFieldConfig } from '../../../config/types';

interface FileFieldComponentProps {
  field: FileFieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const FileFieldComponent: React.FC<FileFieldComponentProps> = ({ 
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
    <>
      <TextField
        {...controllerField}
        label={field.label}
        type="file"
        variant="outlined"
        fullWidth
        error={!!error}
        helperText={error?.message}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          accept: field.accept,
          multiple: field.multiple,
        }}
      />
      {error && <FormHelperText error>{error.message}</FormHelperText>}
    </>
  );
};

export default FileFieldComponent; 