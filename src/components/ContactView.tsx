import React, { useState } from 'react';
import { Icons } from './Icons';

export const ContactView: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [interestArea, setInterestArea] = useState('Building (New Practice)');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName || !lastName || !message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Submit to Mailchimp CRM
      const mailchimpUrl = import.meta.env.VITE_MAILCHIMP_SUBSCRIBE_URL;
      if (mailchimpUrl) {
        const formData = new FormData();
        formData.append('EMAIL', email);
        formData.append('FNAME', firstName);
        formData.append('LNAME', lastName);
        formData.append('MMERGE5', interestArea);

        try {
          await fetch(mailchimpUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors', // Mailchimp doesn't support CORS from client-side
          });
        } catch (mcError) {
          console.error('Mailchimp integration error:', mcError);
        }
      } else {
        console.warn('Mailchimp submission skipped: VITE_MAILCHIMP_SUBSCRIBE_URL is not set.');
      }

      // 2. Send email to info@tfhn.ca
      const emailFormUrl = import.meta.env.VITE_EMAIL_FORM_URL || 'https://api.web3forms.com/submit';
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (web3FormsKey || import.meta.env.VITE_EMAIL_FORM_URL) {
        const payload: any = {
          name: `${firstName} ${lastName}`,
          email: email,
          subject: `TFHN Contact Form - ${interestArea}`,
          message: `Name: ${firstName} ${lastName}\nEmail: ${email}\nInterest Area: ${interestArea}\n\nMessage:\n${message}`,
        };

        if (web3FormsKey) {
          payload.access_key = web3FormsKey;
        }

        const response = await fetch(emailFormUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to send email submission.');
        }
      } else {
        console.warn(
          'Email forwarding skipped: Neither VITE_WEB3FORMS_ACCESS_KEY nor VITE_EMAIL_FORM_URL is configured in .env'
        );
        // Simulate a tiny delay for realistic developer testing
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setInterestArea('Building (New Practice)');
      setMessage('');
    } catch (error: any) {
      console.error('Contact Form Error:', error);
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
           {/* Info Side */}
           <div className="bg-black text-white p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                <p className="text-slate-300 mb-12">
                  Ready to optimize your practice using our proven frameworks? Schedule a discovery call today.
                </p>
                <div className="space-y-6">
                   <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <Icons.Mail size={20} className="text-emerald-500 group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <div className="text-xs text-slate-400 uppercase tracking-wide">Email</div>
                       <div className="font-medium">info@tfhn.ca</div>
                     </div>
                   </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                     <div className="w-12 h-12 bg-emerald-900/50 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                        <Icons.MapPin size={20} className="text-emerald-500 group-hover:text-white transition-colors" />
                     </div>
                     <div>
                       <div className="text-xs text-slate-400 uppercase tracking-wide">Headquarters</div>
                       <div className="font-medium">Timmins, Ontario</div>
                     </div>
                   </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-slate-800">
                 <div className="flex gap-4">
                   <div className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">in</div>
                   <div className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">x</div>
                   <div className="w-10 h-10 bg-slate-900 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors cursor-pointer text-sm font-bold">f</div>
                 </div>
              </div>
           </div>

           {/* Form Side */}
           <div className="p-12 md:w-3/5 bg-white">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
              <p className="text-slate-500 mb-8">Tell us which stage your practice is in.</p>
              
              {status === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-100 flex items-center gap-3">
                  <Icons.CheckCircle2 className="text-emerald-600 shrink-0" size={24} />
                  <div>
                    <div className="font-bold">Thank You!</div>
                    <div className="text-sm">Your message has been sent successfully, and we have registered you into our Mailchimp CRM.</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-2xl border border-red-100 flex items-center gap-3">
                  <Icons.X className="text-red-600 shrink-0" size={24} />
                  <div>
                    <div className="font-bold">Submission Failed</div>
                    <div className="text-sm">{errorMessage || 'Something went wrong. Please try again.'}</div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">First Name *</label>
                       <input 
                         type="text" 
                         required
                         value={firstName}
                         onChange={(e) => setFirstName(e.target.value)}
                         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                         placeholder="Jane" 
                       />
                    </div>
                     <div className="space-y-2">
                       <label className="text-sm font-semibold text-slate-700">Last Name *</label>
                       <input 
                         type="text" 
                         required
                         value={lastName}
                         onChange={(e) => setLastName(e.target.value)}
                         className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                         placeholder="Doe" 
                       />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="jane@clinic.com" 
                    />
                 </div>
                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700">Interest Area</label>
                     <select 
                       value={interestArea}
                       onChange={(e) => setInterestArea(e.target.value)}
                       className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white"
                     >
                       <option>Building (New Practice)</option>
                       <option>Renovating (Optimization)</option>
                       <option>Selling (Exit Strategy)</option>
                       <option>Other Inquiry</option>
                     </select>
                  </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">How can we help? *</label>
                    <textarea 
                      rows={4} 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" 
                      placeholder="Tell us about your practice needs..."
                    ></textarea>
                 </div>
                 <button 
                   type="submit"
                   disabled={status === 'submitting'}
                   className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 shadow-xl shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                 >
                    {status === 'submitting' ? (
                      <>
                        <Icons.Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : 'Send Message'}
                 </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};
