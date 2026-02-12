import { translationsEN } from './en';

export const translationsIT = {
  ...translationsEN,
  nav: {
    home: 'Home',
    about: 'Chi sono',
    projects: 'Progetti',
    skills: 'Competenze',
    contact: 'Contatto',
    cv: 'CV',
  },
  hero: {
    ...translationsEN.hero,
    greeting: 'Ciao, sono',
    subtitle: 'Studente di Ingegneria presso ESAIP • Freelancer',
    role1: 'Sviluppatore Web',
    role2: 'Designer UX/UI',
    cta1: 'Vedi i miei progetti',
    cta2: 'Contattami',
  },
};
