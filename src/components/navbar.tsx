import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type MenuItem = {
  title: string;
  href: string;
};

export default function NavbarComponent() {
  const menus: Array<MenuItem> = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Popular places", href: "/popular" },
  ];

  return (
    <>
      <div className="h-16 w-full fixed top-0 border-b z-10 bg-white/70 backdrop-blur">
        <div className="h-16 mx-auto px-4 flex items-center justify-between max-w-[1024px]">
          <Button variant={"link"} className="font-semibold">
            Jateng Paradise
          </Button>

          {/* menus */}
          <div>
            {menus.map((item, index) => (
              <Button key={"menus-item-" + index} variant={"link"}>
                {item.title}
              </Button>
            ))}
          </div>

          {/* actions */}
          <Link href={"/auth/login"}>
            <Button>
              <LogIn className="w-4 h-4 mr-2" />
              Masuk
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
