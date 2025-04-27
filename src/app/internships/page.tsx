import { InternshipCard } from '@/components/internship-card';
import { SectionWrapper } from '@/components/sections/section-wrapper';

const internshipsData = [
  {
    company: 'B&G Clothing',
    role: 'Backend Developer Intern',
    duration: 'May 2024 - Jul 2024',
    location: 'Remote, India',
    description: [
      'Developed the backend for an e-commerce website using Apollo GraphQL.',
      'Implemented core functionalities: CRUD operations, authentication, and real-time updates with Apollo Subscriptions.',
      'Coordinated with the frontend team for seamless integration.',
    ],
    technologies: ['Apollo GraphQL', 'Node.js', 'MongoDB', 'JWT', 'WebSockets'], // Added example tech
  },
  // Add more internships here if needed
];

export default function InternshipsPage() {
  return (
    <SectionWrapper id="internships" title="Internships">
      <div className="space-y-8">
        {internshipsData.map((internship, index) => (
          <InternshipCard key={index} {...internship} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
