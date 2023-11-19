import React from 'react';

const officers = [
  { name: 'Ruby Gao', position: 'President', imageUrl: '/ruby.jpeg' },
  { name: 'Lynn Huang', position: 'Vice President', imageUrl: '/lynn.png' },
  { name: 'Sydney Danon', position: 'Secretary', imageUrl: '/sydney.png' },
  { name: 'Ritvik Irigireddy', position: 'Treasurer', imageUrl: '/ritvik.jpeg' },
];

export default function MeetYourOfficers() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10 mb-12">
      <h1 className="text-4xl font-bold mb-10 text-blue-500">
        Meet Your Officers
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {officers.map((officer, index) => (
          <div key={index} className="text-center">
            <img
              src={officer.imageUrl}
              alt={`Image of ${officer.name}`}
              className="rounded-full w-40 h-40 mx-auto object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{officer.name}</h2>
            <p className="text-md text-gray-600">{officer.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
