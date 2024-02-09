//SiteHeader.tsx
"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 w-full bg-white h-14 flex justify-center items-center gap-x-2 p-0.5">
      <div
        className={classNames(
          "flex items-center",
          pathname === "/cliente" && "rounded bg-gray-400"
        )}
      >
        <Link href="/cliente">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">
            Cliente
          </span>
        </Link>
      </div>
      <div
        className={classNames(
          "flex items-center",
          pathname === "/productos" && "rounded bg-gray-400"
        )}
      >
        <Link href="/productos">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">
            Productos
          </span>
        </Link>
      </div>
      <div
        className={classNames(
          "flex items-center",
          pathname === "/cotizacion" && "rounded bg-gray-400"
        )}
      >
        <Link href="/cotizacion">
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">
            Cotización
          </span>
        </Link>
      </div>
      <div>
        <a
          href="https://master.d17h195czic561.amplifyapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="px-1 py-1 text-black border border-gray-500 rounded inline-block">
            Retornar
          </span>
        </a>
      </div>
    </nav>
  );
}
