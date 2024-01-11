// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

import RocketIcon from "@mui/icons-material/Rocket";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
// import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Dialog,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";
import useAddUser from "../hooks/mutation/useAddUserData";
import { UserCreationPayload } from "../types";

const Navbar = () => {
  const { mutateAsync } = useAddUser();
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const createUserAsynchronously = async (data: UserCreationPayload) => {
    await mutateAsync(data);
  };

  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
  };

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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("Submitting", values);
        // Call the addUser function to handle the mutation and post the user data
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await createUserAsynchronously(values);
        closepopup();
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle the error as needed (e.g., show an error message to the user)
      }
    },
  });

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);

  // console.log(formik.values);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#616f71" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <Button style={{ color: "white" }}>Home</Button>
            </Link>
            <Link to="/dragonList">
              <Button style={{ color: "white" }}>
                <PetsIcon style={{ color: "white" }}></PetsIcon>Dragons
              </Button>
            </Link>
            <Link to="/missionList">
              <Button style={{ color: "white" }}>
                <FlagCircleIcon style={{ color: "white" }}></FlagCircleIcon>
                Missions
              </Button>
            </Link>
            <Link to="/rocketList">
              <Button style={{ color: "white" }}>
                <RocketIcon style={{ color: "white" }}></RocketIcon>Rockets
              </Button>
            </Link>
          </Typography>

          <Button style={{ color: "white" }} onClick={functionopenpopup}>
            Add User
          </Button>

          <Dialog open={open} onClose={closepopup}>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={closepopup}
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
                          {errors.userName &&
                            touched.userName &&
                            errors.userName}
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
                          {errors.firstName &&
                            touched.firstName &&
                            errors.firstName}
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
                          {errors.lastName &&
                            touched.lastName &&
                            errors.lastName}
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
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
                          {errors.contactNo &&
                            touched.contactNo &&
                            errors.contactNo}
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
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      {/* User Name */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          id="userName"
                          placeholder="User Name"
                          name="userName"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.userName}
                        />
                        {formik.errors.userName && formik.touched.userName && (
                          <div style={{ color: "red" }}>
                            {formik.errors.userName}
                          </div>
                        )}
                      </div>
                      {/* First Name */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="firstName"
                          name="firstName"
                          id="firstName"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                        />
                        {formik.errors.firstName &&
                          formik.touched.firstName && (
                            <div style={{ color: "red" }}>
                              {formik.errors.firstName}
                            </div>
                          )}
                      </div>
                      {/* Last Name */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="Last Name"
                          name="lastName"
                          id="lastName"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                        />
                        {formik.errors.lastName && formik.touched.lastName && (
                          <div style={{ color: "red" }}>
                            {formik.errors.lastName}
                          </div>
                        )}
                      </div>
                      {/* Email */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="Email"
                          name="email"
                          id="email"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div style={{ color: "red" }}>
                            {formik.errors.email}
                          </div>
                        )}
                      </div>
                      {/* Password */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="Password"
                          type="password"
                          name="password"
                          id="password"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                        />
                        {formik.errors.password && formik.touched.password && (
                          <div style={{ color: "red" }}>
                            {formik.errors.password}
                          </div>
                        )}
                      </div>
                      {/* Contact */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="contactNo"
                          name="contactNo"
                          id="contactNo"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.contactNo}
                        />
                        {formik.errors.contactNo &&
                          formik.touched.contactNo && (
                            <div style={{ color: "red" }}>
                              {formik.errors.contactNo}
                            </div>
                          )}
                      </div>
                      {/* Date */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="dob"
                          type="date"
                          name="dob"
                          id="dob"
                          variant="filled"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.dob}
                        />
                        {formik.errors.dob && formik.touched.dob && (
                          <div style={{ color: "red" }}>
                            {formik.errors.dob}
                          </div>
                        )}
                      </div>
                      {/* isSuperUser */}
                      <div style={{ marginTop: "2px" }}>
                        <label htmlFor="">Are you Super User?</label>
                        <div>
                          <FormControlLabel
                            control={
                              <Radio
                                checked={formik.values.isSuperuser === "true"}
                                onChange={formik.handleChange}
                                value="true"
                                name="isSuperuser"
                              />
                            }
                            label="True"
                          />
                          <FormControlLabel
                            control={
                              <Radio
                                checked={formik.values.isSuperuser === "false"}
                                onChange={formik.handleChange}
                                value="false"
                                name="isSuperuser"
                              />
                            }
                            label="False"
                          />
                        </div>
                        {formik.errors.isSuperuser &&
                          formik.touched.isSuperuser && (
                            <div style={{ color: "red" }}>
                              {formik.errors.isSuperuser}
                            </div>
                          )}
                      </div>
                      {/* address */}
                      <div>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: 1 }}
                          placeholder="address"
                          // type="date"
                          name="address"
                          id="address"
                          variant="filled"
                          onChange={formik.handleChange}
                          value={formik.values.address}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.address && formik.touched.address && (
                          <div style={{ color: "red" }}>
                            {formik.errors.address}
                          </div>
                        )}
                      </div>

                      <Button
                        style={{ justifyContent: "center" }}
                        variant="contained"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </Box>
              </Fade>
            </Modal>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
