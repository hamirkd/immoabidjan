"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[116],{4651:(g,h,n)=>{n.d(h,{y:()=>o});var t=n(5e3),c=n(5384);let o=(()=>{class u{constructor(s){this.apiService=s}getAll(){return this.apiService.get("api/utilisateur")}getAllForAdmin(){return this.apiService.get("api/utilisateur/find/all")}get(s){return this.apiService.get("api/utilisateur/"+s)}add(s){return this.apiService.post("api/utilisateur",s)}update(s){return this.apiService.put("api/utilisateur/"+s.id,s)}delete(s){return this.apiService.delete("api/utilisateur/"+s.id)}restore(s){return this.apiService.get("api/utilisateur/restore/"+s.id)}}return u.\u0275fac=function(s){return new(s||u)(t.LFG(c.s))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3451:(g,h,n)=>{n.d(h,{V:()=>t});class t{constructor(o){this.role="VISITEUR",this.id=(o=o||{}).id,this.email=o.email,this.password=o.password,this.last_name=o.last_name,this.first_name=o.first_name,this.telephone=o.telephone,this.role=o.role,this.avatar=o.avatar}}},9814:(g,h,n)=>{n.d(h,{Fk:()=>S});var t=n(5e3),c=n(508);n(3191),n(3075),n(6360),n(5664),n(449);let S=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[c.si,c.BQ],c.BQ]}),a})()}}]);