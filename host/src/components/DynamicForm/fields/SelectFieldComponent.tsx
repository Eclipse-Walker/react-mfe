import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Chip, Box } from '@mui/material';
import { Control, FieldError, useController } from 'react-hook-form';
import { FieldWithOptions } from '../../../config/types';

interface SelectFieldComponentProps {
  field: FieldWithOptions;
  control: Control<any>;
  error?: FieldError;
}

const SelectFieldComponent: React.FC<SelectFieldComponentProps> = ({ 
  field, 
  control, 
  error 
}) => {
  const { field: controllerField } = useController({
    name: field.name,
    control,
    rules: field.validation,
  });

  const isMultiple = field.type === 'multiselect' || field.multiple;

  const renderValue = (selected: any) => {
    if (isMultiple && Array.isArray(selected)) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => {
            const option = field.options.find(opt => opt.value === value);
            return (
              <Chip 
                key={value} 
                label={option?.label || value} 
                size="small" 
                color="primary"
                variant="outlined"
              />
            );
          })}
        </Box>
      );
    }
    return selected;
  };

  return (
    <FormControl 
      fullWidth 
      error={!!error}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
      }}
    >
      <InputLabel id={`${field.name}-label`}>
        {field.label}
      </InputLabel>
      <Select
        {...controllerField}
        labelId={`${field.name}-label`}
        label={field.label}
        multiple={isMultiple}
        renderValue={isMultiple ? renderValue : undefined}
        disabled={field.disabled}
        sx={{
          minHeight: 56,
        }}
      >
        {field.options.map((option) => (
          <MenuItem 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
            sx={{
              color: option.color,
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {(error?.message || field.helpText) && (
        <FormHelperText>
          {error?.message || field.helpText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectFieldComponent; 