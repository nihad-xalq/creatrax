import { aboutTexts } from "@/lib/mockData";

export const AboutView = () => {
  return (
    <section>
      <div className="about_inner">
        <h1 className="text-5xl text-center font-semibold mb-12">Haqqımızda</h1>
        <ul className="flex flex-col gap-3">
          {aboutTexts.map((t) => {
            return (
              <li
                key={t.id}
                className="flex flex-col bg-gray-200 py-2 px-4 rounded-lg"
              >
                <h2 className="text-xl font-semibold">{t.title}</h2>
                <p className="text-md font-normal">{t.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
