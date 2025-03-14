import { Announcement } from "@/types/announcementTypes";

interface AnnouncementsViewProps {
    data: Announcement[];
}

export const AnnouncementsView = ({ data }: AnnouncementsViewProps) => {
    return (
        <section className="">
            <div className="">
                <h1 className="text-2xl font-semibold mb-4">Xəbərlər</h1>

                {data.length === 0 ? (
                    <p className="text-gray-600">Hazırda elan yoxdur.</p>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map((a) => (
                            <li
                                key={a.id}
                                className="p-4 bg-gray-50 rounded-lg shadow-sm border-l-4 
                border-blue-500 hover:shadow-md transition duration-300"
                            >
                                <h2 className="text-lg font-semibold">{a.title}</h2>
                                <p className="text-sm text-gray-500">{a.date}</p>
                                <p className="text-gray-700 mt-2">{a.description}</p>
                                <span className={`mt-2 inline-block px-2 py-1 text-xs font-medium rounded 
                  ${a.priority === "high" ? "bg-red-500 text-white" : a.priority === "medium" ? "bg-yellow-400 text-black" : "bg-green-400 text-black"}`}>
                                    {a.priority.toUpperCase()}
                                </span>
                                <span className="ml-2 px-2 py-1 text-xs bg-gray-200 rounded">
                                    {a.category}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
