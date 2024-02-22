"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9844],{9844:function(n,e,l){l.r(e),e.default="import React, { useCallback, useEffect, useRef } from 'react'\nimport {\n  EmblaCarouselType,\n  EmblaEventType,\n  EmblaOptionsType\n} from 'embla-carousel'\nimport useEmblaCarousel from 'embla-carousel-react'\nimport {\n  NextButton,\n  PrevButton,\n  usePrevNextButtons\n} from '../EmblaCarouselArrowButtons'\nimport { DotButton, useDotButton } from '../EmblaCarouselDotButton'\nimport { sandboxImages } from 'components/Sandbox/sandboxImages'\n\nconst TWEEN_FACTOR_BASE = 0.2\n\ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [emblaRef, emblaApi] = useEmblaCarousel(options)\n  const tweenFactor = useRef(0)\n  const tweenNodes = useRef<HTMLElement[]>([])\n\n  const { selectedIndex, scrollSnaps, onDotButtonClick } =\n    useDotButton(emblaApi)\n\n  const {\n    prevBtnDisabled,\n    nextBtnDisabled,\n    onPrevButtonClick,\n    onNextButtonClick\n  } = usePrevNextButtons(emblaApi)\n\n  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {\n    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {\n      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement\n    })\n  }, [])\n\n  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {\n    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length\n  }, [])\n\n  const tweenParallax = useCallback(\n    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {\n      const engine = emblaApi.internalEngine()\n      const scrollProgress = emblaApi.scrollProgress()\n      const slidesInView = emblaApi.slidesInView()\n      const isScrollEvent = eventName === 'scroll'\n\n      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {\n        let diffToTarget = scrollSnap - scrollProgress\n        const slidesInSnap = engine.slideRegistry[snapIndex]\n\n        slidesInSnap.forEach((slideIndex) => {\n          if (isScrollEvent && !slidesInView.includes(slideIndex)) return\n\n          if (engine.options.loop) {\n            engine.slideLooper.loopPoints.forEach((loopItem) => {\n              const target = loopItem.target()\n\n              if (slideIndex === loopItem.index && target !== 0) {\n                const sign = Math.sign(target)\n\n                if (sign === -1) {\n                  diffToTarget = scrollSnap - (1 + scrollProgress)\n                }\n                if (sign === 1) {\n                  diffToTarget = scrollSnap + (1 - scrollProgress)\n                }\n              }\n            })\n          }\n\n          const translate = diffToTarget * (-1 * tweenFactor.current) * 100\n          const tweenNode = tweenNodes.current[slideIndex]\n          tweenNode.style.transform = `translateX(${translate}%)`\n        })\n      })\n    },\n    []\n  )\n\n  useEffect(() => {\n    if (!emblaApi) return\n\n    setTweenNodes(emblaApi)\n    setTweenFactor(emblaApi)\n    tweenParallax(emblaApi)\n\n    emblaApi\n      .on('reInit', setTweenNodes)\n      .on('reInit', setTweenFactor)\n      .on('reInit', tweenParallax)\n      .on('scroll', tweenParallax)\n  }, [emblaApi, tweenParallax])\n\n  return (\n    <div className=\"embla\">\n      <div className=\"embla__viewport\" ref={emblaRef}>\n        <div className=\"embla__container\">\n          {slides.map((index) => (\n            <div className=\"embla__slide\" key={index}>\n              <div className=\"embla__parallax\">\n                <div className=\"embla__parallax__layer\">\n                  <img\n                    className=\"embla__slide__img embla__parallax__img\"\n                    src={sandboxImages(index)}\n                    alt=\"Your alt text\"\n                  />\n                </div>\n              </div>\n            </div>\n          ))}\n        </div>\n      </div>\n\n      <div className=\"embla__controls\">\n        <div className=\"embla__buttons\">\n          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />\n          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />\n        </div>\n\n        <div className=\"embla__dots\">\n          {scrollSnaps.map((_, index) => (\n            <DotButton\n              key={index}\n              onClick={() => onDotButtonClick(index)}\n              className={'embla__dot'.concat(\n                index === selectedIndex ? ' embla__dot--selected' : ''\n              )}\n            />\n          ))}\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n"}}]);
//# sourceMappingURL=9844-8f5fb48a9672bff5fda2.js.map