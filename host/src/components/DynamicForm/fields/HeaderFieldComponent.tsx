import React from 'react';
import { Typography } from '@mui/material';
import { HeaderFieldConfig } from '../../../config/types';

interface HeaderFieldComponentProps {
  field: HeaderFieldConfig;
}

const HeaderFieldComponent: React.FC<HeaderFieldComponentProps> = ({ field }) => {
  return (
    <Typography 
      variant="h6" 
      component="h3" 
      style={{ 
        margin: '16px 0 8px 0',
        color: '#1976d2',
        fontWeight: 600,
        ...field.style 
      }}
    >
      {field.label}
    </Typography>
  );
};

export default HeaderFieldComponent; 