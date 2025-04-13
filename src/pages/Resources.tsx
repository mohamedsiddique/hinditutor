import { FC } from 'react';
import { Download, BookOpen, Video, FileText } from 'lucide-react';

const Resources: FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Learning Resources
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
              Access our collection of Hindi learning materials, worksheets, and guides to support your language journey.
            </p>
          </div>
        </div>
      </div>

      {/* Free Resources */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Free Resources</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Essential Learning Materials
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Hindi Alphabet Charts",
                  description: "Downloadable charts for learning Devanagari script.",
                  icon: Download,
                  type: "PDF",
                },
                {
                  title: "Basic Vocabulary Lists",
                  description: "Common words and phrases for beginners.",
                  icon: FileText,
                  type: "PDF",
                },
                {
                  title: "Grammar Guides",
                  description: "Simple explanations of Hindi grammar rules.",
                  icon: BookOpen,
                  type: "PDF",
                },
                {
                  title: "Practice Worksheets",
                  description: "Exercises for different proficiency levels.",
                  icon: FileText,
                  type: "PDF",
                },
              ].map((resource, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <div className="absolute -top-3 -left-3">
                      <resource.icon className="h-12 w-12 text-indigo-600 bg-white rounded-full p-2 shadow" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">{resource.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{resource.description}</p>
                    <span className="mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {resource.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Lessons */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Video Resources</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn with Video Lessons
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: "Hindi Pronunciation Guide",
                  description: "Learn correct pronunciation of Hindi sounds.",
                  duration: "10 mins",
                },
                {
                  title: "Basic Conversations",
                  description: "Common everyday Hindi conversations.",
                  duration: "15 mins",
                },
                {
                  title: "Hindi Numbers",
                  description: "Learn to count in Hindi.",
                  duration: "8 mins",
                },
              ].map((video, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-white p-6 rounded-lg shadow-lg">
                    <div className="absolute -top-3 -left-3">
                      <Video className="h-12 w-12 text-indigo-600 bg-white rounded-full p-2 shadow" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">{video.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{video.description}</p>
                    <span className="mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {video.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;