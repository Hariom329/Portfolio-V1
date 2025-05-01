'use client'; // Add use client directive

import { SectionWrapper } from '@/components/sections/section-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, Code, Target, TrendingUp, Info, GitBranch, Lightbulb, Camera } from 'lucide-react'; // Added Camera icon
import Image from 'next/image';

// Re-using project data from the main projects page
const projectsData = [
 {
    title: 'Static Code Analyzer',
    goals: 'Enhance code quality and reduce runtime errors by identifying flaws pre-execution. Provide actionable insights and corrections using LLMs.',
    problem: 'Manual code review is time-consuming and error-prone. Existing static analyzers often lack intelligent suggestions for fixing identified issues. Inspired by ISRO Respond Basket 2023.',
    solution: 'Developed a Java-based analyzer that parses code structure (using XML representation). Integrated LLaMA3 via PyTorch to analyze identified flaws, suggest corrections, and explain the reasoning behind them.',
    learnings: 'Learned advanced Java parsing techniques, LLM integration challenges (prompt engineering, output formatting), and the potential of AI in augmenting developer workflows. Gained experience with PyTorch for model interaction.',
    technologies: ['Java', 'XML', 'LLaMA3', 'PyTorch', 'LLM Integration'],
    githubLink: 'https://github.com/hariomMishra2003/Static-Code-Analyzer',
    demoAssets: [
        { type: 'image', src: 'https://picsum.photos/seed/analyzer-ui/600/400', alt: 'Analyzer UI Screenshot', hint: 'code analysis dashboard' },
        { type: 'image', src: 'https://picsum.photos/seed/analyzer-output/600/400', alt: 'Analyzer Output Example', hint: 'code suggestion result' },
      ],
  },
  {
    title: 'DressItUp',
    goals: 'Create a personalized AI fashion stylist and a virtual try-on experience.',
    problem: 'Users struggle with finding clothes that match their style and visualizing how items would look on them.',
    solution: 'Fine-tuned a LLaMA3.2 model on a custom fashion dataset (curated with NIFT students) to provide styling advice. Developed a Stable Diffusion model for realistic virtual cloth try-on based on user images and clothing items.',
    learnings: 'Gained deep experience in fine-tuning large language models (LLaMA), curating specialized datasets, and implementing generative image models (Stable Diffusion). Understood the complexities of applying AI to creative domains like fashion.',
    technologies: ['PyTorch', 'LLaMA3.2', 'CTransformers', 'Stable Diffusion', 'AI', 'Fashion Tech', 'Dataset Curation'],
    githubLink: 'https://github.com/hariomMishra2003/DressItUp',
     demoAssets: [
        { type: 'image', src: 'https://picsum.photos/seed/dressitup-style/600/400', alt: 'Styling Advice Example', hint: 'fashion style suggestion' },
        { type: 'image', src: 'https://picsum.photos/seed/dressitup-tryon/600/400', alt: 'Virtual Try-on Screenshot', hint: 'virtual clothing try-on' },
      ],
  },
  {
    title: 'Auto LLM',
    goals: 'Develop a highly efficient personal AI assistant with potential for system-level automation.',
    problem: 'Existing AI assistants can be inefficient or lack deep integration with the user\'s operating system for automated tasks.',
    solution: 'Built an assistant using LLaMA 2, focusing on optimizing response generation for unique prompts (claiming 25-30% efficiency improvement over ChatGPT 3). Integrated Open Interpreter to explore possibilities for controlling system operations via natural language prompts.',
    learnings: 'Explored LLM efficiency optimization techniques. Investigated the potential and security implications of integrating AI with system-level operations using tools like Open Interpreter. Practiced prompt engineering for diverse tasks.',
    technologies: ['PyTorch', 'LLaMA2', 'CTransformers', 'Open Interpreter', 'AI Assistant', 'Efficiency Optimization'],
    githubLink: 'https://github.com/hariomMishra2003/Auto-LLM',
    demoAssets: [
        { type: 'image', src: 'https://picsum.photos/seed/autollm-interface/600/400', alt: 'Auto LLM Interface', hint: 'chatbot interface' },
        { type: 'image', src: 'https://picsum.photos/seed/autollm-automation/600/400', alt: 'Automation Example', hint: 'command line automation' },
      ],
  },
    {
    title: 'Horimiya Discord Bot',
    goals: 'Assist engineering students with common challenges and automate Discord server tasks within the context of a hackathon.',
    problem: 'Engineering students often face repetitive tasks or need quick access to resources; Discord servers require moderation and utility functions.',
    solution: 'Developed a Python-based Discord bot using Discord.py library. Implemented various commands for calculations, resource linking, reminders, and basic server management operations. Focused on creating a helpful and engaging user experience.',
    learnings: 'Mastered the Discord.py library and bot development lifecycle. Learned to design user-friendly commands and manage asynchronous operations within a bot framework. Gained experience working under hackathon time constraints (Secured 3rd Place).',
    technologies: ['Python', 'Discord.py', 'APIs', 'Bot Development', 'Hackathon'],
    githubLink: 'https://github.com/hariomMishra2003/Horimiya-Bot',
     demoAssets: [
        { type: 'image', src: 'https://picsum.photos/seed/horimiya-commands/600/400', alt: 'Discord Bot Commands', hint: 'discord bot command example' },
        { type: 'image', src: 'https://picsum.photos/seed/horimiya-interaction/600/400', alt: 'Bot Interaction Screenshot', hint: 'discord chat interface' },
      ],
  },
   {
    title: 'RIDE Fashion Platform',
    goals: 'Develop the ML backend for a fashion-centric social media platform and tool, and successfully pitch it to investors.',
    problem: 'The fashion industry lacks integrated platforms combining social interaction with practical tools (e.g., style recommendations, trend analysis). Securing funding requires a strong technical demonstration.',
    solution: 'Led the development of the Machine Learning module, likely involving features like personalized recommendations, trend prediction, or visual search (details inferred). Created and delivered a compelling presentation of the ML capabilities to potential investors.',
    learnings: 'Gained experience leading the ML component of a larger project. Developed skills in translating technical concepts into business value propositions for investors. Practiced presentation and pitching skills in a competitive environment (Won all phases).',
    technologies: ['Machine Learning', 'Python', 'Presentation Skills', 'Startup Pitching', 'Team Leadership (ML)'],
    demoAssets: [
        { type: 'image', src: 'https://picsum.photos/seed/ride-pitch/600/400', alt: 'Pitch Deck Slide', hint: 'presentation slide' },
        { type: 'image', src: 'https://picsum.photos/seed/ride-data/600/400', alt: 'Data Visualization Example', hint: 'fashion trend graph' },
      ],
   }
];


export default function CaseStudiesPage() {
  return (
    <SectionWrapper id="case-studies" title="Project Case Studies">
        <div className="text-center mb-12">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-balance">
              Dive deeper into selected projects. Each case study outlines the project's goals, challenges, the development process, and key takeaways.
            </p>
       </div>

       <Accordion type="single" collapsible className="w-full space-y-6">
         {projectsData.map((project, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-accent/20 rounded-lg shadow-md hover:border-accent/40 transition-colors duration-300 overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold text-left hover:no-underline text-foreground [&[data-state=open]>svg]:text-primary">
                {project.title}
                 {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="ml-auto mr-4 p-1 rounded hover:bg-accent/10" title="GitHub Repository">
                       <GitBranch className="h-5 w-5 text-primary hover:text-primary/80" />
                    </a>
                  )}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2 text-foreground/90 text-base">
                 {/* Overview Section */}
                <div className="mb-6 p-4 border border-border rounded-md bg-card/50">
                  <h4 className="flex items-center text-lg font-semibold mb-3 text-foreground">
                    <Info className="h-5 w-5 mr-2 text-primary" /> Overview
                  </h4>
                  <p className="mb-3 text-balance"><strong className="text-foreground/80">Goal:</strong> {project.goals}</p>
                  <div className="flex flex-wrap gap-2">
                    <strong className="text-foreground/80 mr-2 self-center">Tech Used:</strong>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-secondary/70 hover:bg-secondary/90">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                 {/* Problem Statement Section */}
                <div className="mb-6 p-4 border border-border rounded-md bg-card/50">
                   <h4 className="flex items-center text-lg font-semibold mb-3 text-foreground">
                     <Target className="h-5 w-5 mr-2 text-primary" /> Problem Statement
                   </h4>
                   <p className="text-balance">{project.problem}</p>
                </div>

                 {/* How You Built It Section */}
                 <div className="mb-6 p-4 border border-border rounded-md bg-card/50">
                   <h4 className="flex items-center text-lg font-semibold mb-3 text-foreground">
                     <BrainCircuit className="h-5 w-5 mr-2 text-primary" /> How It Was Built
                   </h4>
                   <p className="text-balance">{project.solution}</p>
                   {/* Optionally add code snippets or design details here */}
                   {/* Example: <pre><code className="language-javascript"> Code snippet... </code></pre> */}
                 </div>

                 {/* Key Learnings Section */}
                 <div className="mb-6 p-4 border border-border rounded-md bg-card/50">
                   <h4 className="flex items-center text-lg font-semibold mb-3 text-foreground">
                     <Lightbulb className="h-5 w-5 mr-2 text-primary" /> Key Learnings
                   </h4>
                   <p className="text-balance">{project.learnings}</p>
                 </div>

                 {/* Screenshot/Demo Section */}
                 {project.demoAssets && project.demoAssets.length > 0 && (
                    <div className="p-4 border border-border rounded-md bg-card/50">
                      <h4 className="flex items-center text-lg font-semibold mb-4 text-foreground">
                        <Camera className="h-5 w-5 mr-2 text-primary" /> Screenshots / Demo
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.demoAssets.map((asset, assetIndex) => (
                          <div key={assetIndex} className="overflow-hidden rounded-md border border-border/50">
                            {asset.type === 'image' && (
                              <Image
                                src={asset.src}
                                alt={asset.alt || `${project.title} Demo ${assetIndex + 1}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-auto aspect-video transition-transform duration-300 ease-in-out hover:scale-105"
                                data-ai-hint={asset.hint}
                              />
                            )}
                             {/* Add support for video or links later if needed */}
                             {/* {asset.type === 'video' && (...)} */}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}


              </AccordionContent>
            </AccordionItem>
          ))}
       </Accordion>
    </SectionWrapper>
  );
}
