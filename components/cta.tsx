"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  const scrollToJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTrust = () => {
    document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="relative flex min-h-[100dvh] w-full max-w-7xl flex-col items-center justify-center overflow-hidden bg-zinc-950 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.img
        src="/logo.svg"
        alt="Rolebound logo"
        className="mb-8 h-24 w-24"
        variants={itemVariants}
      />

      <motion.h1
        variants={itemVariants}
        className="mx-auto w-full max-w-6xl text-balance text-center font-semibold leading-[0.95] text-zinc-50"
        style={{ fontSize: "clamp(3rem, 5.4vw, 5.75rem)" }}>
        The CRM for job seekers who need jobs and the right people to contact
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
        Track fitting jobs, see who to contact, and approve outreach that
        improves your odds.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-10 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={scrollToJoin}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-yellow-100 px-6 text-sm font-semibold text-zinc-950 transition-transform duration-300 hover:scale-[1.02]">
          Join the waitlist
          <ArrowRight className="h-4 w-4" weight="bold" />
        </button>

      </motion.div>
    </motion.div>
  );
}
