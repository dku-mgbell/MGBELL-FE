import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Step({
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
      className="absolute-center mt-[-50px] flex flex-col items-center justify-center gap-[30px] w-full max-w-[450px]"
    >
      {children}
    </motion.div>
  );
}

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <strong
      className={cn(
        'text-h4 [&>span]:text-primary [&>span]:text-h4 [&>span]:font-bold',
        className,
      )}
    >
      {children}
    </strong>
  );
}

function Description({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-b2 text-center text-gray4', className)}>
      {children}
    </p>
  );
}

export default function Layout({
  children,
  currentIndex,
}: {
  children: React.ReactNode[];
  currentIndex: number;
}) {
  return (
    <AnimatePresence mode="wait">{children[currentIndex]}</AnimatePresence>
  );
}

export const Guide = {
  Step,
  Title,
  Description,
  Layout,
};
