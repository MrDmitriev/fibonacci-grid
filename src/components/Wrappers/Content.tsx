import React from 'react'

type Props = {
	children: React.ReactNode
}

const Content: React.FC<Props> = ({children}: Props) => {
	return (
		<main className='content'>{children}</main>
	)
}

export default Content