import { translationsEN } from './en';

export const translationsES = {
  ...translationsEN,
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    skills: 'Habilidades',
    contact: 'Contacto',
    cv: 'CV',
  },
  hero: {
    ...translationsEN.hero,
    greeting: 'Hola, soy',
    subtitle: 'Estudiante de Ingeniería en ESAIP • Freelancer',
    role1: 'Desarrollador Web',
    role2: 'Diseñador UX/UI',
    cta1: 'Ver mis proyectos',
    cta2: 'Contáctame',
  },
  contact: {
    ...translationsEN.contact,
    title: 'Ponte en',
    titleHighlight: 'Contacto',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado!',
  },
  footer: {
    ...translationsEN.footer,
    rights: 'Todos los derechos reservados.',
  },
};
