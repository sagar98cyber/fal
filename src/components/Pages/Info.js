import React from 'react'
import './info.css'
import '../stations/station.css'
import FloatingActionButtons from './Fab'
export default function Info() {
    return (
            <div className='category'>
                {/*<div className ='aligned-center'>*/}
                    <div>
                        <h2 className='name'>
                            About Us
                    </h2>
                    </div>
                    
                        <div className='descaboutus'>
                        Nostrud reprehenderit dolor et do.
                        Commodo proident occaecat cillum sit laborum nisi aliqua ea.
                        Ad exercitation aliqua quis laboris consequat adipisicing laborum reprehenderit commodo labore.
                    </div>
        
                    <div className = 'paddingtop'>
                        <h2 className='name '>
                            Contact Us
                    </h2>
                    </div>
                    
                        <div className='descaboutus'>
                        vocalformylocal@gmail.com
                        </div>
                        <div className='descaboutus'>
                        9324094979
                        </div>
                        <div className='descaboutus'>
                        8169545552
                        </div>
            </div>
      
    )
}