import { ClientsListView } from "@/views/ClientsListView";
import { PageTitle } from "@/components/PageTitle";

export default function ClientsListPage() {
  return (
    <div>
      <PageTitle title="Müştərilər" />
      <ClientsListView />
    </div>
  );
}
