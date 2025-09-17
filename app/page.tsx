'use client';

import { Hero, Section, H2, Card, ButtonLink } from '../components/ui';
import { Headphones, MapPin, Music, Mic } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero */}
      <section className="relative">
        <Hero>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Silent Disco Rentals in OC & North San Diego
          </motion.h1>
          <p className="text-xl max-w-2xl mb-8 text-gray-300">
            Bring the party anywhere — 3 music channels, zero noise complaints, 100% fun.
          </p>
          <ButtonLink href="#quote">Get a Free Quote</ButtonLink>
          <a href="#quote" className="inline-block mt-4 text-purple-300 underline underline-offset-4">
            Or jump to the quote form ↓
          </a>
        </Hero>
      </section>

      {/* Packages */}
      <Section>
        <H2>Our Packages</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <Headphones className="w-12 h-12 text-dpd-purple mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Pickup (DIY)</h3>
            <p className="text-gray-400 mb-4">Grab the full kit, quick 10‑min demo, run the party yourself.</p>
            <p className="font-bold text-lg">$175 + $5/headset</p>
          </Card>

          <Card>
            <MapPin className="w-12 h-12 text-dpd-purple mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Delivery</h3>
            <p className="text-gray-400 mb-1">We deliver, set up, and pick up next day. Easy & stress‑free.</p>
            <p className="text-sm text-gray-500 mb-2">$49 local • $79 OC core • $119 farther</p>
            <p className="font-bold text-lg">$175 + $5/headset + delivery</p>
          </Card>

          <Card>
            <Music className="w-12 h-12 text-dpd-purple mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">DJ Lite</h3>
            <p className="text-gray-400 mb-4">Delivery + live walkthrough, emcee intro, on‑site help for 2 hrs.</p>
            <p className="font-bold text-lg">$249 add‑on</p>
          </Card>

          <Card>
            <Mic className="w-12 h-12 text-dpd-purple mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">DJ LIVE</h3>
            <p className="text-gray-400 mb-4">Full DJ/MC service, live requests, announcements, crowd hype (3 hrs).</p>
            <p className="font-bold text-lg">$499 add‑on</p>
          </Card>
        </div>
      </Section>

      {/* What’s a Silent Disco */}
      <Section className="bg-purple-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <H2>What’s a Silent Disco?</H2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A silent disco is a party where everyone wears wireless LED headphones tuned into up to 3 channels. Guests choose their vibe — pop, hip‑hop, EDM, or throwbacks — while the room stays quiet. Perfect for schools, weddings, corporate events, and backyard parties without upsetting the neighbors.
          </p>
        </div>
      </Section>

      {/* Events */}
      <Section>
        <H2>Perfect For…</H2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            'School Dances & Proms',
            'Weddings & Receptions',
            'Backyard & Birthday Parties',
            'Corporate Events',
            'Church & Youth Nights',
            'Fundraisers & Festivals',
          ].map((event) => (
            <div key={event} className="bg-gray-900 border border-dpd-purple rounded-2xl shadow-dpd p-6">
              <p className="text-lg font-medium text-gray-200">{event}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote Form */}
      <Section id="quote" className="bg-purple-900/10">
        <div className="max-w-3xl mx-auto">
          <H2>Request a Quote</H2>
          <p className="text-center text-gray-300 mb-8">
            Fill this out and we’ll confirm availability and send pricing fast.
          </p>

          {/* Email submit: set NEXT_PUBLIC_QUOTE_EMAIL in Vercel if desired, else formspree */}
          <form
            action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your_form_id'}
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input name="name" placeholder="Full Name" required className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white" />
            <input name="email" type="email" placeholder="Email" required className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white" />
            <input name="phone" type="tel" placeholder="Phone (optional)" className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white md:col-span-2" />
            <input name="date" type="date" placeholder="Event Date" required className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white" />
            <input name="location" placeholder="Event City / Venue" required className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white" />
            <input name="headsets" type="number" min={10} step={5} placeholder="# of Headsets" required className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white" />
            <select name="package" required className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white">
              <option value="" disabled>Choose Package</option>
              <option>Pickup (DIY)</option>
              <option>Delivery</option>
              <option>DJ Lite</option>
              <option>DJ LIVE</option>
            </select>
            <textarea name="message" placeholder="Tell us about your event (timeline, vibe, age group, extras)" rows={5} className="bg-gray-900 border border-purple-700/50 rounded-xl p-4 text-white md:col-span-2" />

            {/* Honeypot anti-spam */}
            <input type="text" name="_gotcha" className="hidden" />
            {/* Email subject */}
            <input type="hidden" name="_subject" value="New Quote Request — Dana Point Disco" />

            <div className="md:col-span-2 flex items-center justify-center">
              <button type="submit" className="bg-dpd-purple hover:bg-dpd-purple-dark rounded-2xl px-8 py-4 text-lg font-semibold shadow-dpd">
                Send Request
              </button>
            </div>
          </form>

          <p className="text-center text-gray-400 mt-4 text-sm">
            Submitting sends us your info securely. We’ll reply by email or text.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-b from-black to-purple-900">
        <h2 className="text-3xl font-bold text-center mb-6">Ready to Host an Unforgettable Silent Disco?</h2>
        <div className="text-center">
          <ButtonLink href="#quote">Request a Quote</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
