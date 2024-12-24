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
                className="flex flex-col bg-gray-50 py-4 px-4 rounded-lg"
                style={{ boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.1)" }}
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
