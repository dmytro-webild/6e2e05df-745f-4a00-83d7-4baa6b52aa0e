"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroLogo from "@/components/sections/hero/HeroLogo";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Sparkles, Tv, Camera, FilmIcon, Users, Zap, Briefcase } from "lucide-react"; // Import necessary icons

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
      primaryButtonStyle="metallic"
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
          <HeroLogo
            logoText="Andes Brand"
            description="Creamos experiencias audiovisuales impactantes para negocios y clientes privados, impulsando sus ventas y atrayendo nuevos clientes."
            buttons={[
              { text: "Contáctanos por WhatsApp", href: "https://wa.me/56927078086" },
              { text: "Descubre Nuestros Servicios", href: "#services-andes" }
            ]}
            tag="Tu Visión, Nuestra Lente"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            buttonAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/film-reel-clapper-board-projector-stand_23-2150338782.jpg"
            imageAlt="Andes Brand Audiovisual"
          />
        </div>
        <div id="services-andes" data-section="services-andes">
          <FeatureCardTen
            title="Nuestros Servicios Audiovisuales"
            description="Diseñamos y producimos contenido que eleva tu marca, conecta con tu audiencia y genera resultados tangibles."
            textboxLayout="default"
            animationType="slide-up"
            useInvertedBackground={false}
            features={[
              {
                title: "Contenido Audiovisual para Empresas",                description: "Producimos videos corporativos, publicitarios, animados y documentales que comunican tu mensaje de manera efectiva, fortalecen tu marca, y atraen nuevos clientes. Ideal para marketing, presentaciones internas y lanzamientos de productos.",                media: { imageSrc: "http://img.b2bpic.net/free-photo/corporate-business-video-meeting_1232-234.jpg", imageAlt: "Corporate video production" },
                items: [
                  { icon: Briefcase, text: "Impulso de ventas" },
                  { icon: Users, text: "Captación de clientes" },
                  { icon: FilmIcon, text: "Comunicación de marca" }
                ],
                reverse: false
              },
              {
                title: "Producción Audiovisual para Clientes Privados",                description: "Capturamos tus momentos más especiales con videoclips personalizados, cobertura de eventos (bodas, cumpleaños), y proyectos personales. Historias contadas con creatividad y profesionalismo, diseñadas para emocionar y perdurar.",                media: { imageSrc: "http://img.b2bpic.net/free-photo/cinematographer-shooting-wedding-video_23-2148416668.jpg", imageAlt: "Private event videography" },
                items: [
                  { icon: Camera, text: "Videoclips personalizados" },
                  { icon: Tv, text: "Cobertura de eventos" },
                  { icon: Zap, text: "Proyectos personales creativos" }
                ],
                reverse: true
              }
            ]}
          />
        </div>
        <div id="contact-andes" data-section="contact-andes">
          <FooterBase
            logoText="Andes Brand"
            copyrightText="© 2024 | Andes Brand. Todos los derechos reservados."
            columns={[
              {
                title: "Compañía",                items: [
                  { label: "Inicio", href: "#hero-andes" },
                  { label: "Servicios", href: "#services-andes" },
                  { label: "Contacto", href: "#contact-andes" }
                ]
              },
              {
                title: "Conecta",                items: [
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
