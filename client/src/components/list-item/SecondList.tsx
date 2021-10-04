import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
//Typescript
import { State } from '../../interfaces';
import { Module } from '../../interfaces';
// Gql
import { useQuery } from '@apollo/client';
import { GET_MODULE_LIST } from '../../utils/graphql';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { modulePage } from '../../redux/actions/subPage.action';

const SecondaryListItems = () => {
  const userPrograms = useSelector((state: State) => state.user.userPrograms);
  const dispatch = useDispatch();

  const { loading, data } = useQuery(GET_MODULE_LIST, {
    variables: {
      programId: userPrograms[0].id,
    },
  });

  // Render Module List
  let listItems;
  if (loading) {
    listItems = (
      <Box sx={{ ml: 'auto', mr: 'auto' }}>
        <CircularProgress />
      </Box>
    );
  } else {
    listItems = (
      <List>
        <div>
          <ListSubheader inset>My Modules</ListSubheader>
          {data.getModuleList.map((module: Module) => {
            return (
              <div
                key={module.id}
                onClick={() => dispatch(modulePage(module.id))}
              >
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={module.moduleCode}
                    style={{ textTransform: 'capitalize' }}
                  />
                </ListItem>
              </div>
            );
          })}
        </div>
      </List>
    );
  }

  return listItems;
};

export default SecondaryListItems;
