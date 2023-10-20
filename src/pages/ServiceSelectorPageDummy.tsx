import React from 'react';
import ServiceSelector from '../components/ServiceSelector';
import { Box, Grid } from '@mui/material';


const ServiceSelectorPageDummy: React.FC = () => {
    return (
        <>
        <Grid item xs={4} style={{textAlign: "center"}} >
            <ServiceSelector />
        </Grid>
        </>
   )
}

export default ServiceSelectorPageDummy;