import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, BookOpen } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Hindi Pathshala</span>
            </div>
            <p className="text-gray-500">Expert Hindi tutoring for all ages.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/kids" className="text-gray-500 hover:text-indigo-600">Hindi for Kids</Link></li>
              <li><Link to="/personal-coaching" className="text-gray-500 hover:text-indigo-600">Personal Coaching</Link></li>
              <li><Link to="/resources" className="text-gray-500 hover:text-indigo-600">Learning Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-gray-500 hover:text-indigo-600">About</Link></li>
              <li><Link to="/testimonials" className="text-gray-500 hover:text-indigo-600">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-indigo-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="mailto:Freelancersiddiqueindia@gmail.com" className="text-gray-500 hover:text-indigo-600 flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Freelancersiddiqueindia@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919363474680" className="text-gray-500 hover:text-indigo-600 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  +91 9363474680
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;