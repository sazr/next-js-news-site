import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Input, Image, Avatar} from "@nextui-org/react";
import { FaCaretDown, FaMagnifyingGlass } from "react-icons/fa6";
import BottonHeader from "./bottom-header";
import TopHeader from "./top-header";


// export default () => {
const Header = () => {
    
  return (
    <header>
      <TopHeader />
      
      <Navbar isBordered maxWidth="lg" className="bg-stone-900 py-2 px-0" maxWidth="lg" height="auto" 
      classNames={{
        wrapper: "px-3 justify-center max-w-screen-lg"
      }}> 
        <NavbarContent justify="start" className="px-0">
          <NavbarBrand className="mr-4">
            <Image
              width="150px"
              src="https://assets.bwbx.io/s3/navi/images/logoBBGwht-4230a564d3.svg"
              alt="NextUI Album Cover"
              radius="none"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center gap-4" justify="end" classNames={{
            navbarItem: "font-semibold bg-red",
          }}>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="text-white text-sm font-semibold px-0 hidden md:flex gap-1"
                  radius="none"
                  variant="none"
                  endContent={<FaCaretDown />}
                >
                  Asia Edition
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
            <Link color="foreground" className="text-white text-sm font-semibold  hidden md:block" href="#">
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" href="#" variant="none" className="bg-white text-black text-sm font-semibold px-4 py-2 h-auto" radius="sm">
              Subscribe
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" href="#" variant="none" className="text-white font-semibold p-1 border-1 border-solid border-white hover:text-gray-300 hover:border-gray-300  hidden md:flex" radius="sm" isIconOnly>
              <FaMagnifyingGlass className="text-[16px]" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <BottonHeader />
    </header>
  )
};

export default Header;