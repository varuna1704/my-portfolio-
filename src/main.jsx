import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LangProvider } from './context/LangContext.jsx'
import { useConsoleEasterEgg } from './hooks/useConsoleEasterEgg.js'

// Feature 12: CLI Easter Egg — fire once on load
useConsoleEasterEgg();

// Feature 14: PWA — register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Feature 15: Multilingual Provider */}
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>,
)
