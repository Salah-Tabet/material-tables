import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, Box, TableHead, TableCell, TableContainer, Paper, TableRow, Button, TableBody, Table } from '@mui/material';
import { amber, blue, brown, green, grey, orange, teal, yellow } from '@mui/material/colors';
import ServiceSelector from '../components/ServiceSelector';
import RolesSelector from '../components/RolesSelector';

const customServiceSelectorStyle = {
    minHeight: 'auto', 
  };

const ReportsRolePage = () => {
  return (
    <>
      <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" component="div" sx={{ textAlign: 'left', marginLeft: '16px', marginTop: '16px' }}>
          Role Access Reports
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ justifyContent: 'center', width: '60%' }}>
        {/* <ServiceSelector maxSelection={1000} buttonText="Generate" sx={{ width: '60%', ...customServiceSelectorStyle }} /> */}
        <RolesSelector  maxSelection={1000}/>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'left', marginLeft: '16px', marginTop: '16px' }}>
        <Button variant="contained" color="primary">
          Generate Report
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ margin: '16px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Header 1</TableCell>
                <TableCell>Header 2</TableCell>
                <TableCell>Header 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Row 1, Cell 1</TableCell>
                <TableCell>Row 1, Cell 2</TableCell>
                <TableCell>Row 1, Cell 3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Row 2, Cell 1</TableCell>
                <TableCell>Row 2, Cell 2</TableCell>
                <TableCell>Row 2, Cell 3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </>
  )
}

export default ReportsRolePage;
