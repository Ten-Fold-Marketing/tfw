import { useEffect } from "react";
import BlueprintHero from "@/components/blueprint/BlueprintHero";
import BlueprintWhatIsIt from "@/components/blueprint/BlueprintWhatIsIt";
import BlueprintDeliverables from "@/components/blueprint/BlueprintDeliverables";
import BlueprintHowItWorks from "@/components/blueprint/BlueprintHowItWorks";
import BlueprintTestimonials from "@/components/blueprint/BlueprintTestimonials";
import BlueprintHelp from "@/components/blueprint/BlueprintHelp";
import BlueprintForYou from "@/components/blueprint/BlueprintForYou";
import BlueprintClosing from "@/components/blueprint/BlueprintClosing";
import BlueprintFinalCTA from "@/components/blueprint/BlueprintFinalCTA";
import BlueprintMoreReviews from "@/components/blueprint/BlueprintMoreReviews";
import BlueprintFAQ from "@/components/blueprint/BlueprintFAQ";
import Footer from "@/components/landing/Footer";

const OfferBlueprint = () => {
  useEffect(() => {
    function trackUmami() {
      if ((window as any).umami) {
        (window as any).umami.track("offerblueprint-lander");
      } else {
        setTimeout(trackUmami, 100);
      }
    }
    trackUmami();
  }, []);

  return (
  <main className="min-h-screen bg-background">
    <BlueprintHero />
    <BlueprintWhatIsIt />
    <BlueprintDeliverables />
    <BlueprintHowItWorks />
    <BlueprintTestimonials />
    <BlueprintHelp />
    <BlueprintForYou />
    <BlueprintClosing />
    <BlueprintFinalCTA />
    <BlueprintMoreReviews />
    <BlueprintFAQ />
    <Footer />
  </main>
  );
};

export default OfferBlueprint;
