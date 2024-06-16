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
    navLink: "/AllUserTab1"
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
    id: "NewsPage",
    title: " اخبار ",
    icon: <Airplay size={20} />,
    navLink: "/NewsPage",
    children: [
      {
        id: "NewsList",
        title: "لیست اخبار",
        icon: <Circle size={12} />,
        navLink: "/NewsPage/NewsList",
      },
      {
        id: "NewsCreatnew",
        title: "ایجاد خبر جدید",
        icon: <Circle size={12} />,
        navLink: "/NewsPage/NewsCreatnew",
      },
      {
        id: "NewsCategory",
        title: "دسته بندی خبر",
        icon: <Circle size={12} />,
        navLink: "/NewsPage/NewsCategory",
      },
    ],
  },
];
