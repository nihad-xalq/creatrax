import { PrivacyPolicyItem } from "@/types/privacyPolicyTypes";
import { PageTitle } from "@/components/PageTitle";

interface PrivacyPolicyViewProps {
  data: PrivacyPolicyItem[];
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({
  data,
}) => {
  return (
    <div>
      <PageTitle title="Məxfilik Siyasəti" />
      <ul className="space-y-6 willFadeFromAbove">
        {data.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 lg:p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-600 text-white flex items-center justify-center rounded-full font-bold text-xl shadow-md">
                {item.id}
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                {item.title}
              </h2>
            </div>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              {item.description}
            </p>
            {item.details && (
              <ul className="mt-4 space-y-4 list-disc list-inside text-gray-800">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-100 rounded-md border border-gray-300"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
