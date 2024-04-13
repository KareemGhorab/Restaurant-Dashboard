export enum WhoamiRole {
	Admin = 'ADMIN',
	User = 'USER',
}

export type TWhoamiResponse = {
	first_name: string
	last_name: string
	email: string
	role: WhoamiRole
}
