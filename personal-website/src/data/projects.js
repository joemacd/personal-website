// src/data/projects.js

export const projects = [
  {
    titleCard: {
      title: "Test1",
      imageUrl: "/images/testytestytest.png",
      repoUrl: "https://github.com/",
      demoUrl: "https://google.com",
      starred: true,
    },
    descriptionCard: {
      title: "Test1",
      description: "TestDesc1",
      date: "Summer 2024",
      organization: "hey",
      technologies: ["react", "ts", "yo"],
      starred: true,
    },
    skillsCard: {
      skills: [
        { name: "git", inline: "ci-git" },
        { name: "C", inline: "ci-c" },
      ],
      starred: true,
    },
  },
  {
    titleCard: {
      title: "Test2",
      imageUrl: "/images/testytestytest.png",
      repoUrl: "https://github.com/",
      demoUrl: "https://google.com",
      starred: false,
    },
    descriptionCard: {
      description: "TestDesc2",
      starred: false,
    },
    skillsCard: {
      skills: [
        { name: "git", inline: "ci-git" },
        { name: "C", inline: "ci-c" },
      ],
      starred: false,
    },
  },
  {
    titleCard: {
      title: "Test3",
      imageUrl: "/images/testytestytest.png",
      repoUrl: "https://github.com/",
      starred: true,
    },
    descriptionCard: {
      description: "TestDesc3",
      starred: true,
    },
    skillsCard: {
      skills: [
        { name: "git", inline: "ci-git" },
        { name: "C", inline: "ci-c" },
      ],
      starred: true,
    },
  },
  {
    titleCard: {
      title: "Test4",
      imageUrl: "/images/testytestytest.png",
      demoUrl: "https://google.com",
      starred: false,
    },
    descriptionCard: {
      description: "TestDesc4",
      starred: false,
    },
    skillsCard: {
      skills: [
        { name: "git", inline: "ci-git" },
        { name: "C", inline: "ci-c" },
      ],
      starred: false,
    },
  },
];
