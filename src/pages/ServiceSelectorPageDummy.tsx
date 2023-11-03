import React from 'react';
import ServiceSelector from '../components/ServiceSelector';
import { Box, Grid } from '@mui/material';


const ServiceSelectorPageDummy: React.FC = () => {
    return (
        <>
        <Grid
      container
      justifyContent="center" // Horizontally centering the content
      alignItems="center"     // Vertically centering the content
      style={{ minHeight: '100vh' }} // Ensure the component takes up the full height of the viewport
    >
      <Grid item xs={8} style={{ textAlign: "center", width: '65%' }}>
         <ServiceSelector /> 
      </Grid>
    </Grid>
        </>
   )
}

export default ServiceSelectorPageDummy;