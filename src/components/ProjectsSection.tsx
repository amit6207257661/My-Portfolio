import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  date: string;
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Manika Plant Nursery",
      description: "Developed an A cozy plant nursery offering a wide variety of healthy plants, from vibrant flowers to lush indoor greens. Perfect for garden lovers and home decor enthusiasts.",
      technologies: ["ReactJS", "Firebase", "HTML", "CSS"],
      image: "bg-[url('/plant.jpg')] bg-cover bg-center",
      githubUrl: "https://github.com/RUDHRAPRATAPSINGH/Plant-Nursery.git",
      liveUrl: "#",
      category: "web",
      date: "Oct 2024 - Nov 2024"
    },
    {
      id: 2,
      title: "CryptoCurrency Dashboard",
      description: "Developed an interactive cryptocurrency dashboard using Power BI. Improved data reliability through advanced data transformation techniques and identified critical trends in coin prices, trading volume, and market capitalization using statistical analysis and dynamic visualizations.",
      technologies: ["PowerBI","Data Analysis", "Statistical Methods", "Data Visualization"],
      image: "bg-[url('/dashboard.jpg')] bg-cover bg-center",
      githubUrl: "https://github.com/RUDHRAPRATAPSINGH",
      liveUrl: "#",
      category: "data",
      date: "Mar 2025 - Apr 2025"
    },
    {
      id: 3,
      title: "MELODY MUSIC PLYR",
      description: "A custom music player built with HTML, CSS, and JavaScript featuring play/pause controls, track switching, volume adjustment, and a responsive design for smooth audio playback across devices.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "bg-[url('/music.jpg')] bg-cover bg-center",
      githubUrl: "https://github.com/RUDHRAPRATAPSINGH/Melody-Music-Player-.git",
      liveUrl: "#",
      category: "web",
      date: "Mar 2024 - Apr 2024"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'data', label: 'Data Analysis' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Featured <span className="text-cosmic-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cosmic-purple mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my most notable projects. Each one demonstrates 
            different skills in data analysis and web development.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              className={filter === category.value 
                ? "bg-cosmic-blue hover:bg-cosmic-blue/80 text-white" 
                : "text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="bg-space-light border border-gray-700 hover:border-cosmic-blue/50 transition-all duration-300 h-full overflow-hidden hover:shadow-lg hover:shadow-cosmic-blue/20">
                <div className={`h-40 ${project.image} flex items-center justify-center`}>
                  {/* Project preview image */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    <span className="text-cosmic-blue text-xs">{project.date}</span> • {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-space-darker px-2 py-1 rounded-md text-cosmic-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-gray-300 border-gray-600 hover:text-cosmic-blue hover:border-cosmic-blue"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-cosmic-blue hover:bg-cosmic-blue/80 text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;