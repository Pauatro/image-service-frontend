interface EnvironmentService {
  backendBaseUrl: string;
}

export const environmentService: EnvironmentService = {
  backendBaseUrl: import.meta.env.VITE_BACKEND_BASE_URL,
};
