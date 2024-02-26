//NavBar.tsx
"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav className=" bg-white h-10 flex justify-center items-center p-0.5 space-x-1">
      {/*Pestaña Cotización*/}
      <div
        className={classNames(
          "flex items-center",
          pathname === "/" && "rounded bg-gray-400"
        )}
      >
        <Link href="/">
          <span className="flex items-center justify-center px-1 py-1 h-6 text-black border border-gray-500 rounded">
            Cotización
          </span>
        </Link>
      </div>

      {/*Pestaña Productos*/}
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

      {/*Pestaña Manuales*/}
      <div
        className={classNames(
          "flex items-center",
          pathname === "/manuales" && "rounded bg-gray-400"
        )}
      >
        <Link href="/manuales">
          <span className="flex items-center justify-center px-1 py-1 h-6 text-black border border-gray-500 rounded">
            Manuales
          </span>
        </Link>
      </div>

      {/*Pestaña Retornar*/}
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
