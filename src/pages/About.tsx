import { FC } from 'react';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const About: FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Hindi Pathshala
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Dedicated to making Hindi language learning accessible, enjoyable, and effective for learners of all ages.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Teaching environment"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Through Language
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Expert Instruction",
                  description: "Experienced tutors with proven teaching methodologies.",
                  icon: Award,
                },
                {
                  title: "Personalized Approach",
                  description: "Tailored learning plans that adapt to individual needs.",
                  icon: Users,
                },
                {
                  title: "Cultural Integration",
                  description: "Incorporating cultural context for deeper understanding.",
                  icon: Heart,
                },
                {
                  title: "Continuous Innovation",
                  description: "Regular updates to teaching methods and materials.",
                  icon: BookOpen,
                },
              ].map((value, index) => (
                <div key={index} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{value.description}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Profile */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Meet Your Tutor</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Experienced Hindi Language Expert
            </p>
          </div>

          <div className="mt-10">
            <div className="prose prose-indigo mx-auto text-gray-500">
              <p className="text-lg">
                With years of experience in teaching Hindi to students of all ages, our tutor brings expertise, patience, and a passion for the Hindi language to every lesson. Specializing in both children's education and adult language coaching,
                we understand the unique challenges learners face at different stages.
              </p>
              <p className="text-lg mt-4">
                Our teaching philosophy combines traditional language learning methods with modern, interactive techniques to create an engaging and effective learning experience. Whether you're a complete beginner or looking to advance your Hindi skills,
                we're here to guide you on your language learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;