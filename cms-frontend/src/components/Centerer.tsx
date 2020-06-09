import React from 'react'

import './Centerer.scss'

const Centerer: React.FC<{ width?: string }> = ({ width, children }) => {
	return (
		<div
			className={
				!width
					? `centerer-wrapper`
					: `centerer-wrapper centerer-wrapper-${width}`
			}
		>
			<div className="centerer">{children}</div>
		</div>
	)
}

export default Centerer
