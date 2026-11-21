/** Prefija rutas de /public con el basePath (necesario en GitHub Pages: /licnicoe). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => `${BASE_PATH}${path}`;
