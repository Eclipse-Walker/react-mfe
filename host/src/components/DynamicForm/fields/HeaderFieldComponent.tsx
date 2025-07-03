import React from 'react';
import { Typography, Divider, Box } from '@mui/material';
import { HeaderFieldConfig } from '../../../config/types';

interface HeaderFieldComponentProps {
  field: HeaderFieldConfig;
}

const HeaderFieldComponent: React.FC<HeaderFieldComponentProps> = ({ field }) => {
  if (field.type === 'divider') {
    return (
      <Box sx={{ my: 2 }}>
        <Divider 
          sx={{ 
            borderColor: field.color || '#e0e0e0',
            borderWidth: 1,
          }} 
        />
      </Box>
    );
  }

  const getVariant = () => {
    switch (field.level) {
      case 1: return 'h4' as const;
      case 2: return 'h5' as const;
      case 3: return 'h6' as const;
      case 4: return 'subtitle1' as const;
      case 5: return 'subtitle2' as const;
      case 6: return 'body1' as const;
      default: return 'h5' as const;
    }
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography
        variant={getVariant()}
        component={`h${field.level || 2}`}
        sx={{
          color: field.color || '#1976d2',
          fontWeight: 600,
          mb: 1,
          ...(field.style || {}),
        }}
      >
        {field.icon && <span style={{ marginRight: 8 }}>{field.icon}</span>}
        {field.label}
      </Typography>
      {field.helpText && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {field.helpText}
        </Typography>
      )}
    </Box>
  );
};

export default HeaderFieldComponent; 