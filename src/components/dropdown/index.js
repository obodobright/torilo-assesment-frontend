import { useClickOutside } from "@/hooks/useClickOutside";
import { Button, Menu, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect, useRef } from "react";

function Dropdown({ open, setIsOpen }) {
  const dropdownRef = useClickOutside(setIsOpen);

  return (
    <Menu>
      <section>
        <Button
          onClick={() => setIsOpen(!open)}
          className="h-10 bg-[#F2F2F2] flex items-center rounded-[10px] justify-center px-6 text-[#545454] text-base font-semibold"
        >
          View All
        </Button>
        {open && (
          <div
            ref={dropdownRef}
            style={{
              boxShadow: "1px 5px 22px 4px #00000026",
            }}
            className="absolute  right-0 top-12 max-w w-[250px] bg-white border border-[#F2F2F2] rounded "
          >
            <MenuItems static>
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left border-b border-[#E1E1E1] hover:bg-[whitesmoke] text-sm`}
                >
                  Add People
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left border-b border-[#E1E1E1] hover:bg-[whitesmoke] text-sm`}
                >
                  Import People List
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left border-b border-[#E1E1E1] hover:bg-[whitesmoke] text-sm`}
                >
                  Add Timeoff
                </button>
              </MenuItem>{" "}
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left border-b border-[#E1E1E1] hover:bg-[whitesmoke] text-sm`}
                >
                  Add Benefit
                </button>
              </MenuItem>{" "}
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left border-b border-[#E1E1E1] hover:bg-[whitesmoke] text-sm`}
                >
                  Add Training
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left border-b border-[#E1E1E1] hover:bg-[whitesmoke] text-sm`}
                >
                  Upload Document
                </button>
              </MenuItem>
              <MenuItem>
                <button
                  className={`${" text-gray-900"}  block px-4 py-3 w-full text-left hover:bg-[whitesmoke]  text-sm`}
                >
                  Create Task
                </button>
              </MenuItem>
            </MenuItems>
          </div>
        )}
      </section>
    </Menu>
  );
}

export default Dropdown;
