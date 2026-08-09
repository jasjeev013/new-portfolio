'use client';
import { useState } from 'react';
import { toast } from 'sonner';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, viewportConfig } from '@/lib/animations';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      toast.error('CAPTCHA not available', {
        description: 'Please try again later',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const token = await executeRecaptcha('contactSubmit');
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      toast.error('Error submitting form', {
        description: error instanceof Error ? error.message : 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      id='contactMe'
      className='mt-16 scroll-mt-20'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
        Contact
      </h2>

      <motion.form
        variants={itemVariants}
        className='mt-6'
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-xs font-mono text-muted-foreground mb-1">
              First name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-transparent focus:outline-none focus:border-accent transition-colors"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-xs font-mono text-muted-foreground mb-1">
              Last name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-transparent focus:outline-none focus:border-accent transition-colors"
              required
              aria-required="true"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-transparent focus:outline-none focus:border-accent transition-colors"
            required
            aria-required="true"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-transparent focus:outline-none focus:border-accent transition-colors"
            required
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-5 py-2 text-sm font-medium rounded-sm bg-foreground text-background hover:opacity-90 transition-opacity ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </motion.form>
    </motion.div>
  );
}

export default ContactMe;
