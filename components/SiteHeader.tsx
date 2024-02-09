//SiteHeader.tsx
"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <nav className="container h-14 flex justify-center items-center gap-x-2 text-sm">
        <div
          className={classNames(
            "flex items-center",
            pathname === "/manuales" && "rounded bg-gray-400"
          )}
        >
        <Link href="/manuales">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">Cliente</span>
        </Link>
        </div>        
        <div
          className={classNames(
            "flex items-center",
            pathname === "/productos" && "rounded bg-gray-400"
          )}
        >         
        <Link href="/productos">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">Productos</span>
        </Link>
        </div>
        <div
          className={classNames(
            "flex items-center",
            pathname === "/cotizacion" && "rounded bg-gray-400"
          )}
        >
        <Link href="/cotizacion">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">Cotización</span>
        </Link>
        </div>
        <div
          className={classNames(
            "flex items-center",
            pathname === "/manuales" && "rounded bg-gray-400"
          )}
        >
        <Link href="/manuales">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">Retornar</span>
        </Link>
        </div>
      </nav>
    </header>
  );
}
