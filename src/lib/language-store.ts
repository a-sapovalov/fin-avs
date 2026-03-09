import { create } from 'zustand';

export type Language = 'en' | 'et' | 'ru';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (lang: Language) => set({ language: lang }),
}));
