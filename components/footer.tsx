import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center border-t bg-background p-6 text-center text-sm text-muted-foreground md:justify-start md:text-left">
      <motion.div variants={itemVariants}>
        Rolebound helps candidates review, qualify, approve, and move the right
        opportunities forward.
      </motion.div>
    </motion.div>
  );
}
