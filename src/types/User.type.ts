export const userRoles = { user: "user", admin: "admin" } as const
export type UserRole = keyof typeof userRoles

export type User = {
	_id: string
	email: string
	fullName: string
	password: string
	verified: boolean
	verifyToken: string
	resetToken?: string
	avatar?: string | undefined | null
	role: UserRole
}

export type EditAccountFormData = Pick<User, "fullName" | "avatar">

export type EditPasswordFormData = {
	oldPassword: string
	newPassword: string
}
