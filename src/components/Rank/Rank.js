import React from 'react'

const Rank = ({name, entries}) => {
	return (
		<div className='white' >
			{`${name}, your current entry count is...`}
		      <div className='white f2 '>
		        {entries}
		      </div>
		</div>
	)
}

export default Rank;