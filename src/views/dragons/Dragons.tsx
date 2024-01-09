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
  console.log(";;;", re);
  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" component="div" align="center">
        User List
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
          {/* {users.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Box
                  sx={{
                    backgroundColor: "#ddd",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  {<img src={row.profileImage} width="100" height="100" />}
                </Box>
              </TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.dateOfBirth}</TableCell>
              <TableCell align="right">
                <Link to={`/profile/${row.id}`}>
                  <Button>Profile</Button>
                </Link>
              </TableCell>
              <TableCell align="right">
                <Link to={`/updateUser/${row.id}`}>
                  <Button>Edit</Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button onClick={() => handleDelete(row)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dragons;
