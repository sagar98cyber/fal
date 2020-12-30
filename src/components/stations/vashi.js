import React from 'react'
import './station.css'
import ExportHubCard2 from '../cards/exporthubcar2'
import MediaCard from './card'
import ExportHubCard1 from '../cards/exporthubcard1'

import {
    createMuiTheme,
        MuiThemeProvider,
        responsiveFontSizes,
    Typography
    } from '@material-ui/core'

    let theme = createMuiTheme();
    theme=responsiveFontSizes(theme);
     
function vashi() {
    return (
        <div className="category">
            <div className='name'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Vashi
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
                                   ArtWork
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <MediaCard/>
            <div className='catname'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Clothing
                                </Typography>
                            </MuiThemeProvider>
            </div>
            <ExportHubCard1/>
            <div className='catname'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   Backery
                                </Typography>
                            </MuiThemeProvider>
            </div>
           <ExportHubCard2/>
        </div>
    )
}

export default vashi
