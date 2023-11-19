import Link from "next/link";
import Image from "next/image";

export default function About() {
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
          </div>
        </div>

        <div className="py-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Finance */}
            <div className="flex p-4 border rounded-lg shadow-lg bg-white">
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
            <div className="flex p-4 border rounded-lg shadow-lg bg-white">
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
            <div className="flex p-4 border rounded-lg shadow-lg bg-white">
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
            <div className="flex p-4 border rounded-lg shadow-lg bg-white">
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
            <div className="flex p-4 border rounded-lg shadow-lg bg-white">
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
            <div className="flex p-4 border rounded-lg shadow-lg bg-white">
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
      </div>
    </div>
  );
}
