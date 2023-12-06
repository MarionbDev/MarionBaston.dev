import AdminHeader from "./_components/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
