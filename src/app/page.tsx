"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
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
            { name: "Trabajo", id: "work" },
            { name: "Servicios", id: "services" },
            { name: "Nosotros", id: "about" },
            { name: "Contacto", id: "contact" },
          ]}
          button={{ text: "Empezar Proyecto", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Impulsa tu Marca con Experiencias Digitales Únicas"
          description="En Andes Brand, creamos estrategias digitales innovadoras y diseños web cautivadores que transforman visitantes en clientes leales. Dale a tu negocio la presencia online que merece."
          tag="Andes Brand: Tu Socio Digital"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Descubre Nuestros Servicios", href: "#services" },
            { text: "Ver Portafolio", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/man-works-with-sound-laptop-early-morning_169016-26471.jpg", imageAlt: "Diseño UI/UX para aplicación web moderna" },
            { imageSrc: "http://img.b2bpic.net/free-photo/covid-19-global-economic-crisis_23-2148746588.jpg", imageAlt: "Tablero de análisis de marketing digital" },
            { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-it-s-will-skill-inspirational-quote-notepad-with-color-palette_23-2149144249.jpg", imageAlt: "Elementos creativos de branding en un moodboard" },
            { imageSrc: "http://img.b2bpic.net/free-photo/web-design-template-copy-space-concept_53876-120756.jpg", imageAlt: "Maquetas de diseño web responsivo en múltiples dispositivos" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cheerful-diverse-people-showing-graph-tablet_53876-71498.jpg", imageAlt: "Gráfico de análisis de SEO con tendencia ascendente" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-minimalist-online-e-shopping-concept_53876-167155.jpg", imageAlt: "Sitio web de e-commerce moderno y limpio" },
            { imageSrc: "http://img.b2bpic.net/free-photo/mobile-customer-feedback_23-2151952977.jpg", imageAlt: "Interfaz de usuario de aplicación móvil elegante" },
            { imageSrc: "http://img.b2bpic.net/free-photo/young-blogger-recording-make-up-video_23-2148538750.jpg", imageAlt: "Contenido de marketing para redes sociales" },
            { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-measuring-tools-still-life_23-2150440938.jpg", imageAlt: "Guía de branding con logotipo e identidad de marca" }
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Nuestros Servicios Clave"
          description="Ofrecemos soluciones digitales integrales para elevar tu marca y alcanzar tus objetivos."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Ver Todos los Servicios", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "SEO & Marketing Digital",              description: "Optimizamos tu sitio web para los motores de búsqueda, aumentando la visibilidad y atrayendo tráfico de calidad.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Palabras Clave", "Backlinks", "Contenido", "Posicionamiento", "Tráfico Orgánico", "Análisis SEO", "Auditoría"],
            },
            {
              title: "Desarrollo Web Personalizado",              description: "Creamos sitios web modernos, rápidos y adaptables, diseñados para una experiencia de usuario excepcional y conversiones.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/woman-using-computer_53876-47103.jpg", imageAlt: "Sitio web profesional en un monitor de escritorio" },
                { imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-designers_23-2149443518.jpg", imageAlt: "Tablet mostrando un sitio web con diseño moderno" },
                { imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-device_23-2149246286.jpg", imageAlt: "Teléfono móvil con un sitio web de diseño responsivo" },
              ],
            },
            {
              title: "Diseño de Branding e Identidad",              description: "Creamos una identidad de marca distintiva y memorable que resuena con tu audiencia y te diferencia de la competencia.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/designer-work-office_158595-1152.jpg", imageAlt: "Guía de estilo de marca y moodboard" },
                { imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-day_52683-160824.jpg", imageAlt: "Concepto de diseño de logotipo" },
                { imageSrc: "http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641450.jpg", imageAlt: "Diseño de empaque con elementos de marca" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Nuestro Portafolio Destacado"
          description="Una muestra de proyectos que hemos creado para clientes de diversas industrias, con resultados impactantes."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Ver Todo el Portafolio", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Tienda Online de Moda 'Elegance'",              description: "Diseño y desarrollo e-commerce con experiencia de compra premium.",              imageSrc: "http://img.b2bpic.net/free-photo/two-business-woman-with-computer_1303-13880.jpg",              imageAlt: "Sitio web de e-commerce de moda",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Plataforma Educativa 'Academia Digital'",              description: "Portal intuitivo para cursos online y gestión de estudiantes.",              imageSrc: "http://img.b2bpic.net/free-photo/globe-camera-books-near-laptop_23-2147772309.jpg",              imageAlt: "UI de plataforma de e-learning",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Web Corporativa 'Sabor Andino'",              description: "Presencia digital elegante para un restaurante de alta cocina.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-food-photos-close-up_23-2149294503.jpg",              imageAlt: "Sitio web de restaurante gourmet",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "App Financiera 'Finanza Fácil'",              description: "Aplicación móvil para gestión de finanzas personales, UI moderna.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-handsome-smiling-man-showing-credit-card-smartphone-screen-finance-banking-app-interface-paying-online-shopping-with-application-white-background_176420-45871.jpg",              imageAlt: "UI de aplicación financiera",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Web de Turismo 'Aventura Extrema'",              description: "Sitio web dinámico para agencia de viajes de aventura.",              imageSrc: "http://img.b2bpic.net/free-photo/shallow-focus-shot-caucasian-male-wearing-cool-patterned-motorcycle-helmet-outdoors_181624-58920.jpg",              imageAlt: "Sitio web de turismo de aventura",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <FeatureBento
          title="Nuestro Compromiso, Tus Resultados"
          description="En Andes Brand, no solo creamos; garantizamos soluciones que impulsan tu crecimiento digital."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Optimización Multi-Dispositivo",              description: "Diseños perfectos que se adaptan y lucen impecables en cualquier pantalla, desde móviles hasta desktops.",              bentoComponent: "phone",              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Revisión responsiva",              alertMessage: "Todos los puntos de interrupción pasados",              apps: [
                { name: "Teléfono", icon: Phone },
                { name: "SMS", icon: MessageCircle },
                { name: "Libros", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Cámara", icon: Camera },
                { name: "Música", icon: Music },
                { name: "Configuración", icon: Settings },
                { name: "Chat", icon: MessageCircle },
              ],
            },
            {
              title: "Seguridad y Rendimiento Garantizado",              description: "Alojamiento web seguro con monitoreo constante y un 99.9% de tiempo de actividad para tu tranquilidad.",              bentoComponent: "reveal-icon",              icon: Shield,
            },
            {
              title: "Entrega Ágil y Eficiente",              description: "Convertimos tu visión en realidad en tiempo récord, con un proceso optimizado sin comprometer la calidad.",              bentoComponent: "timeline",              heading: "Lanzamiento del Proyecto",              subheading: "Semana 1",              items: [
                { label: "Análisis y Estrategia", detail: "Días 1-3" },
                { label: "Diseño y Desarrollo", detail: "Días 4-10" },
                { label: "Lanzamiento y Optimización", detail: "Días 11-14" },
              ],
              completedLabel: "Sitio Activo"},
            {
              title: "Integraciones Flexibles",              description: "Conectamos tu plataforma con tus herramientas favoritas: CRM, pagos, analíticas y más, para un flujo de trabajo sin interrupciones.",              bentoComponent: "orbiting-icons",              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Estrategias de Crecimiento Sostenible",              description: "Impulsamos tu presencia digital con análisis de datos y tácticas de marketing que generan un crecimiento constante y medible.",              bentoComponent: "line-chart"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="Andes Brand superó nuestras expectativas. No solo diseñaron un sitio web hermoso y funcional, sino que sus estrategias de marketing digital catapultaron nuestro negocio a nuevas alturas. ¡Absolutamente recomendados!"
          rating={5}
          author="— Sofía González, Directora de Marketing en 'Elegance'"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/happy-business-woman-standing-with-coffee-cup_23-2148095745.jpg", alt: "Avatar de Sofía González" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Nuestros Números Hablan por Sí Mismos"
          description="Resultados tangibles que demuestran nuestro impacto en el éxito de nuestros clientes."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "200+", title: "Proyectos Exitosos", description: "Entregados a clientes satisfechos en diversas industrias", icon: Award },
            { id: "satisfaction", value: "98%", title: "Satisfacción del Cliente", description: "Nuestro compromiso con la excelencia se refleja en cada proyecto", icon: Users },
            { id: "years", value: "10+", title: "Años de Experiencia", description: "Forjando el futuro digital de marcas líderes con pasión", icon: TrendingUp },
          ]}
        />
        <FeatureCardSixteen
          title="¿Por Qué Elegir Andes Brand?"
          description="Descubre la diferencia de trabajar con una agencia digital que realmente entiende tus objetivos y visión."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Diseños genéricos y poco originales sin impacto",              "Sitios web lentos y no optimizados para la conversión",              "Ausencia de estrategia SEO y visibilidad online",              "Soporte post-lanzamiento limitado o nulo",              "Resultados inconsistentes y poco medibles"],
          }}
          positiveCard={{
            items: [
              "Diseños personalizados que reflejan tu esencia de marca",              "Rendimiento optimizado para máxima velocidad en todos los dispositivos",              "Estrategias SEO avanzadas para dominar tu nicho de mercado",              "Soporte integral y mantenimiento continuo garantizado",              "Resultados claros y un Retorno de Inversión (ROI) medible"],
          }}
        />
        <TeamCardFive
          title="Conoce al Equipo de Andes Brand"
          description="Detrás de cada proyecto exitoso hay un equipo de profesionales apasionados y expertos en lo que hacen."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Ana Morales", role: "CEO & Estratega Digital", imageSrc: "http://img.b2bpic.net/free-photo/pensive-employee-with-blue-suit_1139-247.jpg", imageAlt: "Ana Morales, CEO de Andes Brand" },
            { id: "2", name: "Ricardo Vargas", role: "Director Creativo", imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379241.jpg", imageAlt: "Ricardo Vargas, Director Creativo" },
            { id: "3", name: "Elena Soto", role: "Líder de Desarrollo Web", imageSrc: "http://img.b2bpic.net/free-photo/portrait-successful-young-entrepreneur-standing-looking-camera-crossing-arms-smiling_482257-5018.jpg", imageAlt: "Elena Soto, Líder de Desarrollo Web" },
          ]}
        />
        <FaqBase
          title="Preguntas Frecuentes"
          description="Aquí respondemos a las dudas más comunes sobre cómo trabajamos y qué puedes esperar de Andes Brand."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "¿Cuánto tiempo toma un proyecto web típico?", content: "El plazo varía según la complejidad, pero la mayoría de los proyectos se completan entre 4 y 8 semanas. Te proporcionaremos un cronograma detallado al inicio de cada proyecto." },
            { id: "2", title: "¿Cuál es su estructura de precios y qué incluye?", content: "Ofrecemos presupuestos personalizados basados en el alcance de tu proyecto. Cada propuesta incluye diseño, desarrollo, optimización SEO inicial y soporte post-lanzamiento." },
            { id: "3", title: "¿Ofrecen mantenimiento y soporte continuo después del lanzamiento?", content: "Sí, disponemos de planes de mantenimiento para asegurar que tu sitio esté siempre actualizado, seguro y funcionando a la perfección, liberándote de preocupaciones." },
            { id: "4", title: "¿Pueden rediseñar mi sitio web actual para mejorarlo?", content: "¡Absolutamente! Nos especializamos en rediseños que modernizan tu marca, mejoran significativamente la experiencia de usuario y optimizan tu posicionamiento SEO." },
            { id: "5", title: "¿Qué tecnologías utilizan para el desarrollo de sitios web?", content: "Trabajamos con las tecnologías más modernas y robustas como Next.js, React, Tailwind CSS y Node.js, garantizando sitios web escalables, seguros y de alto rendimiento." },
          ]}
        />
        <ContactCTA
          tag="Contáctanos Hoy"
          title="¿Listo para Elevar tu Presencia Digital?"
          description="Hablemos sobre tu próximo gran proyecto. Estamos listos para construir algo extraordinario juntos y llevar tu marca al siguiente nivel."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Inicia Tu Proyecto Ahora", href: "#contact" },
            { text: "Explora Nuestro Portafolio", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Andes Brand"
          copyrightText="© 2024 | Andes Brand. Todos los derechos reservados."
          columns={[
            {
              title: "Compañía",              items: [
                { label: "Nosotros", href: "#about" },
                { label: "Servicios", href: "#services" },
                { label: "Portafolio", href: "#work" },
                { label: "Contacto", href: "#contact" },
              ],
            },
            {
              title: "Servicios",              items: [
                { label: "Diseño Web", href: "#" },
                { label: "SEO & Marketing", href: "#" },
                { label: "Branding", href: "#" },
                { label: "UI/UX Diseño", href: "#" },
              ],
            },
            {
              title: "Conecta",              items: [
                { label: "X (Twitter)", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Behance", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
