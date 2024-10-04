import { useState, useEffect } from 'react';

const useGoogleMaps = (apiKey: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
    };
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [apiKey]);

  return isLoaded;
};

export default useGoogleMaps;
