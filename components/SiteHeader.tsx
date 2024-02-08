//SiteHeader.tsx
"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <nav className="container h-14 flex justify-center items-center gap-x-5 text-sm">
        <div
          className={classNames(
            "flex items-center",
            pathname === "/productos" && "border-b-2 border-sky-400"
          )}
        >
          <Link href="/products">Gasodomésticos</Link>
        </div>
        <div
          className={classNames(
            "flex items-center",
            pathname === "/Cotización" && "border-b-2 border-sky-400"
          )}
        >
          <Link href="/signin">Cotización</Link>
        </div>
        <div
          className={classNames(
            "flex items-center",
            pathname === "/Cotización" && "border-b-2 border-sky-400"
          )}
        >
          <Link href="/signin">Cliente</Link>
        </div>
        <div
          className={classNames(
            "flex items-center",
            pathname === "/Cotización" && "border-b-2 border-sky-400"
          )}
        >
          <Link href="/signin">Manuales</Link>
        </div>    
        <div
          className={classNames(
            "flex items-center",
            pathname === "/Cotización" && "border-b-2 border-sky-400"
          )}
        >
          <Link href="/signin">Retornar</Link>
        </div>      
      </nav>
    </header>
  );
}