(self.webpackChunkcabbielegal=self.webpackChunkcabbielegal||[]).push([[353],{371:(e,t,a)=>{var r,l=Object.create,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,p=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let l of o(t))c.call(e,l)||l===a||i(e,l,{get:()=>t[l],enumerable:!(r=n(t,l))||r.enumerable});return e},u=(e,t,a)=>(((e,t,a)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>g}),e.exports=(r=d,p(i({},"__esModule",{value:!0}),r));var h=((e,t,a)=>(a=null!=e?l(s(e)):{},p(!t&&e&&e.__esModule?a:i(a,"default",{value:e,enumerable:!0}),e)))(a(5043));const b="64px",m={};class g extends h.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"state",{image:null}),u(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:a}=this.props;e.url===t&&e.light===a||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:a,oEmbedUrl:r}=e;if(!h.default.isValidElement(a))if("string"!==typeof a){if(!m[t])return this.setState({image:null}),window.fetch(r.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const a=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:a}),m[t]=a}}));this.setState({image:m[t]})}else this.setState({image:a})}render(){const{light:e,onClick:t,playIcon:a,previewTabIndex:r,previewAriaLabel:l}=this.props,{image:i}=this.state,n=h.default.isValidElement(e),o={display:"flex",alignItems:"center",justifyContent:"center"},s={preview:{width:"100%",height:"100%",backgroundImage:i&&!n?"url(".concat(i,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer",...o},shadow:{background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:b,width:b,height:b,position:n?"absolute":void 0,...o},playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},c=h.default.createElement("div",{style:s.shadow,className:"react-player__shadow"},h.default.createElement("div",{style:s.playIcon,className:"react-player__play-icon"}));return h.default.createElement("div",{style:s.preview,className:"react-player__preview",onClick:t,tabIndex:r,onKeyPress:this.handleKeyPress,...l?{"aria-label":l}:{}},n?e:null,a||c)}}}}]);
//# sourceMappingURL=reactPlayerPreview.ca7ddd65.chunk.js.map