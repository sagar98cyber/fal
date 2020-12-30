import './Home.css'
import React from 'react'
import {Link} from 'react-router-dom'
import m from '../../Media/mm.png'
import nm from '../../Media/nm.png'
import p from '../../Media/pu.png'
import {
createMuiTheme,
    MuiThemeProvider,
    responsiveFontSizes,
Typography
} from '@material-ui/core'

let theme = createMuiTheme();
theme=responsiveFontSizes(theme);

 export default function Home(){
    return(
        <div className='home'>
                <div className="loc">  

                    <div className="bmumbai ">
                        <Link to = '/mumbai'>  
                            <img src={m}  alt="Mumbai" width = "1000" className ="responsive"/>
                            <div className="child">
                                <MuiThemeProvider>
                                    <Typography variant="p" gutterBottom>
                                        MUMBAI
                                    </Typography>
                                </MuiThemeProvider>
                            </div>
                        </Link>
                    </div>                  
                    <div className="bmumbai">
                    <Link to = '/nmumbai'>  
                            <img src={nm}  alt="Mumbai" width = "1000" className="responsive"/> 
                            <div className = "child ">
                                <MuiThemeProvider>
                                    <Typography variant="p" gutterBottom>
                                        NAVI MUMBAI
                                    </Typography>
                                </MuiThemeProvider>
                            </div>
                        </Link>
                    </div>                    
                    <div className="bmumbai">
                        <Link to = '/p'>  
                            <img src={p}  alt="Mumbai" width = "1000" className="responsive"/>
                                <div className ="child">
                                    <MuiThemeProvider>
                                        <Typography variant="P" gutterBottom>
                                            PUNE
                                        </Typography>
                                    </MuiThemeProvider>
                                </div>
                            </Link>
                    </div>       
                    
                </div>
            </div>
    )
 }