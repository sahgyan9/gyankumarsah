export default function Philosophy() {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
            <div className="text-center text-white mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-4">
                    Life is Painful,
                </h1>
                <h2 className="text-4xl md:text-6xl font-semibold mb-2">
                    Accept it,
                </h2>
                <h3 className="text-5xl md:text-7xl font-bold">
                    Done!!
                </h3>
            </div>
            <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden">
                <img 
                    src="/mountain-philosophy.png" 
                    alt="Mountain Philosophy" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}