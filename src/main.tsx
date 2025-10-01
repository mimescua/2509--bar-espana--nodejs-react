import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext.tsx';
import { MenuProvider } from './context/index.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider>
			<MenuProvider>
				<App />
			</MenuProvider>
		</AuthProvider>
	</StrictMode>
);
