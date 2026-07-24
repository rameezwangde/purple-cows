import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, LockKeyhole } from 'lucide-react'
import { contactSchema } from '../../validation/contactSchema'
import { serviceOptions } from '../../data/contactInfo'
import FormSuccess from './FormSuccess'
const FieldError=({id,error})=>error?<p className="ct-error" id={id} role="alert"><b>!</b> {error.message}</p>:null
export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [urls, setUrls] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', phone: '', service: '', message: '' }
  });

  const submit = async (data) => {
    // Format the message
    const text = `New Inquiry from Purple Cow Website:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nService: ${data.service}\n\nMessage:\n${data.message}`;
    
    // 1. WhatsApp redirection
    const waUrl = `https://wa.me/919769402412?text=${encodeURIComponent(text)}`;
    
    // 2. Email redirection
    const mailUrl = `mailto:contactus@wearepurplecow.com?subject=New Lead from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(text)}`;
    
    setUrls({ waUrl, mailUrl });
    setSuccess(true);
  };

  const restart = () => {
    reset();
    setSuccess(false);
    setUrls(null);
  };

  if (success) return <FormSuccess onReset={restart} urls={urls} />;

  return (
    <form className="ct-form" id="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="ct-form-intro">
        <h2>Send Us a <span>Message</span></h2>
        <p>Fill in the details below and we’ll get back to you within 24 business hours.</p>
        <i aria-hidden="true">&#x2198;&#xFE0E;</i>
      </div>
      <div className="ct-fields">
        <div className="ct-field">
          <label htmlFor="ct-name">Your Name</label>
          <input id="ct-name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'ct-name-error' : undefined} {...register('name')} />
          <FieldError id="ct-name-error" error={errors.name} />
        </div>
        <div className="ct-field">
          <label htmlFor="ct-email">Email Address</label>
          <input id="ct-email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'ct-email-error' : undefined} {...register('email')} />
          <FieldError id="ct-email-error" error={errors.email} />
        </div>
        <div className="ct-field">
          <label htmlFor="ct-company">Company Name <small>(optional)</small></label>
          <input id="ct-company" autoComplete="organization" {...register('company')} />
        </div>
        <div className="ct-field">
          <label htmlFor="ct-phone">Phone Number <small>(optional)</small></label>
          <input id="ct-phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'ct-phone-error' : undefined} {...register('phone')} />
          <FieldError id="ct-phone-error" error={errors.phone} />
        </div>
        <div className="ct-field ct-wide">
          <label htmlFor="ct-service">What are you looking for?</label>
          <select id="ct-service" aria-invalid={!!errors.service} aria-describedby={errors.service ? 'ct-service-error' : undefined} {...register('service')}>
            <option value="">Choose a service</option>
            {serviceOptions.map(item => <option key={item}>{item}</option>)}
          </select>
          <FieldError id="ct-service-error" error={errors.service} />
        </div>
        <div className="ct-field ct-wide">
          <label htmlFor="ct-message">Tell us about your project</label>
          <textarea id="ct-message" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'ct-message-error' : undefined} {...register('message')} />
          <FieldError id="ct-message-error" error={errors.message} />
        </div>
        <button className="ct-submit" type="submit" disabled={isSubmitting}>
          Send message <ArrowRight />
        </button>
        <p className="ct-privacy">
          <LockKeyhole /> We respect your privacy. Your information is safe with us.
        </p>
      </div>
    </form>
  );
}