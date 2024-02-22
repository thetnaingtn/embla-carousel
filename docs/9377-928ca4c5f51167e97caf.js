"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9377],{9377:function(e,n,o){o.r(n),n.default="import { EmblaCarouselType } from 'embla-carousel'\n\nexport const addDotBtnsAndClickHandlers = (\n  emblaApi: EmblaCarouselType,\n  dotsNode: HTMLElement\n): (() => void) => {\n  let dotNodes: HTMLElement[] = []\n\n  const addDotBtnsWithClickHandlers = (): void => {\n    dotsNode.innerHTML = emblaApi\n      .scrollSnapList()\n      .map(() => '<button class=\"embla__dot\" type=\"button\"></button>')\n      .join('')\n\n    const scrollTo = (index: number): void => {\n      emblaApi.scrollTo(index)\n    }\n\n    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))\n    dotNodes.forEach((dotNode, index) => {\n      dotNode.addEventListener('click', () => scrollTo(index), false)\n    })\n  }\n\n  const toggleDotBtnsActive = (): void => {\n    const previous = emblaApi.previousScrollSnap()\n    const selected = emblaApi.selectedScrollSnap()\n    dotNodes[previous].classList.remove('embla__dot--selected')\n    dotNodes[selected].classList.add('embla__dot--selected')\n  }\n\n  emblaApi\n    .on('init', addDotBtnsWithClickHandlers)\n    .on('reInit', addDotBtnsWithClickHandlers)\n    .on('init', toggleDotBtnsActive)\n    .on('reInit', toggleDotBtnsActive)\n    .on('select', toggleDotBtnsActive)\n\n  return (): void => {\n    dotsNode.innerHTML = ''\n  }\n}\n"}}]);
//# sourceMappingURL=9377-928ca4c5f51167e97caf.js.map