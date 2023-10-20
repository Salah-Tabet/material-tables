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


const MainPage = () => {
  return (
    <Grid sx={{ flexGrow: 1, mt: 12 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={8}>
            
          <Grid item>
              <Link to="/pcr-editor/create" style={{textDecoration: 'none'}}>
                  <Card sx={{ ...cardStyle, backgroundColor: blue[900], borderRadius: 4, ':hover': { boxShadow: 20 }, }}>
                      <CardContent>
                          <Typography variant="h6" align="center" style={textContentStyle}>Create Permission Change Request</Typography>
                      </CardContent>
                  </Card> 
              </Link>
          </Grid>

          <Grid item>
              <Link to="/pcr-review" style={{textDecoration: 'none'}}>
                  <Card sx={{ ...cardStyle, backgroundColor: teal[500], borderRadius: 4, ':hover': { boxShadow: 20 }, }}>
                      <CardContent>
                          <Typography variant="h6" align="center" style={textContentStyle}>Review Permission Change Requests</Typography>
                      </CardContent>
                  </Card>
              </Link>
          </Grid>
              
          <Grid item>
              <Link to="/reports" style={{textDecoration: 'none'}}>
                  <Card sx={{ ...cardStyle, backgroundColor: amber[700], borderRadius: 4, ':hover': { boxShadow: 20 }, }}>
                      <CardContent>
                          <div style={textContainerStyle}>
                            <Typography variant="h6" align="center" style={textContentStyle}>Generate Reports</Typography>
                          </div>
                      </CardContent>
                  </Card>
              </Link>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default MainPage;
