import type { JSX } from "react";

function Banner({ message }: { message?: string }): JSX.Element {
    return (
        <div className="bg-amber-800/20 border border-amber-600/50 rounded-lg p-4">
            <h2 className="text-2xl font-bold text-amber-200">{message}</h2>
        </div>
    );
}

export default Banner;
