import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
// import Typography from "@mui/material/Typography";
import { ModalComponentProps } from "../../types";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  open,
  handleClose,
}) => {
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    dob: Yup.date,
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
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
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <TextField
                    id="userName"
                    placeholder="userName"
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  {errors.userName && touched.userName && errors.userName}
                </div>
                <div>
                  <TextField
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName && errors.firstName}
                </div>
                <div>
                  <TextField
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName && errors.lastName}
                </div>
                <div>
                  <TextField
                    id="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <TextField
                    type="password"
                    id="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <div>
                  <TextField
                    id="contactNo"
                    placeholder="contactNo"
                    name="contactNo"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNo}
                  />
                  {errors.contactNo && touched.contactNo && errors.contactNo}
                </div>
                <div>
                  <TextField
                    id="dob"
                    placeholder="dob"
                    name="dob"
                    type="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dob}
                  />
                  {errors.dob && touched.dob && (
                    <div style={{ color: "red" }}>
                      {errors.dob as React.ReactNode}
                    </div>
                  )}
                </div>
                <div>
                  <TextField
                    id="isSuperuser"
                    placeholder="isSuperuser"
                    name="isSuperuser"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.isSuperuser}
                  />
                  {errors.isSuperuser &&
                    touched.isSuperuser &&
                    errors.isSuperuser}
                </div>
                <div>
                  <TextField
                    id="address"
                    placeholder="address"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {errors.address && touched.address && errors.address}
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
