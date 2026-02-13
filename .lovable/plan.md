

# /offerblueprint Sales Page

## Overview
Create a standalone long-form sales page at `/offerblueprint` for the "24-Hour Offer Blueprint" product ($97). The page will use the existing Ten Fold design system (dark green/cream palette, Bebas Neue + Inter fonts, framer-motion animations) and reuse existing UI components.

## Page Sections (top to bottom)

1. **Hero / Above the Fold** -- "Trusted by 500+ Creators" badge, main headline, bullet list of deliverables, star rating, pricing ($500 crossed out, $97), CTA button, payment badges (Visa/MC/Amex), money-back guarantee badge

2. **Featured Testimonial** -- Rayner Teo quote with photo, full-width highlight

3. **What Is It** -- "WHAT IS THE 24-HOUR OFFER BLUEPRINT?" long-form copy section explaining the product with checkmark bullet points

4. **What You Get** -- 8-card grid showing each deliverable (Audience Segment, Product Idea, Core Promise, Pricing Model, Product Structure, Tech Stack, Funnel Map, Selling Strategy) + CTA

5. **How It Works** -- 3-step process (Fill form, Get blueprint, Launch) + CTA

6. **More Testimonials** -- 9 testimonial cards using existing client photos (Rayner Teo, Houston Golden, Trevin Peterson, Andrew Rickli, Marisa Peer, Luke Bassist, Hattie Willoughby, Anthony Miranda, David Chau)

7. **How Will It Help** -- 3 objection-handling blocks (not sure what to sell, confused about pricing, will this work for my niche) + CTA

8. **Who It's For / Not For** -- Two-column layout with green checkmarks and red X marks

9. **Final Pitch** -- "AND NOW I'M GIVING IT ALL TO YOU" long-form closing copy + CTA

10. **Limited Time Offer** -- Urgency section with pricing callout + CTA

11. **Even More Reviews** -- Second testimonials section with 6 additional/alternate reviews + CTA

12. **FAQ** -- Accordion with 8 questions

13. **Footer** -- Reuse existing Footer component

## Technical Details

### New Files
- `src/pages/OfferBlueprint.tsx` -- Main page component that composes all sections
- `src/components/blueprint/BlueprintHero.tsx` -- Hero section
- `src/components/blueprint/BlueprintWhatIsIt.tsx` -- Explanation section
- `src/components/blueprint/BlueprintDeliverables.tsx` -- 8 deliverables grid
- `src/components/blueprint/BlueprintHowItWorks.tsx` -- 3-step process
- `src/components/blueprint/BlueprintTestimonials.tsx` -- Main testimonials grid
- `src/components/blueprint/BlueprintForYou.tsx` -- Who it's for / not for
- `src/components/blueprint/BlueprintHelp.tsx` -- Objection handling
- `src/components/blueprint/BlueprintClosing.tsx` -- Final pitch + limited time offer
- `src/components/blueprint/BlueprintMoreReviews.tsx` -- Second testimonials section
- `src/components/blueprint/BlueprintFAQ.tsx` -- Accordion FAQ

### Modified Files
- `src/App.tsx` -- Add route: `<Route path="/offerblueprint" element={<OfferBlueprint />} />`

### Design Approach
- Reuses existing design system (colors, fonts, spacing, animations from `index.css`)
- Uses existing UI components: Button (variant="hero"), Accordion
- Uses framer-motion for scroll-triggered animations (consistent with other pages)
- Client photos mapped from `src/assets/clients/` directory
- All CTA buttons link to a checkout URL (placeholder or Stripe link)
- Fully responsive (mobile-first)
- No header navigation (standalone sales page) -- just the content + footer
