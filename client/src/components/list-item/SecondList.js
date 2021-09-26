import { useContext, useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
// Gql
import { useQuery, gql } from "@apollo/client";
// redux
import { useSelector } from 'react-redux';

const SecondaryListItems = () => {
    const programInfo = useSelector(state => state.user.programInfo);

    const { loading, data } = useQuery(GET_MODULE_LIST, {
        variables: {
            programId: programInfo[0].id
        }
    })

    let listItems;
    if (loading) {
        listItems = (<p>Loding</p>)
    } else {
        listItems = (
            <List>
                <div>
                    <ListSubheader inset>My Modules</ListSubheader>
                    {console.log('test', data)}
                    {
                        data.getModuleList.map(module => {
                            return (
                                <ListItem button>
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={module.moduleCode} />
                                </ListItem>
                            )
                        })
                    }
                </div>
            </List>)
    }

    return listItems
};


const GET_MODULE_LIST = gql`
  query ModuleList($programId: ID!) {
    getModuleList(programId: $programId) {
        id
        name
        moduleCode
        desc
        progress
    }
  }
`

export default SecondaryListItems