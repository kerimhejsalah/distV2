(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"Ns/k":function(t,a,e){"use strict";e.r(a),e.d(a,"HomeModule",(function(){return w}));var c=e("ofXK"),i=e("tyNb"),s=e("fXoL"),n=e("tk/3"),r=e("AytR");let o=(()=>{class t{constructor(t){this.http=t,this.URL=r.a.urlBackend,this.token=localStorage.getItem("token_Pro")}getVideo(){const t=localStorage.getItem("token_Pro"),a=(new n.d).set("authorization","Bearer "+t);return this.http.get(this.URL+"urlvideo",{headers:a})}}return t.\u0275fac=function(a){return new(a||t)(s.fc(n.b))},t.\u0275prov=s.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=e("jhN1"),l=e("wZkO"),d=e("TIDI"),p=e("sYmb");const u=function(t){return{active:t}};function h(t,a){if(1&t&&(s.bc(0,"div",30),s.Wb(1,"iframe",31),s.Wb(2,"youtube-player",32),s.bc(3,"div",33),s.bc(4,"h5"),s.Pc(5),s.ac(),s.bc(6,"p"),s.Pc(7),s.ac(),s.ac(),s.bc(8,"button",34),s.Wb(9,"span",35),s.bc(10,"span",36),s.Pc(11,"Pr\xe9c\xe9dent"),s.ac(),s.ac(),s.bc(12,"button",37),s.Wb(13,"span",38),s.bc(14,"span",36),s.Pc(15,"Suivant"),s.ac(),s.ac(),s.ac()),2&t){const t=a.$implicit,e=a.index,c=s.mc();s.tc("id",e),s.sc("ngClass",s.wc(10,u,0==e)),s.Jb(1),s.sc("src",c.urlSafe,s.Fc),s.Jb(1),s.sc("videoId",t.url)("height",150)("width",180)("startSeconds",4)("endSeconds",300),s.Jb(3),s.Qc(t.title),s.Jb(2),s.Qc(t.desc)}}function m(t,a){if(1&t&&(s.bc(0,"div",30),s.Wb(1,"iframe",31),s.bc(2,"div",33),s.bc(3,"h5"),s.Pc(4),s.ac(),s.bc(5,"p"),s.Pc(6),s.ac(),s.ac(),s.bc(7,"button",34),s.Wb(8,"span",35),s.bc(9,"span",36),s.Pc(10,"Previous"),s.ac(),s.ac(),s.bc(11,"button",37),s.Wb(12,"span",38),s.bc(13,"span",36),s.Pc(14,"Next"),s.ac(),s.ac(),s.ac()),2&t){const t=a.$implicit,e=a.index,c=s.mc();s.tc("id",e),s.sc("ngClass",s.wc(5,u,0==e)),s.Jb(1),s.sc("src",c.urlSafeP,s.Fc),s.Jb(3),s.Qc(t.title),s.Jb(2),s.Qc(t.desc)}}const g=[{path:"",component:(()=>{class t{constructor(t,a,e){this.videoService=t,this.hostElement=a,this.sanitizer=e,this.vidoView=!1,this.points=[],this.image=""}ngOnInit(){this.videoService.getVideo().subscribe(t=>{t&&(this.urlVideo=t,this.dataUrlD=this.urlVideo.dataUrlD,this.dataUrlP=this.urlVideo.dataUrlP,this.dataUrlD2="https://www.youtube.com/embed/".concat(this.urlVideo.dataUrlD[0].url),this.dataUrlP2="https://www.youtube.com/embed/".concat(this.urlVideo.dataUrlP[0].url),this.vidoView=!0,this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.dataUrlD2),this.urlSafeP=this.sanitizer.bypassSecurityTrustResourceUrl(this.dataUrlP2))})}showImage(t){this.image=t,this.signatureImage=t}}return t.\u0275fac=function(a){return new(a||t)(s.Vb(o),s.Vb(s.o),s.Vb(b.b))},t.\u0275cmp=s.Pb({type:t,selectors:[["app-home"]],decls:53,vars:8,consts:[["src","../../../assets/img/ac4.jpg","alt","First slide",2,"height","750px","width","100%"],["id","counts",1,"counts"],[1,"row"],[1,"container"],[1,"itemss"],["dynamicHeight","","mat-align-tabs","center"],[3,"label"],[1,"example-small-box","mat-elevation-z4"],["id","carouselExampleCaptions","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],["class","carousel-item active",3,"id","ngClass",4,"ngFor","ngForOf"],["label","Patient"],["id","departments",1,"departments"],[1,"contact-info","d-flex","align-items-center"],[1,"section-title"],["src","../../../assets/img/rgbd.JPG"],[2,"font-weight","bold","font-size","110%"],["href","mailto: contact@stimed.fr",1,"instagram"],[1,"bi","bi-envelope-fill","fa-lg"],["href","https://api.whatsapp.com/send?phone=00330380801954",1,"instagram"],[1,"bi","bi-phone-fill","fa-lg",2,"padding-left","12px"],["href","#",1,"instagram"],[1,"bi","bi-pin-map-fill","fa-lg",2,"padding-left","12px"],["href","https://www.facebook.com/profile.php?id=100063058550130",1,"instagram"],[1,"bi","bi-facebook","fa-lg",2,"padding-left","12px"],["href","https://www.instagram.com/stimed_france/",1,"instagram"],[1,"bi","bi-instagram","fa-lg",2,"padding-left","12px"],["href","https://www.linkedin.com/company/stimed/",1,"instagram"],[1,"bi","bi-linkedin","fa-lg",2,"padding-left","12px"],["src","../../../assets/img/qrcode.JPG"],[1,"carousel-item","active",3,"id","ngClass"],["width","100%","height","500px","frameborder","0","allowfullscreen","",3,"src"],["suggestedQuality","highres","audio","true",3,"videoId","height","width","startSeconds","endSeconds"],[1,"carousel-caption","d-none","d-md-block"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"]],template:function(t,a){1&t&&(s.Wb(0,"br"),s.Wb(1,"br"),s.Wb(2,"br"),s.Wb(3,"br"),s.Wb(4,"img",0),s.bc(5,"section",1),s.bc(6,"div",2),s.bc(7,"div",3),s.bc(8,"div",4),s.bc(9,"mat-tab-group",5),s.bc(10,"mat-tab",6),s.nc(11,"translate"),s.bc(12,"div",7),s.bc(13,"div",3),s.bc(14,"div",2),s.bc(15,"div",8),s.bc(16,"div",9),s.Nc(17,h,16,12,"div",10),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.bc(18,"mat-tab",11),s.bc(19,"div",7),s.bc(20,"div",3),s.bc(21,"div",2),s.bc(22,"div",8),s.bc(23,"div",9),s.Nc(24,m,15,7,"div",10),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.bc(25,"section",12),s.bc(26,"div",3),s.Wb(27,"div",13),s.bc(28,"div",14),s.Wb(29,"img",15),s.Wb(30,"br"),s.Wb(31,"br"),s.bc(32,"h2"),s.Pc(33),s.nc(34,"translate"),s.ac(),s.bc(35,"p",16),s.bc(36,"a",17),s.Wb(37,"i",18),s.ac(),s.Pc(38," : contact@stimed.fr "),s.bc(39,"a",19),s.Wb(40,"i",20),s.ac(),s.Pc(41," : +33(0)380801954 "),s.bc(42,"a",21),s.Wb(43,"i",22),s.ac(),s.Pc(44," : 2, route d\xe9partementale 974, 21190 Meursault, France "),s.bc(45,"a",23),s.Wb(46,"i",24),s.ac(),s.bc(47,"a",25),s.Wb(48,"i",26),s.ac(),s.bc(49,"a",27),s.Wb(50,"i",28),s.ac(),s.Wb(51,"br"),s.Wb(52,"img",29),s.ac(),s.ac(),s.ac(),s.ac()),2&t&&(s.Jb(10),s.tc("label",s.oc(11,4,"PROFILE.PROF")),s.Jb(7),s.sc("ngForOf",a.dataUrlD),s.Jb(7),s.sc("ngForOf",a.dataUrlP),s.Jb(9),s.Qc(s.oc(34,6,"HOMES.CONT")))},directives:[l.b,l.a,c.l,c.k,d.a],pipes:[p.c],styles:[".example-large-box[_ngcontent-%COMP%], .example-small-box[_ngcontent-%COMP%], .example-small-box2[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:16px;border-radius:8px;justify-content:center!important;margin:16px 16px 16px 100px}.example-small-box[_ngcontent-%COMP%]{height:550px;width:900px}.departments[_ngcontent-%COMP%]{width:100%}.example-large-box[_ngcontent-%COMP%]{height:550px;width:900px}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=s.Tb({type:t}),t.\u0275inj=s.Sb({factory:function(a){return new(a||t)},imports:[[i.i.forChild(g)],i.i]}),t})();var v=e("byDL");let w=(()=>{class t{}return t.\u0275mod=s.Tb({type:t}),t.\u0275inj=s.Sb({factory:function(a){return new(a||t)},imports:[[c.c,f,l.c,p.b,d.b,v.a]]}),t})()}}]);