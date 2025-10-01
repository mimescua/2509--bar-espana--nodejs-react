import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import LoginModal from '../LoginModal';
import Padlock from '../svg/Padlock';
import Shield from '../svg/Shield';

function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { isAuthenticated, currentView } = useAuth();

	const handleButtonClick = () => {
		setIsModalOpen(true);
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-full flex justify-center z-50 xl:px-80">
				<nav className="w-full px-8 py-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 bg-opacity-95 backdrop-blur-lg shadow-lg flex items-center justify-between">
					<h1 className="text-4xl md:text-5xl font-bold leading-none text-amber-300 tracking-wider drop-shadow-sm">
						Bar Espanya
					</h1>
					<div className="flex items-center gap-3">
						{isAuthenticated && (
							<span className="text-sm text-amber-400 bg-amber-800/50 px-2 py-1 rounded-md border border-amber-600">
								{currentView === 'admin' ? 'Vista de Administrador' : 'Vista Pública'}
							</span>
						)}
						<button
							onClick={handleButtonClick}
							className="px-3 py-2 md:px-4 md:py-2 bg-transparent border border-amber-300 hover:bg-amber-300/10 text-amber-200 hover:text-amber-100 font-medium rounded-lg transition-colors duration-200 hover:shadow-lg flex items-center gap-2"
							aria-label={isAuthenticated ? 'Abrir panel de autenticación' : 'Abrir autenticación'}
						>
							{isAuthenticated ? <Shield /> : <Padlock />}
						</button>
					</div>
					<div className="geeks -z-10 absolute inset-x-0 w-full bottom-0 translate-y-full" />
				</nav>
			</div>
			<LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	);
}

export default Navbar;
