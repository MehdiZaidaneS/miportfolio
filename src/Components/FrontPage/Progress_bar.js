import React from 'react'

const Progress_bar = ({bgcolor,progress,height, name}) => {
	
	const Parentdiv = {
		height: height,
		width: '90%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 20
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 500
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
    {/* <span style={progresstext}>{`${progress}%`}</span> */}
		<span style={progresstext}>{name}</span>
	</div>
	</div>
	)
}

export default Progress_bar;
