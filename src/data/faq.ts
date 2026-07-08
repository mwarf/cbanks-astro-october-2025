export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  questions: FAQItem[];
}

// Homepage FAQ - SEO-focused subset (4 questions)
export const homepageFAQ: FAQItem[] = [
  {
    question: "What's the typical timeline for a project?",
    answer:
      "Our brand documentaries typically take 4-6 weeks from start to finish. This includes 1-2 weeks of discovery to find the real story, 2-3 days of production, and 2-3 weeks of post-production.",
  },
  {
    question: "What's included in the production process?",
    answer:
      "Every project includes discovery sessions, professional filming with cinema equipment, color grading, sound design, and multiple revisions to ensure we capture your story perfectly.",
  },
  {
    question: "What's the investment for a brand documentary?",
    answer:
      "Our brand documentaries start at $15K and include everything from discovery to final delivery. Story packages start at $8K for shorter-form content.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "People watch these films because they don't sound like marketing. Clients use them to attract the right hires, build trust with investors, and give their communities a reason to care. We define what success looks like for you during discovery.",
  },
  {
    question: "Where do you film?",
    answer:
      "We're based in Lethbridge and work across Southern Alberta — Medicine Hat, Taber, Cardston, and everywhere in between. We regularly travel within 300km of Lethbridge, including Calgary and Cranbrook.",
  },
];

// Homepage FAQ wrapped in category structure for component
export const homepageFAQCategories: FAQCategory[] = [
  {
    title: "Process",
    questions: [
      homepageFAQ[0], // Timeline
      homepageFAQ[1], // Production process
    ],
  },
  {
    title: "Investment",
    questions: [
      homepageFAQ[2], // Investment
    ],
  },
  {
    title: "Results",
    questions: [
      homepageFAQ[3], // Results
    ],
  },
  {
    title: "Location",
    questions: [
      homepageFAQ[4], // Where we film
    ],
  },
];

// Full FAQ page - All questions categorized
export const fullFAQ: FAQCategory[] = [
  {
    title: "Process",
    questions: [
      {
        question: "What's the typical timeline for a project?",
        answer:
          "Our brand documentaries typically take 4-6 weeks from start to finish. This includes 1-2 weeks of discovery to find the real story, 2-3 days of production, and 2-3 weeks of post-production.",
      },
      {
        question: "How do you find the story worth telling?",
        answer:
          "We spend time understanding your business, your values, and what makes you unique. We interview key team members and look for the authentic moments that resonate with your audience.",
      },
      {
        question: "What's included in the production process?",
        answer:
          "Every project includes discovery sessions, filming with cinema equipment, color grading, sound design, and revisions until the film feels true.",
      },
    ],
  },
  {
    title: "Investment",
    questions: [
      {
        question: "What's the investment for a brand documentary?",
        answer:
          "Our brand documentaries start at $15K and include everything from discovery to final delivery. Story packages start at $8K for shorter-form content.",
      },
      {
        question: "Do you offer custom packages?",
        answer:
          "Yes, we create custom packages based on your specific needs. We typically take on 12-15 projects per year to ensure quality, and usually book 2-3 months out.",
      },
    ],
  },
  {
    title: "Results",
    questions: [
      {
        question: "What kind of results can I expect?",
        answer:
          "People watch these films because they don't sound like marketing. Clients use them to attract the right hires, build trust with investors, and give their communities a reason to care. We define what success looks like for you during discovery.",
      },
      {
        question: "How do I measure the success of my film?",
        answer:
          "We track metrics like view completion, shares, and most importantly, business outcomes like inquiries, applications, or sales that result from the film.",
      },
    ],
  },
  {
    title: "Location",
    questions: [
      {
        question: "Where is Coalbanks based?",
        answer:
          "We're a Lethbridge videography company — our studio is at 1401 28 St N in Lethbridge, Alberta. We've been filming Southern Alberta businesses, municipalities, and nonprofits since 2019.",
      },
      {
        question: "Do you travel outside Lethbridge?",
        answer:
          "Yes. We regularly film within 300km of Lethbridge — Medicine Hat, Taber, Cardston, Calgary, and Cranbrook are all in range. Travel fees may apply for projects outside the immediate area, and we'll spell that out in the quote.",
      },
    ],
  },
];
