import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "You already have an audience (even small — 500 engaged followers counts)",
  "You're posting content on YouTube, IG, TikTok, a podcast, newsletter, or any mix",
  "People engage with your content but none of that translates to income",
  "You KNOW you should be selling something but can't decide what or how",
  "You want a simple, calm business — not a complicated empire",
  "You're done overthinking and ready for someone to hand you a plan and say \"go build this\"",
];

const notForYou = [
  "You have zero audience and zero content",
  "You're looking for a get-rich-quick scheme",
  "You want someone to build and run the entire business for you",
  "You're not going to take action",
  "You'd rather spend 6 more months \"researching\"",
];

const BlueprintForYou = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            This Was Built for a Very Specific Creator.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8"
          >
            <h3 className="font-display text-2xl text-primary mb-6">✓ This IS for you if:</h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-premium p-8"
          >
            <h3 className="font-display text-2xl text-destructive mb-6">✗ This is NOT for you if:</h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlueprintForYou;
