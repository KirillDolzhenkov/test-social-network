/*! For license information please see main.330d1cb6.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={dialogsPage:"Dialogs_dialogsPage__2-zGa",dialogs:"Dialogs_dialogs__3K-Xy",dialog:"Dialogs_dialog__ZEC-O",messages:"Dialogs_messages__3kr4z",message:"Dialogs_message__nXIdA"}},26:function(e,t,n){e.exports={items:"Users_items__sAzYH",selectedPage:"Users_selectedPage__UEP4h"}},27:function(e,t,n){e.exports={postBlock:"ContentArea_postBlock__3Ivjo",posts:"ContentArea_posts__2_nbj"}},28:function(e,t,n){e.exports={header:"Header_header__WdcwP",loginBlock:"Header_loginBlock__38Nj1"}},38:function(e,t,n){},39:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1_i-h"}},40:function(e,t,n){e.exports={items:"Post_items__1-enr"}},46:function(e,t,n){},47:function(e,t,n){},6:function(e,t,n){e.exports={navbar:"Navbar_navbar__3S2BG",item:"Navbar_item__k2Crj",active:"Navbar_active__28fRt"}},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),i=n(18),a=n.n(i),o=(n(46),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),i(e),a(e)}))}),c=n(4),l=(n(47),n(6)),u=n.n(l),d=n(0),j=function(e){return Object(d.jsxs)("div",{className:u.a.navbar,children:[Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(c.b,{to:"/Profile",activeClassName:u.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(c.b,{to:"/Dialogs",activeClassName:u.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(c.b,{to:"/Users",activeClassName:u.a.active,children:"Users"})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(c.b,{to:"/News",activeClassName:u.a.active,children:"News"})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(c.b,{to:"/Music",activeClassName:u.a.active,children:"Music"})}),Object(d.jsx)("div",{className:u.a.item,children:Object(d.jsx)(c.b,{to:"/Settings",activeClassName:u.a.active,children:"Settings"})})]})},g=n(3),b=n(10),O=n.n(b),p=function(e){return Object(d.jsx)("div",{className:O.a.dialog+""+O.a.active,children:Object(d.jsx)(c.b,{to:"/dialogs/"+e.id,children:e.name})})},h=function(e){return Object(d.jsx)("div",{className:O.a.message,children:e.message})},f=n(11),x=n(2),m={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello"},{id:2,message:"How are you?"}],newMessageText:""},S=n(5),v=Object(S.b)((function(e){return{dialogsPage:e.dialogPage}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}},setNewMessageText:function(e){return{type:"SN/DIALOGS/SET_NEW_MESSAGE_TEXT",newText:e}}})((function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(d.jsx)(p,{name:e.name,id:e.id},e.id)})),s=t.messages.map((function(e){return Object(d.jsx)(h,{message:e.message,id:e.id},e.id)})),r=function(){t.newMessageText&&e.addMessage(t.newMessageText.trim())};return Object(d.jsxs)("div",{className:O.a.dialogsPage,children:[Object(d.jsx)("div",{className:O.a.dialogs,children:n}),Object(d.jsxs)("div",{className:O.a.messages,children:[s,Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("textarea",{value:t.newMessageText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewMessageText(s)},placeholder:"Write something",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r())}}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:r,children:"Send"})})]})]})]})})),P=function(e){return Object(d.jsx)("div",{children:"Music Page Content"})},_=function(e){return Object(d.jsx)("div",{children:"News Page Content"})},E=function(e){return Object(d.jsx)("div",{children:"Settings Page Content"})},N=n(13),w=n(14),T=n(16),C=n(15),k=n(20),L=n.n(k),U=L.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),I=function(e,t){return U.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},y=function(e){return U.post("follow/".concat(e))},F=function(e){return U.delete("follow/".concat(e))},R=function(e){return U.get("profile/".concat(e))},A={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},D=function(e){return{type:"SN/USERS/FOLLOW",id:e}},M=function(e){return{type:"SN/USERS/UNFOLLOW",id:e}},G=function(e){return{type:"SN/USERS/SET_USERS",users:e}},W=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},B=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},z=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},H=n.p+"static/media/defaultSmallUserPhoto.8101612b.png",K=n(26),X=n.n(K),J=function(e){for(var t=e.usersPage,n=Math.ceil(t.totalUsersCount/t.pageSize),s=[],r=1;r<=n;r++)s.push(r);return Object(d.jsxs)("div",{className:X.a.items,children:[Object(d.jsx)("div",{children:s.map((function(n){return Object(d.jsx)("span",{className:n===t.currentPage?X.a.selectedPage:"",onClick:function(){return e.onPageChanged(n)},children:n})}))}),Object(d.jsx)("hr",{}),t.users.map((function(t){var n,s;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(c.b,{to:"/profile/"+t.id,children:Object(d.jsx)("img",{src:null!==t.photos.small?t.photos.small:H})})}),Object(d.jsx)("div",{children:Object(d.jsx)("b",{children:t.name})}),Object(d.jsx)("div",{style:{textDecoration:"underline",color:"blue"},children:"Write message"}),Object(d.jsx)("div",{children:t.followed?Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollowThunkCreator(t.id)},children:"unfollow"}):Object(d.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followThunkCreator(t.id)},children:"follow"})}),Object(d.jsxs)("div",{children:["country:",(null===(n=t.location)||void 0===n?void 0:n.country)?t.location.country:" - "]}),Object(d.jsxs)("div",{children:["city:",(null===(s=t.location)||void 0===s?void 0:s.city)?t.location.city:" - "]}),Object(d.jsx)("hr",{})]},t.id)}))]})},V=(n(72),function(e){return Object(d.jsx)("h1",{children:"loading..."})}),Y=function(e){Object(T.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(N.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),I(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:this.props.isFetching?Object(d.jsx)(V,{}):Object(d.jsx)(J,{usersPage:this.props.usersPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.follow,unFollow:this.props.unFollow,setUsers:this.props.setUsers,setCurrentPage:this.props.setCurrentPage,setTotalUsersCount:this.props.setTotalUsersCount,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,setFollowingProgress:this.props.setFollowingProgress,unFollowThunkCreator:this.props.unFollowThunkCreator,followThunkCreator:this.props.followThunkCreator})})}}]),n}(r.a.Component),Z=Object(S.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:D,unFollow:M,setUsers:G,setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:W,setIsFetching:B,setFollowingProgress:z,getUsersThunkCreator:function(e,t){return function(n){n(B(!0)),I(e,t).then((function(e){n(B(!1)),n(G(e.items)),n(W(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(z(!0,e)),F(e).then((function(n){0===n.data.resultCode&&t(M(e)),t(z(!1,e))}))}},followThunkCreator:function(e){return function(t){t(z(!0,e)),y(e).then((function(n){0===n.data.resultCode&&t(D(e)),t(z(!1,e))}))}}})(Y),q=n(38),Q=n.n(q),$=n(39),ee=n.n($),te=function(e){var t=e.profile;return t?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://i.redd.it/om4a8r7glhx21.png",alt:""})}),Object(d.jsxs)("div",{className:ee.a.descriptionBlock,children:[Object(d.jsx)("img",{src:null!==t.photos.large?t.photos.large:H}),Object(d.jsx)("b",{children:t.fullName})]})]}):Object(d.jsx)(V,{})},ne=n(27),se=n.n(ne),re={posts:[{id:1,message:"Hi dude",likesCount:2,isLiked:!1},{id:2,message:"nice photos!",likesCount:1,isLiked:!1}],newPostText:"",profile:null},ie=n(40),ae=n.n(ie),oe=Object(S.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,n))},removeLike:function(t,n){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,n))}}}))((function(e){return Object(d.jsxs)("div",{className:ae.a.items,children:[Object(d.jsx)("img",{src:"https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png",alt:""}),Object(d.jsxs)("b",{children:["UserName"," "]})," ",Object(d.jsx)("span",{children:e.message}),Object(d.jsx)("div",{children:e.isLiked?Object(d.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(d.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(d.jsx)("hr",{})]})})),ce=Object(S.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPost:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})((function(e){var t=e.profilePage,n=t.posts.map((function(e){return Object(d.jsx)(oe,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})),s=function(){t.newPostText&&e.addPost(t.newPostText)};return Object(d.jsxs)("div",{className:se.a.postBlock,children:[Object(d.jsx)("textarea",{value:t.newPostText,maxLength:1e5,onChange:function(t){var n,s=null===(n=t.currentTarget)||void 0===n?void 0:n.value;e.setNewPostText(s)},placeholder:"What's new?",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s())}}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{onClick:s,children:"Post"})}),Object(d.jsx)("div",{className:se.a.posts,children:n})]})})),le=function(e){return Object(d.jsxs)("div",{className:Q.a.profile,children:[Object(d.jsx)(te,{profile:e.profile}),Object(d.jsx)(ce,{})]})},ue=function(e){Object(T.a)(n,e);var t=Object(C.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.userId;t||(t=2),R(t).then((function(t){e.props.setProfile(t.data)}))}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(le,Object(x.a)(Object(x.a)({},this.props),{},{profile:this.props.profile}))})}}]),n}(r.a.Component),de=Object(g.e)(ue),je=Object(S.b)((function(e){return{profile:e.profilePage.profile}}),{setProfile:function(e){return{type:"SN/PROFILE/SET_PROFILE",profile:e}}})(de),ge=n(28),be=n.n(ge),Oe=n.p+"static/media/logo_part_1.230df42a.png",pe=n.p+"static/media/logo_part_2.7aafc755.png",he=function(e){return Object(d.jsxs)("div",{className:be.a.header,children:[Object(d.jsx)("img",{src:Oe}),Object(d.jsx)("img",{src:pe}),Object(d.jsx)("div",{className:be.a.loginBlock,children:e.isAuth?Object(d.jsx)("span",{style:{color:"white"},children:e.login}):Object(d.jsx)(c.b,{to:"/login",children:"login"})})]})},fe={id:null,email:null,login:null,isAuth:!1},xe=function(e){Object(T.a)(n,e);var t=Object(C.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this;L.a.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials:!0}).then((function(t){if(0===t.data.resultCode){var n=t.data.data;e.props.setAuthUserData(n)}}))}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(he,Object(x.a)({},this.props))})}}]),n}(r.a.Component),me=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:function(e){return{type:"SN/SET_AUTH_USER_DATA",data:e}}})(xe),Se=function(e){return Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(me,{}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(g.a,{path:"/Profile/:userId?",render:function(){return Object(d.jsx)(je,{})}}),Object(d.jsx)(g.a,{path:"/Dialogs",render:function(){return Object(d.jsx)(v,{})}}),Object(d.jsx)(g.a,{path:"/Users",render:function(){return Object(d.jsx)(Z,{})}}),Object(d.jsx)(g.a,{path:"/News",render:function(){return Object(d.jsx)(_,{})}}),Object(d.jsx)(g.a,{path:"/Music",render:function(){return Object(d.jsx)(P,{})}}),Object(d.jsx)(g.a,{path:"/Settings",render:function(){return Object(d.jsx)(E,{})}})]})]})},ve=n(21),Pe=n(41),_e=Object(ve.b)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var n=Object(x.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:n.newMessageText};return n.messages=[].concat(Object(f.a)(e.messages),[s]),n.newMessageText="",n}if("SN/DIALOGS/SET_NEW_MESSAGE_TEXT"===t.type){var r=Object(x.a)({},e);return r.newMessageText=t.newText,r}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var n=Object(x.a)({},e),s={id:Math.floor((new Date).valueOf()*Math.random()),message:e.newPostText,likesCount:0,isLiked:!1};return n.posts=[s].concat(Object(f.a)(e.posts)),n.newPostText="",n;case"SN/PROFILE/SET_NEW_POST_TEXT":var r=Object(x.a)({},e);return r.newPostText=t.newText,r;case"SN/PROFILE/ADD_LIKE":var i=Object(x.a)(Object(x.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return i;case"SN/PROFILE/REMOVE_LIKE":var a=Object(x.a)(Object(x.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return a;case"SN/PROFILE/SET_PROFILE":return Object(x.a)(Object(x.a)({},e),{},{profile:t.profile});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(x.a)(Object(x.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(x.a)(Object(x.a)({},e),{},{users:Object(f.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(x.a)(Object(x.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(x.a)(Object(x.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(x.a)(Object(x.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(f.a)(e.followingInProgress),[t.id]):Object(f.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SET_AUTH_USER_DATA":return Object(x.a)(Object(x.a)(Object(x.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),Ee=Object(ve.c)(_e,Object(ve.a)(Pe.a));window.__store__=Ee;var Ne=function(e){a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(c.a,{children:Object(d.jsx)(S.a,{store:Ee,children:Object(d.jsx)(Se,{})})})}),document.getElementById("root"))};Ne(Ee.getState()),Ee.subscribe((function(){Ne(Ee.getState())})),o()}},[[73,1,2]]]);
//# sourceMappingURL=main.330d1cb6.chunk.js.map