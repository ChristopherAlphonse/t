import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "@phosphor-icons/react";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      id="join"
      className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-md border border-yellow-100/20 bg-zinc-950 p-6 shadow-2xl shadow-black/40 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(247,255,155,0.22),transparent_30%),linear-gradient(135deg,#09090b,#18181b)]"
      />
      <motion.div variants={itemVariants}>
        <h2
          className="max-w-3xl text-balance font-semibold leading-none text-zinc-50"
          style={{ fontSize: "clamp(2.5rem, 4.8vw, 5rem)" }}>
          Get early access to the job search CRM
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Join the beta list for curated jobs, recommended contacts, approved
          outreach, follow-ups, and pipeline tracking.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <motion.div variants={itemVariants} className="grid gap-2">
          <label htmlFor="waitlist-name" className="text-sm text-zinc-200">
            Name
          </label>
          <Input
            id="waitlist-name"
            type="text"
            placeholder="Alex Morgan"
            value={name}
            onChange={handleNameChange}
            className="h-12 border-zinc-700 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="grid gap-2">
          <label htmlFor="waitlist-email" className="text-sm text-zinc-200">
            Work email
          </label>
          <Input
            id="waitlist-email"
            type="email"
            placeholder="alex@company.com"
            value={email}
            onChange={handleEmailChange}
            className="h-12 border-zinc-700 bg-zinc-900 text-zinc-50 placeholder:text-zinc-500"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <EnhancedButton
            variant="expandIcon"
            Icon={ArrowRight}
            onClick={handleSubmit}
            iconPlacement="right"
            className="h-12 w-full border-yellow-100 bg-yellow-100 px-6 text-zinc-950 hover:bg-zinc-50 md:w-auto"
            disabled={loading}>
            {loading ? "Joining..." : "Join waitlist"}
          </EnhancedButton>
        </motion.div>
      </div>
      <motion.div
        variants={itemVariants}
        className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
        Rolebound helps you decide which jobs to pursue, who to contact, and
        what to send. No fake familiarity, unsupported claims, or guessed
        contacts.
      </motion.div>
    </motion.div>
  );
}
