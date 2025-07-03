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
import PhoneFieldComponent from './PhoneFieldComponent';
import PhotoFieldComponent from './PhotoFieldComponent';
import AgeFieldComponent from './AgeFieldComponent';

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
    
    case 'phone':
      return <PhoneFieldComponent field={field} control={control} error={error} />;
    
    case 'number':
      return <NumberFieldComponent field={field} control={control} error={error} />;
    
    case 'age':
      return <AgeFieldComponent field={field} control={control} error={error} />;
    
    case 'date':
      return <DateFieldComponent field={field} control={control} error={error} />;
    
    case 'select':
    case 'multiselect':
      return <SelectFieldComponent field={field} control={control} error={error} />;
    
    case 'radio':
      return <RadioFieldComponent field={field} control={control} error={error} />;
    
    case 'checkbox':
      return <CheckboxFieldComponent field={field} control={control} error={error} />;
    
    case 'header':
    case 'divider':
      return <HeaderFieldComponent field={field} />;
    
    case 'file':
      return <FileFieldComponent field={field} control={control} error={error} />;
    
    case 'photo':
      return <PhotoFieldComponent field={field} control={control} error={error} />;
    
    default:
      console.warn(`Unknown field type: ${field.type}`);
      return null;
  }
};

export default FieldRenderer; 