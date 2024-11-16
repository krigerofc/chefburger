'use client'

import AdminList from "@/app/components/Admin/AdminList";
import AdminMenu from "@/app/components/Admin/Menuadmin";

const admins = [
  { name: 'Admin 1', email: 'admin1@example.com' },
  { name: 'Admin 2', email: 'admin2@example.com' },
  { name: 'Admin 3', email: 'admin3@example.com' },
  { name: 'Admin 4', email: 'admin4@example.com' },
  { name: 'Admin 5', email: 'admin5@example.com' },
];


export default function ManagerPage(){
    return (
        <div className="flex">
          <AdminMenu />
          <div className="p-8 flex-1">
            <AdminList admins={admins} />
          </div>
        </div>
      );
}