import React from 'react'
import './station.css'

import MediaCard from './card'

import {
    createMuiTheme,
        MuiThemeProvider,
        responsiveFontSizes,
    Typography
    } from '@material-ui/core'

    let theme = createMuiTheme();
    theme=responsiveFontSizes(theme);
     
function airoli() {
    return (
        <div className="category">
            <div className='name'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Airoli
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <div className='catname'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Backery
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <MediaCard/>
            <div className='catname'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Backery
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <MediaCard/>
            <div className='catname'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Backery
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <MediaCard/>
            <div className='catname'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Backery
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <MediaCard/>
        </div>
    )
}

export default airoli
