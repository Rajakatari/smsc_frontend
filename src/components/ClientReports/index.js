import { ClientReportContainer } from "./styledComponent";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserContext from "../../context/UserContext";

const ClientReports = (props) => {
  //   const rows = [
  //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //     createData("Eclair", 262, 16.0, 24, 6.0),
  //     createData("Cupcake", 305, 3.7, 67, 4.3),
  //     createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   ];

  return (
    <UserContext.Consumer>
      {(value) => {
        const { isDark, userWiseData } = value;
        return (
          <ClientReportContainer isDarkTheme={isDark}>
            <h3>Client Reports</h3>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Client</TableCell>
                    <TableCell align="right">Submited</TableCell>
                    <TableCell align="right">Delivered</TableCell>
                    <TableCell align="right">Delivered in&nbsp;(%)</TableCell>
                    <TableCell align="right">Undelivered</TableCell>
                    <TableCell align="right">Undelivered in&nbsp;(%)</TableCell>
                    <TableCell align="right">Error_1</TableCell>
                    <TableCell align="right">Error_6</TableCell>
                    <TableCell align="right">Error_13</TableCell>
                    <TableCell align="right">Error_21</TableCell>
                    <TableCell align="right">Error_32</TableCell>
                    <TableCell align="right">Error_34</TableCell>
                    <TableCell align="right">Error_51</TableCell>
                    <TableCell align="right">Error_69</TableCell>
                    <TableCell align="right">Error_253</TableCell>
                    <TableCell align="right">Error_254</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userWiseData.map((row) => (
                    <TableRow
                      key={row.Client}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Client}
                      </TableCell>
                      <TableCell align="right">{row.submited}</TableCell>
                      <TableCell align="right">{row.delivered}</TableCell>
                      <TableCell align="right">
                        {row.deliveredPer}&nbsp;(%)
                      </TableCell>
                      <TableCell align="right">{row.undelivered}</TableCell>
                      <TableCell align="right">
                        {row.undeliveredPer}&nbsp;(%)
                      </TableCell>
                      <TableCell align="right">{row.error1}</TableCell>
                      <TableCell align="right">{row.error6}</TableCell>
                      <TableCell align="right">{row.error13}</TableCell>
                      <TableCell align="right">{row.error21}</TableCell>
                      <TableCell align="right">{row.error32}</TableCell>
                      <TableCell align="right">{row.error34}</TableCell>
                      <TableCell align="right">{row.error51}</TableCell>
                      <TableCell align="right">{row.error69}</TableCell>
                      <TableCell align="right">{row.error253}</TableCell>
                      <TableCell align="right">{row.error254}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ClientReportContainer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ClientReports;
