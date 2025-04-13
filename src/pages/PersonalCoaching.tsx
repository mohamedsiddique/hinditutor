import { FC } from 'react';
import { GraduationCap, BookOpen, MessageSquare, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalCoaching: FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Personal Hindi Coaching
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Customized one-on-one Hindi coaching for adults. Whether you're learning for business, academics, or personal growth, we'll help you achieve your language goals.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Personal coaching session"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Programs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tailored to Your Needs
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Conversational Hindi",
                  description: "Master everyday conversations and practical Hindi for daily life.",
                  icon: MessageSquare,
                },
                {
                  title: "Business Hindi",
                  description: "Learn professional vocabulary and communication for the workplace.",
                  icon: Target,
                },
                {
                  title: "Academic Hindi",
                  description: "Comprehensive language study for academic purposes and examinations.",
                  icon: BookOpen,
                },
              ].map((program, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <div className="absolute -top-3 -left-3">
                      <program.icon className="h-12 w-12 text-indigo-600 bg-white rounded-full p-2 shadow" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">{program.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Methodology */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Method</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Effective Learning Approach
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Personalized Learning Plan",
                  description: "Custom curriculum designed around your goals and current proficiency level.",
                },
                {
                  title: "Practical Application",
                  description: "Real-world scenarios and conversation practice for immediate use.",
                },
                {
                  title: "Cultural Context",
                  description: "Understanding Hindi in its cultural context for better comprehension.",
                },
                {
                  title: "Progress Tracking",
                  description: "Regular assessments and feedback to measure your improvement.",
                },
              ].map((feature, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCoaching;