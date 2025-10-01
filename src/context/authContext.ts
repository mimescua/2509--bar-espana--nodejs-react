import { createContext } from 'react';

export interface AuthContextProps {
	isAuthenticated: boolean;
	currentView: 'public' | 'admin';
	login: (code: string) => boolean;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
