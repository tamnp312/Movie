import {create} from  'zustand';
import axios from 'axios';
import toast from "react-hot-toast";

const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isLoggingOut: false,
	isLoggingIn: false,
    isCheckingAuth: true,
    signup: async (credentials) => {
        set({ isSigningUp: true });
        try {
            const response = await axios.post('/api/v1/auth/signup', credentials);
            set({user: response.data.user, isSigningUp: false});
            toast.success("Account created successfully");
        } catch (error) {
            toast.error(error.response.data.message || "Signup failed");
			set({ isSigningUp: false, user: null });
        }
    },
    login: async (credentials) => {
        set({ isLoggingIn: true });
        try {
            const response = await axios.post('/api/v1/auth/signin', credentials);
            set({user: response.data.user, isLoggingIn: false});
            toast.success("Login successful");
        } catch (error) {
            toast.error(error.response.data.message || "Login failed");
            set({ isLoggingIn: false, user: null });
        }
    },
    signout: async (credentials) => {
        set({ isLoggingOut: true });
        try {
            await axios.post('/api/v1/auth/logout', credentials);
            set({user: null, isLoggingOut: false});
            toast.success("Logout successful");
        } catch (error) {
            toast.error(error.response.data.message || "Logout failed");
            set({ isLoggingOut: false, user: null });    
        }
    },
    authCheck: async () => {
        set({ isCheckingAuth: true });
		try {
			const response = await axios.get("/api/v1/auth/authCheck");

			set({ user: response.data.user, isCheckingAuth: false });
		} catch (error)
    
        {
			set({ isCheckingAuth: false, user: null });
            console.log("error check auth:", error.message);
		}
    }
   
}));

export {useAuthStore}