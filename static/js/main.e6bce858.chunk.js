(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){e.exports={dialogsPage:"Dialogs_dialogsPage__30RqF",dialogs:"Dialogs_dialogs__hPjJa",dialog:"Dialogs_dialog__3R01s",messages:"Dialogs_messages__2b5iv",messageElements:"Dialogs_messageElements__BpFaC",inputAreaElements:"Dialogs_inputAreaElements__1GU_0",message:"Dialogs_message__2JtN6"}},17:function(e,t,s){e.exports={items:"Users_items__-cuhe",selectedPage:"Users_selectedPage__22OUq",profile:"Users_profile__2q_da",info:"Users_info__2hM-q",name:"Users_name__3uZmM",buttonsArea:"Users_buttonsArea__3uP-7"}},18:function(e,t,s){e.exports={message:"Message_message__1pl0m",content:"Message_content__28Hls",name:"Message_name__gkaLH",text:"Message_text__1FzPC",time:"Message_time__322cI"}},20:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1o5hr",items:"ProfileInfo_items__Tow0c",statusStaticMode:"ProfileInfo_statusStaticMode__1JGsp",statusEditMode:"ProfileInfo_statusEditMode__2KjhT"}},21:function(e,t,s){e.exports={header:"Header_header__1pKV4",logoArea:"Header_logoArea__3SqBW",loginBlock:"Header_loginBlock__2NGhc",items:"Header_items__2DQpk"}},23:function(e,t,s){e.exports={post:"Post_post__L3g4m",items:"Post_items__TiuHf",postMessage:"Post_postMessage__2R7XL",reactions:"Post_reactions__3uWF0"}},26:function(e,t,s){e.exports={main:"Preloader_main__BgsaX"}},27:function(e,t,s){e.exports={postBlock:"ContentArea_postBlock__2Fp-K",posts:"ContentArea_posts__3qIIz",inputAreaElements:"ContentArea_inputAreaElements__ijd0W"}},42:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},6:function(e,t,s){e.exports={navbar:"Navbar_navbar__27a1U",item:"Navbar_item__2Sz7A",active:"Navbar_active__3wMdQ"}},76:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(5),r=s(25),c=s.n(r),o=s(3),u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,77)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))},l=(s(53),s(4)),d=(s(54),s(2)),j=s(11),b=s(12),O=s(14),f=s(13),h=s(41),p=s.n(h).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2f53ebc7-6e0c-44af-b6eb-a755cbe3639f"}}),g=function(e,t){return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},m=function(e){return p.post("follow/".concat(e))},x=function(e){return p.delete("follow/".concat(e))},v={getProfile:function(e){return p.get("profile/".concat(e))},getUserStatus:function(e){return p.get("/profile/status/".concat(e))},updateUserStatus:function(e){return p.put("/profile/status",{status:e})}},_=function(){return p.get("auth/me")},S={id:null,email:null,login:null,isAuth:!1},P=function(e){return{type:"SN/SET_AUTH_USER_DATA",data:e}},N=s(21),E=s.n(N),T=s.p+"static/media/logo_part_1.230df42a.png",C=s.p+"static/media/logo_part_2.7aafc755.png",w=s(0),U=function(e){var t=e.isAuth,s=e.login;return Object(w.jsxs)("div",{className:E.a.header,children:[Object(w.jsxs)(o.b,{to:"/news",className:E.a.logoArea,children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:T,alt:"logoName1"})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:C,alt:"logoName2"})})]}),Object(w.jsx)("div",{className:E.a.loginBlock,children:t?Object(w.jsxs)("div",{className:E.a.items,children:[Object(w.jsx)("div",{}),Object(w.jsxs)("div",{children:[s," "]}),Object(w.jsx)(o.b,{to:"/login",children:"Logout"})]}):Object(w.jsxs)("div",{className:E.a.items,children:[Object(w.jsx)(o.b,{to:"/login",children:"Login "}),Object(w.jsx)(o.b,{to:"/login",children:"Sign up "})]})})]})},k=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(U,Object(d.a)({},this.props))})}}]),s}(a.a.Component),L=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){_().then((function(t){if(0===t.data.resultCode){var s=t.data.data;e(P(s))}}))}},setAuthUserData:P})(k),y=s(15),M=s(16),A={posts:[{id:21313,message:"testPost",likesCount:1,isLiked:!1}],newPostText:"",profile:null,status:null},I=function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},F=s(42),R=s.n(F),D=s.p+"static/media/defaultSmallUserPhoto.5364f1ba.png";function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var B=n.createElement("circle",{cx:15,cy:15,r:15},n.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),H=n.createElement("circle",{cx:60,cy:15,r:9,fillOpacity:.3},n.createElement("animate",{attributeName:"r",from:9,to:9,begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:.5,to:.5,begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),K=n.createElement("circle",{cx:105,cy:15,r:15},n.createElement("animate",{attributeName:"r",from:15,to:15,begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"fill-opacity",from:1,to:1,begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}));function z(e,t){var s=e.title,a=e.titleId,i=W(e,["title","titleId"]);return n.createElement("svg",G({width:120,height:30,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",ref:t,"aria-labelledby":a},i),s?n.createElement("title",{id:a},s):null,B,H,K)}var q=n.forwardRef(z),X=(s.p,function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(q,{fill:"#2b3f4f",stroke:"current"})})}),J=s(20),V=s.n(J),Q=s(26),Y=s.n(Q),Z=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(j.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.onUpdateStatus()},e.onKeyPressHandler=function(t){"Enter"===t.key&&e.deactivateEditMode()},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e.onUpdateStatus=function(){e.state.status?e.props.updateStatus(e.state.status):e.props.updateStatus("")},e}return Object(b.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[!this.state.editMode&&Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:V.a.statusStaticMode,onDoubleClick:this.activateEditMode,children:this.props.status?this.props.status:"set status"})}),this.state.editMode&&Object(w.jsxs)("div",{className:"".concat(V.a.statusEditMode),children:[Object(w.jsx)("div",{children:Object(w.jsx)("input",{autoFocus:!0,onKeyPress:this.onKeyPressHandler,value:"".concat(this.state.status),onChange:this.onStatusChange})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:this.deactivateEditMode,children:"save"})})]})]})}}]),s}(a.a.Component),$=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return t?Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:V.a.descriptionBlock,children:[Object(w.jsx)("img",{src:null!==t.photos.large?t.photos.large:D,alt:"smallUserPhoto"}),Object(w.jsxs)("div",{className:V.a.items,children:[Object(w.jsx)("div",{children:Object(w.jsx)("b",{children:t.fullName})}),Object(w.jsx)(Z,{updateStatus:n,status:s})]})]})}):Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:Y.a.main,children:Object(w.jsx)(X,{})})})},ee=s(27),te=s.n(ee),se=s(23),ne=s.n(se),ae=Object(i.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t,s){e(function(e,t){return{type:"SN/PROFILE/ADD_LIKE",id:e,isLiked:t}}(t,s))},removeLike:function(t,s){e(function(e,t){return{type:"SN/PROFILE/REMOVE_LIKE",id:e,isLiked:t}}(t,s))}}}))((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:ne.a.post,children:[Object(w.jsxs)("div",{className:ne.a.items,children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:D,alt:"defaultSmallUserPhoto"})}),Object(w.jsxs)("div",{className:ne.a.postMessage,children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("b",{children:["UserName"," "]})," "]}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{children:e.message})})]})]}),Object(w.jsxs)("div",{className:ne.a.reactions,children:[Object(w.jsx)("div",{children:e.isLiked?Object(w.jsxs)("button",{onClick:function(){e.removeLike(e.id,e.isLiked)},children:["Liked \u2665",e.likesCount]}):Object(w.jsxs)("button",{onClick:function(){e.addLike(e.id,e.isLiked)},children:["Like \u2661",e.likesCount]})}),Object(w.jsxs)("div",{children:[" ",Object(w.jsx)("button",{children:" Write comment"})," "]}),Object(w.jsxs)("div",{children:[" ",Object(w.jsx)("button",{children:" Share"})," "]})]})]})]})})),ie=Object(i.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"SN/PROFILE/ADD_POST",newPost:e}},setNewPostText:function(e){return{type:"SN/PROFILE/SET_NEW_POST_TEXT",newText:e}}})((function(e){var t=e.profilePage,s=t.posts.map((function(e){return Object(w.jsx)(ae,{message:e.message,id:e.id,likesCount:e.likesCount,isLiked:e.isLiked},e.id)})),n=function(){t.newPostText&&e.addPost(t.newPostText)};return Object(w.jsxs)("div",{className:te.a.postBlock,children:[Object(w.jsxs)("div",{className:te.a.inputAreaElements,children:[Object(w.jsx)("div",{children:Object(w.jsx)("textarea",{value:t.newPostText,maxLength:1e5,onChange:function(t){var s,n=null===(s=t.currentTarget)||void 0===s?void 0:s.value;e.setNewPostText(n)},placeholder:"What's new?",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),n())}})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:n,children:"Post"})})]}),Object(w.jsx)("div",{className:te.a.posts,children:s})]})})),re=function(e){var t=e.profile,s=e.status,n=e.updateStatus;return Object(w.jsxs)("div",{className:R.a.profile,children:[Object(w.jsx)($,{profile:t,status:s,updateStatus:n}),Object(w.jsx)(ie,{})]})},ce=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="8091"),this.props.getUserProfile(+e),this.props.getUserStatus(+e)}},{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(re,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus}))})}}]),s}(a.a.Component),oe=Object(y.c)(Object(i.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){v.getProfile(e).then((function(e){t({type:"SN/PROFILE/SET_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){v.getUserStatus(e).then((function(e){t(I(e.data))}))}},updateUserStatus:function(e){return function(t){v.updateUserStatus(e).then((function(s){0===s.data.resultCode&&t(I(e))}))}}}),l.f)(ce),ue=function(e){return Object(w.jsx)("div",{children:"Music Page's Content"})},le={users:[],pageSize:5,totalUsersCount:19,currentPage:1,isFetching:!1,followingInProgress:[]},de=function(e){return{type:"SN/USERS/SET_USERS",users:e}},je=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",totalCount:e}},be=function(e){return{type:"SN/USERS/SET_IS_FETCHING",isFetching:e}},Oe=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",followingInProgress:e,id:t}},fe=s(17),he=s.n(fe),pe=function(e){for(var t=e.usersPage,s=e.pageSize,n=e.totalUsersCount,a=e.currentPage,i=e.followingInProgress,r=(e.setUsers,e.setCurrentPage,e.setTotalUsersCount,e.onPageChanged),c=e.unFollowThunkCreator,u=e.followThunkCreator,l=Math.ceil(n/s),d=[],j=1;j<=l;j++)d.push(j);return Object(w.jsxs)("div",{className:he.a.items,children:[t.users.map((function(e){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:he.a.profile,children:[Object(w.jsx)(o.b,{to:"/profile/"+e.id,children:Object(w.jsx)("img",{src:null!==e.photos.small?e.photos.small:D,alt:"smallUserPhoto"})}),Object(w.jsx)("div",{className:he.a.info,children:Object(w.jsx)(o.b,{to:"/profile/"+e.id,children:Object(w.jsx)("div",{className:he.a.name,children:e.name})})})]}),Object(w.jsxs)("div",{className:he.a.buttonsArea,children:[Object(w.jsx)("div",{children:e.followed?Object(w.jsx)("button",{disabled:i.some((function(t){return t===e.id})),onClick:function(){c(e.id)},children:"unfollow"}):Object(w.jsx)("button",{disabled:i.some((function(t){return t===e.id})),onClick:function(){u(e.id)},children:"follow"})}),Object(w.jsx)("div",{children:Object(w.jsxs)(o.b,{to:"/dialogs/"+e.id,children:[" ",Object(w.jsx)("button",{children:"Write message"})]})})]}),Object(w.jsx)("hr",{})]},e.id)})),Object(w.jsx)("div",{children:d.map((function(e){return Object(w.jsx)("span",{className:e===a?he.a.selectedPage:"",onClick:function(){return r(e)},children:e})}))})]})},ge=s(45),me=function(e){return{isAuth:e.auth.isAuth}};function xe(e){return Object(i.b)(me)((function(t){var s=t.isAuth,n=Object(ge.a)(t,["isAuth"]);return s?Object(w.jsx)(e,Object(d.a)({},n)):Object(w.jsx)(l.a,{to:"/Login"})}))}var ve=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){var e;Object(j.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.setIsFetching(!0),g(e.props.currentPage,e.props.pageSize).then((function(t){e.props.setIsFetching(!1),e.props.setUsers(t.items)}))},e}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:this.props.isFetching?Object(w.jsx)("div",{className:Y.a.main,children:Object(w.jsx)(X,{})}):Object(w.jsx)("div",{children:Object(w.jsx)(pe,Object(d.a)(Object(d.a)({},this.props),{},{onPageChanged:this.onPageChanged}))})})}}]),s}(a.a.Component),_e=Object(y.c)(Object(i.b)((function(e){return{usersPage:e.usersPage,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setUsers:de,setCurrentPage:function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCount:je,setIsFetching:be,getUsersThunkCreator:function(e,t){return function(s){s(be(!0)),g(e,t).then((function(e){s(be(!1)),s(de(e.items)),s(je(e.totalCount))}))}},unFollowThunkCreator:function(e){return function(t){t(Oe(!0,e)),x(e).then((function(s){0===s.data.resultCode&&t({type:"SN/USERS/UNFOLLOW",id:e}),t(Oe(!1,e))}))}},followThunkCreator:function(e){return function(t){t(Oe(!0,e)),m(e).then((function(s){0===s.data.resultCode&&t({type:"SN/USERS/FOLLOW",id:e}),t(Oe(!1,e))}))}}}),xe)(ve),Se=function(e){return Object(w.jsx)("div",{children:"News Page's Content"})},Pe=s(6),Ne=s.n(Pe),Ee=function(e){return Object(w.jsxs)("div",{className:Ne.a.navbar,children:[Object(w.jsx)("div",{className:Ne.a.item,children:Object(w.jsx)(o.b,{to:"/Profile",activeClassName:Ne.a.active,children:"My profile"})}),Object(w.jsx)("div",{className:Ne.a.item,children:Object(w.jsx)(o.b,{to:"/News",activeClassName:Ne.a.active,children:"News"})}),Object(w.jsx)("div",{className:Ne.a.item,children:Object(w.jsx)(o.b,{to:"/Dialogs",activeClassName:Ne.a.active,children:"Messages"})}),Object(w.jsx)("div",{className:Ne.a.item,children:Object(w.jsx)(o.b,{to:"/Users",activeClassName:Ne.a.active,children:"Users"})}),Object(w.jsx)("div",{className:Ne.a.item,children:Object(w.jsx)(o.b,{to:"/Music",activeClassName:Ne.a.active,children:"Music"})}),Object(w.jsx)("div",{className:Ne.a.item,children:Object(w.jsx)(o.b,{to:"/Settings",activeClassName:Ne.a.active,children:"Settings"})})]})},Te=s(43),Ce=function(e){return Object(Te.a)(e),Object(w.jsxs)("form",{children:[Object(w.jsx)("div",{children:Object(w.jsx)("input",{placeholder:"Login"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{placeholder:"Password"})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{type:"checkbox"})," remember me"]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{children:"Login"})})]})},we=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Login"}),Object(w.jsx)(Ce,{})]})},Ue=function(e){return Object(w.jsx)("div",{children:"Settings Page's Content"})},ke={dialogs:[{id:1,name:"Dima"},{id:2,name:"Sasha"}],messages:[{id:1,message:"hello"},{id:2,message:"How are you?"}],newMessageText:""},Le=s(10),ye=s.n(Le),Me=function(e){var t=e.id,s=e.name;return Object(w.jsx)("div",{className:ye.a.dialog+""+ye.a.active,children:Object(w.jsx)(o.b,{to:"/dialogs/"+t,children:s})})},Ae=s(18),Ie=s.n(Ae),Fe=function(e){return Object(w.jsx)("div",{className:ye.a.text,children:Object(w.jsxs)("div",{className:Ie.a.message,children:[Object(w.jsx)("img",{className:Ie.a.img,alt:"userPhoto",src:D}),Object(w.jsxs)("div",{className:Ie.a.content,children:[Object(w.jsx)("div",{className:Ie.a.name,children:"userName"}),Object(w.jsx)("div",{className:Ie.a.text,children:e.message}),Object(w.jsx)("div",{className:Ie.a.time,children:"time"})]})]})})},Re=function(e){var t=e.dialogsPage,s=e.addMessage,n=e.setNewMessageText,a=t.dialogs.map((function(e){return Object(w.jsx)(Me,{name:e.name,id:e.id},e.id)})),i=t.messages.map((function(e){return Object(w.jsx)(Fe,{message:e.message,id:e.id},e.id)})),r=function(){t.newMessageText&&s(t.newMessageText.trim())};return Object(w.jsxs)("div",{className:ye.a.dialogsPage,children:[Object(w.jsx)("div",{className:ye.a.dialogs,children:a}),Object(w.jsxs)("div",{className:ye.a.messages,children:[Object(w.jsx)("div",{className:ye.a.messageElements,children:i}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:ye.a.inputAreaElements,children:[Object(w.jsx)(De,{}),Object(w.jsx)("div",{children:Object(w.jsx)("textarea",{value:t.newMessageText,maxLength:500,onChange:function(e){var t,s=null===(t=e.currentTarget)||void 0===t?void 0:t.value;n(s)},placeholder:"Write something",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r())}})}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:r,children:"Send"})})]})]})]})},De=function(e){return Object(w.jsx)("form",{})},Ge=function(e){Object(O.a)(s,e);var t=Object(f.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(w.jsx)(Re,Object(d.a)({},this.props))}}]),s}(a.a.Component),We=Object(y.c)(Object(i.b)((function(e){return{dialogsPage:e.dialogPage}}),{addMessage:function(e){return{type:"SN/DIALOGS/ADD_MESSAGE",newMessage:e}},setNewMessageText:function(e){return{type:"SN/DIALOGS/SET_NEW_MESSAGE_TEXT",newText:e}}}),xe)(Ge),Be=function(e){return Object(w.jsxs)("div",{className:"app-wrapper",children:[Object(w.jsx)(L,{}),Object(w.jsx)(Ee,{}),Object(w.jsxs)("div",{className:"app-wrapper-content",children:[Object(w.jsx)(l.b,{path:"/Profile/:userId?",render:function(){return Object(w.jsx)(oe,{})}}),Object(w.jsx)(l.b,{path:"/News",render:function(){return Object(w.jsx)(Se,{})}}),Object(w.jsx)(l.b,{path:"/Dialogs",render:function(){return Object(w.jsx)(We,{})}}),Object(w.jsx)(l.b,{path:"/Users",render:function(){return Object(w.jsx)(_e,{})}}),Object(w.jsx)(l.b,{path:"/Music",render:function(){return Object(w.jsx)(ue,{})}}),Object(w.jsx)(l.b,{path:"/Settings",render:function(){return Object(w.jsx)(Ue,{})}}),Object(w.jsx)(l.b,{path:"/Login",render:function(){return Object(w.jsx)(we,{})}})]})]})},He=s(44),Ke=Object(y.b)({dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;if("SN/DIALOGS/ADD_MESSAGE"===t.type){var s=Object(d.a)({},e),n={id:Math.floor((new Date).valueOf()*Math.random()),message:s.newMessageText};return s.messages=[].concat(Object(M.a)(e.messages),[n]),s.newMessageText="",s}if("SN/DIALOGS/SET_NEW_MESSAGE_TEXT"===t.type){var a=Object(d.a)({},e);return a.newMessageText=t.newText,a}return e},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD_POST":var s=Object(d.a)({},e),n={id:Math.floor((new Date).valueOf()*Math.random()),message:e.newPostText,likesCount:0,isLiked:!1};return s.posts=[n].concat(Object(M.a)(e.posts)),s.newPostText="",s;case"SN/PROFILE/SET_NEW_POST_TEXT":var a=Object(d.a)({},e);return a.newPostText=t.newText,a;case"SN/PROFILE/ADD_LIKE":var i=Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isLiked:!0,likesCount:e.likesCount+1}):e}))});return i;case"SN/PROFILE/REMOVE_LIKE":var r=Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{isLiked:!1,likesCount:e.likesCount-1}):e}))});return r;case"SN/PROFILE/SET_PROFILE":return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case"SN/PROFILE/SET_STATUS":return Object(d.a)(Object(d.a)({},e),{},{status:t.status});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case"SN/USERS/UNFOLLOW":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case"SN/USERS/SET_USERS":return Object(d.a)(Object(d.a)({},e),{},{users:Object(M.a)(t.users)});case"SN/USERS/SET_CURRENT_PAGE":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalCount});case"SN/USERS/SET_IS_FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(M.a)(e.followingInProgress),[t.id]):Object(M.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/SET_AUTH_USER_DATA":return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),ze=Object(y.d)(Ke,Object(y.a)(He.a));window.__store__=ze;var qe=function(e){c.a.render(Object(w.jsx)(o.a,{children:Object(w.jsx)(i.a,{store:ze,children:Object(w.jsx)(Be,{})})}),document.getElementById("root"))};qe(ze.getState()),ze.subscribe((function(){qe(ze.getState())})),u()}},[[76,1,2]]]);
//# sourceMappingURL=main.e6bce858.chunk.js.map