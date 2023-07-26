export interface Project {
  id: string;
  name: string;
  isActive: boolean;
}

export interface GetProjects {
  status: string;
  error: string | undefined;
}

export interface FeedbackState {
  projects: Project[];
  getProjects: GetProjects;
}
