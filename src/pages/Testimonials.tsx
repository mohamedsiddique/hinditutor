import { FC } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: FC = () => {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "My children love their Hindi classes! The interactive approach makes learning fun and effective. They've made remarkable progress in just a few months.",
      rating: 5
    },
    {
      name: "John D.",
      role: "Business Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "The personalized coaching helped me gain confidence in speaking Hindi for business meetings. The cultural context provided was invaluable.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "I started as a complete beginner, and now I can confidently hold basic conversations in Hindi. The teaching method is very effective.",
      rating: 5
    },
    {
      name: "Raj P.",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "The structured approach to teaching Hindi has helped my daughter maintain her connection with our culture. She enjoys every class.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Student Success Stories
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
              Hear from our students about their Hindi learning journey with us.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex text-indigo-600 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-3 -left-3 h-8 w-8 text-gray-200 transform -rotate-180" />
                      <p className="text-gray-600 italic pl-8">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-gray-900">
              Ready to Start Your Hindi Learning Journey?
            </h3>
            <p className="mt-4 text-lg text-gray-500">
              Join our growing community of successful Hindi learners.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Book Your Trial Lesson
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;