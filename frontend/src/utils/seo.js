import { useEffect } from 'react';

export const useSEO = (section) => {
  useEffect(() => {
    const seoData = {
      home: {
        title: 'Ripple VFX Studios | VFX Studio Vancouver | Visual Effects Canada',
        description: 'Premium visual effects, Nuke compositing, digital matte painting, and AI creative services. Leading VFX studio in Vancouver, Canada.'
      },
      about: {
        title: 'About Us | Ripple VFX Studios',
        description: 'Founded by Carle and Aymeric, two French artists with over a decade of experience at leading VFX studios including MPC.'
      },
      services: {
        title: 'VFX Services | Nuke Compositing | Motion Graphics',
        description: 'Expert VFX services including Nuke compositing, digital matte painting, motion graphics, and AI-powered creative solutions.'
      },
      projects: {
        title: 'VFX Portfolio | Visual Effects Projects',
        description: 'Explore our portfolio of premium visual effects work for feature films, episodic productions, and commercials.'
      },
      team: {
        title: 'Our Team | VFX Artists Vancouver',
        description: 'Meet our talented team of VFX artists, compositors, and creative technologists based in Vancouver, Canada.'
      },
      contact: {
        title: 'Contact Us | Ripple VFX Studios Vancouver',
        description: 'Get in touch with Ripple VFX Studios for your next visual effects project. Based in Vancouver, serving clients worldwide.'
      }
    };

    if (seoData[section]) {
      document.title = seoData[section].title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', seoData[section].description);
      }
    }
  }, [section]);
};

export default useSEO;
