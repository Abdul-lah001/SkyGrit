import { useState } from "react";
import Sidebar from "../components/Sidebar";
import notifyIcon from "../assets/Icons/notification.svg";
import addIcon from "../assets/Icons/material-symbols_add-rounded.svg";
import filterIcon from "../assets/Icons/filter.svg";
import dropdownIcon from "../assets/Icons/akar-icons_chevron-down.svg";
import searchIcon from "../assets/Icons/Search.svg";
import refreshIcon from "../assets/Icons/refresh-2.png";
import downIcon from "../assets/Icons/Down.png";
import UserManagementTable from "../components/UserManagementTable";

const UserManagement = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div>
      <div className="flex flex-row h-full">
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
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
          <section className="py-2 px-16 bg-white border-b-[1px] border-b-[#E5E7EB]">
            <div className="flex flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold">User Management</h2>
                <p className="text-[12px] text-[#727372]">
                  Here’s a list of all users on the system
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <button className="px-6 py-4 bg-[#F5F6F9] rounded-[8px] text-[14px] font-medium">
                  Manage Roles
                </button>
                <button className=" flex gap-3 flex-row items-center justify-center px-6 py-4 bg-[#0D47A1] text-white rounded-[8px] text-[16px] font-medium  hover:bg-[#1565C0] transition">
                  <img src={addIcon} alt="add" />
                  <p>Add New User</p>
                </button>
              </div>
            </div>

            <div className="p-4 border-[1px] border-[#E5E7EB] rounded-[8px] flex flex-col gap-6 mt-20">
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
                              <input
                                type="checkbox"
                                className="cursor-pointer"
                              />
                              <span className="text-sm text-gray-700">
                                {opt}
                              </span>
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
              <UserManagementTable />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
