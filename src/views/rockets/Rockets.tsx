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
import UseGetRocketList from "../../hooks/query/useGetRocketList";

const Rockets = () => {
  const re = UseGetRocketList();
  const rocketList = re.rocketList;
  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" component="div" align="center">
        Rocket List
      </Typography>
      <Table align="center" sx={{ width: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell align="right">Id</TableCell> */}
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Active Status</TableCell>
            <TableCell align="center">Stages</TableCell>
            <TableCell align="center">Boosters</TableCell>
            <TableCell align="center">Cost_per_launch</TableCell>
            <TableCell align="center">Success_rate_pct</TableCell>
            <TableCell align="center">First Flight</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rocketList.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell align="right">{row.id}</TableCell> */}
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="center">
                {row.active === true ? "Active" : "Not Active"}
              </TableCell>
              <TableCell align="center">{row.stages}</TableCell>
              <TableCell align="center">{row.boosters}</TableCell>
              <TableCell align="center">{row.cost_per_launch}</TableCell>
              <TableCell align="center">{row.success_rate_pct}</TableCell>
              <TableCell align="center">{row.first_flight}</TableCell>
              <TableCell align="center">{row.country}</TableCell>
              <TableCell align="center">{row.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Rockets;
