import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// Sub-pages content
import Overview from './Overview'
import Class from './Class'
import Module from './Module'
// redux
import { useSelector } from 'react-redux';

const SubPage = () => {
    const currPage = useSelector(state => state.subPage);

    let content;
    if (currPage.current === "OVERVIEW") {
        content = <Overview />
    } else if (currPage.current === "CLASS") {
        content = <Class />
    } else if (currPage.current === "MODULE") {
        content = <Module />
    }

    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            {/* Here */}
            {content}


        </Box>
    )
}

export default SubPage
