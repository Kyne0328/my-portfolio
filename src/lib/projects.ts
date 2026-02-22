import { Project } from '@/types';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'projects.json');

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'FarmDashR',
    description:
      'A Flutter-based platform connecting farmers directly to customers, eliminating middlemen and increasing farmer income.',
    tech: ['Flutter'],
    github: 'https://github.com/Kyne0328/FarmDashr',
    featured: true,
  },
  {
    id: '2',
    title: 'URL-Analysis',
    description:
      'A URL inspection tool that analyzes link parameters and detects phishing behavior using hierarchical clustering and AI-based techniques.',
    tech: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Kyne0328/URL-Analysis',
    featured: true,
  },
];

function ensureDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(defaultProjects, null, 2));
  }
}

function readProjects(): Project[] {
  ensureDataFile();
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(data);
}

function writeProjects(projects: Project[]): void {
  fs.writeFileSync(dataFilePath, JSON.stringify(projects, null, 2));
}

export async function getProjects(): Promise<Project[]> {
  return readProjects();
}

export async function addProject(project: Omit<Project, 'id'>): Promise<Project> {
  const projects = readProjects();
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
  };
  projects.push(newProject);
  writeProjects(projects);
  return newProject;
}

export async function updateProject(
  id: string,
  updates: Partial<Project>
): Promise<Project | null> {
  const projects = readProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updates };
  writeProjects(projects);
  return projects[index];
}

export async function deleteProject(id: string): Promise<boolean> {
  const projects = readProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  writeProjects(filtered);
  return true;
}
