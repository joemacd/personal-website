import mdawareDemoSS from "../assets/images/projects/mdaware_demo_ss.png";
import mdawarePilot from "../assets/images/projects/mdaware_pilot.png";
import pennMobile from "../assets/images/projects/penn_mobile_screen.png";
import tinyML from "../assets/images/projects/Magic_Wand_pic.png";
import lc4Disasm from "../assets/images/projects/LC4_disassembler.png";
import xlabLaneDetect from "../assets/images/projects/xlab_lane_detection.png";
import amazonWordcloud from "../assets/images/projects/amazon_review_wordcloud.png";

export const projects = [
  {
    titleCard: {
      title: "MDAware Demo App",
      descriptionPreview:
        "Constructed a full-stack demo app to showcase the MDAware patient message classification model. Features Include:",
      descriptionReadMore:
        "\n>> Single Message Input: Message classification & filtering, keyphrase identification with heatmap visualization, animated message routing paths, and integration of AWS user pool authentication.\n>> Multiple Message (CSV) Input: Efficient multi-message classification with batching and caching logic for parallel API calls to the model, CSV export with filtering preferences, analytical pdf write-up containing model confidence & runtime visualizations, and fast keyword identification for multi-message input through CHI-2 and TF-IDF feature extraction techniques.",
      imageUrl: mdawareDemoSS,
      starred: true,
    },
  },
  {
    titleCard: {
      title: "MDAware Pilot Assessment App",
      descriptionPreview:
        "Developed a data visualization app to help potential clients interpret the responses of Switchboard, MD classification models. Features Include:",
      descriptionReadMore:
        "breakdown of messages according to routing classification, time of day, predicted sentiment, & more. Analysis of after-hours messaging frequency, identification of most impacted medical professional groups by after-hours messages, and message classification categorical spikes detected in after-hours messages. Included a customizable drag and drop interface to view correlations between classification categories, input CSV formatting error detection with proposed corrections, interactable charts, and specialized cards for each classification model’s categories with practical statistics including time of day outliers, number of message interactions vs messages sent, etc.",
      imageUrl: mdawarePilot,
      starred: true,
    },
  },
  {
    titleCard: {
      title: "Penn Mobile",
      descriptionPreview:
        "Android developer for Penn Labs’ mobile app. Projects I’ve been involved with include creating the subletting marketplace and designing the group study room booking interface.",
      imageUrl: pennMobile,
      repoUrl: "https://github.com/pennlabs/penn-mobile-android",
      starred: true,
    },
  },
  {
    titleCard: {
      title: "TinyML (ESE 3600)",
      descriptionPreview:
        "A collection of academic projects in TinyML: gesture detection for a physical magic wand using an Arduino BLE Nano, a custom KWS model quantized for use in microcontrollers, autoencoder anomaly detection for EKG dataset, medical mask detection using transfer learning, quantization in TFLite for rock, paper, scissors game, a bean disease classifier, and a CNN for Cifar-10.",
      imageUrl: tinyML,
      repoUrl: "https://github.com/joemacd/TinyML",
      starred: false,
    },
  },
  {
    titleCard: {
      title: "LC4 Simulator & Disassembler",
      descriptionPreview:
        ">> Simulator: Loads and processes machine code files produced by the LC4 assembler. Constructs an execution trace that contains information on each LC4 cycle.\n>> Disassembler: Parses an LC4 .OBJ file and converts it back into assembly.",
      imageUrl: lc4Disasm,
      starred: false,
    },
  },
  {
    titleCard: {
      title: "Lane Detection Software (xLab: Safe Autonomous Systems Lab)",
      descriptionPreview:
        "Developed lane detection software for F1Eighteenth (1/18th scale autonomous car).",
      imageUrl: xlabLaneDetect,
      starred: false,
    },
  },
  {
    titleCard: {
      title: "Analysis of Language in Amazon Reviews (CIS 5450 Final Project)",
      descriptionPreview:
        "This project focuses on sentiment analysis with the aim of exploring how language in product reviews correlates with positive or negative emotions and how this relationship evolves over time. Components of this project include: Exploratory Data Analysis, NLP (VADER sentiment analysis), keyword spotting, hypothesis testing, and predictive modeling (random forest, SMOTE, XGBRegressor).",
      imageUrl: amazonWordcloud,
      repoUrl: "https://github.com/joemacd/AmazonReviews",
      starred: false,
    },
  },
];
