"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[8683],{8683:function(e,n,t){t.r(n),n.default="import React, { useCallback, useEffect, useState } from 'react'\nimport { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'\nimport useEmblaCarousel from 'embla-carousel-react'\nimport { LazyLoadImage } from './EmblaCarouselLazyLoadImage'\nimport {\n  NextButton,\n  PrevButton,\n  usePrevNextButtons\n} from '../EmblaCarouselArrowButtons'\nimport { DotButton, useDotButton } from '../EmblaCarouselDotButton'\n\ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [emblaRed, emblaApi] = useEmblaCarousel(options)\n  const [slidesInView, setSlidesInView] = useState<number[]>([])\n\n  const { selectedIndex, scrollSnaps, onDotButtonClick } =\n    useDotButton(emblaApi)\n\n  const {\n    prevBtnDisabled,\n    nextBtnDisabled,\n    onPrevButtonClick,\n    onNextButtonClick\n  } = usePrevNextButtons(emblaApi)\n\n  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {\n    setSlidesInView((slidesInView) => {\n      if (slidesInView.length === emblaApi.slideNodes().length) {\n        emblaApi.off('slidesInView', updateSlidesInView)\n      }\n      const inView = emblaApi\n        .slidesInView()\n        .filter((index) => !slidesInView.includes(index))\n      return slidesInView.concat(inView)\n    })\n  }, [])\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    updateSlidesInView(emblaApi)\n    emblaApi.on('slidesInView', updateSlidesInView)\n    emblaApi.on('reInit', updateSlidesInView)\n  }, [emblaApi, updateSlidesInView])\n\n  return (\n    <div className=\"embla\">\n      <div className=\"embla__viewport\" ref={emblaRed}>\n        <div className=\"embla__container\">\n          {slides.map((index) => (\n            <LazyLoadImage\n              key={index}\n              index={index}\n              imgSrc={`https://picsum.photos/600/350?v=${index}`}\n              inView={slidesInView.indexOf(index) > -1}\n            />\n          ))}\n        </div>\n      </div>\n\n      <div className=\"embla__controls\">\n        <div className=\"embla__buttons\">\n          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />\n          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />\n        </div>\n\n        <div className=\"embla__dots\">\n          {scrollSnaps.map((_, index) => (\n            <DotButton\n              key={index}\n              onClick={() => onDotButtonClick(index)}\n              className={'embla__dot'.concat(\n                index === selectedIndex ? ' embla__dot--selected' : ''\n              )}\n            />\n          ))}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n"}}]);
//# sourceMappingURL=8683-250dcbec37238493bb7b.js.map