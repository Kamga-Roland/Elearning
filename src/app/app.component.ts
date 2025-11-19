import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DevOpsPractice {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface CloudPlatform {
  name: string;
  color: string;
  features: string[];
}

interface LearningPath {
  id: number;
  title: string;
  level: string;
  duration: string;
  topics: string[];
}

interface ToolCategory {
  name: string;
  tools: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DevOps & Cloud Excellence';
  selectedPractice: number | null = null;

  devopsPractices: DevOpsPractice[] = [
    {
      id: 1,
      title: 'CI/CD Pipeline',
      description: 'Automate build, test, and deployment processes for faster and more reliable releases.',
      icon: '🔄'
    },
    {
      id: 2,
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure through code for consistency and repeatability.',
      icon: '📝'
    },
    {
      id: 3,
      title: 'Monitoring & Logging',
      description: 'Track system health and performance with comprehensive observability solutions.',
      icon: '📊'
    },
    {
      id: 4,
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications at scale with Kubernetes.',
      icon: '🐳'
    },
    {
      id: 5,
      title: 'Security & Compliance',
      description: 'Integrate security practices throughout the development lifecycle (DevSecOps).',
      icon: '🔒'
    },
    {
      id: 6,
      title: 'Microservices Architecture',
      description: 'Build scalable applications with independently deployable services.',
      icon: '🏗️'
    }
  ];

  cloudPlatforms: CloudPlatform[] = [
    {
      name: 'AWS',
      color: '#FF9900',
      features: ['EC2 & Lambda', 'S3 & RDS', 'EKS & ECS', 'CloudFormation']
    },
    {
      name: 'Azure',
      color: '#0078D4',
      features: ['Virtual Machines', 'Azure DevOps', 'AKS', 'ARM Templates']
    },
    {
      name: 'Google Cloud',
      color: '#4285F4',
      features: ['Compute Engine', 'Cloud Run', 'GKE', 'Cloud Build']
    }
  ];

  learningPaths: LearningPath[] = [
    {
      id: 1,
      title: 'DevOps Foundation',
      level: 'beginner',
      duration: '3 months',
      topics: ['Linux Basics', 'Git & GitHub', 'Docker Basics', 'CI/CD Fundamentals']
    },
    {
      id: 2,
      title: 'Cloud Engineer',
      level: 'intermediate',
      duration: '6 months',
      topics: ['AWS/Azure/GCP', 'Terraform', 'Kubernetes', 'Networking']
    },
    {
      id: 3,
      title: 'Site Reliability Engineer',
      level: 'advanced',
      duration: '8 months',
      topics: ['System Design', 'Performance Tuning', 'Incident Management', 'Automation']
    }
  ];

  toolCategories: ToolCategory[] = [
    {
      name: 'Version Control',
      tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    },
    {
      name: 'CI/CD',
      tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Azure Pipelines']
    },
    {
      name: 'Containers',
      tools: ['Docker', 'Kubernetes', 'Helm', 'Podman']
    },
    {
      name: 'IaC',
      tools: ['Terraform', 'Ansible', 'Pulumi', 'CloudFormation']
    },
    {
      name: 'Monitoring',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic']
    },
    {
      name: 'Cloud Platforms',
      tools: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean']
    }
  ];

  selectPractice(id: number): void {
    this.selectedPractice = this.selectedPractice === id ? null : id;
  }
}
