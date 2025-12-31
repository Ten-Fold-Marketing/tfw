import { Check, X, ArrowRight } from "lucide-react";

const Comparison = () => {
  const afterItems = [
    "Automated income growth",
    "Business running 95% on autopilot",
    "Full team dedicated to your success",
    "Unlimited growth and scale",
    "Partners with your best interest in mind"
  ];

  const beforeItems = [
    "Burnout",
    "Dependence on shady brand deals",
    "Content creator hamster wheel",
    "Unpredictable income potential"
  ];

  const industries = [
    "TRADING",
    "PARENTING",
    "FINANCE",
    "TRAVEL",
    "SIDE HUSTLE",
    "RELATIONSHIPS",
    "PERSONAL",
    "HOBBIES",
    "SPIRITUALITY",
    "MARKETING",
    "CAREER",
    "SOFTWARE"
  ];

  return (
    <section id="comparison" className="section-padding bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            EASIER, FASTER AND BETTER ACQUISITION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:whitespace-nowrap">
            Before And After <span className="text-gradient">Partnering With Us</span>
          </h2>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* AFTER Section (Instead...) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Instead...</h3>
              </div>
              <ul className="space-y-5">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BEFORE Section (No more...) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">No more...</h3>
              </div>
              <ul className="space-y-5">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground text-lg line-through decoration-destructive/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            AS LONG AS YOU HAVE AN AUDIENCE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
            This Works For{" "}
            <span className="text-gradient">Any Industry</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span 
                key={index}
                className="px-5 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
