import axios from 'axios';

/**
 * Perform an HTTP GET request with retry and exponential backoff.
 * @param {string} url - Request URL.
 * @param {object} [options] - Axios request configuration.
 * @param {number} [retries=3] - Number of retry attempts.
 * @param {number} [backoffMs=500] - Initial backoff delay in milliseconds.
 * @returns {Promise<any>} - Resolves with the JSON payload.
 */
export async function getWithRetry(url, options = {}, retries = 3, backoffMs = 500) {
  let attempt = 0;
  let lastError;

  while (attempt <= retries) {
    try {
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      lastError = error;
      attempt += 1;
      if (attempt > retries) {
        break;
      }
      const delay = backoffMs * 2 ** (attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

export default getWithRetry;
