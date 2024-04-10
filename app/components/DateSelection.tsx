"use client";

import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateSelection = () => {
  type DateRangeType = {
    startDate: Date | undefined;
    endDate: Date | undefined;
    key: string;
  };

  const [date, setDate] = useState<DateRangeType[]>([
    {
      startDate: new Date(),
      endDate: undefined,
      key: "selection",
    },
  ]);

  type RangeKeyDict = {
    selection: DateRangeType;
  };

  const handleDateChange = (rangesByKey: RangeKeyDict) => {
    const { selection } = rangesByKey;
    const { startDate, endDate } = selection;

    if (startDate && endDate) {
      setDate([{ startDate, endDate, key: "selection" }]);
    }
  };

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row border-r-[1px] ">
      <div className="relative flex-1">
        {/*btn */}
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
            <FaCalendarAlt className="text-[#4F8A8B]" />
            <div className="text-[15px] uppercase font-bold">Select Date</div>
          </div>
          <div className="flex items-center gap-x-3 xl:ml-6 py-2">
            {date[0].startDate && date[0].endDate ? (
              <div className="flex items-center gap-2 text-secondary">
                <div>{format(date[0].startDate as Date, "dd/MM/yyyy")}</div>
                <FaArrowRight className="text-[#4F8A8B] text-[12px]" />
                <div>
                  <div>{format(date[0].endDate as Date, "dd/MM/yyyy")}</div>
                </div>
              </div>
            ) : (
              <div className="uppercase font-medium text-[13px] text-gray-400 text-center">
                {" "}
                {new Date().toLocaleDateString("en-GB")}
              </div>
            )}
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] rounded-[10px] overflow-hidden ">
          <DateRange
            onChange={handleDateChange as any}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={["#4F8A8B"]}
            minDate={new Date()}
          />
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default DateSelection;
