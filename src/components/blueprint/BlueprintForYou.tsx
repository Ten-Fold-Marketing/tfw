const forYou = [
  "You already have an audience (even small — 500 engaged followers counts)",
  "You're posting content on YouTube, IG, TikTok, a podcast, newsletter, or any mix",
  "People engage with your content but none of that translates to income",
  "You KNOW you should be selling something but can't decide what or how",
  "You want a simple, calm business — not a complicated empire",
  'You\'re done overthinking and ready for someone to hand you a plan and say "go build this"',
];

const notForYou = [
  "You have zero audience and zero content",
  "You're looking for a get-rich-quick scheme",
  "You want someone to build and run the entire business for you",
  "You're not going to take action",
  'You\'d rather spend 6 more months "researching"',
];

const BlueprintForYou = () => (
  <section className="py-16 sm:py-20">
    <div className="container max-w-5xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10">
        This Was Built for a <span className="text-gradient-gold">Very Specific Creator</span>.
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</span>
            This IS for you if:
          </h3>
          <ul className="space-y-3">
            {forYou.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-primary shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-sm">✗</span>
            This is NOT for you if:
          </h3>
          <ul className="space-y-3">
            {notForYou.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-destructive shrink-0 mt-0.5">✗</span>
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default BlueprintForYou;
