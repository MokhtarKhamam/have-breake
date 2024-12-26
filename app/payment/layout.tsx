import SiteHeader from "@/layouts/site-header";
import SiteFooter from "@/layouts/SiteFooter";
import React from "react";

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default PaymentLayout;
