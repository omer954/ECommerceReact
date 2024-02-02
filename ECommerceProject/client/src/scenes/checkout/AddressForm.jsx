import { Box, useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";


const AddressForm = ({
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  //these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;
const formattedError = (field) =>
  Boolean(
    getIn(touched ,formattedName(field)) && getIn(errors, formattedName(field))
  );

  const formatterHelper = (field) =>
    getIn(touched,formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeate(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
      fullWidth
      type="text"
      label="First Name"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.firstName}
      name={formattedName("firstName")}
      error={formattedError("firstName")}
      helperText={formatterHelper("firstName")}
      sx={{gridColumn: "span 2"}}
      />
       <TextField
      fullWidth
      type="text"
      label="Last Name"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.lastName}
      name={formattedName("lastName")}
      error={formattedError("lastName")}
      helperText={formatterHelper("lastName")}
      sx={{gridColumn: "span 2"}}
      />
       <TextField
      fullWidth
      type="text"
      label="Country"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.country}
      name={formattedName("country")}
      error={formattedError("country")}
      helperText={formatterHelper("country")}
      sx={{gridColumn: "span 4"}}
      />
          <TextField
      fullWidth
      type="text"
      label="Street Address"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.street1}
      name={formattedName("street1")}
      error={formattedError("street1")}
      helperText={formatterHelper("street1")}
      sx={{gridColumn: "span 2"}}
      />
          <TextField
      fullWidth
      type="text"
      label="Street Address 2(Optional)"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.street2}
      name={formattedName("street2")}
      error={formattedError("street2")}
      helperText={formatterHelper("street2")}
      sx={{gridColumn: "span 2"}}
      />
       <TextField
      fullWidth
      type="text"
      label="City"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.city}
      name={formattedName("city")}
      error={formattedError("city")}
      helperText={formatterHelper("city")}
      sx={{gridColumn: "span 2"}}
      />
         <TextField
      fullWidth
      type="text"
      label="State"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.state}
      name={formattedName("state")}
      error={formattedError("state")}
      helperText={formatterHelper("state")}
      sx={{gridColumn: "1fr"}}
      />
       <TextField
      fullWidth
      type="text"
      label="Zip Code"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.zipCode}
      name={formattedName("zipCode")}
      error={formattedError("zipCode")}
      helperText={formatterHelper("zipCode")}
      sx={{gridColumn: "1fr"}}
      />
    </Box>
  );
};

export default AddressForm;
