//SiteHeader.tsx
"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 w-full bg-white h-10 flex justify-center items-center p-0.5 space-x-1">
      <div
        className={classNames(
          "flex items-center",
          pathname === "/cliente" && "rounded bg-gray-400"
        )}
      >
        <Link href="/cliente">
          <span className="flex items-center justify-center px-1 py-1 h-6 text-black border border-gray-500 rounded">
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
          <span className="flex items-center justify-center px-1 py-1 h-6 text-black border border-gray-500 rounded">
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
          <span className="flex items-center justify-center px-1 py-1 h-6 text-black border border-gray-500 rounded">
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
          <span className="flex items-center justify-center px-1 py-1 h-6 text-black border border-gray-500 rounded">
            Retornar
          </span>
        </a>
      </div>
    </nav>
  );
}
