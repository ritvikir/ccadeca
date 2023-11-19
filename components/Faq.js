import React from 'react';
const faqs = [
    {
      question: 'What is DECA and its main objective?',
      answer: 'DECA is an international association of high school and college students aimed at preparing emerging leaders and entrepreneurs in marketing, finance, hospitality, and management.'
    },
    {
      question: 'How can I join the DECA club?',
      answer: 'Students can join DECA by signing up during the club recruitment period at the beginning of the academic year or contacting the club officers for more details.'
    },
    {
      question: 'What types of activities and events does DECA organize?',
      answer: 'DECA organizes a variety of activities including business competitions, leadership conferences, community service projects, and workshops with industry professionals.'
    },
    {
      question: 'Are there any prerequisites to join DECA?',
      answer: 'There are no specific prerequisites to join DECA. However, a keen interest in business, entrepreneurship, and leadership is highly beneficial.'
    },
    {
      question: 'How does DECA prepare students for professional careers?',
      answer: 'DECA provides practical experiences through competitions and networking events, helping students develop skills in communication, leadership, and business management.'
    },
    {
      question: 'What are DECA competitive events like?',
      answer: 'DECA’s competitive events challenge students in various business scenarios, including role plays, written projects, and presentations, judged by industry professionals.'
    },
    {
      question: 'Are there leadership opportunities within DECA?',
      answer: 'Yes, students can take on leadership roles at local, state, and international levels, gaining invaluable experience in managing teams, projects, and events.'
    },
  ];

export default function FAQs() {
  return (
    <div id="FAQs" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-10">
      <h1 className="text-4xl font-bold mb-10 text-blue-500">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
          <p className="text-md text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
