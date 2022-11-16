(self.webpackChunkreact_simple_movie=self.webpackChunkreact_simple_movie||[]).push([[305],{771:function(e,r,t){"use strict";t.d(r,{d:function(){return c},Z:function(){return u}});t(791);var n=t(871),l=t(197),s=t(460),i=t(470),a=t(184),o=function(e){return(0,a.jsx)("div",{className:"skeleton ".concat(e.className),style:{height:e.height,width:e.width||"100%",borderRadius:e.radius}})};var c=function(){return(0,a.jsxs)("div",{className:"movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none",children:[(0,a.jsx)(o,{width:"100%",height:"250px",radius:"8px",className:"mb-5"}),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-3",children:(0,a.jsx)(o,{width:"100%",height:"20px"})}),(0,a.jsxs)("div",{className:"flex items-center justify-between text-sm opacity-50 mb-10",children:[(0,a.jsx)("span",{children:(0,a.jsx)(o,{width:"5px",height:"10px"})}),(0,a.jsx)("span",{children:(0,a.jsx)(o,{width:"30px",height:"10px"})})]}),(0,a.jsx)(o,{width:"100%",height:"45px",radius:"6px"})]})]})},u=(0,i.withErrorBoundary)((function(e){var r=e.item,t=r.title,i=r.vote_average,o=r.release_date,c=r.poster_path,u=r.id,d=(0,n.s0)();return(0,a.jsxs)("div",{className:"movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 text-white select-none",children:[(0,a.jsx)("img",{src:l.Qo.item500(c),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-5"}),(0,a.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-3",children:t}),(0,a.jsxs)("div",{className:"flex items-center justify-between text-sm opacity-50 mb-10",children:[(0,a.jsx)("span",{children:new Date(o).getFullYear()}),(0,a.jsx)("span",{children:i})]}),(0,a.jsx)(s.Z,{bgColor:"secondary",onClick:function(){return d("/movies/".concat(u))},children:"Watch"})]})]})}),{FallbackComponent:function(){return(0,a.jsx)("p",{className:"bg-red-50 text-red-400",children:"Something went wrong with this component"})}})},305:function(e,r,t){"use strict";t.r(r);t(791);var n=t(871),l=t(197),s=t(419),i=t(234),a=t(771),o=t(184);function c(){var e=(0,n.UO)().movieId,r=(0,s.ZP)(l.Qo.getMovieMeta(e,"credits"),l._i),t=r.data;r.error;if(!t)return null;var i=t.cast;return!i||i.length<=0?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"text-center text-3xl mb-10",children:"Casts"}),(0,o.jsx)("div",{className:"grid grid-cols-4 gap-5",children:i.slice(0,4).map((function(e){return(0,o.jsxs)("div",{className:"cast-item",children:[(0,o.jsx)("img",{src:l.Qo.imageOriginal(e.profile_path),alt:"",className:"w-full h-[350px] object-cover rounded-lg"}),(0,o.jsx)("h3",{className:"text-xl font-medium",children:e.name})]},e.id)}))})]})}function u(){var e=(0,n.UO)().movieId,r=(0,s.ZP)(l.Qo.getMovieMeta(e,"videos"),l._i),t=r.data;r.error;if(!t)return null;var i=t.results;return!i||i.length<=0?null:(0,o.jsx)("div",{className:"py-10",children:i.slice(0,1).map((function(e){return(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("h3",{className:"mb-5 text-xl font-medium p-3 bg-primary inline-block",children:e.name}),(0,o.jsx)("div",{className:"w-full aspect-video",children:(0,o.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(e.key),title:"Youtube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,className:"w-full h-full object-fill"})},e.id)]},e.id)}))})}function d(){var e=(0,n.UO)().movieId,r=(0,s.ZP)(l.Qo.getMovieMeta(e,"similar"),l._i),t=r.data;r.error;if(!t)return null;var c=t.results;return!c||c.length<=0?null:(0,o.jsxs)("div",{className:"py-10",children:[(0,o.jsx)("h2",{className:"text-3xl font-medium mb-10",children:"Similar movies"}),(0,o.jsx)("div",{className:"movie-list",children:(0,o.jsx)(i.tq,{grabCursor:"true",spaceBetween:40,slidesPerView:"auto",children:c.length>0&&c.map((function(e){return(0,o.jsx)(i.o5,{children:(0,o.jsx)(a.Z,{item:e})},e.id)}))})})]})}r.default=function(){var e=(0,n.UO)().movieId,r=(0,s.ZP)(l.Qo.getMovieDetails(e),l._i),t=r.data;r.error;if(!t)return null;var i=t.backdrop_path,a=t.poster_path,m=t.title,h=t.genres,p=t.overview;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"w-full h-[600px] relative",children:[(0,o.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-70"}),(0,o.jsx)("div",{className:"w-full h-full bg-cover bg-no-repeat",style:{backgroundImage:"url(".concat(l.Qo.imageOriginal(i),")")}})]}),(0,o.jsx)("div",{className:"w-full h-[400px] max-w-[500px] mx-auto -mt-[200px] relative z-10 mb-10",children:(0,o.jsx)("img",{src:l.Qo.imageOriginal(a),alt:"",className:"w-full h-full object-cover rounded-lg"})}),(0,o.jsx)("h1",{className:"text-center text-4xl font-bold text-white mb-10",children:m}),h.length>0&&(0,o.jsx)("div",{className:"flex items-center justify-center gap-x-5 mb-10",children:h.map((function(e){return(0,o.jsx)("span",{className:"py-2 px-4 border-primary text-primary border rounded",children:e.name},e.id)}))}),(0,o.jsx)("p",{className:"text-center leading-relaxed max-w-[600px] mx-auto mb-10",children:p}),(0,o.jsx)(c,{}),(0,o.jsx)(u,{}),(0,o.jsx)(d,{})]})}},470:function(e,r,t){!function(e,r){"use strict";function t(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var n=t(r);function l(e,r){return l=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},l(e,r)}function s(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,l(e,r)}var i=function(e,r){return void 0===e&&(e=[]),void 0===r&&(r=[]),e.length!==r.length||e.some((function(e,t){return!Object.is(e,r[t])}))},a={error:null},o=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(r=e.call.apply(e,[this].concat(n))||this).state=a,r.resetErrorBoundary=function(){for(var e,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];null==r.props.onReset||(e=r.props).onReset.apply(e,n),r.reset()},r}s(r,e),r.getDerivedStateFromError=function(e){return{error:e}};var t=r.prototype;return t.reset=function(){this.setState(a)},t.componentDidCatch=function(e,r){var t,n;null==(t=(n=this.props).onError)||t.call(n,e,r)},t.componentDidUpdate=function(e,r){var t,n,l=this.state.error,s=this.props.resetKeys;null!==l&&null!==r.error&&i(e.resetKeys,s)&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,e.resetKeys,s),this.reset())},t.render=function(){var e=this.state.error,r=this.props,t=r.fallbackRender,l=r.FallbackComponent,s=r.fallback;if(null!==e){var i={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(s))return s;if("function"===typeof t)return t(i);if(l)return n.createElement(l,i);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},r}(n.Component);function c(e,r){var t=function(t){return n.createElement(o,r,n.createElement(e,t))},l=e.displayName||e.name||"Unknown";return t.displayName="withErrorBoundary("+l+")",t}function u(e){var r=n.useState(null),t=r[0],l=r[1];if(null!=e)throw e;if(null!=t)throw t;return l}e.ErrorBoundary=o,e.useErrorHandler=u,e.withErrorBoundary=c,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(791))}}]);
//# sourceMappingURL=305.dacf39ee.chunk.js.map