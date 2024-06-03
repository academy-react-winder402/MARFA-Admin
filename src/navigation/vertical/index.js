import {List,Users,Airplay,File,Home, Circle } from "react-feather";

export default [
  {
    id: "home",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "Users",
    title: " کاربران",
    icon: <Users size={20} />,
    navLink: "/Users",
  },
  {
    id: "Curses",
    title: " دوره ها",
    icon: <List size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "ListCurses",
        title: "لیست دوره ها",
        icon: < Circle size={12} />,
        navLink: "/ListCurses",
      },
      {
        id: "ListCursesUser",
        title: "لیست دوره های شما",
        icon: <Circle size={12} />,
        navLink: "/ListCursesUser",
      },
      {
        id: "SelectionListCursesUse",
        title: "دوره های رزرو شده کاربران",
        icon: <File size={12} />,
        navLink: "/SelectionListCursesUse",
      },
      {
        id: "CreatNewCurses",
        title: "ساخت دوره جدید",
        icon: <Circle size={12} />,
        navLink: "/CreatNewCurses",
      },
    ],
  },
  {
    id: "smaplePage",
    title: " اخبار ",
    icon: <Airplay size={20} />,
    // navLink: "/sample",
    children: [
      {
        id: "invoiceList",
        title: "List",
        icon: <Circle size={12} />,
        navLink: "/apps/invoice/list",
      },
    ],
  },
];
