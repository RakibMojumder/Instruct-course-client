import { createBrowserRouter } from "react-router-dom";
import Courselayout from "../../layout/Courselayout";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseCategories from "../../pages/CourseCategories/CourseCategories";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import UpdateUserInfo from "../../pages/UpdateUserInfo/UpdateUserInfo";
import UserProfile from "../../pages/UserProfile/UserProfile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'courselayout',
                element: <Courses />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/userprofile',
                element: <PrivateRoutes><UserProfile /></PrivateRoutes>
            },
            {
                path: '/updateuserinfo',
                element: <UpdateUserInfo />
            },
            {
                path: '/courselayout',
                element: <Courselayout />,
                children: [
                    {
                        path: '/courselayout',
                        element: <Courses />
                    },
                    {
                        path: '/courselayout/:id',
                        loader: async ({ params }) => {
                            return await fetch(`https://instruct-course-server-side.vercel.app/categories/${params.id}`)
                        },
                        element: <CourseCategories />
                    },
                    {
                        path: '/courselayout/coursedetails/:id',
                        loader: async ({ params }) => {
                            return await fetch(`https://instruct-course-server-side.vercel.app/course/${params.id}`)
                        },
                        element: <PrivateRoutes><CourseDetails /></PrivateRoutes>
                    }
                ]
            }
        ]
    }

]);

export default router;