import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { Button, Box } from "@mui/material";

import UseGetDragonList from "../../hooks/query/useGetDragonList";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Dragons = () => {
  const re = UseGetDragonList();
  const dragonList = re.dragonList;
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
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Active Status</TableCell>
            <TableCell align="center">Crew Capacity</TableCell>
            <TableCell align="center">First Flight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dragonList.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell align="right">{row.id}</TableCell> */}
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">
                {row.active === true ? "Active" : "Not Active"}
              </TableCell>
              <TableCell align="center">{row.crew_capacity}</TableCell>
              <TableCell align="center">{row.first_flight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dragons;
