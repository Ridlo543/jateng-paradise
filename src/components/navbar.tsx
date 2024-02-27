"use client";

import { logout } from "@/app/actions";
import { cn } from "@/lib/utils";
import { JWTPayload } from "jose";
import { CircleUserRound, LogIn, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type MenuItem = {
  title: string;
  href: string;
};

type NavbarComponentProps = {
  authPayload?: JWTPayload;
};

export default function NavbarComponent(props: NavbarComponentProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus: Array<MenuItem> = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Popular", href: "/popular" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsAtTop(position === 0);
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsAtTop(false);
    }
  }, [pathname]);

  return (
    <header className="header z-30 sticky top-0 ">
      <nav
        className={cn(
          "navbar fixed px-4 w-full transition-all duration-300 ",
          isAtTop
            ? "bg-transparent  backdrop-blur-sm"
            : "bg-white bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-xl"
        )}
      >
        {/* navbar container */}
        <div className="flex justify-between h-16 max-w-[1024px] mx-auto items-center">
          {/* navbar title */}
          <Link href={"/"}>
            <Image
              src="/logoJatengParadise.png"
              alt="Jateng Paradise"
              width={100}
              height={70}
              className="cursor-pointer"
            />
          </Link>

          {/* Navbar toggle button */}
          <button
            className={cn(
              "md:hidden inline-flex items-center justify-center p-2 rounded-md cursor-pointer",
              isAtTop ? "text-white" : ""
            )}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              // Ikon untuk menu "Tutup"
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                ></polygon>
              </svg>
            ) : (
              // Ikon untuk menu "Buka"
              <svg className="h-6 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V15z"></path>
              </svg>
            )}
          </button>

          {/* navbar menus */}
          <div
            className={cn(
              "hidden md:flex md:space-x-4",
              isAtTop ? "text-white" : ""
            )}
          >
            {menus.map((item, index) => (
              <Link href={item.href} key={"navbar-menu-item-" + index}>
                <Button
                  variant={"link"}
                  className={cn("font-semibold", isAtTop ? "text-white" : "")}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
            <button
              className="flex flex-row justify-center items-center"
              aria-label="search"
              data-search-trigger
            >
              <Search className="mr-2 " />
            </button>
          </div>

          {/* navbar auth actions */}
          <div className="hidden md:flex md:items-center">
            {props.authPayload ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <CircleUserRound
                    className={cn(
                      "w-8 h-8 cursor-pointer",
                      isAtTop ? "text-white" : "text-black"
                    )}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                      logout();
                      router.replace("/");
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={"/auth/login"}>
                <Button size={"sm"}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
        {/* Responsive Navbar Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-4">
            {menus.map((item, index) => (
              <Link href={item.href} key={"navbar-menu-item-" + index}>
                <Button
                  variant={"link"}
                  className={cn(
                    "py-2 px-4 my-1",
                    isAtTop ? "text-white" : "text-black"
                  )}
                  onClick={toggleMenu}
                >
                  {item.title}
                </Button>
              </Link>
            ))}

            {/* Navbar auth actions for mobile */}
            <div className="mt-4">
              {props.authPayload ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <CircleUserRound
                      className={cn(
                        "w-8 h-8 cursor-pointer",
                        isAtTop ? "text-white" : "text-black"
                      )}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => {
                        logout();
                        router.replace("/");
                      }}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={"/auth/login"}>
                  <Button size={"sm"}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
