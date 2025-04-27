import { ProjectCard } from '@/components/project-card';
import { SectionWrapper } from '@/components/sections/section-wrapper';
import { Github } from 'lucide-react'; // Keep Github if used, otherwise remove

const projectsData = [
 {
    title: 'Static Code Analyzer',
    description: 'Developed a static code analyzer (inspired by ISRO Respond Basket 2023 problem) to identify code flaws without execution. Integrated LLaMA3 to suggest code corrections and explanations, enhancing code quality and user understanding.',
    technologies: ['Java', 'XML', 'LLaMA3', 'PyTorch', 'LLM Integration'],
    githubLink: 'https://github.com/hariomMishra2003/Static-Code-Analyzer',
    status: 'Ongoing (Apr 2024 - Present)',
  },
  {
    title: 'DressItUp',
    description: 'Developed an AI personal fashion stylist using a fine-tuned LLaMA3.2 model on a custom dataset (curated with NIFT students). Also built a Stable Diffusion model for virtual cloth try-on.',
    technologies: ['PyTorch', 'LLaMA3.2', 'CTransformers', 'Stable Diffusion', 'AI', 'Fashion Tech'],
    githubLink: 'https://github.com/hariomMishra2003/DressItUp',
    status: 'Ongoing',
  },
  {
    title: 'Auto LLM',
    description: 'Developed a personal assistant based on LLaMA 2, aiming for improved efficiency compared to ChatGPT 3. Integrated Open Interpreter for potential system-level access and task automation.',
    technologies: ['PyTorch', 'LLaMA2', 'CTransformers', 'Open Interpreter', 'AI Assistant'],
    githubLink: 'https://github.com/hariomMishra2003/Auto-LLM',
    status: 'Completed (Jan 2024)',
  },
    {
    title: 'Horimiya Discord Bot',
    description: 'An all-purpose Engineer Assistant Discord Bot designed to help engineers overcome common challenges and perform various Discord operations. Developed for the JUET BUILDS Hackathon (Secured 3rd Place).',
    technologies: ['Python', 'Discord.py', 'APIs', 'Bot Development'],
    githubLink: 'https://github.com/hariomMishra2003/Horimiya-Bot',
    status: 'Completed (Hackathon Project)',
  },
   {
    title: 'RIDE Fashion Platform',
    description: 'Led Machine Learning development for a fashion-centric Social Media Platform & Tool during the RIDE JIIT Noida 2024 competition. Successfully presented the module to investors, winning all phases and securing potential funding.',
    technologies: ['Machine Learning', 'Python', 'Presentation Skills', 'Startup Pitching'],
    // No GitHub link provided in original data for this one
    status: 'Competition Winner (Funding Secured)',
   }
];

export default function ProjectsPage() {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
