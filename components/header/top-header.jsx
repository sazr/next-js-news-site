import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Input, Image, Avatar} from "@nextui-org/react";
import { FaCaretDown, FaTv } from "react-icons/fa6";

export default () => {
    return (
      <Navbar isBlurred={false} position="static" className="bg-stone-900 hidden md:flex" maxWidth="lg" height="auto" 
      classNames={{
        wrapper: "px-3 justify-center max-w-screen-lg"
      }}>
        <NavbarContent className="gap-2">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  radius="none"
                  variant="none"
                  endContent={<FaCaretDown className="text-md text-gray-400 hover:text-white" />}
                  className="text-white text-xs font-semibold h-auto px-0 gap-1"
                >
                  Bloomberg the Company &amp; Its Products
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link className="text-white text-xs font-semibold pl-2 border-l-solid border-l-1 border-l-white" href="#">
              Bloomberg Terminal Demo Request
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-orange-400 text-xs font-semibold pl-2 border-l-solid border-l-1 border-l-white flex items-center justify-center" href="#">
              <FaTv className="pr-1 text-white text-lg" /> Bloomberg Anywhere Remote Login
            </Link>
          </NavbarItem>
          <NavbarItem className="">
            <Link className="text-white text-xs font-semibold pl-2 border-l-solid border-l-1 border-l-white" href="#">
              Bloomberg Customer Support
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
}