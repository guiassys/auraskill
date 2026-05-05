import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to AuraSkill",
          subtitle: "Your complete platform for managing skills and abilities",
          competencies: "Competencies",
          certifications: "Certifications",
          projects: "Projects",
          achievements: "Achievements",
          recentActivity: "Recent Activity",
          newCompetency: "New competency added",
          competencyDetails: "React.js - 2 days ago",
          certificationCompleted: "Certification completed",
          certificationDetails: "AWS Solutions Architect - 1 week ago",
          projectUpdated: "Project updated",
          projectDetails: "Talent Management System - 2 weeks ago"
        }
      },
      pt: {
        translation: {
          welcome: "Bem-vindo ao AuraSkill",
          subtitle: "Sua plataforma completa para gestão de competências e habilidades",
          competencies: "Competências",
          certifications: "Certificações",
          projects: "Projetos",
          achievements: "Conquistas",
          recentActivity: "Atividade Recente",
          newCompetency: "Nova competência adicionada",
          competencyDetails: "React.js - Há 2 dias",
          certificationCompleted: "Certificação completada",
          certificationDetails: "AWS Solutions Architect - Há 1 semana",
          projectUpdated: "Projeto atualizado",
          projectDetails: "Sistema de Gestão de Talentos - Há 2 semanas"
        }
      }
    }
  });

export default i18n;
