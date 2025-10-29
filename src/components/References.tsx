import { Mail } from "lucide-react";

export default function References() {
    const references = [
        {
            name: "Dr. Mallikarjuna Rao",
            title: "Founder",
            organization: "Shakti Photon Solutions Pvt. Ltd.",
            email: "info@shaktiphotonsolutions.com"
        },
        {
            name: "Dr. Krishna Prasad Maity",
            title: "Assistant Professor",
            organization: "SRM University, AP",
            email: "krishnaprasad.m@srmap.edu.in"
        },
        {
            name: "Noah Jacob",
            title: "CTO",
            organization: "Shakti Photon Solutions Pvt. Ltd.",
            email: "ctoshaktiphoton@gmail.com"
        },
        {
            name: "Jan Nisa Qazi",
            title: "PhD Scholar",
            organization: "SRM University, AP",
            email: "jannisa_ahad@srmap.edu.in"
        },
        {
            name: "Nilja George",
            title: "PhD Scholar",
            organization: "SRM University, AP",
            email: "nilja_g@srmap.edu.in"
        },
        {
            name: "Akshay Sampath",
            title: "Undergraduate Student",
            organization: "SRM University, AP",
            email: "akshaysampath_mvr@srmap.edu.in"
        }
    ];

    return (
        <section className="w-full bg-gray-50 dark:bg-slate-800 py-16 px-4">
            <div className="mx-auto max-w-7xl">
                <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6 mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        References
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {references.map((ref, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {ref.name}
                            </h3>
                            <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-1">
                                {ref.title}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {ref.organization}
                            </p>
                            <div className="flex items-center space-x-2 text-sm">
                                <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                <a
                                    href={`mailto:${ref.email}`}
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 break-all"
                                >
                                    {ref.email}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
