import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* This is a Box component from Material-UI */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        TWS
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
