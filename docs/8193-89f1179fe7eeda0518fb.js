"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[8193],{8193:function(e,n,t){t.r(n),n.default="import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'\nimport AutoScroll from 'embla-carousel-auto-scroll'\nimport { addPrevNextBtnsClickHandlers } from '../EmblaCarouselArrowButtons'\nimport {\n  addPlayBtnListeners,\n  addNavBtnListeners\n} from './EmblaCarouselAutoScroll'\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n\nconst OPTIONS: EmblaOptionsType = {}\n\nconst emblaNode = <HTMLElement>document.querySelector('.embla')\nconst viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')\nconst prevBtn = <HTMLElement>emblaNode.querySelector('.embla__button--prev')\nconst nextBtn = <HTMLElement>emblaNode.querySelector('.embla__button--next')\nconst playBtn = <HTMLElement>document.querySelector('.embla__play')\n\nconst emblaApi = EmblaCarousel(viewportNode, OPTIONS, [\n  AutoScroll({ playOnInit: false })\n])\n\nconst removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(\n  emblaApi,\n  prevBtn,\n  nextBtn\n)\nconst removePlayBtnListeners = addPlayBtnListeners(emblaApi, playBtn)\nconst removeNavBtnListeners = addNavBtnListeners(emblaApi, prevBtn, nextBtn)\n\nemblaApi\n  .on('destroy', removePrevNextBtnsClickHandlers)\n  .on('destroy', removePlayBtnListeners)\n  .on('destroy', removeNavBtnListeners)\n"}}]);
//# sourceMappingURL=8193-89f1179fe7eeda0518fb.js.map