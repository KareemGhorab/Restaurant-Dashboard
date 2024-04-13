import { FC } from 'react'
import { restaurantsSVC, whoamiSVC } from '@/service/api'
import { TWhoamiResponse, WhoamiRole } from '@/service/whoami/whoami/whoami'

import styles from './topbar.module.scss'
import TopbarMenu, { TTopbarMenuItem } from '../topbar-menu/topbar-menu'
import { TRestaurantsResponse } from '@/service/restaurants/restaurant/restaurant'

type TTopbar = {
	fullName: string
	role: WhoamiRole
}

const presentableTopbarMenu = (
	restaurantsResponse: TRestaurantsResponse
): TTopbarMenuItem[] =>
	restaurantsResponse.map(
		(rr): TTopbarMenuItem => ({
			image: rr.image,
			title: rr.title,
		})
	)

const presentableTopbar = (whoamiResponse: TWhoamiResponse): TTopbar => ({
	fullName: `${whoamiResponse.first_name} ${whoamiResponse.last_name}`,
	role: whoamiResponse.role,
})

const Topbar: FC = async () => {
	const whoamiResponse = await whoamiSVC.getWhoami()
	const restaurantsResponse = await restaurantsSVC.getRestaurants()
	const items = presentableTopbarMenu(restaurantsResponse.data)

	const { fullName, role }: TTopbar = presentableTopbar(whoamiResponse.data)

	return (
		<div className={styles.topbar}>
			<h2>
				Welcome <mark>{fullName}</mark>
			</h2>
			<TopbarMenu items={items} />
		</div>
	)
}

export default Topbar
