
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // UNIQUE App ID for the client
  appId: 'com.razorsedge.ltd', 
  
  // Name displayed under the icon
  appName: "Razor's Edge Ltd", 
  
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  }
};

export default config;
