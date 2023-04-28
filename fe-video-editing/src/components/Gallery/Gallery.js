import * as React from 'react';
import Button from '@mui/material/Button';
import Addvideo from '../AddVideo/Addvideo';
import TextField from '@mui/material/TextField';
import './Gallery.scss';
import Grid from '@mui/material/Grid';
import { Autocomplete, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import SearchIcon from '@mui/icons-material/Search';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { experimentalStyled as styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import CardBox from '../CardBox/CardBox';
import { alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import Dashboard from '../Dashboard/Dashboard';



const theme = createTheme({
    palette: {
        primary: {
          light: '#FFFBFB',
          main: '#221E3D',
          dark: '#282828',
          back:'#282828',
          contrastText: '#fff',
        },
    }
});
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const CustomEdit = React.forwardRef(({ children, onClick }, ref) => (
    <i
        type="button"
        className="extension ms-4"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
     
    </i>
  ));
function Gallery()
{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
    return(
        <ThemeProvider theme={theme}>
                <Grid container padding={3} ml={4}>
                    <Grid item xs fontSize={35}>
                        My Assets
                    </Grid>
                    <Grid item width={400} height={70} color={"white"}>
                    <Container maxWidth="md" className='Container-Search-Bar'>
                    <TextField className='Search-Bar'
                        id="search"
                        type="search"
                        label="Search"
                        variant="filled"
                        inputProps={{style:{color:"black",background:"white"}}}
                        sx={{ width: 300 }}
                        InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                            </InputAdornment>
                            ),
                        endAdornment: (
                            <InputAdornment position="end">
                            <Button><SearchIcon/></Button>
                            </InputAdornment>),
                        }} />
                    </Container>
                    </Grid>
                </Grid>
                <Grid container ml={8} spacing={2}>
                        <Grid item  md={4}>
                        <Grid
                            container
                            direction="row"
                            alignItems="center">
                               <FormControlLabel
                                  value="selectAll"
                                  control={<Checkbox   style={{ backgroundColor: "white",marginRight:7,border:30 }}/>}
                                  label="Select All"
                                />
                                <Typography>Selected: 1</Typography>
                        </Grid>

                        </Grid>

                        <Grid item  md={8}>
                          <Stack direction="row" spacing={2}>
                              <Button variant="contained" startIcon={<NoteAddIcon />}>
                                Add
                              </Button>
                              <Button variant="contained" startIcon={<BorderColorIcon />}>
                                Edit
                              </Button>
                              <Button variant="contained" startIcon={<DeleteIcon />}>
                                Delete
                              </Button>
                              <Button variant="contained" startIcon={<ShareIcon />}>
                                Share
                              </Button>
                              <Button variant="contained" startIcon={<DownloadForOfflineIcon />} >
                                Download
                              </Button>
                          </Stack>
                        </Grid>
                </Grid>
                <Grid padding={1} ml={8} mt={4}>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<UnfoldMoreIcon />}
                  >
                    Sort By
                  </Button>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      <LabelImportantIcon/>
                      Tags
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <FileCopyIcon />
                     Categories
                    </MenuItem>
                  </StyledMenu>
                </Grid>
                <Box component="main"  sx={{height:450, width:1200,overflow: 'auto'}} mt={2} ml={5} padding={3} container>
                  <Grid container spacing={10}>
                    <Grid item>
                      <CardBox/>
                    </Grid>
                    <Grid item>
                      <CardBox/>
                    </Grid>
                    <Grid item>
                      <CardBox/>
                    </Grid>
                    <Grid item>
                      <CardBox/>
                    </Grid>
                    <Grid item>
                      <CardBox/>
                    </Grid>
                    <Grid item>
                      <CardBox/>
                    </Grid>
                  </Grid>
                  {/* <Addvideo/> */}
                </Box>
        </ThemeProvider>
    );
}

export default Gallery;