// Analytics utility functions for PostHog event tracking

export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.posthog) {
    window.posthog.capture(eventName, properties);
  }
};

// Form submission tracking
export const trackFormSubmission = (formType, success = true) => {
  trackEvent('form_submission', {
    form_type: formType,
    success: success,
    timestamp: new Date().toISOString()
  });
};

// Video interaction tracking
export const trackVideoPlay = (videoType) => {
  trackEvent('video_play', {
    video_type: videoType,
    timestamp: new Date().toISOString()
  });
};

// Department switch tracking
export const trackDepartmentSwitch = (fromDept, toDept) => {
  trackEvent('department_switch', {
    from: fromDept,
    to: toDept,
    timestamp: new Date().toISOString()
  });
};

// Navigation tracking
export const trackNavigation = (destination, source = 'unknown') => {
  trackEvent('navigation', {
    destination,
    source,
    timestamp: new Date().toISOString()
  });
};

// Page view tracking (automatic with PostHog but can be customized)
export const trackPageView = (pageName, properties = {}) => {
  trackEvent('page_view', {
    page: pageName,
    ...properties,
    timestamp: new Date().toISOString()
  });
};

export default {
  trackEvent,
  trackFormSubmission,
  trackVideoPlay,
  trackDepartmentSwitch,
  trackNavigation,
  trackPageView
};
