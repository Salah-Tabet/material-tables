
import React from 'react'; 
import { Box, AppBar, Toolbar, Link, Typography } from '@mui/material';
import { useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
    const currentPage: string = useLocation().pathname;
return (
<Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
<Toolbar variant="dense">

    <Box m={2}>
        { currentPage !== "/" && <Link href="/#/" underline="hover" variant="h6" color="inherit" data-testid="home-link">Home</Link>}
        { currentPage === "/" && <Typography variant="h6" color="inherit" data-testid="home-typography">Home</Typography>}
    </Box>

    <Box m={2}>
        {currentPage !== "/reports" && <Link href="/#/reports" underline="hover" variant="h6" color="inherit" data-testid="list-pcrs-link">Reports</Link>}
        {currentPage === "/reports" && <Typography variant="h6" color="inherit" data-testid="list-pcrs-typography">Reports</Typography>} 
    </Box>


</Toolbar>
</AppBar>
</Box>
);
}