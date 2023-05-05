import {
  faHouse,
  faCircleUser,
  faCircleInfo,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
export const NavbarItems = [
  {
    name: "Home",
    cName: "nav-links",
    icon: faHouse,
    id: 1,
    url: "/",
  },
  {
    name: "About",
    cName: "nav-links",
    icon: faCircleInfo,
    id: 2,
    url: "/about",
  },
  {
    name: "Service",
    cName: "nav-links",
    icon: faBriefcase,
    id: 3,
    url: "/service",
  },
  {
    name: "Contact",
    cName: "nav-links",
    icon: faCircleUser,
    id: 4,
    url: "/contact",
  },
  {
    name: "Sign Up",
    url: "/signup",
    id: 5,
    cName: "nav-links-mobile",
  },
];
