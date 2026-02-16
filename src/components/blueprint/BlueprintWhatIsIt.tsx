const checks = [
  "What digital product you should sell (and why it fits YOUR audience)",
  "The exact promise that makes it convert — who it's for, what they get, in what timeframe",
  "How to price it: low-ticket, mid-ticket, or high-ticket — based on your audience size and goals",
  "What goes inside it and how you deliver it (course, cohort, templates, community, or hybrid)",
  "The simplest tech stack to build and sell it — no expensive tools, no developer needed",
];

const BlueprintWhatIsIt = () => (
  <section className="py-16 sm:py-20">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="bg-foreground/95 rounded-2xl p-8 sm:p-12 text-background">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-2">
          WHAT IS THE
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8">
          <span className="bg-gradient-gold text-primary-foreground px-3 py-1 rounded">
            24-HOUR OFFER BLUEPRINT?
          </span>
        </h2>

        <div className="space-y-4 text-background/80 text-base max-w-3xl mx-auto mb-8">
          <p>
            The 24-Hour Offer Blueprint is the fastest way to get a fully mapped monetization
            plan, tailored to your audience, without lifting a finger.
          </p>
          <p>Because let's face it — you already know you should be selling something.</p>
          <p>You've seen other creators making money from their audience…</p>
          <p>You've heard the gurus preach "launch a digital product"…</p>
          <p>And you've probably even thought about doing one out yourself…</p>
          <p>But the part nobody talks about?</p>
          <p>
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded font-bold">
              What to actually sell.
            </span>
          </p>
          <p>What should the product be… the pricing… the delivery… the funnel…</p>
          <p>
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded font-bold">
              But the 24-Hour Offer Blueprint flips the script.
            </span>
          </p>
          <p>
            We've eliminated months worth of tedious planning, guesswork, and headaches…
          </p>
          <p className="italic">
            Instead with your custom blueprint you'll get:
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto mb-8">
          {checks.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mt-0.5">
                ✓
              </span>
              <span className="text-background/80">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-background/80 text-base max-w-3xl mx-auto">
          <p className="font-bold text-background">
            We're not giving you another lengthy course…
          </p>
          <p>Or asking you to "figure it out" yourself…</p>
          <p>
            <span className="font-bold text-background">More information is rarely the answer.</span>
          </p>
          <p>The top 1% of creators value time over everything else…</p>
          <p>
            Which is why I'm personally going to hand you everything you need to start
            monetizing your audience — handed on a silver platter.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default BlueprintWhatIsIt;
