// src/data/portfolioData.js
// Lucide React for icons (assuming it's installed: npm install lucide-react)
// These icons are used in the App.js and DetailModal components.
// We import them here to be passed as props.
import {
  Laptop,
  Cloud,
  Network,
  GitBranch,
  Settings,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Code,
  Server,
  Shield,
  Rocket,
  Lightbulb,
  Briefcase,
  FileText
} from 'lucide-react';

const portfolioData = {
  name: "Your Name",
  title: "Systems Engineer | DevOps | Cloud Specialist",
  bio: "Passionate about building robust, scalable, and secure systems. With expertise across infrastructure, cloud platforms, and automation, I thrive on optimizing workflows and driving innovation in complex environments.",
  sections: [
    {
      id: "about",
      title: "About Me",
      icon: Lightbulb,
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          Hello! I'm <span class="font-semibold">Your Name</span>, a dedicated Systems Engineer with a strong background in DevOps, Network & Infrastructure, and Cloud technologies. My career is focused on architecting, implementing, and maintaining high-performance, resilient, and secure IT environments.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          I specialize in bridging the gap between development and operations, leveraging automation and cloud-native services to streamline deployments, enhance monitoring, and ensure continuous delivery. I'm always eager to learn new technologies and apply innovative solutions to real-world challenges.
        </p>
      `
    },
    {
      id: "skills",
      title: "Skills",
      icon: Code,
      content: [
        { category: "Systems Engineering", icon: Settings, skills: ["Linux/Unix", "Windows Server", "Virtualization (VMware, KVM)", "Scripting (Bash, PowerShell, Python)"] },
        { category: "DevOps & Automation", icon: GitBranch, skills: ["CI/CD (Jenkins, GitLab CI, GitHub Actions)", "Docker", "Kubernetes", "Ansible", "Terraform", "Git"] },
        { category: "Networking & Infrastructure", icon: Network, skills: ["TCP/IP, DNS, DHCP", "Firewalls, VPNs", "Load Balancing", "Monitoring (Prometheus, Grafana, ELK)"] },
        { category: "Cloud Platforms", icon: Cloud, skills: ["AWS (EC2, S3, VPC, Lambda, RDS)", "Azure (VMs, VNETs, App Services)", "Google Cloud Platform (Compute Engine, GKE, Cloud Functions)"] },
      ]
    },
    {
      id: "experience",
      title: "Experience",
      icon: Briefcase,
      content: [
        {
          title: "Senior Systems Engineer",
          company: "Tech Solutions Inc.",
          duration: "Jan 2022 - Present",
          description: "Led the design and implementation of scalable cloud infrastructure on AWS, reducing operational costs by 20%. Developed CI/CD pipelines for automated deployments and managed Kubernetes clusters."
        },
        {
          title: "DevOps Specialist",
          company: "Innovate Systems",
          duration: "Jul 2019 - Dec 2021",
          description: "Automated infrastructure provisioning using Terraform and Ansible. Implemented robust monitoring solutions with Prometheus and Grafana, improving system uptime."
        },
        {
          title: "Network & Infrastructure Engineer",
          company: "Global Connect",
          duration: "Mar 2017 - Jun 2019",
          description: "Managed enterprise network infrastructure, including routers, switches, and firewalls. Provided support for server hardware and operating systems."
        }
      ]
    },
    {
      id: "projects",
      title: "Projects",
      icon: Rocket,
      content: [
        {
          title: "Automated Cloud Deployment Framework",
          description: "Developed a Python-based framework utilizing Terraform and Ansible to deploy multi-tier applications across AWS and Azure, significantly reducing deployment time.",
          technologies: ["Python", "Terraform", "Ansible", "AWS", "Azure"],
          link: "#" // Placeholder for project link
        },
        {
          title: "Containerized Microservices Platform",
          description: "Designed and implemented a Kubernetes-based platform for deploying and managing microservices, including CI/CD integration with GitLab CI.",
          technologies: ["Kubernetes", "Docker", "GitLab CI", "Prometheus", "Grafana"],
          link: "#" // Placeholder for project link
        },
        {
          title: "Secure Remote Access Solution",
          description: "Configured and deployed a highly secure VPN solution using OpenVPN and strong authentication mechanisms for remote workforce access.",
          technologies: ["OpenVPN", "Linux", "FirewallD", "PKI"],
          link: "#" // Placeholder for project link
        }
      ]
    },
    {
      id: "contact",
      title: "Contact",
      icon: Mail,
      content: {
        email: "your.email@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourprofile"
      }
    }
  ]
};

export default portfolioData;
