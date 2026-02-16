import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly do I get for $97?",
    a: "A fully custom Offer Blueprint delivered to your inbox within 24 hours. It covers: your product idea, core promise, pricing model, product structure, delivery model, exact software/tools, funnel map, and a selling strategy mapped to your specific platform. Not a template. Not generic advice. A custom plan built around YOUR audience and YOUR content.",
  },
  {
    q: "Do I have to get on a call?",
    a: "No. Zero calls. You fill out an intake form (takes about 10 minutes), I build your blueprint, and it arrives in your inbox within 24 hours. That's the whole process.",
  },
  {
    q: "What if my audience is small?",
    a: "Then this is arguably MORE valuable for you. You don't need a huge audience to monetize. You need the right offer for the people who already pay attention to you. I've seen creators with 800 followers make more than creators with 80,000 — because they had the right product and the right promise.",
  },
  {
    q: "What if I already have a product but it's not selling?",
    a: "Even better. I'll look at what you have, diagnose why it's not converting — wrong audience? wrong promise? wrong price? wrong funnel? — and either reposition it or recommend an entirely different offer. Same price, same 24-hour delivery.",
  },
  {
    q: "Is this a template I fill in myself?",
    a: "No. This is built FOR you. I personally review your intake form and create a custom blueprint based on your specific situation. Two creators could buy this on the same day and get completely different plans.",
  },
  {
    q: "What platforms does this work for?",
    a: "YouTube, Instagram, TikTok, X/Twitter, podcasts, email newsletters, LinkedIn, a blog — wherever your audience lives. Your selling strategy is mapped specifically to the platforms you're on.",
  },
  {
    q: "What if I don't know what niche I'm in?",
    a: "If you're posting content and people are responding to it, you have a niche — you just might not have labeled it yet. The blueprint will clarify that for you. But if you truly have no content and no audience, this isn't the right fit yet.",
  },
  {
    q: "What if I'm not happy with the blueprint?",
    a: "If it doesn't give you complete clarity on what to sell, how to price it, how to build it, and how to sell it — reach out and I'll make it right. I'm not interested in keeping your $97 if I can't deliver a plan that's worth 10x that.",
  },
];

const BlueprintFAQ = () => (
  <section className="py-16 sm:py-20 bg-secondary/30">
    <div className="container max-w-3xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10">
        Questions You're <span className="text-gradient-gold">Probably Asking</span>
      </h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-5">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default BlueprintFAQ;
