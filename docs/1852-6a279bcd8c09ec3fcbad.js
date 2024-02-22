"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[1852],{1852:function(e,o,n){n.r(o),o.default='import React from \'react\'\nimport { EmblaOptionsType } from \'embla-carousel\'\nimport { IosPickerItem } from \'./EmblaCarouselIosPickerItem\'\n\ntype PropType = {\n  loop?: EmblaOptionsType[\'loop\']\n}\n\nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { loop } = props\n\n  return (\n    <div className="embla">\n      <IosPickerItem\n        slideCount={24}\n        perspective="left"\n        loop={loop}\n        label="hours"\n      />\n      <IosPickerItem\n        slideCount={60}\n        perspective="right"\n        loop={loop}\n        label="min"\n      />\n    </div>\n  )\n}\n\nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=1852-6a279bcd8c09ec3fcbad.js.map