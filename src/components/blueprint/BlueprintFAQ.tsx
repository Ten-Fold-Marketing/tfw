import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly do I get for $97?",
    a: "You get a fully personalized monetization blueprint covering your product idea, core promise, pricing model, product structure, tech stack, funnel map, and selling strategy — all tailored to your audience and delivered within 24 hours.",
  },
  {
    q: "Do I have to get on a call?",
    a: "No calls needed. You fill out a simple 10-minute form, and I build your blueprint from there. Everything is delivered asynchronously.",
  },
  {
    q: "What if my audience is small?",
    a: "The blueprint works for creators with as few as 500 engaged followers. I tailor the strategy to your current audience size and growth trajectory.",
  },
  {
    q: "What if I already have a product but it's not selling?",
    a: "Perfect — I'll analyze what's not working and rebuild your offer architecture, pricing, and funnel to help you start converting.",
  },
  {
    q: "Is this a template I fill in myself?",
    a: "No. This is a done-for-you blueprint. I personally analyze your situation and write out every section of your monetization plan.",
  },
  {
    q: "What platforms does this work for?",
    a: "YouTube, Instagram, TikTok, podcasts, newsletters, LinkedIn, Twitter/X — any platform where you have an engaged audience.",
  },
  {
    q: "What if I don't know what niche I'm in?",
    a: "That's okay. Based on the info you share about your content and audience, I'll help identify your most monetizable niche and build around it.",
  },
  {
    q: "What if I'm not happy with the blueprint?",
    a: "You're covered by our Total Clarity Guarantee. If you don't feel you got clear, actionable value, we'll refund you — no questions asked.",
  },
];

const BlueprintFAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Questions You're Probably Asking
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueprintFAQ;
