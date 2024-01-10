import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
// import Typography from "@mui/material/Typography";
import { ModalComponentProps } from "../../types";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import EventIcon from "@mui/icons-material/Event";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 0.6,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "10px",
  m: 1,
  // marginTop: 4,
  // marginBottom: 4,
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  handleClose,
}) => {
  const [value, setValue] = React.useState("false");

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => {
      console.log("Previous value:", prevValue);
      console.log("New value:", event.target.value);
      return event.target.value;
    });
  };

  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    dob: "",
    isSuperuser: "",
    address: "",
    roles: ["b9c5e407-d4dd-4a7f-923f-4c25f44675f5"],
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(4, "Password should be of minimum 4 characters length")
      .required("Password is required"),
    contactNo: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    isSuperuser: Yup.boolean().required("Required"),
    address: Yup.string().required("Required"),
  });

  const onSubmit = (values: object) => {
    console.log("Form data", values);
  };

  const formik = useFormik({
    initialValues: { userName: "", lastName: "" },
    onSubmit: (values) => {
      console.log(values); // // returns info as objects
    },
  });

  console.log(formik.values);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          {/* <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // You can log the form data here
              console.log("Form data", values);

              values.dob = values.dob ? values.dob.toString() : "";

              // Example of handling asynchronous operations
              setTimeout(() => {
                // Perform any asynchronous actions if needed
                // ...

                // After the asynchronous actions, setSubmitting to false
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} style={{ margin: 1 }}>
                <div>
                  <TextField
                    fullWidth
                    id="userName"
                    placeholder="userName"
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    sx={{ marginBottom: 1 }}
                  />
                  <br />
                  {errors.userName && touched.userName && errors.userName}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <TextField
                    fullWidth
                    type="password"
                    id="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="contactNo"
                    placeholder="contactNo"
                    name="contactNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNo}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.contactNo && touched.contactNo && errors.contactNo}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="dob"
                    placeholder="dob"
                    name="dob"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.dob && touched.dob && (
                    <div style={{ color: "red" }}>{errors.dob}</div>
                  )}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="isSuperuser"
                    placeholder="isSuperuser"
                    name="isSuperuser"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.isSuperuser}
                    sx={{ marginBottom: 1 }}
                  />
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    IsSuperUser?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="isSuperuser"
                    value={values.isSuperuser.toString()}
                    onChange={handleCheckboxChange}
                  >
                    <FormControlLabel
                      value="ture"
                      control={<Radio />}
                      label="True"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="False"
                    />
                  </RadioGroup>
                  {errors.isSuperuser &&
                    touched.isSuperuser &&
                    errors.isSuperuser}
                </div>
                <div>
                  <TextField
                    fullWidth
                    id="address"
                    placeholder="address"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    sx={{ marginBottom: 1 }}
                  />
                  {errors.address && touched.address && errors.address}
                </div>

                <Button type="submit">Submit</Button>
              </form>
            )}
          </Formik> */}
          <form onSubmit={formik.handleSubmit}>
            <div>
              <TextField
                fullWidth
                sx={{ marginBottom: 1 }}
                id="userName"
                placeholder="userName"
                name="userName"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </div>
            <div>
              <TextField
                fullWidth
                sx={{ marginBottom: 1 }}
                placeholder="lastname"
                name="lastName"
                id="lastName"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </div>
            <div className="form-btn">
              <Button>Submit</Button>
            </div>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
