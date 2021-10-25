import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// Component
import Profile from './Profile'
// mui styled
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
// redux
import { useSelector } from 'react-redux';
import {State} from './../clientTypes'


const drawerWidth = 240;



const StyledAppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })
<{open: boolean}>(({ theme, open }) => ({
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

const AppBar = (props: { toggleDrawer: any, open : boolean }) => {
    const currPage = useSelector((state: State) => state.subPage);

    return (
        <StyledAppBar position="absolute" open={props.open}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => props.toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(props.open && { display: 'none' }),
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

                <Profile />
            </Toolbar>
        </StyledAppBar >
    )
}

export default AppBar;


