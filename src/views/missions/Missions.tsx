import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Missions = () => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" component="div" align="center">
        Mission List
      </Typography>
      <Table align="center" sx={{ width: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "30px" }}>Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date Of Birth</TableCell>
            <TableCell align="right">Profile Link</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {/* <Box
                  sx={{
                    backgroundColor: "#ddd",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  {<img src={row.profileImage} width="100" height="100" />}
                </Box> */}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              {/* <TableCell align="right">
                <Link to={`/profile/${row.id}`}>
                  <Button>Profile</Button>
                </Link>
              </TableCell>
              <TableCell align="right">
                <Link to={`/updateUser/${row.id}`}>
                  <Button>Edit</Button>
                </Link>
              </TableCell> */}
              {/* <TableCell>
                <Button onClick={() => handleDelete(row)}>Delete</Button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Missions;
