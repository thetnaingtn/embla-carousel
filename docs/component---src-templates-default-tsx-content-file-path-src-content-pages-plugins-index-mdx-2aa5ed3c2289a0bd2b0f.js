"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[4158],{5286:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return v}});var a=n(1184),r=n(4041);function l(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",hr:"hr",h2:"h2",a:"a",span:"span"},(0,a.RP)(),e.components),{PageChildLinks:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PageChildLinks",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Plugins"),"\n",r.createElement(t.p,null,"Here is a list of available Embla Carousel plugins that will ",r.createElement(t.strong,null,"extend your carousels")," with additional features, that goes beyond the built-in Embla Carousel core features."),"\n",r.createElement(t.hr),"\n",r.createElement(t.h2,{id:"choose-a-plugin",style:{position:"relative"}},r.createElement(t.a,{href:"#choose-a-plugin","aria-label":"choose a plugin permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Choose a plugin"),"\n",r.createElement(n))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)};var o=n(352),c=n(824),m=n(408),s=n(6169),d=n(8324),u=n(9860),g=n(5455),p=n(3594),E=n(3536);const h=e=>{const{data:t,pageContext:n}=e,{siteUrl:a,author:l}=(0,m.Q)(),{title:i="",description:s,date:d}=t.mdx.frontmatter,u=(0,r.useMemo)((()=>new Date(d+" UTC").toISOString()),[d]);return r.createElement(o.G,{title:i,description:s,url:""+a+n.slug},r.createElement("script",{type:"application/ld+json"},'\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "'+(0,p.b)(a)+'",\n        "description": "'+s+'",\n        "url": "'+a+n.slug+'",\n        "headline": "'+i+'",\n        "image": "'+a+'/share-image.png",\n        "datePublished": "'+u+'",\n        "dateModified": "'+u+'",\n        "author": {\n          "@type": "Person",\n          "name": "'+l+'"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "'+l+'",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "'+a+c.A+'"\n          }\n        }\n      }\n    '))},f=e=>{const{pageContext:t,children:n}=e,{next:a,previous:l,filePath:i,id:o}=t;return r.createElement(r.Fragment,null,r.createElement(u.Q,{id:o}),r.createElement("article",{id:g.e},r.createElement(E.A,null,n)),r.createElement(s.R,{pageUrl:i}),r.createElement(d.o,{previous:l,next:a}))};function v(e){return r.createElement(f,e,r.createElement(i,e))}},9860:function(e,t,n){n.d(t,{Q:function(){return f}});var a=n(4041),r=n(3057),l=n(7286),i=(n(5483),n(3448)),o=n(3724);var c=n(3214),m=n(6341),s=n(4702),d=n(4393);const u=r.default.nav.withConfig({displayName:"PageBreadcrumbs__PageBreadcrumbsWrapper",componentId:"sc-1mlty1z-0"})(["display:flex;align-items:center;font-size:",";margin-bottom:",";"],s.$.COMPLEMENTARY,d.F.THREE),g=(0,r.css)(["color:",";padding:"," 0;"],m.lm.TEXT_LOW_CONTRAST,d.F.ONE),p=(0,r.default)(l.l).withConfig({displayName:"PageBreadcrumbs__Link",componentId:"sc-1mlty1z-1"})(["",";"],g),E=r.default.span.withConfig({displayName:"PageBreadcrumbs__ActiveTitle",componentId:"sc-1mlty1z-2"})(["",";"],g),h=(0,r.default)(c.I).withConfig({displayName:"PageBreadcrumbs__Separator",componentId:"sc-1mlty1z-3"})(["color:",";margin:0 ",";"],m.lm.TEXT_LOW_CONTRAST,d.F.ONE),f=e=>{const{id:t}=e,n=(e=>{const{flat:t}=(0,o.Y)(),n=t.find((t=>t.id===e));return t.filter((e=>(0,i.Ig)(e.slug,(null==n?void 0:n.slug)||""))).sort(((e,t)=>e.level-t.level))})(t);return 0===n.length?null:a.createElement(u,{"aria-label":"Breadcrumb Navigation"},n.map(((e,t)=>{let{id:r,slug:l,title:i}=e;return t!==n.length-1?a.createElement(a.Fragment,{key:r},a.createElement(p,{to:l},i),a.createElement(h,{size:"0.6rem",svg:"chevronRight",role:"presentation","aria-hidden":"false"})):a.createElement(E,{key:r},i)})))}},6169:function(e,t,n){n.d(t,{R:function(){return u}});var a=n(4041),r=n(3057),l=n(7286),i=n(6341),o=n(4702),c=n(4393),m=n(8893),s=n(405);const d=(0,r.default)(l.l).withConfig({displayName:"PageEditThisPage__PageEditThisPageWrapper",componentId:"sc-15acsrz-0"})(["display:inline-flex;align-items:center;text-decoration:none;font-size:",";padding-top:",";padding-bottom:",";margin-top:",";color:",";"],o.$.COMPLEMENTARY,c.F.ONE,c.F.ONE,c.F.EIGHT,i.lm.TEXT_LOW_CONTRAST),u=e=>{const{pageUrl:t}=e,n=m.t.GITHUB_DOCUMENTATION+"/"+t;return a.createElement(d,{to:n},a.createElement(s.vK,{iconSvg:"pen",iconSize:"1.5rem"},"Edit this page on GitHub"))}},8324:function(e,t,n){n.d(t,{o:function(){return f}});var a=n(4041),r=n(3057),l=n(7286),i=n(4906),o=n(6341),c=n(4393),m=n(4702),s=n(405),d=n(4094);const u=c.F.FOUR,g=r.default.nav.withConfig({displayName:"PagePagination__PagePaginationWrapper",componentId:"sc-3ejrow-0"})(["",";display:flex;justify-content:space-between;margin-top:",";"],(0,d.F)(u,"","div"),c.F.EIGHT),p=r.default.div.withConfig({displayName:"PagePagination__Item",componentId:"sc-3ejrow-1"})(["> a{color:",";}&:nth-child(2) > a{text-align:right;color:",";}"],o.lm.BRAND_PRIMARY,o.lm.BRAND_SECONDARY),E=r.default.div.withConfig({displayName:"PagePagination__ItemLabel",componentId:"sc-3ejrow-2"})(["color:",";padding-bottom:",";"],o.lm.TEXT_LOW_CONTRAST,c.F.ONE),h=r.default.div.withConfig({displayName:"PagePagination__ItemTitle",componentId:"sc-3ejrow-3"})(["display:inline-flex;align-items:center;font-weight:",";","{",";}"],m.s.MEDIUM,s.eU,i.y),f=e=>{const{next:t,previous:n}=e;return a.createElement(g,{"aria-label":"Pagination Navigation"},a.createElement(p,null,n&&a.createElement(l.l,{to:n.slug},a.createElement(E,null,"Previous"),a.createElement(h,null,a.createElement(s.vK,{iconSvg:"arrowLeft"},n.title)))),a.createElement(p,null,t&&a.createElement(l.l,{to:t.slug},a.createElement(E,null,"Next"),a.createElement(h,null,a.createElement(s.vK,{iconSvg:"arrowRight",iconSide:"right"},t.title)))))}},352:function(e,t,n){n.d(t,{G:function(){return o}});var a=n(4041),r=n(408),l=n(3594),i=n(7564);const o=e=>{const{title:t,description:n,lang:o="en",url:c,children:m}=e,s=(0,r.Q)(),d=t+" | "+(0,i.fq)(s.title),u=n||s.description;return a.createElement(a.Fragment,null,a.createElement("html",{lang:o}),a.createElement("title",null,d),a.createElement("link",{rel:"canonical",href:c}),a.createElement("meta",{name:"description",content:u}),a.createElement("meta",{name:"og:title",content:t}),a.createElement("meta",{name:"og:description",content:u}),a.createElement("meta",{name:"og:type",content:"article"}),a.createElement("meta",{name:"og:locale",content:"en_EN"}),a.createElement("meta",{name:"og:url",content:c}),a.createElement("meta",{name:"og:site_name",content:(0,l.b)(s.siteUrl)}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:s.author}),a.createElement("meta",{name:"twitter:title",content:t}),a.createElement("meta",{name:"twitter:description",content:u}),m)}},3594:function(e,t,n){n.d(t,{b:function(){return a}});const a=e=>e.replace(/(^\w+:|^)\/\//,"")},824:function(e,t,n){t.A=n.p+"static/maskable-36b9e327abc26d5d02e9350d184a058f.png"}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-src-content-pages-plugins-index-mdx-2aa5ed3c2289a0bd2b0f.js.map