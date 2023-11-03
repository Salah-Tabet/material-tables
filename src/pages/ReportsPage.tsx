import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { amber, blue, brown, green, grey, orange, teal, yellow } from '@mui/material/colors';


const cardStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 220,
  height: 200,
};
const textContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const textContentStyle = {
  maxWidth: '99%',
  color: '#fff',
  fontWeight: 'bold',
};


const ReportsPage = () => {
  return (
    <Grid sx={{ flexGrow: 1, mt: 12 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={8}>
            
          <Grid item>
              <Link to="/reports/service-access-report" style={{textDecoration: 'none'}}>
                  <Card sx={{ ...cardStyle, backgroundColor: blue[900], borderRadius: 4, ':hover': { boxShadow: 20 }, }}>
                      <CardContent>
                          <Typography variant="h6" align="center" style={textContentStyle}>Service Access Reports</Typography>
                      </CardContent>
                  </Card> 
              </Link>
          </Grid>

          <Grid item>
              <Link to="/reports/role-access-reports" style={{textDecoration: 'none'}}>
                  <Card sx={{ ...cardStyle, backgroundColor: teal[500], borderRadius: 4, ':hover': { boxShadow: 20 }, }}>
                      <CardContent>
                          <Typography variant="h6" align="center" style={textContentStyle}>Role Access Reports</Typography>
                      </CardContent>
                  </Card>
              </Link>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReportsPage;
