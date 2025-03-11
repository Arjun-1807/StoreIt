import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex flex-col h-full flex-1">
        <MobileNavigation />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default layout;
