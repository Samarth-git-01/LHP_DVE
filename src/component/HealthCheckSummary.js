import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, IconButton, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

// Sample data with additional rows
const data = [
  {
    testCaseId: "TC001",
    submittedDate: "13/09/2002",
    testCaseType: "Availability Check",
    testCaseDescription: "Number of required tables not available",
    dataSources: "HXG",
    value: "1",
    Threshold: "0",
    numberOfError: "0",
    result: "Pass",
    Details: "13/09/2002"    
  },
  {
    testCaseId: "TC002",
    submittedDate: "13/09/2002",
    testCaseType: "Availability Check",
    testCaseDescription: "Number of required tables not available",
    dataSources: "LWCC",
    value: "1",
    Threshold: "0",
    numberOfError: "0",
    result: "Fail",
    Details: "13/09/2002" 
  },
  {
    testCaseId: "TC003",
    submittedDate: "15/10/2022",
    testCaseType: "Performance Test",
    testCaseDescription: "Response time under load",
    dataSources: "HXG",
    value: "200",
    Threshold: "150",
    numberOfError: "1",
    result: "Fail",
    Details: "15/10/2022"
  },
  {
    testCaseId: "TC004",
    submittedDate: "20/11/2022",
    testCaseType: "Security Test",
    testCaseDescription: "SQL Injection Vulnerability",
    dataSources: "LWCC",
    value: "0",
    Threshold: "0",
    numberOfError: "0",
    result: "Pass",
    Details: "20/11/2022"
  },
  {
    testCaseId: "TC005",
    submittedDate: "25/12/2022",
    testCaseType: "Usability Test",
    testCaseDescription: "User Interface Responsiveness",
    dataSources: "HXG",
    value: "1",
    Threshold: "0",
    numberOfError: "0",
    result: "Pass",
    Details: "25/12/2022"
  },
  {
    testCaseId: "TC006",
    submittedDate: "01/01/2023",
    testCaseType: "Regression Test",
    testCaseDescription: "Check for previously fixed bugs",
    dataSources: "LWCC",
    value: "3",
    Threshold: "1",
    numberOfError: "2",
    result: "Fail",
    Details: "01/01/2023"
  },
  {
    testCaseId: "TC007",
    submittedDate: "10/02/2023",
    testCaseType: "Integration Test",
    testCaseDescription: "Service interaction validation",
    dataSources: "HXG",
    value: "0",
    Threshold: "0",
    numberOfError: "0",
    result: "Pass",
    Details: "10/02/2023"
  }
];

// Define KPI data with default values
const kpiData = {
  testPerformed: data.length, // Number of test cases
  testPassed: data.filter(d => d.result === 'Pass').length, // Number of passed test cases
  testFailed: data.filter(d => d.result === 'Fail').length, // Number of failed test cases
  testDidNotRun: 0 // Example value, adjust based on your actual data
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const KPIBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  boxShadow: 'none', // Remove box shadow to have no visible border
}));

const FilterBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: '#e3f2fd',
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none', // Remove box shadow to have no visible border
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  backgroundColor: '#f5f5f5',
  borderRadius: theme.shape.borderRadius,
  textAlign: 'left' // Align text to the start (left)
}));

const TableHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '16px',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));

export default function HealthSummary() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('testCaseId');
  const [sortedData, setSortedData] = React.useState(data);

  const [dataSourceFilter, setDataSourceFilter] = React.useState('');
  const [testCaseTypeFilter, setTestCaseTypeFilter] = React.useState('');
  const [resultFilter, setResultFilter] = React.useState('');

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && order === 'asc';
    setOrder(isAscending ? 'desc' : 'asc');
    setOrderBy(property);
    setSortedData(sortData(property, isAscending ? 'desc' : 'asc'));
  };

  const sortData = (property, order) => {
    return [...data].sort((a, b) => {
      if (order === 'asc') {
        return a[property] < b[property] ? -1 : 1;
      } else {
        return a[property] > b[property] ? -1 : 1;
      }
    });
  };

  // Handler for clicking the eye icon
  const handleViewDetails = (row) => {
    // Logic to handle view details, e.g., open a modal or navigate to a detail page
    alert(`Viewing details for Test Case ID: ${row.testCaseId}`);
  };

  // Handler for download button
  const handleDownload = () => {
    // Logic to download the data, e.g., generating a CSV file
    alert('Download button clicked');
  };

  // Filter handler functions
  const handleDataSourceFilterChange = (event) => {
    setDataSourceFilter(event.target.value);
    // Apply filtering logic here
  };

  const handleTestCaseTypeFilterChange = (event) => {
    setTestCaseTypeFilter(event.target.value);
    // Apply filtering logic here
  };

  const handleResultFilterChange = (event) => {
    setResultFilter(event.target.value);
    // Apply filtering logic here
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <HeadingBox>
            <Typography variant="h4" sx={{ color: 'green', mb: 0 }}>
              HEDIS Data Health Summary
            </Typography>
            <Typography variant="h6" sx={{ color: 'blue', mt: 1 }}>
              This screen offers users a comprehensive overview of test cases statuses, including the total number performed, passed, failed, and those unable to run.
            </Typography>
          </HeadingBox>
        </Grid>

        <Grid item xs={12}>
          <Box component="section" height="auto" sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <KPIBox>
                  <Typography variant="h6" sx={{ mb: 1 }}>Tests Performed</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{kpiData.testPerformed}</Typography>
                </KPIBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <KPIBox>
                  <Typography variant="h6" sx={{ mb: 1 }}>Tests Passed</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{kpiData.testPassed}</Typography>
                </KPIBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <KPIBox>
                  <Typography variant="h6" sx={{ mb: 1 }}>Tests Failed</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{kpiData.testFailed}</Typography>
                </KPIBox>
              </Grid>
              <Grid item xs={12} md={3}>
                <KPIBox>
                  <Typography variant="h6" sx={{ mb: 1 }}>Tests Not Run</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{kpiData.testDidNotRun}</Typography>
                </KPIBox>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
              <FilterBox sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>Data Source</InputLabel>
                  <Select
                    value={dataSourceFilter}
                    onChange={handleDataSourceFilterChange}
                    label="Data Source"
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="HXG">HXG</MenuItem>
                    <MenuItem value="LWCC">LWCC</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Test Case Type</InputLabel>
                  <Select
                    value={testCaseTypeFilter}
                    onChange={handleTestCaseTypeFilterChange}
                    label="Test Case Type"
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Availability Check">Availability Check</MenuItem>
                    <MenuItem value="Performance Test">Performance Test</MenuItem>
                    <MenuItem value="Security Test">Security Test</MenuItem>
                    <MenuItem value="Usability Test">Usability Test</MenuItem>
                    <MenuItem value="Regression Test">Regression Test</MenuItem>
                    <MenuItem value="Integration Test">Integration Test</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Result</InputLabel>
                  <Select
                    value={resultFilter}
                    onChange={handleResultFilterChange}
                    label="Result"
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Pass">Pass</MenuItem>
                    <MenuItem value="Fail">Fail</MenuItem>
                  </Select>
                </FormControl>
              </FilterBox>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box component="section" sx={{ p: 2, backgroundColor: '#fff' }}>
            <TableContainer component={Paper} elevation={0} sx={{ border: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'testCaseId'}
                        direction={orderBy === 'testCaseId' ? order : 'asc'}
                        onClick={() => handleRequestSort('testCaseId')}
                      >
                        Test Case ID
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'submittedDate'}
                        direction={orderBy === 'submittedDate' ? order : 'asc'}
                        onClick={() => handleRequestSort('submittedDate')}
                      >
                        Submitted Date
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'testCaseType'}
                        direction={orderBy === 'testCaseType' ? order : 'asc'}
                        onClick={() => handleRequestSort('testCaseType')}
                      >
                        Test Case Type
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'testCaseDescription'}
                        direction={orderBy === 'testCaseDescription' ? order : 'asc'}
                        onClick={() => handleRequestSort('testCaseDescription')}
                      >
                        Test Case Description
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'dataSources'}
                        direction={orderBy === 'dataSources' ? order : 'asc'}
                        onClick={() => handleRequestSort('dataSources')}
                      >
                        Data Sources
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'value'}
                        direction={orderBy === 'value' ? order : 'asc'}
                        onClick={() => handleRequestSort('value')}
                      >
                        Value
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'Threshold'}
                        direction={orderBy === 'Threshold' ? order : 'asc'}
                        onClick={() => handleRequestSort('Threshold')}
                      >
                        Threshold
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'numberOfError'}
                        direction={orderBy === 'numberOfError' ? order : 'asc'}
                        onClick={() => handleRequestSort('numberOfError')}
                      >
                        Number of Error
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'result'}
                        direction={orderBy === 'result' ? order : 'asc'}
                        onClick={() => handleRequestSort('result')}
                      >
                        Result
                      </TableSortLabel>
                    </TableHeaderCell>
                    <TableHeaderCell>
                      <TableSortLabel
                        active={orderBy === 'Details'}
                        direction={orderBy === 'Details' ? order : 'asc'}
                        onClick={() => handleRequestSort('Details')}
                      >
                        Details
                      </TableSortLabel>
                    </TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedData.map((row) => (
                    <TableRow key={row.testCaseId}>
                      <TableCell>{row.testCaseId}</TableCell>
                      <TableCell>{row.submittedDate}</TableCell>
                      <TableCell>{row.testCaseType}</TableCell>
                      <TableCell>{row.testCaseDescription}</TableCell>
                      <TableCell>{row.dataSources}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.Threshold}</TableCell>
                      <TableCell>{row.numberOfError}</TableCell>
                      <TableCell>{row.result}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleViewDetails(row)} color="primary">
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
