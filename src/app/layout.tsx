import { FC, ReactNode } from 'react'

type TProps = {
	children: ReactNode
}

const MainLayout: FC<TProps> = ({ children }) => {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}

export default MainLayout
