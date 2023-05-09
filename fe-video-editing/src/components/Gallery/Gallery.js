import * as React from 'react';
import Button from '@mui/material/Button';

import './Gallery.scss';
import Grid from '@mui/material/Grid';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import NoteAddIcon from '@mui/icons-material/NoteAdd';

import DeleteIcon from '@mui/icons-material/Delete';
import ReactPlayer from "react-player";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { experimentalStyled as styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles';
import { Paper,Typography} from '@mui/material';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useEffect,useState } from 'react';
import { Image,Popconfirm } from "antd";
import axios from 'axios';
import Addvideo from '../AddVideo/Addvideo';
import bigInt from 'big-integer';

const { Title } = Typography;

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


  const onPopoverClick = (value) => {
    if (value === -1) {
      setViewMode(value);
    }
    if (value === 2) {
      setViewMode(value);
    }
    if (value === 1) {
      const hexString = '64419ae4ce83bf0872f8c5eb';
      const bigNumber = bigInt(hexString, 16);
      setViewMode(bigNumber);
    }
  };
  const [noti, setNoti] = useState(false);
  const [message, setMessage] = useState();
  const [typeNoti, setTypeNoti] = useState();
  const [open, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState(-1);
  const [gallery, setGallery] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openSort = Boolean(anchorEl);
  const [typeAdd, setTypeAdd] = useState(0);
  const [images, setImages] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };


    function download_files(files) {
      function download_next(i) {
        if (i >= files?.length) {
          return;
        }
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.setAttribute("href", files[i].replace("raw", "download"));
        link.click();

        // Delete the temporary link.
        document.body.removeChild(link);
        // Download the next file with a small timeout. The timeout is necessary
        // for IE, which will otherwise only download the first file.
        setTimeout(function () {
          download_next(i + 1);
        }, 2000);
      }
      // Initiate the first download.
      download_next(0);
    }



    const getGallery = async () => {
      try {
        var response = await axios.get(`http://localhost:10386/api/Video/GetListVideo?catID=${viewMode}`);
        setGallery(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getGallery();
    }, [viewMode]);

    

    const onDownload = (id) =>{
      const downloadGallery = async() =>{
        try{
            await axios.post(`http://localhost:10386/api/Video/Download/${id}`);
            
            setMessage("Download Succeed");
            console.log("Download Succeed")
        }
        catch (error){
            console.log(error);
        }
      };
      downloadGallery();
    };

    const onDelete = (id) => {
      const deleteGallery = async () => {
        try {
          await axios.delete(`http://localhost:10386/api/Video/DeleteViddeo/${id}`);
          getGallery();
          setNoti(true);
          setMessage("Delete Succeed");
          setTypeNoti("success");
          console.log(message);
        } catch (error) {
          setNoti(true);
          setMessage(error.response.data.description);
          setTypeNoti("error");
        }
      };
      deleteGallery();
    };

  

 
    return(
        <ThemeProvider theme={theme}>
                <Grid container padding={3} ml={4}>
                    <Grid item xs fontSize={35}>
                        My Assets
                    </Grid>
                    <Grid item width={400} height={70} color={"white"}>
                    
                    </Grid>
                </Grid>
                <Grid container ml={8} spacing={2}>
                        <Grid item  md={4}>
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
                          open={openSort}
                          onClose={handleClose}
                        >
                           <MenuItem onClick={() => onPopoverClick(-1)} disableRipple>
                            <LabelImportantIcon/>
                            All
                          </MenuItem>
                          <MenuItem onClick={() => onPopoverClick(2)} disableRipple>
                            <LabelImportantIcon/>
                            Kinh tế
                          </MenuItem>
                          <MenuItem onClick={() => onPopoverClick(1)} disableRipple>
                            <FileCopyIcon />
                            Thể thao
                          </MenuItem>
                        </StyledMenu>

                        </Grid>

                        <Grid item  md={8}>
                          <Stack direction="row" justifyContent="space-evenly"
                                    alignItems="center" spacing={2}>
                              <Button variant="contained"   onClick={() => setOpen(true)} startIcon={<NoteAddIcon />}>
                                Add
                              </Button>
                              <Addvideo
                                type={typeAdd}
                                setType={setTypeAdd}
                                open={open}
                                handleClose={handleClose}
                            />
                          </Stack>
                        </Grid>
                </Grid>
                <Grid padding={1} ml={8} mt={4}>
                 
                </Grid>
                <Box component="main"  sx={{height:450, width:1200,overflow: 'auto'}} mt={2} ml={5} padding={3} container>
                  <Grid container spacing={10}>
                          {gallery.map(gal =>(
                            <Grid item>
                               <Paper
                                  elevation={3}
                                  sx={{ width: 300,height:270,backgroundColor: "#3D3476" }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      float:"right",
                                      justifyContent: "",
                                    }}
                                  >
                                  
                                    <Stack mr={3} direction="row" justifyContent="space-around"
                                    alignItems="center" spacing={4}>
                                    <Popconfirm
                                      title="Sure to delete?"
                                      onConfirm={() => onDelete(gal.id)}
                                    >
                                       <Button variant="contained">
                                        <DeleteIcon/>
                                        </Button>
                                        
                                    </Popconfirm>
                                    <Popconfirm
                                      title="Sure to edit?"
                                      onConfirm={() => onDelete(gal.id)}
                                    >
                                       <Button variant="contained">
                                        <BorderColorIcon/>
                                        </Button>
                                        
                                    </Popconfirm>
                                    <Popconfirm
                                      title="Sure to download?"
                                      onConfirm={() => onDownload(gal.id)}
                                    >
                                       <Button variant="contained">
                                        <DownloadForOfflineIcon/>
                                        </Button>
                                        
                                    </Popconfirm>



                                    </Stack>
                                  </div>
                                  <ReactPlayer
                                    
                                    url={gal.filename}
                                    controls
                                    height="75%"
                                    width="100%"
                                      />
                                </Paper>
                            </Grid>
                          ))}
                  </Grid>
                  {/* <Addvideo/> */}
                </Box>
        </ThemeProvider>
    );
}

export default Gallery;