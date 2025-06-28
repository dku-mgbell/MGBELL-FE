import { motion } from 'framer-motion';

export function Container({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) {
  const transitionVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { ease: 'easeInOut', duration: 0.75 },
  };
  return (
    <motion.div
      key={key}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={transitionVariants}
      transition={transitionVariants.transition}
      className="absolute-center flex flex-col items-center justify-center gap-[10px] w-full max-w-[450px]"
    >
      {children}
    </motion.div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <strong className="text-h3">{children}</strong>;
}

function Description({ children }: { children: React.ReactNode }) {
  return <p className="text-b1 text-center text-gray4">{children}</p>;
}

export const Content = {
  Title,
  Description,
};
