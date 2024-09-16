import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FeatureContentInterface } from "./models/types";

export const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/apexautoapp",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=61564662585549"
  },
  // {
  //   icon: <FaTiktok />,
  //   link: "https://www.tiktok.com/@apexautoapp"
  // },
  // {
  //   icon: <FaLinkedinIn />,
  //   link: "/",
  // },
  {
    icon: <FaTelegramPlane />,
    link: "/",
  },
];



// ============================ home page ==============================

export const homepageFeatures = [
  {
    title: "Instant appointment requests from your website or Google profile.",
    image: "/images/home/features/2/right.png",
    features: [
      {
        icon: "/images/home/features/1/1.svg",
        title: "",
        description: "Convert prospective buyers from your Google profile and website into long term paying customers. "
      },
      {
        icon: "/images/home/features/1/2.svg",
        title: "",
        description: "Offer your highest margin repair services and packages, boosting your shop’s profitability. "
      },
      {
        icon: "/images/home/features/1/3.svg",
        title: "",
        description: "Set your shop’s availability so customers can request appointments for open time slots, saving you time on the phone."
      },
      {
        icon: "/images/home/features/1/4.svg",
        title: "",
        description: "Capture business 24/7 allowing for appointment scheduling, before, during and after business hours."
      },
    ]
  },
  {
    title: "Reduce phone call interruptions with instant two-way messaging with your customers.",
    image: "/images/home/features/2/right.png",
    features: [
      {
        icon: "/images/home/features/2/1.svg",
        title: "",
        description: "Respond to queries from potential clients, during and after business hours, converting customers and increasing sales."
      },
      {
        icon: "/images/home/features/2/2.svg",
        title: "",
        description: "Instantly communicate with your customers in real-time, providing updates on the status of their vehicles. No phone calls necessary."
      },
      {
        icon: "/images/home/features/2/3.svg",
        title: "",
        description: "Send photos to customers when additional work is required, boosting trust and conversion rates."
      },
    ]
  },
  {
    title: "Quickly produce estimates and invoices.",
    image: "/images/home/features/3/right.png",
    features: [
      {
        icon: "/images/home/features/3/1.svg",
        title: "",
        description: "Create, manage, and send estimates or invoices from one centralized system."
      },
      {
        icon: "/images/home/features/3/2.svg",
        title: "",
        description: "Enhance your customer experience by delivering estimates and invoices directly to their emails."
      },
      {
        icon: "/images/home/features/3/3.svg",
        title: "",
        description: "Effortlessly track your customer’s vehicles, past appointments, and service history."
      },
    ]
  },
  {
    title: "Acquire new customers easily and get discovered on the Apex Auto App for Car Owners",
    image: "/images/home/features/4/right.png",
    features: [
      {
        icon: "/images/home/features/4/1.svg",
        title: "",
        description: "Enable customers to find your shop, and request instant appointments for your most popular and profitable services increasing shop sales."
      },
      {
        icon: "/images/home/features/4/2.svg",
        title: "",
        description: "Receive professionally taken and edited photos for your digital shop profile on Apex Auto"
      },
      {
        icon: "/images/home/features/4/3.svg",
        title: "",
        description: "Communicate specific vehicle makes serviced, holiday hours and available drop offs reducing phone call interruptions."
      },
    ]
  },
  {
    title: "Improve customer satisfaction.",
    image: "/images/home/features/5/right.png",
    features: [
      {
        icon: "/images/home/features/5/1.svg",
        title: "",
        description: "Automatic email and Apex Auto App reminders reduce no-shows and last-minute cancellations."
      },
      {
        icon: "/images/home/features/5/2.svg",
        title: "",
        description: "Empower customers to effortlessly track their vehicle's status in real-time using the Apex Auto app, eliminating the need for continuous phone calls for updates."
      },
      {
        icon: "/images/home/features/5/3.svg",
        title: "",
        description: "Send invoices straight to your customer’s email reducing the need for printed invoices. "
      },
    ]
  },
]



export const featuresContent: FeatureContentInterface[] = [
  {
    id: 0,
    title: "Streamline the approval process with instant requests via the Apex Auto App, secure e-signatures for audit trails, and enhance customer trust by visually sharing necessary repair details",
    image: "/images/features/0.png",
    description: [
      {
        title: "",
        description: "Quickly request approval for additional work needed, sent directly to the customer’s phone through the Apex Auto App.",
      },
      {
        title: "",
        description: "Customers must provide e-signatures on approved services, creating a reliable audit trail.",
      },
      {
        title: "",
        description: "Boost conversion rates and increase customer trust by sending pictures and videos of repairs needed",
      },
    ]
  },
  {
    id: 1,
    title: "Improve the efficiency of appointment management by enabling seamless viewing, scheduling, and modification of bookings, complemented by automated notifications to enhance customer satisfaction.",
    image: "/images/features/1.png",
    description: [
      {
        title: "",
        description: "View today's appointments, upcoming bookings, and past repair orders.",
      },
      {
        title: "",
        description: "Streamline your day by assigning appointments to employees or hoists on your calendar.",
      },
      {
        title: "",
        description: "Effortlessly create, reschedule, and cancel appointments, with email and app notifications sent to your customers to reduce no-shows and enhance their experience.",
      },
    ]
  },
  {
    id: 2,
    title: "Streamline your workflow and enhance customer communication with organized vehicle management, automated notifications, and remote access to your shop's operations",
    image: "/images/features/2.png",
    description: [
      {
        title: "",
        description: "Maintain an organized overview of your shop, categorizing vehicles by those waiting for drop-off, those dropped off, vehicles in progress, and vehicles ready for pickup.",
      },
      {
        title: "",
        description: "Automate emails and app notifications to inform customers when their vehicle is ready for pickup, minimizing the need for direct phone calls.",
      },
      {
        title: "",
        description: "Access your workflow from anywhere using the Web app or the Apex Mechanic mobile app.",
      },
    ]
  },
  {
    id: 3,
    title: "A smoother scheduling experience for both you and your customers, leading to more customers, valuable time saved, and a modern booking experience for your customers.",
    image: "/images/features/3.png",
    description: [
      {
        title: "",
        description: "Customers can book appointments anytime, 24/7, ensuring you never lose business due to missed phone calls.",
      },
      {
        title: "",
        description: "Seamlessly capture appointments through your Google Business profile, simplifying the booking process for customers.",
      },
      {
        title: "",
        description: "Keep your bays full and spend more time repairing vehicles instead of managing appointments.",
      },
    ]
  },
  {
    id: 4,
    title: "Save valuable time avoiding unnecessary phone calls, streamline communication, and provide a more responsive experience for your customers.",
    image: "/images/features/4.png",
    description: [
      {
        title: "",
        description: "Real-time messaging lets prospective customers contact you after hours, ensuring you don’t miss any business.",
      },
      {
        title: "",
        description: "Save time during business hours by handling general inquiries and price quotes via instant messaging, so you can stay focused on fixing cars.",
      },
      {
        title: "",
        description: "Complete more repair orders throughout the day with fewer phone call interruptions boosting shop sales.",
      },
    ]
  },
  {
    id: 5,
    title: "Fosters smoother communication, leading to a more positive experience for both you and your clients.",
    image: "/images/features/5.png",
    description: [
      {
        title: "",
        description: "Reduce no-shows with automated email reminders sent to customers before their appointments.",
      },
      {
        title: "",
        description: "Boost customer satisfaction by sending automated thank you emails after appointments.",
      },
      {
        title: "",
        description: "Enhance communication and build trust with instant messaging to keep customers informed about their vehicle status.",
      },
    ],
    conclusion: "Improved customer satisfaction through clear communication, leading to repeat business and positive online reviews."
  },
  {
    id: 6,
    title: "Streamlines the process of creating estimates and invoices, saving you valuable time and effort.",
    image: "/images/features/6.png",
    description: [
      {
        title: "",
        description: "Easily create invoices after appointments with pre-filled details including service completed, ODO, and vehicle information.",
      },
      {
        title: "",
        description: "Quickly generate professional estimates based on service details, ensuring transparency with your customers.",
      },
      {
        title: "",
        description: "Effortlessly create invoices after completing a job, with all necessary information automatically populated.",
      },
      {
        title: "",
        description: "Send invoices electronically for quicker customer approvals and faster payment processing.",
      },
    ],
    conclusion: "Spend less time on paperwork and more time focusing on what you do best. Simplify your finances, improve efficiency, and ensure you get paid promptly."
  },
]


