import React from 'react';

const Blog = () => {
    return (
        <div className='mt-8 text-black'>
            <article className='text-justify mb-5 bg-purple-100 p-5' data-aos="fade-right" data-aos-duration="1000">
                <h3 className='text-xl pl-6 pr-2 py-1 border-l-8 mb-3 border-orange-500 font-semibold bg-purple-400 text-white'> What is CORS?</h3>
                <p className=''>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                    A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.
                </p>
            </article>

            <article className='text-justify mb-5 bg-purple-100 p-5' data-aos="fade-left" data-aos-duration="1000">
                <h3 className='text-xl pl-6 pr-2 py-1 border-l-8 mb-3 border-orange-500 font-semibold bg-purple-400 text-white'>How private routes works?</h3>
                <p className=''>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            </article>

            <article className='text-justify mb-5 bg-purple-100 p-5' data-aos="fade-right" data-aos-duration="1000">
                <h3 className='text-xl pl-6 pr-2 py-1 border-l-8 mb-3 border-orange-500 font-semibold bg-purple-400 text-white'>What is Node?</h3>
                <p>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> <br />
                </p>
            </article>


            <article className='text-justify mb-5 bg-purple-100 p-5' data-aos="fade-left" data-aos-duration="1000">
                <h3 className='text-xl pl-6 pr-2 py-1 border-l-8 mb-3 border-orange-500 font-semibold bg-purple-400 text-white'>How does Node work?</h3>
                <p> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </article>

            <article className='text-justify mb-5 bg-purple-100 p-5' data-aos="fade-right" data-aos-duration="1000">
                <h3 className='text-xl pl-6 pr-2 py-1 border-l-8 mb-3 border-orange-500 font-semibold bg-purple-400 text-white'> What other options do you have to implement authentication?</h3>
                <p>There are many options to implement authenticaion such as <strong>Microsoft</strong>, <strong>Ping Identity</strong>, <strong>Oracle</strong>, <strong>IBM</strong> etc.</p>
            </article>
        </div>
    );
};

export default Blog;