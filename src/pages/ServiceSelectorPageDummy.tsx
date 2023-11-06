import React from 'react';
import ServiceSelector from '../components/ServiceSelector';
import { Box, Grid } from '@mui/material';


const ServiceSelectorPageDummy: React.FC = () => {
    return (
        <>
        <Grid
      container
      justifyContent="center" 
      alignItems="center"     
      style={{ minHeight: '100vh' }} 
    >
      <Grid item xs={8} style={{ textAlign: "center", width: '65%' }}>
         <ServiceSelector /> 
      </Grid>
    </Grid>
        </>
   )
}

export default ServiceSelectorPageDummy;