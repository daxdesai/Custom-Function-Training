export type IconName =
  | "video"
  | "code"
  | "clipboard"
  | "workflow"
  | "bug"
  | "review"
  | "message"
  | "interview"
  | "compass"
  | "book"
  | "braces"
  | "database"
  | "heart"
  | "users"
  | "graduate"
  | "shield"
  | "test"
  | "check";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#learn", label: "What You'll Learn" },
  { href: "#practical", label: "Practical Training" },
  { href: "#interview", label: "Interview Preparation" },
  { href: "#audience", label: "Who It's For" },
  { href: "#faq", label: "FAQ" },
] as const;

export const trustHighlights = [
  {
    title: "Live Classes",
    text: "Instructor-led online sessions focused on Custom Function programming.",
  },
  {
    title: "Practical Assignments",
    text: "Hands-on work so you can apply each concept after class.",
  },
  {
    title: "Doubt Support",
    text: "A place to ask questions when a concept or assignment gets stuck.",
  },
  {
    title: "Interview Preparation",
    text: "Practice explaining your approach to technical and situational questions.",
  },
] as const;

export const benefits: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "video",
    title: "Online Live Classes",
    description:
      "Attend live online classes and learn Custom Function concepts with an instructor.",
  },
  {
    icon: "code",
    title: "Practical Custom Function Training",
    description:
      "Spend time on programming itself, working through Custom Function concepts in practice.",
  },
  {
    icon: "clipboard",
    title: "Hands-on Assignments",
    description:
      "Apply what was covered in the live session with assignments you complete yourself.",
  },
  {
    icon: "workflow",
    title: "Real-world Programming Scenarios",
    description:
      "Practice with scenarios that reflect the kinds of problems Custom Function work involves.",
  },
  {
    icon: "bug",
    title: "Debugging & Troubleshooting",
    description:
      "Learn how to trace unexpected behavior and work through errors methodically.",
  },
  {
    icon: "review",
    title: "Code Review Guidance",
    description:
      "See how to read, review, and improve Custom Function code with clearer judgment.",
  },
  {
    icon: "message",
    title: "Doubt-solving Support",
    description:
      "Ask questions and get support while you learn, practice, and debug.",
  },
  {
    icon: "interview",
    title: "Interview Preparation",
    description:
      "Prepare for Custom Function interviews with technical and situational practice.",
  },
  {
    icon: "compass",
    title: "Career-focused Guidance",
    description:
      "Connect the skills you practice with how they are used in professional programming work.",
  },
];

export const learningTopics = [
  {
    number: "01",
    title: "Custom Function Fundamentals",
    summary: "Build a clear base for how Custom Functions are structured and used.",
  },
  {
    number: "02",
    title: "Programming Logic",
    summary: "Practice conditions, flow, and the decisions behind working code.",
  },
  {
    number: "03",
    title: "Creating Custom Functions",
    summary: "Write functions from a requirement through to a working result.",
  },
  {
    number: "04",
    title: "Database-related Custom Functions",
    summary: "Work with Custom Functions that read and respond to stored data.",
  },
  {
    number: "05",
    title: "Edit-check-related Programming",
    summary: "Program checks that catch inconsistent or incomplete data.",
  },
  {
    number: "06",
    title: "Working With Clinical Data",
    summary: "Apply Custom Function logic to clinical data scenarios.",
  },
  {
    number: "07",
    title: "Error Handling",
    summary: "Handle missing values, bad input, and failures without guessing.",
  },
  {
    number: "08",
    title: "Debugging Techniques",
    summary: "Find the line, the data, and the assumption that caused the issue.",
  },
  {
    number: "09",
    title: "Testing & Validation",
    summary: "Check that a function behaves correctly across realistic cases.",
  },
  {
    number: "10",
    title: "Code Review",
    summary: "Review logic for clarity, correctness, and maintainability.",
  },
  {
    number: "11",
    title: "Real-world Programming Scenarios",
    summary: "Put the pieces together on scenarios drawn from practical work.",
  },
] as const;

export const journeySteps: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "book",
    title: "Learn",
    description: "Understand Custom Function concepts in live online classes.",
  },
  {
    icon: "code",
    title: "Practice",
    description: "Apply each concept by writing code in guided exercises.",
  },
  {
    icon: "bug",
    title: "Debug",
    description: "Trace issues, read errors, and fix Custom Function logic.",
  },
  {
    icon: "test",
    title: "Test",
    description: "Validate behavior against expected programming scenarios.",
  },
  {
    icon: "review",
    title: "Improve",
    description: "Refine your code with review guidance and another pass.",
  },
  {
    icon: "shield",
    title: "Build Confidence",
    description: "Explain your approach clearly when the problem changes.",
  },
];

export const assignmentFlow = [
  "Learn Concept",
  "Write Code",
  "Solve Assignment",
  "Debug",
  "Test",
  "Review",
  "Improve",
] as const;

export const interviewTopics = [
  "Custom Functions",
  "Programming Logic",
  "Edit Checks",
  "Debugging",
  "Testing & Validation",
  "Real-world Scenarios",
  "Technical Questions",
  "Situational Questions",
] as const;

export const audience: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "code",
    title: "Professionals working with Custom Functions",
    description:
      "Deepen the programming you already use and practice it with more structure.",
  },
  {
    icon: "heart",
    title: "Clinical Technology Professionals",
    description:
      "Build practical Custom Function skills used around clinical technology work.",
  },
  {
    icon: "database",
    title: "EDC Professionals",
    description:
      "Strengthen programming for edit checks, data checks, and related scenarios.",
  },
  {
    icon: "braces",
    title: "Professionals strengthening programming skills",
    description:
      "Move from familiarity with code toward more confident, reviewable functions.",
  },
  {
    icon: "interview",
    title: "Candidates preparing for Custom Function interviews",
    description:
      "Practice how you explain requirements, logic, and programming scenarios.",
  },
  {
    icon: "graduate",
    title: "Beginners looking for structured Custom Function training",
    description:
      "Start from fundamentals and progress through practice, debugging, and review.",
  },
];

export const whyPoints = [
  "Live online learning",
  "Practical assignments",
  "Real-world scenarios",
  "Debugging practice",
  "Code review",
  "Doubt-solving support",
  "Interview preparation",
  "Career-focused guidance",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Join the Training",
    description: "Enroll or book a demo class and tell us about your experience.",
  },
  {
    number: "02",
    title: "Learn the Concepts",
    description: "Attend live online classes on Custom Function programming.",
  },
  {
    number: "03",
    title: "Practice With Assignments",
    description: "Complete hands-on assignments based on the live sessions.",
  },
  {
    number: "04",
    title: "Solve Real-world Scenarios",
    description: "Apply your code to practical programming situations.",
  },
  {
    number: "05",
    title: "Prepare for Interviews",
    description: "Practice explaining your approach and solving interview scenarios.",
  },
] as const;

export type Testimonial = {
  name: string;
  role: string;
  experience: string;
  quote: string;
};

/**
 * Add real testimonials here. Leave the array empty until you have them.
 * Do not add invented quotes, names, or outcomes.
 */
export const testimonials: Testimonial[] = [];

export const faqs = [
  {
    question: "Who is this Custom Function training for?",
    answer:
      "It is for professionals working with Custom Functions, clinical technology professionals, EDC professionals, people strengthening their programming skills, candidates preparing for Custom Function interviews, and beginners who want structured training.",
  },
  {
    question: "Is this training suitable for beginners?",
    answer:
      "Yes. Beginners looking for structured Custom Function training are part of the audience. The program starts with fundamentals and moves into programming logic, assignments, debugging, and real-world scenarios.",
  },
  {
    question: "Are the classes live?",
    answer:
      "Yes. Custom Function Training is an online program built around live online classes, with practical assignments and support alongside them.",
  },
  {
    question: "Will I receive practical assignments?",
    answer:
      "Yes. Throughout the training you receive hands-on assignments so you can apply the concepts covered during the live sessions.",
  },
  {
    question: "Is debugging covered?",
    answer:
      "Yes. Debugging and troubleshooting are part of the training, including techniques for finding issues, understanding errors, and correcting Custom Function logic.",
  },
  {
    question: "Is interview preparation included?",
    answer:
      "Yes. Interview preparation covers Custom Functions, programming logic, edit checks, debugging, testing and validation, real-world scenarios, technical questions, and situational questions.",
  },
  {
    question: "Will I receive doubt-solving support?",
    answer:
      "Yes. Doubt-solving support is included so you can ask questions while you learn, practice, and work through assignments.",
  },
  {
    question: "How do I enroll?",
    answer:
      "Choose Enroll Now, then share your name, email, and phone in the form. Add your experience level or a note if you want. We will get in touch with you shortly.",
  },
  {
    question: "How can I book a demo class?",
    answer:
      "Choose Book a Demo Class and complete the same form. Tell us what you want to see, and we will follow up about a demo class.",
  },
] as const;

export const experienceLevels = [
  "Beginner",
  "Some programming experience",
  "Working with Custom Functions",
  "Clinical technology or EDC professional",
  "Preparing for interviews",
] as const;

export const leadSources = {
  heroEnroll: "Hero - Enroll Now",
  heroDemo: "Hero - Book Demo",
  navbarEnroll: "Navbar - Enroll Now",
  practical: "Practical - Start Practicing",
  finalEnroll: "Final CTA - Enroll Now",
  finalDemo: "Final CTA - Book Demo",
  footerEnroll: "Footer - Enroll",
  promptEnroll: "Lead Prompt - Enroll Now",
  promptDemo: "Lead Prompt - Book Demo",
  contactForm: "Contact Form",
} as const;

export type CodeToken = {
  text: string;
  tone?: "comment" | "keyword" | "type" | "string" | "plain";
};

export const heroCode: CodeToken[][] = [
  [{ text: "// Visit date cannot be before consent", tone: "comment" }],
  [
    { text: "public", tone: "keyword" },
    { text: " ", tone: "plain" },
    { text: "bool", tone: "keyword" },
    { text: " Evaluate(", tone: "plain" },
  ],
  [
    { text: "    ", tone: "plain" },
    { text: "DataPoint", tone: "type" },
    { text: " visit,", tone: "plain" },
  ],
  [
    { text: "    ", tone: "plain" },
    { text: "DataPoint", tone: "type" },
    { text: " consent)", tone: "plain" },
  ],
  [{ text: "{", tone: "plain" }],
  [
    { text: "    if", tone: "keyword" },
    { text: " (!HasValue(visit) || !HasValue(consent))", tone: "plain" },
  ],
  [
    { text: "        return", tone: "keyword" },
    { text: " false;", tone: "plain" },
  ],
  [{ text: "", tone: "plain" }],
  [
    { text: "    var", tone: "keyword" },
    { text: " visitDate = ParseDate(visit.Data);", tone: "plain" },
  ],
  [
    { text: "    var", tone: "keyword" },
    { text: " consentDate = ParseDate(consent.Data);", tone: "plain" },
  ],
  [{ text: "", tone: "plain" }],
  [
    { text: "    if", tone: "keyword" },
    { text: " (visitDate < consentDate)", tone: "plain" },
  ],
  [{ text: "    {", tone: "plain" }],
  [
    { text: "        visit.AddQuery(", tone: "plain" },
  ],
  [
    { text: '            "Visit date is before consent."', tone: "string" },
  ],
  [{ text: "        );", tone: "plain" }],
  [
    { text: "        return", tone: "keyword" },
    { text: " false;", tone: "plain" },
  ],
  [{ text: "    }", tone: "plain" }],
  [{ text: "", tone: "plain" }],
  [
    { text: "    return", tone: "keyword" },
    { text: " true;", tone: "plain" },
  ],
  [{ text: "}", tone: "plain" }],
];

export const assignmentCode: CodeToken[][] = [
  [{ text: "// Assignment — required result", tone: "comment" }],
  [
    { text: "if", tone: "keyword" },
    { text: " (result.Data.Length == 0 && visit.IsActive)", tone: "plain" },
  ],
  [{ text: "{", tone: "plain" }],
  [
    { text: "    result.AddQuery(", tone: "plain" },
  ],
  [
    { text: '        "Result is required for this visit."', tone: "string" },
  ],
  [{ text: "    );", tone: "plain" }],
  [
    { text: "    return", tone: "keyword" },
    { text: " false;", tone: "plain" },
  ],
  [{ text: "}", tone: "plain" }],
  [{ text: "", tone: "plain" }],
  [
    { text: "return", tone: "keyword" },
    { text: " true;", tone: "plain" },
  ],
];

export const finalHighlights = [
  "Live Classes",
  "Practical Assignments",
  "Doubt Support",
  "Interview Preparation",
] as const;
