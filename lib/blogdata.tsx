import type { ReactNode } from "react";

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  content: string;
}

// Helper to parse raw text into JSX elements for rendering
export function parseBlogContent(content: string): ReactNode[] {
  const elements: ReactNode[] = [];
  const paragraphs = content.split("\n\n"); // Split by double newline for paragraphs

  paragraphs.forEach((para, index) => {
    const trimmedPara = para.trim();
    if (!trimmedPara) return;

    // Check for specific headings
    if (
      trimmedPara.startsWith("The Rise of Peer-to-Peer Delivery Apps") ||
      trimmedPara.startsWith("What is a Peer-to-Peer Delivery App?") ||
      trimmedPara.startsWith("Why Choose a Peer-to-Peer Delivery App?") ||
      trimmedPara.startsWith("How Do Peer-to-Peer Delivery Apps Work?") ||
      trimmedPara.startsWith(
        "The Benefits of Peer-to-Peer Delivery Apps for Senders"
      ) ||
      trimmedPara.startsWith("Why Travelers Love Peer-to-Peer Delivery Apps") ||
      trimmedPara.startsWith(
        "DeleMate: The Peer-to-Peer Delivery App Youve Been Waiting For"
      ) ||
      trimmedPara.startsWith("Conclusion") ||
      trimmedPara.startsWith(
        "The Challenges of Traditional Courier Services"
      ) ||
      trimmedPara.startsWith("Why Peer-to-Peer Delivery is the Future")
    ) {
      elements.push(
        <h2
          key={`h2-${index}`}
          className="text-xl sm:text-2xl font-bold mt-6 mb-3 text-gray-800"
        >
          {trimmedPara}
        </h2>
      );
    } else if (
      trimmedPara.startsWith("Key Features:") ||
      trimmedPara.startsWith("Key Features of DeleMate:")
    ) {
      elements.push(
        <h3
          key={`h3-${index}`}
          className="text-lg font-semibold mt-4 mb-2 text-[#133bb7]"
        >
          {trimmedPara}
        </h3>
      );
    } else if (trimmedPara.match(/^\d+\.\s/)) {
      // Numbered list items
      const listItems = trimmedPara.split("\n").map((item, i) => (
        <li key={`li-${index}-${i}`} className="mb-1 text-gray-700">
          {item.trim()}
        </li>
      ));
      elements.push(
        <ul key={`ul-${index}`} className="list-decimal list-inside mb-4 pl-4">
          {listItems}
        </ul>
      );
    } else if (trimmedPara.startsWith("• ")) {
      // Bullet list items
      const listItems = trimmedPara.split("\n").map((item, i) => (
        <li key={`li-${index}-${i}`} className="mb-1 text-gray-700">
          {item.trim().substring(2)}
        </li>
      ));
      elements.push(
        <ul key={`ul-${index}`} className="list-disc list-inside mb-4 pl-4">
          {listItems}
        </ul>
      );
    } else {
      elements.push(
        <p key={`p-${index}`} className="mb-4 leading-relaxed text-gray-700">
          {trimmedPara}
        </p>
      );
    }
  });
  return elements;
}

export const blogPosts: BlogPost[] = [
  {
    id: "welcome-to-delemate",
    title: "Welcome to DeleMate: Learn Everything about us",
    subtitle:
      "Discover Who We Are and What We Do: Your Ultimate Guide to Everything DeleMate, From Our Mission to Our Services and Beyond.",
    date: "Jan 23, 2025",
    readTime: "10 min read",
    content: `This is a placeholder for the "Welcome to DeleMate" blog post content.

It will cover our mission, services, and everything you need to know about DeleMate.

Stay tuned for more detailed information! We are committed to revolutionizing logistics and making parcel delivery seamless and affordable for everyone. Our platform connects senders with travelers, creating a flexible and efficient network.

Key aspects include:
• Our Vision: To create a world where sending and receiving parcels is effortless.
• Our Services: Peer-to-peer delivery, real-time tracking, secure payments.
• Our Community: Building trust through user ratings and verification.

Join us on this journey to transform logistics! Download the DeleMate app today.`,
  },
  {
    id: "revolutionizing-logistics",
    title: "Revolutionizing Logistics: The Rise of Peer-to-Peer Delivery Apps",
    subtitle:
      "In today's fast-paced world, convenience and speed have become the cornerstones of modern logistics. Enter peer-to-peer delivery apps, an innovative solution transforming how we send and receive parcels.",
    date: "Jan 31, 2025",
    readTime: "15 min read",
    content: `The Rise of Peer-to-Peer Delivery Apps

In today's fast-paced world, convenience and speed have become the cornerstones of modern logistics. Enter peer-to-peer delivery apps, an innovative solution transforming how we send and receive parcels. These apps connect travelers with people looking to send packages, offering a seamless, affordable, and efficient delivery option.

What is a Peer-to-Peer Delivery App?

A peer-to-peer delivery app is a platform that connects individuals with spare capacity on their trips to those who need to send items. Unlike traditional courier services, which rely on fixed routes and schedules, peer-to-peer delivery leverages the movements of everyday travelers, making the process faster and more flexible.

For example, if someone is traveling from Hyderabad to Bengaluru, they can use a peer-to-peer delivery app to deliver a parcel along their route, earning money for their effort. Meanwhile, the sender gets an affordable and speedy delivery option.

Key Features:
• Real-Time Matching Connects senders with travelers in real-time.
• Secure Payments Ensures safe and transparent transactions.
• Live Tracking Provides real-time updates on the parcel's location.
• Rating System Builds trust through user ratings and reviews.

Why Choose a Peer-to-Peer Delivery App?

1. Affordability
Traditional courier services often charge high fees, especially for urgent or long-distance deliveries. Peer-to-peer delivery apps eliminate the middleman, reducing costs significantly.

2. Speed
Since deliveries are aligned with real-time travel schedules, parcels often reach their destinations faster than through conventional methods.

3. Flexibility
Whether it's a small document or a large package, peer-to-peer delivery apps cater to various delivery needs without the rigidity of fixed-size limits or specific logistics chains.

4. Earning Potential for Travelers
For frequent travelers, peer-to-peer delivery apps provide an easy way to monetize their trips. By carrying parcels, they can earn extra income while traveling the same route they planned.

How Do Peer-to-Peer Delivery Apps Work?

Using a peer-to-peer delivery app is simple:

1. Senders Post a Request
• Users upload their delivery needs on the app, including details about the parcel, destination, and preferred delivery timeframe.

2. Travelers Accept Requests
• Travelers browse available delivery requests and accept ones that match their routes.

3. Secure Transaction
• Payment is handled securely through the app, ensuring trust and transparency for both parties.

4. Live Tracking and Updates
• Senders can track their parcels in real-time, providing peace of mind.

5. Delivery Completion
• Upon successful delivery, both parties can rate each other, building a reliable community of users.

The Benefits of Peer-to-Peer Delivery Apps for Senders
• Quick Deliveries Perfect for last-minute or time-sensitive packages.
• Cost-Effective Lower rates compared to traditional couriers.
• Convenience No need to visit a courier office – everything happens from your phone.

Why Travelers Love Peer-to-Peer Delivery Apps
• Extra Income Turn empty space in your bag into cash.
• Flexible Options Deliver items that align with your existing travel plans.
• Sense of Community Be part of a network that values trust and collaboration.

DeleMate: The Peer-to-Peer Delivery App Youve Been Waiting For

If you're in India and looking for a reliable peer-to-peer delivery app, DeleMate is here to revolutionize your experience. With features like live tracking, KYC verification, and an intuitive interface, DeleMate makes deliveries faster, cheaper, and safer.

Key Features of DeleMate:
• Live Tracking Real-time updates on your parcel's location.
• KYC Verification Ensures the safety and security of all transactions.
• User Ratings Build trust through a robust rating system.
• Seamless Payments Secure and easy payment processing.
• 24/7 Support Dedicated customer support to assist you at any time.

Whether you're a traveler looking to earn extra income or a sender seeking a quick delivery solution, DeleMate has you covered.

Conclusion

The logistics landscape is evolving, and peer-to-peer delivery apps are leading the charge. They offer unmatched flexibility, affordability, and efficiency, making them the ideal choice for modern-day parcel delivery. Join the movement today and experience the convenience of peer-to-Peer delivery with DeleMate. Download the app now and be part of the future of logistics!`,
  },
  {
    id: "challenges-of-traditional-courier-services",
    title:
      "The Challenges of Traditional Courier Services: Why Peer-to-Peer Delivery is the Future",
    subtitle:
      "For decades, traditional courier services have been the backbone of logistics. However, they come with their own set of challenges—high costs, lack of flexibility, and unreliable service.",
    date: "Feb 05, 2025", // Placeholder date
    readTime: "12 min read", // Placeholder read time
    content: `The Challenges of Traditional Courier Services

For decades, traditional courier services have been the backbone of logistics. However, they come with their own set of challenges—high costs, lack of flexibility, and unreliable service. As e-commerce and fast-paced deliveries become more critical, these limitations are becoming more apparent.

1. High Costs
Traditional couriers charge premium rates, particularly for urgent or long-distance deliveries. With a fixed pricing structure, businesses and individuals find themselves paying steep fees for expedited shipments.

Peer-to-peer delivery apps offer a cost-effective solution by connecting senders directly with travelers willing to carry parcels for a lower price, eliminating unnecessary overhead.

2. Limited Flexibility
Most courier services operate on strict schedules and routes. This rigidity means senders must plan around the courier’s availability rather than their own convenience.

Peer-to-peer delivery apps, on the other hand, match deliveries in real-time with travelers, making it possible to send packages more spontaneously and efficiently.

3. Communication Gaps
Ever had to wait on hold for a customer service representative just to get an update on your package? Traditional couriers often lack real-time communication, making it frustrating for both senders and recipients.

With peer-to-peer delivery apps, users can directly communicate with travelers, ensuring transparency and faster resolution of queries.

4. Reliability Concerns
Lost packages and delayed deliveries are common complaints with traditional courier services. Tracking systems, while present, are often outdated and lack real-time accuracy.

Peer-to-peer delivery solutions integrate live tracking, real-time updates, and verified users, making the process more secure and reliable.

Why Peer-to-Peer Delivery is the Future

Affordability
With a decentralized model, peer-to-peer delivery apps cut down costs by leveraging existing travel routes, making deliveries significantly cheaper.

Speed & Efficiency
Since deliveries align with real-time travel schedules, senders can get their packages delivered faster than through conventional courier services.

Greater Accessibility
Unlike courier services with set drop-off locations and timings, peer-to-peer delivery offers doorstep pickup and delivery, making logistics smoother and more accessible.

DeleMate: Transforming Peer-to-Peer Delivery in India

If you're looking for a peer-to-peer delivery app that prioritizes affordability, speed, and security, DeleMate is the perfect solution. It connects travelers and senders seamlessly, ensuring efficient deliveries with live tracking, KYC verification, and a user-friendly interface.

Conclusion

The limitations of traditional courier services are pushing the industry toward a smarter, more decentralized approach. Peer-to-peer delivery apps like DeleMate offer a modern solution, making deliveries faster, cheaper, and more efficient. Join the future of logistics—download DeleMate today!`,
  },
];
