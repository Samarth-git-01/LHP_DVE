import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import HealthCheckInput from './component/HeathCheckerInput/HealthCheckerInput';
import ValueCheckInput from './component/ValueCheckerInput/ValueCheckerInput';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function FullWidthTabs() {
  const [value, setValue] = React.useState(0);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString());
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ flexGrow: 1 }}
          >
            <Tab label="Health Checker Inputs" />
            <Tab label="Health Checker Summary" />
            <Tab label="Value Checker Inputs" />
            <Tab label="Value Checker Summary" />
          </Tabs>
          <Typography variant="h6">Refresh Date: {currentDate}</Typography>
        </Box>
      </AppBar>
      <TabPanel value={value} index={0}>
      <HealthCheckInput/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Health Checker Summary
      </TabPanel>
      <TabPanel value={value} index={2}>
       <ValueCheckInput/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Content for Value Checker Summary
      </TabPanel>
    </Box>
  );
}

function App() {
  return (
    <FullWidthTabs />
  );
}

export default App;
