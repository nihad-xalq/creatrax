import { aboutTexts } from "@/lib/mockData";

export const AboutView = () => {
  return (
    <section className="willFadeFromAbove">
      <div className="about_inner">
        <h1 className="text-center text-4xl text-gray-900 font-semibold mb-12">Haqqımızda</h1>
        <ul className="flex flex-col gap-3">
          {aboutTexts.map((t) => {
            return (
              <li
                key={t.id}
                className="flex flex-col bg-white py-6 px-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="inline-block w-2 h-8 bg-blue-500 mr-3 rounded-sm"></span>
                  {t.title}
                </h2>
                <p className="text-md font-normal text-gray-600 leading-relaxed">
                  {t.content}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
