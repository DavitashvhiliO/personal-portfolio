import { seedTranslations } from "./src/app/seedFirestore";
seedTranslations().then(() => process.exit(0)).catch(console.error);
