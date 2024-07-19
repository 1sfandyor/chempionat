// Handle PNG files
declare module '*.png' {
  const value: string;
  export default value;
}

// Handle JPG files
declare module '*.jpg' {
  const value: string;
  export default value;
}

// Handle SVG files
declare module '*.svg' {
  import React from 'react';
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>> | string;
  export default content;
}
