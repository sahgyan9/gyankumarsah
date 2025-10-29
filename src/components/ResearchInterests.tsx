import { Lightbulb } from "lucide-react";

export default function ResearchInterests() {
    const interests = [
        "Clean Energy (Green Hydrogen, CO₂ Conversion)",
        "Nanomaterials and Thin Film Deposition",
        "Quantum Computing"
    ];

    return (
        <section className="w-full bg-white dark:bg-slate-900 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Research Interests
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 grain-texture overflow-hidden"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {interest}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
