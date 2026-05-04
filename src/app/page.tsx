"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Scissors, Palette, Sparkles, Star } from "lucide-react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

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
          <NavbarStyleApple
            navItems={[
              { name: "About", id: "#about" },
              { name: "Services", id: "#services" },
              { name: "Pricing", id: "#pricing" },
              { name: "Contact", id: "#contact" }
            ]}
            brandName="Ethereal Salon"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            title="Elevate Your Style"
            description="Experience premium hair artistry in a serene, nature-inspired setting. Our expert stylists are dedicated to crafting your perfect look."
            testimonials={[
              { name: "Sarah Miller", handle: "@sarahstyle", testimonial: "The best salon experience I've ever had. Truly professional.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/empty-wintertime-luxury-ski-resort_482257-102290.jpg?_wi=1", imageAlt: "luxury hair salon interior" },
              { name: "James Chen", handle: "@jchen", testimonial: "Exceptional coloring services, very personalized approach.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/high-angle-books-wooden-chair_23-2149678901.jpg?_wi=1", imageAlt: "luxury hair salon interior" },
              { name: "Elena Rodriguez", handle: "@elenar", testimonial: "So relaxing and my hair looks amazing!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/crop-hairdresser-washing-hair-blonde_23-2147769799.jpg?_wi=1", imageAlt: "luxury hair salon interior" },
              { name: "Marcus Thorne", handle: "@mthorne", testimonial: "Professional, efficient, and very talented stylists.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/blonde-young-woman-taking-colored-pencil-from-case-wooden-table_23-2147889944.jpg?_wi=1", imageAlt: "luxury hair salon interior" },
              { name: "Lisa Wang", handle: "@lisaw", testimonial: "A sanctuary for hair care. Simply wonderful.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-low-view-man-getting-haircut_23-2148224308.jpg?_wi=1", imageAlt: "luxury hair salon interior" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/empty-wintertime-luxury-ski-resort_482257-102290.jpg?_wi=2"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-smiling-blond-model-dressed-summer-hipster-clothes-trendy-girl-posing-street-background-funny-positive-woman_158538-5479.jpg", alt: "Portrait of beautiful smiling blond model" },
              { src: "http://img.b2bpic.net/free-photo/portrait-happy-smiling-middle-aged-woman_169016-26118.jpg", alt: "Portrait of a happy smiling middle aged woman" },
              { src: "http://img.b2bpic.net/free-photo/portrait-attractive-stylish-blond-smiling-woman-red-blouse-summer-fashion-outfit-wearing-earrings-smiling_285396-8465.jpg", alt: "Portrait of attractive stylish blond smiling woman" },
              { src: "http://img.b2bpic.net/free-photo/portrait-sensual-curly-woman-smiles-pleasantly-holds-chin-expresses-positive-emotions-keeps-smiling-shows-white-teeth-wears-pink-knitted-sweater-has-beauty-face-healthy-skin-curly-hair_273609-42620.jpg", alt: "Portrait of sensual curly woman smiles pleasantly" },
              { src: "http://img.b2bpic.net/free-photo/smiling-blonde-woman-applying-mascara-bathroom_329181-1570.jpg", alt: "Smiling blonde woman applying mascara" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={false}
            title="Our Passion"
            description="Founded on the principles of artistry and comfort, Ethereal Salon brings world-class hair techniques to our local community with a focus on sustainable beauty practices."
            bulletPoints={[
              { title: "Expert Stylists", description: "Years of industry experience." },
              { title: "Premium Products", description: "Cruelty-free and natural care." },
              { title: "Personalized Care", description: "Tailored to your hair needs." }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/high-angle-books-wooden-chair_23-2149678901.jpg?_wi=2"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardTwentySix
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { title: "Precision Cuts", description: "Customized styling for every hair texture.", imageSrc: "http://img.b2bpic.net/free-photo/crop-hairdresser-washing-hair-blonde_23-2147769799.jpg?_wi=2", buttonIcon: Scissors },
              { title: "Advanced Coloring", description: "Vibrant, healthy color transformations.", imageSrc: "http://img.b2bpic.net/free-photo/blonde-young-woman-taking-colored-pencil-from-case-wooden-table_23-2147889944.jpg?_wi=2", buttonIcon: Palette },
              { title: "Hair Spa", description: "Restorative treatments for scalp health.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-low-view-man-getting-haircut_23-2148224308.jpg?_wi=2", buttonIcon: Sparkles },
              { title: "Formal Styling", description: "Elegant looks for special occasions.", imageSrc: "http://img.b2bpic.net/free-photo/happy-charming-girl-dressed-black-shine-dress-smiling-living-room_291650-589.jpg", buttonIcon: Star }
            ]}
            title="Our Expertise"
            description="Discover a range of professional services designed to rejuvenate your hair and spirit."
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardEleven
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            groups={[
              {
                id: "creative",                groupTitle: "Artistic Team",                members: [
                  {
                    id: "m1",                    title: "Lead Stylist",                    subtitle: "Specialist in cuts",                    detail: "10 years experience",                    imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-blonde-female-dressed-white-t-shirt-waistcoat-grey-background_613910-9333.jpg"
                  },
                  {
                    id: "m2",                    title: "Colorist Expert",                    subtitle: "Specialist in balayage",                    detail: "8 years experience",                    imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-female-barber-wearing-uniform-glasses-headband-holding-comb-hair-trimmer-air-looking-down-pretend-doing-haircut-client-isolated-red-background_141793-137002.jpg"
                  }
                ]
              }
            ]}
            title="Meet Our Stylists"
            description="Our creative team members are passionate about bringing your vision to life."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Sarah Miller", date: "Jan 2025", title: "Great!", quote: "Loved the atmosphere.", tag: "Haircut", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-young-woman-smiling_273609-12421.jpg", imageSrc: "http://img.b2bpic.net/free-photo/empty-wintertime-luxury-ski-resort_482257-102290.jpg?_wi=3", imageAlt: "happy salon customer" },
              { id: "2", name: "James Chen", date: "Dec 2024", title: "Amazing", quote: "Very professional results.", tag: "Coloring", avatarSrc: "http://img.b2bpic.net/free-photo/young-girls-chatting-sofa_23-2147762523.jpg", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-books-wooden-chair_23-2149678901.jpg?_wi=3", imageAlt: "happy salon customer" },
              { id: "3", name: "Elena Rodriguez", date: "Nov 2024", title: "Wonderful", quote: "So relaxing experience.", tag: "Spa", avatarSrc: "http://img.b2bpic.net/free-photo/young-woman-smiling_1187-3773.jpg", imageSrc: "http://img.b2bpic.net/free-photo/crop-hairdresser-washing-hair-blonde_23-2147769799.jpg?_wi=3", imageAlt: "happy salon customer" },
              { id: "4", name: "Marcus Thorne", date: "Oct 2024", title: "Perfect", quote: "Excellent work every time.", tag: "Style", avatarSrc: "http://img.b2bpic.net/free-photo/elegant-smiling-woman-is-trying-beautiful-necklace-posh-jewellery-shop_613910-20742.jpg", imageSrc: "http://img.b2bpic.net/free-photo/blonde-young-woman-taking-colored-pencil-from-case-wooden-table_23-2147889944.jpg?_wi=3", imageAlt: "happy salon customer" },
              { id: "5", name: "Lisa Wang", date: "Sep 2024", title: "Amazing", quote: "The best in the city.", tag: "Cut", avatarSrc: "http://img.b2bpic.net/free-photo/woman-getting-her-hair-done-beauty-salon_23-2149167404.jpg", imageSrc: "http://img.b2bpic.net/free-photo/close-up-low-view-man-getting-haircut_23-2148224308.jpg?_wi=3", imageAlt: "happy salon customer" }
            ]}
            title="Client Stories"
            description="Read what our wonderful clients have to say about their experience at Ethereal Salon."
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardEight
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            plans={[
              { id: "p1", badge: "Popular", price: "$65", subtitle: "Basic Cut", buttons: [{ text: "Book Now" }], features: ["Consultation", "Wash", "Blowout"] },
              { id: "p2", badge: "Deluxe", price: "$120", subtitle: "Color & Cut", buttons: [{ text: "Book Now" }], features: ["Root Touchup", "Precision Cut", "Styling"] },
              { id: "p3", badge: "Premium", price: "$180", subtitle: "Spa Package", buttons: [{ text: "Book Now" }], features: ["Full Treatment", "Massage", "Cut & Style"] }
            ]}
            title="Salon Services"
            description="Transparent pricing for high-quality hair care."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "Do I need an appointment?", content: "Yes, we recommend booking in advance." },
              { id: "f2", title: "Do you accept walk-ins?", content: "Sometimes, but appointments are safer." },
              { id: "f3", title: "Are you pet friendly?", content: "Service dogs only." }
            ]}
            title="Common Questions"
            description="Find answers to help you book and enjoy your visit."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            tag="Visit Us"
            title="Schedule Your Visit"
            description="Ready for a transformation? Get in touch with us to book your appointment."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Ethereal Salon"
            columns={[
              {
                title: "Navigate",                items: [
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" }
                ]
              },
              {
                title: "Legal",                items: [
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms", href: "#" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}