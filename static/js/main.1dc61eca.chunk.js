(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,s){e.exports={profile:"Profile_profile__1LESU"}},12:function(e,t,s){e.exports={navbar:"Navbar_navbar__27a1U",item:"Navbar_item__2Sz7A",active:"Navbar_active__3wMdQ"}},126:function(e,t,s){},127:function(e,t,s){},23:function(e,t,s){e.exports={dialogsPage:"Dialogs_dialogsPage__30RqF",dialogs:"Dialogs_dialogs__hPjJa",dialog:"Dialogs_dialog__3R01s",messages:"Dialogs_messages__2b5iv",messageElements:"Dialogs_messageElements__BpFaC",inputAreaElements:"Dialogs_inputAreaElements__1GU_0",message:"Dialogs_message__2JtN6"}},24:function(e,t,s){e.exports={loginPage:"Login_loginPage__2QSa1",loginForm:"Login_loginForm__3_yRp",field:"Login_field__1npoC",pass:"Login_pass__2LVaL",iconPass:"Login_iconPass__2mybm",items:"Login_items__XJym6",checkBox:"Login_checkBox__-IgJh",loginButton:"Login_loginButton__34rpb"}},249:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(9),r=s(57),c=s.n(r),o=s(7),u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,253)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))},l=(s(126),s(10)),d=(s(127),s(3)),j=s(19),b=s(20),m=s(22),O=s(21),f=s(113),h=s.n(f).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),p=function(e,t){return h.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},g=function(e){return h.post("follow/".concat(e))},x=function(e){return h.delete("follow/".concat(e))},_={getProfile:function(e){return h.get("profile/".concat(e))},getUserStatus:function(e){return h.get("/profile/status/".concat(e))},updateUserStatus:function(e){return h.put("/profile/status",{status:e})}},v=function(){return h.get("auth/me")},S=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return h.post("/auth/login",{email:e,password:t,rememberMe:s})},P=function(){return h.delete("/auth/login")},N={id:null,email:null,login:null,isAuth:!1},E=function(e,t,s,n){return{type:"SN/AUTH/SET_AUTH_USER_DATA",payload:{userId:e,email:t,login:s,isAuth:n}}},C=function(){return function(e){v().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.email,i=s.login;e(E(n,a,i,!0))}}))}},U=function(){return function(e){P().then((function(t){0===t.data.resultCode&&e(E(null,null,null,!1))}))}},T=s(41),L=s.n(T),w=s.p+"static/media/logo_part_1.230df42a.png",k=s.p+"static/media/logo_part_2.7aafc755.png",y=s(0),M=function(e){var t=e.isAuth,s=e.login,n=e.logoutUserThunk;return Object(y.jsxs)("div",{className:L.a.header,children:[Object(y.jsxs)(o.b,{to:"/news",className:L.a.logoArea,children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:w,alt:"logoPart1"})}),Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:k,alt:"logoPart2"})})]}),Object(y.jsx)("div",{className:L.a.loginBlock,children:t?Object(y.jsxs)("div",{className:L.a.items,children:[Object(y.jsx)("div",{}),Object(y.jsxs)("div",{children:[s," "]}),Object(y.jsx)(o.b,{to:"/login",onClick:function(){n()},children:"Logout"})]}):Object(y.jsxs)("div",{className:L.a.items,children:[Object(y.jsx)(o.b,{to:"/login",children:"Login "}),Object(y.jsx)(o.b,{to:"/login",children:"Sign up "})]})})]})},A=function(e){Object(m.a)(s,e);var t=Object(O.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(M,Object(d.a)({},this.props))})}}]),s}(a.a.Component),I=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:C,setAuthUserData:E,logoutUserThunk:U})(A),F=s(8),R=s(28),D={posts:[{id:21313,message:"testPost",likesCount:1,isLiked:!1}],newPostText:"",profile:null,status:null},B=function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},G=s(114),H=s.n(G),W=s.p+"static/media/default_user_photo.5364f1ba.png";function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var q=n.createElement("circle",{cx:15,cy:15,r:15},n.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),J=n.createElement("circle",{cx:60,cy:15,r:9,fillOpacity:.3},n.createElement("animate",{attributeName:"r",from:9,to:9,begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:.5,to:.5,begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),X=n.createElement("circle",{cx:105,cy:15,r:15},n.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}));function V(e,t){var s=e.title,a=e.titleId,i=z(e,["title","titleId"]);return n.createElement("svg",K({width:120,height:30,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":a},i),s?n.createElement("title",{id:a},s):null,q,J,X)}var Q,Y=n.forwardRef(V),Z=(s.p,s(38)),$=s.n(Z),ee=function(e){return Object(y.jsx)("div",{className:$.a.main,children:Object(y.jsx)(Y,{fill:"#2b3f4f",stroke:"current"})})},te=s(31),se=s.n(te),ne=function(e){Object(m.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(j.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.onUpdateStatus()},e.onKeyPressHandler=function(t){"Enter"===t.key&&e.deactivateEditMode()},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e.onUpdateStatus=function(){e.state.status?e.props.updateStatus(e.state.status):e.props.updateStatus("")},e}return Object(b.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[!this.state.editMode&&Object(y.jsx)("div",{children:Object(y.jsx)("div",{className:se.a.statusStaticMode,onDoubleClick:this.activateEditMode,children:this.props.status?this.props.status:"set status"})}),this.state.editMode&&Object(y.jsxs)("div",{className:"".concat(se.a.statusEditMode),children:[Object(y.jsx)("div",{children:Object(y.jsx)("input",{autoFocus:!0,onKeyPress:this.onKeyPressHandler,value:"".concat(this.state.status),onChange:this.onStatusChange})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{onClick:this.deactivateEditMode,children:"save"})})]})]})}}]),s}(a.a.Component),ae=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return t?Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:se.a.descriptionBlock,children:[Object(y.jsx)("img",{src:null!==t.photos.large?t.photos.large:W,alt:"smallUserPhoto"}),Object(y.jsxs)("div",{className:se.a.items,children:[Object(y.jsx)("div",{className:se.a.name,children:Object(y.jsx)("b",{children:t.fullName})}),Object(y.jsx)(ne,{updateStatus:n,status:s})]})]})}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:$.a.main,children:Object(y.jsx)(ee,{})})})},ie=s(251),re=s(250),ce=s(60),oe=s.n(ce),ue=s(32),le=s.n(ue),de=Object(i.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,s){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,s))},removeLike:function(t,s){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,s))}}}))((function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("hr",{}),Object(y.jsxs)("div",{className:le.a.post,children:[Object(y.jsxs)("div",{className:le.a.items,children:[Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:W,alt:"defaultSmallUserPhoto"})}),Object(y.jsxs)("div",{className:le.a.postMessage,children:[Object(y.jsxs)("div",{className:le.a.name,children:[Object(y.jsxs)("b",{children:["UserName"," "]})," "]}),Object(y.jsx)("div",{className:le.a.message,children:Object(y.jsx)("div",{children:e.message})})]})]}),Object(y.jsxs)("div",{className:le.a.reactions,children:[Object(y.jsx)("div",{children:e.isLiked?Object(y.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(y.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(y.jsxs)("div",{children:[" ",Object(y.jsx)("button",{children:" Write comment"})," "]}),Object(y.jsxs)("div",{children:[" ",Object(y.jsx)("button",{children:" Share"})," "]})]})]})]})})),je=function(e){switch(e){case e:return;default:return"Field is required"}},be=(Q=3,function(e){if(e&&e.length>Q)return"Max length is ".concat(Q," symbols")}),me=Object(re.a)({form:"postMessageReduxForm"})((function(e){var t=e.handleSubmit;return Object(y.jsxs)("form",{onSubmit:t,className:oe.a.inputAreaElements,children:[Object(y.jsx)("div",{children:Object(y.jsx)(ie.a,{placeholder:"What's new?",name:"newPostText",component:"textarea",validate:[je,be]})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{children:"Post"})})]})})),Oe=Object(i.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPostText:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})((function(e){var t=e.profilePage,s=e.addPost,n=(e.setNewPostText,t.posts.map((function(e){return Object(y.jsx)(de,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})));return Object(y.jsxs)("div",{className:oe.a.postBlock,children:[Object(y.jsx)(me,{onSubmit:function(e){e.newPostText&&s(e.newPostText)}}),Object(y.jsx)("div",{className:oe.a.posts,children:n})]})})),fe=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return e.isAuth?Object(y.jsxs)("div",{className:H.a.profile,children:[Object(y.jsx)(ae,{profile:t,status:s,updateStatus:n}),Object(y.jsx)(Oe,{})]}):Object(y.jsx)(l.a,{to:"/login"})},he=function(e){Object(m.a)(s,e);var t=Object(O.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="8091"),this.props.getUserProfile(+e),this.props.getUserStatus(+e)}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(fe,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus}))})}}]),s}(a.a.Component),pe=Object(F.d)(Object(i.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){_.getProfile(e).then((function(e){t({type:"SN/PROFILE/SET_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){_.getUserStatus(e).then((function(e){t(B(e.data))}))}},updateUserStatus:function(e){return function(t){_.updateUserStatus(e).then((function(s){0===s.data.resultCode&&t(B(e))}))}}}),l.f)(he),ge=function(e){return Object(y.jsx)("div",{children:"Music Page's Content"})},xe={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},_e=function(e){return{type:"SN/USERS/SET_USERS",users:e}},ve=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},Se=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},Pe=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},Ne=s(33),Ee=s.n(Ne),Ce=function(e){for(var t=e.usersPage,s=e.pageSize,n=e.totalUsersCount,a=e.currentPage,i=e.followingInProgress,r=(e.setUsers,e.setCurrentPage,e.setTotalUsersCount,e.onPageChanged),c=e.unFollowThunkCreator,u=e.followThunkCreator,l=Math.ceil(n/s),d=[],j=1;j<=l;j++)d.push(j);return Object(y.jsxs)("div",{className:Ee.a.items,children:[t.users.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:Ee.a.profile,children:[Object(y.jsx)(o.b,{to:"/profile/"+e.id,children:Object(y.jsx)("img",{src:null!==e.photos.small?e.photos.small:W,alt:"smallUserPhoto"})}),Object(y.jsx)("div",{className:Ee.a.info,children:Object(y.jsx)(o.b,{to:"/profile/"+e.id,children:Object(y.jsx)("div",{className:Ee.a.name,children:e.name})})})]}),Object(y.jsxs)("div",{className:Ee.a.buttonsArea,children:[Object(y.jsx)("div",{children:e.followed?Object(y.jsx)("button",{disabled:i.some((function(t){return t===e.id})),onClick:function(){c(e.id)},children:"unfollow"}):Object(y.jsx)("button",{disabled:i.some((function(t){return t===e.id})),onClick:function(){u(e.id)},children:"follow"})}),Object(y.jsx)("div",{children:Object(y.jsxs)(o.b,{to:"/dialogs/"+e.id,children:[" ",Object(y.jsx)("button",{children:"Write message"})]})})]}),Object(y.jsx)("hr",{})]},e.id)})),Object(y.jsx)("div",{children:d.map((function(e){return Object(y.jsx)("span",{className:e===a?Ee.a.selectedPage:"",onClick:function(){return r(e)},children:e})}))})]})},Ue=s(118),Te=function(e){return{isAuth:e.auth.isAuth}};function Le(e){return Object(i.b)(Te)((function(t){var s=t.isAuth,n=Object(Ue.a)(t,["isAuth"]);return s?Object(y.jsx)(e,Object(d.a)({},n)):Object(y.jsx)(l.a,{to:"/Login"})}))}var we=function(e){Object(m.a)(s,e);var t=Object(O.a)(s);function s(){var e;Object(j.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),p(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:this.props.isFetching?Object(y.jsx)("div",{className:$.a.main,children:Object(y.jsx)(ee,{})}):Object(y.jsx)("div",{children:Object(y.jsx)(Ce,Object(d.a)(Object(d.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})})}}]),s}(a.a.Component),ke=Object(F.d)(Object(i.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setUsers:_e,setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:ve,setIsFetching:Se,getUsersThunkCreator:function(e,t){return function(s){s(Se(!0)),p(e,t).then((function(e){s(Se(!1)),s(_e(e.items)),s(ve(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(Pe(!0,e)),x(e).then((function(s){0===s.data.resultCode&&t({type:"SN/USERS/UNFOLLOW",id:e}),t(Pe(!1,e))}))}},followThunkCreator:function(e){return function(t){t(Pe(!0,e)),g(e).then((function(s){0===s.data.resultCode&&t({type:"SN/USERS/FOLLOW",id:e}),t(Pe(!1,e))}))}}}),Le)(we),ye=function(e){return Object(y.jsx)("div",{children:"News Page's Content"})},Me=s(12),Ae=s.n(Me),Ie=function(e){return Object(y.jsxs)("div",{className:Ae.a.navbar,children:[Object(y.jsx)("div",{className:Ae.a.item,children:Object(y.jsx)(o.b,{to:"/Profile",activeClassName:Ae.a.active,children:"My profile"})}),Object(y.jsx)("div",{className:Ae.a.item,children:Object(y.jsx)(o.b,{to:"/News",activeClassName:Ae.a.active,children:"News"})}),Object(y.jsx)("div",{className:Ae.a.item,children:Object(y.jsx)(o.b,{to:"/Dialogs",activeClassName:Ae.a.active,children:"Messages"})}),Object(y.jsx)("div",{className:Ae.a.item,children:Object(y.jsx)(o.b,{to:"/Users",activeClassName:Ae.a.active,children:"Users"})}),Object(y.jsx)("div",{className:Ae.a.item,children:Object(y.jsx)(o.b,{to:"/Music",activeClassName:Ae.a.active,children:"Music"})}),Object(y.jsx)("div",{className:Ae.a.item,children:Object(y.jsx)(o.b,{to:"/Settings",activeClassName:Ae.a.active,children:"Settings"})})]})},Fe=s(117),Re=s(24),De=s.n(Re),Be=Object(re.a)({form:"Login"})((function(e){var t=e.handleSubmit,s=Object(n.useState)(!1),a=Object(Fe.a)(s,2),i=a[0],r=a[1],c=i?"text":"password";return Object(y.jsx)("div",{className:De.a.loginForm,children:Object(y.jsxs)("form",{onSubmit:t,children:[Object(y.jsx)("div",{children:Object(y.jsx)(ie.a,{className:De.a.field,placeholder:"email",name:"email",component:"input"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ie.a,{className:De.a.field,placeholder:"Password",name:"password",component:"input",type:c}),Object(y.jsx)("span",{className:De.a.iconPass,onClick:function(){r(!i)},children:"\ud83d\udc41"})]}),Object(y.jsxs)("div",{className:De.a.items,children:[Object(y.jsxs)("div",{className:De.a.checkBox,children:[Object(y.jsx)(ie.a,{className:"field",type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(y.jsx)("div",{className:De.a.loginButton,children:Object(y.jsx)("button",{children:"Login"})})]})]})})})),Ge=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginUserThunk:function(e,t,s){return function(n){S(e,t,s).then((function(e){0===e.data.resultCode&&n(C())}))}},logoutUserThunk:U})((function(e){var t=e.loginUserThunk;return e.isAuth?Object(y.jsx)(l.a,{to:"/profile"}):Object(y.jsxs)("div",{className:De.a.loginPage,children:[Object(y.jsx)("h1",{children:"Samurai Login"}),Object(y.jsx)(Be,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})]})})),He=function(e){return Object(y.jsx)("div",{children:"Settings Page's Content"})},We={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello",time:"test 4/1/2022, 10:38:18 PM"},{id:2,message:"How are you?",time:"test 4/1/2022, 10:39:22 PM"}],newMessageText:""},Ke=s(23),ze=s.n(Ke),qe=function(e){var t=e.id,s=e.name;return Object(y.jsx)("div",{className:ze.a.dialog+""+ze.a.active,children:Object(y.jsx)(o.b,{to:"/dialogs/"+t,children:s})})},Je=s(34),Xe=s.n(Je),Ve=function(e){e.id;var t=e.message,s=e.time;return Object(y.jsxs)("div",{className:Xe.a.message,children:[Object(y.jsx)("img",{className:Xe.a.img,alt:"userPhoto",src:W}),Object(y.jsxs)("div",{className:Xe.a.content,children:[Object(y.jsx)("div",{className:Xe.a.name,children:"userName"}),Object(y.jsx)("div",{className:Xe.a.text,children:t}),Object(y.jsx)("div",{className:Xe.a.time,children:s})]})]})},Qe=function(e){var t=e.dialogsPage,s=e.addMessage,n=t.dialogs.map((function(e){return Object(y.jsx)(qe,{name:e.name,id:e.id},e.id)})),a=t.messages.map((function(e){return Object(y.jsx)(Ve,{message:e.message,id:e.id,time:e.time},e.id)}));return Object(y.jsxs)("div",{className:ze.a.dialogsPage,children:[Object(y.jsx)("div",{className:ze.a.dialogs,children:n}),Object(y.jsxs)("div",{className:ze.a.messages,children:[Object(y.jsx)("div",{className:ze.a.messageElements,children:a}),Object(y.jsx)("hr",{}),Object(y.jsx)(Ye,{onSubmit:function(e){e.newMessageText&&s(e.newMessageText)}})]})]})},Ye=Object(re.a)({form:"profileAddPostReduxForm"})((function(e){var t=e.handleSubmit;return Object(y.jsxs)("form",{onSubmit:t,className:ze.a.inputAreaElements,children:[" ",Object(y.jsx)("div",{children:Object(y.jsx)(ie.a,{placeholder:"Write something",name:"newMessageText",component:"textarea",maxLength:300})}),Object(y.jsx)("div",{children:Object(y.jsx)("button",{children:"Send"})})]})})),Ze=function(e){Object(m.a)(s,e);var t=Object(O.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(y.jsx)(Qe,Object(d.a)({},this.props))}}]),s}(a.a.Component),$e=Object(F.d)(Object(i.b)((function(e){return{dialogsPage:e.dialogPage}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}}}),Le)(Ze),et=function(e){return Object(y.jsx)("div",{className:"app-main",children:Object(y.jsxs)("div",{className:"app-wrapper",children:[Object(y.jsx)(I,{}),Object(y.jsx)(Ie,{}),Object(y.jsxs)("div",{className:"app-wrapper-content",children:[Object(y.jsx)(l.b,{path:"/Profile/:userId?",render:function(){return Object(y.jsx)(pe,{})}}),Object(y.jsx)(l.b,{path:"/News",render:function(){return Object(y.jsx)(ye,{})}}),Object(y.jsx)(l.b,{path:"/Dialogs",render:function(){return Object(y.jsx)($e,{})}}),Object(y.jsx)(l.b,{path:"/Users",render:function(){return Object(y.jsx)(ke,{})}}),Object(y.jsx)(l.b,{path:"/Music",render:function(){return Object(y.jsx)(ge,{})}}),Object(y.jsx)(l.b,{path:"/Settings",render:function(){return Object(y.jsx)(He,{})}}),Object(y.jsx)(l.b,{path:"/Login",render:function(){return Object(y.jsx)(Ge,{})}})]})]})})},tt=s(116),st=s(252),nt=Object(F.c)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var s=Object(d.a)({},e),n={id:Math.floor((new Date).valueOf()*Math.random()),message:t.newMessage,time:(new Date).toLocaleString()};return s.messages=[].concat(Object(R.a)(e.messages),[n]),s}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var s=Object(d.a)({},e),n={id:Math.floor((new Date).valueOf()*Math.random()),message:t.newPostText,likesCount:0,isLiked:!1};return s.posts=[n].concat(Object(R.a)(e.posts)),s;case"SN/PROFILE/SET_NEW_POST_TEXT":var a=Object(d.a)({},e);return a.newPostText=t.newText,a;case"SN/PROFILE/ADD_LIKE":var i=Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return i;case"SN/PROFILE/REMOVE_LIKE":var r=Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return r;case"SN/PROFILE/SET_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.status});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(d.a)(Object(d.a)({},e),{},{users:Object(R.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(R.a)(e.followingInProgress),[t.id]):Object(R.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_AUTH_USER_DATA":return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}},form:st.a}),at=Object(F.e)(nt,Object(F.a)(tt.a));window.__store__=at;var it=function(e){c.a.render(Object(y.jsx)(o.a,{children:Object(y.jsx)(i.a,{store:at,children:Object(y.jsx)(et,{})})}),document.getElementById("root"))};it(at.getState()),at.subscribe((function(){it(at.getState())})),u()},31:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1o5hr",items:"ProfileInfo_items__Tow0c",name:"ProfileInfo_name__3_29G",statusStaticMode:"ProfileInfo_statusStaticMode__1JGsp",statusEditMode:"ProfileInfo_statusEditMode__2KjhT"}},32:function(e,t,s){e.exports={post:"Post_post__L3g4m",items:"Post_items__TiuHf",postMessage:"Post_postMessage__2R7XL",name:"Post_name__7buCm",message:"Post_message__1YmDS",reactions:"Post_reactions__3uWF0"}},33:function(e,t,s){e.exports={items:"Users_items__-cuhe",selectedPage:"Users_selectedPage__22OUq",profile:"Users_profile__2q_da",info:"Users_info__2hM-q",name:"Users_name__3uZmM",buttonsArea:"Users_buttonsArea__3uP-7"}},34:function(e,t,s){e.exports={message:"Message_message__1pl0m",content:"Message_content__28Hls",name:"Message_name__gkaLH",text:"Message_text__1FzPC",time:"Message_time__322cI"}},38:function(e,t,s){e.exports={main:"Preloader_main__BgsaX"}},41:function(e,t,s){e.exports={header:"Header_header__1pKV4",logoArea:"Header_logoArea__3SqBW",loginBlock:"Header_loginBlock__2NGhc",items:"Header_items__2DQpk"}},60:function(e,t,s){e.exports={postBlock:"ContentArea_postBlock__2Fp-K",posts:"ContentArea_posts__3qIIz",inputAreaElements:"ContentArea_inputAreaElements__ijd0W"}}},[[249,1,2]]]);
//# sourceMappingURL=main.1dc61eca.chunk.js.map