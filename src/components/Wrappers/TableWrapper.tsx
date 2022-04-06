import React from 'react'

type Props = {
	children: React.ReactNode;
	className: string
}

const TableWrapper: React.FC<Props> = ({children, className = ''}: Props) => {
	return (
		<div className={`table-container ${className}`}>{children}</div>
	)
}

export default TableWrapper