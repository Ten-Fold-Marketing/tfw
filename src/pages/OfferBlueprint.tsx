import BlueprintHero from "@/components/blueprint/BlueprintHero";
import BlueprintWhatIsIt from "@/components/blueprint/BlueprintWhatIsIt";
import BlueprintDeliverables from "@/components/blueprint/BlueprintDeliverables";
import BlueprintHowItWorks from "@/components/blueprint/BlueprintHowItWorks";
import BlueprintTestimonials from "@/components/blueprint/BlueprintTestimonials";
import BlueprintHelp from "@/components/blueprint/BlueprintHelp";
import BlueprintForYou from "@/components/blueprint/BlueprintForYou";
import BlueprintClosing from "@/components/blueprint/BlueprintClosing";
import BlueprintMoreReviews from "@/components/blueprint/BlueprintMoreReviews";
import BlueprintFAQ from "@/components/blueprint/BlueprintFAQ";
import Footer from "@/components/landing/Footer";

const OfferBlueprint = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlueprintHero />
      <BlueprintWhatIsIt />
      <BlueprintDeliverables />
      <BlueprintHowItWorks />
      <BlueprintTestimonials />
      <BlueprintHelp />
      <BlueprintForYou />
      <BlueprintClosing />
      <BlueprintMoreReviews />
      <BlueprintFAQ />
      <Footer />
    </div>
  );
};

export default OfferBlueprint;
