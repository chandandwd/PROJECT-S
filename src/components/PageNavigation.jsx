import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/sorry', label: 'Sorry' },
  { path: '/reasons', label: 'Reasons' },
  { path: '/care', label: 'Care' },
  { path: '/letters', label: 'Letters' },
  { path: '/promises', label: 'Promises' },
  { path: '/final', label: 'Final' },
];

const PageNavigation = () => {
  const location = useLocation();
  const currentIndex = pages.findIndex((p) => p.path === location.pathname);

  if (currentIndex < 0) return null;

  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="page-nav">
      {prev ? (
        <Link to={prev.path} className="page-nav-btn" aria-label={`Go to ${prev.label}`}>
          <ChevronLeft size={16} />
          {prev.label}
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link to={next.path} className="page-nav-btn" aria-label={`Go to ${next.label}`}>
          {next.label}
          <ChevronRight size={16} />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default PageNavigation;
