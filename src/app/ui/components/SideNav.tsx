"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo_test.png";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const links = [
  { name: "Friends", href: "/friends" },
  { name: "Messages", href: "/messages" },
  { name: "Posts", href: "/posts" },
  { name: "Blog", href: "/blog" },
];

export default function SideNav() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col border-r-4 border-r-blue-500 w-2/5 gap-20 py-20">
      <Image src={logo} alt="logo" width={60} height={72} />
      <div className="flex flex-col text-3xl">
        {links.map(({ href, name }) => (
          <Link
            href={href}
            key={name}
            className={clsx("hover:text-blue-500", {
              "bg-sky-100 text-blue-600": pathname === href,
            })}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
