import Logo from "@/components/layouts/Logo";
import React from "react";
import UserComp from "./UserComp";

const SettingHeader = () => {
  return (
    <div className=" w-full  py-[14px] border border-b flex justify-between items-center">
      <Logo />
      <UserComp />
    </div>
  );
};

export default SettingHeader;
