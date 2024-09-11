// config.ts

const isDockerEnv = process.env.REACT_APP_ENVIRONMENT === 'docker';


export const API_BASE_URL = isDockerEnv ? 'http://server:5555' : 'http://localhost:5555';