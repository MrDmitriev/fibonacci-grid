import React from 'react'

type Props = {
	children: React.ReactNode
}

const AppWrapper: React.FC<Props> = ({children}: Props) => {
	return (
		<div className='container'>{children}</div>
	)
}

export default AppWrapper