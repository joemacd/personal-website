import sbmdLogo from "../assets/images/logos/sbmd_logo.jpeg";
import upennLogo from "../assets/images/logos/upenn_logo.png";
import pennLabsLogo from "../assets/images/logos/penn_labs_logo.jpeg";
import xlabLogo from "../assets/images/logos/xlab_logo.png";
import nemosLabLogo from "../assets/images/logos/mines_logo.svg";

export const workExperienceData = [
  {
    company: "Switchboard, MD",
    logo: sbmdLogo,
    role: "Returning SWE Intern",
    period: "May 2025 – Present",
    location: "Remote",
    summary: "Working on voice-to-voice AI systems",
    bullets: [
      "Developing a real-time voice-to-voice AI platform for patient calls—enabling live transcription, smart call routing, and automated transfers to improve care-team responsiveness.",
    ],
    skills: [
      {
        skill: "Python",
        inline: "ci-python",
        skillLink: "https://www.python.org/",
      },
      {
        skill: "Chime SDK",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/chime/chime-sdk/",
      },
      {
        skill: "Amplify",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/amplify/",
      },
      {
        skill: "Lambda",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/lambda/",
      },
      {
        skill: "Bedrock",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/bedrock/",
      },
      {
        skill: "Cognito",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/cognito/",
      },
      {
        skill: "EC2",
        inline: "ci-ec2",
        skillLink: "https://aws.amazon.com/ec2/",
      },

      { skill: "React", inline: "ci-react", skillLink: "https://react.dev/" },
      {
        skill: "TypeScript",
        inline: "ci-typescript",
        skillLink: "https://www.typescriptlang.org/",
      },
      {
        skill: "JavaScript",
        inline: "ci-javascript",
        skillLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        skill: "Twilio",
        skillLink: "https://www.twilio.com/en-us",
      },
      { skill: "Asterisk", skillLink: "https://www.asterisk.org/" },
      {
        skill: "Linux",
        inline: "ci-linux",
        skillLink: "https://www.linux.org/",
      },
      {
        skill: "VoIP",
        skillLink:
          "https://www.fcc.gov/general/voice-over-internet-protocol-voip#:~:text=Voice%20over%20Internet%20Protocol%20(VoIP)%2C%20is%20a%20technology%20that,(or%20analog)%20phone%20line.",
      },
    ],
    link: "https://www.switchboardmd.com/",
  },
  {
    company: "University of Pennsylvania",
    logo: upennLogo,
    role: "Teaching Assistant",
    period: "Jan 2025 – Present",
    location: "Philadelphia, PA",
    summary:
      "Serve as a Teaching Assistant for CIS 1210: Data Structures and Algorithms.",
    bullets: [
      "Conduct weekly recitations, record review guides, hold office hours, grade assignments, and develop course materials.",
      "Appointed to the Written Homework Committee.",
    ],
    skills: [
      { skill: "Data Structures" },
      {
        skill: "Java",
        inline: "ci-java",
        skillLink: "https://www.java.com/en/",
      },
      { skill: "Teaching", inline: "ci-scholar" },
    ],
    link: "https://www.cis.upenn.edu/~cis1210/current/",
  },
  {
    company: "PennLabs",
    logo: pennLabsLogo,
    role: "Android Engineer",
    period: "Jan. 2024 – Present",
    location: "Philadelphia, PA",
    summary:
      "Maintain and develop University of Pennsylvania mobile apps (100k+ users).",
    bullets: [
      "Served as a project mentor to onboard new developers (Fall 2024 cohort).",
      "Launched a subletting marketplace using Google Maps API, reaching 100+ active listings (Spring–Fall 2024).",
      "Created a mobile homepage feature for group study room booking (Spring 2024).",
    ],
    skills: [
      {
        skill: "Android Studio",
        inline: "ci-androidstudio",
        skillLink:
          "https://developer.android.com/studio?_gl=1*mtik*_up*MQ..&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5H-KNxG96YtdGuo7wbrqczljmzRuqHhsMxWdadLJom3asHO6hS53oRoCo0EQAvD_BwE&gclsrc=aw.ds&gbraid=0AAAAAC-IOZluaKqB6_LHoqYKXYAd00Wgs",
      },
      {
        skill: "Kotlin",
        inline: "ci-kotlin",
        skillLink: "https://kotlinlang.org/",
      },
    ],
    link: "https://pennlabs.org/",
  },
  {
    company: "xLab: Safe Autonomous Systems Lab",
    logo: xlabLogo,
    role: "Autonomous Vehicle Engineer",
    period: "Sept. 2024 – Feb. 2025",
    location: "Philadelphia, PA",
    summary:
      "Developed lane detection software for F1Eighteenth (1/18th scale autonomous car).",
    bullets: [],
    skills: [
      {
        skill: "OpenCV",
        inline: "ci-opencv",
        skillLink: "https://opencv.org/",
      },
      {
        skill: "Python",
        inline: "ci-python",
        skillLink: "https://www.python.org/",
      },
    ],
    link: "https://xlab.upenn.edu/",
  },
  {
    company: "Switchboard, MD",
    logo: sbmdLogo,
    role: "SWE Intern",
    period: "May 2024 – Aug. 2024",
    location: "Remote",
    summary: "Led development of two healthcare SaaS web applications.",
    bullets: [
      "Built the MDAware Demo App to showcase patient message classification models to clients—used in a Google Ventures pitch and helped drive two contract expansions (≈ $400k ARR pipeline) in its first month.",
      "Created the MDAware Pilot Assessment App, a data-visualization tool for client hospital datasets.",
    ],
    skills: [
      { skill: "React", inline: "ci-react", skillLink: "https://react.dev/" },
      {
        skill: "GraphQL",
        inline: "ci-graphql",
        skillLink: "https://graphql.org/",
      },
      {
        skill: "Python",
        inline: "ci-python",
        skillLink: "https://www.python.org/",
      },
      {
        skill: "TypeScript",
        inline: "ci-typescript",
        skillLink: "https://www.typescriptlang.org/",
      },
      {
        skill: "JavaScript",
        inline: "ci-javascript",
        skillLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        skill: "Tailwind CSS",
        inline: "ci-tailwindcss",
        skillLink: "https://tailwindcss.com/",
      },
      {
        skill: "Amplify",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/amplify/",
      },
      {
        skill: "Lambda",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/lambda/",
      },
      {
        skill: "Cognito",
        inline: "ci-aws",
        skillLink: "https://aws.amazon.com/cognito/",
      },
    ],
    link: "https://www.switchboardmd.com/",
  },
  {
    company: "NEMOS Lab at the Colorado School of Mines",
    logo: nemosLabLogo,
    role: "Mobile Developer & Researcher",
    period: "May 2022 – Aug. 2022",
    location: "Golden, CO",
    summary:
      "Developed an Android biometrics app for fraud/theft detection using SVM models. Ported the application to iOS in Xcode.",
    bullets: [],
    skills: [
      {
        skill: "Android Studio",
        inline: "ci-androidstudio",
        skillLink:
          "https://developer.android.com/studio?_gl=1*mtik*_up*MQ..&gclid=CjwKCAjw3f_BBhAPEiwAaA3K5H-KNxG96YtdGuo7wbrqczljmzRuqHhsMxWdadLJom3asHO6hS53oRoCo0EQAvD_BwE&gclsrc=aw.ds&gbraid=0AAAAAC-IOZluaKqB6_LHoqYKXYAd00Wgs",
      },
      {
        skill: "Xcode",
        inline: "ci-xcode",
        skillLink: "https://developer.apple.com/xcode/",
      },
      {
        skill: "MATLAB",
        inline: "ci-matlab",
        skillLink: "https://www.mathworks.com/products/matlab.html",
      },
      {
        skill: "Java",
        inline: "ci-java",
        skillLink: "https://www.java.com/en/",
      },
      {
        skill: "Swift",
        inline: "ci-swift",
        skillLink: "https://www.swift.org/",
      },
    ],
    link: "https://nemos.mines.edu/",
  },
];
