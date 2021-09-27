import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
// mui styled
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/user.action'


const drawerWidth = 240;



const StyledAppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
})
)

const AppBar = ({ open, toggleDrawer }) => {
    const currPage = useSelector(state => state.subPage);
    const dispatch = useDispatch();

    return (
        <StyledAppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    style={{ textTransform: 'capitalize' }}
                >
                    {currPage.current.toLowerCase()}
                </Typography>
                <IconButton color="inherit" sx={{ cursor: 'pointer' }} onClick={() => dispatch(logout())}>
                    <LogoutIcon />
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1, ml: 1.5 }}
                    >
                        Logout
                    </Typography>
                </IconButton>
            </Toolbar>
        </StyledAppBar>
    )
}

export default AppBar;


