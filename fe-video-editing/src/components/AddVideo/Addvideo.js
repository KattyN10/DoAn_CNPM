import * as React from 'react';
import "./Addvideo.scss";
import { Autocomplete, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



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


function Addvideo()
{
   return(
    <ThemeProvider theme={theme}>
        <Box>
            <Typography align='center' marginBottom={5} variant="h6" component="h5">You don't have any video or image yet
                <br/>
                Upload your first video now
            </Typography>
            <Box
                    marginLeft={32}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    bgcolor='#221E3D'
                    borderRadius='12px'
                    boxShadow='2'
                    width='600px'
                    height='300px'
                   >
                    <Grid style={{
                        width:600,
                        height:50,
                        backgroundColor: "#3D3476",
                        borderRadius: 20
                    }}>
                       <Typography align='center' fontSize={20} mt={1}>Upload Gallery</Typography>
                    </Grid>
                    <Grid mt={5} className='Input-Name'> 
                            <div class="input-group">
                                <span class="input-group-text">Name</span>
                                <input type="text" class="form-control"/>
                            </div>
                    </Grid>
                    <Grid>
                        <div className="input-select">
                        <label>Type</label>
                            <select className="select-type mt-4">
                                    <option selected>Choose</option>
                                    <option value="1">Video</option>
                                    <option value="2">Image</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid mt={5}>
                        <Button variant="contained" color="success" startIcon={<CloudUploadIcon />}>
                            Upload or drag video/image here
                        </Button>
                    </Grid>
            </Box>
        </Box>
    </ThemeProvider>
    );
}
export default Addvideo;