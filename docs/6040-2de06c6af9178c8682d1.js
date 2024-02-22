"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[6040],{6040:function(_,n,e){e.r(n),n.default="import EmblaCarousel, {\n  EmblaOptionsType,\n  /*__NAV_AUTOPLAY_REPLACE_START__*/ EmblaCarouselType /*__NAV_AUTOPLAY_REPLACE_END__*/\n} from 'embla-carousel'\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nimport { addPrevNextBtnsClickHandlers } from './EmblaCarouselArrowButtons'\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nimport { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nimport { updateSelectedSnapDisplay } from './EmblaCarouselSelectedSnapDisplay'\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n/*__AUTOPLAY_REPLACE_START__*/\nimport Autoplay from 'embla-carousel-autoplay'\n/*__AUTOPLAY_REPLACE_END__*/\n/*__CLASS_NAMES_REPLACE_START__*/\nimport ClassNames from 'embla-carousel-class-names'\n/*__CLASS_NAMES_REPLACE_END__*/\nimport '../css/base.css'\nimport '../css/sandbox.css'\nimport '../css/embla.css'\n\nconst OPTIONS: EmblaOptionsType = {}\n\nconst emblaNode = <HTMLElement>document.querySelector('.embla')\nconst viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport')\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nconst prevBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--prev')\nconst nextBtnNode = <HTMLElement>emblaNode.querySelector('.embla__button--next')\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nconst dotsNode = <HTMLElement>emblaNode.querySelector('.embla__dots')\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nconst snapDisplayNode = <HTMLElement>(\n  emblaNode.querySelector('.embla__selected-snap-display')\n)\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n\nconst emblaApi = EmblaCarousel(\n  viewportNode,\n  OPTIONS,\n  /*__PLUGINS_REPLACE_START__*/\n  [\n    /*__AUTOPLAY_REPLACE_START__*/\n    Autoplay(),\n    /*__AUTOPLAY_REPLACE_END__*/\n\n    /*__CLASS_NAMES_REPLACE_START__*/\n    ClassNames()\n    /*__CLASS_NAMES_REPLACE_END__*/\n  ]\n  /*__PLUGINS_REPLACE_END__*/\n)\n\n/*__NAV_AUTOPLAY_REPLACE_START__*/\nconst onNavButtonClick = (emblaApi: EmblaCarouselType): void => {\n  const autoplay = emblaApi?.plugins()?.autoplay\n  if (!autoplay) return\n\n  const resetOrStop =\n    autoplay.options.stopOnInteraction === false\n      ? autoplay.reset\n      : autoplay.stop\n\n  resetOrStop()\n}\n/*__NAV_AUTOPLAY_REPLACE_END__*/\n\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nconst removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(\n  emblaApi,\n  prevBtnNode,\n  nextBtnNode,\n  /*__NAV_AUTOPLAY_REPLACE_START__*/ onNavButtonClick /*__NAV_AUTOPLAY_REPLACE_END__*/\n)\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nconst removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(\n  emblaApi,\n  dotsNode,\n  /*__NAV_AUTOPLAY_REPLACE_START__*/ onNavButtonClick /*__NAV_AUTOPLAY_REPLACE_END__*/\n)\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nconst stopSelectedSnapDisplay = updateSelectedSnapDisplay(\n  emblaApi,\n  snapDisplayNode\n)\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n\n/*__PREV_NEXT_BUTTONS_REPLACE_START__*/\nemblaApi.on('destroy', removePrevNextBtnsClickHandlers)\n/*__PREV_NEXT_BUTTONS_REPLACE_END__*/\n/*__DOT_BUTTONS_REPLACE_START__*/\nemblaApi.on('destroy', removeDotBtnsAndClickHandlers)\n/*__DOT_BUTTONS_REPLACE_END__*/\n/*__SELECTED_SNAP_DISPLAY_REPLACE_START__*/\nemblaApi.on('destroy', stopSelectedSnapDisplay)\n/*__SELECTED_SNAP_DISPLAY_REPLACE_END__*/\n"}}]);
//# sourceMappingURL=6040-2de06c6af9178c8682d1.js.map