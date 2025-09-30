import React, { useState } from "react";
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
import notifyIcon from "../assets/Icons/notification.svg";
import dropdownIcon from "../assets/Icons/akar-icons_chevron-down.svg";
import filterIcon from "../assets/Icons/filter.svg";
import searchIcon from "../assets/Icons/Search.svg";
import refreshIcon from "../assets/Icons/refresh-2.png";
import downIcon from "../assets/Icons/Down.png";
import DateRangePicker from "../components/DateRangePicker";
import RefundTable from "../components/RefundTable";

const Request = () => {
  const categories = [
    "All",
    "Pending",
    "In-progress",
    "Review",
    "Approved",
    "Declined",
  ];
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
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState(false);

  return (
    <div className=" flex flex-row h-screen">
      {/* Sidebar */}
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

        {/* Footer */}
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

      {/* Right-side */}
      <div className="flex flex-col w-full">
        {/* Top Navbar */}
        <nav className="py-2 px-16 bg-white border-b-[1px] border-b-[#E5E7EB]">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-[20px] text-[#374151] font-semibold cursor-pointer">
              Hi, Arike
            </h2>
            <div className="flex flex-row gap-[16px] items-center">
              <img
                className="w-[36px] h-[36px] cursor-pointer"
                src={notifyIcon}
                alt="notify"
              />
              <span className="flex justify-center items-center rounded-full bg-[#F5F8FF] w-[42px] h-[42px] text-[14px] font-semibold text-[#F9956B]">
                AM
              </span>
              <p className="text-[14px] font-bold text-[#302C1C]">
                Arike Motunde
              </p>
            </div>
          </div>
        </nav>

        {/* Title Section */}
        <section className="py-2 px-16 mt-3 bg-white border-b-[1px] border-b-[#E5E7EB]">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Refund and Cancellation
              </h2>
              <p className="text-[12px] text-[#727372]">
                Refund and cancellation requests appear here
              </p>
            </div>
            <DateRangePicker />
            {/* <div className="p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
              <img src={calendarIcon} alt="calendar" />
              <p className="text-[12px] text-[#09090B] font-normal">
                Jan 20, 2023 - Feb 09, 2023
              </p>
              <img
                className="w-[16px] h-[16px]"
                src={dropdownIcon}
                alt="calendar"
              />
            </div> */}
          </div>
        </section>

        {/* Categories + Search/Filter */}
        <section className="flex flex-col gap-24 py-2 px-16 mt-3 bg-white">
          <div className="flex flex-col">
            <article className="flex flex-row">
              {categories.map((list) => (
                <li
                  key={list}
                  type="none"
                  className={`p-4 text-[14px] border-b-[1px] border-b-[#E5E7EB] cursor-pointer
                    ${
                      category === list
                        ? "text-[#202223] font-semibold relative"
                        : "text-[#6E767A]"
                    }`}
                  onClick={() => setCategory(list)}
                >
                  {list}
                  {category === list && (
                    <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#0D47A1] rounded-t-sm"></span>
                  )}
                </li>
              ))}
            </article>
          </div>

          <div className="p-4 border-[1px] border-[#E5E7EB] rounded-[8px] flex flex-col gap-6">
            <div className="flex flex-row justify-between mb-6">
              <div className="flex flex-row gap-6">
                {/* Filter */}
                <div className="relative">
                  <div
                    className="flex flex-row px-6 py-2 gap-4 border-[1px] border-[#DCDEE6] rounded-[4px] items-center cursor-pointer"
                    onClick={() => setFilter(!filter)}
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      src={filterIcon}
                      alt=""
                    />
                    <p className="text-[14px] text-[#121212] font-medium">
                      Filter
                    </p>
                    <img
                      className={`w-[20px] h-[20px] transform transition-transform ${
                        filter ? "rotate-180" : "rotate-0"
                      }`}
                      src={dropdownIcon}
                      alt="dropdown"
                    />
                  </div>

                  {filter && (
                    <div className="absolute mt-2 left-0 bg-white shadow-lg w-56 p-4 rounded-md z-10">
                      <h3 className="text-sm font-semibold mb-3">
                        Filter Options
                      </h3>
                      {["Option A", "Option B", "Option C"].map(
                        (opt, index) => (
                          <label
                            key={index}
                            className="flex flex-row gap-3 items-center mb-2 cursor-pointer"
                          >
                            <input type="checkbox" className="cursor-pointer" />
                            <span className="text-sm text-gray-700">{opt}</span>
                          </label>
                        )
                      )}
                      <div className="mt-3 flex justify-end">
                        <button
                          className="text-xs px-4 py-2 bg-[#0D47A1] text-white rounded hover:bg-blue-700"
                          onClick={() => setFilter(false)}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search */}
                <div className="flex flex-row px-6 py-2 gap-4 bg-[#E5E7EB] border-[1px] border-[#DCDEE6] rounded-[4px] items-center">
                  <img src={searchIcon} alt="" />
                  <input
                    className="outline-0 text-[14px] font-medium bg-transparent"
                    type="text"
                    name="search"
                    placeholder="Search with phone number"
                  />
                </div>
              </div>
              {/* Refresh & Download */}
              <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-2 border-[1px] px-6 py-2 border-[#DCDEE6] rounded-[4px] items-center cursor-pointer">
                  <img src={refreshIcon} alt="" />
                  <p className="text-[14px] font-medium text-[#121212]">
                    Refresh
                  </p>
                </div>
                <div className="flex flex-row gap-2 border-[1px] px-6 py-2 border-[#DCDEE6] rounded-[4px] items-center cursor-pointer">
                  <p className="text-[14px] font-medium text-[#121212]">
                    Download
                  </p>
                  <img src={downIcon} alt="icon" />
                </div>
              </div>
            </div>
            {/* Date & clear */}
            <div className="flex flex-row gap-4">
              <div className=" bg-[#F1F3F9] p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
                <p className="text-[13px] text-[#09090B] font-normal">
                  Date: April 23 - Feb 09, 2025
                </p>
              </div>
              <div className="p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
                <button className="text-[14px] text-[#C77756] font-semibold cursor-pointer">
                  Clear filter
                </button>
              </div>
            </div>

            {/* Table */}
            <RefundTable />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Request;
