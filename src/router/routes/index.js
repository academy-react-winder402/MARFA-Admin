// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";


// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";


const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/login";

const Home = lazy(() => import("../../pages/Home"));
const Users = lazy(() => import("../../pages/UsersPage/ListUsers"));
const Curses = lazy(() => import("../../pages/Curses"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const ForgotPassword = lazy(() => import("../../pages/ForgotPassword"));
const Error = lazy(() => import("../../pages/Error"));
const ListCurses = lazy(() => import("../../@core/components/componentCourses/coursespageMain/ListCurses"));
const ListUsers = lazy(() => import("../../pages/UsersPage/ListUsers"));
const CreateNewUser = lazy(() => import("../../pages/UsersPage/CreateNewUser"));
const ListCursesUser = lazy(() => import("../../@core/components/componentCourses/coursespageMain/ListCursesUser"));
const CreatNewCurses = lazy(() => import("../../@core/components/componentCourses/coursespageMain/CreatNewCurses"));
const SelectionListCursesUse = lazy(() => import("../../@core/components/componentCourses/coursespageMain/SelectionListCursesUse"));
const UpdadeUsre = lazy(() => import('../../@core/components/UpdadeUsre/UpdadeUsre'));
const Profile = lazy(() => import('../../@core/components/Profile'));
const NewsPage = lazy(() => import('../../../src/pages/NewsPage'));
const NewsList = lazy(() => import('../../@core/components/NewsALLComponent/NewsList/NewsList'));
const NewsCreatnew = lazy(() => import('../../@core/components/NewsALLComponent/NewsCreatnew'));
const NewsCategory = lazy(() => import('../../@core/components/NewsALLComponent/NewsCategory'));
const NewsChangeEdid = lazy(() => import('../../@core/components/NewsALLComponent/EditNews/NewsChangeEdid.js'));
const NewsDetaile = lazy(() => import('../../@core/components/NewsALLComponent/NewsDetailComponent/NewsDetaile'));
const DetailsCourse = lazy(() => import('../../@core/components/componentCourses/CourseListsecondcomponent/DetailsCourse'));
const EditCourse = lazy(() => import('../../@core/components/componentCourses/CourseListsecondcomponent/EditCourse'));

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/Users/UserDetails/:id",
    element: <Profile/>
  },
  {
    path: '/Users/UserDetails/:id',
    element: <UpdadeUsre/>,
  },
  {
    path: "/UsersList/ListUsers",
    element: <ListUsers/>,
  },
  {
    path: "UsersList/CreateNewUser",
    element: <CreateNewUser />,
  },
  {
    path: "/Curses",
    element: <Curses />,
  },
  {
    path: "/Curses/ListCursesUser",
    element: <ListCursesUser />,
  },
  {
    path: "/Curses/ListCurses/DetailsCourse/:id",
    element: <DetailsCourse />,
  },
  {
    path: "/DetailsCourse/EditCourse/:id",
    element: <EditCourse />,
  },
  {
    path: "/Curses/SelectionListCursesUse",
    element: <SelectionListCursesUse />,
  },
  {
    path: "/Curses/CreatNewCurses",
    element: <CreatNewCurses />,
  },
  {
    path: "/Curses/ListCurses",
    element: <ListCurses />,
  },
  // News
  {
    path: "/NewsPage",
    element: <NewsPage />,
  },
  {
    path: "/NewsPage/NewsList",
    element: <NewsList />,
  },
  {
    path: "/NewsList/NewsDetaile/:id",
    element: <NewsDetaile />,
  },
  {
    path: "/NewsDetaile/NewsChangeEdid/:id",
    element: <NewsChangeEdid />,
  },
  
  {
    path: "/NewsPage/NewsCreatnew",
    element: <NewsCreatnew />,
  },
  {
    path: "/NewsPage/NewsCategory",
    element: <NewsCategory />,
  },
  // ene
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
