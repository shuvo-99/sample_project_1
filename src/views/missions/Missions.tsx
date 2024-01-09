// import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Typography } from "@mui/material";

import UseGetMissionList from "../../hooks/query/useGetMissionList";
import { Link } from "react-router-dom";

const Missions = () => {
  const re = UseGetMissionList();
  const dragonList = re.missionList;
  // console.log("::::::::::ssss ", dragonList[0].active.toString());
  // const act = dragonList[0].active === true ? "Active" : "Not Active";
  // console.log(":::::::::: ", act);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" component="div" align="center">
        Dragon List
      </Typography>
      <Table align="center" sx={{ width: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="right">Id</TableCell> */}
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="center">Wikipedia</TableCell>
            <TableCell align="center">Website</TableCell>
            <TableCell align="center">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dragonList.map((row) => (
            <TableRow
              key={row.mission_id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell align="right">{row.id}</TableCell> */}
              <TableCell align="right">{row.mission_name}</TableCell>
              <TableCell align="right">{row.mission_id}</TableCell>

              <TableCell align="center">
                <Link to={row.wikipedia}>Wikipedia</Link>
              </TableCell>
              <TableCell align="center">
                <Link to={row.website}>Website</Link>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "150px", // Define a maximum width for the cell
                  fontSize: "14px", // Set the desired font size
                }}
              >
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Missions;
