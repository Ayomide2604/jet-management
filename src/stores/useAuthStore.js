import { create } from "zustand";
import cb from "./../utils/cocobase";

const useAuthStore = create((set) => ({
	user: localStorage.getItem("cocobase-user")
		? JSON.parse(localStorage.getItem("cocobase-user"))
		: null,

	username: null,

	register: async (username, email, password) => {
		try {
			const response = await cb.register(email, password);
			const user = useAuthStore.getState().user;

			console.log(user.id);

			const profileResponse = await cb.createDocument("profile", {
				username: username,
				userId: user.id,
			});
			console.log("Registration successful:", response);
			alert("signup syccessfull");
		} catch (error) {
			console.error("Registration failed:", error);
			alert("signup failed");
			throw error;
		}
	},
	login: async (email, password) => {
		try {
			const response = await cb.login(email, password);
			console.log("login successful:", response);
			window.location.href = "/";
			alert("login successful");
		} catch (error) {
			console.error("login failed:", error);
			alert("login failed");
			throw error;
		}
	},
	logout: async () => {
		try {
			cb.logout();
			alert("Logout successful");
			set({ user: null });
			localStorage.removeItem("cocobase-user");
		} catch (error) {
			console.error("Logout failed:", error);
		}
	},
}));

export default useAuthStore;
