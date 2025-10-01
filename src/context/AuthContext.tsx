import React, { useEffect, useState } from 'react';
import { env } from '../config/env';
import { AuthContext } from './authContext';

const ACCESS_CODE = env.ADMIN_CODE;

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [currentView, setCurrentView] = useState<'public' | 'admin'>('public');

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

export { AuthProvider };
