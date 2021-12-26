/*! For license information please see main.bdf26b6a.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports={dialogsPage:"Dialogs_dialogsPage__2-zGa",dialogs:"Dialogs_dialogs__3K-Xy",dialog:"Dialogs_dialog__ZEC-O",messages:"Dialogs_messages__3kr4z",messageElements:"Dialogs_messageElements__2LS4-",message:"Dialogs_message__nXIdA"}},17:function(e,t,n){e.exports={message:"Message_message__1PLc7",content:"Message_content__3ejf4",name:"Message_name__2xhc0",text:"Message_text__2qUk0",time:"Message_time__18dck"}},22:function(e,t,n){e.exports={main:"Preloader_main__2l6NZ"}},23:function(e,t,n){e.exports={header:"Header_header__WdcwP",logoArea:"Header_logoArea__MJ2oM",loginBlock:"Header_loginBlock__38Nj1"}},28:function(e,t,n){e.exports={postBlock:"ContentArea_postBlock__3Ivjo",posts:"ContentArea_posts__2_nbj"}},29:function(e,t,n){e.exports={items:"Users_items__sAzYH",selectedPage:"Users_selectedPage__UEP4h"}},40:function(e,t,n){},41:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1_i-h"}},42:function(e,t,n){e.exports={items:"Post_items__1-enr"}},52:function(e,t,n){},53:function(e,t,n){},6:function(e,t,n){e.exports={navbar:"Navbar_navbar__3S2BG",item:"Navbar_item__k2Crj",active:"Navbar_active__28fRt"}},75:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),i=n(5),a=n(21),c=n.n(a),o=n(3),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),i(e),a(e)}))},u=(n(52),n(4)),j=(n(53),n(2)),d=n(12),b=n(13),g=n(15),O=n(14),f=n(39),h=n.n(f).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),p=function(e,t){return h.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e){return h.post("follow/".concat(e))},x=function(e){return h.delete("follow/".concat(e))},v=function(e){return h.get("profile/".concat(e))},_=function(){return h.get("auth/me")},S={id:null,email:null,login:null,isAuth:!1},P=n(23),N=n.n(P),E=n.p+"static/media/logo_part_1.230df42a.png",w=n.p+"static/media/logo_part_2.7aafc755.png",C=n(0),T=function(e){return Object(C.jsxs)("div",{className:N.a.header,children:[Object(C.jsxs)(o.b,{to:"/news",className:N.a.logoArea,children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:E,alt:"logoName1"})}),Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:w,alt:"logoName2"})})]}),Object(C.jsx)("div",{className:N.a.loginBlock,children:e.isAuth?Object(C.jsxs)("div",{children:[Object(C.jsxs)("span",{style:{color:"white"},children:[e.login," "]})," ",Object(C.jsx)(o.b,{to:"/login",children:"Logout"})]}):Object(C.jsxs)("div",{children:[Object(C.jsx)(o.b,{to:"/login",children:"Login "}),Object(C.jsx)(o.b,{to:"/login",children:"Signup "})]})})]})},k=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(T,Object(j.a)({},this.props))})}}]),n}(r.a.Component),y=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){_().then((function(t){if(0===t.data.resultCode){var n=t.data.data;e(function(e){return{type:"SN/SET_AUTH_USER_DATA",data:e}}(n))}}))}}})(k),L=n(10),U=n(44),I=function(e){return{isAuth:e.auth.isAuth}};var A=n(16),F={posts:[],newPostText:"",profile:null},M=n(40),R=n.n(M),D=n.p+"static/media/defaultSmallUserPhoto.8101612b.png";function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var B=s.createElement("circle",{cx:15,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),z=s.createElement("circle",{cx:60,cy:15,r:9,fillOpacity:.3},s.createElement("animate",{attributeName:"r",from:9,to:9,begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:.5,to:.5,begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),H=s.createElement("circle",{cx:105,cy:15,r:15},s.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),s.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}));function K(e,t){var n=e.title,r=e.titleId,i=W(e,["title","titleId"]);return s.createElement("svg",G({width:120,height:30,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":r},i),n?s.createElement("title",{id:r},n):null,B,z,H)}var X=s.forwardRef(K),J=(n.p,function(e){return Object(C.jsx)("div",{children:Object(C.jsx)(X,{fill:"#2b3f4f",stroke:"current"})})}),V=n(41),Y=n.n(V),Z=n(22),q=n.n(Z),Q=function(e){var t=e.profile;return t?Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:Y.a.descriptionBlock,children:[Object(C.jsx)("img",{src:null!==t.photos.large?t.photos.large:D}),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:Object(C.jsx)("b",{children:t.fullName})}),Object(C.jsx)("div",{children:t.aboutMe})]})]})}):Object(C.jsx)("div",{className:q.a.main,children:Object(C.jsx)(J,{})})},$=n(28),ee=n.n($),te=n(42),ne=n.n(te),se=Object(i.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,n))},removeLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,n))}}}))((function(e){return Object(C.jsxs)("div",{className:ne.a.items,children:[Object(C.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png",alt:""}),Object(C.jsxs)("b",{children:["UserName"," "]})," ",Object(C.jsx)("span",{children:e.message}),Object(C.jsx)("div",{children:e.isLiked?Object(C.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(C.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(C.jsx)("hr",{})]})})),re=Object(i.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPost:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})((function(e){var t=e.profilePage,n=t.posts.map((function(e){return Object(C.jsx)(se,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})),s=function(){t.newPostText&&e.addPost(t.newPostText)};return Object(C.jsxs)("div",{className:ee.a.postBlock,children:[Object(C.jsx)("textarea",{value:t.newPostText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewPostText(s)},placeholder:"What's new?",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s())}}),Object(C.jsx)("span",{children:Object(C.jsx)("button",{onClick:s,children:"Post"})}),Object(C.jsx)("div",{className:ee.a.posts,children:n})]})})),ie=function(e){return Object(C.jsxs)("div",{className:R.a.profile,children:[Object(C.jsx)(Q,{profile:e.profile}),Object(C.jsx)(re,{})]})},ae=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="2"),this.props.getUserProfile(+e)}},{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(ie,Object(j.a)(Object(j.a)({},this.props),{},{profile:this.props.profile}))})}}]),n}(r.a.Component),ce=Object(L.c)(Object(i.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){v(e).then((function(e){t({type:"SN/PROFILE/SET_PROFILE",profile:e.data})}))}}}),u.f,(function(e){return Object(i.b)(I)((function(t){var n=t.isAuth,s=Object(U.a)(t,["isAuth"]);return n?Object(C.jsx)(e,Object(j.a)({},s)):Object(C.jsx)(u.a,{to:"/Login"})}))}))(ae),oe=function(e){return Object(C.jsx)("div",{children:"Music Page's Content"})},le={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},ue=function(e){return{type:"SN/USERS/FOLLOW",id:e}},je=function(e){return{type:"SN/USERS/UNFOLLOW",id:e}},de=function(e){return{type:"SN/USERS/SET_USERS",users:e}},be=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},ge=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},Oe=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},fe=n(29),he=n.n(fe),pe=function(e){for(var t=e.usersPage,n=Math.ceil(t.totalUsersCount/t.pageSize),s=[],r=1;r<=n;r++)s.push(r);return Object(C.jsxs)("div",{className:he.a.items,children:[Object(C.jsx)("div",{children:s.map((function(n){return Object(C.jsx)("span",{className:n===t.currentPage?he.a.selectedPage:"",onClick:function(){return e.onPageChanged(n)},children:n})}))}),Object(C.jsx)("hr",{}),t.users.map((function(t){var n,s;return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:Object(C.jsx)(o.b,{to:"/profile/"+t.id,children:Object(C.jsx)("img",{src:null!==t.photos.small?t.photos.small:D})})}),Object(C.jsx)("div",{children:Object(C.jsx)("b",{children:t.name})}),Object(C.jsx)("div",{style:{textDecoration:"underline",color:"blue"},children:"Write message"}),Object(C.jsx)("div",{children:t.followed?Object(C.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollowThunkCreator(t.id)},children:"unfollow"}):Object(C.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id)},children:"follow"})}),Object(C.jsxs)("div",{children:["country:",(null===(n=t.location)||void 0===n?void 0:n.country)?t.location.country:" - "]}),Object(C.jsxs)("div",{children:["city:",(null===(s=t.location)||void 0===s?void 0:s.city)?t.location.city:" - "]}),Object(C.jsx)("hr",{})]},t.id)}))]})},me=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),p(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(C.jsx)(C.Fragment,{children:this.props.isFetching?Object(C.jsx)("div",{className:q.a.main,children:Object(C.jsx)(J,{})}):Object(C.jsx)(pe,{usersPage:this.props.usersPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,setUsers:this.props.setUsers,setCurrentPage:this.props.setCurrentPage,setTotalUsersCount:this.props.setTotalUsersCount,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,setFollowingProgress:this.props.setFollowingProgress,unFollowThunkCreator:this.props.unFollowThunkCreator,followThunkCreator:this.props.followThunkCreator})})}}]),n}(r.a.Component),xe=Object(L.c)(Object(i.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:ue,unFollow:je,setUsers:de,setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:be,setIsFetching:ge,setFollowingProgress:Oe,getUsersThunkCreator:function(e,t){return function(n){n(ge(!0)),p(e,t).then((function(e){n(ge(!1)),n(de(e.items)),n(be(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(Oe(!0,e)),x(e).then((function(n){0===n.data.resultCode&&t(je(e)),t(Oe(!1,e))}))}},followThunkCreator:function(e){return function(t){t(Oe(!0,e)),m(e).then((function(n){0===n.data.resultCode&&t(ue(e)),t(Oe(!1,e))}))}}}))(me),ve=function(e){return Object(C.jsx)("div",{children:"News Page's Content"})},_e=n(6),Se=n.n(_e),Pe=function(e){return Object(C.jsxs)("div",{className:Se.a.navbar,children:[Object(C.jsx)("div",{className:Se.a.item,children:Object(C.jsx)(o.b,{to:"/Profile",activeClassName:Se.a.active,children:"My profile"})}),Object(C.jsx)("div",{className:Se.a.item,children:Object(C.jsx)(o.b,{to:"/News",activeClassName:Se.a.active,children:"News"})}),Object(C.jsx)("div",{className:Se.a.item,children:Object(C.jsx)(o.b,{to:"/Dialogs",activeClassName:Se.a.active,children:"Messages"})}),Object(C.jsx)("div",{className:Se.a.item,children:Object(C.jsx)(o.b,{to:"/Users",activeClassName:Se.a.active,children:"Users"})}),Object(C.jsx)("div",{className:Se.a.item,children:Object(C.jsx)(o.b,{to:"/Music",activeClassName:Se.a.active,children:"Music"})}),Object(C.jsx)("div",{className:Se.a.item,children:Object(C.jsx)(o.b,{to:"/Settings",activeClassName:Se.a.active,children:"Settings"})})]})},Ne=function(e){return Object(C.jsx)("div",{children:"LoginPage"})},Ee=function(e){return Object(C.jsx)("div",{children:"Settings Page's Content"})},we={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello"},{id:2,message:"How are you?"}],newMessageText:""},Ce=n(11),Te=n.n(Ce),ke=function(e){return Object(C.jsx)("div",{className:Te.a.dialog+""+Te.a.active,children:Object(C.jsx)(o.b,{to:"/dialogs/"+e.id,children:e.name})})},ye=n(17),Le=n.n(ye),Ue=function(e){return Object(C.jsx)("div",{className:Te.a.text,children:Object(C.jsxs)("div",{className:Le.a.message,children:[Object(C.jsx)("img",{className:Le.a.img,alt:"userPhoto",src:D}),Object(C.jsxs)("div",{className:Le.a.content,children:[Object(C.jsx)("div",{className:Le.a.name,children:"userName"}),Object(C.jsx)("div",{className:Le.a.text,children:e.message}),Object(C.jsx)("div",{className:Le.a.time,children:"time"})]})]})})},Ie=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(C.jsx)(ke,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(C.jsx)(Ue,{message:e.message,id:e.id},e.id)})),r=function(){t.newMessageText&&e.addMessage(t.newMessageText.trim())};return e.isAuth?Object(C.jsxs)("div",{className:Te.a.dialogsPage,children:[Object(C.jsx)("div",{className:Te.a.dialogs,children:n}),Object(C.jsxs)("div",{className:Te.a.messages,children:[Object(C.jsx)("div",{className:Te.a.messageElements,children:s}),Object(C.jsxs)("div",{children:[Object(C.jsx)("hr",{}),Object(C.jsx)("textarea",{value:t.newMessageText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewMessageText(s)},placeholder:"Write something",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r())}}),Object(C.jsx)("span",{children:Object(C.jsx)("button",{onClick:r,children:"Send"})})]})]})]}):Object(C.jsx)(u.a,{to:"/Login"})},Ae=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(C.jsx)(Ie,Object(j.a)({},this.props))}}]),n}(r.a.Component),Fe=Object(L.c)(Object(i.b)((function(e){return{dialogsPage:e.dialogPage,isAuth:e.auth.isAuth}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}},setNewMessageText:function(e){return{type:"SN/DIALOGS/SET_NEW_MESSAGE_TEXT",newText:e}}}))(Ae),Me=function(e){return Object(C.jsxs)("div",{className:"app-wrapper",children:[Object(C.jsx)(y,{}),Object(C.jsx)(Pe,{}),Object(C.jsxs)("div",{className:"app-wrapper-content",children:[Object(C.jsx)(u.b,{path:"/Profile/:userId?",render:function(){return Object(C.jsx)(ce,{})}}),Object(C.jsx)(u.b,{path:"/News",render:function(){return Object(C.jsx)(ve,{})}}),Object(C.jsx)(u.b,{path:"/Dialogs",render:function(){return Object(C.jsx)(Fe,{})}}),Object(C.jsx)(u.b,{path:"/Users",render:function(){return Object(C.jsx)(xe,{})}}),Object(C.jsx)(u.b,{path:"/Music",render:function(){return Object(C.jsx)(oe,{})}}),Object(C.jsx)(u.b,{path:"/Settings",render:function(){return Object(C.jsx)(Ee,{})}}),Object(C.jsx)(u.b,{path:"/Login",render:function(){return Object(C.jsx)(Ne,{})}})]})]})},Re=n(43),De=Object(L.b)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var n=Object(j.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:n.newMessageText};return n.messages=[].concat(Object(A.a)(e.messages),[s]),n.newMessageText="",n}if("SN/DIALOGS/SET_NEW_MESSAGE_TEXT"===t.type){var r=Object(j.a)({},e);return r.newMessageText=t.newText,r}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n=Object(j.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:e.newPostText,likesCount:0,isLiked:!1};return n.posts=[s].concat(Object(A.a)(e.posts)),n.newPostText="",n;case"SN/PROFILE/SET_NEW_POST_TEXT":var r=Object(j.a)({},e);return r.newPostText=t.newText,r;case"SN/PROFILE/ADD_LIKE":var i=Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return i;case"SN/PROFILE/REMOVE_LIKE":var a=Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return a;case"SN/PROFILE/SET_PROFILE":return Object(j.a)(Object(j.a)({},e),{},{profile:t.profile});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:Object(A.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(A.a)(e.followingInProgress),[t.id]):Object(A.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SET_AUTH_USER_DATA":return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),Ge=Object(L.d)(De,Object(L.a)(Re.a));window.__store__=Ge;var We=function(e){c.a.render(Object(C.jsx)(o.a,{children:Object(C.jsx)(i.a,{store:Ge,children:Object(C.jsx)(Me,{})})}),document.getElementById("root"))};We(Ge.getState()),Ge.subscribe((function(){We(Ge.getState())})),l()}},[[75,1,2]]]);
//# sourceMappingURL=main.bdf26b6a.chunk.js.map