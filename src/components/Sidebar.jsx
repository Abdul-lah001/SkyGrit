import { useState } from "react";
import homeIcon from "../assets/Icons/house-simple.svg";
import requestIcon from "../assets/Icons/arrows-left-right.svg";
import policyIcon from "../assets/Icons/material-symbols_text-compare-outline.svg";
import alertIcon from "../assets/Icons/si_notifications-line.svg";
import reportIcon from "../assets/Icons/presentation-chart.svg";
import userIcon from "../assets/Icons/user-gear.svg";
import auditIcon from "../assets/Icons/watch.svg";
import helpIcon from "../assets/Icons/link.svg";
import userManualIcon from "../assets/Icons/ix_user-manual.svg";
import settingsIcon from "../assets/Icons/gear-six.svg";
import logOutIcon from "../assets/Icons/sign-out.svg";
import skyGrit from "../assets/Icons/skygrit.svg";
const Sidebar = () => {
  const sideBar = [
    { icon: homeIcon, title: "Dashboard" },
    { icon: requestIcon, title: "Request" },
    { icon: policyIcon, title: "Policy Management" },
    { icon: alertIcon, title: "Alert & Notifications" },
    { icon: reportIcon, title: "Reports & Analytics" },
    { icon: userIcon, title: "User Management" },
    { icon: auditIcon, title: "Audit Trail" },
    { icon: helpIcon, title: "Help & Support" },
    { icon: userManualIcon, title: "User Manual" },
    { icon: settingsIcon, title: "Settings" },
  ];

  const [active, setActive] = useState(sideBar[0].title);
  return (
    <div>
      <div className="bg-[#030E20] w-[268px] h-[max-content] flex flex-col gap-[16px]">
        {/* Side bar Head*/}
        <section className="flex justify-center items-center px-[16px] py-[10px]">
          <div className="flex flex-row w-full justify-between">
            <img
              className="w-[114px] h-[39px]"
              src="/src/assets/Icons/image 1.svg"
              alt="arik"
            />
            <img src="/src/assets/Icons/sidebar-left.svg" alt="icon" />
          </div>
        </section>

        {/* Menu Items */}
        <section className="px-[24px]">
          {sideBar.map((item) => (
            <div
              key={item.title}
              onClick={() => setActive(item.title)}
              className={`w-[220px] flex flex-row px-[12px] py-[10px] items-center gap-[12px] mb-3 cursor-pointer 
                    ${
                      active === item.title
                        ? "bg-[#0D47A1] rounded-[8px] text-white font-bold hover:bg-blue-700"
                        : ""
                    }`}
            >
              <img className="w-[24px]" src={item.icon} alt="icon" />
              <p
                className={`text-[16px] ${
                  active === item.title ? "text-white" : "text-[#888991]"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-[165px] px-[24px]">
          <div className="p-2 flex flex-row gap-3 items-center">
            <div className="flex justify-center items-center p-3 w-[34px] h-[34px] rounded-full bg-[#0D47A1] text-white text-2xl font-bold">
              AA
            </div>
            <span>
              <h2 className="text-[12px] font-medium text-white">Arik Air</h2>
              <p className="text-[11px] text-[#93C5FD]">Admin Account</p>
            </span>
          </div>
          <div className="p-2 flex flex-row gap-3 items-center mt-3 cursor-pointer">
            <img className="w-[24px]" src={logOutIcon} alt="" />
            <span>
              <p className="text-[16px] text-[#888991]">Logout</p>
            </span>
          </div>
          <div className="p-2 flex flex-row items-baseline gap-1 mt-3">
            <p className="text-[12px] font-bold text-[#888991]">Powered By</p>
            <img className="w-[85px]" src={skyGrit} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
