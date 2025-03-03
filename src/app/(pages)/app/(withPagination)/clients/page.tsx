import { PageTitle } from "@/components/PageTitle";
import { ClientsListView } from "@/views/ClientsListView";

export default function ClientsListPage() {
  return (
    <div>
      {/* <h1 className="text-4xl text-gray-900 font-semibold mb-5">Müştərilər</h1> */}
      <PageTitle title="Müştərilər" />
      <ClientsListView />
    </div>
  );
}
