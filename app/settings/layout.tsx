import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import SettingHeader from "./_components/setting-header";

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SettingHeader />
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">{children}</main>
      </SidebarProvider>
    </>
  );
};

export default SettingLayout;
