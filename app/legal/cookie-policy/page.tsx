'use client';

import React from 'react';
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-muted-foreground mb-6">
          Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience and allow us to improve our services.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience and allow us to improve our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <p>We use the following types of cookies:</p>
          <ul className="list-disc pl-6">
            <li>Essential cookies - required for website functionality</li>
            <li>Analytics cookies - help us understand how visitors&apos; use our site</li>
            <li>Preference cookies - remember your settings and preferences</li>
            <li>Marketing cookies - track your interaction with our content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6">
            <li>Remember your preferences and settings</li>
            <li>Analyze website traffic and usage patterns</li>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <li>Improve our website&apos;s functionality</li>
            <li>Provide personalized content and recommendations</li>
            <li>Measure the effectiveness of our marketing campaigns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul className="list-disc pl-6">
            <li>View the cookies stored on your device</li>
            <li>Delete specific or all cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies</li>
          </ul>
          <p className="mt-4">
            Please note that blocking certain cookies may impact your experience on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
          <p>
            Some cookies on our website are placed by third-party services, such as analytics providers 
            and social media platforms. These cookies are subject to the respective third parties&apos; privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page, 
            and we encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@perilimited.co.ke<br />
            Phone: +254 700 000 000<br />
            Address: Kitale, Kenya
          </p>
        </section>

        <p className="text-muted-foreground mb-6">
          We use cookies to remember your preferences, analyze traffic, and provide you with personalized content. By using our website, you consent to our use of cookies in accordance with this policy.
        </p>
      </div>

      <div className="mt-8 pt-8 border-t">
        <Link href="/" className="text-primary hover:text-primary/80">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
} 