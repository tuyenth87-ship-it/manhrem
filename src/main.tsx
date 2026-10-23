import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automatic GitHub Pages subpath resolver:
// When hosted under https://<username>.github.io/<repo-name>/, rewrites root-relative
// "/assets/..." media paths to "./assets/..." so all photos & videos load seamlessly.
if (typeof window !== 'undefined' && window.location.pathname !== '/' && !window.location.pathname.endsWith('/index.html')) {
  const fixElementAssetPath = (el: Element) => {
    for (const attr of ['src', 'poster']) {
      const val = el.getAttribute(attr);
      if (val && val.startsWith('/assets/')) {
        el.setAttribute(attr, `.${val}`);
      }
    }
  };

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.target instanceof Element) {
        fixElementAssetPath(m.target);
      } else {
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            fixElementAssetPath(node);
            node.querySelectorAll('[src^="/assets/"], [poster^="/assets/"]').forEach(fixElementAssetPath);
          }
        });
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src', 'poster'],
  });
}

createRoot(document.getElementById('root')!).render(<App />);

