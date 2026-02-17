import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  subtext?: string;
}

const CTAButton = ({
  text = "GET YOUR 24-HOUR OFFER BLUEPRINT — $47",
  subtext,
}: CTAButtonProps) => (
  <div className="flex flex-col items-center gap-3">
    <a
      href="https://go.tenfoldmarketing.com/24hourofferblueprintcheckout"
      className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-extrabold text-base sm:text-lg md:text-xl px-8 py-4 sm:py-5 rounded-lg shadow-gold hover:scale-105 transition-transform duration-300"
    >
      {text}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </a>
    {subtext && <p className="text-muted-foreground text-sm">{subtext}</p>}
  </div>
);

export default CTAButton;
