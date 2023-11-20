import Link from "next/link";
import Image from "next/image";

export default function About() {
  const handle_mouse_move = (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    e.target.style.setProperty('--x', `${ x }px`);
    e.target.style.setProperty('--y', `${ y }px`);
  }

  return (
    <div>
      <div id="about" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
        <div className="mt-16 flex">
          <div className="pr-4">
            <h1 className="text-4xl font-bold mb-4 text-blue-500">
              About DECA
            </h1>
            <p className="text-xl text-gray-700">
              DECA prepares emerging leaders and entrepreneurs in{" "}
              <span className="bg-blue-100 px-1">
                marketing, finance, hospitality, and management
              </span>{" "}
              in high schools and colleges around the globe. The club shapes the
              future by providing hands-on experiences with business simulations
              and real-world challenges. Join DECA to ignite your
              entrepreneurial spirit, forge connections with a dynamic network
              of peers, and leap into a transformative educational experience.
            </p>
            <p className="text-xl mt-4 text-gray-700">
              Here are some clusters to choose from:
            </p>
          </div>
        </div>

        <div className="pb-8 pt-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Finance */}
            <div className="info-card flex p-4 border rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => window.open("https://www.deca.org/career-clusters/finance", "_blank")} onMouseMove={handle_mouse_move}>
              <div>
                <h2 className="font-bold text-lg mb-2 text-green-600">
                  Finance
                </h2>
                <p className="text-sm text-gray-700">
                  Finance is fundamental in teaching how to manage and audit
                  funds, focusing on investment, capital planning, and financial
                  strategies.
                </p>
              </div>
            </div>

            {/* Hospitality and Tourism */}
            <div className="info-card flex p-4 border rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => window.open("https://www.deca.org/career-clusters/hospitality-and-tourism", "_blank")} onMouseMove={handle_mouse_move}>
              <div>
                <h2 className="font-bold text-lg mb-2 text-blue-600">
                  Hospitality & Tourism
                </h2>
                <p className="text-sm text-gray-700">
                  Covering the breadth of customer service and travel
                  management, this cluster is about creating memorable consumer
                  experiences.
                </p>
              </div>
            </div>

            {/* Marketing */}
            <div className="info-card flex p-4 border rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => window.open("https://www.deca.org/career-clusters/marketing", "_blank")} onMouseMove={handle_mouse_move}>
              <div>
                <h2 className="font-bold text-lg mb-2 text-red-600">
                  Marketing
                </h2>
                <p className="text-sm text-gray-700">
                  Delving into the art of customer attraction and retention,
                  marketing is the cornerstone of business visibility and
                  product reach.
                </p>
              </div>
            </div>

            {/* Personal Financial Literacy */}
            <div className="info-card flex p-4 border rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => window.open("https://www.deca.org/career-clusters/personal-financial-literacy", "_blank")} onMouseMove={handle_mouse_move}>
              <div>
                <h2 className="font-bold text-lg mb-2 text-lime-600">
                  Personal Financial Literacy
                </h2>
                <p className="text-sm text-gray-700">
                  Empowering individuals with the knowledge to make informed and
                  effective decisions on financial resources.
                </p>
              </div>
            </div>

            {/* Business Management and Administration */}
            <div className="info-card flex p-4 border rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => window.open("https://www.deca.org/career-clusters/business-management-administration", "_blank")} onMouseMove={handle_mouse_move}>
              <div>
                <h2 className="font-bold text-lg mb-2 text-yellow-600">
                  Business Management & Administration
                </h2>
                <p className="text-sm text-gray-700">
                  This cluster focuses on the essentials of organizational
                  operations, strategic planning, and resource allocation.
                </p>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="info-card flex p-4 border rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => window.open("https://www.deca.org/career-clusters/finance", "_blank")} onMouseMove={handle_mouse_move}>
              <div>
                <h2 className="font-bold text-lg mb-2 text-gray-600">
                  Entrepreneurship
                </h2>
                <p className="text-sm text-gray-700">
                  Entrepreneurship champions the creation and growth of
                  enterprises, instilling a mindset of innovation and risk
                  management.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left pl-1 text-sm">
            <a
              href="https://www.deca.org/hs"
              className="font-semibold text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more here <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="pt-10 lg:flex lg:items-start lg:justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-blue-500">Why DECA?</h1>
            <p className="text-lg text-gray-500">
              DECA is more than just an extracurricular—it&apos;s a global movement
              that prepares students to become leaders in a dynamic world of
              business and entrepreneurship. Here’s why you should join:
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-500 space-y-2">
              <li>
                <strong>Leadership Development:</strong> Hone your leadership
                skills through real-world challenges and executive roles.
              </li>
              <li>
                <strong>Career Preparation:</strong> Gain insights into various
                business industries with hands-on experiences that go beyond the
                classroom.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> Connect with
                like-minded peers and industry professionals who can help you
                along your career path.
              </li>
              <li>
                <strong>Competitive Edge:</strong> Participate in competitive
                events that build confidence and impressive credentials for
                college and job applications.
              </li>
              <li>
                <strong>Entrepreneurial Spirit:</strong> Ignite your innovative
                ideas and learn how to turn them into successful business
                ventures.
              </li>
              <li>
                <strong>Travel Opportunities:</strong> Explore new destinations
                and cultures through DECA&apos;s exclusive conferences and
                competitions held around the globe.
              </li>
              <li>
                <strong>Community Impact:</strong> Make a difference through
                community service initiatives and impact projects that DECA
                organizes.
              </li>
            </ul>
          </div>

          {/* Images Section */}
          <div className="lg:w-1/2 lg:pl-4 mt-8 lg:mt-0">
            {/* Placeholder for images - Replace 'src' with your image paths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                src="/image1.jpeg"
                alt="Image description"
                className="rounded-lg shadow-lg"
                width={500}
                height={500}
                />
              <Image
                src="/image2.jpeg"
                alt="Image description"
                className="rounded-lg shadow-lg"
                width={500}
                height={500}

              />
              <Image
                src="/image3.jpeg"
                alt="Image description"
                className="rounded-lg shadow-lg"
                width={500}
                height={500}


              />
              <Image
                src="/image4.jpeg"
                alt="Image description"
                className="rounded-lg shadow-lg"
                width={500}
                height={500}


              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
