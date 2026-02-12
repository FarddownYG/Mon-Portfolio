import { translationsEN } from './en';

export const translationsDE = {
  ...translationsEN,
  nav: {
    home: 'Startseite',
    about: 'Über mich',
    projects: 'Projekte',
    skills: 'Fähigkeiten',
    contact: 'Kontakt',
    cv: 'Lebenslauf',
  },
  hero: {
    ...translationsEN.hero,
    greeting: 'Hallo, ich bin',
    subtitle: 'Ingenieurstudent an der ESAIP • Freelancer',
    role1: 'Webentwickler',
    role2: 'UX/UI Designer',
    cta1: 'Meine Projekte ansehen',
    cta2: 'Kontaktiere mich',
  },
};
