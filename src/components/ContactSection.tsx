
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you soon!",
    });
    
    setEmail('');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-dark-blue to-dark-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Stay in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            Be the first to know when new TempCup designs drop and get exclusive early-bird offers.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto frost-glass p-6 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-dark-blue/60 border border-white/10 text-white focus:outline-none focus:border-cool-blue"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-gradient-to-r from-cool-blue to-warm-red hover:opacity-90 transition-opacity">
                Join Waitlist
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>

          <div className="mt-16 frost-glass p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Got Questions?</h3>
            <p className="text-gray-300 mb-6">
              We'd love to hear from you! Reach out to us at{" "}
              <a href="mailto:hello@tempcup.com" className="text-cool-blue hover:underline">
                hello@tempcup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
