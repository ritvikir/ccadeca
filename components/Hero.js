import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-3/4 bg-[url('https://assets-global.website-files.com/600faaecb03ce57f6fa98050/616f727efd1a14625e6a9aac_DECA_042817-63.jpg')] bg-cover bg-center">
        <div className="h-full flex justify-center items-center bg-blue-600/30 backdrop-brightness-75">
          <div>
            <h1 className="text-white font-bold text-center text-6xl">Canyon Crest Academy DECA</h1>
            <h1 className="text-white font-semibold mt-2 text-center text-2xl">Wednesday Lunch - Gym Classroom</h1>

          </div>

        </div>
        <div id="about" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
            <div className="mt-16 flex">
              <div className="w-1/2 pr-4">
                <h1 className="text-4xl font-bold mb-4 text-blue-500">
                  About DECA
                </h1>
                <p className="text-xl text-gray-700">
                  DECA, which stands for Distributive Education Clubs of
                  America, is a dynamic business club at Canyon Crest Academy.
                  Our club is dedicated to fostering leadership,
                  entrepreneurship, and professional development among students.
                  We provide a platform for students to engage in real-world
                  business experiences, participate in competitions, and connect
                  with industry leaders.
                </p>
              </div>
              <div className="w-1/2 pl-10 flex flex-col items-end space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <img src="IMG_7355.jpeg" alt="DECA Event" />
                  <p className="text-sm text-gray-500 p-2 bg-gray-200">
                    DECA members at a competition
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
