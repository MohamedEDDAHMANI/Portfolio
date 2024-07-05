"use client"

import { usePathname } from "next/navigation"
import { Link as ScrollLink } from 'react-scroll'


const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/About"
    },
    {
        name: "Project",
        path: "/Project"
    },
    {
        name: "Contact",
        path: "/Contact"
    },
]

const Nav = ({ className }) => {
    const pathname = usePathname();
    return (
        <nav className={`flex items-center gap-8 ${className}`}>
            {links.map((link, index) => {
                return (
                    <ScrollLink key={index} className={`${link.path === pathname
                            ? "text-accent border-b-2 border-accent"
                            : ""
                        } capitalize font-medium hover:text-accent transition-all`} >
                        {link.name}
                    </ScrollLink>
                )
            })}
        </nav>
    )
}

export default Nav
