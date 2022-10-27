import React from 'react';
import { Accordion } from 'flowbite-react';

const FAQ = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-1 md:col-span-2'></div>
            <div className='col-span-10 md:col-span-8 mt-[60px] mb-[50px]'>
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Is your content is free?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="text-gray-500 dark:text-gray-400">
                                No, our content is not free. If your are want to learn from us you have to pay.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Is there web development or any other technology course available?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                No, We don't have any technology courses right now. But we have a plan to bring it soon.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            What are the differences between Flowbite and Tailwind UI?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Learn more about these technologies:
                            </p>
                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                <li>
                                    <a
                                        href="https://flowbite.com/pro/"
                                        className="text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Flowbite Pro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindui.com/"
                                        rel="nofollow"
                                        className="text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
            <div className='col-span-1 md:col-span-2'></div>
        </div>
    );
};

export default FAQ;