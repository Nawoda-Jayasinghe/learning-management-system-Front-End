import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";

function createData(name, description, marks) {
  return { name, description, marks };
}

const rows = [
  createData("Assignment 1", "Mathematics tutorial lesson 1", "85%"),
  createData("Assignment 2", "Mathematics tutorial lesson 2", "70%"),
  createData("Assignment 3", "Mathematics tutorial lesson 3", "54%"),
  createData("Assignment 4", "Mathematics tutorial lesson 4", "78%"),
  createData("Assignment 5", "Mathematics tutorial lesson 5", "45%"),
];

export default function StudentCourseMarks() {
  return (
    <Card style={{ padding: "10px", width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Assignment Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
