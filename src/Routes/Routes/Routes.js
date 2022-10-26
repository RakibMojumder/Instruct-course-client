import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Course from "../../pages/Course/Course";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: async () => {
                    return await fetch(`http://localhost:5000/courses`)
                },
                element: <Home />
            },
            {
                path: '/course',
                element: <Course />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
]);

export default router;