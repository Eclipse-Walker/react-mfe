import React from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import {
  TextField,
  Button,
  Grid,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";

type FieldType =
  | "text"
  | "number"
  | "select"
  | "radio"
  | "checkbox"
  | "textarea"
  | "date"
  | "password";

type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  defaultValue?: any;
  validation?: any;
  options?: string[];
  showIf?: { field: string; value: any }; // conditional display
  grid?: { xs?: number; sm?: number; md?: number; lg?: number }; // Grid layout config
};

type SectionConfig = {
  section: string;
  fields: FieldConfig[];
};

interface Props {
  config: SectionConfig[];
  onSubmit: (data: any) => void;
}

const DynamicForm: React.FC<Props> = ({ config, onSubmit }) => {
  const defaultValues = config
    .flatMap((section) => section.fields)
    .reduce((acc, field) => {
      acc[field.name] = field.defaultValue ?? "";
      return acc;
    }, {} as any);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues });

  const watchedFields = useWatch({ control });

  /* const shouldShowField = (field: FieldConfig) => {
    if (!field.showIf) return true;

    const fieldValue = watchedFields[field.showIf.field];

    if (field.showIf.field === "birthDate" && fieldValue) {
      const selectedDate = new Date(fieldValue);
      const formattedDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD
      return formattedDate === field.showIf.value;
    }

    return fieldValue === field.showIf.value;
  }; */

  const shouldShowField = (field: FieldConfig) => {
    if (!field.showIf) return true;

    const fieldValue = watchedFields[field.showIf.field];
    console.log(
      "showIf field:",
      field.showIf.field,
      "watchedFields:",
      watchedFields,
      "fieldValue:",
      fieldValue
    );

    if (field.showIf.field === "birthDate" && fieldValue) {
      const selectedDate = new Date(fieldValue);
      const formattedDate = selectedDate.toISOString().split("T")[0]; // YYYY-MM-DD
      return formattedDate === field.showIf.value;
    }

    return fieldValue === field.showIf.value;
  };

  /* const renderField = (field: FieldConfig) => {
    if (!shouldShowField(field)) return null;

    const commonProps = {
      ...register(field.name, field.validation),
    };

    switch (field.type) {
      case "text":
      case "password":
      case "date":
        return (
          <TextField
            {...commonProps}
            label={field.label}
            type={field.type}
            variant="outlined"
            fullWidth
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            margin="normal"
          />
        );
      case "radio":
        return (
          <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">{field.label}</FormLabel>
            <RadioGroup row aria-label={field.name} {...commonProps}>
              {field.options?.map((opt) => (
                <FormControlLabel
                  key={opt}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>
            {errors[field.name] && (
              <FormHelperText error>
                {errors[field.name]?.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      case "checkbox":
        return (
          <FormControlLabel
            control={<input type="checkbox" {...commonProps} />}
            label={field.label}
          />
        );
      case "select":
        return (
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>{field.label}</InputLabel>
            <Select {...commonProps} label={field.label}>
              {field.options?.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
            {errors[field.name] && (
              <FormHelperText error>
                {errors[field.name]?.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      default:
        return null;
    }
  }; */

  const renderField = (field: FieldConfig) => {
    if (!shouldShowField(field)) return null;

    const commonProps = {
      ...register(field.name, field.validation),
    };

    switch (field.type) {
      case "text":
      case "password":
      case "date":
        return (
          <TextField
            {...commonProps}
            label={field.label}
            type={field.type}
            variant="outlined"
            fullWidth
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            margin="normal"
          />
        );
      case "radio":
        return (
          <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend">{field.label}</FormLabel>
            <RadioGroup row aria-label={field.name} {...commonProps}>
              {field.options?.map((opt) => (
                <FormControlLabel
                  key={opt}
                  value={opt}
                  control={<Radio />}
                  label={opt}
                />
              ))}
            </RadioGroup>
            {errors[field.name] && (
              <FormHelperText error>
                {errors[field.name]?.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      case "checkbox":
        return (
          <FormControlLabel
            control={<input type="checkbox" {...commonProps} />}
            label={field.label}
          />
        );
      case "select":
        return (
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>{field.label}</InputLabel>
            <Select {...commonProps} label={field.label}>
              {field.options?.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </Select>
            {errors[field.name] && (
              <FormHelperText error>
                {errors[field.name]?.message}
              </FormHelperText>
            )}
          </FormControl>
        );
      case "textarea": // เพิ่มกรณีสำหรับ textarea
        return (
          <TextField
            {...commonProps}
            label={field.label}
            variant="outlined"
            multiline
            rows={4} // กำหนดจำนวนบรรทัดใน textarea
            fullWidth
            error={!!errors[field.name]}
            helperText={errors[field.name]?.message}
            margin="normal"
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {config.map((section) => (
          <Grid item xs={12} key={section.section}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h3>{section.section}</h3>
            </div>
            {/* {section.fields.map((field) => {
              // Default grid values are xs: 12 if not specified
              const gridProps = field.grid || { xs: 12 };
              return (
                <Grid item {...gridProps} key={field.name}>
                  {renderField(field)}
                </Grid>
              );
            })} */}
            {section.fields.map((field) => {
              const gridProps = field.grid || { xs: 12 }; // Default grid values are xs: 12 if not specified
              return (
                <Grid item {...gridProps} key={field.name}>
                  {renderField(field)}
                </Grid>
              );
            })}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DynamicForm;
