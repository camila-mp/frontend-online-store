(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=(a(30),a(18)),l=a(12),s=a.n(l),u=a(15),d=a(13),m=a(1),p=a(2),h=a(5),b=a(4),f=a(3),v=a(8),g=a(6),C=(a(32),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(h.a)(n)),n.isInCart=n.isInCart.bind(Object(h.a)(n)),n.amountInCart=n.amountInCart.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"handleClick",value:function(){var e=this.props,t=e.product;(0,e.addToCart)(t)}},{key:"isInCart",value:function(){var e=this.props,t=e.cartProducts,a=e.product;return t.some((function(e){return e.id===a.id}))}},{key:"amountInCart",value:function(){var e=this.props,t=e.cartProducts,a=e.product;return t.filter((function(e){return e.id===a.id})).length}},{key:"render",value:function(){var e=this.props,t=e.product,a=e.getProductDetail,n=t.title,c=t.thumbnail_id,o=t.price,i=t.shipping.free_shipping;return r.a.createElement("div",{"data-testid":"product",className:this.isInCart()?"product-card product-in-cart":"product-card"},r.a.createElement(v.b,{onClick:function(){return a(t)},"data-testid":"product-detail-link",to:"/details",className:"product-card-info"},r.a.createElement("p",{className:"product-card-title"},n),r.a.createElement("div",{className:"product-card-image-div"},r.a.createElement("img",{className:"product-card-image",src:"https://http2.mlstatic.com/D_NQ_NP_".concat(c,"-W.webp"),alt:"Imagem do Produto"})),r.a.createElement("p",{className:"product-card-price"},"R$ ".concat(o.toFixed(2)))),i&&r.a.createElement("p",{"data-testid":"free-shipping"},"Frete Gr\xe1tis!"),r.a.createElement("button",{type:"button",onClick:this.handleClick,"data-testid":"product-add-to-cart",name:"selectedProduct",className:"add-cart-button"},"Adicionar ao carrinho",this.isInCart()&&" ( ".concat(this.amountInCart()," )")))}}]),a}(r.a.Component)),E=(a(41),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchProducts)()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.query,n=t.category,r=t.fetchProducts,c=e.query,o=e.category;c===a&&o===n||r()}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.loading,n=e.getProductDetail,c=e.addToCart,o=e.cartProducts,i=e.onChange,l=e.listOrder;return a?r.a.createElement("p",{className:"main-container"},"Carregando..."):0===t.length?r.a.createElement("div",{className:"main-container"},r.a.createElement("p",null,"Nenhum produto foi encontrado"),r.a.createElement("i",{className:"bi bi-x-circle main-container-icon"})):("maior"===l&&t.sort((function(e,t){return t.price-e.price})),"menor"===l&&t.sort((function(e,t){return e.price-t.price})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"listOrder"},"Ordenado por:",r.a.createElement("select",{className:"product-list-order",name:"listOrder",onChange:i},r.a.createElement("option",{value:""},"-"),r.a.createElement("option",{value:"maior"},"Maior Pre\xe7o"),r.a.createElement("option",{value:"menor"},"Menor Pre\xe7o"))),r.a.createElement("div",{className:"product-container"},t.map((function(e){return r.a.createElement(C,{key:e.id,product:e,addToCart:c,getProductDetail:n,cartProducts:o})})))))}}]),a}(r.a.Component)),k=(a(42),a(43),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalProductsInCart,a=e.fastCheckout;return r.a.createElement("button",{type:"button",onClick:a,className:"cart-button"},r.a.createElement("i",{className:"bi bi-cart2"}),r.a.createElement("div",{"data-testid":"shopping-cart-size",className:"btn-cart-amount"},t))}}]),a}(n.Component)),y=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(h.a)(n)),n.state={search:""},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(d.a)({},a,n))}},{key:"handleClick",value:function(e){var t=e.target.name;(0,this.props.getState)(t,this.state.search)}},{key:"handleKeyPress",value:function(e){13===e.keyCode&&this.btn.click()}},{key:"render",value:function(){var e=this,t=this.state.search,a=this.props,n=a.totalProductsInCart,c=a.fastCheckout;return r.a.createElement("header",null,r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{src:"https://logospng.org/download/mercado-livre/logo-mercado-livre-256.png",alt:"Logo Mercado Livre"})),r.a.createElement("input",{name:"search",value:t,"data-testid":"query-input",type:"text",onChange:this.handleChange,onKeyUp:this.handleKeyPress}),r.a.createElement(v.b,{to:"/search"},r.a.createElement("button",{"data-testid":"query-button",type:"button",onClick:this.handleClick,name:"searchQuery",ref:function(t){e.btn=t}},"Procurar")),r.a.createElement(k,{totalProductsInCart:n,fastCheckout:c}))}}]),a}(r.a.Component),O=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.amount,n=e.addToCart,c=e.rmvFromCart,o=t.title,i=t.thumbnail_id,l=t.price;return r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},o),r.a.createElement("img",{src:"https://http2.mlstatic.com/D_NQ_NP_".concat(i,"-W.webp"),alt:"Imagem do Produto"}),r.a.createElement("p",null,l),r.a.createElement("button",{"data-testid":"product-decrease-quantity",type:"button",onClick:function(){return c(t)}},"-"),r.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},a),r.a.createElement("button",{"data-testid":"product-increase-quantity",type:"button",onClick:function(){return n(t)}},"+"),r.a.createElement("button",{type:"button"},"X"))}}]),a}(r.a.Component),j=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).checkCart=n.checkCart.bind(Object(h.a)(n)),n.state={empty:!0},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.checkCart()}},{key:"checkCart",value:function(){this.props.cartProducts.length>0&&this.setState({empty:!1})}},{key:"render",value:function(){var e=this.state.empty,t=this.props,a=t.filteredProducts,n=t.addToCart,c=t.rmvFromCart;return e?r.a.createElement("div",{className:"main-container"},r.a.createElement("h3",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio")):r.a.createElement("div",null,a.map((function(e){var t=e.amount,a=e.product;return r.a.createElement(O,{key:a.id,product:a,amount:t,addToCart:n,rmvFromCart:c})})),r.a.createElement(v.b,{"data-testid":"checkout-products",to:"/checkout"},"Finalizar Compra!"))}}]),a}(n.Component),P=(a(44),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."),r.a.createElement("i",{className:"bi bi-search main-container-icon"}))}}]),a}(r.a.Component));function N(){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.mercadolibre.com/sites/MLB/categories").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a,"}")).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(45);var x=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"handleClick",value:function(e){var t=e.target,a=t.name,n=t.id;(0,this.props.getState)(a,n)}},{key:"render",value:function(){var e=this,t=this.props.categoryList;return r.a.createElement("div",{className:"category-filter"},t.map((function(t){return r.a.createElement(v.b,{to:"/search",key:t.id,"data-testid":"category",id:t.id,name:"category",onClick:e.handleClick},t.name)})))}}]),a}(r.a.Component),_=(a(46),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,r.a.createElement("span",null,"Desenvolvido por "),r.a.createElement("a",{href:"https://www.linkedin.com/in/camila-malvessi-6b3367110/",target:"_blank",rel:"noopener noreferrer"}," Camila, "),r.a.createElement("a",{href:"https://www.linkedin.com/in/felipelouzeiro/",target:"_blank",rel:"noopener noreferrer"}," Felipe, "),r.a.createElement("a",{href:"https://linkedin.com/in/gabrielmedeiro5",target:"_blank",rel:"noopener noreferrer"}," Gabriel, "),r.a.createElement("a",{href:"https://www.linkedin.com/in/gabriela-guerra-rabelo-0171991b0",target:"_blank",rel:"noopener noreferrer"}," Gabriela, "),r.a.createElement("a",{href:"https://www.linkedin.com/in/guilherme-hermenegildo-junior/",target:"_blank",rel:"noopener noreferrer"}," Guilherme e "),r.a.createElement("a",{href:"https://www.rslfilho.com.br/",target:"_blank",rel:"noopener noreferrer"}," Roberval"),r.a.createElement("span",null," usando React.js - Bloco 14 - "),r.a.createElement("a",{href:"http://www.betrybe.com.br/",target:"_blank",rel:"noopener noreferrer"},"Trybe")))}}]),a}(n.Component)),I=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={email:"",textArea:"",rating:0},n.submitBtn=n.submitBtn.bind(Object(h.a)(n)),n.btnClick=n.btnClick.bind(Object(h.a)(n)),n.onChangeClick=n.onChangeClick.bind(Object(h.a)(n)),n.loadLocalStorage=n.loadLocalStorage.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.loadLocalStorage()}},{key:"onChangeClick",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(d.a)({},a,n))}},{key:"submitBtn",value:function(){localStorage.setItem("user",JSON.stringify(this.state))}},{key:"btnClick",value:function(e){this.setState({rating:e.target.value})}},{key:"loadLocalStorage",value:function(){JSON.parse(localStorage.getItem("user"))&&this.setState(localStorage)}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.textArea;return r.a.createElement("form",null,r.a.createElement("h2",null,"Avalia\xe7\xf5es"),r.a.createElement("label",{htmlFor:"email"},r.a.createElement("input",{type:"email",name:"email",id:"email",value:t,placeholder:"Email",onChange:this.onChangeClick})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"rating"},r.a.createElement("input",{type:"radio",id:"rating",onClick:this.btnClick})),r.a.createElement("label",{htmlFor:"rating"},r.a.createElement("input",{type:"radio",id:"rating",onClick:this.btnClick})),r.a.createElement("label",{htmlFor:"rating"},r.a.createElement("input",{type:"radio",id:"rating",onClick:this.btnClick})),r.a.createElement("label",{htmlFor:"rating"},r.a.createElement("input",{type:"radio",id:"rating",onClick:this.btnClick})),r.a.createElement("label",{htmlFor:"rating"},r.a.createElement("input",{type:"radio",id:"rating",onClick:this.btnClick}))),r.a.createElement("label",{htmlFor:"textArea"},r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",name:"textArea",id:"textArea",value:a,placeholder:"Mensagem (opcional)",onChange:this.onChangeClick})),r.a.createElement("button",{type:"submit",id:"btn-form",onClick:this.submitBtn},"Avaliar"))}}]),a}(r.a.Component),D=(a(47),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).addToCart=n.addToCart.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"addToCart",value:function(){var e=this.props,t=e.addToCart;t(e.product)}},{key:"render",value:function(){var e=this.props.product,t=e.title,a=e.price,n=e.thumbnail_id,c=e.sold_quantity,o=e.available_quantity,i=e.address,l=e.seller,s=e.shipping,u=l.permalink,d=i.city_name,m=i.state_name,p=s.free_shipping;return r.a.createElement("div",{className:"product-details-container"},r.a.createElement("div",{className:"product-details-img-div"},r.a.createElement("img",{src:"https://http2.mlstatic.com/D_NQ_NP_".concat(n,"-W.webp"),alt:"Imagem do Produto",className:"product-details-img"})),r.a.createElement("div",{className:"product-details-side"},r.a.createElement("p",{"data-testid":"product-detail-name",className:"product-details-title"},t),r.a.createElement("div",{className:"product-details-price-shipping"},r.a.createElement("p",{className:"product-details-price"},"R$ ".concat(a.toFixed(2))),p?r.a.createElement("p",{className:"product-details-shipping"},"Frete Gr\xe1tis!"):null),r.a.createElement("div",{className:"product-details-info"},r.a.createElement("p",null,"Vendidos: ".concat(c)),r.a.createElement("p",null,"Dispon\xedvel: ".concat(o)),r.a.createElement("p",null,"".concat(d," - ").concat(m))),r.a.createElement("div",{className:"product-details-buttons"},r.a.createElement("a",{className:"product-details-button-seller",href:u,target:"_blank",rel:"noopener noreferrer"},"P\xe1gina do Vendedor",r.a.createElement("i",{className:"bi bi-box-arrow-in-up-right"})),r.a.createElement("button",{type:"button",name:"selectedProduct","data-testid":"product-detail-add-to-cart",onClick:this.addToCart,className:"add-cart-button"},"Adicione ao carrinho",r.a.createElement("i",{className:"bi bi-cart2"})),r.a.createElement(v.b,{className:"product-details-button-back",to:"/search"},"Voltar",r.a.createElement("i",{className:"bi bi-box-arrow-in-left"})),r.a.createElement(I,null))))}}]),a}(r.a.Component)),T=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.type,n=e.value,c=e.name,o=e.testid,i=e.onChangeHandle,l=e.isRequired;return"radio"===a?r.a.createElement("div",{className:"checkout-radio"},r.a.createElement("input",{name:c,type:a,value:n,onChange:i}),r.a.createElement("label",{htmlFor:c},t)):r.a.createElement("label",{htmlFor:c},t,r.a.createElement("input",{name:c,type:a,"data-testid":o,value:n,onChange:i,required:l}))}}]),a}(r.a.Component);T.defaultProps={label:"",testid:"",isRequired:!1};var A=T,R=(a(48),["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MS","MT","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]),q=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderBuyerInfo",value:function(){var e=this.props,t=e.onChangeHandle,a=e.nomeCompleto,n=e.email,c=e.cpf,o=e.telefone,i=e.cep,l=e.endereco,s=e.cidade;return r.a.createElement("div",{className:"checkout-info"},r.a.createElement(A,{label:"Nome Completo:",type:"text",value:a,name:"nomeCompleto",testid:"checkout-fullname",onChangeHandle:t,isRequired:!0}),r.a.createElement(A,{label:"Email:",type:"email",value:n,name:"email",testid:"checkout-email",onChangeHandle:t,isRequired:!0}),r.a.createElement(A,{label:"CPF:",type:"text",value:c,name:"cpf",testid:"checkout-cpf",onChangeHandle:t,isRequired:!0}),r.a.createElement(A,{label:"Telefone:",type:"text",value:o,name:"telefone",testid:"checkout-phone",onChangeHandle:t,isRequired:!0}),r.a.createElement(A,{label:"CEP:",type:"text",value:i,name:"cep",testid:"checkout-cep",onChangeHandle:t,isRequired:!0}),r.a.createElement(A,{label:"Endere\xe7o:",type:"text",value:l,name:"endereco",testid:"checkout-address",onChangeHandle:t,isRequired:!0}),r.a.createElement(A,{label:"Cidade:",type:"text",value:s,name:"cidade",onChangeHandle:t,isRequired:!0}),r.a.createElement("label",{htmlFor:"estado"},"Estado:",r.a.createElement("select",{name:"estado",onChange:t},R.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))}},{key:"renderPaymentMethod",value:function(){var e=this.props.onChangeHandle;return r.a.createElement("div",{className:"checkout-payment"},r.a.createElement(A,{label:"Boleto",type:"radio",value:"boleto",name:"payment",onChangeHandle:e}),r.a.createElement(A,{label:"Cart\xe3o de Cr\xe9dito",type:"radio",value:"cc",name:"payment",onChangeHandle:e}),r.a.createElement(A,{label:"Pix",type:"radio",value:"pix",name:"payment",onChangeHandle:e}))}},{key:"render",value:function(){var e=this.props,t=e.filteredProducts,a=e.btnClick,n=0;return r.a.createElement("div",{className:"checkout-container"},r.a.createElement("p",null,"Detalhes da compra:"),r.a.createElement("div",{className:"checkout-products-list"},t.map((function(e){var t=e.amount,a=e.product;n+=Number(a.price)*t;var c=a.thumbnail_id;return r.a.createElement("div",{className:"checkout-product",key:a.id},r.a.createElement("div",{className:"checkout-image"},r.a.createElement("img",{className:"product-card-image",src:"https://http2.mlstatic.com/D_NQ_NP_".concat(c,"-W.webp"),alt:"Imagem do Produto"})),r.a.createElement("div",{className:"checkout-product-info"},r.a.createElement("p",null,a.title),r.a.createElement("p",null,"Quantidade: ".concat(t)),r.a.createElement("p",null,"Pre\xe7o: R$".concat(a.price))))})),r.a.createElement("h3",null,"Total: R$".concat(n))),r.a.createElement("form",{className:"checkout-form"},r.a.createElement("p",null,"Informa\xe7\xf5es para entrega:"),this.renderBuyerInfo(),r.a.createElement("p",null,"M\xe9todo de Pagamento:"),this.renderPaymentMethod(),r.a.createElement("button",{type:"button",onClick:a},"Confirmar Pagamento")))}}]),a}(r.a.Component),H=a(16),M=(a(49),a(50),function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.amount,a=e.product,n=a.title,c=a.thumbnail_id,o=a.price;return r.a.createElement("div",{className:"fast-checkout-product"},r.a.createElement("div",{className:"fast-checkout-product-img-div"},r.a.createElement("img",{src:"https://http2.mlstatic.com/D_NQ_NP_".concat(c,"-W.webp"),alt:"Imagem do Produto",className:"fast-checkout-product-img"})),r.a.createElement("div",{className:"fast-checkout-product-info"},r.a.createElement("p",{className:"fast-checkout-product-name"},n),r.a.createElement("div",{className:"fast-checkout-product-setup"},r.a.createElement("p",{className:"fast-checkout-product-price"},"R$ ".concat(o.toFixed(2))),r.a.createElement(H.d,null),r.a.createElement("p",{className:"fast-checkout-product-amount"},t),r.a.createElement(H.c,null),r.a.createElement(H.b,null))))}}]),a}(n.Component)),B=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.showFastCheckout,a=e.fastCheckout,n=e.filteredProducts,c=0;return r.a.createElement("div",{className:t?"fast-checkout active":"fast-checkout"},r.a.createElement("div",{className:"fast-checkout-top-buttons"},r.a.createElement(v.b,{to:"/shopping-cart","data-testid":"shopping-cart-button",className:"fast-btn-cart"},r.a.createElement("i",{className:"bi bi-cart2"})),r.a.createElement(H.a,{onClick:a})),r.a.createElement("p",{className:"fast-checkout-heading"},"Carrinho de Compras"),r.a.createElement("div",{className:"fast-checkout-products"},n.map((function(e){var t=e.amount,a=e.product;return c+=t*a.price,r.a.createElement(M,{key:"FC-".concat(a.id),amount:t,product:a})}))),r.a.createElement("p",{className:"fast-checkout-total"},"Pre\xe7o Total: R$"," ".concat(c.toFixed(2))),r.a.createElement(v.b,{className:"fast-checkout-button",to:"/checkout"},"Finalizar Compra!"))}}]),a}(n.Component),L={nomeCompleto:"",email:"",cpf:"",telefone:"",cep:"",endereco:"",cidade:"",estado:"",payment:"boleto"},Q=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(m.a)(this,a),(n=t.call(this,e)).getState=n.getState.bind(Object(h.a)(n)),n.addToCart=n.addToCart.bind(Object(h.a)(n)),n.rmvFromCart=n.rmvFromCart.bind(Object(h.a)(n)),n.fetchProducts=n.fetchProducts.bind(Object(h.a)(n)),n.fastCheckout=n.fastCheckout.bind(Object(h.a)(n)),n.getProductDetail=n.getProductDetail.bind(Object(h.a)(n)),n.onChangeHandle=n.onChangeHandle.bind(Object(h.a)(n)),n.productAmountFilter=n.productAmountFilter.bind(Object(h.a)(n)),n.paymentButtonClick=n.paymentButtonClick.bind(Object(h.a)(n));var r=JSON.parse(localStorage.getItem("cartProducts"));return n.state={categoryList:[],category:"",searchQuery:"",cartProducts:r||[],productDetails:{},list:[],loading:!0,nomeCompleto:"",email:"",cpf:"",telefone:"",cep:"",endereco:"",cidade:"",estado:"",payment:"boleto",filteredProducts:[],fastCheckout:!1,listOrder:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getCategoryList(),this.productAmountFilter()}},{key:"componentDidUpdate",value:function(e,t){this.storeProducts(),this.state.cartProducts.length!==t.cartProducts.length&&this.productAmountFilter()}},{key:"onChangeHandle",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(d.a)({},a,n))}},{key:"getState",value:function(e,t){this.setState(Object(d.a)({},e,t))}},{key:"getCategoryList",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({categoryList:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProductDetail",value:function(e){this.setState({productDetails:e})}},{key:"fastCheckout",value:function(){var e=this.state.fastCheckout;this.setState({fastCheckout:!e})}},{key:"storeProducts",value:function(){var e=this.state.cartProducts;localStorage.setItem("cartProducts",JSON.stringify(e))}},{key:"addToCart",value:function(e){this.setState((function(t){return{cartProducts:[].concat(Object(i.a)(t.cartProducts),[e])}}))}},{key:"rmvFromCart",value:function(e){var t=this.state.cartProducts,a=Object(i.a)(t),n=a.lastIndexOf(e);a.splice(n,1),this.setState({cartProducts:a})}},{key:"fetchProducts",value:function(){var e=this,t=this.state,a=t.searchQuery,n=t.category;this.setState({loading:!0},Object(u.a)(s.a.mark((function t(){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,a);case 2:r=t.sent,e.setState({list:r.results,loading:!1});case 4:case"end":return t.stop()}}),t)}))))}},{key:"productAmountFilter",value:function(){var e=this.state.cartProducts,t=[];e.forEach((function(a){if(!t.some((function(e){return e.product.id===a.id}))){var n=e.filter((function(e){return a.id===e.id}));t=[].concat(Object(i.a)(t),[{amount:n.length,product:a}])}})),this.setState({filteredProducts:t})}},{key:"paymentButtonClick",value:function(){this.setState(L)}},{key:"render",value:function(){var e=this,t=this.state,a=t.categoryList,n=t.loading,c=t.list,o=t.productDetails,i=t.searchQuery,l=t.category,s=t.cartProducts,u=t.nomeCompleto,d=t.email,m=t.cpf,p=t.telefone,h=t.cep,b=t.endereco,f=t.cidade,C=t.estado,k=t.payment,O=t.filteredProducts,N=t.fastCheckout,S=t.listOrder;return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,null,r.a.createElement(y,{getState:this.getState,totalProductsInCart:s.length,fastCheckout:this.fastCheckout}),r.a.createElement(B,{showFastCheckout:N,fastCheckout:this.fastCheckout,filteredProducts:O,cartProducts:s}),r.a.createElement("section",{className:"body-container"},r.a.createElement(x,{categoryList:a,getState:this.getState}),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/shopping-cart",render:function(t){return r.a.createElement(j,Object.assign({},t,{cartProducts:s,productAmountFilter:e.productAmountFilter,filteredProducts:O,addToCart:e.addToCart,rmvFromCart:e.rmvFromCart}))}}),r.a.createElement(g.a,{path:"/search",render:function(t){return r.a.createElement(E,Object.assign({},t,{query:i,category:l,addToCart:e.addToCart,list:c,loading:n,fetchProducts:e.fetchProducts,getProductDetail:e.getProductDetail,cartProducts:s,listOrder:S,onChange:e.onChangeHandle}))}}),r.a.createElement(g.a,{exact:!0,path:"/details",render:function(t){return r.a.createElement(D,Object.assign({},t,{product:o,addToCart:e.addToCart}))}}),r.a.createElement(g.a,{exact:!0,path:"/checkout",render:function(t){return r.a.createElement(q,Object.assign({},t,{filteredProducts:O,onChangeHandle:e.onChangeHandle,nomeCompleto:u,email:d,cpf:m,telefone:p,cep:h,endereco:b,cidade:f,estado:C,payment:k,btnClick:e.paymentButtonClick}))}}),r.a.createElement(g.a,{exact:!0,path:"/",component:P})))),r.a.createElement(_,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.61ce4faa.chunk.js.map