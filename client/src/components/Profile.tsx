import React, { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
//Typescript
import { State } from '../interfaces';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/user.action';

const Profile = () => {
  const userInfo = useSelector((state: State) => state.user.userInfo);
  const dispatch = useDispatch();
  //
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.target as any);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1.5 }}>
          <Typography
            sx={{
              textTransform: 'capitalize',
              mb: 0,
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {userInfo.firstName} {userInfo.lastName}
          </Typography>
          <Typography
            color="body2"
            sx={{ textTransform: 'capitalize', fontSize: '11px', ml: '50px' }}
          >
            {userInfo.role}
          </Typography>
        </Box>
        <Avatar
          alt={userInfo.firstName.toUpperCase()}
          src={userInfo.picture}
          onClick={handleClick}
          sx={{ cursor: 'pointer' }}
        />
      </Box>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ mt: 2, mr: 3 }} elevation={10}>
              {/* Logout */}
              <IconButton
                color="inherit"
                sx={{
                  cursor: 'pointer',
                  color: '#1975D1',
                  border: 2,
                  borderRadius: 1.3,
                }}
                onClick={() => dispatch(logout())}
              >
                <LogoutIcon sx={{ color: 'black' }} />
                <Typography
                  variant="body2"
                  color="black"
                  noWrap
                  sx={{ flexGrow: 1, ml: 1.5 }}
                >
                  Logout
                </Typography>
              </IconButton>
            </Paper>
          </Fade>
        )}
      </Popper>
      {/* <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper> */}
    </>
  );
};

export default Profile;
