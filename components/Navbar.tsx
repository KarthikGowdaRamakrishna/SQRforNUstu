"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUser, SignOutButton, UserButton } from "@clerk/nextjs";

function NavBar() {
  const { user, isLoaded } = useUser();
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-slate-950 fixed top-0 left-0 right-0 z-40">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 z-40">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block z-20">
              {/* LOGO */}
              <Link href="/">
                <Image src="/SQRlogo.jpg" alt="logo" width={94} height={49} />

                {/* <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2> */}
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden bg-slate-950 bg-opacity-100 z-10">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <div></div>
                  ) : (
                    <Image
                      src="./hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/#approach" onClick={() => setNavbar(!navbar)}>
                    How SQR works?
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href=" https://theradarlist.medium.com/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="mailto:mark@squareresults.commailto:mark@squareresults.com"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link
                    href="https://squarecircle.group/"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Pricing
                  </Link>
                </li>
                {/* Auth Buttons */}
                {isLoaded && (
                  <>
                    {user ? (
                      <>
                        <li className="pb-6 text-xl text-white py-3 px-6 text-center border-b-2 md:border-b-0">
                          <UserButton afterSignOutUrl="/" />
                        </li>
                        {/* <li className="pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0">
                          <SignOutButton>
                            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">
                              Sign Out
                            </button>
                          </SignOutButton>
                        </li> */}
                      </>
                    ) : (
                      <>
                        <li className="pb-6 text-xl py-2 px-6 text-center md:border-b-0">
                          <Link
                            href="/sign-in"
                            onClick={() => setNavbar(!navbar)}
                            className="text-white hover:bg-purple-600 md:hover:bg-transparent md:hover:text-purple-600 px-4 py-2 rounded-md"
                          >
                            Sign In
                          </Link>
                        </li>
                        <li className="pb-6 text-xl py-2 px-6 text-center md:border-b-0">
                          <Link
                            href="/sign-up"
                            onClick={() => setNavbar(!navbar)}
                            className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-md"
                          >
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
