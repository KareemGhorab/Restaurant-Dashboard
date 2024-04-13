import { FC, ReactNode } from 'react'
import { poppins } from '@/utils/fonts'
import Topbar from './_components/topbar/topbar/topbar'

import '@/styles/main.scss'

type TProps = {
	children: ReactNode
}

const MainLayout: FC<TProps> = ({ children }) => {
	return (
		<html lang='en' className={poppins.className}>
			<body>
				<Topbar />
				{children}
			</body>
		</html>
	)
}

export default MainLayout
