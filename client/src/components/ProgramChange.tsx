import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
// redux
import { useSelector } from 'react-redux';
// Gql
import { useMutation } from '@apollo/client';
import { SWAP_PROGRAM } from '../utils/graphql';

import { State } from '../interfaces';

const ProgramChange = () => {
  const userInfo = useSelector((state: State) => state.user.userInfo);
  const userPrograms = useSelector((state: State) => state.user.userPrograms);

  const [errors, setErrors] = useState({});

  const [swapProgram] = useMutation(SWAP_PROGRAM, {
    update(proxy, result) {
      console.log(result);
    },
    onError(err) {
      console.log(err.message);
      setErrors(
        err && err.graphQLErrors[0].extensions
          ? err.graphQLErrors[0].extensions.errors
          : {},
      );
    },
  });

  const handleClick = (swapIndex: number) => {
    console.log('swapp', {
      userId: userInfo.id,
      swapIndex,
    });
    // if (swapIndex !== 0) {
    //     swapProgram({
    //         variables: {
    //             userId: "6152588f1c8a969117e5b3dc",
    //             swapIndex: 1
    //         }
    //     })
    // }
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{ width: '170px' }}
            onClick={() => handleClick(-1)}
          >
            {userPrograms[0].programCode}
          </Button>
          {console.log(userPrograms)}
          {userPrograms[1] && (
            <Menu {...bindMenu(popupState)}>
              {userPrograms.slice(1).map((userProgram, index) => {
                return (
                  <MenuItem
                    onClick={popupState.close}
                    sx={{ width: '170px' }}
                    key={userProgram.id}
                  >
                    {userProgram.programCode.toUpperCase()}
                  </MenuItem>
                );
              })}
            </Menu>
          )}
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default ProgramChange;
