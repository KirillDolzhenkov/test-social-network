(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={dialogsPage:"Dialogs_dialogsPage__30RqF",dialogs:"Dialogs_dialogs__hPjJa",dialog:"Dialogs_dialog__3R01s",messages:"Dialogs_messages__2b5iv",messageElements:"Dialogs_messageElements__BpFaC",inputAreaElements:"Dialogs_inputAreaElements__1GU_0",message:"Dialogs_message__2JtN6"}},17:function(e,t,n){e.exports={items:"Users_items__-cuhe",selectedPage:"Users_selectedPage__22OUq",profile:"Users_profile__2q_da",info:"Users_info__2hM-q",name:"Users_name__3uZmM",buttonsArea:"Users_buttonsArea__3uP-7"}},18:function(e,t,n){e.exports={message:"Message_message__1pl0m",content:"Message_content__28Hls",name:"Message_name__gkaLH",text:"Message_text__1FzPC",time:"Message_time__322cI"}},20:function(e,t,n){e.exports={header:"Header_header__1pKV4",logoArea:"Header_logoArea__3SqBW",loginBlock:"Header_loginBlock__2NGhc",items:"Header_items__2DQpk"}},22:function(e,t,n){e.exports={post:"Post_post__L3g4m",items:"Post_items__TiuHf",postMessage:"Post_postMessage__2R7XL",reactions:"Post_reactions__3uWF0"}},25:function(e,t,n){e.exports={main:"Preloader_main__BgsaX"}},26:function(e,t,n){e.exports={postBlock:"ContentArea_postBlock__2Fp-K",posts:"ContentArea_posts__3qIIz",inputAreaElements:"ContentArea_inputAreaElements__ijd0W"}},31:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1o5hr",items:"ProfileInfo_items__Tow0c"}},42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},6:function(e,t,n){e.exports={navbar:"Navbar_navbar__27a1U",item:"Navbar_item__2Sz7A",active:"Navbar_active__3wMdQ"}},75:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(5),r=n(24),c=n.n(r),o=n(3),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))},u=(n(52),n(4)),d=(n(53),n(2)),j=n(11),b=n(12),O=n(14),f=n(13),g=n(41),h=n.n(g).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),m=function(e,t){return h.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},p=function(e){return h.post("follow/".concat(e))},x=function(e){return h.delete("follow/".concat(e))},v=function(e){return h.get("profile/".concat(e))},_=function(){return h.get("auth/me")},S={id:null,email:null,login:null,isAuth:!1},N=function(e){return{type:"SN/SET_AUTH_USER_DATA",data:e}},P=n(20),E=n.n(P),w=n.p+"static/media/logo_part_1.230df42a.png",C=n.p+"static/media/logo_part_2.7aafc755.png",T=n(0),k=function(e){return Object(T.jsxs)("div",{className:E.a.header,children:[Object(T.jsxs)(o.b,{to:"/news",className:E.a.logoArea,children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:w,alt:"logoName1"})}),Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:C,alt:"logoName2"})})]}),Object(T.jsx)("div",{className:E.a.loginBlock,children:e.isAuth?Object(T.jsxs)("div",{className:E.a.items,children:[Object(T.jsx)("div",{}),Object(T.jsxs)("div",{children:[e.login," "]}),Object(T.jsx)(o.b,{to:"/login",children:"Logout"})]}):Object(T.jsxs)("div",{className:E.a.items,children:[Object(T.jsx)(o.b,{to:"/login",children:"Login "}),Object(T.jsx)(o.b,{to:"/login",children:"Sign up "})]})})]})},L=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(k,Object(d.a)({},this.props))})}}]),n}(a.a.Component),y=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){_().then((function(t){if(0===t.data.resultCode){var n=t.data.data;e(N(n))}}))}},setAuthUserData:N})(L),U=n(15),M=n(16),A={posts:[{id:21313,message:"testPost",likesCount:1,isLiked:!1}],newPostText:"",profile:null},I=n(42),F=n.n(I),R=n.p+"static/media/defaultSmallUserPhoto.8101612b.png";function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W=s.createElement("circle",{cx:15,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),B=s.createElement("circle",{cx:60,cy:15,r:9,fillOpacity:.3},s.createElement("animate",{attributeName:"r",from:9,to:9,begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:.5,to:.5,begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),H=s.createElement("circle",{cx:105,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}));function z(e,t){var n=e.title,a=e.titleId,i=G(e,["title","titleId"]);return s.createElement("svg",D({width:120,height:30,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":a},i),n?s.createElement("title",{id:a},n):null,W,B,H)}var K=s.forwardRef(z),q=(n.p,function(e){return Object(T.jsx)("div",{children:Object(T.jsx)(K,{fill:"#2b3f4f",stroke:"current"})})}),X=n(31),J=n.n(X),V=n(25),Q=n.n(V),Y=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(T.jsxs)(T.Fragment,{children:[!this.state.editMode&&Object(T.jsx)("div",{children:Object(T.jsx)("div",{onDoubleClick:this.activateEditMode,children:"hello"})}),this.state.editMode&&Object(T.jsx)("div",{children:Object(T.jsx)("input",{autoFocus:!0,onBlur:this.deactivateEditMode,value:"hello"})})]})}}]),n}(a.a.Component),Z=function(e){var t=e.profile;return t?Object(T.jsx)("div",{children:Object(T.jsxs)("div",{className:J.a.descriptionBlock,children:[Object(T.jsx)("img",{src:null!==t.photos.large?t.photos.large:R}),Object(T.jsxs)("div",{className:J.a.items,children:[Object(T.jsx)("div",{children:Object(T.jsx)("b",{children:t.fullName})}),Object(T.jsx)(Y,{})]})]})}):Object(T.jsx)("div",{className:Q.a.main,children:Object(T.jsx)(q,{})})},$=n(26),ee=n.n($),te=n(22),ne=n.n(te),se=Object(i.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,n))},removeLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,n))}}}))((function(e){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("hr",{}),Object(T.jsxs)("div",{className:ne.a.post,children:[Object(T.jsxs)("div",{className:ne.a.items,children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:R,alt:"defaultSmallUserPhoto"})}),Object(T.jsxs)("div",{className:ne.a.postMessage,children:[Object(T.jsxs)("div",{children:[Object(T.jsxs)("b",{children:["UserName"," "]})," "]}),Object(T.jsx)("div",{children:Object(T.jsx)("div",{children:e.message})})]})]}),Object(T.jsxs)("div",{className:ne.a.reactions,children:[Object(T.jsx)("div",{children:e.isLiked?Object(T.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(T.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(T.jsxs)("div",{children:[" ",Object(T.jsx)("button",{children:" Write comment"})," "]}),Object(T.jsxs)("div",{children:[" ",Object(T.jsx)("button",{children:" Share"})," "]})]})]})]})})),ae=Object(i.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPost:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})((function(e){var t=e.profilePage,n=t.posts.map((function(e){return Object(T.jsx)(se,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})),s=function(){t.newPostText&&e.addPost(t.newPostText)};return Object(T.jsxs)("div",{className:ee.a.postBlock,children:[Object(T.jsxs)("div",{className:ee.a.inputAreaElements,children:[Object(T.jsx)("div",{children:Object(T.jsx)("textarea",{value:t.newPostText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewPostText(s)},placeholder:"What's new?",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s())}})}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:s,children:"Post"})})]}),Object(T.jsx)("div",{className:ee.a.posts,children:n})]})})),ie=function(e){return Object(T.jsxs)("div",{className:F.a.profile,children:[Object(T.jsx)(Z,{profile:e.profile}),Object(T.jsx)(ae,{})]})},re=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="2"),this.props.getUserProfile(+e)}},{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(ie,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile}))})}}]),n}(a.a.Component),ce=Object(U.c)(Object(i.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){v(e).then((function(e){t({type:"SN/PROFILE/SET_PROFILE",profile:e.data})}))}}}),u.f)(re),oe=function(e){return Object(T.jsx)("div",{children:"Music Page's Content"})},le={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},ue=function(e){return{type:"SN/USERS/SET_USERS",users:e}},de=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},je=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},be=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},Oe=n(17),fe=n.n(Oe),ge=function(e){for(var t=e.usersPage,n=Math.ceil(t.totalUsersCount/t.pageSize),s=[],a=1;a<=n;a++)s.push(a);return Object(T.jsxs)("div",{className:fe.a.items,children:[t.users.map((function(t){return Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:fe.a.profile,children:[Object(T.jsx)(o.b,{to:"/profile/"+t.id,children:Object(T.jsx)("img",{src:null!==t.photos.small?t.photos.small:R,alt:"defaultSmallUserPhoto"})}),Object(T.jsx)("div",{className:fe.a.info,children:Object(T.jsx)(o.b,{to:"/profile/"+t.id,children:Object(T.jsx)("div",{className:fe.a.name,children:t.name})})})]}),Object(T.jsxs)("div",{className:fe.a.buttonsArea,children:[Object(T.jsx)("div",{children:t.followed?Object(T.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollowThunkCreator(t.id)},children:"unfollow"}):Object(T.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id)},children:"follow"})}),Object(T.jsx)("div",{children:Object(T.jsxs)(o.b,{to:"/dialogs/"+t.id,children:[" ",Object(T.jsx)("button",{children:"Write message"})]})})]}),Object(T.jsx)("hr",{})]},t.id)})),Object(T.jsx)("div",{children:s.map((function(n){return Object(T.jsx)("span",{className:n===t.currentPage?fe.a.selectedPage:"",onClick:function(){return e.onPageChanged(n)},children:n})}))})]})},he=n(44),me=function(e){return{isAuth:e.auth.isAuth}};function pe(e){return Object(i.b)(me)((function(t){var n=t.isAuth,s=Object(he.a)(t,["isAuth"]);return n?Object(T.jsx)(e,Object(d.a)({},s)):Object(T.jsx)(u.a,{to:"/Login"})}))}var xe=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),m(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:this.props.isFetching?Object(T.jsx)("div",{className:Q.a.main,children:Object(T.jsx)(q,{})}):Object(T.jsx)(ge,Object(d.a)(Object(d.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})}}]),n}(a.a.Component),ve=Object(U.c)(Object(i.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setUsers:ue,setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:de,setIsFetching:je,getUsersThunkCreator:function(e,t){return function(n){n(je(!0)),m(e,t).then((function(e){n(je(!1)),n(ue(e.items)),n(de(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(be(!0,e)),x(e).then((function(n){0===n.data.resultCode&&t({type:"SN/USERS/UNFOLLOW",id:e}),t(be(!1,e))}))}},followThunkCreator:function(e){return function(t){t(be(!0,e)),p(e).then((function(n){0===n.data.resultCode&&t({type:"SN/USERS/FOLLOW",id:e}),t(be(!1,e))}))}}}),pe)(xe),_e=function(e){return Object(T.jsx)("div",{children:"News Page's Content"})},Se=n(6),Ne=n.n(Se),Pe=function(e){return Object(T.jsxs)("div",{className:Ne.a.navbar,children:[Object(T.jsx)("div",{className:Ne.a.item,children:Object(T.jsx)(o.b,{to:"/Profile",activeClassName:Ne.a.active,children:"My profile"})}),Object(T.jsx)("div",{className:Ne.a.item,children:Object(T.jsx)(o.b,{to:"/News",activeClassName:Ne.a.active,children:"News"})}),Object(T.jsx)("div",{className:Ne.a.item,children:Object(T.jsx)(o.b,{to:"/Dialogs",activeClassName:Ne.a.active,children:"Messages"})}),Object(T.jsx)("div",{className:Ne.a.item,children:Object(T.jsx)(o.b,{to:"/Users",activeClassName:Ne.a.active,children:"Users"})}),Object(T.jsx)("div",{className:Ne.a.item,children:Object(T.jsx)(o.b,{to:"/Music",activeClassName:Ne.a.active,children:"Music"})}),Object(T.jsx)("div",{className:Ne.a.item,children:Object(T.jsx)(o.b,{to:"/Settings",activeClassName:Ne.a.active,children:"Settings"})})]})},Ee=function(e){return Object(T.jsx)("div",{children:"LoginPage"})},we=function(e){return Object(T.jsx)("div",{children:"Settings Page's Content"})},Ce={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello"},{id:2,message:"How are you?"}],newMessageText:""},Te=n(10),ke=n.n(Te),Le=function(e){return Object(T.jsx)("div",{className:ke.a.dialog+""+ke.a.active,children:Object(T.jsx)(o.b,{to:"/dialogs/"+e.id,children:e.name})})},ye=n(18),Ue=n.n(ye),Me=function(e){return Object(T.jsx)("div",{className:ke.a.text,children:Object(T.jsxs)("div",{className:Ue.a.message,children:[Object(T.jsx)("img",{className:Ue.a.img,alt:"userPhoto",src:R}),Object(T.jsxs)("div",{className:Ue.a.content,children:[Object(T.jsx)("div",{className:Ue.a.name,children:"userName"}),Object(T.jsx)("div",{className:Ue.a.text,children:e.message}),Object(T.jsx)("div",{className:Ue.a.time,children:"time"})]})]})})},Ae=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(T.jsx)(Le,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(T.jsx)(Me,{message:e.message,id:e.id},e.id)})),a=function(){t.newMessageText&&e.addMessage(t.newMessageText.trim())};return Object(T.jsxs)("div",{className:ke.a.dialogsPage,children:[Object(T.jsx)("div",{className:ke.a.dialogs,children:n}),Object(T.jsxs)("div",{className:ke.a.messages,children:[Object(T.jsx)("div",{className:ke.a.messageElements,children:s}),Object(T.jsx)("hr",{}),Object(T.jsxs)("div",{className:ke.a.inputAreaElements,children:[Object(T.jsx)("div",{children:Object(T.jsx)("textarea",{value:t.newMessageText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewMessageText(s)},placeholder:"Write something",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a())}})}),Object(T.jsx)("div",{children:Object(T.jsx)("button",{onClick:a,children:"Send"})})]})]})]})},Ie=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(T.jsx)(Ae,Object(d.a)({},this.props))}}]),n}(a.a.Component),Fe=Object(U.c)(Object(i.b)((function(e){return{dialogsPage:e.dialogPage}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}},setNewMessageText:function(e){return{type:"SN/DIALOGS/SET_NEW_MESSAGE_TEXT",newText:e}}}),pe)(Ie),Re=function(e){return Object(T.jsxs)("div",{className:"app-wrapper",children:[Object(T.jsx)(y,{}),Object(T.jsx)(Pe,{}),Object(T.jsxs)("div",{className:"app-wrapper-content",children:[Object(T.jsx)(u.b,{path:"/Profile/:userId?",render:function(){return Object(T.jsx)(ce,{})}}),Object(T.jsx)(u.b,{path:"/News",render:function(){return Object(T.jsx)(_e,{})}}),Object(T.jsx)(u.b,{path:"/Dialogs",render:function(){return Object(T.jsx)(Fe,{})}}),Object(T.jsx)(u.b,{path:"/Users",render:function(){return Object(T.jsx)(ve,{})}}),Object(T.jsx)(u.b,{path:"/Music",render:function(){return Object(T.jsx)(oe,{})}}),Object(T.jsx)(u.b,{path:"/Settings",render:function(){return Object(T.jsx)(we,{})}}),Object(T.jsx)(u.b,{path:"/Login",render:function(){return Object(T.jsx)(Ee,{})}})]})]})},De=n(43),Ge=Object(U.b)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var n=Object(d.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:n.newMessageText};return n.messages=[].concat(Object(M.a)(e.messages),[s]),n.newMessageText="",n}if("SN/DIALOGS/SET_NEW_MESSAGE_TEXT"===t.type){var a=Object(d.a)({},e);return a.newMessageText=t.newText,a}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n=Object(d.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:e.newPostText,likesCount:0,isLiked:!1};return n.posts=[s].concat(Object(M.a)(e.posts)),n.newPostText="",n;case"SN/PROFILE/SET_NEW_POST_TEXT":var a=Object(d.a)({},e);return a.newPostText=t.newText,a;case"SN/PROFILE/ADD_LIKE":var i=Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return i;case"SN/PROFILE/REMOVE_LIKE":var r=Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return r;case"SN/PROFILE/SET_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(d.a)(Object(d.a)({},e),{},{users:Object(M.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(M.a)(e.followingInProgress),[t.id]):Object(M.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SET_AUTH_USER_DATA":return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),We=Object(U.d)(Ge,Object(U.a)(De.a));window.__store__=We;var Be=function(e){c.a.render(Object(T.jsx)(o.a,{children:Object(T.jsx)(i.a,{store:We,children:Object(T.jsx)(Re,{})})}),document.getElementById("root"))};Be(We.getState()),We.subscribe((function(){Be(We.getState())})),l()}},[[75,1,2]]]);
//# sourceMappingURL=main.ed80e307.chunk.js.map