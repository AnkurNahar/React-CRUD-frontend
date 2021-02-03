import React from 'react';
import './Form.css';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const rows = [
    { id: 1, userName: 'Ankur Nahar', phone: '01779098084', email: 'ankurnahar.an@gmail.com' },
    { id: 1, userName: 'Ankur Nahar', phone: '09098084', email: 'ankurnahar.an@gmail.com' },
    { id: 1, userName: 'Ankur', phone: '01779098084', email: 'ankurnahar.an@gmail.com' },
    { id: 1, userName: 'Ankur Nahar', phone: '01779098084', email: 'ankurnahar' },
    { id: 1, userName: 'Ankur Nahar', phone: '01779098084', email: 'ankurnahar.an@gmail.com' },
    { id: 1, userName: 'Ankur Nahar', phone: '084', email: 'ankurnahar.an@gmail.com' },
    { id: 1, userName: 'Ankur Nahar', phone: '01779098084', email: 'ankurna' },
    { id: 1, userName: 'Ankur Nahar', phone: '01779098084', email: 'ankurnahar.an@gmail.com' }
  ];

const userList = () => {
  return (
    <div>
    <Container>
    <Card className='Card-content'>
      <CardContent>
      <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.userName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"> <Button color="primary">Update</Button></TableCell>
              <TableCell align="right"><Button color="secondary">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </CardContent>
    </Card>
     
  </Container>
  </div>
  );
}

export default userList;