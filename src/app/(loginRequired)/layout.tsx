import { AppSidebar } from "@/components/header/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <SidebarProvider className="">
        <div className="fixed ">
          <AppSidebar />
        </div>
        <main className="antialiased flex justify-center mx-auto max-w-[80%] mt-[60px]">
          {children}
        </main>
      </SidebarProvider>
    </section>
  );
}
