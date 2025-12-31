import { Target, FileText, ShoppingCart, TrendingUp, Megaphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const weeks = [
  {
    icon: Target,
    title: "Week 1: Strategy & Lead Magnet",
    subtitle: "What We Do",
    tasks: [
      "Define the target audience and offer positioning.",
      "Plan the lead magnet, low-ticket, and mid-ticket offers.",
      "Create lead magnet (ebook, guide, checklist, video, etc.).",
      "Design the opt-in page and email automation.",
      "Write the first email nurture sequence."
    ]
  },
  {
    icon: FileText,
    title: "Week 2-3: Low-Ticket Offer Development & Launch",
    subtitle: "What We Do",
    tasks: [
      "Outline the low-ticket product (mini-course, ebook, template, etc.).",
      "Write sales pages, videos, email sequence and membership area.",
      "Launch promotional campaigns (emails, YouTube videos, social posts).",
      "Optimize conversions and track performance."
    ]
  },
  {
    icon: ShoppingCart,
    title: "Weeks 4-5: Mid-Ticket Offer Development",
    subtitle: "What We Do",
    tasks: [
      "Outline the mid-ticket product (course, coaching, membership, etc.).",
      "Write the sales pages, videos, email sequence and membership area.",
      "Incorporate email sequence after nurture sequence."
    ]
  },
  {
    icon: TrendingUp,
    title: "Week 6: Mid-Ticket Launch & Optimization",
    subtitle: "What We Do",
    tasks: [
      "Launch promotional campaigns (emails, YouTube videos, social posts).",
      "Optimize conversions and track performance.",
      "Provide creators with analytics and next steps."
    ]
  },
  {
    icon: Megaphone,
    title: "Week 7 And Beyond: Additional Launches And Paid Ads (Optional)",
    subtitle: "What We Do",
    tasks: [
      "Plan out future low-ticket & mid-ticket launches to further monetize your audience.",
      "Optional: Launch paid ads using our own money to scale your offer to the next level."
    ]
  }
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Gradient divider at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-teal-blue" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            WE GOT YOU COVERED FROM A TO Z
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Full-Blown{" "}
            <span className="text-gradient">Acquisition System</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {weeks.map((week, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-accent-secondary/50 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <week.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{week.title}</h3>
                    <p className="text-primary font-semibold mb-4">{week.subtitle}</p>
                    <ul className="space-y-2">
                      {week.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="text-accent-secondary mt-1">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" onClick={scrollToContact}>
            Book A 30-Min Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
