import { FC } from 'react';
import { Users, Sparkles, Brain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const KidsProgram: FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Hindi Learning for Kids
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Age-appropriate Hindi language programs designed specifically for children aged 3-12 years. Our interactive approach makes learning fun and effective.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Book a Trial Class
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Children learning"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Age Groups */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Age Groups</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Programs for Every Age
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Ages 3-5",
                  description: "Early introduction to Hindi through songs, stories, and play-based activities.",
                  icon: Heart,
                },
                {
                  title: "Ages 6-8",
                  description: "Building basic vocabulary and simple conversation skills with interactive exercises.",
                  icon: Sparkles,
                },
                {
                  title: "Ages 9-12",
                  description: "Comprehensive language learning including reading, writing, and cultural understanding.",
                  icon: Brain,
                },
              ].map((group, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <div className="absolute -top-3 -left-3">
                      <group.icon className="h-12 w-12 text-indigo-600 bg-white rounded-full p-2 shadow" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">{group.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{group.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Approach */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Approach</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Making Hindi Fun and Easy
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Interactive Learning",
                  description: "Engaging activities, games, and exercises that make learning Hindi enjoyable.",
                },
                {
                  title: "Cultural Integration",
                  description: "Incorporating Indian culture, festivals, and traditions into language learning.",
                },
                {
                  title: "Regular Progress Updates",
                  description: "Detailed feedback and progress reports for parents to track their child's development.",
                },
                {
                  title: "Customized Pace",
                  description: "Learning adapted to each child's individual progress and understanding.",
                },
              ].map((feature, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Users className="h-6 w-6" />
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

export default KidsProgram;