function Navbar() {
	return (
		<div className="fixed top-0 left-0 w-full flex justify-center z-50 xl:px-80">
			<nav className="w-full px-8 py-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 bg-opacity-95 backdrop-blur-lg shadow-lg flex items-center justify-between">
				<h1 className="text-4xl md:text-5xl font-bold leading-none text-amber-300 tracking-wider drop-shadow-sm">
					Bar Espanya
				</h1>
				<button className="px-3 py-2 md:px-4 md:py-2 bg-transparent border border-amber-300 hover:bg-amber-300/10 text-amber-200 hover:text-amber-100 font-medium rounded-lg transition-colors duration-200 hover:shadow-lg flex items-center gap-2">
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
				</button>
				<div className="geeks -z-10 absolute inset-x-0 w-full bottom-0 translate-y-full" />
			</nav>
		</div>
	);
}

export default Navbar;
