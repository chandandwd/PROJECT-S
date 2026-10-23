import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Home } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="not-found-page">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <h1>404</h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          This page wandered off 💫
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          But don't worry, our little world is still here waiting for you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/" className="btn-primary">
            <Home size={18} />
            Back to Our Little World
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFoundPage;
