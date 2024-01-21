"use client"
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-white border-b">
      <nav className="container h-14 flex gap-x-5 text-sm">

        <div className={classNames("flex items-center", pathname === "/productos/cocinas" && "border-b-2 border-sky-400")}>
          <Link href="/productos/cocinas">Cocinas</Link>
        </div>

        <div className={classNames("flex items-center", pathname === "/productos/freidoras" && "border-b-2 border-sky-400")}>
          <Link href="/productos/freidoras">Freidoras</Link>
        </div>

         <div className={classNames("flex items-center", pathname === "/productos/hornos" && "border-b-2 border-sky-400")}>
          <Link href="/productos/hornos">Hornos</Link>
        </div>

        <div className={classNames("flex items-center", pathname === "/productos/otros" && "border-b-2 border-sky-400")}>
          <Link href="/productos/otros">Otros</Link>
        </div>       
      </nav>
    </header>
  )
}