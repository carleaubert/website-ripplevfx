import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { contactInfo } from '../mockData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Email</h3>
                  <p className="text-gray-400 text-sm">{contactInfo.email}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Phone</h3>
                  <p className="text-gray-400 text-sm">{contactInfo.phone}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 transition-all">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Location</h3>
                  <p className="text-gray-400 text-sm">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.city}, {contactInfo.address.province} {contactInfo.address.postal}<br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gray-900/50 border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-black/50 border-gray-700 focus:border-white transition-colors text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="bg-black/50 border-gray-700 focus:border-white transition-colors text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-black/50 border-gray-700 focus:border-white transition-colors text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="bg-black/50 border-gray-700 focus:border-white transition-colors resize-none text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
