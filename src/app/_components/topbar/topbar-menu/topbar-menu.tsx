'use client'

import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import styles from './topbar-menu.module.scss'
import ClickOutside from '@/components/click-outside/click-outside'
import clsx from 'clsx'

const RESTAURANT = 'restaurant'

export type TTopbarMenuItem = {
	image: string
	title: string
}

type TProps = {
	items: TTopbarMenuItem[]
}

const TopbarMenu: FC<TProps> = ({ items }) => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	const [selectedOption, setSelectedOption] = useState<string>(
		searchParams.get(RESTAURANT) || items[0].title
	)
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	const disabledClick: MouseEventHandler<HTMLSelectElement> = (e) => {
		e.preventDefault()
		setIsMenuOpen((prev) => !prev)
	}

	useEffect(() => {
		const params = new URLSearchParams(searchParams)
		params.set(RESTAURANT, selectedOption)
		replace(`${pathname}?${params.toString()}`)
	}, [selectedOption, pathname, searchParams, replace])

	return (
		<>
			<div className={styles['topbar-menu']}>
				<select onMouseDown={disabledClick}>
					{items.map((item) => (
						<option
							selected={selectedOption === item.title}
							key={item.title}
							value={item.title}
						>
							{item.title}
						</option>
					))}
				</select>
				{isMenuOpen ? (
					<ClickOutside onClick={() => setIsMenuOpen(false)}>
						<section>
							{items.map((item) => (
								<span
									onClick={() =>
										setSelectedOption(item.title)
									}
									key={item.title}
									aria-selected={
										selectedOption === item.title
									}
									className={clsx({
										active: selectedOption === item.title,
									})}
								>
									{item.title}
								</span>
							))}
						</section>
					</ClickOutside>
				) : null}
			</div>
		</>
	)
}

export default TopbarMenu
