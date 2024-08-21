import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Define options for the dropdowns
const dataSourcesOptions = [
    { value: '1', label: 'LWCC'},
    { value: '2', label: 'HXG'},
    { value: '3', label: 'ESI'},
    { value: '4', label: 'Other Flat files'}
    
];

const testCasesOptions = [
    { value: '1', label: 'Data Availability check' },
    { value: '2', label: 'table Schema Check' },
    { value: '3', label: 'Column Value Consistency Check' }
];

const Content = () => {
    const [selectedDataSources, setSelectedDataSources] = useState([]);
    const [selectedTestCases, setSelectedTestCases] = useState([]);

    const handleDataSourcesChange = (event) => {
        setSelectedDataSources(event.target.value);
    };

    const handleTestCasesChange = (event) => {
        setSelectedTestCases(event.target.value);
    };

    return (
        <>
            <h3 style={{ color: "#0ea" }}>HEDIS Health Checker Inputs</h3>
            <p style={{ color: "#0af", fontSize: "16px" }}>
                This screen will help you select the relevant data sources and test cases you want to run to check data health. You can select one or more options to run the DVE.
            </p>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p style={{ color: "#0af" }}>
                            Please select the following inputs from the drop-down options to check for data health
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography sx={{ borderStyle: "solid", padding: '8px' }}>
                                    <h4 style={{ color: "#0af" }}>Step 1: Data Sources Selection</h4>
                                    <p style={{ fontStyle: 'italic' }}>Select all the data sources for which you want to check data health</p>
                                    <b>Measures*</b><br />
                                    <FormControl fullWidth>
                                        <InputLabel id="dataSources-select-label">Multiple Data Sources Selected</InputLabel>
                                        <Select
                                            labelId="dataSources-select-label"
                                            id="dataSources-select"
                                            multiple
                                            value={selectedDataSources}
                                            onChange={handleDataSourcesChange}
                                            renderValue={(selected) => selected.length === dataSourcesOptions.length ? 'All Selected' : selected.join(', ')}
                                            sx={{
                                                backgroundColor: 'yellowgreen',
                                                color: 'black',
                                                width: '100%',
                                                padding: '8px',
                                                border: '1px solid'
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>Select Data Sources</em>
                                            </MenuItem>
                                            {dataSourcesOptions.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    <Checkbox checked={selectedDataSources.indexOf(option.value) > -1} />
                                                    <ListItemText primary={option.label} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Typography>
                            </Grid>

                            <Grid item xs={6}>
                                <Typography sx={{ borderStyle: "solid", padding: '8px' }}>
                                    <h4 style={{ color: "#0af" }}>Step 2: Test Cases Selection</h4>
                                    <p style={{ fontStyle: 'italic' }}>Select all the applicable test cases you want to run for the data check</p>
                                    <b>Test Cases*</b><br />
                                    <FormControl fullWidth>
                                        <InputLabel id="testCases-select-label">Multiple Test Cases Selected</InputLabel>
                                        <Select
                                            labelId="testCases-select-label"
                                            id="testCases-select"
                                            multiple
                                            value={selectedTestCases}
                                            onChange={handleTestCasesChange}
                                            renderValue={(selected) => selected.length === testCasesOptions.length ? 'All Selected' : selected.join(', ')}
                                            sx={{
                                                backgroundColor: 'yellowgreen',
                                                color: 'black',
                                                width: '100%',
                                                padding: '8px',
                                                border: '1px solid'
                                            }}
                                        >
                                            <MenuItem value="">
                                                <em>Select Test Cases</em>
                                            </MenuItem>
                                            {testCasesOptions.map(option => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    <Checkbox checked={selectedTestCases.indexOf(option.value) > -1} />
                                                    <ListItemText primary={option.label} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <>
                    {/* Other content in your Grid layout */}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {/* Content goes here */}
                        </Grid>
                    </Grid>

                    {/* Container for the fixed button with text and arrow */}
                    <div style={{
                        position: 'fixed',
                        bottom: '16px',
                        right: '16px',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '8px',
                            borderRadius: '4px',
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                            marginRight: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '14px'
                        }}>
                            <span> Hit this button to refresh the results</span>
                            <div style={{
                                width: 0,
                                height: 0,
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderTop: '8px solid white',
                                marginLeft: '8px'
                            }}></div>
                        </div>
                        <Stack direction="row" spacing={2}>
                            <Button variant="contained" href="#contained-buttons" style={{
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                            }}>Run Health Checker</Button>
                        </Stack>
                    </div>
                </>
                </Grid>
            </Box>
        </>
    );
};

const HealthCheckInput = () => {
    return <Content />;
};

export default HealthCheckInput;
