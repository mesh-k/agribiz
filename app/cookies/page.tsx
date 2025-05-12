/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Pery Growers Limited',
  description: 'Learn about how Pery Growers Limited uses cookies and similar technologies on our website.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                This Cookie Policy explains how Pery Growers Limited ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at perygrowers.co.ke ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">2. What are cookies?</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="text-gray-600 mb-4">
                Cookies set by the website owner (in this case, Pery Growers Limited) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">3. Why do we use cookies?</h2>
              <p className="text-gray-600 mb-4">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">4. Types of cookies we use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Performance Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600">
                    These cookies help us understand how visitors interact with our Website by collecting and reporting information anonymously.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">5. How can you control cookies?</h2>
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings. Please note that if you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted.
              </p>
              <p className="text-gray-600 mb-4">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">6. Updates to this Cookie Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: <a href="mailto:info@perygrowers.co.ke" className="text-primary hover:text-primary-dark">info@perygrowers.co.ke</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">11. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and to hold certain information. We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Strictly Necessary Cookies:</strong> Essential for the operation of our website</li>
                <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors and see how they move around our website</li>
                <li><strong>Functionality Cookies:</strong> Enable us to personalize content for you</li>
                <li><strong>Targeting Cookies:</strong> Record your visit to our website, the pages you have visited, and the links you have followed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold text-gray-800 mb-4">11.3 Cookie Management</h2>
              <p className="text-gray-600">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org or www.allaboutcookies.org.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 