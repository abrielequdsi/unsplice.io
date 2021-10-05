import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// Sub-pages content
import Overview from './sub-pages/Overview';
import Class from './sub-pages/Class';
import Module from './sub-pages/Module';
import Content from './sub-pages/Content';
//Typescript
import { State } from '../interfaces';
// redux
import { useSelector } from 'react-redux';
import { OVERVIEW, CLASS, MODULE, CONTENT } from '../redux/actions/actionTypes';

const SubPage = () => {
  const currPage = useSelector((state: State) => state.subPage);

  let content;
  if (currPage.current === OVERVIEW) {
    content = <Overview />;
  } else if (currPage.current === CLASS) {
    content = <Class />;
  } else if (currPage.current === MODULE) {
    content = <Module />;
  } else if (currPage.current === CONTENT) {
    content = <Content />;
  } else {
    content = <div>Sub Page not found</div>;
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
  );
};

export default SubPage;
