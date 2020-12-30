import React from 'react'
import {Link} from 'react-router-dom'
import './Pune.css'
import {
    createMuiTheme,
        MuiThemeProvider,
        responsiveFontSizes,
    Typography
    } from '@material-ui/core'
import { BiMap } from 'react-icons/bi'


    let theme = createMuiTheme();
    theme=responsiveFontSizes(theme);
    
    
    function NMLocation() {
        var station=["AIROLI"]
    return (
        <div className = 'cityname'>
           
                
                    <div className='name'>  
                            <MuiThemeProvider>
                                <Typography variant="p" gutterBottom>
                                   PUNE
                                </Typography>
                            </MuiThemeProvider>
                    </div>
                    <div className="stations">
                        <div >
                            {station.map((station)=>(
                                <div className="station">
                                    <BiMap className="map" size={25} color="#5BB971" />
                                        <MuiThemeProvider>
                                        <Typography variant="p" gutterBottom>
                                            <Link to={`${station}`} className='station'>
                                                {station}                                       
                                            </Link>
                                        </Typography>
                                    </MuiThemeProvider>
                            </div>
                            ))}
                                
                        
                        </div>
                        
                        
                    </div>                       
        </div>
    )
}

export default NMLocation