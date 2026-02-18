import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import tenfoldLogo from "@/assets/tenfold-logo-new.png";

const slides = [
  // SLIDE 0 — Title
  {
    id: "title",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-12">
        <img src={tenfoldLogo} alt="Ten Fold Marketing" className="h-16 mb-12 opacity-80" />
        <h1 className="font-display text-[5rem] leading-[0.95] tracking-wide text-foreground mb-8">
          CLIENT LAUNCH<br />TIMELINE
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Most creators spend months building something nobody asked for.<br />
          We spend the first week making sure that never happens.
        </p>
      </div>
    ),
  },
  // SLIDE 1 — Step 1 Intro
  {
    id: "step1-intro",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/3 bg-primary/10 flex items-center justify-center">
          <div className="text-center">
            <span className="font-display text-[10rem] leading-none text-primary/30">01</span>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center px-20">
          <p className="section-label mb-4">STEP 1</p>
          <h2 className="font-display text-[4rem] leading-[0.95] text-foreground mb-6">
            SURVEY YOUR<br />AUDIENCE
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Before we build anything, we find out exactly what your audience is already desperate to buy.
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-accent rounded-full" />
        </div>
      </div>
    ),
  },
  // SLIDE 2 — Step 1 Detail
  {
    id: "step1-detail",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col justify-center px-16">
          <p className="section-label mb-6">WHAT WE DO</p>
          <ul className="space-y-5">
            {[
              "Deploy a targeted audience survey across your channels",
              "Analyze responses to pinpoint the highest-demand topic and format",
              "Define your offer's core transformation and positioning",
              "Validate the price point before a single word of copy is written",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/90 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-16 border-l border-border">
          <p className="section-label mb-6">WHAT YOU DO</p>
          <ul className="space-y-5">
            {[
              "Share the survey with your audience (we write it for you)",
              "Give us the green light on positioning (1–2 days)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-foreground/40 shrink-0" />
                <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-foreground/90 text-base italic leading-relaxed">
              "This is where most clients discover their offer is worth 2–3x what they were planning to charge."
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 3 — Step 2 Intro
  {
    id: "step2-intro",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/3 bg-primary/10 flex items-center justify-center">
          <div className="text-center">
            <span className="font-display text-[10rem] leading-none text-primary/30">02</span>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center px-20">
          <p className="section-label mb-4">STEP 2</p>
          <h2 className="font-display text-[4rem] leading-[0.95] text-foreground mb-6">
            BUILD YOUR<br />EMAIL LIST
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            We build a lead magnet so good, people feel stupid not opting in.
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-accent rounded-full" />
        </div>
      </div>
    ),
  },
  // SLIDE 4 — Step 2 Detail
  {
    id: "step2-detail",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col justify-center px-16">
          <p className="section-label mb-6">WHAT WE DO</p>
          <ul className="space-y-5">
            {[
              "Create a high-value lead magnet tailored to your audience's exact pain point",
              "Build and design the opt-in page",
              "Write the full nurture email sequence that warms cold leads on autopilot",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/90 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-16 border-l border-border">
          <p className="section-label mb-6">WHAT YOU DO</p>
          <ul className="space-y-5">
            {[
              "Approve the concept (1–2 days)",
              "Drop your brand assets and we handle the rest",
              "Point your audience to the opt-in link (we'll tell you exactly what to say)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-foreground/40 shrink-0" />
                <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-foreground/90 text-base italic leading-relaxed">
              "The right lead magnet doesn't just grow your list — it pre-sells your offer before you ever mention it."
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 5 — Step 3 Intro
  {
    id: "step3-intro",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/3 bg-primary/10 flex items-center justify-center">
          <div className="text-center">
            <span className="font-display text-[10rem] leading-none text-primary/30">03</span>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center px-20">
          <p className="section-label mb-4">STEP 3</p>
          <h2 className="font-display text-[4rem] leading-[0.95] text-foreground mb-6">
            TEST YOUR FIRST<br />DIGITAL PRODUCT
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Done beats perfect. We get your offer in front of buyers fast — then we optimize from real data.
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-accent rounded-full" />
        </div>
      </div>
    ),
  },
  // SLIDE 6 — Step 3 Detail
  {
    id: "step3-detail",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col justify-center px-16">
          <p className="section-label mb-6">WHAT WE DO</p>
          <ul className="space-y-5">
            {[
              "Write the sales page, launch emails, and social scripts — all of it",
              "Set up your checkout, payment processing, and product delivery",
              "Run a pre-launch tease to build urgency before the cart opens",
              "Manage the full launch sequence from first email to cart close",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/90 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-16 border-l border-border">
          <p className="section-label mb-6">WHAT YOU DO</p>
          <ul className="space-y-5">
            {[
              "Approve the sales page and offer outline (1–2 days)",
              "Record your product content using our outline (we make this as easy as possible)",
              "Post on social using the scripts we write for you",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-foreground/40 shrink-0" />
                <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-foreground/90 text-base italic leading-relaxed">
              "Most clients are generating revenue within 30 days of starting this process."
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 7 — Step 4 Intro
  {
    id: "step4-intro",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/3 bg-primary/10 flex items-center justify-center">
          <div className="text-center">
            <span className="font-display text-[10rem] leading-none text-primary/30">04</span>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center px-20">
          <p className="section-label mb-4">STEP 4</p>
          <h2 className="font-display text-[4rem] leading-[0.95] text-foreground mb-6">
            TURN ONE LAUNCH<br />INTO A MACHINE
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            The first launch is a test. Everything after that is a system.
          </p>
          <div className="mt-8 h-1 w-24 bg-gradient-accent rounded-full" />
        </div>
      </div>
    ),
  },
  // SLIDE 8 — Step 4 Detail
  {
    id: "step4-detail",
    render: () => (
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col justify-center px-16">
          <p className="section-label mb-6">WHAT WE DO</p>
          <ul className="space-y-5">
            {[
              "Audit every metric: open rates, conversion rate, revenue per lead",
              "Interview your buyers to extract what actually sold them",
              "Refine your messaging to eliminate the objections that killed conversions",
              "Build an evergreen sequence so your funnel works while you sleep",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-foreground/90 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-16 border-l border-border">
          <p className="section-label mb-6">WHAT YOU DO</p>
          <ul className="space-y-5">
            {[
              "Share any customer feedback and DMs with us",
              "Make minor course adjustments based on buyer feedback",
              "Keep showing up to your audience — we'll tell you exactly what to say",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-foreground/40 shrink-0" />
                <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-foreground/90 text-base italic leading-relaxed">
              "This is where the work we've done together stops feeling like a launch and starts feeling like a business."
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 9 — Closing
  {
    id: "closing",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center px-16">
        <p className="section-label mb-8">THE BOTTOM LINE</p>
        <h2 className="font-display text-[4.5rem] leading-[0.95] text-foreground mb-10 max-w-4xl">
          30 DAYS FROM NOW,<br />YOU COULD HAVE A<br />REVENUE-GENERATING OFFER
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
          You could spend the next three months building an offer in the dark, hoping it lands.
        </p>
        <p className="text-xl text-foreground/90 max-w-2xl leading-relaxed mb-12">
          Or we could spend 30 days finding out exactly what your audience wants, building it together, and putting it in front of them while your list is warm.
        </p>
        <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5 max-w-xl">
          <p className="font-display text-3xl text-foreground tracking-wide">
            THE CREATORS WHO WIN AREN'T THE ONES WHO WAIT UNTIL THEY'RE READY.
          </p>
          <p className="font-display text-3xl text-primary mt-2 tracking-wide">
            THEY'RE THE ONES WHO START.
          </p>
        </div>
        <img src={tenfoldLogo} alt="Ten Fold Marketing" className="h-10 mt-12 opacity-50" />
      </div>
    ),
  },
];

const ClientLaunchTimeline = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      }
      if (e.key === "Escape") {
        document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative select-none">
      {/* Slide area */}
      <div className="absolute inset-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            {slides[current].render()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 z-10">
        {/* Prev */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-3 rounded-full border border-border bg-card/80 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-primary"
                  : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="p-3 rounded-full border border-border bg-card/80 backdrop-blur-sm text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-8 z-10 text-sm text-muted-foreground font-mono">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Keyboard hint */}
      <div className="absolute top-6 left-8 z-10 text-xs text-muted-foreground/50">
        ← → to navigate · F for fullscreen
      </div>

      {/* Logo — bottom left, out of nav area */}
      <img src={tenfoldLogo} alt="Ten Fold Marketing" className="absolute bottom-8 left-8 h-8 opacity-40 z-10" />
    </div>
  );
};

export default ClientLaunchTimeline;
