import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent animate-pulse">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="border-white/20 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
          
          <Link to="/">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Decorative Element */}
        <div className="mt-16 text-gray-600 text-sm">
          <p>Looking for something specific?</p>
          <div className="flex gap-4 justify-center mt-4 flex-wrap">
            <Link to="/#about" className="hover:text-white transition-colors">About</Link>
            <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
