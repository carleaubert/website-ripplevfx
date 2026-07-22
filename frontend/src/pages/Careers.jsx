import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Briefcase, Users, Zap, Heart } from 'lucide-react';
import { toast } from 'sonner';

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
        toast.success(data.message || 'Application submitted successfully! We\'ll be in touch soon.');
        setFormData({
          name: '',
          email: '',
          position: '',
          portfolio: '',
          message: ''
        });
      } else {
        throw new Error(data.detail || 'Failed to submit application');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to submit application. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = [
    {
      id: 'collaboration',
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Work with talented artists and technologists in a supportive environment'
    },
    {
      id: 'innovation',
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Push boundaries with cutting-edge VFX technology and AI-powered workflows'
    },
    {
      id: 'passion',
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Join a team that loves what they do and takes pride in every project'
    },
    {
      id: 'growth',
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Growth',
      description: 'Develop your skills and grow your career with challenging, diverse projects'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
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
              Be part of a creative studio that's redefining visual effects and digital innovation in Vancouver.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value) => (
              <div 
                key={value.id}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-white mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ripple VFX Studios</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded by Carle and Aymeric, two French artists with over a decade of experience at leading VFX studios including MPC, Ripple VFX Studios is a Vancouver-based visual effects and digital production company.
                </p>
                <p>
                  We specialize in <strong className="text-white">Nuke compositing, digital matte painting, motion graphics, and AI-powered creative solutions</strong> for film, television, advertising, and digital media.
                </p>
                <p>
                  Beyond visual effects, our <strong className="text-white">Ripple Digital</strong> division creates custom websites, mobile applications, AI solutions, and SaaS platforms for businesses looking to innovate.
                </p>
                <p className="text-white font-semibold mt-6">
                  We're always looking for talented artists, developers, and creative technologists who share our passion for excellence and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl md:text-4xl font-bold">Apply Now</h2>
              </div>
              <p className="text-gray-400 mb-8">
                Submit your application below, and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder:text-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Position */}
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Position Interested In <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder:text-gray-400"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Select a position...</option>
                    <optgroup label="VFX Positions" style={{ backgroundColor: '#111827', color: '#fff' }}>
                      <option value="Senior Compositor" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Senior Compositor</option>
                      <option value="VFX Compositor" style={{ backgroundColor: '#1f2937', color: '#fff' }}>VFX Compositor</option>
                      <option value="Junior Compositor" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Junior Compositor</option>
                      <option value="Matte Painter" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Matte Painter</option>
                      <option value="Motion Graphics Artist" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Motion Graphics Artist</option>
                      <option value="Roto/Paint Artist" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Roto/Paint Artist</option>
                      <option value="VFX Supervisor" style={{ backgroundColor: '#1f2937', color: '#fff' }}>VFX Supervisor</option>
                      <option value="Colorist" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Colorist</option>
                    </optgroup>
                    <optgroup label="Digital/Tech Positions" style={{ backgroundColor: '#111827', color: '#fff' }}>
                      <option value="Full-Stack Developer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Full-Stack Developer</option>
                      <option value="Frontend Developer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Frontend Developer</option>
                      <option value="Backend Developer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Backend Developer</option>
                      <option value="Mobile Developer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Mobile Developer</option>
                      <option value="AI/ML Engineer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>AI/ML Engineer</option>
                      <option value="UI/UX Designer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>UI/UX Designer</option>
                      <option value="DevOps Engineer" style={{ backgroundColor: '#1f2937', color: '#fff' }}>DevOps Engineer</option>
                    </optgroup>
                    <optgroup label="Other" style={{ backgroundColor: '#111827', color: '#fff' }}>
                      <option value="Intern" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Intern</option>
                      <option value="Freelance" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Freelance</option>
                      <option value="Other" style={{ backgroundColor: '#1f2937', color: '#fff' }}>Other</option>
                    </optgroup>
                  </select>
                </div>

                {/* Portfolio/LinkedIn */}
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                    Portfolio / LinkedIn / Website <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder:text-gray-400"
                    placeholder="https://..."
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    Please provide a link to your portfolio, LinkedIn profile, or personal website
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Cover Letter / Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about yourself, your experience, and why you'd like to join Ripple VFX Studios..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-center">
                  You can also email your application directly to{' '}
                  <a href="mailto:career@ripplevfxstudios.com" className="text-blue-400 hover:underline">
                    career@ripplevfxstudios.com
                  </a>
                </p>
              </div>
            </div>
          </div>
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
