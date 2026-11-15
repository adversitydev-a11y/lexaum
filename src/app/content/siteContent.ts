export const siteContent = {
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      {
        label: "Services",
        href: "/services",
        children: [
          {
            label: "Legal Operations Support - India & International",
            href: "/services/legal-operations",
          },
          {
            label: "Property Legal Services - Individuals & Businesses",
            href: "/services/property",
          },
        ],
      },
      { label: "Contact", href: "/contact" },
    ],
    cta: "Discuss Your Requirement",
  },

  footer: {
    description:
      "Lexaum LLP provides legal operations support, legal research, drafting, document review, contract management, litigation and compliance support, paralegal assistance, administrative support, and property-related legal assistance for clients in India and abroad.",
    companyLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    serviceLinks: [
      {
        label: "Legal Operations Support - India & International",
        href: "/services/legal-operations",
      },
      {
        label: "Property Legal Services - Individuals & Businesses",
        href: "/services/property",
      },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "#" },
      { label: "X", href: "#" },
      { label: "Facebook", href: "#" },
    ],
    contact: {
      address: "Bangalore, Karnataka, India",
      phone: "+91 827 771 0523",
      phoneHref: "tel:+918277710523",
      emails: ["info@lexaumllp.com"],
      workingHours: "8:00 AM - 8:00 PM",
    },
    copyright: "2026 Lexaum LLP. All Rights Reserved.",
    designedBy: "Adversity Solutions",
    designedByHref: "https://adversitysolutions.in",
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },

  blog: {
    title: "Blogs",
    description:
      "Read practical insights on legal operations, documentation, compliance, property assistance, and the evolving legal ecosystem.",
  },

  home: {
    hero: {
      eyebrow: "Integrated Legal Solutions",
      titlePrefix: "Legal Operations Support for",
      highlightedTitle: "Law Firms",
      titleSuffix: "& Businesses",
      description:
        "Lexaum LLP provides process-driven legal operations support, research, drafting, document review, contract management, compliance support, and property-related legal assistance for clients in India and abroad.",
      primaryCta: "Discuss Your Requirement",
      secondaryCta: "Explore Services",
    },

    why: {
      eyebrow: "Why Choose Us",
      titlePrefix: "Why Lexaum",
      highlightedTitle: "LLP",
      description:
        "Reliable, flexible, and process-driven legal support designed around the practical requirements of every client.",
      cards: [
        {
          title: "Process-Driven Support",
          desc: "Structured legal support designed to help clients manage documentation, workflows, and operational legal requirements efficiently.",
          delayClass: "delay-100",
        },
        {
          title: "Tailored Assistance",
          desc: "Flexible legal support aligned with each client's unique objectives, internal workflows, timelines, and requirements.",
          delayClass: "delay-200",
        },
        {
          title: "International Reach",
          desc: "Supporting law firms, legal teams, businesses, and individuals in India, the United Kingdom, the United States, and Europe.",
          delayClass: "delay-300",
        },
        {
          title: "Precision & Integrity",
          desc: "A consistent focus on accuracy, confidentiality, professional responsibility, and high-quality service delivery.",
          delayClass: "delay-400",
        },
      ],
    },

    practice: {
      eyebrow: "Our Service Areas",
      titlePrefix: "Comprehensive",
      highlightedTitle: "Legal Support",
      description:
        "Lexaum LLP provides structured legal operations support and property-related legal assistance for law firms, legal teams, businesses, organisations, and individuals in India and abroad.",
      areas: [
        {
          number: "01",
          category: "Legal Operations Support - India & International",
          title: "Legal Operations Support - India & International",
          desc: "Structured legal operations support for law firms, legal teams, businesses, and organisations in India and international markets.",
          previewServices: [
            "Legal Operations Support",
            "Legal Research",
            "Drafting & Document Review",
            "Contract Management",
            "Litigation & Compliance Support",
          ],
          href: "/services/legal-operations",
          cta: "Explore Legal Operations Support",
          imageKey: "international",
          delayClass: "delay-100",
        },
        {
          number: "02",
          category: "Property Legal Services - Individuals & Businesses",
          title: "Property Legal Services - Individuals & Businesses",
          desc: "Property-related legal assistance for individuals and businesses requiring due diligence, documentation, registration, and procedural support.",
          previewServices: [
            "Property Due Diligence",
            "Property-Related Drafting",
            "Registration Assistance",
            "EC Procurement",
            "e-Khata Procurement & Transfer",
          ],
          href: "/services/property",
          cta: "Explore Property Legal Services",
          imageKey: "property",
          delayClass: "delay-200",
        },
      ],
      bottomCta: {
        title: "Need support tailored to your requirements?",
        text: "Our team works with clients to create flexible legal support models aligned with their objectives, workflows, and operational needs.",
        button: "Discuss Your Requirement",
        href: "/contact",
      },
    },

    about: {
      eyebrow: "About Lexaum LLP",
      titlePrefix: "Built for the",
      highlightedTitle: "Modern Legal Ecosystem",
      description:
        "Founded by a passionate lawyer, Lexaum LLP is a Bangalore-based Legal Process Outsourcing company created to help law firms, legal teams, businesses, and individuals access dependable, tailored, and process-driven legal support.",
      features: [
        {
          title: "Lawyer-Led Foundation",
          desc: "Founded with a vision to transform the way legal services are delivered in a changing legal ecosystem.",
        },
        {
          title: "Practical Legal Support",
          desc: "High-quality support that helps clients streamline operations, improve turnaround times, and focus on their core priorities.",
        },
        {
          title: "Tailored Delivery",
          desc: "Flexible solutions designed around the distinct objectives, workflows, and requirements of every client.",
        },
        {
          title: "Long-Term Partnership",
          desc: "A commitment to becoming a trusted extension of client teams through precision, integrity, and excellence.",
        },
      ],
      cta: "Learn More",
      imageAlt: "Lexaum LLP Office",
    },

    testimonials: {
      eyebrow: "Our Approach",
      titlePrefix: "Tailored to Meet the",
      highlightedTitle: "Client Needs",
      items: [
        {
          id: "testimonial-1",
          text: "I approached Ma’am for the legal verification of a property, and she carried out a thorough review of all the relevant documents. She guided me clearly throughout the process and helped me understand the legal aspects with confidence.\n\nI strongly recommend her for property-related legal verification and guidance.",
          clientType: "Property Assistance",
          clientName: "Narayana Phanikumar Olety",
          clientRole: "Validation Manager | Semiconductor Professional",
          imageKey: "narayana",
        },
        {
          id: "testimonial-2",
          text: "Flexible legal assistance aligned with client workflows, objectives, timelines, and documentation requirements.",
          clientType: "Tailored Legal Support",
        },
        {
          id: "testimonial-3",
          text: "Property-related legal assistance focused on organised documentation, procedural support, and greater clarity.",
          clientType: "Property Assistance",
        },
      ],
    },

    cta: {
      titlePrefix: "Need",
      highlightedTitle: "Legal Support",
      description:
        "Connect with Lexaum LLP for legal operations support, legal research, drafting, document review, contract management, compliance assistance, or property-related legal services.",
      primary: "Discuss Your Requirement",
      secondary: "Call Us",
    },
  },

  about: {
    hero: {
      eyebrow: "About Us",
      title: "About Lexaum LLP",
      subtitle:
        "A Bangalore-based Legal Process Outsourcing company founded by a passionate lawyer with a vision to transform the way legal services are delivered.",
      cta: { label: "Contact Us", href: "/contact" },
      secondaryCta: { label: "Explore Services", href: "/services" },
    },

    overview: {
      label: "About Lexaum LLP",
      titleBefore: "Who We",
      titleMiddle: "Are",
      titleAfter: "& What We",
      titleEnd: "Do",
      description:
        "Lexaum LLP is a Bangalore-based Legal Process Outsourcing company built for the modern legal ecosystem. We believe that law firms and businesses should be able to focus on strategy, advocacy, and growth while relying on trusted partners for efficient legal support. Our process-driven legal solutions are designed to streamline operations, improve turnaround times, and create greater value for clients.",
      cards: [
        {
          title: "Who We Are",
          desc: "A Bangalore-based Legal Process Outsourcing company founded by a passionate lawyer to support the evolving needs of modern legal teams and businesses.",
        },
        {
          title: "What We Do",
          desc: "We provide legal operations support, research, drafting, document review, contract management, compliance support, paralegal support, and administrative legal assistance.",
        },
        {
          title: "How We Work",
          desc: "Our solutions are tailored to each client's requirements, ensuring practical, flexible, and cost-effective support aligned with their workflows.",
        },
        {
          title: "Who We Support",
          desc: "Law firms, legal teams, businesses, organisations, and individuals within India and across the United Kingdom, United States, and Europe.",
        },
      ],
      imageAlt: "Lexaum LLP Office",
    },

    commitment: {
      label: "Our Commitment",
      titleFirst: "Vision",
      titleSecond: "Mission",
      visionTitle: "Our Vision",
      visionText:
        "To become a trusted extension of our clients' teams and a long-term partner in their success.",
      missionTitle: "Our Mission",
      missionText:
        "To deliver exceptional legal support with precision, integrity, practical understanding, and a relentless focus on excellence.",
    },

    values: {
      label: "Our Foundation",
      title: "Core Values",
      items: [
        {
          label: "Precision",
          desc: "Maintaining clarity, accuracy, and attention to detail across every legal support workflow.",
        },
        {
          label: "Integrity",
          desc: "Approaching every engagement with professional responsibility, discretion, and dependable service.",
        },
        {
          label: "Flexibility",
          desc: "Tailoring legal support to the distinct objectives, workflows, and operational needs of each client.",
        },
        {
          label: "Excellence",
          desc: "Delivering high-quality legal support through process-driven work and a continued commitment to improvement.",
        },
      ],
    },

    whyChoose: {
      label: "Why Lexaum LLP",
      titlePrefix: "Why Choose",
      highlightedTitle: "Lexaum LLP",
      items: [
        {
          title: "Modern Legal Support Model",
          desc: "Built for the evolving legal ecosystem and the operational realities of law firms, legal teams, and businesses.",
        },
        {
          title: "Process-Driven Delivery",
          desc: "Structured workflows designed to help clients manage legal tasks, documentation, and operational requirements efficiently.",
        },
        {
          title: "Tailored Client Support",
          desc: "Flexible solutions developed around each client's requirements, objectives, systems, and working style.",
        },
        {
          title: "Practical & Cost-Effective",
          desc: "Legal support focused on improving operational efficiency and creating greater value for clients.",
        },
        {
          title: "International Market Support",
          desc: "Serving clients in India, the United Kingdom, the United States, and Europe with dependable legal support.",
        },
        {
          title: "Long-Term Partnership Approach",
          desc: "Focused on becoming a trusted extension of client teams through consistent quality, integrity, and reliability.",
        },
      ],
    },

    cta: {
      title: "Ready to Discuss Your Legal Requirements?",
      text: "Connect with Lexaum LLP to explore legal support tailored to your objectives, workflows, documentation needs, and operational requirements.",
      primary: { label: "Discuss Your Requirement", href: "/contact" },
      secondary: { label: "Call Us", href: "tel:+918277710523" },
    },
  },

  services: {
    hero: {
      eyebrow: "Our Services",
      title: "Legal Support Built Around the Way You Work",
      subtitle:
        "Lexaum LLP provides end-to-end legal operations and legal support services to law firms, legal teams, businesses, organisations, and individuals in India and abroad. Our approach is process-driven, flexible, practical, and tailored to the needs of every client.",
      cta: { label: "Discuss Your Requirement", href: "/contact" },
      secondaryCta: { label: "Explore Our Services", href: "#service-overview" },
      trustStatement:
        "Supporting clients across India, the United Kingdom, the United States, and Europe.",
      visualEyebrow: "Legal Operations",
      visualText: "Structured support with calm, precise delivery.",
    },

    index: [
      { label: "Legal Operations Support - India & International", href: "#legal-operations-support" },
      { label: "Property Legal Services - Individuals & Businesses", href: "#property-support" },
      { label: "Customised Legal Support", href: "#custom-support" },
    ],

    overview: {
      eyebrow: "What We Do",
      title: "Structured Legal Support Across Core Requirements",
      body:
        "Our services include legal operations support, legal research, drafting, document review, contract management, litigation and compliance support, paralegal assistance, administrative support, and customised legal solutions based on each client’s requirements.",
      matrix: [
        "Legal Operations Support",
        "Legal Research",
        "Drafting",
        "Document Review",
        "Contract Management",
        "Litigation Support",
        "Compliance Support",
        "Paralegal Support",
        "Administrative Legal Support",
        "Customised Legal Support",
      ],
    },

    categories: [
      {
        id: "legal-operations-support",
        number: "01",
        label: "01 / Legal Operations",
        badgeLabel: "India & International",
        badgeTitle: "Legal Support",
        title: "Legal Operations Support - India & International",
        heading: "Legal Operations Support - India & International",
        intro:
          "We provide structured legal operations support to law firms, legal teams, businesses, and organisations in India and international markets.",
        statement:
          "Our legal operations support is tailored around client workflows, documentation needs, compliance requirements, and business objectives.",
        href: "/services/legal-operations",
        cta: "Explore Legal Operations Support",
        imageKey: "international",
        services: [
          "Legal Operations Support",
          "Legal Research",
          "Drafting",
          "Document Review",
          "Contract Management",
          "Litigation and Compliance Support",
          "Paralegal and Administrative Support",
          "Customised Legal Support as per the Needs of the Business",
        ],
      },
      {
        id: "property-support",
        number: "02",
        label: "02 / Property",
        badgeLabel: "Individuals & Businesses",
        badgeTitle: "Legal Assistance",
        title: "Property Legal Services - Individuals & Businesses",
        heading: "Property Legal Services - Individuals & Businesses",
        intro:
          "Lexaum LLP assists individuals and businesses with property-related legal processes, documentation, verification, and registration support.",
        statement:
          "Our property law assistance is designed to help clients navigate important property transactions with greater clarity, organised documentation, and reliable procedural support.",
        href: "/services/property",
        cta: "Explore Property Assistance",
        imageKey: "property",
        services: [
          "Due Diligence",
          "Drafting",
          "Property Registration Assistance",
          "EC Procurement",
          "Tax Payment Assistance",
          "E-Khata Procurement and Transfer",
        ],
      },
    ],

    customSupport: {
      id: "custom-support",
      eyebrow: "Flexible Engagement Models",
      title: "Customised Legal Support That Adapts to Your Needs",
      body:
        "Every business has different legal, operational, and compliance requirements. Lexaum LLP provides customised legal support solutions based on the specific needs of each client.",
      supportingText:
        "Whether you require ongoing legal operations assistance, project-based documentation support, contract review, compliance coordination, property-related assistance, or administrative legal support, our team works closely with you to create a practical and efficient engagement model.",
      cta: "Discuss Your Requirement",
      options: [
        "Ongoing Legal Operations Support",
        "Project-Based Documentation Support",
        "Contract & Compliance Coordination",
        "Property & Administrative Legal Assistance",
      ],
    },

    consultation: {
      label: "Next Step",
      titlePrefix: "Find the Legal Support",
      highlightedTitle: "That Fits",
      titleSuffix: "Your Requirement",
      text: "Share your legal, operational, documentation, compliance, or property-related requirement with Lexaum LLP. Our team will guide you toward a practical and tailored support solution.",
      primary: "Discuss Your Requirement",
      secondary: "Contact Us",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact Lexaum LLP",
      title: "Legal Support Begins With a Clear Conversation.",
      subtitle:
        "Whether you require ongoing legal operations support, legal research, drafting, document review, contract management, compliance coordination, property-related assistance, or customised legal support, our team is here to understand your requirement and guide you towards the right next step.",
      cta: { label: "Submit an Enquiry", href: "#enquiry" },
      supportingLine:
        "Supporting law firms, legal teams, businesses, organisations, and individuals across India and international markets.",
    },

    officeLabel: "Connect With Us",
    officeTitle: "Start a Conversation With Our Team",
    officeIntro:
      "Every legal requirement is different. Share the nature of your requirement with us, and we will help you understand the most suitable support model based on your objectives, documentation needs, workflow, and timeline.",

    details: [
      {
        title: "Bangalore Office",
        content: "Bangalore, Karnataka, India",
        link: null,
      },
      {
        title: "Call Us",
        content: "+91 827 771 0523",
        desc: "Available for enquiries during working hours.",
        link: "tel:+918277710523",
      },
      {
        title: "Email",
        content: "info@lexaumllp.com",
        link: "mailto:info@lexaumllp.com",
      },
      {
        title: "Office Hours",
        content: "Monday to Saturday",
        desc: "8:00 AM - 8:00 PM",
        link: null,
      },
    ],

    form: {
      sectionLabel: "Submit an Enquiry",
      titlePrefix: "Tell Us How We Can",
      highlightedTitle: "Help",
      intro:
        "Please share a brief overview of your requirement. Our team will review your enquiry and get back to you with the appropriate next steps.",
      successTitle: "Thank You for Reaching Out",
      successText:
        "Your enquiry has been received successfully. Our team will review the details shared and get back to you as soon as possible.",
      successButton: "Return to Home",
      fields: {
        name: "Full Name *",
        email: "Email Address *",
        phone: "Phone Number *",
        service: "Select a Service",
        message: "Tell Us About Your Requirement",
      },
      placeholders: {
        name: "Enter your full name",
        email: "Enter your email address",
        phone: "Enter your contact number",
        service: "Choose the service you need",
        message:
          "Briefly describe the legal support, documentation, property-related assistance, or operational requirement you need help with.",
      },
      consent:
        "By submitting this enquiry, you agree that Lexaum LLP may contact you regarding your requirement. Please do not share highly sensitive, confidential, or original legal documents through this form.",
      submit: "Send Enquiry",
      serviceOptions: [
        "Legal Operations Support - India & International",
        "Legal Research",
        "Drafting",
        "Document Review",
        "Contract Management",
        "Litigation and Compliance Support",
        "Paralegal and Administrative Support",
        "Customised Legal Support as per the Needs of the Business",
        "Property Legal Services - Individuals & Businesses",
        "Due Diligence",
        "Property Drafting",
        "Property Registration Assistance",
        "EC Procurement",
        "Tax Payment Assistance",
        "E-Khata Procurement and Transfer",
        "General Enquiry",
      ],
    },

    map: {
      title: "Lexaum LLP",
      address: "Bangalore, Karnataka, India",
      href: "https://maps.google.com/?q=Bangalore+560085",
      cta: "Get Directions",
    },
  },

  faq: {
    services: {
      eyebrow: "Service FAQs",
      title: "General Services FAQs",
      intro:
        "Clear answers about Lexaum LLP's legal operations support, documentation support, compliance assistance, and property-related legal services.",
      items: [
        {
          question: "What services does Lexaum LLP provide?",
          answer:
            "Lexaum LLP provides legal operations support, legal research, drafting, document review, contract management, litigation and compliance support, paralegal and administrative support, customised legal support, and property-related legal assistance.",
        },
        {
          question: "Who can use Lexaum LLP's services?",
          answer:
            "Our services are designed for law firms, legal teams, businesses, companies, organisations, and individuals in India and abroad.",
        },
        {
          question: "Do you provide support for international clients?",
          answer:
            "Yes. Lexaum LLP works with clients in India and across the United Kingdom, United States, and Europe.",
        },
        {
          question: "Can legal support be customised for our business?",
          answer:
            "Yes. Lexaum LLP provides customised legal support based on the specific requirements, objectives, workflows, and needs of each client.",
        },
        {
          question: "How do I get started?",
          answer:
            "Share your requirement through our contact form or contact details. Our team will review your needs and guide you toward the most suitable support service.",
        },
      ],
    },

    international: {
      eyebrow: "International FAQs",
      title: "Questions About International Legal Support",
      intro:
        "Answers for international law firms, legal teams, businesses, and organisations looking for structured legal operations support.",
      items: [
        {
          question: "Which international markets do you support?",
          answer:
            "Lexaum LLP supports clients in the United Kingdom, United States, Europe, India, and other international markets based on the scope of the engagement.",
        },
        {
          question: "What international legal support services do you provide?",
          answer:
            "We provide legal operations support, legal research, drafting, document review, contract management, litigation support, compliance support, paralegal assistance, administrative support, and customised legal support.",
        },
        {
          question: "Can you support ongoing legal workflows?",
          answer:
            "Yes. Lexaum LLP can provide ongoing legal operations support as well as project-based support, depending on the client's requirements.",
        },
        {
          question: "Do you handle confidential documents?",
          answer:
            "Lexaum LLP handles legal documents, records, and business information with professional discretion and controlled, process-driven workflows.",
        },
        {
          question: "Do you replace legal representation?",
          answer:
            "No. Lexaum LLP provides legal operations and support services. The scope of support is structured around the client's operational and documentation requirements.",
        },
      ],
    },

    india: {
      eyebrow: "India Support FAQs",
      title: "Questions About India Legal Operations",
      intro:
        "Practical answers for Indian law firms, legal teams, businesses, organisations, and individual clients.",
      items: [
        {
          question: "What India legal support services do you provide?",
          answer:
            "Lexaum LLP provides legal operations support, research, drafting, document review, contract management, litigation and compliance support, paralegal assistance, administrative support, and customised legal support.",
        },
        {
          question: "Can you assist businesses with legal documentation?",
          answer:
            "Yes. We provide drafting, document review, contract management support, compliance documentation assistance, and customised legal support based on business needs.",
        },
        {
          question: "Do you support law firms and legal teams in India?",
          answer:
            "Yes. Lexaum LLP supports law firms, legal teams, businesses, companies, and organisations with process-driven legal operations and documentation support.",
        },
        {
          question: "Can services be customised for our workflow?",
          answer:
            "Yes. Our legal support can be tailored based on your operational needs, documentation requirements, internal workflows, and engagement scope.",
        },
        {
          question: "How are turnaround timelines decided?",
          answer:
            "Timelines depend on the scope of work, type of legal support required, availability of information, and complexity of the requirement. Our team will discuss this after reviewing your enquiry.",
        },
      ],
    },

    property: {
      eyebrow: "Property FAQs",
      title: "Questions About Property Legal Assistance",
      intro:
        "Useful answers for individuals and businesses seeking support with property due diligence, documentation, registration, EC procurement, tax payment, or e-Khata services.",
      items: [
        {
          question: "What property-related services does Lexaum LLP provide?",
          answer:
            "Lexaum LLP assists with property due diligence, drafting, property registration assistance, EC procurement, tax payment assistance, e-Khata procurement, and e-Khata transfer assistance.",
        },
        {
          question: "Can you assist with property due diligence?",
          answer:
            "Yes. We provide support for property due diligence and document-related review based on the specific requirements of the client and property matter.",
        },
        {
          question: "Do you assist with property registration?",
          answer:
            "Yes. Lexaum LLP provides property registration assistance, including support with applicable documentation and procedural requirements.",
        },
        {
          question: "Can you help procure an Encumbrance Certificate?",
          answer:
            "Yes. EC procurement assistance is part of our property-related legal support services.",
        },
        {
          question: "Do you assist with e-Khata procurement and transfer?",
          answer:
            "Yes. Lexaum LLP provides assistance with e-Khata procurement and e-Khata transfer requirements.",
        },
      ],
    },
  },

  careers: {
    hero: {
      eyebrow: "Careers",
      title: "Build Your Legal Career with Lexaum LLP",
      subtitle:
        "Join a growing legal solutions firm focused on legal operations support, legal research, drafting, documentation, property assistance, compliance support, and professional client service.",
      cta: "Apply Now",
    },

    why: {
      eyebrow: "Why Join Us",
      title: "Why Work at Lexaum LLP",
      cta: "View Open Positions",
      items: [
        {
          title: "Learning-Oriented Environment",
          desc: "Build legal knowledge through structured work, professional exposure, and practical legal support assignments.",
        },
        {
          title: "Practical Legal Exposure",
          desc: "Work across legal operations, drafting, document review, property assistance, research, and compliance support.",
        },
        {
          title: "Structured Workflows",
          desc: "Develop professional discipline through clear processes, documentation practices, and quality-focused delivery.",
        },
        {
          title: "Client-Focused Practice",
          desc: "Learn the value of professional communication, practical problem-solving, and dependable client service.",
        },
        {
          title: "Documentation Experience",
          desc: "Gain exposure to legal drafting, document review, research, contract-related support, and legal administration.",
        },
        {
          title: "Growth Opportunities",
          desc: "Grow with a legal solutions firm supporting clients across India and international markets.",
        },
      ],
    },

    internship: {
      title: "Internship Program",
      text: "This section invites law students and fresh graduates to apply for internships and gain practical exposure to legal operations, research, drafting, documentation, compliance support, property assistance, and client communication.",
      cta: "Apply for Internship",
      exposureTitle: "Internship Exposure",
      exposureItems: [
        "Legal operations support",
        "Legal research",
        "Drafting and documentation",
        "Compliance support",
        "Property-related legal assistance",
      ],
    },

    openings: {
      eyebrow: "Current Openings",
      title: "Open Positions",
      text: "Currently there are no active openings. You may still share your profile for future opportunities.",
      cta: "Submit Resume",
    },

    form: {
      title: "Application Form",
      intro: "Submit your application and our team will get back to you.",
      successTitle: "Application Submitted",
      successText:
        "Thank you for your interest in Lexaum LLP. Our team will review your application and reach out.",
      labels: {
        name: "Name *",
        email: "Email *",
        phone: "Phone",
        position: "Position Applying For *",
        resume: "Upload Resume",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        phone: "+91 XXXXX XXXXX",
        position: "Position or internship",
        resume: "Click to upload resume (PDF / DOC)",
        message:
          "Tell us about yourself and your interest in Lexaum LLP.",
      },
      submit: "Submit Application",
    },
  },

  faqPage: {
    hero: {
      eyebrow: "FAQs",
      title: "Frequently Asked Questions",
      subtitle:
        "Find answers to common questions about Lexaum LLP's legal operations support, international legal support, documentation services, compliance support, and property-related legal assistance.",
      cta: "Still Have a Question? Contact Us",
    },

    groups: [
      {
        category: "International Legal Support FAQ",
        cta: "Ask About International Support",
        items: [
          {
            q: "Do you support clients in the UK, US, and Europe?",
            a: "Yes. Lexaum LLP works with law firms, legal teams, businesses, and organisations in India, the United Kingdom, the United States, Europe, and other international markets based on the engagement scope.",
          },
          {
            q: "What international legal support services do you provide?",
            a: "We provide legal operations support, legal research, drafting, document review, contract management, litigation support, compliance support, paralegal assistance, administrative support, and customised legal support.",
          },
          {
            q: "Can you support ongoing legal operations work?",
            a: "Yes. Lexaum LLP can support ongoing legal operations requirements as well as project-based legal support, depending on the needs of the client.",
          },
          {
            q: "How do you handle legal documents and sensitive information?",
            a: "Legal documents, records, and business information are handled with professional discretion through controlled and process-driven workflows.",
          },
        ],
      },
      {
        category: "Property Assistance FAQ",
        cta: "Ask About Property Assistance",
        items: [
          {
            q: "What property-related assistance does Lexaum LLP provide?",
            a: "Lexaum LLP provides property due diligence, drafting, property registration assistance, EC procurement, tax payment assistance, e-Khata procurement, and e-Khata transfer assistance.",
          },
          {
            q: "Can you assist with property due diligence?",
            a: "Yes. We provide support for property due diligence and relevant documentation review based on the nature of the property requirement.",
          },
          {
            q: "Can you help with property registration?",
            a: "Yes. Lexaum LLP provides assistance with property registration-related documentation and procedural support.",
          },
          {
            q: "Do you assist with EC procurement?",
            a: "Yes. EC procurement assistance is included within our property-related legal support services.",
          },
          {
            q: "Can you assist with e-Khata procurement or transfer?",
            a: "Yes. Lexaum LLP assists clients with e-Khata procurement and e-Khata transfer requirements.",
          },
        ],
      },
      {
        category: "India Legal Operations FAQ",
        cta: "Ask About India Legal Support",
        items: [
          {
            q: "What legal operations support do you provide in India?",
            a: "Lexaum LLP provides legal operations support, research, drafting, document review, contract management, litigation and compliance support, paralegal support, administrative assistance, and customised legal services.",
          },
          {
            q: "Can you assist businesses with drafting and legal documentation?",
            a: "Yes. We support businesses and organisations with drafting, document review, contract management, legal documentation, and other customised legal support requirements.",
          },
          {
            q: "Do you support law firms and legal teams?",
            a: "Yes. We support law firms, legal teams, businesses, companies, organisations, and individual clients with structured legal operations support.",
          },
          {
            q: "Can you provide customised legal support?",
            a: "Yes. Lexaum LLP provides customised legal support based on the client's specific needs, objectives, workflows, and operational requirements.",
          },
        ],
      },
    ],

    finalCta: {
      title: "Still Have Questions?",
      text: "Our team is happy to understand your requirement and guide you toward the right legal support service.",
      primary: "Contact Us",
      secondary: "Call Us",
      phoneHref: "tel:+918277710523",
    },
  },

  industries: {
    hero: {
      eyebrow: "Who We Support",
      title: "Legal Support for Law Firms, Businesses, Organisations & Individuals",
      subtitle:
        "Lexaum LLP provides structured, tailored legal support for clients with legal operations, documentation, compliance, contract management, and property-related requirements.",
    },

    items: [
      {
        title: "Law Firms",
        desc: "Legal operations support, legal research, drafting, document review, contract management, litigation support, compliance support, paralegal assistance, and administrative legal support.",
        cta: "Enquire for Law Firm Support",
        services: [
          "Legal Research",
          "Drafting",
          "Document Review",
          "Contract Management",
          "Litigation & Compliance Support",
        ],
      },
      {
        title: "Legal Teams",
        desc: "Structured support for in-house legal teams and departments managing operational legal workflows, documentation, contracts, research, and compliance-related requirements.",
        cta: "Enquire for Legal Team Support",
        services: [
          "Legal Operations Support",
          "Document Review",
          "Contract Management",
          "Compliance Support",
          "Administrative Legal Support",
        ],
      },
      {
        title: "Businesses & Companies",
        desc: "Customised legal support for businesses requiring drafting, document review, contract management, legal operations, compliance-related assistance, and administrative support.",
        cta: "Enquire for Business Support",
        services: [
          "Customised Legal Support",
          "Drafting",
          "Contract Management",
          "Document Review",
          "Compliance Support",
        ],
      },
      {
        title: "Organisations",
        desc: "Flexible legal support designed around the practical documentation, workflow, research, contract, compliance, and operational requirements of organisations.",
        cta: "Enquire for Organisation Support",
        services: [
          "Legal Operations",
          "Legal Research",
          "Document Review",
          "Paralegal Support",
          "Administrative Support",
        ],
      },
      {
        title: "Property Buyers & Sellers",
        desc: "Property-related legal assistance for individuals and businesses requiring due diligence, drafting, registration support, EC procurement, tax payment support, or e-Khata assistance.",
        cta: "Enquire for Property Assistance",
        services: [
          "Property Due Diligence",
          "Drafting",
          "Registration Assistance",
          "EC Procurement",
          "e-Khata Assistance",
        ],
      },
      {
        title: "Individual Clients",
        desc: "Practical legal support for individual clients with property-related documentation, due diligence, registration, e-Khata, EC, tax payment, and transfer assistance requirements.",
        cta: "Enquire for Individual Support",
        services: [
          "Due Diligence",
          "Property Drafting",
          "EC Procurement",
          "Tax Payment Assistance",
          "e-Khata Transfer",
        ],
      },
      {
        title: "International Clients",
        desc: "Reliable legal operations support for overseas law firms, legal teams, businesses, and organisations across the United Kingdom, United States, Europe, and other markets.",
        cta: "Enquire for International Support",
        services: [
          "Legal Operations",
          "Legal Research",
          "Document Review",
          "Contract Management",
          "Customised Legal Support",
        ],
      },
    ],

    cta: {
      title: "Find the Right Legal Support",
      text: "Tell us about your legal requirement, workflow, organisation, or property-related need. Our team will guide you toward the appropriate support service.",
      label: "Get in Touch",
    },
  },

  thankYou: {
    hero: {
      eyebrow: "Thank You",
      title: "Thank You for Contacting Us",
      subtitle:
        "We have received your enquiry. Our team will review your requirement and get back to you shortly.",
      cta: { label: "Back to Home", href: "/" },
    },
    titlePrefix: "Your Enquiry Has Been",
    highlightedTitle: "Sent Successfully",
    text: "Thank you for reaching out to Lexaum LLP. We appreciate your interest in our legal support services. One of our team members will review your requirement and contact you shortly.",
  },

  notFound: {
    code: "404",
    title: "Page Not Found",
    text: "The page you are looking for does not exist or has been moved.",
    cta: "Return to Home",
  },

  whatsapp: {
    phone: "918277710523",
    message: "Hello, I need legal support from Lexaum LLP.",
    ariaLabel: "Chat on WhatsApp",
    title: "Chat on WhatsApp",
  },
} as const;

export type SiteContent = typeof siteContent;
