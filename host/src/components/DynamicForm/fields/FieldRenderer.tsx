import React from 'react';
import { Control, FieldError } from 'react-hook-form';
import { FieldConfig } from '../../../config/types';
import TextFieldComponent from './TextFieldComponent';
import NumberFieldComponent from './NumberFieldComponent';
import DateFieldComponent from './DateFieldComponent';
import SelectFieldComponent from './SelectFieldComponent';
import RadioFieldComponent from './RadioFieldComponent';
import CheckboxFieldComponent from './CheckboxFieldComponent';
import HeaderFieldComponent from './HeaderFieldComponent';
import FileFieldComponent from './FileFieldComponent';

interface FieldRendererProps {
  field: FieldConfig;
  control: Control<any>;
  error?: FieldError;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ 
  field, 
  control, 
  error 
}) => {
  switch (field.type) {
    case 'text':
    case 'email':
    case 'password':
    case 'url':
    case 'textarea':
      return <TextFieldComponent field={field} control={control} error={error} />;
    
    case 'number':
      return <NumberFieldComponent field={field} control={control} error={error} />;
    
    case 'date':
      return <DateFieldComponent field={field} control={control} error={error} />;
    
    case 'select':
      return <SelectFieldComponent field={field} control={control} error={error} />;
    
    case 'radio':
      return <RadioFieldComponent field={field} control={control} error={error} />;
    
    case 'checkbox':
      return <CheckboxFieldComponent field={field} control={control} error={error} />;
    
    case 'header':
      return <HeaderFieldComponent field={field} />;
    
    case 'file':
      return <FileFieldComponent field={field} control={control} error={error} />;
    
    default:
      console.warn(`Unknown field type: ${field.type}`);
      return null;
  }
};

export default FieldRenderer; 