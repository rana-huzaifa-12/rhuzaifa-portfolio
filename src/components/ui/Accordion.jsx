import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-xl space-y-2">
            <AccordionItem value="item-1">
                <AccordionTrigger className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white py-3 px-4 rounded-md shadow-md hover:bg-gray-200  dark:hover:bg-gray-600 transition-all duration-300">
                    What is Front-End Development?
                </AccordionTrigger>
                <AccordionContent className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-4 rounded-b-md shadow-sm my-3">
                    Front-end development refers to the creation of the user interface and user experience of websites or web applications. It involves working with technologies like HTML, CSS, and JavaScript to make web pages interactive and visually appealing.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white py-3 px-4 rounded-md shadow-md hover:bg-gray-200 hover:text-white dark:hover:bg-gray-600 transition-all duration-300">
                    What are some popular front-end frameworks?
                </AccordionTrigger>
                <AccordionContent className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-4 rounded-b-md shadow-sm my-3">
                    Some popular front-end frameworks are React, Angular, and Vue.js. These frameworks help developers build scalable and maintainable user interfaces more efficiently by providing tools, reusable components, and a structured way of building web apps.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white py-3 px-4 rounded-md shadow-md hover:bg-gray-200 hover:text-white dark:hover:bg-gray-600 transition-all duration-300">
                    What is the difference between HTML, CSS, and JavaScript?
                </AccordionTrigger>
                <AccordionContent className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-4 rounded-b-md shadow-sm my-3">
                    HTML (HyperText Markup Language) is used to structure content on the web. CSS (Cascading Style Sheets) is used to style the layout and appearance of web pages, such as colors, fonts, and spacing. JavaScript is a programming language used to make web pages interactive by adding functionality, such as animations, form validation, and dynamic content loading.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
