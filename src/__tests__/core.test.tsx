import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CookieConsentBanner } from '../components/CookieConsentBanner';

// Mock matchMedia which is not present in jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('Core Compliance Modules', () => {
  it('renders the GDPR Cookie Consent banner with natural-push specifics', () => {
    render(
      <MemoryRouter>
        <CookieConsentBanner />
      </MemoryRouter>
    );

    // Verify key GDPR/Compliance elements are on screen
    expect(screen.getByText(/Respecting Your Privacy/i)).toBeInTheDocument();
    expect(screen.getByText(/Accept All/i)).toBeInTheDocument();
    expect(screen.getByText(/Decline Non-Essential/i)).toBeInTheDocument();
  });
});
