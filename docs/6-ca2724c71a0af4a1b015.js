"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6],{6:function(e,o,n){n.r(o),o.default="import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport EmblaCarousel from './IosPicker/EmblaCarousel'\nimport Header from './Header'\nimport Footer from './Footer'\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n\nconst LOOP = false\n\nconst App: React.FC = () => (\n  <main className=\"sandbox\">\n    <Header />\n    <section className=\"sandbox__carousel\">\n      <EmblaCarousel loop={LOOP} />\n    </section>\n    <Footer />\n  </main>\n)\n\nReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n)\n"}}]);
//# sourceMappingURL=6-ca2724c71a0af4a1b015.js.map