"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Tv, Camera, Film, Users, Zap, Briefcase } from "lucide-react"; // Import necessary icons

export default function AndesBrandPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Andes Brand"
          navItems={[
            { name: "Inicio", id: "hero-andes" },
            { name: "Servicios", id: "services-andes" },
            { name: "Contacto", id: "contact-andes" }
          ]}
          button={{ text: "WhatsApp", href: "https://wa.me/56927078086" }}
        />
        <div id="hero-andes" data-section="hero-andes">
          <HeroBillboard
            title="Andes Brand"
            description="Creamos experiencias audiovisuales impactantes para negocios y clientes privados, impulsando sus ventas y atrayendo nuevos clientes."
            buttons={[
              { text: "Contáctanos por WhatsApp", href: "https://wa.me/56927078086" },
              { text: "Descubre Nuestros Servicios", href: "#services-andes", props: { className: "font-bold text-lg px-8 py-4 bg-primary-cta text-primary-cta-text hover:bg-primary-cta/90 transition-colors duration-200" } }
            ]}
            buttonAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/film-reel-clapper-board-projector-stand_23-2150338782.jpg"
            imageAlt="Andes Brand Audiovisual"
            background={{ variant: 'radial-gradient' }}
          />
        </div>
        <div id="services-andes" data-section="services-andes">
          <FeatureCardTwentyFive
            title="Nuestros Servicios Audiovisuales"
            description="Diseñamos y producimos contenido que eleva tu marca, conecta con tu audiencia y genera resultados tangibles."
            textboxLayout="default"
            animationType="slide-up"
            useInvertedBackground={false}
            features={[
              {
                title: "Contenido Audiovisual para Empresas",                description: "Producimos videos corporativos, publicitarios, animados y documentales que comunican tu mensaje de manera efectiva, fortalecen tu marca, y atraen nuevos clientes. Ideal para marketing, presentaciones internas y lanzamientos de productos.",                icon: Briefcase,
                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/corporate-business-video-meeting_1232-234.jpg", imageAlt: "Corporate video production" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/corporate-business-video-meeting_1232-234.jpg", imageAlt: "Corporate video production" }
                ]
              },
              {
                title: "Producción Audiovisual para Clientes Privados",                description: "Capturamos tus momentos más especiales con videoclips personalizados, cobertura de eventos (bodas, cumpleaños), y proyectos personales. Historias contadas con creatividad y profesionalismo, diseñadas para emocionar y perdurar.",                icon: Camera,
                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/cinematographer-shooting-wedding-video_23-2148416668.jpg", imageAlt: "Private event videography" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/cinematographer-shooting-wedding-video_23-2148416668.jpg", imageAlt: "Private event videography" }
                ]
              }
            ]}
          />
        </div>
        <div id="contact-andes" data-section="contact-andes">
          <FooterLogoEmphasis
            logoText="Andes Brand"
            columns={[
              {
                items: [
                  { label: "Inicio", href: "#hero-andes" },
                  { label: "Servicios", href: "#services-andes" },
                  { label: "Contacto", href: "#contact-andes" }
                ]
              },
              {
                items: [
                  { label: "WhatsApp", href: "https://wa.me/56927078086" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
