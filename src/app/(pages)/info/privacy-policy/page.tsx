import { PrivacyPolicyView } from "@/views/PrivacyPolicyView";
import { privacyPolicyData } from "@/lib/privacyPolicyData";

export default function PrivacyPolicyPage() {
  return (
    <section>
      <div className="mx-auto">
        <PrivacyPolicyView data={privacyPolicyData} />
      </div>
    </section>
  );
}
