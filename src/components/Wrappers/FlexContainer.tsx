import React from 'react'

type Props = {
	children: React.ReactNode;
	className: string;
}
const FlexContainer:React.FC<Props> = ({children, className = ''}: Props) => {
	return (
		<div className={`${className} flex-container`}>{children}</div>
	)
}

export default FlexContainer