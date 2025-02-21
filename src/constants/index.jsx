import { LucideTicketCheck } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { BotIcon } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { LayoutDashboard } from 'lucide-react';
import { PieChartIcon } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: < LayoutDashboard />,
    text: "Medical DashBoard",
    description:
      "Easily access and review your medical records",
  },
  {
    icon: < PieChartIcon />,
    text: "Detailed Analytics",
    description:
      "Provides detailed analysis of your medical data",
  },
  {
    icon: <ShieldHalf />,
    text: "Secure and Trusted",
    description:
      "Provides high security for your medical data using the best security models",
  },
  {
    icon: <LucideTicketCheck />,
    text: "Easy-to Use",
    description:
      "Provides an interactive and clutter-free experience that makes accessing the data fun and easy",
  },
  {
    icon: <BotIcon />,
    text: "AI integration",
    description:
      "Coming Soon...",
  },
  {
    icon: <GlobeLock />,
    text: "Insurance Connectivity",
    description:
      "Coming Soon...",
  },
];

export const checklistItems = [
  {
    title: "Simplified Medical Record Access",
    description:
      "Easily access and review your personal medical history with a user-friendly interface.",
  },
  {
    title: "Secure Data Sharing",
    description:
      "Safely share your medical data with healthcare providers or family members, with complete control over privacy.",
  },
  {
    title: "AI-Enhanced Health Insights",
    description:
      "Utilize AI to generate personalized health insights and predict future health trends based on your medical data.",
  },
  {
    title: "Effortless Appointment Scheduling",
    description:
      "Quickly schedule, manage, and track appointments with doctors and specialists directly from your dashboard.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private Medical Analysis",
      "1 Gb Storage",
      "Data Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private Medical Anakysis",
      "10 Gb Storage",
      "Data Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$20",
    features: [
      "Private Medical Analysis",
      "Unlimited Storage",
      "Advanced Data Analytics",
      "Private Mode",
    ],
  },
];



export const platformLinks = [
  { href: "#", text: "Home Page" },
  { href: "#features", text: "Features" },
  { href: "#pricing", text: "Pricing" },
  { href: "#testimonials", text: "Testimonials" },
  { href: "#contact", text: "Contact Us" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
