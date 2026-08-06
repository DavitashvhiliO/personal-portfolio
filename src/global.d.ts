// Global type declarations
interface Window {
  dataLayer: any[];
}

declare module 'figma:asset/*' {
  const value: string;
  export default value;
}
