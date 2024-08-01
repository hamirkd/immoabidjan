"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[917],{2917:(k,c,o)=>{o.r(c),o.d(c,{AuthSignInModule:()=>q});var l=o(4521),d=o(7423),f=o(7446),m=o(7322),p=o(5245),h=o(7531),v=o(773),x=o(6236),I=o(7775),Z=o(1751),s=o(3075),y=o(8288),e=o(5e3),A=o(8951),w=o(9808),T=o(2494);const C=["signInNgForm"];function U(t,i){if(1&t&&(e.TgZ(0,"fuse-alert",42),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),e.xp6(1),e.hij(" ",n.alert.message," ")}}function b(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," E-mail est obligatoire "),e.qZA())}function S(t,i){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," SVP, veuillez entrer un e-mail valide "),e.qZA())}function J(t,i){1&t&&e._UZ(0,"mat-icon",43),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function F(t,i){1&t&&e._UZ(0,"mat-icon",43),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function N(t,i){1&t&&(e.TgZ(0,"span"),e._uU(1," Se connecter "),e.qZA())}function Q(t,i){1&t&&e._UZ(0,"mat-progress-spinner",44),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const M=function(){return["/sign-up"]},j=function(){return["/forgot-password"]},Y=[{path:"",component:(()=>{class t{constructor(n,r,a,g){this._activatedRoute=n,this._authService=r,this._formBuilder=a,this._router=g,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["",[s.kI.required,s.kI.email]],password:["",s.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const n=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(n)},n=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"E-mail ou mot passe incorrect"},console.log(n),this.showAlert=!0}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.gz),e.Y36(A.e),e.Y36(s.qu),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-in"]],viewQuery:function(n,r){if(1&n&&e.Gf(C,5),2&n){let a;e.iGM(a=e.CRH())&&(r.signInNgForm=a.first)}},decls:64,vars:18,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo128x128.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(n,r){if(1&n){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Connexion"),e.qZA(),e.TgZ(7,"div",6)(8,"div"),e._uU(9,"Vous n'avez pas de compte?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Cr\xe9er un compte "),e.qZA()(),e.YNc(12,U,2,5,"fuse-alert",8),e.TgZ(13,"form",9,10)(15,"mat-form-field",11)(16,"mat-label"),e._uU(17,"E-mail"),e.qZA(),e._UZ(18,"input",12),e.YNc(19,b,2,0,"mat-error",13),e.YNc(20,S,2,0,"mat-error",13),e.qZA(),e.TgZ(21,"mat-form-field",11)(22,"mat-label"),e._uU(23,"Mot de passe"),e.qZA(),e._UZ(24,"input",14,15),e.TgZ(26,"button",16),e.NdJ("click",function(){e.CHM(a);const u=e.MAs(25);return u.type="password"===u.type?"text":"password"}),e.YNc(27,J,1,1,"mat-icon",17),e.YNc(28,F,1,1,"mat-icon",17),e.qZA(),e.TgZ(29,"mat-error"),e._uU(30," Le mot de passe est obligatoire "),e.qZA()(),e.TgZ(31,"div",18)(32,"mat-checkbox",19),e._uU(33," Se souvenir de moi "),e.qZA(),e.TgZ(34,"a",20),e._uU(35,"Mot de passe oubli\xe9? "),e.qZA()(),e.TgZ(36,"button",21),e.NdJ("click",function(){return r.signIn()}),e.YNc(37,N,2,0,"span",13),e.YNc(38,Q,1,2,"mat-progress-spinner",22),e.qZA()()()(),e.TgZ(39,"div",23),e.O4$(),e.TgZ(40,"svg",24)(41,"g",25),e._UZ(42,"circle",26)(43,"circle",27),e.qZA()(),e.TgZ(44,"svg",28)(45,"defs")(46,"pattern",29),e._UZ(47,"rect",30),e.qZA()(),e._UZ(48,"rect",31),e.qZA(),e.kcU(),e.TgZ(49,"div",32)(50,"div",33)(51,"div"),e._uU(52,"Bienvenue"),e.qZA(),e.TgZ(53,"div"),e._uU(54,"sur notre plateforme de gestion du cadastre immobilier"),e.qZA()(),e._UZ(55,"div",34),e.TgZ(56,"div",35)(57,"div",36),e._UZ(58,"img",37)(59,"img",38)(60,"img",39)(61,"img",40),e.qZA(),e.TgZ(62,"div",41),e._uU(63,"Plus de 17k disponible dans la cit\xe9 Firdaws "),e.qZA()()()()()}if(2&n){const a=e.MAs(25);e.xp6(10),e.Q6J("routerLink",e.DdM(16,M)),e.xp6(2),e.Q6J("ngIf",r.showAlert),e.xp6(1),e.Q6J("formGroup",r.signInForm),e.xp6(5),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",r.signInForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.signInForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===a.type),e.xp6(1),e.Q6J("ngIf","text"===a.type),e.xp6(4),e.Q6J("color","primary")("formControlName","rememberMe"),e.xp6(2),e.Q6J("routerLink",e.DdM(17,j)),e.xp6(2),e.Q6J("color","primary")("disabled",r.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",!r.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",r.signInForm.disabled)}},directives:[l.yS,w.O5,T.W,s._Y,s.JL,s.sg,m.KE,m.hX,h.Nt,s.Fj,s.JJ,s.u,m.TO,d.lW,m.R9,p.Hw,f.oG,v.Ou],encapsulation:2,data:{animation:y.L}}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.Bz.forChild(Y),d.ot,f.p9,m.lN,p.Ps,h.c,v.Cq,x.J,I.fC,Z.m]]}),t})()}}]);