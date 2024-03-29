"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title:
      "Craft Your Digital Path with Us: A Personal Journey in Web Development Mastery",
    description:
      "Embark on a digital journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our web development school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Interactive Learning",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of web development concepts and techniques.",
  },
  {
    title: "Cutting-Edge Curriculum for Digital Creators",
    description:
      "Our curriculum is continuously updated to include the latest web development trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the digital industry.",
  },
  {
    title: "Limitless Learning Opportunities in the Digital Realm",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore in the digital realm. Our platform provides continuous opportunities for growth, ensuring your web development skills are always advancing.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
