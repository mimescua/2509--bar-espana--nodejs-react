import Banner from './components/Banner';
import DatabaseRestoreForm from './components/DatabaseRestoreForm';
import Layout from './components/Layout';
import Menu from './components/Menu';
import { useAuth } from './hooks/useAuth';

function App() {
	const { isAuthenticated, currentView } = useAuth();

	return (
		<Layout>
			{isAuthenticated && currentView === 'admin' ? (
				<div className="space-y-6">
					<Banner message={'Restaurar base de datos'} />
					<DatabaseRestoreForm />
				</div>
			) : (
				<div className="space-y-6">
					<Banner message={'Especialidad en comidas caseras y tapas variadas'} />
					<Menu />
				</div>
			)}
		</Layout>
	);
}

export default App;
