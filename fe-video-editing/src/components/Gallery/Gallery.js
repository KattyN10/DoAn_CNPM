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
import videoEditingApi from '../../api/videoEditingApi';

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



function Gallery()
{


  const [noti, setNoti] = useState(false);
  const [message, setMessage] = useState();
  const [typeNoti, setTypeNoti] = useState();
  const [open, setOpen] = useState(false);
  const [viewMode, setViewMode] = useState(-1);
  const [gallery, setGallery] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openSort = Boolean(anchorEl);
  const [catId, setCatId] = useState('1');
  const [title, setTitle] = useState();
  const [filename, setFilename] = useState();
  const [filePath, setFilePath] = useState();
  const [fileVideo, setFileVideo] = useState();
  const [openBackdrop, setOpenBackdrop] = useState(false);


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

  const hexString = '64419ae4ce83bf0872f8c5eb';
  const bigNumber = bigInt(hexString, 16);
  const handleFileChange = (fileVideo) => {
    setFileVideo(fileVideo);

    if (catId === 0) {
      var img = document.createElement("img");
      img.src = URL.createObjectURL(fileVideo);
    } 
  };

  const handleUploadClick = () => {
    if (!fileVideo || !title || title === "") {
      setNoti(true);
      setMessage("Please chose File or enter Name!!");
      setTypeNoti("error");
      return;
    }



    console.log("upload", fileVideo, catId, title);

    const formData = new FormData();
    formData.append("catID", catId);
    formData.append("title", title);
    formData.append("fileVideo", fileVideo);
    console.log(formData);
    const uploadVideo = async () => {
      try {
        const upload = await videoEditingApi.uploadVideo(formData);
        setOpen(false);
        setOpenBackdrop(false);
        setNoti(true);
        setMessage("Upload Succeed");
        setTypeNoti("success");
        console.log(gallery.length);
        getGallery();
      } catch (error) {
        setNoti(true);
        setMessage(error.response.data.description);
        setTypeNoti("error");
        setOpenBackdrop(false);
      }
    };
      setOpenBackdrop(true);
      uploadVideo();

  }





  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };



    const getGallery = async () => {
      try {
        var response = await axios.get(`http://localhost:10386/api/Video/GetListVideo?id=1`)
        setGallery(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getGallery();
    }, [viewMode]);

    

   

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
                                Add New Video
                              </Button>
                              <Addvideo
                                type={bigNumber}
                                setType={setCatId}
                                open={open}
                                handleClose={handleClose}
                                eventName={title}
                                setEventName={setTitle}
                                handleUploadClick={handleUploadClick}
                                handleFileChange={handleFileChange}
                            />
                          </Stack>
                        </Grid>
                </Grid>
                <Grid padding={1} ml={8} mt={4}>
                 
                </Grid>
                <Box component="main"  sx={{height:450, width:1200,overflow: 'auto'}} mt={2} ml={5} padding={3} container>
                  <Grid container spacing={10}>
                          {gallery.length > 0 && gallery.map(gal =>(
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
                                      onConfirm
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