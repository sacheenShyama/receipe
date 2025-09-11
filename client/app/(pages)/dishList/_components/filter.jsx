"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const cuisineData = [
  {
    parent: "diet",
    data: ["vegetarian", "non vegetarian"],
  },
  {
    parent: "course",
    data: ["dessert", "main course", "snack", "starter"],
  },
  {
    parent: "flavor_profile",
    data: ["sweet", "spicy", "bitter", "sour", "rare"],
  },
  {
    parent: "region",
    data: ["West", "South", "North", "East", "North East", "Central", "rare"],
  },
  {
    parent: "state",
    data: [
      "West Bengal",
      "Punjab",
      "Maharashtra",
      "Gujarat",
      "Tamil Nadu",
      "Andhra Pradesh",
      "Assam",
      "Uttar Pradesh",
      "Karnataka",
      "Kerala",
      "Rajasthan",
      "Odisha",
      "Telangana",
      "Bihar",
      "Goa",
      "Madhya Pradesh",
      "Jammu & Kashmir",
      "Chhattisgarh",
      "Haryana",
      "Uttarakhand",
      "NCT of Delhi",
      "Tripura",
      "Manipur",
      "Nagaland",
      "rare",
    ],
  },
];
const Filter = ({filterData,setFilterData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOption, setShowOption] = useState("");

  const handleCheckbox = (type, value, checked) => {
    setFilterData((prev) => {
      const prevOptions = prev[type] || [];
      if (checked) {
        return { ...prev, [type]: [...prevOptions, value] };
      } else {
        return { ...prev, [type]: prevOptions.filter((v) => v !== value) };
      }
    });
  };
  console.log(filterData);
  return (
    <div className="p-4 relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        Filter
      </button>

      {isOpen && (
        <div className="z-10 absolute top-full left-0 bg-white w-70 border rounded-md shadow-lg">
          {cuisineData.map((item) => (
            <div key={item.parent} className="p-2 w-full">
              <button
                onClick={() =>
                  setShowOption(item.parent === showOption ? "" : item.parent)
                }
                className="hover:bg-gray-300 rounded w-full flex justify-between uppercase font-bold"
              >
                {item.parent} <FaAngleDown />
              </button>
              {showOption === item.parent &&
                item.data.map((option, index) => {
                  return (
                    <div key={index} className="pl-2 hover:bg-gray-100">
                      <label htmlFor="">
                        <input
                          type="checkbox"
                          className="mr-2"
                          checked={
                            filterData[item.parent]?.includes(option) || false
                          }
                          onChange={(e) =>
                            handleCheckbox(
                              item.parent,
                              option,
                              e.target.checked
                            )
                          }
                        />
                        {option}
                      </label>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
