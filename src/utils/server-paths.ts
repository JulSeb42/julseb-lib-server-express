export const BASE_API_URL = "/api"

const SERVER_PATH_ROOTS = {
	AUTH: "/auth",
	UPLOADER: "/uploader",
	USERS: "/users",
	ADMIN: "/admin",
	/* Prepend path root - DO NOT REMOVE */
}

export const SERVER_PATHS = {
	AUTH: {
		ROOT: SERVER_PATH_ROOTS.AUTH,
		SIGNUP: "/signup",
		LOGIN: "/login",
		LOGGED_IN: "/loggedin",
		VERIFY: "/verify",
		FORGOT_PASSWORD: "/forgot-password",
		RESET_PASSWORD: "/reset-password",
	},
	USERS: {
		ROOT: SERVER_PATH_ROOTS.USERS,
		ALL_USERS: "/all-users",
		USER: (id = ":id") => `/user/${id}`,
		EDIT_ACCOUNT: (id = ":id") => `/edit-account/${id}`,
		EDIT_PASSWORD: (id = ":id") => `/edit-password/${id}`,
		DELETE_ACCOUNT: (id = ":id") => `/delete-account/${id}`,
	},
	ADMIN: {
		ROOT: SERVER_PATH_ROOTS.ADMIN,
		RESET_PASSWORD: (id = ":id") => `/reset-password/${id}`,
		DELETE_USER: (id = ":id") => `/delete-user/${id}`,
	},
	/* Prepend server path - DO NOT REMOVE */
}
