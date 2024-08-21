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
    { value: '1', label: 'AAP - Adults to Preventive/Ambulatory Health Services'},
    { value: '2', label: 'AHU - Acute Hospital utilization'},
    { value: '3', label: 'AIS-E - Adult Immunization Status'},
    { value: '4', label: 'AMM - Antidepresant Medication Management'},
    { value: '5', label: 'ASF-E - Alcohol Use Screening and Follow-Up'},
    { value: '6', label: 'BC S-E - Breast Cancer Screening'}    
];

const testCasesOptions = [
    { value: '1', label: 'Age within range' },
    { value: '2', label: 'Date of Service is after admission Date and before discharge Date' },
    { value: '3', label: 'Increase in the number of outpatient visits within threshold'},
    { value: '4', label: 'Procedure codes exists in ICD10CM code system'},
    { value: '5', label: 'Place of service code exists'},
    { value: '6', label: '%increase in new Rx cliams records'}
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
            <h3 style={{ color: "#0ea" }}>HEDIS Data Value Checker Inputs</h3>
            <p style={{ color: "#0af", fontSize: "16px" }}>
            This screen will help you to select the relevant measures, and test cases you want to run the DVE on. User gets to select one or more options to run the DVE
            </p>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p style={{ color: "#0af" }}>
                        Please select the following inputs from the drop-down options to configure the DVE
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography sx={{ borderStyle: "solid", padding: '8px' }}>
                                    <h4 style={{ color: "#0af" }}>Step 1: Measures Selection</h4>
                                    <p style={{ fontStyle: 'italic' }}>Select all the measures for which you want run the DVE for</p>
                                    <b>Measures*</b><br />
                                    <FormControl fullWidth>
                                        <InputLabel id="dataSources-select-label">Multiple Measures Selected</InputLabel>
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
                                    <p style={{ fontStyle: 'italic' }}>Select all the applicable test cases you want to run for the measures selected</p>
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
                            }}>Run Value Checker</Button>
                        </Stack>
                    </div>
                </>
                </Grid>
            </Box>
        </>
    );
};

const ValueCheckInput = () => {
    return <Content />;
};

export default ValueCheckInput;
