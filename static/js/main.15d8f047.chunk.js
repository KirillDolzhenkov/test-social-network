(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{130:function(e,t,n){e.exports={profile:"Profile_profile__1LESU"}},131:function(e,t,n){e.exports={selectedPage:"Pagination_selectedPage__3hHKS"}},14:function(e,t,n){e.exports={navbar:"Navbar_navbar__27a1U",item:"Navbar_item__2Sz7A",active:"Navbar_active__3wMdQ"}},165:function(e,t,n){},166:function(e,t,n){},25:function(e,t,n){e.exports={loginPage:"Login_loginPage__2QSa1",loginForm:"Login_loginForm__3_yRp",field:"Login_field__1npoC",pass:"Login_pass__2LVaL",iconPass:"Login_iconPass__2mybm",items:"Login_items__XJym6",checkBox:"Login_checkBox__-IgJh",loginButton:"Login_loginButton__34rpb"}},26:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1o5hr",items:"ProfileInfo_items__Tow0c",name:"ProfileInfo_name__3_29G",statusStaticMode:"ProfileInfo_statusStaticMode__1JGsp",statusEditMode:"ProfileInfo_statusEditMode__2KjhT",statusDefault:"ProfileInfo_statusDefault__tIH07"}},27:function(e,t,n){e.exports={dialogsPage:"Dialogs_dialogsPage__30RqF",dialogs:"Dialogs_dialogs__hPjJa",dialog:"Dialogs_dialog__3R01s",messages:"Dialogs_messages__2b5iv",messageElements:"Dialogs_messageElements__BpFaC",inputAreaElements:"Dialogs_inputAreaElements__1GU_0",message:"Dialogs_message__2JtN6"}},289:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(10),i=n(67),c=n.n(i),o=n(9),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))},l=(n(165),n(21)),d=n(22),j=n(24),b=n(23),f=n(11),O=n(8),m=(n(166),n(3)),p=n(13),h=n.n(p),g=n(33),x=n(128),_=n.n(x).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),v=function(e,t){return _.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},S=function(e){return _.post("follow/".concat(e))},P=function(e){return _.delete("follow/".concat(e))},N={getProfile:function(e){return _.get("profile/".concat(e))},getUserStatus:function(e){return _.get("/profile/status/".concat(e))},updateUserStatus:function(e){return _.put("/profile/status",{status:e})}},E=function(){return _.get("auth/me")},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.post("/auth/login",{email:e,password:t,rememberMe:n})},w=function(){return _.delete("/auth/login")},k=n(41),T={id:null,email:null,login:null,isAuth:!1},U=function(e,t,n,s){return{type:"SN/AUTH/SET_AUTH_USER_DATA",payload:{id:e,email:t,login:n,isAuth:s}}},L=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){var n,s,a,r,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,a=s.id,r=s.email,i=s.login,t(U(a,r,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:0===e.sent.data.resultCode&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=n(47),A=n.n(I),F=n.p+"static/media/logo_part_1.230df42a.png",M=n.p+"static/media/logo_part_2.7aafc755.png",R=n(0),D=function(e){var t=e.isAuth,n=e.login,s=e.logoutUserThunk;return Object(R.jsxs)("div",{className:A.a.header,children:[Object(R.jsxs)(o.b,{to:"/news",className:A.a.logoArea,children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:F,alt:"logoPart1"})}),Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:M,alt:"logoPart2"})})]}),Object(R.jsx)("div",{className:A.a.loginBlock,children:t?Object(R.jsxs)("div",{className:A.a.items,children:[Object(R.jsx)("div",{}),Object(R.jsxs)("div",{children:[n," "]}),Object(R.jsx)(o.b,{to:"/login",onClick:function(){s()},children:"Logout"})]}):Object(R.jsxs)("div",{className:A.a.items,children:[Object(R.jsx)(o.b,{to:"/login",children:"Login "}),Object(R.jsx)(o.b,{to:"/login",children:"Sign up "})]})})]})},B=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(R.jsx)(D,Object(m.a)({},this.props))}}]),n}(a.a.Component),G=Object(r.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:U,logoutUserThunk:y})(B),z=function(e){return Object(R.jsx)("div",{children:"Music Page's Content"})},H=function(e){return Object(R.jsx)("div",{children:"News Page's Content"})},W=n(14),K=n.n(W),V=function(e){return Object(R.jsxs)("div",{className:K.a.navbar,children:[Object(R.jsx)("div",{className:K.a.item,children:Object(R.jsx)(o.b,{to:"/Profile",activeClassName:K.a.active,children:"My profile"})}),Object(R.jsx)("div",{className:K.a.item,children:Object(R.jsx)(o.b,{to:"/News",activeClassName:K.a.active,children:"News"})}),Object(R.jsx)("div",{className:K.a.item,children:Object(R.jsx)(o.b,{to:"/Dialogs",activeClassName:K.a.active,children:"Messages"})}),Object(R.jsx)("div",{className:K.a.item,children:Object(R.jsx)(o.b,{to:"/Users",activeClassName:K.a.active,children:"Users"})}),Object(R.jsx)("div",{className:K.a.item,children:Object(R.jsx)(o.b,{to:"/Music",activeClassName:K.a.active,children:"Music"})}),Object(R.jsx)("div",{className:K.a.item,children:Object(R.jsx)(o.b,{to:"/Settings",activeClassName:K.a.active,children:"Settings"})})]})},q=n(58),J=n(125),X=n(126),Q=n(25),Y=n.n(Q),Z=n(72),$=n(55),ee=n.n($),te=function(e){var t=e.input,n=e.meta,s=Object(Z.a)(e,["input","meta"]),a=s.formControlValue,r=n.touched&&n.error,i=a;return Object(R.jsxs)("div",{className:r&&"".concat(ee.a.formControl," ").concat(ee.a.error),children:[Object(R.jsx)("div",{children:Object(R.jsx)(i,Object(m.a)(Object(m.a)({},t),s))}),r&&Object(R.jsx)("span",{children:n.error})]})},ne=function(e){if(!e)return"Field is required"},se=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ae=Object(X.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=Object(s.useState)(!1),r=Object(q.a)(a,2),i=r[0],c=r[1],o=i?"text":"password";return Object(R.jsx)("div",{className:Y.a.loginForm,children:Object(R.jsxs)("form",{onSubmit:t,children:[Object(R.jsx)("div",{children:Object(R.jsx)(J.a,{className:Y.a.field,placeholder:"email",name:"email",component:te,formControlValue:"input",validate:[ne]})}),Object(R.jsxs)("div",{className:Y.a.pass,children:[Object(R.jsx)(J.a,{cla:!0,ssName:Y.a.field,placeholder:"Password",name:"password",component:te,formControlValue:"input",validate:[ne],type:o}),Object(R.jsx)("div",{className:Y.a.iconPass,onClick:function(){c(!i)},children:"\ud83d\udc41"})]}),Object(R.jsx)("div",{children:n&&Object(R.jsx)("div",{className:ee.a.formSummaryError,children:n})}),Object(R.jsxs)("div",{className:Y.a.items,children:[Object(R.jsxs)("div",{className:Y.a.checkBox,children:[Object(R.jsx)(J.a,{className:"field",type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(R.jsx)("div",{className:Y.a.loginButton,children:Object(R.jsx)("button",{children:"Login"})})]})]})})})),re=Object(r.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUserThunk:function(e,t,n){return function(){var s=Object(g.a)(h.a.mark((function s(a){var r,i;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,C(e,t,n);case 2:0===(r=s.sent).data.resultCode?a(L()):(i=r.data.messages.length>0?r.data.messages:"Some error",a(Object(k.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},logoutUserThunk:y})((function(e){var t=e.loginUserThunk;return e.isAuth?Object(R.jsx)(f.a,{to:"/profile"}):Object(R.jsxs)("div",{className:Y.a.loginPage,children:[Object(R.jsx)("h1",{children:"Samurai Login"}),Object(R.jsx)(ae,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})]})})),ie=function(e){return Object(R.jsx)("div",{children:"Settings Page's Content"})},ce={initialized:!1};function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var le=s.createElement("circle",{cx:15,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),de=s.createElement("circle",{cx:60,cy:15,r:9,fillOpacity:.3},s.createElement("animate",{attributeName:"r",from:9,to:9,begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:.5,to:.5,begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),je=s.createElement("circle",{cx:105,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}));function be(e,t){var n=e.title,a=e.titleId,r=ue(e,["title","titleId"]);return s.createElement("svg",oe({width:120,height:30,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":a},r),n?s.createElement("title",{id:a},n):null,le,de,je)}var fe=s.forwardRef(be),Oe=(n.p,n(71)),me=n.n(Oe),pe=function(e){return Object(R.jsx)("div",{className:me.a.main,children:Object(R.jsx)(fe,{fill:"#2b3f4f",stroke:"current"})})},he=n(32),ge={posts:[{id:21313,message:"testPost",likesCount:1,isLiked:!1}],newPostText:"",profile:null,status:""},xe=function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},_e=n(130),ve=n.n(_e),Se=n.p+"static/media/default_user_photo.5364f1ba.png",Pe=n(26),Ne=n.n(Pe),Ee=function(e){var t=Object(s.useState)(!1),n=Object(q.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(e.status),c=Object(q.a)(i,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);var l=function(){r(!1),d()},d=function(){o?e.updateStatus(o):e.updateStatus("")};return Object(R.jsxs)(R.Fragment,{children:[!a&&Object(R.jsx)("div",{children:Object(R.jsx)("div",{className:Ne.a.statusStaticMode,onDoubleClick:function(){r(!0)},children:e.status?e.status:Object(R.jsx)("div",{className:"".concat(Ne.a.statusStaticMode," ").concat(Ne.a.statusDefault),children:"set status"})})}),a&&Object(R.jsxs)("div",{className:"".concat(Ne.a.statusEditMode),children:[Object(R.jsx)("div",{children:Object(R.jsx)("input",{autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&l()},value:"".concat(o),onChange:function(e){u(e.currentTarget.value)}})}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{onClick:l,children:"save"})})]})]})},Ce=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return t?Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:Ne.a.descriptionBlock,children:[Object(R.jsx)("img",{src:null!==(null===t||void 0===t?void 0:t.photos.large)?null===t||void 0===t?void 0:t.photos.large:Se,alt:"smallUserPhoto"}),Object(R.jsxs)("div",{className:Ne.a.items,children:[Object(R.jsx)("div",{className:Ne.a.name,children:Object(R.jsx)("b",{children:null===t||void 0===t?void 0:t.fullName})}),Object(R.jsx)(Ee,{updateStatus:s,status:n})]})]})}):Object(R.jsx)("div",{children:Object(R.jsx)(pe,{})})},we=n(74),ke=n.n(we),Te=n(38),Ue=n.n(Te),Le=Object(r.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,n))},removeLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,n))}}}))((function(e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("hr",{}),Object(R.jsxs)("div",{className:Ue.a.post,children:[Object(R.jsxs)("div",{className:Ue.a.items,children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:Se,alt:"defaultSmallUserPhoto"})}),Object(R.jsxs)("div",{className:Ue.a.postMessage,children:[Object(R.jsxs)("div",{className:Ue.a.name,children:[Object(R.jsxs)("b",{children:["UserName"," "]})," "]}),Object(R.jsx)("div",{className:Ue.a.message,children:Object(R.jsx)("div",{children:e.message})})]})]}),Object(R.jsxs)("div",{className:Ue.a.reactions,children:[Object(R.jsx)("div",{children:e.isLiked?Object(R.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(R.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(R.jsxs)("div",{children:[" ",Object(R.jsx)("button",{children:" Write comment"})," "]}),Object(R.jsxs)("div",{children:[" ",Object(R.jsx)("button",{children:" Share"})," "]})]})]})]})})),ye=a.a.memo((function(e){var t=e.profilePage,n=e.addPost,s=(e.setNewPostText,t.posts.map((function(e){return Object(R.jsx)(Le,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})));return Object(R.jsxs)("div",{className:ke.a.postBlock,children:[Object(R.jsx)(Ae,{onSubmit:function(e){e.newPostText&&n(e.newPostText)}}),Object(R.jsx)("div",{className:ke.a.posts,children:s})]})})),Ie=se(3),Ae=Object(X.a)({form:"postMessageReduxForm"})((function(e){var t=e.handleSubmit;return Object(R.jsxs)("form",{onSubmit:t,className:ke.a.inputAreaElements,children:[Object(R.jsx)("div",{children:Object(R.jsx)(J.a,{placeholder:"What's new?",name:"newPostText",component:te,formControlValue:"textarea",validate:[ne,Ie]})}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Post"})})]})})),Fe=Object(r.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})(ye),Me=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return e.isAuth?Object(R.jsxs)("div",{className:ve.a.profile,children:[Object(R.jsx)(Ce,{profile:t,status:n,updateStatus:s}),Object(R.jsx)(Fe,{})]}):Object(R.jsx)(f.a,{to:"/login"})},Re=function(e){return e.profilePage.profile},De=function(e){return e.profilePage.status},Be=function(e){return e.auth.isAuth},Ge=function(e){return e.auth.id},ze=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="".concat(this.props.authUserId))||this.props.history.push("/login"),e&&(this.props.getUserProfile(+e),this.props.getUserStatus(+e))}},{key:"render",value:function(){return Object(R.jsx)(R.Fragment,{children:this.props.profile?Object(R.jsx)(Me,Object(m.a)(Object(m.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus})):Object(R.jsx)(pe,{})})}}]),n}(a.a.Component),He=Object(O.d)(Object(r.b)((function(e){return{profile:Re(e),status:De(e),isAuth:Be(e),authUserId:Ge(e)}}),{getUserProfile:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getProfile(e);case 2:s=t.sent,n({type:"SN/PROFILE/SET_PROFILE",profile:s.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getUserStatus(e);case 2:s=t.sent,n(xe(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(xe(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),f.f)(ze),We={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},Ke=function(e){return{type:"SN/USERS/SET_USERS",users:e}},Ve=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},qe=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},Je=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},Xe=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},Qe=n(37),Ye=n.n(Qe),Ze=n(131),$e=n.n(Ze),et=function(e){for(var t=e.pageSize,n=e.totalUsersCount,s=e.currentPage,a=e.onPageChanged,r=Math.ceil(n/t),i=[],c=1;c<=r;c++)i.push(c);return Object(R.jsx)("div",{children:i.map((function(e){return Object(R.jsx)("span",{className:e===s?$e.a.selectedPage:"",onClick:function(){return a(e)},children:e})}))})},tt=function(e){var t=e.user,n=e.followingInProgress,s=e.unFollowThunkCreator,a=e.followThunkCreator;return Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:Ye.a.profile,children:[Object(R.jsx)(o.b,{to:"/profile/"+t.id,children:Object(R.jsx)("img",{src:null!==t.photos.small?t.photos.small:Se,alt:"smallUserPhoto"})}),Object(R.jsx)("div",{className:Ye.a.info,children:Object(R.jsx)(o.b,{to:"/profile/"+t.id,children:Object(R.jsx)("div",{className:Ye.a.name,children:t.name})})})]}),Object(R.jsxs)("div",{className:Ye.a.buttonsArea,children:[Object(R.jsx)("div",{children:t.followed?Object(R.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"unfollow"}):Object(R.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"follow"})}),Object(R.jsx)("div",{children:Object(R.jsx)(o.b,{to:"/dialogs/"+t.id,children:Object(R.jsx)("button",{children:"Write message"})})})]}),Object(R.jsx)("hr",{})]},t.id)},nt=function(e){var t=e.usersPage,n=e.pageSize,s=e.totalUsersCount,a=e.currentPage,r=e.followingInProgress,i=(e.setUsers,e.setCurrentPage,e.setTotalUsersCount,e.onPageChanged),c=e.unFollowThunkCreator,o=e.followThunkCreator;return Object(R.jsxs)("div",{className:Ye.a.items,children:[t.users.map((function(e){return Object(R.jsx)(tt,{user:e,followingInProgress:r,unFollowThunkCreator:c,followThunkCreator:o},e.id)})),Object(R.jsx)(et,{currentPage:a,pageSize:n,onPageChanged:i,totalUsersCount:s})]})},st=function(e){return{isAuth:e.auth.isAuth}};function at(e){return Object(r.b)(st)((function(t){var n=t.isAuth,s=Object(Z.a)(t,["isAuth"]);return n?Object(R.jsx)(e,Object(m.a)({},s)):Object(R.jsx)(f.a,{to:"/Login"})}))}var rt=function(e){return e.usersPage},it=function(e){return e.usersPage.pageSize},ct=function(e){return e.usersPage.totalUsersCount},ot=function(e){return e.usersPage.currentPage},ut=function(e){return e.usersPage.isFetching},lt=function(e){return e.usersPage.followingInProgress},dt=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),v(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(R.jsx)(R.Fragment,{children:this.props.isFetching?Object(R.jsx)("div",{className:me.a.main,children:Object(R.jsx)(pe,{})}):Object(R.jsx)("div",{children:Object(R.jsx)(nt,Object(m.a)(Object(m.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})})}}]),n}(a.a.Component),jt=Object(O.d)(Object(r.b)((function(e){return{usersPage:rt(e),pageSize:it(e),totalUsersCount:ct(e),currentPage:ot(e),isFetching:ut(e),followingInProgress:lt(e)}}),{setUsers:Ke,setCurrentPage:Ve,setTotalUsersCount:qe,setIsFetching:Je,getUsersThunkCreator:function(e,t){return function(n){n(Je(!0)),n(Ve(e)),v(e,t).then((function(e){n(Je(!1)),n(Ke(e.items)),n(qe(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(Xe(!0,e)),P(e).then((function(n){0===n.data.resultCode&&t({type:"SN/USERS/UNFOLLOW",id:e}),t(Xe(!1,e))}))}},followThunkCreator:function(e){return function(t){t(Xe(!0,e)),S(e).then((function(n){0===n.data.resultCode&&t({type:"SN/USERS/FOLLOW",id:e}),t(Xe(!1,e))}))}}}),at)(dt),bt={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello",time:"test 4/1/2022, 10:38:18 PM"},{id:2,message:"How are you?",time:"test 4/1/2022, 10:39:22 PM"}],newMessageText:""},ft=n(27),Ot=n.n(ft),mt=function(e){var t=e.id,n=e.name;return Object(R.jsx)("div",{className:Ot.a.dialog+""+Ot.a.active,children:Object(R.jsx)(o.b,{to:"/dialogs/"+t,children:n})})},pt=n(39),ht=n.n(pt),gt=function(e){e.id;var t=e.message,n=e.time;return Object(R.jsxs)("div",{className:ht.a.message,children:[Object(R.jsx)("img",{className:ht.a.img,alt:"userPhoto",src:Se}),Object(R.jsxs)("div",{className:ht.a.content,children:[Object(R.jsx)("div",{className:ht.a.name,children:"userName"}),Object(R.jsx)("div",{className:ht.a.text,children:t}),Object(R.jsx)("div",{className:ht.a.time,children:n})]})]})},xt=function(e){var t=e.dialogsPage,n=e.addMessage,s=t.dialogs.map((function(e){return Object(R.jsx)(mt,{name:e.name,id:e.id},e.id)})),a=t.messages.map((function(e){return Object(R.jsx)(gt,{message:e.message,id:e.id,time:e.time},e.id)}));return Object(R.jsxs)("div",{className:Ot.a.dialogsPage,children:[Object(R.jsx)("div",{className:Ot.a.dialogs,children:s}),Object(R.jsxs)("div",{className:Ot.a.messages,children:[Object(R.jsx)("div",{className:Ot.a.messageElements,children:a}),Object(R.jsx)("hr",{}),Object(R.jsx)(vt,{onSubmit:function(e){e.newMessageText&&n(e.newMessageText)}})]})]})},_t=se(3),vt=Object(X.a)({form:"profileAddPostReduxForm"})((function(e){var t=e.handleSubmit;return Object(R.jsxs)("form",{onSubmit:t,className:Ot.a.inputAreaElements,children:[" ",Object(R.jsx)("div",{children:Object(R.jsx)(J.a,{placeholder:"Write something",name:"newMessageText",component:te,formControlValue:"textarea",validate:[ne,_t]})}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{children:"Send"})})]})})),St=function(e){return e.dialogPage},Pt=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(R.jsx)(xt,Object(m.a)({},this.props))}}]),n}(a.a.Component),Nt=Object(O.d)(Object(r.b)((function(e){return{dialogsPage:St(e)}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}}}),at)(Pt),Et=function(e){return e.app.initialized},Ct=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){var e=this.props.isInitialized;return Object(R.jsx)(R.Fragment,{children:e?Object(R.jsx)("div",{className:"app-main",children:Object(R.jsxs)("div",{className:"app-wrapper",children:[Object(R.jsx)(G,{}),Object(R.jsx)(V,{}),Object(R.jsxs)("div",{className:"app-wrapper-content",children:[Object(R.jsx)(f.b,{exact:!0,path:"/way-of-samurai-social-network/",render:function(){return Object(R.jsx)(f.a,{to:"/Profile"})}}),Object(R.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(R.jsx)(f.a,{to:"/Profile"})}}),Object(R.jsx)(f.b,{path:"/Profile/:userId?",render:function(){return Object(R.jsx)(He,{})}}),Object(R.jsx)(f.b,{path:"/News",render:function(){return Object(R.jsx)(H,{})}}),Object(R.jsx)(f.b,{path:"/Dialogs",render:function(){return Object(R.jsx)(Nt,{})}}),Object(R.jsx)(f.b,{path:"/Users",render:function(){return Object(R.jsx)(jt,{})}}),Object(R.jsx)(f.b,{path:"/Music",render:function(){return Object(R.jsx)(z,{})}}),Object(R.jsx)(f.b,{path:"/Settings",render:function(){return Object(R.jsx)(ie,{})}}),Object(R.jsx)(f.b,{path:"/Login",render:function(){return Object(R.jsx)(re,{})}})]})]})}):Object(R.jsx)(pe,{})})}}]),n}(a.a.Component),wt=Object(O.d)(f.f,Object(r.b)((function(e){return{isInitialized:Et(e)}}),{initializeApp:function(){return function(e){var t=e(L());Promise.all([t]).then((function(){e({type:"SN/APP/INITIALISED_SUCCESS"})}))}}}))(Ct),kt=n(132),Tt=n(127),Ut=Object(O.c)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var n=Object(m.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:t.newMessage,time:(new Date).toLocaleString()};return n.messages=[].concat(Object(he.a)(e.messages),[s]),n}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n=Object(m.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:t.newPostText,likesCount:0,isLiked:!1};return n.posts=[s].concat(Object(he.a)(e.posts)),n;case"SN/PROFILE/SET_NEW_POST_TEXT":var a=Object(m.a)({},e);return a.newPostText=t.newText,a;case"SN/PROFILE/ADD_LIKE":var r=Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return r;case"SN/PROFILE/REMOVE_LIKE":var i=Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return i;case"SN/PROFILE/SET_PROFILE":return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(m.a)(Object(m.a)({},e),{},{status:t.status});case"SN/PROFILE/DELETE_POST":var c=Object(m.a)(Object(m.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});return c;default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(m.a)(Object(m.a)({},e),{},{users:Object(he.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(he.a)(e.followingInProgress),[t.id]):Object(he.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_AUTH_USER_DATA":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},form:Tt.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALISED_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}}}),Lt=Object(O.e)(Ut,Object(O.a)(kt.a));window.__store__=Lt,c.a.render(Object(R.jsx)(o.a,{children:Object(R.jsx)(r.a,{store:Lt,children:Object(R.jsx)(wt,{})})}),document.getElementById("root")),u()},37:function(e,t,n){e.exports={items:"Users_items__-cuhe",profile:"Users_profile__2q_da",info:"Users_info__2hM-q",name:"Users_name__3uZmM",buttonsArea:"Users_buttonsArea__3uP-7"}},38:function(e,t,n){e.exports={post:"Post_post__L3g4m",items:"Post_items__TiuHf",postMessage:"Post_postMessage__2R7XL",name:"Post_name__7buCm",message:"Post_message__1YmDS",reactions:"Post_reactions__3uWF0"}},39:function(e,t,n){e.exports={message:"Message_message__1pl0m",content:"Message_content__28Hls",name:"Message_name__gkaLH",text:"Message_text__1FzPC",time:"Message_time__322cI"}},47:function(e,t,n){e.exports={header:"Header_header__1pKV4",logoArea:"Header_logoArea__3SqBW",loginBlock:"Header_loginBlock__2NGhc",items:"Header_items__2DQpk"}},55:function(e,t,n){e.exports={formControl:"FormControls_formControl__1PKUq",error:"FormControls_error__3kHja",formSummaryError:"FormControls_formSummaryError__2VRhK"}},71:function(e,t,n){e.exports={main:"Preloader_main__BgsaX"}},74:function(e,t,n){e.exports={postBlock:"ContentArea_postBlock__2Fp-K",posts:"ContentArea_posts__3qIIz",inputAreaElements:"ContentArea_inputAreaElements__ijd0W"}}},[[289,1,2]]]);
//# sourceMappingURL=main.15d8f047.chunk.js.map