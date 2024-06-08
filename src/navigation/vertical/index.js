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
    // navLink: "/Users",
    children: [
      {
        id: "ListUsers",
        title: " لیست کاربران",
        icon: <Circle size={12} />,
        navLink: "/UsersList/ListUsers",
      },
      {
        id: "CreateUser",
        title: "ایجاد کاربر جدید",
        icon: <Circle size={12} />,
        navLink: "/UsersList/CreateNewUser",
      },   
                       
    ],   
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
        navLink: "/Curses/ListCurses",
      },
      {
        id: "ListCursesUser",
        title: "لیست دوره های شما",
        icon: <Circle size={12} />,
        navLink: "/Curses/ListCursesUser",
      },
      {
        id: "SelectionListCursesUse",
        title: "دوره های رزرو شده کاربران",
        icon: <File size={12} />,
        navLink: "/Curses/SelectionListCursesUse",
      },
      {
        id: "CreatNewCurses",
        title: "ساخت دوره جدید",
        icon: <Circle size={12} />,
        navLink: "/Curses/CreatNewCurses",
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
