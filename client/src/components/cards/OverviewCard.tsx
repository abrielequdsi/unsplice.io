import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from './CircularProgress';
import { Module } from '../../interfaces';

const OverviewCard = (props: { module: Module }) => {
  const { name, desc, moduleCode, progress } = props.module;
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ pt: 1 }}>
            <CircularProgress value={progress} />
          </Box>
          <Container>
            {/* sx={{ fontSize: 14 }}  */}
            <Typography
              data-testid="title-test"
              gutterBottom
              variant="h6"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              style={{ textTransform: 'capitalize' }}
            >
              {moduleCode}
            </Typography>
          </Container>
        </Box>

        <Typography variant="caption" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
