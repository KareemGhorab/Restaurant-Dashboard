'use client'

import {
	FC,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react'

type TProps = {
	onClick: () => void
} & PropsWithChildren

const ClickOutside: FC<TProps> = ({ onClick, children }) => {
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				onClick()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [onClick])

	return <div ref={wrapperRef}>{children}</div>
}

export default ClickOutside
