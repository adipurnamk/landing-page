import { DiDocker, DiAws, DiGoogleCloudPlatform, DiGit, DiJenkins, DiDatabase, DiPython, DiLinux } from 'react-icons/di';
import { SiTerraform, SiKubernetes, SiGrafana, SiPostgresql, SiGnubash } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  const skills = [
    // Grouping impactful and similar skills together
    { name: 'Git', icon: <DiGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'GitLab', icon: <DiGit /> }, // Using DiGit as a placeholder for GitLab
    { name: 'Bitbucket', icon: <DiGit /> }, // Using DiGit as a placeholder for Bitbucket
    { name: 'Linux', icon: <DiLinux /> },
    { name: 'Docker', icon: <DiDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'AWS', icon: <DiAws /> },
    { name: 'GCP', icon: <DiGoogleCloudPlatform /> },
    { name: 'Azure', icon: <VscAzure /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'ArgoCD', icon: <DiGit /> }, // Using DiGit as a placeholder for ArgoCD
    { name: 'FluxCD', icon: <DiGit /> }, // Using DiGit as a placeholder for FluxCD
    { name: 'Jenkins', icon: <DiJenkins /> },
    { name: 'Python', icon: <DiPython /> },
    { name: 'Bash', icon: <SiGnubash /> },
    { name: 'Prometheus', icon: <DiDatabase /> },
    { name: 'Grafana', icon: <SiGrafana /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 p-4 border rounded-lg shadow-md">
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;