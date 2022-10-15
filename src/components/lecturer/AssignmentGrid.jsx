
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
// import {EditOutlined, DeleteOutlined} from '@ant-design/icons';


function createData(name, description) {
  return { name, description };
}

const rows = [
  createData('Assignment 1', 'You have to submit test papaer 1 before 05th of september 2022' ),
  createData('Assignment 2', 'You have to submit test papaer 2 before 05th of september 2022' ),
  createData('Assignment 3', 'You have to submit test papaer 3 before 05th of september 2022' ),
  createData('Assignment 4', 'You have to submit test papaer 4 before 05th of september 2022' ),

  
];

//for delete
const handleClick = (e) => {
    e.preventDefault();
    console.log('The delete was clicked');
  }

export default function AssignmentGrid() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Action</TableCell>

            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.action}<Button variant="outlined" color="success" onClick={handleClick}>Delete</Button><><br /><br /></><Button variant="outlined" color="success" onClick={handleClick}>Edit</Button></TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

