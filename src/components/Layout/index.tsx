import type { JSX } from 'react';
// import Frame from "../svg/Frame";
import Navbar from '../Navbar';
import NoiseBackground from '../svg/NoiseBackground';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<div className="flex flex-col items-center max-h-screen overflow-y-auto ">
			<Navbar />
			<main className="mt-32 mb-6 xl:px-80">
				<NoiseBackground className="-z-20 xl:px-80 absolute inset-0 w-full h-full" />
				{children}
			</main>
			{/* <Menu /> */}
			<p className="mt-2">@Derechos Reservados</p>
		</div>
	);
}

export default Layout;
