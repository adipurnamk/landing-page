/// <reference types="vite/client" />
/// <reference types="react" /> 

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_USER_ID: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}