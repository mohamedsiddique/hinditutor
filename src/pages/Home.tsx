import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Master Hindi</span>
                  <span className="block text-indigo-600">at Any Age</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Personalized Hindi tutoring for children and adults. Learn from an experienced tutor in a comfortable, engaging environment.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Book Trial Lesson
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Students learning"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Learning Path
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Hindi for Kids */}
              <div className="relative">
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="absolute -top-3 -left-3">
                    <Users className="h-12 w-12 text-indigo-600 bg-white rounded-full p-2 shadow" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Hindi for Kids</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Age-appropriate programs for children aged 3-12 years. Fun, interactive lessons that make learning Hindi enjoyable.
                  </p>
                  <Link to="/kids" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Personal Coaching */}
              <div className="relative">
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="absolute -top-3 -left-3">
                    <GraduationCap className="h-12 w-12 text-indigo-600 bg-white rounded-full p-2 shadow" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Personal Hindi Coaching</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Customized one-on-one coaching for adults. Focus on conversation, business Hindi, or academic requirements.
                  </p>
                  <Link to="/personal-coaching" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Students Say</h2>
            <p className="mt-4 text-lg text-gray-500">Real experiences from our students</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-indigo-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">"My children love their Hindi classes! The interactive approach makes learning fun and effective."</p>
              <p className="mt-4 font-medium">- Priya S., Parent</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-indigo-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">"The personalized coaching helped me gain confidence in speaking Hindi for business meetings."</p>
              <p className="mt-4 font-medium">- John D., Business Professional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}