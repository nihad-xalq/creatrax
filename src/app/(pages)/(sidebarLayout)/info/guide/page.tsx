import { GuideView } from "@/views/GuideView";
import { guideData } from "@/lib/guideData";

export default function GuidePage() {
  return (
    <section className="min-h-screen py-0 lg:py-10">
      <div className="mx-auto">
        <GuideView data={guideData} />
      </div>
    </section>
  );
}
