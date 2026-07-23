import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "@phosphor-icons/react";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  const scrollToTop = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-1/2 top-4 z-[50] flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <motion.div variants={itemVariants}>
        <Button
          type="button"
          onClick={scrollToTop}
          size="sm"
          variant="secondary"
          className="rounded-full border border-zinc-700 bg-zinc-950 text-zinc-50 transition-all duration-150 ease-linear md:hover:bg-zinc-900">
          <Target className="h-4 w-4 md:mr-1.5" weight="bold" />
          <span className="hidden md:inline">Rolebound</span>
        </Button>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button
          type="button"
          onClick={scrollToJoin}
          size="sm"
          variant="secondary"
          className="rounded-full bg-black text-white transition-all duration-150 ease-linear md:hover:bg-zinc-800">
          <span className="hidden md:inline">Join waitlist</span>
          <ArrowRight className="h-4 w-4 md:ml-1.5" weight="bold" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
