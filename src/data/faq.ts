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
      "Our films average a 73% completion rate (vs. 37% industry average) because they don't sound like marketing. Clients see increased engagement, better recruitment results, and stronger investor interest.",
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
          "Every project includes discovery sessions, professional filming with cinema equipment, color grading, sound design, and multiple revisions to ensure we capture your story perfectly.",
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
          "Our films average a 73% completion rate (vs. 37% industry average) because they don't sound like marketing. Clients see increased engagement, better recruitment results, and stronger investor interest.",
      },
      {
        question: "How do I measure the success of my film?",
        answer:
          "We track metrics like view completion, shares, and most importantly, business outcomes like inquiries, applications, or sales that result from the film.",
      },
    ],
  },
];
