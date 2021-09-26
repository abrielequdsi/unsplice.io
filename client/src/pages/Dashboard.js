import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// Components
import AppBar from '../components/mui-styled/AppBar.js'
import Drawer from '../components/mui-styled/Drawer.js'
import SubPage from '../components/sub-pages/SubPage.js'
import Copyright from '../components/Copyright'

const mdTheme = createTheme();

const DashboardContent = () => {

    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} toggleDrawer={toggleDrawer} />
                <Drawer open={open} toggleDrawer={toggleDrawer} />
                <SubPage />
            </Box>
            {/* <Copyright sx={{ pt: 4 }} /> */}
        </ThemeProvider>
    );
}

const Dashboard = () => {
    return <DashboardContent />;
}

export default Dashboard;