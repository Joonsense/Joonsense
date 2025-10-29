/**
 * Simple timestamped logger utility for consistent output formatting.
 */
export class Logger {
  static info(message, ...args) {
    console.log(`ℹ️  ${new Date().toISOString()} - ${message}`, ...args);
  }

  static success(message, ...args) {
    console.log(`✅ ${new Date().toISOString()} - ${message}`, ...args);
  }

  static warn(message, ...args) {
    console.warn(`⚠️  ${new Date().toISOString()} - ${message}`, ...args);
  }

  static error(message, ...args) {
    console.error(`❌ ${new Date().toISOString()} - ${message}`, ...args);
  }
}

export default Logger;
