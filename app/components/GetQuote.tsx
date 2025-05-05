'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

const GetQuote: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // TODO: Implement form submission logic
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get a Quote</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Request a quote for our products or services. We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-6">
              <h3 className="text-xl font-heading font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Kitale, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-primary">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:info@perilimited.co.ke"
                        className="hover:text-primary transition-colors"
                      >
                        info@perilimited.co.ke
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-heading font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <h3 className="text-xl font-heading font-semibold mb-4">Request a Quote</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="input-field"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="input-field"
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { required: 'Phone is required' })}
                    className="input-field"
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium mb-1">
                    Product
                  </label>
                  <select
                    id="product"
                    {...register('product', { required: 'Product is required' })}
                    className="input-field"
                  >
                    <option value="">Select a product</option>
                    <option value="flowers">Flowers</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.product && (
                    <p className="mt-1 text-sm text-red-600">{errors.product.message}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  {...register('quantity', { required: 'Quantity is required' })}
                  className="input-field"
                  placeholder="Estimated quantity needed"
                />
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className="input-field"
                  placeholder="Additional details about your request"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              {submitSuccess && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you for your request! We&apos;ll get back to you soon.
                </div>
              )}
              {submitError && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                  {submitError}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Request Quote'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote; 