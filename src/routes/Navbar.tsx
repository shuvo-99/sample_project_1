// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import HomeIcon from "@mui/icons-material/Home";
import RocketIcon from "@mui/icons-material/Rocket";
import PetsIcon from "@mui/icons-material/Pets";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          {/* <Link to="/createUser">
            <Button style={{ color: "white" }}>Add User</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
