import { ClientsListView } from "@/views/ClientsListView";

export default function ClientsListPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-5">Müştərilər siyahısı</h1>
      <ClientsListView />
    </div>
  );
}
