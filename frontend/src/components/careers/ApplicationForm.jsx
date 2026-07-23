import React from 'react';
import { Send } from 'lucide-react';

const SUBMISSION_DELAY_MS = 1500;

const ApplicationForm = ({ formData, handleChange, handleSubmit, isSubmitting }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Send className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold">Apply Now</h2>
        </div>
        <p className="text-gray-400 mb-8">
          Submit your application below, and we&apos;ll get back to you as soon as possible.
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
  );
};

export default ApplicationForm;
