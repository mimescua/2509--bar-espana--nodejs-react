import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
	isAuthenticated: boolean;
	currentView: 'public' | 'admin';
	login: (code: string) => boolean;
	logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Define the access code - you can change this to whatever you want
const ACCESS_CODE = 'admin123';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [currentView, setCurrentView] = useState<'public' | 'admin'>('public');

	// Load authentication state from localStorage on mount
	useEffect(() => {
		const savedAuth = localStorage.getItem('bar-espana-auth');
		const savedView = localStorage.getItem('bar-espana-view') as 'public' | 'admin';
		
		if (savedAuth === 'true') {
			setIsAuthenticated(true);
			setCurrentView(savedView || 'admin');
		}
	}, []);

	const login = (code: string): boolean => {
		if (code === ACCESS_CODE) {
			setIsAuthenticated(true);
			setCurrentView('admin');
			localStorage.setItem('bar-espana-auth', 'true');
			localStorage.setItem('bar-espana-view', 'admin');
			return true;
		}
		return false;
	};

	const logout = () => {
		setIsAuthenticated(false);
		setCurrentView('public');
		localStorage.removeItem('bar-espana-auth');
		localStorage.removeItem('bar-espana-view');
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				currentView,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};

export { AuthProvider, useAuth };
