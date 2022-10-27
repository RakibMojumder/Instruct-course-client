import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className='p-10 bg-gray-100'>
            <article className='text-justify mb-5'>
                <h3 className='text-xl font-semibold'><FaArrowCircleRight className='inline-block' /> What is CORS?</h3>
                <p className='pl-5'>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                    A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.
                </p>
            </article>
            <article className='text-justify mb-5'>
                <h3 className='text-xl font-semibold'><FaArrowCircleRight className='inline-block' /> How private routes works?</h3>
                <p className='pl-5'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            </article>
            <article className='text-justify mb-5'>
                <h3 className='text-xl font-semibold'><FaArrowCircleRight className='inline-block' /> What is Node?</h3>
                <p className='pl-5'>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />
                </p>

                <h3 className='text-xl font-semibold'><FaArrowCircleRight className='inline-block' /> How does Node work?</h3>
                <p className='pl-5'> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </article>
            <article className='text-justify mb-5'>
                <h3 className='text-xl font-semibold'><FaArrowCircleRight className='inline-block' /> Why are you using firebase?</h3>
                <p className='pl-5'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p> <br />

                <h3 className='text-xl font-semibold'><FaArrowCircleRight className='inline-block' /> What other options do you have to implement authentication?</h3>
                <p className='pl-5'>There are many options to implement authenticaion such as <strong>Microsoft</strong>, <strong>Ping Identity</strong>, <strong>Oracle</strong>, <strong>IBM</strong> etc.</p>
            </article>
        </div>
    );
};

export default Blog;