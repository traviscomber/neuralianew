import { Metadata } from 'next';
import FAQPageClient from './page';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | N3uralia',
  description:
    'Preguntas frecuentes sobre N3uralia, Living Agents, implementación, seguridad, y precios. Todo lo que necesitas saber sobre nuestra plataforma de IA para empresas chilenas.',
  keywords: [
    'preguntas frecuentes',
    'FAQ',
    'N3uralia',
    'Living Agents',
    'agentes IA',
    'automatización procesos',
  ],
  openGraph: {
    title: 'Preguntas Frecuentes | N3uralia',
    description: 'Resuelve todas tus dudas sobre N3uralia y cómo automatizar tu negocio',
    type: 'website',
    url: 'https://n3uralia.com/faq',
  },
};

export default FAQPageClient;
