
import { Award, Calendar, ExternalLink } from "lucide-react";

export default function CertificatesContent() {
    const certificates = [
        {
            title: "Quantum Computing Fundamentals",
            issuer: "LinkedIn Learning",
            date: "July 2024",
            description: "Learned basic knowledge of Qiskit, simulated quantum circuits on IBM Quantum platform",
            image: null, // Placeholder - will be replaced with Supabase URL
        },
        {
            title: "Data Science with Python",
            issuer: "Finlatics",
            date: "August 2025",
            description: "Comprehensive data science course covering Python programming, data analysis, and visualization",
            image: null, // Placeholder - will be replaced with Supabase URL
        },
    ];

    return (
        <div className="w-full min-h-screen bg-white dark:bg-slate-900 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Certificates & Courses
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Professional development and continuous learning achievements
                        </p>
                    </div>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Certificate Image Placeholder */}
                            <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center px-4">
                                            <Award className="h-16 w-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                Certificate Image
                                                <br />
                                                <span className="text-xs">(Upload via Supabase)</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {cert.title}
                                    </h3>
                                </div>

                                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                    {cert.issuer}
                                </p>

                                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    <Calendar className="h-4 w-4" />
                                    <span>{cert.date}</span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Upload Section */}
                <div className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 border border-primary-200 dark:border-primary-800">
                    <div className="text-center">
                        <Award className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Add More Certificates
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Upload and manage your certificates through Supabase integration
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            (Integration will be added in Phase 2)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
