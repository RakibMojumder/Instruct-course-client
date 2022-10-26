import { createBrowserRouter } from "react-router-dom";
import Courselayout from "../../layout/Courselayout";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import CourseCategories from "../../pages/CourseCategories/CourseCategories";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: '/blog',
                element: <Blog />
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
                            return await fetch(`http://localhost:5000/categories/${params.id}`)
                        },
                        element: <CourseCategories />
                    }
                ]
            }
        ]
    }

]);

export default router;