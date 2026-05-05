"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Scissors, Palette, Sparkles, Star, Coffee, Scissors as ScissorIcon, Sparkles as SparkleIcon } from "lucide-react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "About", id: "#about" },
              { name: "Services", id: "#services" },
              { name: "Team", id: "#team" },
              { name: "Pricing", id: "#pricing" },
              { name: "Contact", id: "#contact" }
            ]}
            brandName="Java Java Brews"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardCarousel
            title="Style Meets Coffee"
            description="Where expert hair artistry meets the perfect brew. Discover your new signature look in our cozy, nature-inspired space."
            background={{ variant: "sparkles-gradient" }}
            mediaItems={[
              { imageSrc: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000", imageAlt: "Modern salon interior" },
              { imageSrc: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000", imageAlt: "Artisan coffee brew" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
              { type: 'text', content: "Crafting " },
              { type: 'image', src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=200", alt: "Salon" },
              { type: 'text', content: " & Coffee" }
            ]}
            useInvertedBackground={true}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardTwentySeven
            animationType="slide-up"
            textboxLayout="split"
            title="Our Services"
            description="We blend the finest hair care with premium coffee experiences."
            features={[
              { id: "1", title: "Artisan Coffee Bar", descriptions: ["Premium roast selection", "Expertly crafted beverages"], imageSrc: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800" },
              { id: "2", title: "Precision Haircuts", descriptions: ["Modern techniques", "Tailored for your lifestyle"], imageSrc: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800" }
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardTen
            title="Meet The Artists"
            membersAnimation="slide-up"
            memberVariant="card"
            members={[
              { id: "t1", name: "Alex P. - Head Stylist", imageSrc: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=800" },
              { id: "t2", name: "Jordan S. - Lead Barista", imageSrc: "https://images.unsplash.com/photo-1610337673044-7104e1cce54d?q=80&w=800" }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSix
            animationType="slide-up"
            textboxLayout="default"
            title="What Our Clients Say"
            description="Join the community that loves our unique blend of services."
            testimonials={[
              { id: "1", name: "Elena M.", handle: "@elena_m", testimonial: "Best haircut and latte in the city!", icon: Coffee },
              { id: "2", name: "Marcus K.", handle: "@m_k_style", testimonial: "The atmosphere here is unmatched.", icon: ScissorIcon }
            ]}
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardOne
            animationType="slide-up"
            textboxLayout="split"
            title="Packages"
            description="Experience our best offerings."
            plans={[
              { id: "pr1", badge: "Essential", price: "$75", subtitle: "Cut & Brew", features: ["Expert Cut", "Premium Coffee", "Consultation"] }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            faqsAnimation="slide-up"
            textboxLayout="split"
            title="FAQs"
            description="Everything you need to know about us."
            faqs={[
              { id: "f1", title: "Do you take walk-ins?", content: "Yes, for coffee! For salon services, booking is recommended." }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Visit Us"
            title="Ready for a Visit?"
            description="Join us at Java Java Brews for your next style and coffee session."
            buttons={[{ text: "Book Appointment" }]}
            background={{ variant: "sparkles-gradient" }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoText="Java Java Brews"
            leftLink={{ text: "Privacy Policy" }}
            rightLink={{ text: "Terms of Service" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}