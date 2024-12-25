import { PrivacyPolicyView } from "@/views/PrivacyPolicyView";
import { privacyPolicyData } from "@/lib/privacyPolicyData";

export default function PrivacyPolicyPage() {
  return (
    <section>
      <div className="lg:max-w-6xl mx-auto px-6">
        <PrivacyPolicyView data={privacyPolicyData} />
      </div>
    </section>
  );
}
