import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}
const Overlay = ({ onClick, children }: Props) => {
  const overlay = `h-screen w-screen bg-black overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-opacity-60 flex`;
  return (
    <motion.div
      className={overlay}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
