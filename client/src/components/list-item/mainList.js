import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
// redux
import { useDispatch } from 'react-redux';
import { overviewPage, classPage } from '../../redux/actions/subPage.action'


const MainListItems = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <ListItem button onClick={() => dispatch(overviewPage())} >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button onClick={() => dispatch(classPage())} >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Class" />
            </ListItem>
        </div>
    )
};

export default MainListItems;