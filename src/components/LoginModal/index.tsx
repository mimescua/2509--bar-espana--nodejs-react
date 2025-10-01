import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
	const [code, setCode] = useState('');
	const [error, setError] = useState('');
	const { login, logout, isAuthenticated } = useAuth();

	useEffect(() => {
		if (isOpen) {
			setCode('');
			setError('');
		}
	}, [isOpen]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		if (code.trim() === '') {
			setError('Por favor ingresaR un código de acceso');
			return;
		}

		const success = login(code);
		if (success) {
			onClose();
		} else {
			setError('Código inválido. Intenta nuevamente');
		}
	};

	const handleLogout = () => {
		logout();
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-amber-900 rounded-lg shadow-xl max-w-md w-full p-6 border border-amber-700">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold text-amber-200">
						{isAuthenticated ? 'Salir de Administrador' : 'Ingresar código de acceso'}
					</h2>
					<button
						onClick={onClose}
						className="text-amber-400 hover:text-amber-200 transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{isAuthenticated ? (
					<div className="space-y-4">
						<p className="text-amber-300">
							Estas a punto de salir del modo administrador
						</p>
						<button
							onClick={handleLogout}
							className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
						>
							Salir
						</button>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="code" className="block text-sm font-medium text-amber-300 mb-2">
								Código de acceso
							</label>
							<input
								type="password"
								id="code"
								value={code}
								onChange={(e) => setCode(e.target.value)}
								className="w-full px-3 py-2 bg-amber-800 border border-amber-600 rounded-lg text-amber-200 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
								placeholder="Ingresa código de acceso"
								autoFocus
							/>
						</div>

						{error && (
							<div className="text-red-400 text-sm bg-red-900/20 border border-red-700 rounded-lg p-2">
								{error}
							</div>
						)}

						<div className="flex gap-3">
							<button
								type="button"
								onClick={onClose}
								className="flex-1 px-4 py-2 bg-amber-700 hover:bg-amber-600 text-amber-200 font-medium rounded-lg transition-colors duration-200"
							>
								Cancelar
							</button>
							<button
								type="submit"
								className="flex-1 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-amber-100 font-medium rounded-lg transition-colors duration-200"
							>
								Acceder
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default LoginModal;
