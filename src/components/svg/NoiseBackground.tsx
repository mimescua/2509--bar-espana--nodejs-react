import React from 'react';

const NoiseBackground: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" {...props}>
		<defs>
			<filter id="noiseFilter">
				<feTurbulence type="fractalNoise" baseFrequency="2" numOctaves={5} stitchTiles="stitch" />
			</filter>
		</defs>
		<rect width="100%" height="100%" fill="#d2b48c" />
		<rect width="100%" height="100%" filter="url(#noiseFilter)" style={{ mixBlendMode: 'overlay', opacity: 0.8 }} />
	</svg>
);

export default NoiseBackground;
