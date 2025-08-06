import { describe, it, expect } from 'vitest'
import config from '../tailwind.config'

describe('tailwind config', () => {
  it('should have dark mode enabled', () => {
    expect(config.darkMode).toBe('class')
  })
})
