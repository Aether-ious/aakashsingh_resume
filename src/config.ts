export const siteConfig = {
  name: "Aakash",
  title: "Data Science and Analytics Professional",
  description: "Portfolio website",
  accentColor: "#1d4ed8",
  social: {
    email: "aakash0614@gmail.com",
    linkedin: "https://www.linkedin.com/in/aakashjitendra/",
    twitter: "https://x.com/",
    github: "https://github.com/Aether-ious",
  },
  aboutMe:
    " Highly motivated Risk Professional with ~6 years in Data Science and Analytics, specializing in Predictive Modelling and Analytics. Experienced in Model development, and monitoring across Acquisition, Behaviour, Collection, and Recovery domains. Proficient in SAS, SQL, and Python, driving data-driven solutions with strong work ethics and continuous learning mindset.",
  skills: ["Python", "SQL", "SAS"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "iTuring.ai",
      title: "Lead Data Science",
      dateRange: "Oct 2024 - May 2025",
      bullets: [
        "Led a team of data scientists supporting India’s leading life insurer and a top-tier bank, both facing challenges in risk identification and loss ratios.",
        "Own end-to-end pipeline development and modelling for two high-stakes use cases—early death-claim detection and risk modelling for stressed portfolios—while also strengthening team capability.",
        "Built and deployed four ML models for PIRV (early death-claim prediction) across multiple distribution channels. Optimised features, thresholds, and validation processes to boost worst-decile capture while lowering false positives." 
        "Designed and developed a suite of ML models and collection strategies for the bank’s key portfolios, addressing deterioration in their existing Home Loan risk models and stabilising identification accuracy."
        "Trained and onboarded an intern in parallel, creating documentation, walkthroughs, and collaborative workflows to support skill development.",
        "Delivered ~100% lift across key decision metrics for PIRV models and improved loss-ratio outcomes for both organisations"
      ],
    },
    {
      company: "SMFG INDIA CREDIT COMPANY",
      title: "Senior Manager",
      dateRange: "Jul 2022 - Dec 2023",
      bullets: [
        "Build a Two-Wheeler Loan application model and ensure ongoing model performance in collection space.",
        "Developed the logistic-regression acquisition model end-to-end—targeting, data prep, variable selection, modelling, and policy analysis—followed by UAT, scoring code, and BRD delivery. Maintained existing models by fixing glitches, monitoring drift, and working with Collections for smooth operational use.",
      ],
    },
    {
      company: "JP MORGAN CHASE and Co.",
      title: "Senior Analyst",
      dateRange: "Jul 2019 - July 2022",
      bullets: [
        "• Led RCA for a critical issue by partnering with Implementation and Data teams, quantifying impact, resolving data gaps, and establishing monthly model reporting along with a Variables Quality Dashboard using CSI/PSI to flag anomalies.",

        "• Built an XGBoost-based Collection Strategy model end-to-end, including data prep, Random Forest benchmarking, hyperparameter tuning, resilience testing on stressed data, and deployment coordination with Implementation.",

        "• Managed monitoring of Credit Card risk models across Acquisition, Account Management, Collection, and Recovery; delivered monthly performance insights and reports to senior stakeholders, and developed an automated SAS-based reporting system to eliminate manual errors.",
      ],
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology(BHU), Varanasi",
      degree: "Integrated Dual Degree (BTech & MTech)",
      dateRange: "2014 - 2019",
      achievements: [
        "Graduated with 8.4 GPA",
      ],
    },
    {
      school: "Kendriya Vidyalaya Sangathan",
    },
  ],
};
