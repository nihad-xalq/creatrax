import { AnnouncementsView } from "@/views/AnnouncementsView";
import { announcementsData } from "@/lib/announcementsData";

export default function AnnouncementsPage() {
  return (
    <section className="">
      <div className="">
        <AnnouncementsView data={announcementsData} />
      </div>
    </section>
  );
}
