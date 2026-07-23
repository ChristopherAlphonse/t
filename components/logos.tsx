"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const bentoCards = [
  {
    title: "Jobs ranked for your background",
    text: "Rolebound turns your profile into a short list of jobs with fit reasons, freshness, confidence, and source evidence.",
    className: "md:col-span-7",
  },
  {
    title: "Contacts attached to each job",
    text: "Each opportunity shows the recommended hiring contact, why that person matters, and how reliable the match is.",
    className: "md:col-span-5",
  },
  {
    title: "No guessed contacts",
    text: "If there is no reliable contact, the CRM says so clearly instead of inventing a name.",
    className: "md:col-span-4",
  },
  {
    title: "Outreach from approved facts",
    text: "Drafts use your verified background and can be edited, shortened, approved, copied, and marked sent.",
    className: "md:col-span-4",
  },
  {
    title: "Pipeline built for job search",
    text: "Move jobs through discovered, qualified, applied, contacted, replied, interviewing, offer, rejected, and archived.",
    className: "md:col-span-4",
  },
];

const stackCards = [
  {
    title: "Approve your candidate profile",
    text: "Control the facts that power matching and outreach: skills, achievements, target titles, location, compensation, sponsorship, and dealbreakers.",
  },
  {
    title: "Confirm the jobs you want",
    text: "Describe the search in plain language. Rolebound turns it into filters for role, company stage, geography, industry, remote preference, and exclusions.",
  },
  {
    title: "Review jobs with contacts",
    text: "Open each opportunity to see company context, hiring signal, fit breakdown, recommended contact, and the suggested next action.",
  },
  {
    title: "Move the job forward",
    text: "Approve a message, copy it, mark it sent, and track the opportunity through your CRM pipeline.",
  },
];

export default function Logos() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        gsap.set(".reveal-word", {
          opacity: 1,
          clearProps: "transform,filter",
        });
        return;
      }

      const words = gsap.utils.toArray<HTMLElement>(".reveal-word");
      gsap.fromTo(
        words,
        { opacity: 0.12, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".word-reveal",
            start: "top 70%",
            end: "bottom 35%",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const revealCopy =
    "Rolebound is a job search CRM: it keeps your target jobs, best contacts, evidence, outreach drafts, follow-ups, and pipeline in one place.";

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="w-full max-w-7xl py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <h2
          className="max-w-5xl text-balance font-semibold leading-[0.98] text-zinc-50"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5.25rem)" }}>
          One CRM for jobs, contacts, outreach, and follow-up
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Rolebound gives job seekers a focused list of roles, the person to
          contact, the reason that contact matters, and the next action to take.
        </p>
      </div>

      <div className="mt-16 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-12">
        {bentoCards.map((card) => (
          <article
            key={card.title}
            className={`min-h-[240px] rounded-md border border-zinc-800 bg-zinc-950 p-6 ${card.className}`}>
            <h3 className="text-2xl font-semibold text-zinc-50">
              {card.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              {card.text}
            </p>
          </article>
        ))}
      </div>

      <div className="py-32 md:py-48">
        <div className="word-reveal mx-auto max-w-5xl text-center text-3xl font-semibold leading-tight text-zinc-50 md:text-5xl">
          {revealCopy.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} className="reveal-word inline-block">
              {word}&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="md:sticky md:top-32 md:h-fit">
          <h2
            className="text-balance font-semibold leading-none text-zinc-50"
            style={{ fontSize: "clamp(2.5rem, 4.4vw, 4.75rem)" }}>
            From resume to contacted lead
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            The CRM is useful when a candidate can qualify a job, identify the
            right person, approve a message, and track what happened next.
          </p>
        </div>

        <div className="grid gap-4">
          {stackCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-md border border-zinc-800 bg-zinc-900 p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-semibold text-zinc-50">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
                    {card.text}
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-100/20 bg-yellow-100 text-zinc-950">
                  <CheckCircle className="h-6 w-6" weight="bold" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
