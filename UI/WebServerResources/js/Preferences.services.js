!function(){"use strict";function f(){var e,a,o=this;if(this.nextAlarm=null,this.nextInboxPoll=null,this.currentToast=f.$q.when(!0),this.lastUid=null,this.notifications={},this.defaults={},this.settings={Mail:{}},e=f.$document[0].getElementById("UserDefaults")){try{a=angular.fromJson(e.textContent||e.innerHTML)}catch(e){f.$log.error("Can't parse user's defaults: "+e.message),a={}}a.SOGoMailLabelsColorsKeys=[],a.SOGoMailLabelsColorsValues=[],_.forEach(a.SOGoMailLabelsColors,function(e,t){a.SOGoMailLabelsColorsKeys.push(t),a.SOGoMailLabelsColorsValues.push(e),"$"==t.charAt(0)&&(Object.defineProperty(a.SOGoMailLabelsColors,"_"+t,Object.getOwnPropertyDescriptor(a.SOGoMailLabelsColors,t)),delete a.SOGoMailLabelsColors[t])}),_.forEach(a.SOGoSieveFilters,function(e){_.forEach(e.actions,function(e){"addflag"==e.method&&"$"==e.argument.charAt(0)&&(e.argument="_"+e.argument)})}),a.SOGoRememberLastModule&&(a.SOGoLoginModule="Last"),a.SOGoMailAutoSave=parseInt(a.SOGoMailAutoSave)||0,a.SOGoMailComposeWindowEnabled=angular.isDefined(a.SOGoMailComposeWindow),a.SOGoMailComposeFontSizeEnabled=0<parseInt(a.SOGoMailComposeFontSize),window.CKEDITOR&&a.SOGoMailComposeFontSizeEnabled&&(window.CKEDITOR.config.fontSize_defaultLabel=a.SOGoMailComposeFontSize,window.CKEDITOR.addCss(".cke_editable { font-size: "+a.SOGoMailComposeFontSize+"px; }")),_.forEach(a.AuxiliaryMailAccounts,function(e){isNaN(parseInt(e.port))&&(e.port=null)}),a.Vacation?(a.Vacation.startDate?a.Vacation.startDate=new Date(1e3*parseInt(a.Vacation.startDate)):(a.Vacation.startDateEnabled=0,a.Vacation.startDate=new Date,a.Vacation.startDate=a.Vacation.startDate.beginOfDay(),a.Vacation.startDate.addDays(1)),a.Vacation.endDate?a.Vacation.endDate=new Date(1e3*parseInt(a.Vacation.endDate)):(a.Vacation.endDateEnabled=0,a.Vacation.endDate=new Date(a.Vacation.startDate.getTime()),a.Vacation.endDate.addDays(1)),a.Vacation.autoReplyEmailAddresses&&angular.isString(a.Vacation.autoReplyEmailAddresses)&&a.Vacation.autoReplyEmailAddresses.length&&(a.Vacation.autoReplyEmailAddresses=a.Vacation.autoReplyEmailAddresses.split(/, */))):a.Vacation={},(angular.isUndefined(a.Vacation.autoReplyEmailAddresses)||0==a.Vacation.autoReplyEmailAddresses.length)&&angular.isDefined(window.defaultEmailAddresses)&&(a.Vacation.autoReplyEmailAddresses=window.defaultEmailAddresses),angular.isUndefined(a.Vacation.daysBetweenResponse)&&(a.Vacation.daysBetweenResponse=7),angular.isUndefined(a.Vacation.startDate)&&(a.Vacation.startDateEnabled=0,a.Vacation.startDate=new Date),angular.isUndefined(a.Vacation.endDate)&&(a.Vacation.endDateEnabled=0,a.Vacation.endDate=new Date),a.Forward&&(angular.isString(a.Forward.forwardAddress)?a.Forward.forwardAddress=a.Forward.forwardAddress.split(/, */):angular.isArray(a.Forward.forwardAddress)||(a.Forward.forwardAddress=[])),angular.isUndefined(a.SOGoCalendarCategories)&&(a.SOGoCalendarCategories=[]),a.SOGoCalendarCategoriesColorsValues=[],_.forEach(a.SOGoCalendarCategories,function(e){a.SOGoCalendarCategoriesColorsValues.push(a.SOGoCalendarCategoriesColors[e])}),angular.isUndefined(a.SOGoContactsCategories)?a.SOGoContactsCategories=[]:a.SOGoContactsCategories=_.compact(a.SOGoContactsCategories),angular.extend(o.defaults,a),o.$mdDateLocaleProvider=f.$mdDateLocaleProvider,angular.extend(o.$mdDateLocaleProvider,a.locale),angular.extend(o.$mdDateLocaleProvider,{firstDayOfWeek:a.SOGoFirstDayOfWeek,firstWeekOfYear:a.SOGoFirstWeekOfYear}),o.$mdDateLocaleProvider.firstDayOfWeek=parseInt(a.SOGoFirstDayOfWeek),o.$mdDateLocaleProvider.weekNumberFormatter=function(e){return l("Week %d",e)},o.$mdDateLocaleProvider.msgCalendar=l("Calendar"),o.$mdDateLocaleProvider.msgOpenCalendar=l("Open Calendar"),o.$mdDateLocaleProvider.parseDate=function(e){return e?e.parseDate(o.$mdDateLocaleProvider,o.defaults.SOGoShortDateFormat):new Date(NaN)},o.$mdDateLocaleProvider.formatDate=function(e){return e?e.format(o.$mdDateLocaleProvider,e.$dateFormat||o.defaults.SOGoShortDateFormat):""},o.$mdDateLocaleProvider.parseTime=function(e){return e?e.parseDate(o.$mdDateLocaleProvider,o.defaults.SOGoTimeFormat):new Date(NaN)},o.$mdDateLocaleProvider.formatTime=function(e){return e?e.format(o.$mdDateLocaleProvider,o.defaults.SOGoTimeFormat):""},o.$mdDateLocaleProvider.isDateComplete=function(e){e=e.trim();return/^((([a-zA-Z]|[^\x00-\x7F]){2,}|[0-9]{1,4})([ .,]+|[/-])){2}(([a-zA-Z]|[^\x00-\x7F]){3,}|[0-9]{1,4})$/.test(e)}}if(e=f.$document[0].getElementById("UserSettings")){try{a=angular.fromJson(e.textContent||e.innerHTML)}catch(e){f.$log.error("Can't parse user's settings: "+e.message),a={}}a.Calendar&&(a.Calendar.PreventInvitationsWhitelist?a.Calendar.PreventInvitationsWhitelist=_.map(a.Calendar.PreventInvitationsWhitelist,function(e,t){e=/^(.+)\s<(\S+)>$/.exec(e),e=new f.$User({uid:t,cn:e[1],c_email:e[2]});return e.$$image||(e.$$image=o.avatar(e.c_email,32,{no_404:!0})),e}):a.Calendar.PreventInvitationsWhitelist=[]),angular.extend(o.settings,a)}}f.$factory=["$window","$document","$q","$timeout","$log","$state","$mdDateLocale","$mdToast","sgSettings","Gravatar","Resource","User",function(e,t,a,o,n,i,r,s,l,d,c,u){return angular.extend(f,{$window:e,$document:t,$q:a,$timeout:o,$log:n,$state:i,$mdDateLocaleProvider:r,$toast:s,$gravatar:d,$$resource:new c(l.activeUser("folderURL"),l.activeUser()),$resourcesURL:l.resourcesURL(),$User:u}),new f}];try{angular.module("SOGo.PreferencesUI")}catch(e){angular.module("SOGo.PreferencesUI",["SOGo.Common"])}angular.module("SOGo.PreferencesUI").factory("Preferences",f.$factory),f.prototype.ready=function(){return f.$log.warn("Preferences.ready is deprecated -- access settings/defaults directly."),f.$q.when(!0)},f.prototype.avatar=function(e,t,a){var o=this.defaults.SOGoAlternateAvatar,o=this.defaults.SOGoGravatarEnabled?f.$gravatar(e,t,o,a):[f.$resourcesURL,"img","ic_person_grey_24px.svg"].join("/");return a&&a.dstObject&&a.dstAttr&&(a.dstObject[a.dstAttr]=o),o},f.prototype.hasActiveExternalSieveScripts=function(e){var t=this;if(void 0!==e)this.defaults.hasActiveExternalSieveScripts=e;else{if(void 0!==this.defaults.hasActiveExternalSieveScripts)return this.defaults.hasActiveExternalSieveScripts;this.defaults.hasActiveExternalSieveScripts=!1,f.$$resource.quietFetch("activeExternalSieveScripts").then(function(){t.defaults.hasActiveExternalSieveScripts=!0},function(e){if(t.defaults.hasActiveExternalSieveScripts=!1,404===e.status)return f.$q.resolve(!0)})}},f.prototype.supportsNotifications=function(){return"undefined"!=typeof Notification||(f.$log.warn("Notifications are not available for your browser."),!1)},f.prototype.authorizeNotifications=function(){this.supportsNotifications()&&Notification.requestPermission(function(e){return e})},f.prototype.createNotification=function(e,t,a){var o=this,n=_.pick(a,["body","icon"]);this.supportsNotifications()&&(n.tag=e,n.lang="",n.dir="auto",this.notifications[e]=new Notification(t,n),this.notifications[e].onclick=function(){a.onClick(),o.notifications[e].close()})},f.prototype.viewInboxMessage=function(e){f.$state.get("mail.account")?f.$state.go("mail.account.mailbox.message",{accountId:0,mailboxId:"INBOX",messageId:e}):f.$window.location=f.$$resource.path("Mail","view#!/Mail/0/INBOX/"+e)},f.prototype.pollInbox=function(){var e,c=this;function u(e,t,a,o){e.title=a,e.body=o,e.close=function(){t.hide("ok")}}e={sortingAttributes:{sort:"arrival",asc:0,noHeaders:0,dry:1},filters:[{searchBy:"flags",searchInput:"unseen"}]},this.nextInboxPoll&&f.$timeout.cancel(this.nextInboxPoll),f.$$resource.post("Mail","0/folderINBOX/view",e).then(function(i){var e=i.uids,r=i.headers[0].indexOf("uid"),s=i.headers[0].indexOf("From"),d=i.headers[0].indexOf("Subject");i.threaded&&(i.uids.splice(0,1),e=_.map(i.uids,0)),c.lastUid?(_.find(e,function(t,e){var a,o,n;return!(t>c.lastUid)||(f.$log.debug("Show notification for message "+t),a=_.find(i.headers,function(e){return e[r]==t}),c.defaults.SOGoDesktopNotifications?(o="mail-inbox-"+t,f.$state.href("mail.account.mailbox.message",{accountId:0,mailboxId:"INBOX",messageId:t}),c.createNotification(o,a[d],{body:a[s][0].name||a[s][0].email,icon:"/SOGo.woa/WebServerResources/img/email-256px.png",onClick:function(){c.viewInboxMessage(t)}})):(n={locals:{title:a[d],body:a[s][0].name||a[s][0].email},template:['<md-toast role="alert">','  <div class="md-toast-content">','    <div layout="row" layout-align="start center" flex>','      <md-icon class="md-primary md-hue-1">email</md-icon>','      <div class="sg-padded--left">','        <span md-truncate ng-bind="title"></span>','        <div class="sg-hint" md-truncate ng-bind="body"></div>',"      </div>","      <div flex></div>",'      <md-button ng-click="close()">',l("View"),"      </md-button>","    </div>","  </div>","</md-toast>"].join(""),position:"top right",hideDelay:5e3,controller:u},c.currentToast=c.currentToast.then(function(){return f.$toast.show(n).then(function(e){"ok"===e&&c.viewInboxMessage(t)})})),!1)}),e[0]>c.lastUid&&(c.lastUid=e[0])):c.lastUid=e[0]}).finally(function(){var e=c.defaults.SOGoRefreshViewCheck;e&&"manually"!=e&&(c.nextInboxPoll=f.$timeout(angular.bind(c,c.pollInbox),1e3*e.timeInterval()))}),u.$inject=["scope","$mdToast","title","body"]},f.prototype.getAlarms=function(){var n=this,e=new Date,e=Math.floor(e.getTime()/1e3);f.$$resource.fetch("Calendar","alarmslist?browserTime="+e).then(function(e){var t,a,o=e.alarms.sort(function(e,t){e=parseInt(e[2]);return parseInt(t[2])-e});0<o.length&&(a=o.pop(),t=new Date,e=Math.floor(t.getTime()/1e3),o=a[0]+"/"+a[1],0<(a=t=parseInt(a[2]))&&(a-=e),new Date(1e3*t),o=angular.bind(n,n.showAlarm,o),n.nextAlarm&&f.$timeout.cancel(n.nextAlarm),n.nextAlarm=f.$timeout(o,1e3*a))})},f.prototype.showAlarm=function(i){var r=this;f.$$resource.fetch("Calendar/"+i,"?resetAlarm=yes").then(function(a){var e=(new Date).beginOfDay(),t=a.startDate.split(/T/)[0].asDate(),o=[];function n(e,t){e.summary=a.summary,e.reminder="10",e.close=function(){f.$toast.hide()},e.snooze=function(){f.$$resource.fetch("Calendar/"+t,"view?snoozeAlarm="+e.reminder),f.$toast.hide()}}t.getTime()==e.getTime()&&a.localizedStartDate==a.localizedEndDate||o.push(a.localizedStartDate),a.isAllDay||(o.push(a.localizedStartTime),o.push("-")),a.localizedStartDate!=a.localizedEndDate&&o.push(a.localizedEndDate),a.isAllDay||o.push(a.localizedEndTime),r.defaults.SOGoDesktopNotifications&&(e="calendar-"+a.id,r.createNotification(e,a.summary,{body:o.join(" "),icon:"/SOGo.woa/WebServerResources/img/event-256px.png",onClick:function(){f.$state.get("calendars.view")?f.$state.go("calendars.view",{view:"day",day:t.getDayString()}):f.$window.location=f.$$resource.path("Calendar","view#!/calendar/day/"+t.getDayString())}})),r.currentToast=r.currentToast.then(function(){return f.$toast.show({position:"top right",hideDelay:0,template:["<md-toast>",'  <div class="md-toast-content">','    <div layout="column" layout="start end">','      <p class="sg-padded--top">{{ summary }}</p>','      <div layout="row" layout-align="start center">',"        <md-input-container>",'          <label style="color: white">{{ "Snooze for " | loc }}</label>','          <md-select ng-model="reminder">','           <md-option value="5">',l("5 minutes"),"           </md-option>",'           <md-option value="10">',l("10 minutes"),"           </md-option>",'           <md-option value="15">',l("15 minutes"),"           </md-option>",'           <md-option value="30">',l("30 minutes"),"           </md-option>",'           <md-option value="45">',l("45 minutes"),"           </md-option>",'           <md-option value="60">',l("1 hour"),"           </md-option>",'           <md-option value="1440">',l("1 day"),"           </md-option>","         </md-select>","        </md-input-container>",'        <md-button ng-click="snooze()">',l("Snooze"),"        </md-button>",'        <md-button ng-click="close()">',l("Close"),"        </md-button>","      </div>","    </div>","  </div>","</md-toast>"].join(""),locals:{url:i},controller:n})}),n.$inject=["scope","url"]})},f.prototype.$save=function(){return f.$$resource.save("Preferences",this.$omit(!0)).then(function(e){return e})},f.prototype.$omit=function(a){var o={},t={};return angular.forEach(this,function(e,t){"constructor"!=t&&"$"!=t[0]&&(o[t]=a?angular.copy(e):e)}),o.defaults.SOGoMailLabelsColors={},_.forEach(o.defaults.SOGoMailLabelsColorsKeys,function(e,t){o.defaults.SOGoMailLabelsColors[e]=o.defaults.SOGoMailLabelsColorsValues[t]}),delete o.defaults.SOGoMailLabelsColorsKeys,delete o.defaults.SOGoMailLabelsColorsValues,_.forEach(o.defaults.SOGoSieveFilters,function(e){_.forEach(e.actions,function(e){"addflag"==e.method&&"_"==e.argument.charAt(0)&&"$"==e.argument.charAt(1)&&(e.argument=e.argument.substring(1))})}),_.forEach(o.defaults.AuxiliaryMailAccounts,function(e){var t=[];_.forEach(e.identities,function(e){e.isReadOnly||t.push(_.pick(e,["email","fullName","replyTo","signature","isDefault"]))}),e.identities=t}),o.defaults.SOGoMailComposeWindowEnabled||delete o.defaults.SOGoMailComposeWindow,delete o.defaults.SOGoMailComposeWindowEnabled,o.defaults.SOGoMailComposeFontSizeEnabled||(o.defaults.SOGoMailComposeFontSize=0),delete o.defaults.SOGoMailComposeFontSizeEnabled,o.defaults.Vacation&&(o.defaults.Vacation.startDateEnabled?o.defaults.Vacation.startDate=o.defaults.Vacation.startDate.getTime()/1e3:(delete o.defaults.Vacation.startDateEnabled,o.defaults.Vacation.startDate=0),o.defaults.Vacation.endDateEnabled?o.defaults.Vacation.endDate=o.defaults.Vacation.endDate.getTime()/1e3:(delete o.defaults.Vacation.endDateEnabled,o.defaults.Vacation.endDate=0),o.defaults.Vacation.autoReplyEmailAddresses?o.defaults.Vacation.autoReplyEmailAddresses=_.compact(o.defaults.Vacation.autoReplyEmailAddresses):o.defaults.Vacation.autoReplyEmailAddresses=[]),o.defaults.Forward&&o.defaults.Forward.forwardAddress&&(o.defaults.Forward.forwardAddress=_.compact(o.defaults.Forward.forwardAddress)),o.defaults.SOGoCalendarCategoriesColors={},_.forEach(o.defaults.SOGoCalendarCategories,function(e,t){o.defaults.SOGoCalendarCategoriesColors[e]=o.defaults.SOGoCalendarCategoriesColorsValues[t]}),delete o.defaults.SOGoCalendarCategoriesColorsValues,o.settings.Calendar&&o.settings.Calendar.PreventInvitationsWhitelist&&(_.forEach(o.settings.Calendar.PreventInvitationsWhitelist,function(e){t[e.uid]=e.$shortFormat()}),o.settings.Calendar.PreventInvitationsWhitelist=t),o}}();
//# sourceMappingURL=Preferences.services.js.map