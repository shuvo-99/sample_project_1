import React, { useState } from "react";
import {
  Modal,
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import useCreateUser from "../../hooks/mutate/useCreateUser";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  contactNo: Yup.number()
    .required("Contact No is required")
    .min(11, "Contact No must be at 11 charcters"),
  dob: Yup.date().required("Date of Birth is required"),
  isSuperUser: Yup.boolean().required(
    "Please select whether the user is a SuperUser or not"
  ),
  address: Yup.string().required("Address is required"),
});

// import DatePicker from "react-datepicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
const CreateModal = ({ open, handleClose }) => {
  const [dob, setDob] = useState(null);
  const selectOptions = [
    { id: true, text: "True" },
    { id: false, text: "False" },
  ];
  // const { setFieldValue } = useFormikContext();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-modal-title"
      aria-describedby="create-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          border: "2px solid",
          boxShadow: 24,
          p: 4,
          maxWidth: 400,
          width: "80%",
          maxHeight: "80%",
          overflowY: "auto",
        }}
      >
        <h1>Signup</h1>
        <Formik
          initialValues={{
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            contactNo: "",
            dob: Date.now(),
            isSuperUser: "",
            address: "",
            roles: ["b9c5e407-d4dd-4a7f-923f-4c25f44675f5"],
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form values:", values);
            console.log("Yes I am here");

            axios
              .post(
                "https://aceexam-node-api.mpower-social.com/api/v1/administration/addUser",
                values
              )
              .then((response) => {
                console.log("Form successfully submitted:", response.data);
                // Optionally perform any other actions, e.g., show success message, redirect, etc.
                handleClose(); // Close the modal after form submission
              })
              .catch((error) => {
                console.error("Error submitting form:", error);
                // Handle errors here, e.g., display error message to the user
              })
              .finally(() => {
                setSubmitting(false); // Reset submitting state if needed
              });
          }}
        >
          {({ setFieldValue, values, handleChange }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="User Name"
                    name="userName"
                    placeholder="John"
                    value={values.userName}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="userName" component="div" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="firstName" component="div" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="lastName" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    placeholder="john@acme.com"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="email" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    placeholder="********"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="password" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact No"
                    name="contactNo"
                    placeholder="123"
                    type="number"
                    value={values.contactNo}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="contactNo" component="div" />
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Date of Birth"
                      name="dob"
                      value={values.dob || dob} // Make sure it's properly initialized and synced
                      onChange={(newValue) => {
                        setDob(newValue); // Update local state for the DatePicker
                        setFieldValue("dob", newValue); // Update Formik's dob field
                      }}
                    />
                  </LocalizationProvider>
                  <ErrorMessage name="dob" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={Select}
                    placeholder="Select One"
                    name="isSuperUser"
                    variant="outlined"
                    fullWidth
                    label="SuperUser?"
                    displayEmpty
                    type="date"
                    defaultValue=""
                    value={values.isSuperUser}
                    onChange={(e) => {
                      const selectedText = e.target.value;
                      const selectedItem = selectOptions.find(
                        (option) => option.text === selectedText
                      );
                      if (selectedItem) {
                        setFieldValue("isSuperUser", selectedItem.text);
                      } else {
                        setFieldValue("isSuperUser", ""); // Set a default value if needed
                      }
                    }}
                  >
                    <MenuItem value="" disabled>
                      SuperUser?
                    </MenuItem>
                    <MenuItem value="True">Yes</MenuItem>
                    <MenuItem value="False">No</MenuItem>
                  </Field>
                  <ErrorMessage name="isSuperUser" component="div" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Adress"
                    name="address"
                    placeholder="Dhaka"
                    onChange={handleChange}
                    value={values.address}
                  />
                </Grid>
                <ErrorMessage name="address" component="div" />
              </Grid>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default CreateModal;
