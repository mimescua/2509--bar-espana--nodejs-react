import { useRef, useState } from 'react';
import { importMenuFromFile } from '../../services/http';

interface DatabaseRestoreFormProps {
	onFileUpload?: (file: File) => void;
}

const DatabaseRestoreForm = ({ onFileUpload }: DatabaseRestoreFormProps) => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			// basic validation
			const maxSizeBytes = 5 * 1024 * 1024; // 5MB
			if (file.size > maxSizeBytes) {
				setError('El archivo excede 5MB');
				setSelectedFile(null);
				return;
			}
			setSelectedFile(file);
			setError(null);
		}
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (!selectedFile) {
			setError('Por favor selecciona un archivo');
			return;
		}

		setIsUploading(true);
		setSuccess(null);
		setError(null);
		try {
			const result = await importMenuFromFile(selectedFile);
			if (onFileUpload) {
				await onFileUpload(selectedFile);
			}
			const successMessage = result?.message ?? 'Base de datos restaurada exitosamente';
			setSuccess(successMessage);
			setSelectedFile(null);

			if (inputRef.current) {
				inputRef.current.value = '';
			}
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : 'Error desconocido al restaurar la base de datos';
			setError(errorMessage);
		} finally {
			setIsUploading(false);
		}
	};

	return (
		<div className="bg-amber-900/40 border border-amber-500/70 rounded-lg p-6 shadow-lg">
			<h3 className="text-2xl font-bold text-amber-100 mb-4">Restaurar Base de Datos</h3>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="database-file" className="block text-lg font-semibold text-amber-100 mb-2">
						Seleccionar archivo de respaldo
					</label>
					<input
						id="database-file"
						ref={inputRef}
						type="file"
						accept=".sql,.db,.json"
						onChange={handleFileChange}
						className="block w-full text-sm text-amber-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-amber-500/70 file:text-sm file:font-semibold file:bg-amber-800/60 file:text-amber-100 hover:file:bg-amber-800/80 transition-colors"
						disabled={isUploading}
					/>
					{selectedFile && (
						<p className="mt-2 text-md text-amber-200 font-medium">Archivo seleccionado: {selectedFile.name}</p>
					)}
					{error && (
						<p className="mt-2 text-sm text-red-400 bg-red-900/20 border border-red-700 rounded-lg p-2">{error}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={!selectedFile || isUploading}
					className="w-full bg-amber-800/70 border border-amber-500/70 text-amber-100 py-3 px-4 rounded-lg hover:bg-amber-800/90 hover:border-amber-500/90 focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:ring-offset-2 focus:ring-offset-transparent disabled:bg-amber-800/30 disabled:border-amber-500/30 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md"
				>
					{isUploading ? (
						<div className="flex items-center justify-center">
							<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-100 mr-2"></div>
							Restaurando...
						</div>
					) : (
						'Restaurar Base de Datos'
					)}
				</button>
			</form>

			{success && (
				<div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-700 rounded-lg text-emerald-200 text-sm">
					{success}
				</div>
			)}

			<div className="mt-4 p-4 bg-amber-950/50 border border-amber-600/70 rounded-lg">
				<p className="text-md text-amber-100">
					<strong className="text-amber-50">Advertencia:</strong> Esta acción reemplazará completamente la base de datos
					actual. Asegúrate de tener un respaldo antes de continuar.
				</p>
			</div>
		</div>
	);
};

export default DatabaseRestoreForm;
