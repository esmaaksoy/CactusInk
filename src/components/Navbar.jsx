import { line, notification, write } from "../helpers/icon";
import logo from "../assets/logo.png";
import { Fragment } from 'react'
import {Menu, Transition } from '@headlessui/react'
import { NavLink } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
  return (
      <header className="bg-[#AED1B2] px-6 py-2 md:px-12 relative z-10">
        <div className="flex justify-between">
          <div className="flex justify-center items-center">
            <div className="flex gap-2 sm:gap-4">
              <NavLink to="/" className="hover:text-white cursor-pointer text-md sm:text-xl">Home</NavLink>
              {line}
              <NavLink to="/about/" className="hover:text-white cursor-pointer text-md sm:text-xl">About</NavLink>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-end sm:justify-center">
            <img src={logo} alt="" className="w-[50px] lg:w-[80px]" />
            <h1 className="tracking-widest font-great text-3xl lg:text-5xl font-bold text-[#4B7755]">
              Cactus<span className="text-black">Ink</span>
            </h1>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center sm:gap-4">
              <NavLink
                to="/new-blog/"
                className="block shrink-0 sm:rounded-full sm:bg-white p-2.5 text-[#4B7755] shadow-sm hover:bg-[#AED1B2] hover:text-white"
              >
                {write}
              </NavLink>
              {line}
              <a
                href="#"
                className="block shrink-0 sm:rounded-full sm:bg-white p-2.5 text-[#4B7755] shadow-sm hover:bg-[#AED1B2] hover:text-white"
              >
                {notification}
              </a>
              {line}
            </div>
             <Menu as="div" className="relative">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />                     
                      <img
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Draf
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
