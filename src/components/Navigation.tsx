import { FC } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navigation: FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Hindi Pathshala</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/kids" className="text-gray-700 hover:text-indigo-600">Hindi for Kids</Link>
            <Link to="/personal-coaching" className="text-gray-700 hover:text-indigo-600">Personal Coaching</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/resources" className="text-gray-700 hover:text-indigo-600">Resources</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;