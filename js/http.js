// js/http.js
import { BASE_URL } from './config.js';

/**
 * Llama al backend con la URL base configurada en config.js
 * @param {string} path - Ruta del endpoint (ej: '/api/pendientes')
 * @param {object} options - Opciones fetch (method, body, headers, etc.)
 */
export function api(path, options = {}) {
  // Aseguramos que siempre empiece con "/"
  const p = path.startsWith('/') ? path : `/${path}`;
  return fetch(`${BASE_URL}${p}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
}
