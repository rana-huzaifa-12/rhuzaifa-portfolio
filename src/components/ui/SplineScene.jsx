import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

function SplineScene({ scene, className }) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span className="loader">Loading...</span>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}

export default SplineScene;
