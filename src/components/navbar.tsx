import { AuthRepository } from "@/lib/repositories/auth";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
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

export default async function NavbarComponent() {
  
  const authPayload = await AuthRepository.createSession();

  const menus: Array<MenuItem> = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Popular", href: "/popular" },
  ];

  return (
    <>
      <div className="h-16 w-full fixed top-0 border-b bg-white/70 backdrop-blur-sm z-50">
        {/* navbar container */}
        <div className="flex justify-between h-16 max-w-[1024px] px-4 mx-auto items-center">
          {/* navbar title */}
          <Link href={"/"}>
            <Button variant={"link"} className="font-semibold">
              Jateng Paradise
            </Button>
          </Link>

          {/* navbar menus */}
          <div>
            {menus.map((item, index) => (
              <Link href={item.href} key={"navbar-menu-item-" + index}>
                <Button variant={"link"}>{item.title}</Button>
              </Link>
            ))}
          </div>

          {/* navbar auth actions */}
          <div>
            {authPayload ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
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
      </div>
    </>
  );
}
