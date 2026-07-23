import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, Zap, Heart } from 'lucide-react';
import { toast } from 'sonner';
import CareerValues from '../components/careers/CareerValues';
import AboutSection from '../components/careers/AboutSection';
import ApplicationForm from '../components/careers/ApplicationForm';

const SUBMISSION_DELAY_MS = 1500;

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    portfolio: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Map portfolio to phone for backend compatibility
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.portfolio || '',
        position: formData.position,
        experience: 'Mid-level',
        message: formData.message
      };

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/careers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const data = await response.json();

      if (response.ok) {
        setTimeout(() => {
          toast.success('Application submitted successfully!', {
            description: 'We\'ll review your application and get back to you soon.'
          });
          setFormData({ name: '', email: '', position: '', portfolio: '', message: '' });
          setIsSubmitting(false);
        }, SUBMISSION_DELAY_MS);
      } else {
        setTimeout(() => {
          toast.error('Failed to submit application', {
            description: data.detail || 'Please try again later.'
          });
          setIsSubmitting(false);
        }, SUBMISSION_DELAY_MS);
      }
    } catch (error) {
      setTimeout(() => {
        toast.error('Failed to submit application', {
          description: 'Please check your connection and try again.'
        });
        setIsSubmitting(false);
      }, SUBMISSION_DELAY_MS);
    }
  };

  const values = [
    {
      id: 1,
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement'
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Culture',
      description: 'Work with talented artists and developers who value teamwork'
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: 'Cutting-Edge Projects',
      description: 'Innovative work across film, TV, and digital platforms'
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and a supportive work environment'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Be part of a creative studio that&apos;s redefining visual effects and digital innovation in Vancouver.
            </p>
          </div>

          <CareerValues values={values} />
          <AboutSection />
          <ApplicationForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ripple VFX Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Careers;
