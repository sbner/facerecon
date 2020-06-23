import React from 'react';
import Tilt from 'react-tilt';
import faceLogo from './facerecon-icon.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>			 
			<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
				<div id='logoDiv' className='dib v-mid'>
					<img alt='FaceRecon Logo' src={faceLogo} />
					<p className='f4 mt0'>FaceRecon</p>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;