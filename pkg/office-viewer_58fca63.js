;/*!node_modules/office-viewer/lib/node_modules/tslib/tslib.es6.js*/
amis.define("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6",(function(t,e,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)};e.__assign=function(){return e.__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.__assign.apply(this,arguments)},e.__awaiter=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(t){i(t)}}function l(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}u((r=r.apply(t,e||[])).next())}))},e.__extends=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},e.__generator=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=e.call(t,a)}catch(t){l=[6,t],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},e.__read=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},e.__spreadArray=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},e.__values=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}}));
;/*!node_modules/office-viewer/lib/parse/parseRelationship.js*/
amis.define("node_modules/office-viewer/lib/parse/parseRelationship",(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6");function n(e,t){return{id:e.getAttribute("Id")||"",type:e.getAttribute("Type")||"",target:e.getAttribute("Target")||"",targetMode:e.getAttribute("TargetMode")||"",part:t}}t.parseRelationship=n,t.parseRelationships=function(e,t){var r,i,o={},l=e.getElementsByTagName("Relationship");try{for(var s=a.__values(l),u=s.next();!u.done;u=s.next()){var d=n(u.value,t);o[d.id]=d}}catch(e){r={error:e}}finally{try{u&&!u.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}return o}}));
;/*!node_modules/office-viewer/lib/openxml/ContentType.js*/
amis.define("node_modules/office-viewer/lib/openxml/ContentType",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseContentType=function(e){var t={overrides:[]};return e.querySelectorAll("Override").forEach((function(e){t.overrides.push({partName:e.getAttribute("PartName"),contentType:e.getAttribute("ContentType")})})),t}}));
;/*!node_modules/office-viewer/lib/OpenXML.js*/
amis.define("node_modules/office-viewer/lib/OpenXML",(function(e,t,n,r){"use strict";function o(e){return e.getAttribute("w:val")||""}function u(e,t){if(void 0===t&&(t=!1),"boolean"==typeof e)return e;if("string"==typeof e){switch(e){case"1":case"on":case"true":return!0;case"0":case"off":case"false":return!1}if("number"==typeof e)return 0!==e}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttrBoolean=function(e,t,n){return void 0===n&&(n=!0),u(e.getAttribute(t),n)},t.getVal=o,t.getValBoolean=function(e,t){return void 0===t&&(t=!0),u(o(e),t)},t.getValHex=function(e){return parseInt(o(e)||"0",16)},t.getValNumber=function(e){return parseInt(o(e),10)},t.normalizeBoolean=u}));
;/*!node_modules/office-viewer/lib/openxml/Types.js*/
amis.define("node_modules/office-viewer/lib/openxml/Types",(function(e,a,t,i){"use strict";var o,r,n,s,l,c,d,T,p,h,u,g,S,m,_,b,v,y,k,f,C,w,D,P,x,L,B,F,M,A,H,E,R,W,G,O,N,V,j,q,z,J,Z,I,K,U,X,Y,Q,$,ee,ae,te,ie,oe,re,ne,se,le,ce,de,Te,pe,he,ue,ge,Se,me,_e,be,ve,ye,ke,fe,Ce,we,De,Pe,xe,Le,Be,Fe,Me,Ae,He,Ee,Re,We;Object.defineProperty(a,"__esModule",{value:!0}),a.ST_CalendarType=void 0,(o=a.ST_CalendarType||(a.ST_CalendarType={})).gregorian="gregorian",o.gregorianUs="gregorianUs",o.gregorianMeFrench="gregorianMeFrench",o.gregorianArabic="gregorianArabic",o.hijri="hijri",o.hebrew="hebrew",o.taiwan="taiwan",o.japan="japan",o.thai="thai",o.korea="korea",o.saka="saka",o.gregorianXlitEnglish="gregorianXlitEnglish",o.gregorianXlitFrench="gregorianXlitFrench",o.none="none",a.ST_VerticalAlignRun=void 0,(r=a.ST_VerticalAlignRun||(a.ST_VerticalAlignRun={})).baseline="baseline",r.superscript="superscript",r.subscript="subscript",a.ST_XAlign=void 0,(n=a.ST_XAlign||(a.ST_XAlign={})).left="left",n.center="center",n.right="right",n.inside="inside",n.outside="outside",a.ST_YAlign=void 0,(s=a.ST_YAlign||(a.ST_YAlign={})).inline="inline",s.top="top",s.center="center",s.bottom="bottom",s.inside="inside",s.outside="outside",a.ST_ConformanceClass=void 0,(l=a.ST_ConformanceClass||(a.ST_ConformanceClass={})).strict="strict",l.transitional="transitional",a.ST_HighlightColor=void 0,(c=a.ST_HighlightColor||(a.ST_HighlightColor={})).black="black",c.blue="blue",c.cyan="cyan",c.green="green",c.magenta="magenta",c.red="red",c.yellow="yellow",c.white="white",c.darkBlue="darkBlue",c.darkCyan="darkCyan",c.darkGreen="darkGreen",c.darkMagenta="darkMagenta",c.darkRed="darkRed",c.darkYellow="darkYellow",c.darkGray="darkGray",c.lightGray="lightGray",c.none="none",a.ST_HexColorAuto=void 0,(a.ST_HexColorAuto||(a.ST_HexColorAuto={})).auto="auto",a.ST_Underline=void 0,(d=a.ST_Underline||(a.ST_Underline={})).single="single",d.words="words",d.double="double",d.thick="thick",d.dotted="dotted",d.dottedHeavy="dottedHeavy",d.dash="dash",d.dashedHeavy="dashedHeavy",d.dashLong="dashLong",d.dashLongHeavy="dashLongHeavy",d.dotDash="dotDash",d.dashDotHeavy="dashDotHeavy",d.dotDotDash="dotDotDash",d.dashDotDotHeavy="dashDotDotHeavy",d.wave="wave",d.wavyHeavy="wavyHeavy",d.wavyDouble="wavyDouble",d.none="none",a.ST_TextEffect=void 0,(T=a.ST_TextEffect||(a.ST_TextEffect={})).blinkBackground="blinkBackground",T.lights="lights",T.antsBlack="antsBlack",T.antsRed="antsRed",T.shimmer="shimmer",T.sparkle="sparkle",T.none="none",a.ST_Border=void 0,(p=a.ST_Border||(a.ST_Border={})).nil="nil",p.none="none",p.single="single",p.thick="thick",p.double="double",p.dotted="dotted",p.dashed="dashed",p.dotDash="dotDash",p.dotDotDash="dotDotDash",p.triple="triple",p.thinThickSmallGap="thinThickSmallGap",p.thickThinSmallGap="thickThinSmallGap",p.thinThickThinSmallGap="thinThickThinSmallGap",p.thinThickMediumGap="thinThickMediumGap",p.thickThinMediumGap="thickThinMediumGap",p.thinThickThinMediumGap="thinThickThinMediumGap",p.thinThickLargeGap="thinThickLargeGap",p.thickThinLargeGap="thickThinLargeGap",p.thinThickThinLargeGap="thinThickThinLargeGap",p.wave="wave",p.doubleWave="doubleWave",p.dashSmallGap="dashSmallGap",p.dashDotStroked="dashDotStroked",p.threeDEmboss="threeDEmboss",p.threeDEngrave="threeDEngrave",p.outset="outset",p.inset="inset",p.apples="apples",p.archedScallops="archedScallops",p.babyPacifier="babyPacifier",p.babyRattle="babyRattle",p.balloons3Colors="balloons3Colors",p.balloonsHotAir="balloonsHotAir",p.basicBlackDashes="basicBlackDashes",p.basicBlackDots="basicBlackDots",p.basicBlackSquares="basicBlackSquares",p.basicThinLines="basicThinLines",p.basicWhiteDashes="basicWhiteDashes",p.basicWhiteDots="basicWhiteDots",p.basicWhiteSquares="basicWhiteSquares",p.basicWideInline="basicWideInline",p.basicWideMidline="basicWideMidline",p.basicWideOutline="basicWideOutline",p.bats="bats",p.birds="birds",p.birdsFlight="birdsFlight",p.cabins="cabins",p.cakeSlice="cakeSlice",p.candyCorn="candyCorn",p.celticKnotwork="celticKnotwork",p.certificateBanner="certificateBanner",p.chainLink="chainLink",p.champagneBottle="champagneBottle",p.checkedBarBlack="checkedBarBlack",p.checkedBarColor="checkedBarColor",p.checkered="checkered",p.christmasTree="christmasTree",p.circlesLines="circlesLines",p.circlesRectangles="circlesRectangles",p.classicalWave="classicalWave",p.clocks="clocks",p.compass="compass",p.confetti="confetti",p.confettiGrays="confettiGrays",p.confettiOutline="confettiOutline",p.confettiStreamers="confettiStreamers",p.confettiWhite="confettiWhite",p.cornerTriangles="cornerTriangles",p.couponCutoutDashes="couponCutoutDashes",p.couponCutoutDots="couponCutoutDots",p.crazyMaze="crazyMaze",p.creaturesButterfly="creaturesButterfly",p.creaturesFish="creaturesFish",p.creaturesInsects="creaturesInsects",p.creaturesLadyBug="creaturesLadyBug",p.crossStitch="crossStitch",p.cup="cup",p.decoArch="decoArch",p.decoArchColor="decoArchColor",p.decoBlocks="decoBlocks",p.diamondsGray="diamondsGray",p.doubleD="doubleD",p.doubleDiamonds="doubleDiamonds",p.earth1="earth1",p.earth2="earth2",p.earth3="earth3",p.eclipsingSquares1="eclipsingSquares1",p.eclipsingSquares2="eclipsingSquares2",p.eggsBlack="eggsBlack",p.fans="fans",p.film="film",p.firecrackers="firecrackers",p.flowersBlockPrint="flowersBlockPrint",p.flowersDaisies="flowersDaisies",p.flowersModern1="flowersModern1",p.flowersModern2="flowersModern2",p.flowersPansy="flowersPansy",p.flowersRedRose="flowersRedRose",p.flowersRoses="flowersRoses",p.flowersTeacup="flowersTeacup",p.flowersTiny="flowersTiny",p.gems="gems",p.gingerbreadMan="gingerbreadMan",p.gradient="gradient",p.handmade1="handmade1",p.handmade2="handmade2",p.heartBalloon="heartBalloon",p.heartGray="heartGray",p.hearts="hearts",p.heebieJeebies="heebieJeebies",p.holly="holly",p.houseFunky="houseFunky",p.hypnotic="hypnotic",p.iceCreamCones="iceCreamCones",p.lightBulb="lightBulb",p.lightning1="lightning1",p.lightning2="lightning2",p.mapPins="mapPins",p.mapleLeaf="mapleLeaf",p.mapleMuffins="mapleMuffins",p.marquee="marquee",p.marqueeToothed="marqueeToothed",p.moons="moons",p.mosaic="mosaic",p.musicNotes="musicNotes",p.northwest="northwest",p.ovals="ovals",p.packages="packages",p.palmsBlack="palmsBlack",p.palmsColor="palmsColor",p.paperClips="paperClips",p.papyrus="papyrus",p.partyFavor="partyFavor",p.partyGlass="partyGlass",p.pencils="pencils",p.people="people",p.peopleWaving="peopleWaving",p.peopleHats="peopleHats",p.poinsettias="poinsettias",p.postageStamp="postageStamp",p.pumpkin1="pumpkin1",p.pushPinNote2="pushPinNote2",p.pushPinNote1="pushPinNote1",p.pyramids="pyramids",p.pyramidsAbove="pyramidsAbove",p.quadrants="quadrants",p.rings="rings",p.safari="safari",p.sawtooth="sawtooth",p.sawtoothGray="sawtoothGray",p.scaredCat="scaredCat",p.seattle="seattle",p.shadowedSquares="shadowedSquares",p.sharksTeeth="sharksTeeth",p.shorebirdTracks="shorebirdTracks",p.skyrocket="skyrocket",p.snowflakeFancy="snowflakeFancy",p.snowflakes="snowflakes",p.sombrero="sombrero",p.southwest="southwest",p.stars="stars",p.starsTop="starsTop",p.stars3d="stars3d",p.starsBlack="starsBlack",p.starsShadowed="starsShadowed",p.sun="sun",p.swirligig="swirligig",p.tornPaper="tornPaper",p.tornPaperBlack="tornPaperBlack",p.trees="trees",p.triangleParty="triangleParty",p.triangles="triangles",p.triangle1="triangle1",p.triangle2="triangle2",p.triangleCircle1="triangleCircle1",p.triangleCircle2="triangleCircle2",p.shapes1="shapes1",p.shapes2="shapes2",p.twistedLines1="twistedLines1",p.twistedLines2="twistedLines2",p.vine="vine",p.waveline="waveline",p.weavingAngles="weavingAngles",p.weavingBraid="weavingBraid",p.weavingRibbon="weavingRibbon",p.weavingStrips="weavingStrips",p.whiteFlowers="whiteFlowers",p.woodwork="woodwork",p.xIllusions="xIllusions",p.zanyTriangles="zanyTriangles",p.zigZag="zigZag",p.zigZagStitch="zigZagStitch",p.custom="custom",a.ST_Shd=void 0,(h=a.ST_Shd||(a.ST_Shd={})).nil="nil",h.clear="clear",h.solid="solid",h.horzStripe="horzStripe",h.vertStripe="vertStripe",h.reverseDiagStripe="reverseDiagStripe",h.diagStripe="diagStripe",h.horzCross="horzCross",h.diagCross="diagCross",h.thinHorzStripe="thinHorzStripe",h.thinVertStripe="thinVertStripe",h.thinReverseDiagStripe="thinReverseDiagStripe",h.thinDiagStripe="thinDiagStripe",h.thinHorzCross="thinHorzCross",h.thinDiagCross="thinDiagCross",h.pct5="pct5",h.pct10="pct10",h.pct12="pct12",h.pct15="pct15",h.pct20="pct20",h.pct25="pct25",h.pct30="pct30",h.pct35="pct35",h.pct37="pct37",h.pct40="pct40",h.pct45="pct45",h.pct50="pct50",h.pct55="pct55",h.pct60="pct60",h.pct62="pct62",h.pct65="pct65",h.pct70="pct70",h.pct75="pct75",h.pct80="pct80",h.pct85="pct85",h.pct87="pct87",h.pct90="pct90",h.pct95="pct95",a.ST_Em=void 0,(u=a.ST_Em||(a.ST_Em={})).none="none",u.dot="dot",u.comma="comma",u.circle="circle",u.underDot="underDot",a.ST_CombineBrackets=void 0,(g=a.ST_CombineBrackets||(a.ST_CombineBrackets={})).none="none",g.round="round",g.square="square",g.angle="angle",g.curly="curly",a.ST_HeightRule=void 0,(S=a.ST_HeightRule||(a.ST_HeightRule={})).auto="auto",S.exact="exact",S.atLeast="atLeast",a.ST_Wrap=void 0,(m=a.ST_Wrap||(a.ST_Wrap={})).auto="auto",m.notBeside="notBeside",m.around="around",m.tight="tight",m.through="through",m.none="none",a.ST_VAnchor=void 0,(_=a.ST_VAnchor||(a.ST_VAnchor={})).text="text",_.margin="margin",_.page="page",a.ST_HAnchor=void 0,(b=a.ST_HAnchor||(a.ST_HAnchor={})).text="text",b.margin="margin",b.page="page",a.ST_DropCap=void 0,(v=a.ST_DropCap||(a.ST_DropCap={})).none="none",v.drop="drop",v.margin="margin",a.ST_TabJc=void 0,(y=a.ST_TabJc||(a.ST_TabJc={})).clear="clear",y.start="start",y.center="center",y.end="end",y.decimal="decimal",y.bar="bar",y.num="num",a.ST_TabTlc=void 0,(k=a.ST_TabTlc||(a.ST_TabTlc={})).none="none",k.dot="dot",k.hyphen="hyphen",k.underscore="underscore",k.heavy="heavy",k.middleDot="middleDot",a.ST_LineSpacingRule=void 0,(f=a.ST_LineSpacingRule||(a.ST_LineSpacingRule={})).auto="auto",f.exact="exact",f.atLeast="atLeast",a.ST_Jc=void 0,(C=a.ST_Jc||(a.ST_Jc={})).start="start",C.center="center",C.end="end",C.both="both",C.mediumKashida="mediumKashida",C.distribute="distribute",C.numTab="numTab",C.highKashida="highKashida",C.lowKashida="lowKashida",C.thaiDistribute="thaiDistribute",a.ST_JcTable=void 0,(w=a.ST_JcTable||(a.ST_JcTable={})).center="center",w.end="end",w.start="start",a.ST_View=void 0,(D=a.ST_View||(a.ST_View={})).none="none",D.print="print",D.outline="outline",D.masterPages="masterPages",D.normal="normal",D.web="web",a.ST_Zoom=void 0,(P=a.ST_Zoom||(a.ST_Zoom={})).none="none",P.fullPage="fullPage",P.bestFit="bestFit",P.textFit="textFit",a.ST_Proof=void 0,(x=a.ST_Proof||(a.ST_Proof={})).clean="clean",x.dirty="dirty",a.ST_DocProtect=void 0,(L=a.ST_DocProtect||(a.ST_DocProtect={})).none="none",L.readOnly="readOnly",L.comments="comments",L.trackedChanges="trackedChanges",L.forms="forms",a.ST_MailMergeDocType=void 0,(B=a.ST_MailMergeDocType||(a.ST_MailMergeDocType={})).catalog="catalog",B.envelopes="envelopes",B.mailingLabels="mailingLabels",B.formLetters="formLetters",B.email="email",B.fax="fax",a.ST_MailMergeDest=void 0,(F=a.ST_MailMergeDest||(a.ST_MailMergeDest={})).newDocument="newDocument",F.printer="printer",F.email="email",F.fax="fax",a.ST_MailMergeOdsoFMDFieldType=void 0,(M=a.ST_MailMergeOdsoFMDFieldType||(a.ST_MailMergeOdsoFMDFieldType={})).null="null",M.dbColumn="dbColumn",a.ST_TextDirection=void 0,(A=a.ST_TextDirection||(a.ST_TextDirection={})).tb="tb",A.rl="rl",A.lr="lr",A.tbV="tbV",A.rlV="rlV",A.lrV="lrV",a.ST_TextAlignment=void 0,(H=a.ST_TextAlignment||(a.ST_TextAlignment={})).top="top",H.center="center",H.baseline="baseline",H.bottom="bottom",H.auto="auto",a.ST_DisplacedByCustomXml=void 0,(E=a.ST_DisplacedByCustomXml||(a.ST_DisplacedByCustomXml={})).next="next",E.prev="prev",a.ST_AnnotationVMerge=void 0,(R=a.ST_AnnotationVMerge||(a.ST_AnnotationVMerge={})).cont="cont",R.rest="rest",a.ST_TextboxTightWrap=void 0,(W=a.ST_TextboxTightWrap||(a.ST_TextboxTightWrap={})).none="none",W.allLines="allLines",W.firstAndLastLine="firstAndLastLine",W.firstLineOnly="firstLineOnly",W.lastLineOnly="lastLineOnly",a.ST_ObjectDrawAspect=void 0,(G=a.ST_ObjectDrawAspect||(a.ST_ObjectDrawAspect={})).content="content",G.icon="icon",a.ST_ObjectUpdateMode=void 0,(O=a.ST_ObjectUpdateMode||(a.ST_ObjectUpdateMode={})).always="always",O.onCall="onCall",a.ST_FldCharType=void 0,(N=a.ST_FldCharType||(a.ST_FldCharType={})).begin="begin",N.separate="separate",N.end="end",a.ST_InfoTextType=void 0,(V=a.ST_InfoTextType||(a.ST_InfoTextType={})).text="text",V.autoText="autoText",a.ST_FFTextType=void 0,(j=a.ST_FFTextType||(a.ST_FFTextType={})).regular="regular",j.number="number",j.date="date",j.currentTime="currentTime",j.currentDate="currentDate",j.calculated="calculated",a.ST_SectionMark=void 0,(q=a.ST_SectionMark||(a.ST_SectionMark={})).nextPage="nextPage",q.nextColumn="nextColumn",q.continuous="continuous",q.evenPage="evenPage",q.oddPage="oddPage",a.ST_NumberFormat=void 0,(z=a.ST_NumberFormat||(a.ST_NumberFormat={})).decimal="decimal",z.upperRoman="upperRoman",z.lowerRoman="lowerRoman",z.upperLetter="upperLetter",z.lowerLetter="lowerLetter",z.ordinal="ordinal",z.cardinalText="cardinalText",z.ordinalText="ordinalText",z.hex="hex",z.chicago="chicago",z.ideographDigital="ideographDigital",z.japaneseCounting="japaneseCounting",z.aiueo="aiueo",z.iroha="iroha",z.decimalFullWidth="decimalFullWidth",z.decimalHalfWidth="decimalHalfWidth",z.japaneseLegal="japaneseLegal",z.japaneseDigitalTenThousand="japaneseDigitalTenThousand",z.decimalEnclosedCircle="decimalEnclosedCircle",z.decimalFullWidth2="decimalFullWidth2",z.aiueoFullWidth="aiueoFullWidth",z.irohaFullWidth="irohaFullWidth",z.decimalZero="decimalZero",z.bullet="bullet",z.ganada="ganada",z.chosung="chosung",z.decimalEnclosedFullstop="decimalEnclosedFullstop",z.decimalEnclosedParen="decimalEnclosedParen",z.decimalEnclosedCircleChinese="decimalEnclosedCircleChinese",z.ideographEnclosedCircle="ideographEnclosedCircle",z.ideographTraditional="ideographTraditional",z.ideographZodiac="ideographZodiac",z.ideographZodiacTraditional="ideographZodiacTraditional",z.taiwaneseCounting="taiwaneseCounting",z.ideographLegalTraditional="ideographLegalTraditional",z.taiwaneseCountingThousand="taiwaneseCountingThousand",z.taiwaneseDigital="taiwaneseDigital",z.chineseCounting="chineseCounting",z.chineseLegalSimplified="chineseLegalSimplified",z.chineseCountingThousand="chineseCountingThousand",z.koreanDigital="koreanDigital",z.koreanCounting="koreanCounting",z.koreanLegal="koreanLegal",z.koreanDigital2="koreanDigital2",z.vietnameseCounting="vietnameseCounting",z.russianLower="russianLower",z.russianUpper="russianUpper",z.none="none",z.numberInDash="numberInDash",z.hebrew1="hebrew1",z.hebrew2="hebrew2",z.arabicAlpha="arabicAlpha",z.arabicAbjad="arabicAbjad",z.hindiVowels="hindiVowels",z.hindiConsonants="hindiConsonants",z.hindiNumbers="hindiNumbers",z.hindiCounting="hindiCounting",z.thaiLetters="thaiLetters",z.thaiNumbers="thaiNumbers",z.thaiCounting="thaiCounting",z.bahtText="bahtText",z.dollarText="dollarText",z.custom="custom",a.ST_PageOrientation=void 0,(J=a.ST_PageOrientation||(a.ST_PageOrientation={})).portrait="portrait",J.landscape="landscape",a.ST_PageBorderZOrder=void 0,(Z=a.ST_PageBorderZOrder||(a.ST_PageBorderZOrder={})).front="front",Z.back="back",a.ST_PageBorderDisplay=void 0,(I=a.ST_PageBorderDisplay||(a.ST_PageBorderDisplay={})).allPages="allPages",I.firstPage="firstPage",I.notFirstPage="notFirstPage",a.ST_PageBorderOffset=void 0,(K=a.ST_PageBorderOffset||(a.ST_PageBorderOffset={})).page="page",K.text="text",a.ST_ChapterSep=void 0,(U=a.ST_ChapterSep||(a.ST_ChapterSep={})).hyphen="hyphen",U.period="period",U.colon="colon",U.emDash="emDash",U.enDash="enDash",a.ST_LineNumberRestart=void 0,(X=a.ST_LineNumberRestart||(a.ST_LineNumberRestart={})).newPage="newPage",X.newSection="newSection",X.continuous="continuous",a.ST_VerticalJc=void 0,(Y=a.ST_VerticalJc||(a.ST_VerticalJc={})).top="top",Y.center="center",Y.both="both",Y.bottom="bottom",a.ST_DocGrid=void 0,(Q=a.ST_DocGrid||(a.ST_DocGrid={})).default="default",Q.lines="lines",Q.linesAndChars="linesAndChars",Q.snapToChars="snapToChars",a.ST_HdrFtr=void 0,($=a.ST_HdrFtr||(a.ST_HdrFtr={})).even="even",$.default="default",$.first="first",a.ST_FtnEdn=void 0,(ee=a.ST_FtnEdn||(a.ST_FtnEdn={})).normal="normal",ee.separator="separator",ee.continuationSeparator="continuationSeparator",ee.continuationNotice="continuationNotice",a.ST_BrType=void 0,(ae=a.ST_BrType||(a.ST_BrType={})).page="page",ae.column="column",ae.textWrapping="textWrapping",a.ST_BrClear=void 0,(te=a.ST_BrClear||(a.ST_BrClear={})).none="none",te.left="left",te.right="right",te.all="all",a.ST_PTabAlignment=void 0,(ie=a.ST_PTabAlignment||(a.ST_PTabAlignment={})).left="left",ie.center="center",ie.right="right",a.ST_PTabRelativeTo=void 0,(oe=a.ST_PTabRelativeTo||(a.ST_PTabRelativeTo={})).margin="margin",oe.indent="indent",a.ST_PTabLeader=void 0,(re=a.ST_PTabLeader||(a.ST_PTabLeader={})).none="none",re.dot="dot",re.hyphen="hyphen",re.underscore="underscore",re.middleDot="middleDot",a.ST_ProofErr=void 0,(ne=a.ST_ProofErr||(a.ST_ProofErr={})).spellStart="spellStart",ne.spellEnd="spellEnd",ne.gramStart="gramStart",ne.gramEnd="gramEnd",a.ST_EdGrp=void 0,(se=a.ST_EdGrp||(a.ST_EdGrp={})).none="none",se.everyone="everyone",se.administrators="administrators",se.contributors="contributors",se.editors="editors",se.owners="owners",se.current="current",a.ST_Hint=void 0,(le=a.ST_Hint||(a.ST_Hint={})).default="default",le.eastAsia="eastAsia",a.ST_Theme=void 0,(ce=a.ST_Theme||(a.ST_Theme={})).majorEastAsia="majorEastAsia",ce.majorBidi="majorBidi",ce.majorAscii="majorAscii",ce.majorHAnsi="majorHAnsi",ce.minorEastAsia="minorEastAsia",ce.minorBidi="minorBidi",ce.minorAscii="minorAscii",ce.minorHAnsi="minorHAnsi",a.ST_RubyAlign=void 0,(de=a.ST_RubyAlign||(a.ST_RubyAlign={})).center="center",de.distributeLetter="distributeLetter",de.distributeSpace="distributeSpace",de.left="left",de.right="right",de.rightVertical="rightVertical",a.ST_Lock=void 0,(Te=a.ST_Lock||(a.ST_Lock={})).sdtLocked="sdtLocked",Te.contentLocked="contentLocked",Te.unlocked="unlocked",Te.sdtContentLocked="sdtContentLocked",a.ST_SdtDateMappingType=void 0,(pe=a.ST_SdtDateMappingType||(a.ST_SdtDateMappingType={})).text="text",pe.date="date",pe.dateTime="dateTime",a.ST_Direction=void 0,(he=a.ST_Direction||(a.ST_Direction={})).ltr="ltr",he.rtl="rtl",a.ST_TblWidth=void 0,(ue=a.ST_TblWidth||(a.ST_TblWidth={})).nil="nil",ue.pct="pct",ue.dxa="dxa",ue.auto="auto",a.ST_Merge=void 0,(ge=a.ST_Merge||(a.ST_Merge={})).continue="continue",ge.restart="restart",a.ST_TblLayoutType=void 0,(Se=a.ST_TblLayoutType||(a.ST_TblLayoutType={})).fixed="fixed",Se.autofit="autofit",a.ST_TblOverlap=void 0,(me=a.ST_TblOverlap||(a.ST_TblOverlap={})).never="never",me.overlap="overlap",a.ST_FtnPos=void 0,(_e=a.ST_FtnPos||(a.ST_FtnPos={})).pageBottom="pageBottom",_e.beneathText="beneathText",_e.sectEnd="sectEnd",_e.docEnd="docEnd",a.ST_EdnPos=void 0,(be=a.ST_EdnPos||(a.ST_EdnPos={})).sectEnd="sectEnd",be.docEnd="docEnd",a.ST_RestartNumber=void 0,(ve=a.ST_RestartNumber||(a.ST_RestartNumber={})).continuous="continuous",ve.eachSect="eachSect",ve.eachPage="eachPage",a.ST_MailMergeSourceType=void 0,(ye=a.ST_MailMergeSourceType||(a.ST_MailMergeSourceType={})).database="database",ye.addressBook="addressBook",ye.document1="document1",ye.document2="document2",ye.text="text",ye.email="email",ye.native="native",ye.legacy="legacy",ye.master="master",a.ST_CharacterSpacing=void 0,(ke=a.ST_CharacterSpacing||(a.ST_CharacterSpacing={})).doNotCompress="doNotCompress",ke.compressPunctuation="compressPunctuation",ke.compressPunctuationAndJapaneseKana="compressPunctuationAndJapaneseKana",a.ST_WmlColorSchemeIndex=void 0,(fe=a.ST_WmlColorSchemeIndex||(a.ST_WmlColorSchemeIndex={})).dark1="dark1",fe.light1="light1",fe.dark2="dark2",fe.light2="light2",fe.accent1="accent1",fe.accent2="accent2",fe.accent3="accent3",fe.accent4="accent4",fe.accent5="accent5",fe.accent6="accent6",fe.hyperlink="hyperlink",fe.followedHyperlink="followedHyperlink",a.ST_StyleSort=void 0,(Ce=a.ST_StyleSort||(a.ST_StyleSort={})).name="name",Ce.priority="priority",Ce.default="default",Ce.font="font",Ce.basedOn="basedOn",Ce.type="type",a.ST_FrameScrollbar=void 0,(we=a.ST_FrameScrollbar||(a.ST_FrameScrollbar={})).on="on",we.off="off",we.auto="auto",a.ST_FrameLayout=void 0,(De=a.ST_FrameLayout||(a.ST_FrameLayout={})).rows="rows",De.cols="cols",De.none="none",a.ST_LevelSuffix=void 0,(Pe=a.ST_LevelSuffix||(a.ST_LevelSuffix={})).tab="tab",Pe.space="space",Pe.nothing="nothing",a.ST_MultiLevelType=void 0,(xe=a.ST_MultiLevelType||(a.ST_MultiLevelType={})).singleLevel="singleLevel",xe.multilevel="multilevel",xe.hybridMultilevel="hybridMultilevel",a.ST_TblStyleOverrideType=void 0,(Le=a.ST_TblStyleOverrideType||(a.ST_TblStyleOverrideType={})).wholeTable="wholeTable",Le.firstRow="firstRow",Le.lastRow="lastRow",Le.firstCol="firstCol",Le.lastCol="lastCol",Le.band1Vert="band1Vert",Le.band2Vert="band2Vert",Le.band1Horz="band1Horz",Le.band2Horz="band2Horz",Le.neCell="neCell",Le.nwCell="nwCell",Le.seCell="seCell",Le.swCell="swCell",a.ST_StyleType=void 0,(Be=a.ST_StyleType||(a.ST_StyleType={})).paragraph="paragraph",Be.character="character",Be.table="table",Be.numbering="numbering",a.ST_FontFamily=void 0,(Fe=a.ST_FontFamily||(a.ST_FontFamily={})).decorative="decorative",Fe.modern="modern",Fe.roman="roman",Fe.script="script",Fe.swiss="swiss",Fe.auto="auto",a.ST_Pitch=void 0,(Me=a.ST_Pitch||(a.ST_Pitch={})).fixed="fixed",Me.variable="variable",Me.default="default",a.ST_ThemeColor=void 0,(Ae=a.ST_ThemeColor||(a.ST_ThemeColor={})).dark1="dark1",Ae.light1="light1",Ae.dark2="dark2",Ae.light2="light2",Ae.accent1="accent1",Ae.accent2="accent2",Ae.accent3="accent3",Ae.accent4="accent4",Ae.accent5="accent5",Ae.accent6="accent6",Ae.hyperlink="hyperlink",Ae.followedHyperlink="followedHyperlink",Ae.none="none",Ae.background1="background1",Ae.text1="text1",Ae.background2="background2",Ae.text2="text2",a.ST_DocPartBehavior=void 0,(He=a.ST_DocPartBehavior||(a.ST_DocPartBehavior={})).content="content",He.p="p",He.pg="pg",a.ST_DocPartType=void 0,(Ee=a.ST_DocPartType||(a.ST_DocPartType={})).none="none",Ee.normal="normal",Ee.autoExp="autoExp",Ee.toolbar="toolbar",Ee.speller="speller",Ee.formFld="formFld",Ee.bbPlcHdr="bbPlcHdr",a.ST_DocPartGallery=void 0,(Re=a.ST_DocPartGallery||(a.ST_DocPartGallery={})).placeholder="placeholder",Re.any="any",Re.default="default",Re.docParts="docParts",Re.coverPg="coverPg",Re.eq="eq",Re.ftrs="ftrs",Re.hdrs="hdrs",Re.pgNum="pgNum",Re.tbls="tbls",Re.watermarks="watermarks",Re.autoTxt="autoTxt",Re.txtBox="txtBox",Re.pgNumT="pgNumT",Re.pgNumB="pgNumB",Re.pgNumMargins="pgNumMargins",Re.tblOfContents="tblOfContents",Re.bib="bib",Re.custQuickParts="custQuickParts",Re.custCoverPg="custCoverPg",Re.custEq="custEq",Re.custFtrs="custFtrs",Re.custHdrs="custHdrs",Re.custPgNum="custPgNum",Re.custTbls="custTbls",Re.custWatermarks="custWatermarks",Re.custAutoTxt="custAutoTxt",Re.custTxtBox="custTxtBox",Re.custPgNumT="custPgNumT",Re.custPgNumB="custPgNumB",Re.custPgNumMargins="custPgNumMargins",Re.custTblOfContents="custTblOfContents",Re.custBib="custBib",Re.custom1="custom1",Re.custom2="custom2",Re.custom3="custom3",Re.custom4="custom4",Re.custom5="custom5",a.ST_CaptionPos=void 0,(We=a.ST_CaptionPos||(a.ST_CaptionPos={})).above="above",We.below="below",We.left="left",We.right="right"}));
;/*!node_modules/office-viewer/lib/parse/parseSize.js*/
amis.define("node_modules/office-viewer/lib/parse/parseSize",(function(e,t,n,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={Dxa:{mul:.066665,unit:"px"},Emu:{mul:1.3333/12700,unit:"px"},FontSize:{mul:.66665,unit:"px"},Border:{mul:.1666625,unit:"px"},Point:{mul:1.3333,unit:"px"},Percent:{mul:.02,unit:"%"},LineHeight:{mul:1/240,unit:""},VmlEmu:{mul:1/12700,unit:""}};function r(e,t){return void 0===t&&(t=i.Dxa),null==e||/.+(p[xt]|[%])$/.test(e)?e:"".concat((parseInt(e)*t.mul).toFixed(2)).concat(t.unit)}t.LengthUsage=i,t.convertLength=r,t.parseSize=function(e,t,n){void 0===n&&(n=i.Dxa);var u=e.getAttribute(t);return u?r(String(u),n):""}}));
;/*!node_modules/office-viewer/lib/parse/parseColor.js*/
amis.define("node_modules/office-viewer/lib/parse/parseColor",(function(e,r,t,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("node_modules/office-viewer/lib/OpenXML"),a=e("node_modules/office-viewer/lib/openxml/Types"),u=["black","blue","cyan","darkBlue","darkCyan","darkGray","darkGreen","darkMagenta","darkRed","darkYellow","green","lightGray","magenta","none","red","white","yellow"];function s(e,r,t,c){void 0===t&&(t="w:color"),void 0===c&&(c="black");var n=r.getAttribute(t);if(n)return"auto"==n?c:"string"==typeof n&&u.includes(n)?n:"#".concat(n);var a=r.getAttribute("w:themeColor");return a?e.getThemeColor(a):""}function o(e,r){var t=parseInt(e.substring(0,2),16),c=parseInt(e.substring(2,4),16),n=parseInt(e.substring(4,6),16);return"rgba(".concat(t,", ").concat(c,", ").concat(n,", ").concat(r,")")}r.parseColor=function(e,r){return s(e,r,"w:val")},r.parseColorAttr=s,r.parseShdColor=function(e,r){var t=r.getAttribute("w:fill")||"",c=n.getVal(r);if("auto"===t&&(t="inherit"),6===t.length)switch(c){case a.ST_Shd.clear:return"#".concat(t);case a.ST_Shd.pct10:return o(t,.1);case a.ST_Shd.pct12:return o(t,.125);case a.ST_Shd.pct15:return o(t,.15);case a.ST_Shd.pct20:return o(t,.2);case a.ST_Shd.pct25:return o(t,.25);case a.ST_Shd.pct30:return o(t,.3);case a.ST_Shd.pct35:return o(t,.35);case a.ST_Shd.pct37:return o(t,.375);case a.ST_Shd.pct40:return o(t,.4);case a.ST_Shd.pct45:return o(t,.45);case a.ST_Shd.pct5:return o(t,.05);case a.ST_Shd.pct50:return o(t,.5);case a.ST_Shd.pct55:return o(t,.55);case a.ST_Shd.pct60:return o(t,.6);case a.ST_Shd.pct65:return o(t,.65);case a.ST_Shd.pct70:return o(t,.7);case a.ST_Shd.pct75:return o(t,.75);case a.ST_Shd.pct80:return o(t,.8);case a.ST_Shd.pct85:return o(t,.85);case a.ST_Shd.pct87:return o(t,.87);case a.ST_Shd.pct90:return o(t,.9);case a.ST_Shd.pct95:return o(t,.95);default:return console.warn("unsupport shd val",c),"#".concat(t)}return""}}));
;/*!node_modules/office-viewer/lib/parse/parseBorder.js*/
amis.define("node_modules/office-viewer/lib/parse/parseBorder",(function(e,r,o,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),d=e("node_modules/office-viewer/lib/OpenXML"),t=e("node_modules/office-viewer/lib/parse/parseColor"),i=e("node_modules/office-viewer/lib/parse/parseSize"),l=e("node_modules/office-viewer/lib/openxml/Types");function c(e,r){var o=d.getVal(r);if(o===l.ST_Border.nil||o===l.ST_Border.none)return"none";switch(o){case l.ST_Border.dashed:case l.ST_Border.dashDotStroked:case l.ST_Border.dashSmallGap:case l.ST_Border.dotDash:case l.ST_Border.dotDotDash:case l.ST_Border.dotted:case l.ST_Border.double:case l.ST_Border.doubleWave:case l.ST_Border.inset:case l.ST_Border.outset:}var a=t.parseColorAttr(e,r),s=i.parseSize(r,"w:sz",i.LengthUsage.Border);return"".concat(s," solid ").concat("auto"==a?"black":a)}r.parseBorder=c,r.parseBorders=function(e,r,o){var a,d;try{for(var t=s.__values(r.children),i=t.next();!i.done;i=t.next()){var l=i.value;switch(l.tagName){case"w:start":case"w:left":o["border-left"]=c(e,l);break;case"w:end":case"w:right":o["border-right"]=c(e,l);break;case"w:top":o["border-top"]=c(e,l);break;case"w:bottom":o["border-bottom"]=c(e,l)}}}catch(e){a={error:e}}finally{try{i&&!i.done&&(d=t.return)&&d.call(t)}finally{if(a)throw a.error}}}}));
;/*!node_modules/office-viewer/lib/parse/parseInd.js*/
amis.define("node_modules/office-viewer/lib/parse/parseInd",(function(e,i,r,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/parse/parseSize");i.parseInd=function(e,i){var r=a.parseSize(e,"w:firstLine"),n=a.parseSize(e,"w:hanging"),t=a.parseSize(e,"w:left"),s=a.parseSize(e,"w:start"),d=a.parseSize(e,"w:right"),p=a.parseSize(e,"w:end");r&&(i["text-indent"]=r),n&&(i["text-indent"]="-".concat(n)),(t||s)&&(i["margin-left"]=t||s),(d||p)&&(i["margin-right"]=d||p)}}));
;/*!node_modules/office-viewer/lib/parse/parseSpacing.js*/
amis.define("node_modules/office-viewer/lib/parse/parseSpacing",(function(e,i,t,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/parse/parseSize");i.parseSpacing=function(e,i,t){var r=a.parseSize(i,"w:before"),n=a.parseSize(i,"w:after"),o=i.getAttribute("w:lineRule");r&&(t["margin-top"]=r),n&&(t["margin-bottom"]=n);var s=i.getAttribute("w:line");if(s){if(e.renderOptions.forceLineHeight)return void(t["line-height"]=e.renderOptions.forceLineHeight);var c=parseInt(s,10),p=e.renderOptions.minLineHeight||1;switch(o){case"auto":var f=Math.max(p,c/240);t["line-height"]="".concat(f.toFixed(2));break;case"atLeast":break;default:var h=Math.max(p,c/20);t["line-height"]=t["min-height"]="".concat(h,"pt")}}}}));
;/*!node_modules/office-viewer/lib/parse/parseFont.js*/
amis.define("node_modules/office-viewer/lib/parse/parseFont",(function(e,a,s,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6");a.parseFont=function(e,a,s){var r,n,t=[],o=e.renderOptions.fontMapping;try{for(var c=i.__values(a.attributes),l=c.next();!l.done;l=c.next()){var f=l.value,u=f.name,d=f.value;switch(u){case"w:ascii":case"w:cs":case"w:eastAsia":o&&d in o&&(d=o[d]),-1===d.indexOf(" ")?t.push(d):t.push('"'+d+'"');break;case"w:asciiTheme":case"w:csTheme":case"w:eastAsiaTheme":t.push("var(--docx-theme-font-".concat(d,")"))}}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}t.length&&(s["font-family"]=Array.from(new Set(t)).join(", "))}}));
;/*!node_modules/office-viewer/lib/parse/parseTrHeight.js*/
amis.define("node_modules/office-viewer/lib/parse/parseTrHeight",(function(e,i,t,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/parse/parseSize");i.parseTrHeight=function(e,i){var t=a.parseSize(e,"w:val"),r=e.getAttribute("w:hRule");"exact"===r?i.height=t:"atLeast"===r&&(i.height=t,i["min-height"]=t)}}));
;/*!node_modules/office-viewer/lib/parse/jcToTextAlign.js*/
amis.define("node_modules/office-viewer/lib/parse/jcToTextAlign",(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.jcToTextAlign=function(e){switch(e){case"start":case"left":return"left";case"center":return"center";case"end":case"right":return"right";case"both":return"justify"}return e}}));
;/*!node_modules/office-viewer/lib/parse/parseTextDirection.js*/
amis.define("node_modules/office-viewer/lib/parse/parseTextDirection",(function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=e("node_modules/office-viewer/lib/openxml/Types");t.parseTextDirection=function(e,t){switch(e.getAttribute("w:val")){case c.ST_TextDirection.lr:case c.ST_TextDirection.lrV:case"btLr":case"lrTb":case"lrTbV":case"tbLrV":t.direction="ltr";break;case c.ST_TextDirection.rl:case c.ST_TextDirection.rlV:case"tbRl":case"tbRlV":t.direction="rtl"}}}));
;/*!node_modules/office-viewer/lib/parse/parsePr.js*/
amis.define("node_modules/office-viewer/lib/parse/parsePr",(function(e,a,r,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),t=e("node_modules/office-viewer/lib/openxml/Types"),n=e("node_modules/office-viewer/lib/parse/parseSize"),c=e("node_modules/office-viewer/lib/OpenXML"),i=e("node_modules/office-viewer/lib/parse/parseBorder"),l=e("node_modules/office-viewer/lib/parse/parseColor"),d=e("node_modules/office-viewer/lib/parse/parseInd"),w=e("node_modules/office-viewer/lib/parse/parseSpacing"),b=e("node_modules/office-viewer/lib/parse/parseFont"),p=e("node_modules/office-viewer/lib/parse/parseTrHeight"),u=e("node_modules/office-viewer/lib/parse/jcToTextAlign"),f=e("node_modules/office-viewer/lib/parse/parseTextDirection");function g(e,a,r){var o=c.getVal(a);if(null!=o){switch(o){case"dash":case"dashDotDotHeavy":case"dashDotHeavy":case"dashedHeavy":case"dashLong":case"dashLongHeavy":case"dotDash":case"dotDotDash":r["text-decoration-style"]="dashed";break;case"dotted":case"dottedHeavy":r["text-decoration-style"]="dotted";break;case"double":r["text-decoration-style"]="double";break;case"single":case"thick":case"words":r["text-decoration"]="underline";break;case"wave":case"wavyDouble":case"wavyHeavy":r["text-decoration-style"]="wavy";break;case"none":r["text-decoration"]="none"}var s=l.parseColorAttr(e,a);s&&(r["text-decoration-color"]=s)}}function k(e,a){var r,o;try{for(var t=s.__values(e.attributes),c=t.next();!c.done;c=t.next()){var i=c.value,l=i.name,d=i.value;switch(l){case"w:dropCap":"drop"===d&&(a.float="left");break;case"w:h":"object"!=typeof d||Array.isArray(d)||(a.height=n.parseSize(d,"w:h"));break;case"w:w":"object"!=typeof d||Array.isArray(d)||(a.width=n.parseSize(d,"w:w"));break;default:console.warn("parseFrame: unknown attribute "+l,i)}}}catch(e){r={error:e}}finally{try{c&&!c.done&&(o=t.return)&&o.call(t)}finally{if(r)throw r.error}}}a.parsePr=function(e,a,r){var o,v,h={};try{for(var y=s.__values(a.children),m=y.next();!m.done;m=y.next()){var x=m.value,_=x.tagName;switch(_){case"w:sz":case"w:szCs":h["font-size"]=n.parseSize(x,"w:val",n.LengthUsage.FontSize);break;case"w:jc":h["text-align"]=u.jcToTextAlign(c.getVal(x));break;case"w:framePr":k(x,h);break;case"w:pBdr":i.parseBorders(e,x,h);break;case"w:ind":d.parseInd(x,h);break;case"w:color":h.color=l.parseColor(e,x);break;case"w:shd":"background-color"in h||(h["background-color"]=l.parseShdColor(e,x));break;case"w:spacing":w.parseSpacing(e,x,h);break;case"w:highlight":h["background-color"]=l.parseColorAttr(e,x,"w:fill","transparent");break;case"w:vertAlign":var S=c.getVal(x);S===t.ST_VerticalAlignRun.superscript?h["vertical-align"]="super":S===t.ST_VerticalAlignRun.subscript&&(h["vertical-align"]="sub");break;case"w:position":h["vertical-align"]=n.parseSize(x,"w:val",n.LengthUsage.FontSize);break;case"w:trHeight":p.parseTrHeight(x,h);break;case"w:strike":case"w:dstrike":h["text-decoration"]=c.getValBoolean(x)?"line-through":"none";break;case"w:b":h["font-weight"]=c.getValBoolean(x)?"bold":"normal";break;case"w:adjustRightInd":case"w:bCs":case"w:iCs":case"w:kern":case"w:pStyle":case"w:lang":case"w:noProof":case"w:keepLines":case"w:keepNext":case"w:widowControl":case"w:pageBreakBefore":case"w:outlineLvl":case"w:contextualSpacing":case"w:numPr":case"w:rPr":case"w:rStyle":case"w:tabs":case"w:snapToGrid":case"w:cnfStyle":case"w:autoSpaceDE":case"w:autoSpaceDN":case"w:kinsoku":case"w:overflowPunct":break;case"w:i":h["font-style"]=c.getValBoolean(x)?"italic":"normal";break;case"w:caps":h["text-transform"]=c.getValBoolean(x)?"uppercase":"normal";break;case"w:smallCaps":h["text-transform"]=c.getValBoolean(x)?"lowercase":"normal";break;case"w:u":g(e,x,h);break;case"w:rFonts":b.parseFont(e,x,h);break;case"w:tblCellSpacing":h["border-spacing"]=n.parseSize(x,"w:w"),h["border-collapse"]="separate";break;case"w:bdr":h.border=i.parseBorder(e,x);break;case"w:vanish":c.getValBoolean(x)&&(h.display="none");break;case"w:webHidden":h.display="none";break;case"w:wordWrap":c.getValBoolean(x)&&(h["word-break"]="break-all");break;case"w:textAlignment":var T=c.getVal(x);T===t.ST_TextAlignment.center?h["vertical-align"]="middle":T!==t.ST_TextAlignment.auto&&(h["vertical-align"]=T);break;case"w:textDirection":f.parseTextDirection(x,h);break;case"w:bidi":c.getValBoolean(x,!0)&&console.warn("w:bidi is not supported.");break;default:console.warn("parsePr Unknown tagName",_,x)}}}catch(e){o={error:e}}finally{try{m&&!m.done&&(v=y.return)&&v.call(y)}finally{if(o)throw o.error}}return h}}));
;/*!node_modules/office-viewer/lib/openxml/word/Bookmark.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Bookmark",(function(e,n,o,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e){this.name=e}return e.fromXML=function(n,o){var t=o.getAttribute("w:name");return t?new e(t):(console.warn("Bookmark without name"),new e("unknown"))},e}();n.BookmarkStart=r}));
;/*!node_modules/office-viewer/lib/openxml/word/Break.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Break",(function(e,n,i,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("node_modules/office-viewer/lib/openxml/Types"),t=function(){function e(){this.type=r.ST_BrType.textWrapping}return e.fromXML=function(n,i){return new e},e}();n.Break=t}));
;/*!node_modules/office-viewer/lib/openxml/word/drawing/Blip.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/drawing/Blip",(function(e,i,n,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function e(){}return e.fromXML=function(i,n){var t=new e,r=n.getAttribute("r:embed")||"",o=i.getRelationship(r);return o&&(t.embled=o),t},e}();i.Blip=r}));
;/*!node_modules/office-viewer/lib/openxml/word/drawing/BlipFill.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/drawing/BlipFill",(function(e,i,l,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/openxml/word/drawing/Blip"),r=function(){function e(){}return e.fromXML=function(i,l){var n=new e,r=null==l?void 0:l.querySelector("blip");return r&&(n.blip=o.Blip.fromXML(i,r)),n},e}();i.BlipFill=r}));
;/*!node_modules/office-viewer/lib/openxml/word/drawing/Transform.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/drawing/Transform",(function(e,r,n,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/parse/parseSize"),a=function(){function e(){}return e.fromXML=function(r,n){var o=new e,a=n.querySelector("off");a&&(o.off={x:i.parseSize(a,"x",i.LengthUsage.Emu),y:i.parseSize(a,"y",i.LengthUsage.Emu)});var s=n.querySelector("ext");return s&&(o.ext={cx:i.parseSize(s,"cx",i.LengthUsage.Emu),cy:i.parseSize(s,"cy",i.LengthUsage.Emu)}),o},e}();r.Transform=a}));
;/*!node_modules/office-viewer/lib/openxml/word/drawing/ShapeProperties.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/drawing/ShapeProperties",(function(e,r,o,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/openxml/word/drawing/Transform"),f=function(){function e(){}return e.fromXML=function(r,o){var n=new e,f=null==o?void 0:o.querySelector("xfrm");return f&&(n.xfrm=i.Transform.fromXML(r,f)),n},e}();r.ShapePr=f}));
;/*!node_modules/office-viewer/lib/openxml/word/drawing/Pic.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/drawing/Pic",(function(e,i,r,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/openxml/word/drawing/BlipFill"),n=e("node_modules/office-viewer/lib/openxml/word/drawing/ShapeProperties"),d=function(){function e(){}return e.fromXML=function(i,r){var l=new e;return l.blipFill=o.BlipFill.fromXML(i,null==r?void 0:r.querySelector("blipFill")),l.spPr=n.ShapePr.fromXML(i,null==r?void 0:r.querySelector("spPr")),l},e}();i.Pic=d}));
;/*!node_modules/office-viewer/lib/openxml/word/drawing/Drawing.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/drawing/Drawing",(function(e,i,n,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/openxml/word/drawing/Pic"),c=function(){function e(){}return e.fromXML=function(i,n){var r=new e,c=n.querySelector("pic");return r.pic=o.Pic.fromXML(i,c),r},e}();i.Drawing=c}));
;/*!node_modules/office-viewer/lib/openxml/word/InstrText.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/InstrText",(function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){this.text=e};t.InstrText=o}));
;/*!node_modules/office-viewer/lib/openxml/word/Pict.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Pict",(function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.fromXML=function(t,i){var r=new e,n=i.querySelector("imagedata");if(n){var o=n.getAttribute("r:id")||"",a=t.getRelationship(o);a&&(r.imagedata=a)}return r},e}();t.Pict=n}));
;/*!node_modules/office-viewer/lib/openxml/word/Ruby.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Ruby",(function(e,r,n,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),a=e("node_modules/office-viewer/lib/openxml/word/Run"),l=function(){function e(){}return e.fromXML=function(r,n){var o,l,u=new e;u.children=[];try{for(var i=t.__values(n.children),f=i.next();!f.done;f=i.next()){var c=f.value,s=c.tagName;if("w:r"===s){var d=a.Run.fromXML(r,c);d&&u.children.push(d)}else console.warn("parse Ruby: Unknown key",s,c)}}catch(e){o={error:e}}finally{try{f&&!f.done&&(l=i.return)&&l.call(i)}finally{if(o)throw o.error}}return u},e}();!function(e){function r(){return null!==e&&e.apply(this,arguments)||this}t.__extends(r,e)}(l);var u=function(){function e(){}return e.fromXML=function(r,n){var o,a,u=new e;try{for(var i=t.__values(n.children),f=i.next();!f.done;f=i.next()){var c=f.value,s=c.tagName;switch(s){case"w:rubyPr":break;case"w:rt":u.rt=l.fromXML(r,c);break;case"w:rubyBase":u.rubyBase=l.fromXML(r,c);break;default:console.warn("parse Ruby: Unknown key",s,c)}}}catch(e){o={error:e}}finally{try{f&&!f.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return u},e}();r.Ruby=u}));
;/*!node_modules/office-viewer/lib/openxml/word/Sym.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Sym",(function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.parseXML=function(t){var n=new e;return n.font=t.getAttribute("w:font")||"",n.char=t.getAttribute("w:char")||"",n},e}();t.Sym=i}));
;/*!node_modules/office-viewer/lib/openxml/word/Tab.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Tab",(function(e,i,o,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("node_modules/office-viewer/lib/OpenXML"),t=e("node_modules/office-viewer/lib/parse/parseSize"),f=function(){function e(){}return e.fromXML=function(i,o){var r=new e;return r.pos=t.parseSize(o,"w:pos"),r.type=n.getVal(o),r.leader=o.getAttribute("w:leader"),r},e}();i.Tab=f}));
;/*!node_modules/office-viewer/lib/openxml/word/Run.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Run",(function(e,r,o,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),d=e("node_modules/office-viewer/lib/OpenXML"),a=e("node_modules/office-viewer/lib/parse/parsePr"),t=e("node_modules/office-viewer/lib/openxml/word/Break"),l=e("node_modules/office-viewer/lib/openxml/word/drawing/Drawing"),s=e("node_modules/office-viewer/lib/openxml/word/InstrText"),c=e("node_modules/office-viewer/lib/openxml/word/Pict"),f=e("node_modules/office-viewer/lib/openxml/word/Ruby"),w=e("node_modules/office-viewer/lib/openxml/word/Sym"),u=e("node_modules/office-viewer/lib/openxml/word/Tab"),m=function(e){this.preserveSpace=!1,this.text=String(e)},b=function(){function e(){this.properties={},this.children=[]}return e.prototype.addChild=function(e){e&&this.children.push(e)},e.parseRunPr=function(e,r){var o,i=a.parsePr(e,r),n=r.getElementsByTagName("w:rStyle").item(0);return n&&(o=d.getVal(n)),{cssStyle:i,rStyle:o}},e.fromXML=function(r,o){var i,d,a=new e;try{for(var b=n.__values(o.children),p=b.next();!p.done;p=b.next()){var h=p.value,v=h.tagName;switch(v){case"w:t":var x=h.textContent||"",y=new m(x);a.addChild(y);break;case"w:rPr":a.properties=e.parseRunPr(r,h);break;case"w:br":a.addChild(t.Break.fromXML(r,h));break;case"w:drawing":a.addChild(l.Drawing.fromXML(r,h));break;case"w:tab":a.addChild(u.Tab.fromXML(r,h));break;case"w:fldChar":case"w:lastRenderedPageBreak":break;case"w:instrText":a.addChild(new s.InstrText(h.textContent||""));break;case"w:pict":a.addChild(c.Pict.fromXML(r,h));break;case"w:ruby":a.addChild(f.Ruby.fromXML(r,h));break;case"w:sym":a.addChild(w.Sym.parseXML(h));break;default:console.warn("parse Run: Unknown key",v,h)}}}catch(e){i={error:e}}finally{try{p&&!p.done&&(d=b.return)&&d.call(b)}finally{if(i)throw i.error}}return a},e}();r.Run=b,r.Text=m}));
;/*!node_modules/office-viewer/lib/openxml/word/Hyperlink.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Hyperlink",(function(e,r,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),t=e("node_modules/office-viewer/lib/openxml/word/Run"),l=function(){function e(){this.children=[]}return e.prototype.addChild=function(e){this.children.push(e)},e.fromXML=function(r,n){var i,l,d=new e,a=n.getAttribute("r:id");if(a){var u=r.getRelationship(a);u&&(d.relation=u)}var f=n.getAttribute("anchor");f&&(d.anchor=f);try{for(var c=o.__values(n.children),s=c.next();!s.done;s=c.next()){var h=s.value,v=h.tagName;if("w:r"===v)d.addChild(t.Run.fromXML(r,h));else console.warn("parse Hyperlink: Unknown key",v,h)}}catch(e){i={error:e}}finally{try{s&&!s.done&&(l=c.return)&&l.call(c)}finally{if(i)throw i.error}}return d},e}();r.Hyperlink=l}));
;/*!node_modules/office-viewer/lib/openxml/word/numbering/NumberProperties.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/numbering/NumberProperties",(function(e,r,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/OpenXML"),u=function(){function e(){}return e.fromXML=function(r,n){var i=new e,u=n.querySelector("ilvl");u&&(i.ilvl=o.getVal(u));var l=n.querySelector("numId");return l&&(i.numId=o.getVal(l)),i},e}();r.NumberPr=u}));
;/*!node_modules/office-viewer/lib/openxml/word/InlineText.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/InlineText",(function(e,r,o,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),l=e("node_modules/office-viewer/lib/openxml/word/Bookmark"),a=e("node_modules/office-viewer/lib/openxml/word/Hyperlink"),d=e("node_modules/office-viewer/lib/openxml/word/Run"),t=function(){function e(){this.children=[]}return e.prototype.addChild=function(e){this.children.push(e)},e.fromXML=function(r,o){var n,t,s=new e;try{for(var c=i.__values(o.children),f=c.next();!f.done;f=c.next()){var u=f.value,w=u.tagName;switch(w){case"w:r":s.addChild(d.Run.fromXML(r,u));break;case"w:hyperlink":s.addChild(a.Hyperlink.fromXML(r,u));break;case"w:bookmarkStart":s.addChild(l.BookmarkStart.fromXML(r,u));case"w:bookmarkEnd":case"w:proofErr":case"w:noProof":case"w:smartTagPr":case"w:del":break;default:console.warn("parse Inline: Unknown key",w,u)}}}catch(e){n={error:e}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(n)throw n.error}}return s},e}();r.InlineText=t}));
;/*!node_modules/office-viewer/lib/openxml/word/SmartTag.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/SmartTag",(function(e,n,i,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),l=e("node_modules/office-viewer/lib/openxml/word/InlineText"),r=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(n,e),n.fromXML=function(e,n){return l.InlineText.fromXML(e,n)},n}(l.InlineText);n.SmartTag=r}));
;/*!node_modules/office-viewer/lib/openxml/word/FldSimple.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/FldSimple",(function(e,n,i,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/openxml/word/InlineText"),r=function(){function e(){}return e.fromXML=function(n,i){var t=new e;return t.inlineText=o.InlineText.fromXML(n,i),t.instr=i.getAttribute("w:instr")||"",t},e}();n.FldSimple=r}));
;/*!node_modules/office-viewer/lib/openxml/word/Paragraph.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Paragraph",(function(e,r,o,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),i=e("node_modules/office-viewer/lib/OpenXML"),n=e("node_modules/office-viewer/lib/parse/parsePr"),t=e("node_modules/office-viewer/lib/openxml/word/Bookmark"),d=e("node_modules/office-viewer/lib/openxml/word/Hyperlink"),s=e("node_modules/office-viewer/lib/openxml/word/numbering/NumberProperties"),m=e("node_modules/office-viewer/lib/openxml/word/Run"),f=e("node_modules/office-viewer/lib/openxml/word/Tab"),c=e("node_modules/office-viewer/lib/openxml/word/SmartTag"),u=e("node_modules/office-viewer/lib/openxml/word/FldSimple");var p=function(){function e(){this.properties={},this.children=[],this.fldSimples=[]}return e.prototype.addChild=function(e){this.children.push(e)},e.parseParagraphPr=function(e,r){var o,a,t,d,m=n.parsePr(e,r),c=r.querySelector("pStyle");c&&(t=i.getVal(c));var u=r.querySelector("numPr");u&&(d=s.NumberPr.fromXML(e,u));var p=[],w=r.getElementsByTagName("w:tab");try{for(var b=l.__values(w),v=b.next();!v.done;v=b.next()){var h=v.value;p.push(f.Tab.fromXML(e,h))}}catch(e){o={error:e}}finally{try{v&&!v.done&&(a=b.return)&&a.call(b)}finally{if(o)throw o.error}}var y=function(e){var r=e.getElementsByTagName("w:autoSpaceDE").item(0),o=e.getElementsByTagName("w:autoSpaceDN").item(0);return!!r||!!o}(r);return{cssStyle:m,pStyle:t,numPr:d,tabs:p,autoSpace:y}},e.fromXML=function(r,o){var a,i,n=new e;n.fldSimples=[],n.paraId=o.getAttribute("w14:paraId")||"";try{for(var s=l.__values(o.children),f=s.next();!f.done;f=s.next()){var p=f.value,w=p.tagName;switch(w){case"w:pPr":n.properties=e.parseParagraphPr(r,p);break;case"w:r":n.addChild(m.Run.fromXML(r,p));break;case"w:hyperlink":n.addChild(d.Hyperlink.fromXML(r,p));break;case"w:bookmarkStart":n.addChild(t.BookmarkStart.fromXML(r,p));case"w:bookmarkEnd":case"w:proofErr":case"w:noProof":case"w:del":case"w:moveTo":case"w:moveFrom":break;case"w:smartTag":case"w:customXml":n.addChild(c.SmartTag.fromXML(r,p));break;case"w:fldSimple":n.fldSimples.push(u.FldSimple.fromXML(r,p));break;default:console.warn("parse Paragraph: Unknown key",w,p)}}}catch(e){a={error:e}}finally{try{f&&!f.done&&(i=s.return)&&i.call(s)}finally{if(a)throw a.error}}return n},e}();r.Paragraph=p}));
;/*!node_modules/office-viewer/lib/openxml/word/table/Tc.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/table/Tc",(function(e,r,a,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),t=e("node_modules/office-viewer/lib/OpenXML"),n=e("node_modules/office-viewer/lib/openxml/word/Paragraph"),s=e("node_modules/office-viewer/lib/openxml/word/Table"),l=e("node_modules/office-viewer/lib/parse/parseSize"),c=e("node_modules/office-viewer/lib/parse/parseColor"),d=e("node_modules/office-viewer/lib/parse/parseBorder"),p=e("node_modules/office-viewer/lib/parse/parseTextDirection"),w=e("node_modules/office-viewer/lib/openxml/Types");function f(e,r){var a,i;try{for(var t=o.__values(e.children),n=t.next();!n.done;n=t.next()){var s=n.value;switch(s.tagName){case"w:left":case"w:start":r["padding-left"]=l.parseSize(s,"w:w");break;case"w:right":case"w:end":r["padding-right"]=l.parseSize(s,"w:w");break;case"w:top":r["padding-top"]=l.parseSize(s,"w:w");break;case"w:bottom":r["padding-bottom"]=l.parseSize(s,"w:w")}}}catch(e){a={error:e}}finally{try{n&&!n.done&&(i=t.return)&&i.call(t)}finally{if(a)throw a.error}}}function u(e,r){switch(t.getVal(e)){case w.ST_VerticalJc.bottom:r["vertical-align"]="bottom";break;case w.ST_VerticalJc.center:r["vertical-align"]="middle";break;case w.ST_VerticalJc.top:r["vertical-align"]="top"}}function b(e,r){var a,i,o=r.querySelector("insideH");o&&(a=d.parseBorder(e,o));var t=r.querySelector("insideV");return t&&(i=d.parseBorder(e,t)),{H:a,V:i}}function v(e){var r=e.getAttribute("w:type");return r&&r!==w.ST_TblWidth.dxa?r===w.ST_TblWidth.pct?l.parseSize(e,"w:w",l.LengthUsage.Percent):r===w.ST_TblWidth.auto?"auto":(console.warn("parseTblWidth: ignore type",r,e),""):l.parseSize(e,"w:w")}function g(e,r){var a=v(e);a&&(r.width=a)}var h=function(){function e(){this.properties={},this.children=[]}return e.prototype.add=function(e){e&&this.children.push(e)},e.parseTcPr=function(e,r){var a,i,n={},s={};n.cssStyle=s;try{for(var l=o.__values(r.children),v=l.next();!v.done;v=l.next()){var h=v.value,m=h.tagName;switch(m){case"w:tcMar":f(h,s);break;case"w:shd":s["background-color"]=c.parseShdColor(e,h);break;case"w:tcW":g(h,s);break;case"w:noWrap":t.getValBoolean(h)&&(s["white-space"]="nowrap");break;case"w:vAlign":u(h,s);break;case"w:tcBorders":d.parseBorders(e,h,s),n.insideBorder=b(e,h);break;case"w:gridSpan":n.gridSpan=t.getValNumber(h);break;case"w:vMerge":n.vMerge=t.getVal(h)||w.ST_Merge.continue;break;case"w:textDirection":p.parseTextDirection(h,s);break;case"w:cnfStyle":break;default:console.warn("parseTcPr: ignore",m,h)}}}catch(e){a={error:e}}finally{try{v&&!v.done&&(i=l.return)&&i.call(l)}finally{if(a)throw a.error}}return n},e.fromXML=function(r,a,i,t){var l,c,d=new e;try{for(var p=o.__values(a.children),f=p.next();!f.done;f=p.next()){var u=f.value;switch(u.tagName){case"w:tcPr":d.properties=e.parseTcPr(r,u);break;case"w:p":d.add(n.Paragraph.fromXML(r,u));break;case"w:tbl":d.add(s.Table.fromXML(r,u))}}}catch(e){l={error:e}}finally{try{f&&!f.done&&(c=p.return)&&c.call(p)}finally{if(l)throw l.error}}var b=t[i.index];if(d.properties.vMerge){if(d.properties.vMerge===w.ST_Merge.restart)d.properties.rowSpan=1,t[i.index]=d;else if(b){if(b.properties&&b.properties.rowSpan){b.properties.rowSpan=b.properties.rowSpan+1;var v=d.properties.gridSpan||1;return i.index+=v,null}console.warn("Tc.fromXML: continue but not found lastCol",i.index,d,t)}}else delete t[i.index];var g=d.properties.gridSpan||1;return i.index+=g,d},e}();r.Tc=h,r.parseCellMargin=f,r.parseInsideBorders=b,r.parseTblCellSpacing=function(e,r){var a=v(e);a&&(r["cell-spacing"]=a)},r.parseTblWidth=v}));
;/*!node_modules/office-viewer/lib/openxml/word/table/Tr.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/table/Tr",(function(e,r,a,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),n=e("node_modules/office-viewer/lib/OpenXML"),o=e("node_modules/office-viewer/lib/openxml/word/table/Tc"),i=e("node_modules/office-viewer/lib/parse/parseTrHeight"),s=e("node_modules/office-viewer/lib/parse/jcToTextAlign"),c=e("node_modules/office-viewer/lib/openxml/word/Table"),d=function(){function e(){this.properties={},this.tcs=[]}return e.parseTrPr=function(e,r){var a,l,d={},f={};try{for(var b=t.__values(r.children),w=b.next();!w.done;w=b.next()){var u=w.value,p=u.tagName;switch(p){case"w:hidden":n.getValBoolean(u)&&(d.display="none");break;case"w:trHeight":i.parseTrHeight(u,d);break;case"w:jc":d["text-align"]=s.jcToTextAlign(n.getVal(u));break;case"w:cantSplit":case"w:cnfStyle":break;case"w:tblPrEx":var v=c.Table.parseTablePr(e,u);Object.assign(d,v.cssStyle);break;case"w:tblCellSpacing":o.parseTblCellSpacing(u,f);break;default:console.warn("Tr: Unknown tag ",p,u)}}}catch(e){a={error:e}}finally{try{w&&!w.done&&(l=b.return)&&l.call(b)}finally{if(a)throw a.error}}return{cssStyle:d}},e.fromXML=function(r,a,l){var n,i,s=new e,d={index:0};try{for(var f=t.__values(a.children),b=f.next();!b.done;b=f.next()){var w=b.value,u=w.tagName;switch(u){case"w:tc":var p=o.Tc.fromXML(r,w,d,l);p&&s.tcs.push(p);break;case"w:trPr":s.properties=e.parseTrPr(r,w);break;case"w:tblPrEx":var v=c.Table.parseTablePr(r,w);Object.assign(s.properties.cssStyle||{},v.cssStyle);break;default:console.warn("Tr: Unknown tag ",u,w)}}}catch(e){n={error:e}}finally{try{b&&!b.done&&(i=f.return)&&i.call(f)}finally{if(n)throw n.error}}return s},e}();r.Tr=d}));
;/*!node_modules/office-viewer/lib/openxml/word/Table.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Table",(function(e,r,a,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),l=e("node_modules/office-viewer/lib/OpenXML"),n=e("node_modules/office-viewer/lib/parse/parseBorder"),i=e("node_modules/office-viewer/lib/parse/parseColor"),s=e("node_modules/office-viewer/lib/parse/parseSize"),c=e("node_modules/office-viewer/lib/openxml/Types"),d=e("node_modules/office-viewer/lib/openxml/word/table/Tc"),b=e("node_modules/office-viewer/lib/openxml/word/table/Tr");function f(e,r){switch(l.getVal(e)){case"left":case"start":break;case"right":case"end":r.float="right"}}function u(e,r){var a=d.parseTblWidth(e);a&&(r["margin-left"]=a)}function w(e,r){var a=d.parseTblWidth(e);a&&(r.width=a)}function p(e,r){e.getAttribute("w:type")===c.ST_TblLayoutType.fixed&&(r["table-layout"]="fixed")}function v(e){var r,a,t=[],l=e.getElementsByTagName("w:gridCol");try{for(var n=o.__values(l),i=n.next();!i.done;i=n.next()){var c=i.value,d=s.parseSize(c,"w:w");t.push({w:d})}}catch(e){r={error:e}}finally{try{i&&!i.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return t}function m(e){var r={},a=l.getValHex(e);return(l.getAttrBoolean(e,"firstRow",!1)||32&a)&&(r.firstRow=!0),(l.getAttrBoolean(e,"lastRow",!1)||64&a)&&(r.lastRow=!0),(l.getAttrBoolean(e,"firstColumn",!1)||128&a)&&(r.firstColumn=!0),(l.getAttrBoolean(e,"lastColumn",!1)||256&a)&&(r.lastColumn=!0),l.getAttrBoolean(e,"noHBand",!1)||512&a?r.noHBand=!0:r.noHBand=!1,l.getAttrBoolean(e,"noVBand",!1)||1024&a?r.noVBand=!0:r.noVBand=!1,r}function g(e,r,a){if(void 0===e.renderOptions.padding){var t=s.parseSize(r,"w:tblpX"),o=s.parseSize(r,"w:tblpY");a.position="absolute",a.top=o,a.left=t}}var y=function(){function e(){this.properties={},this.tblGrid=[],this.trs=[]}return e.parseTablePr=function(e,r){var a,t,s={},c={},b={};s.tblLook={},s.cssStyle=c,s.tcCSSStyle=b;try{for(var v=o.__values(r.children),y=v.next();!y.done;y=v.next()){var k=y.value,B=k.tagName;switch(B){case"w:tblBorders":n.parseBorders(e,k,c),s.insideBorder=d.parseInsideBorders(e,k);break;case"w:tcBorders":n.parseBorders(e,k,c);break;case"w:tblInd":u(k,c);break;case"w:jc":f(k,c);break;case"w:tblCellMar":case"w:tcMar":d.parseCellMargin(k,b);break;case"w:tblStyle":s.pStyle=l.getVal(k);break;case"w:tblW":w(k,c);break;case"w:shd":c["background-color"]=i.parseShdColor(e,k);break;case"w:tblCaption":s.tblCaption=l.getVal(k);break;case"w:tblCellSpacing":d.parseTblCellSpacing(k,c);break;case"w:tblLayout":p(k,c);break;case"w:tblLook":s.tblLook=m(k);break;case"w:tblStyleRowBandSize":s.rowBandSize=l.getValNumber(k);break;case"w:tblStyleColBandSize":s.colBandSize=l.getValNumber(k);break;case"w:tblpPr":g(e,k,c);break;default:console.warn("parseTableProperties unknown tag",B,k)}}}catch(e){a={error:e}}finally{try{y&&!y.done&&(t=v.return)&&t.call(v)}finally{if(a)throw a.error}}return s},e.fromXML=function(r,a){var t,l,n=new e,i={};try{for(var s=o.__values(a.children),c=s.next();!c.done;c=s.next()){var d=c.value,f=d.tagName;switch(f){case"w:tblPr":n.properties=e.parseTablePr(r,d);break;case"w:tr":n.trs.push(b.Tr.fromXML(r,d,i));break;case"w:tblGrid":n.tblGrid=v(d);break;default:console.warn("Table.fromXML unknown tag",f,d)}}}catch(e){t={error:e}}finally{try{c&&!c.done&&(l=s.return)&&l.call(s)}finally{if(t)throw t.error}}return n},e}();r.Table=y}));
;/*!node_modules/office-viewer/lib/openxml/Style.js*/
amis.define("node_modules/office-viewer/lib/openxml/Style",(function(e,r,a,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),n=e("node_modules/office-viewer/lib/OpenXML"),o=e("node_modules/office-viewer/lib/openxml/word/Paragraph"),i=e("node_modules/office-viewer/lib/openxml/word/Run"),s=e("node_modules/office-viewer/lib/openxml/word/Table"),c=e("node_modules/office-viewer/lib/openxml/word/table/Tc"),u=e("node_modules/office-viewer/lib/openxml/word/table/Tr");function d(e,r){var a,t,n={};try{for(var d=l.__values(r.children),f=d.next();!f.done;f=d.next()){var w=f.value;switch(w.tagName){case"w:rPr":n.rPr=i.Run.parseRunPr(e,w);break;case"w:pPr":n.pPr=o.Paragraph.parseParagraphPr(e,w);break;case"w:tblPr":n.tblPr=s.Table.parseTablePr(e,w);break;case"w:tcPr":n.tcPr=c.Tc.parseTcPr(e,w);break;case"w:trPr":n.trPr=u.Tr.parseTrPr(e,w)}}}catch(e){a={error:e}}finally{try{f&&!f.done&&(t=d.return)&&t.call(d)}finally{if(a)throw a.error}}return n}function f(e,r){var a,t,o={};o.id=r.getAttribute("w:styleId")||"",o.type=r.getAttribute("w:type"),o.tblStylePr={},Object.assign(o,d(e,r));try{for(var i=l.__values(r.children),s=i.next();!s.done;s=i.next()){var c=s.value,u=c.tagName;switch(u){case"w:name":o.name=n.getVal(c);break;case"w:basedOn":o.basedOn=n.getVal(c);break;case"w:rPr":case"w:pPr":case"w:tblPr":case"w:tcPr":case"w:trPr":case"w:next":case"w:link":case"w:unhideWhenUsed":case"w:qFormat":case"w:rsid":case"w:uiPriority":case"w:semiHidden":case"w:autoRedefine":break;case"w:tblStylePr":var f=c.getAttribute("w:type");o.tblStylePr[f]=d(e,c);break;default:console.warn("parseStyle Unknown tag",u,c)}}}catch(e){a={error:e}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(a)throw a.error}}return o}r.parseStyles=function(e,r){var a,t,n={styleMap:{}},s=Array.from(r.getElementsByTagName("w:style"));try{for(var c=l.__values(s),u=c.next();!u.done;u=c.next()){var d=f(e,u.value);d.id&&(n.styleMap[d.id]=d)}}catch(e){a={error:e}}finally{try{u&&!u.done&&(t=c.return)&&t.call(c)}finally{if(a)throw a.error}}return n.defaultStyle=function(e,r){var a={};if(!r)return a;var t=r.querySelector("rPrDefault");if(t){var l=t.querySelector("rPr");l&&(a.rPr=i.Run.parseRunPr(e,l))}var n=r.querySelector("pPrDefault");if(n){var s=n.querySelector("pPr");s&&(a.pPr=o.Paragraph.parseParagraphPr(e,s))}return a}(e,r.querySelector("docDefaults")),n}}));
;/*!node_modules/office-viewer/lib/openxml/Theme.js*/
amis.define("node_modules/office-viewer/lib/openxml/Theme",(function(e,r,t,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),o=function(){this.colors={}};function c(e){var r={};return e&&(r.clrScheme=function(e){var r,t,l=new o;if(!e)return l;l.name=e.getAttribute("name")||"";try{for(var c=n.__values(e.children),i=c.next();!i.done;i=c.next()){var a=i.value,u=a.tagName.replace("a:",""),m=a.firstElementChild;if(m){var f=m.nodeName.replace("a:","");l.colors[u]="sysClr"===f?m.getAttribute("lastClr")||"":m.getAttribute("val")||""}}}catch(e){r={error:e}}finally{try{i&&!i.done&&(t=c.return)&&t.call(c)}finally{if(r)throw r.error}}return l}(e.querySelector("clrScheme")),r.fontScheme=(e.querySelector("fontScheme"),{}),r.fmtScheme=(e.querySelector("fmtScheme"),{})),r}r.parseTheme=function(e){var r={};return r.themeElements=c(e.querySelector("themeElements")),r}}));
;/*!node_modules/office-viewer/lib/util/dom.js*/
amis.define("node_modules/office-viewer/lib/util/dom",(function(e,n,t,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6");n.addClassName=function(e,n){e&&n&&e.classList.add(n)},n.addClassNames=function(e,n){var t;e&&n&&(t=e.classList).add.apply(t,i.__spreadArray([],i.__read(n),!1))},n.appendChild=function(e,n){e&&n&&e.appendChild(n)},n.createElement=function(e){return document.createElement(e)},n.setStyle=function(e,n){for(var t in n){var a=n[t];null!=a&&""!==a&&e.style.setProperty(t,n[t])}},n.styleToText=function(e){void 0===e&&(e={});var n="";for(var t in e){var a=e[t];null!=a&&""!==a&&(n+="".concat(t,": ").concat(a,";\n"))}return n}}));
;/*!node_modules/office-viewer/lib/render/renderBr.js*/
amis.define("node_modules/office-viewer/lib/render/renderBr",(function(e,r,i,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var d=e("node_modules/office-viewer/lib/util/dom");r.renderBr=function(e){return d.createElement("br")}}));
;/*!node_modules/office-viewer/lib/render/renderDrawing.js*/
amis.define("node_modules/office-viewer/lib/render/renderDrawing",(function(e,i,l,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.renderDrawing=function(e,i){var l,r,t,n=i.pic;if(n){var o=null===(l=n.blipFill)||void 0===l?void 0:l.blip;if(o&&o.embled){var d=document.createElement("img");d.style.position="relative",null===(r=e.loadImage(o.embled))||void 0===r||r.then((function(e){e&&(d.src=e)}));var a=null===(t=n.spPr)||void 0===t?void 0:t.xfrm;if(a){var f=a.off;f&&(d.style.left=f.x,d.style.top=f.y);var u=a.ext;u&&(d.style.width=u.cx,d.style.height=u.cy)}return d}}return null}}));
;/*!node_modules/office-viewer/lib/render/setElementStyle.js*/
amis.define("node_modules/office-viewer/lib/render/setElementStyle",(function(e,t,l,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/util/dom");t.setElementStyle=function(e,t,l){l&&(l.cssStyle&&a.setStyle(t,l.cssStyle),l.pStyle&&a.addClassNames(t,e.getStyleClassName(l.pStyle)),l.rStyle&&a.addClassNames(t,e.getStyleClassName(l.rStyle)))}}));
;/*!node_modules/office-viewer/lib/render/renderTab.js*/
amis.define("node_modules/office-viewer/lib/render/renderTab",(function(e,o,i,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=e("node_modules/office-viewer/lib/openxml/Types"),d=e("node_modules/office-viewer/lib/util/dom");o.renderTab=function(e,o){var i=d.createElement("span");return i.style.display="inline-block",i.style.width=o.pos,i.innerHTML="&nbsp;",o.leader===r.ST_TabTlc.dot&&(i.style.borderBottom="1px dotted"),i}}));
;/*!node_modules/office-viewer/lib/render/renderPict.js*/
amis.define("node_modules/office-viewer/lib/render/renderPict",(function(e,i,n,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.renderPict=function(e,i){var n;if(i.imagedata){var t=document.createElement("img");return t.style.position="relative",null===(n=e.loadImage(i.imagedata))||void 0===n||n.then((function(e){e&&(t.src=e)})),t}return null}}));
;/*!node_modules/office-viewer/lib/render/renderRuby.js*/
amis.define("node_modules/office-viewer/lib/render/renderRuby",(function(e,r,n,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),i=e("node_modules/office-viewer/lib/util/dom"),d=e("node_modules/office-viewer/lib/render/renderRun");r.renderRuby=function(e,r){var n,l,a,o,u=i.createElement("ruby");if(r.rubyBase){try{for(var f=t.__values(r.rubyBase.children),c=f.next();!c.done;c=f.next()){var v=c.value;u.appendChild(d.default(e,v))}}catch(e){n={error:e}}finally{try{c&&!c.done&&(l=f.return)&&l.call(f)}finally{if(n)throw n.error}}if(r.rt){var s=i.createElement("rp");s.innerText="(",u.appendChild(s);var y=i.createElement("rt");try{for(var p=t.__values(r.rt.children),b=p.next();!b.done;b=p.next()){v=b.value;y.appendChild(d.default(e,v))}}catch(e){a={error:e}}finally{try{b&&!b.done&&(o=p.return)&&o.call(p)}finally{if(a)throw a.error}}u.appendChild(y);var h=i.createElement("rp");h.innerText=")",u.appendChild(h)}}return u}}));
;/*!node_modules/office-viewer/lib/render/renderHyperLink.js*/
amis.define("node_modules/office-viewer/lib/render/renderHyperLink",(function(e,r,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),l=e("node_modules/office-viewer/lib/util/dom"),t=e("node_modules/office-viewer/lib/openxml/word/Run"),d=e("node_modules/office-viewer/lib/render/renderRun");r.renderHyperLink=function(e,r,n){var i,a,f=l.createElement("a");if(r.relation){var u=r.relation;u&&"External"===u.targetMode&&(f.href=u.target,f.target="_blank")}r.anchor&&(f.href="#"+r.anchor);try{for(var c=o.__values(r.children),s=c.next();!s.done;s=c.next()){var v=s.value;if(v instanceof t.Run){var _=d.default(e,v,n);l.appendChild(f,_)}}}catch(e){i={error:e}}finally{try{s&&!s.done&&(a=c.return)&&a.call(c)}finally{if(i)throw i.error}}return f}}));
;/*!node_modules/office-viewer/lib/render/renderBookmark.js*/
amis.define("node_modules/office-viewer/lib/render/renderBookmark",(function(e,r,n,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/util/dom");r.renderBookmarkStart=function(e,r){var n=r.name;if(n){var i=o.createElement("a");return i.name=n,i.id=n,i}return null}}));
;/*!node_modules/office-viewer/lib/render/renderInlineText.js*/
amis.define("node_modules/office-viewer/lib/render/renderInlineText",(function(e,r,o,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),d=e("node_modules/office-viewer/lib/util/dom"),l=e("node_modules/office-viewer/lib/openxml/word/Run"),f=e("node_modules/office-viewer/lib/openxml/word/Bookmark"),a=e("node_modules/office-viewer/lib/openxml/word/Hyperlink"),t=e("node_modules/office-viewer/lib/render/renderRun"),u=e("node_modules/office-viewer/lib/render/renderHyperLink"),s=e("node_modules/office-viewer/lib/render/renderBookmark");r.default=function(e,r,o){var n,c;try{for(var m=i.__values(r.children),v=m.next();!v.done;v=m.next()){var p=v.value;if(p instanceof l.Run)d.appendChild(o,t.default(e,p));else if(p instanceof f.BookmarkStart)d.appendChild(o,s.renderBookmarkStart(e,p));else if(p instanceof a.Hyperlink){var _=u.renderHyperLink(e,p);d.appendChild(o,_)}}}catch(e){n={error:e}}finally{try{v&&!v.done&&(c=m.return)&&c.call(m)}finally{if(n)throw n.error}}}}));
;/*!node_modules/office-viewer/lib/render/renderInstrText.js*/
amis.define("node_modules/office-viewer/lib/render/renderInstrText",(function(e,r,i,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),l=e("node_modules/office-viewer/lib/util/dom"),o=e("node_modules/office-viewer/lib/render/renderInlineText");r.renderInstrText=function(e,r){var i,n,d,s=r.text,a=l.createElement("span"),f=null===(d=e.currentParagraph)||void 0===d?void 0:d.fldSimples;if(f)try{for(var u=t.__values(f),c=u.next();!c.done;c=u.next()){var v=c.value;if(v.instr===s.trim()||s.startsWith(v.instr+" ")){o.default(e,v.inlineText,a);break}}}catch(e){i={error:e}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(i)throw i.error}}return a}}));
;/*!node_modules/office-viewer/lib/render/renderSym.js*/
amis.define("node_modules/office-viewer/lib/render/renderSym",(function(e,n,r,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/util/dom");n.renderSym=function(e,n){var r=o.createElement("span");return r.style.fontFamily=n.font,r.innerHTML="&#x".concat(n.char,";"),r}}));
;/*!node_modules/office-viewer/lib/util/autoSpace.js*/
amis.define("node_modules/office-viewer/lib/util/autoSpace",(function(t,e,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=/\p{Punctuation}/u,i=/\p{Separator}/u,a=/\p{Script=Han}|\p{Script=Katakana}|\p{Script=Hiragana}|\p{Script=Hangul}/u;e.cjkspace=function(t){var e,n,r=t.filter((function(t){return void 0!==t&&""!==t}));return n=function(t,e){return function(t,e){return a.test(t)?!(u.test(e)||i.test(e)||a.test(e)):a.test(e)&&!u.test(t)&&!i.test(t)}(t,e)?" ":""},(e=r).reduce((function(t,r,u){return t+(0!==u?n(r,e[u-1]):"")+r}),"")}}));
;/*!node_modules/office-viewer/lib/render/renderRun.js*/
amis.define("node_modules/office-viewer/lib/render/renderRun",(function(e,n,r,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),d=e("node_modules/office-viewer/lib/render/renderBr"),l=e("node_modules/office-viewer/lib/util/dom"),t=e("node_modules/office-viewer/lib/openxml/word/Run"),a=e("node_modules/office-viewer/lib/openxml/word/Break"),f=e("node_modules/office-viewer/lib/openxml/word/drawing/Drawing"),s=e("node_modules/office-viewer/lib/render/renderDrawing"),c=e("node_modules/office-viewer/lib/render/setElementStyle"),u=e("node_modules/office-viewer/lib/openxml/word/Tab"),m=e("node_modules/office-viewer/lib/render/renderTab"),p=e("node_modules/office-viewer/lib/render/renderPict"),v=e("node_modules/office-viewer/lib/openxml/word/Pict"),w=e("node_modules/office-viewer/lib/openxml/word/Ruby"),b=e("node_modules/office-viewer/lib/render/renderRuby"),x=e("node_modules/office-viewer/lib/openxml/word/InstrText"),_=e("node_modules/office-viewer/lib/render/renderInstrText"),h=e("node_modules/office-viewer/lib/openxml/word/Sym"),y=e("node_modules/office-viewer/lib/render/renderSym"),T=e("node_modules/office-viewer/lib/util/autoSpace"),C="variable";function g(e,n,r,i){var o;-1===r.indexOf("{{")?(null===(o=null==i?void 0:i.properties)||void 0===o?void 0:o.autoSpace)?e.textContent=T.cjkspace(r.split("")):e.textContent=r:(e.dataset.originText=r,e.classList.add(C),e.textContent=n.replaceText(r))}n.default=function(e,n,r){var i,T,C=l.createElement("span");if(e.addClass(C,"r"),c.setElementStyle(e,C,n.properties),1===n.children.length&&n.children[0]instanceof t.Text)g(C,e,n.children[0].text,r);else try{for(var S=o.__values(n.children),R=S.next();!R.done;R=S.next()){var E=R.value;if(E instanceof t.Text){var P=l.createElement("span");g(C,e,E.text,r),l.appendChild(C,P)}else if(E instanceof a.Break){var k=d.renderBr(E);l.appendChild(C,k)}else E instanceof f.Drawing?l.appendChild(C,s.renderDrawing(e,E)):E instanceof u.Tab?l.appendChild(C,m.renderTab(e,E)):E instanceof v.Pict?l.appendChild(C,p.renderPict(e,E)):E instanceof w.Ruby?l.appendChild(C,b.renderRuby(e,E)):E instanceof x.InstrText?l.appendChild(C,_.renderInstrText(e,E)):E instanceof h.Sym?l.appendChild(C,y.renderSym(e,E)):console.warn("unknown child",E)}}catch(e){i={error:e}}finally{try{R&&!R.done&&(T=S.return)&&T.call(S)}finally{if(i)throw i.error}}return C},n.updateVariableText=function(e){for(var n=e.rootElement.querySelectorAll(".".concat(C)),r=0;r<n.length;r++){var i=n[r],o=i.dataset.originText||"";i.textContent=e.replaceText(o)}}}));
;/*!node_modules/office-viewer/lib/render/renderNumbering.js*/
amis.define("node_modules/office-viewer/lib/render/renderNumbering",(function(e,r,n,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),i=e("node_modules/office-viewer/lib/util/dom"),u=e("node_modules/office-viewer/lib/openxml/Types"),o=e("node_modules/office-viewer/lib/render/setElementStyle");function a(e){var r={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},n="";for(var t in r)for(;e>=r[t];)n+=t,e-=r[t];return n}function s(e,r){switch(e){case u.ST_NumberFormat.decimal:return r.toString();case u.ST_NumberFormat.lowerLetter:return String.fromCharCode(96+r);case u.ST_NumberFormat.upperLetter:return String.fromCharCode(64+r);case u.ST_NumberFormat.lowerRoman:return a(r).toLowerCase();case u.ST_NumberFormat.upperRoman:return a(r).toUpperCase();case u.ST_NumberFormat.bullet:return"&bull;";default:return r.toString()}}r.renderNumbering=function(e,r,n){var t=r.numbering,a=n.numId;if(!a)return console.warn("renderNumbering: numId is empty"),null;if(!t)return console.warn("renderNumbering: numbering is empty"),null;var m=t.nums[a];if(!m)return console.warn("renderNumbering: num is empty"),null;var f=t.abstractNums[m.abstractNumId].lvls;m.lvlOverride&&(f=l.__assign(l.__assign({},f),m.lvlOverride.lvls));var d=f[n.ilvl];if(!d)return console.warn("renderNumbering: lvl is empty"),null;var b=n.ilvl,c=t.numData[a];if(c[b])for(var v in c[b]+=1,c)parseInt(v)>parseInt(b)&&(c[v]=0);else c[b]=d.start;for(var p=i.createElement("span"),_=d.lvlText,g=parseInt(b),S=[],N=0;N<=g;N++){var w=c[N];if(w){var T=s(f[N].numFmt,w);d.isLgl&&(T=String(w)),S.push(T)}}for(N=0;N<S.length;N++){var C=S[N];_=_.replace("%".concat(N+1),C)}if(o.setElementStyle(r,e,d.pPr),o.setElementStyle(r,p,d.rPr),d.numFmt!==u.ST_NumberFormat.bullet||r.renderOptions.bulletUseFont)p.innerText=_;else{var F="&bull;",y=_.charCodeAt(0).toString(16).padStart(4,"0");"f06e"===y?F="&#9632;":"f075"===y?F="&#9670;":"f0d8"===y&&(F="&#9658;"),p.innerHTML=F}return"space"===d.suff?p.innerHTML+=" ":"tab"===d.suff&&(p.innerHTML+="&emsp;"),p}}));
;/*!node_modules/office-viewer/lib/render/renderParagraph.js*/
amis.define("node_modules/office-viewer/lib/render/renderParagraph",(function(e,r,n,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),d=e("node_modules/office-viewer/lib/util/dom"),l=e("node_modules/office-viewer/lib/openxml/word/Run"),a=e("node_modules/office-viewer/lib/openxml/word/Bookmark"),f=e("node_modules/office-viewer/lib/openxml/word/Hyperlink"),t=e("node_modules/office-viewer/lib/render/renderRun"),s=e("node_modules/office-viewer/lib/render/renderHyperLink"),u=e("node_modules/office-viewer/lib/render/renderBookmark"),m=e("node_modules/office-viewer/lib/render/renderNumbering"),c=e("node_modules/office-viewer/lib/render/setElementStyle"),v=e("node_modules/office-viewer/lib/render/renderTab"),p=e("node_modules/office-viewer/lib/openxml/word/SmartTag"),b=e("node_modules/office-viewer/lib/render/renderInlineText");r.default=function(e,r,n){var o,_,w,y;void 0===n&&(n=!0),e.currentParagraph=r;var h=d.createElement("p");e.addClass(h,"p");var k=r.properties;if(c.setElementStyle(e,h,k),k.numPr&&d.appendChild(h,m.renderNumbering(h,e,k.numPr)),k.tabs)try{for(var x=i.__values(k.tabs),T=x.next();!T.done;T=x.next()){var g=T.value;d.appendChild(h,v.renderTab(e,g))}}catch(e){o={error:e}}finally{try{T&&!T.done&&(_=x.return)&&_.call(x)}finally{if(o)throw o.error}}try{for(var C=i.__values(r.children),H=C.next();!H.done;H=C.next()){var S=H.value;if(S instanceof l.Run)d.appendChild(h,t.default(e,S,r));else if(S instanceof a.BookmarkStart)d.appendChild(h,u.renderBookmarkStart(e,S));else if(S instanceof f.Hyperlink){var P=s.renderHyperLink(e,S,r);d.appendChild(h,P)}else S instanceof p.SmartTag&&b.default(e,S,h)}}catch(e){w={error:e}}finally{try{H&&!H.done&&(y=C.return)&&y.call(C)}finally{if(w)throw w.error}}return""===h.innerHTML&&n&&(h.innerHTML="&nbsp;"),h}}));
;/*!node_modules/office-viewer/lib/render/renderSection.js*/
amis.define("node_modules/office-viewer/lib/render/renderSection",(function(e,i,t,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=e("node_modules/office-viewer/lib/util/dom");i.renderSection=function(e,i){var t=r.createElement("section");t.style.position="relative";var n=i.properties,d=n.pageSize;if(d&&(e.renderOptions.ignoreWidth||(t.style.width=d.width),e.renderOptions.ignoreHeight||(t.style.height=d.height)),e.renderOptions.padding)t.style.padding=e.renderOptions.padding;else{var o=n.pageMargin;o&&(t.style.paddingLeft=o.left||"0",t.style.paddingRight=o.right||"0",t.style.paddingTop=o.top||"0",t.style.paddingBottom=o.bottom||"0")}return t}}));
;/*!node_modules/office-viewer/lib/render/renderStyle.js*/
amis.define("node_modules/office-viewer/lib/render/renderStyle",(function(e,n,t,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),o=e("node_modules/office-viewer/lib/openxml/Types"),a=e("node_modules/office-viewer/lib/util/dom");function l(e,n,t){var r="",c=t.tblPr,o=t.tcPr;if(c){var l=a.styleToText(c.cssStyle),d=a.styleToText(c.tcCSSStyle);if(r+="\n .".concat(e," .").concat(n," {\n  border-collapse: collapse;\n  ").concat(l,"\n }\n\n .").concat(e," .").concat(n," > tbody > tr > td {\n  ").concat(d,"\n }\n "),c.insideBorder){var i=c.insideBorder;i.H&&(r+="\n      .".concat(e," .").concat(n," > tbody > tr > td {\n        border-top: ").concat(i.H,";\n      }")),i.V&&(r+="\n      .".concat(e," .").concat(n," > tbody > tr > td {\n        border-left: ").concat(i.V,";\n      }"))}}if(o){var s=a.styleToText(o.cssStyle);r+="\n    .".concat(e," .").concat(n," > tbody > tr > td {\n     ").concat(s,"\n    }\n    ")}return r}function d(e,n,t){var r,c,l,d,i,s,y="",T=a.styleToText(null===(r=t.trPr)||void 0===r?void 0:r.cssStyle),b="";switch(n){case o.ST_TblStyleOverrideType.firstCol:b="enable-firstColumn";break;case o.ST_TblStyleOverrideType.lastCol:b="enable-lastColumn";break;case o.ST_TblStyleOverrideType.firstRow:b="enable-firstRow";break;case o.ST_TblStyleOverrideType.lastRow:b="enable-lastRow";break;case o.ST_TblStyleOverrideType.band1Horz:case o.ST_TblStyleOverrideType.band2Horz:b="enable-hBand";break;case o.ST_TblStyleOverrideType.band1Vert:case o.ST_TblStyleOverrideType.band2Vert:b="enable-vBand"}T&&(y+="\n    ".concat(e,".").concat(b," > tbody > tr.").concat(n,"{\n       ").concat(T,"\n    }\n    "));var v=a.styleToText(null===(c=t.tcPr)||void 0===c?void 0:c.cssStyle);if(v&&(y+="\n    ".concat(e,".").concat(b," > tbody > tr > td.").concat(n," {\n       ").concat(v,"\n    }\n    "),null===(l=t.tcPr)||void 0===l?void 0:l.insideBorder)){var S=null===(d=t.tcPr)||void 0===d?void 0:d.insideBorder;S.H&&(y+="\n          ".concat(e,".").concat(b," > tbody > tr > td.").concat(n," {\n            border-top: ").concat(S.H,";\n          }")),S.V&&("none"===S.V?y+="\n          ".concat(e,".").concat(b," > tbody > tr > td.").concat(n," {\n            border-left: none;\n            border-right: none;\n          }"):y+="\n          ".concat(e,".").concat(b," > tbody > tr > td.").concat(n," {\n            border-left: ").concat(S.V,";\n          }"))}var p=a.styleToText(null===(i=t.pPr)||void 0===i?void 0:i.cssStyle);p&&(y+="\n    ".concat(e,".").concat(b," > tbody > tr > td.").concat(n," > .p {\n       ").concat(p,"\n    }\n    "));var f=a.styleToText(null===(s=t.rPr)||void 0===s?void 0:s.cssStyle);return f&&(y+="\n    ".concat(e,".").concat(b," > tbody > tr > td.").concat(n," > .p > .r {\n       ").concat(f,"\n    }\n    ")),y}var i=new Set([o.ST_TblStyleOverrideType.wholeTable,o.ST_TblStyleOverrideType.band1Horz,o.ST_TblStyleOverrideType.band2Horz,o.ST_TblStyleOverrideType.band1Vert,o.ST_TblStyleOverrideType.band2Vert,o.ST_TblStyleOverrideType.firstCol,o.ST_TblStyleOverrideType.firstRow,o.ST_TblStyleOverrideType.lastCol,o.ST_TblStyleOverrideType.lastRow,o.ST_TblStyleOverrideType.neCell,o.ST_TblStyleOverrideType.nwCell,o.ST_TblStyleOverrideType.seCell,o.ST_TblStyleOverrideType.swCell]);function s(e,n,t){var r,o;if(!t)return"";var a="",l=".".concat(e," .").concat(n);try{for(var s=c.__values(i),y=s.next();!y.done;y=s.next()){var T=y.value;if(T in t)a+=d(l,T,t[T])}}catch(e){r={error:e}}finally{try{y&&!y.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return a}n.generateTableStyle=l,n.renderStyle=function(e){var n=a.createElement("style"),t=function(e){var n=e.styles.defaultStyle,t="";(null==n?void 0:n.pPr)&&(t=a.styleToText(n.pPr.cssStyle));var r="";(null==n?void 0:n.rPr)&&(r=a.styleToText(n.rPr.cssStyle));var c=e.getClassPrefix();return"\n  .".concat(e.wrapClassName," {\n\n  }\n\n  .").concat(e.wrapClassName," > article > section {\n    background: white;\n  }\n\n  /** docDefaults **/\n\n  .").concat(c," p {\n    margin: 0;\n    padding: 0;\n  }\n\n  .").concat(c," table {\n    border-spacing: 0;\n  }\n\n  .").concat(c," .").concat(c,"-p {\n    ").concat(t,"\n  }\n\n  .").concat(c," .").concat(c,"-r {\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    ").concat(r,"\n  }\n  ")}(e),r=function(e){var n=e.styles.styleMap,t=e.getClassPrefix(),r="";for(var c in n){var o=e.getStyleIdDisplayName(c),d=n[c],i=d.pPr,y="";if(i){var T=a.styleToText(i.cssStyle);y="\n      .".concat(t," .").concat(o," {\n        ").concat(T,"\n      }\n      ")}var b="";if(d.rPr){var v=a.styleToText(d.rPr.cssStyle);b="\n      .".concat(t," .").concat(o," > .r {\n        ").concat(v,"\n      }\n      ")}var S=l(t,o,d),p=s(t,o,d.tblStylePr);r+="\n    ".concat(y,"\n    ").concat(b,"\n    ").concat(S,"\n    ").concat(p,"\n    ")}return r}(e);return n.innerHTML="\n  ".concat(t,"\n\n  ").concat(r,"\n  "),n}}));
;/*!node_modules/office-viewer/lib/render/renderTable.js*/
amis.define("node_modules/office-viewer/lib/render/renderTable",(function(e,l,r,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),d=e("node_modules/office-viewer/lib/openxml/Types"),n=e("node_modules/office-viewer/lib/openxml/word/Paragraph"),o=e("node_modules/office-viewer/lib/openxml/word/Table"),i=e("node_modules/office-viewer/lib/util/dom"),s=e("node_modules/office-viewer/lib/render/renderParagraph"),c=e("node_modules/office-viewer/lib/render/renderStyle"),p=e("node_modules/office-viewer/lib/render/setElementStyle");function y(e,l,r,t,a,n,o){0===e&&0===l&&a.classList.add(d.ST_TblStyleOverrideType.nwCell),0===e&&l===t-1&&a.classList.add(d.ST_TblStyleOverrideType.neCell),e===r-1&&0===l&&a.classList.add(d.ST_TblStyleOverrideType.swCell),e===r-1&&l===t-1&&a.classList.add(d.ST_TblStyleOverrideType.seCell),0===e&&a.classList.add(d.ST_TblStyleOverrideType.firstRow),e===r-1&&a.classList.add(d.ST_TblStyleOverrideType.lastRow),0===l&&a.classList.add(d.ST_TblStyleOverrideType.firstCol),l===t-1&&a.classList.add(d.ST_TblStyleOverrideType.lastCol),v(e+1)&&a.classList.add(d.ST_TblStyleOverrideType.band1Horz),v(e+1)||a.classList.add(d.ST_TblStyleOverrideType.band2Horz),v(l+1)&&a.classList.add(d.ST_TblStyleOverrideType.band1Vert),v(l+1)||a.classList.add(d.ST_TblStyleOverrideType.band2Vert)}function v(e,l){return!(e%2)}l.default=function e(l,r){var t,d,v,f,b,S,T=document.createElement("table"),u=r.properties;if(u.tblCaption){var m=document.createElement("caption");m.textContent=u.tblCaption,T.appendChild(m)}if(u.tblLook)for(var _ in u.tblLook)"noHBand"===_?u.tblLook[_]||i.addClassName(T,"enable-hBand"):"noVBand"===_?u.tblLook[_]||i.addClassName(T,"enable-vBand"):u.tblLook[_]&&i.addClassName(T,"enable-"+_);p.setElementStyle(l,T,u);var w=l.genClassName();T.classList.add(w),l.appendStyle(c.generateTableStyle(l.getClassPrefix(),w,{tblPr:u}));var h=document.createElement("tbody");T.appendChild(h);var C=0;try{for(var L=a.__values(r.trs),O=L.next();!O.done;O=L.next()){var x=O.value,g=document.createElement("tr");h.appendChild(g);var E=0;try{for(var k=(v=void 0,a.__values(x.tcs)),B=k.next();!B.done;B=k.next()){var P=B.value,z=document.createElement("td");g.appendChild(z),y(C,E,r.trs.length,x.tcs.length,z,u.rowBandSize,u.colBandSize),x.properties.tcStyle&&i.setStyle(z,x.properties.tcStyle);var N=P.properties;p.setElementStyle(l,z,N),N.gridSpan&&(z.colSpan=N.gridSpan),N.rowSpan&&(z.rowSpan=N.rowSpan);var H=!1;try{for(var V=(b=void 0,a.__values(P.children)),R=V.next();!R.done;R=V.next()){var j=R.value;if(j instanceof n.Paragraph){var M=s.default(l,j,!H);i.appendChild(z,M)}else j instanceof o.Table?(H=!0,i.appendChild(z,e(l,j))):console.warn("unknown child type: "+j)}}catch(e){b={error:e}}finally{try{R&&!R.done&&(S=V.return)&&S.call(V)}finally{if(b)throw b.error}}N.rowSpan?E+=N.rowSpan:E++}}catch(e){v={error:e}}finally{try{B&&!B.done&&(f=k.return)&&f.call(k)}finally{if(v)throw v.error}}C++}}catch(e){t={error:e}}finally{try{O&&!O.done&&(d=L.return)&&d.call(L)}finally{if(t)throw t.error}}return T}}));
;/*!node_modules/office-viewer/lib/render/renderBody.js*/
amis.define("node_modules/office-viewer/lib/render/renderBody",(function(e,r,o,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),n=e("node_modules/office-viewer/lib/util/dom"),d=e("node_modules/office-viewer/lib/openxml/word/Paragraph"),a=e("node_modules/office-viewer/lib/openxml/word/Table"),f=e("node_modules/office-viewer/lib/openxml/word/Hyperlink"),t=e("node_modules/office-viewer/lib/render/renderParagraph"),c=e("node_modules/office-viewer/lib/render/renderSection"),u=e("node_modules/office-viewer/lib/render/renderTable");r.default=function(e,r,o){var l,s,v,p;try{for(var _=i.__values(o.sections),b=_.next();!b.done;b=_.next()){var m=b.value,w=c.renderSection(e,m);n.appendChild(r,w);try{for(var h=(v=void 0,i.__values(m.children)),y=h.next();!y.done;y=h.next()){var x=y.value;if(x instanceof d.Paragraph){var C=t.default(e,x);n.appendChild(w,C)}else x instanceof a.Table?n.appendChild(w,u.default(e,x)):f.Hyperlink}}catch(e){v={error:e}}finally{try{y&&!y.done&&(p=h.return)&&p.call(h)}finally{if(v)throw v.error}}n.appendChild(r,w)}}catch(e){l={error:e}}finally{try{b&&!b.done&&(s=_.return)&&s.call(_)}finally{if(l)throw l.error}}}}));
;/*!node_modules/office-viewer/lib/render/renderDocument.js*/
amis.define("node_modules/office-viewer/lib/render/renderDocument",(function(e,r,d,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/util/dom"),n=e("node_modules/office-viewer/lib/render/renderBody");r.default=function(e,r){var d=o.createElement("article");return n.default(e,d,r.body),d}}));
;/*!node_modules/office-viewer/lib/util/blob.js*/
amis.define("node_modules/office-viewer/lib/util/blob",(function(e,n,o,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.blobToDataURL=function(e){return new Promise((function(n,o){var r=new FileReader;r.onload=function(e){return n(r.result)},r.onerror=function(e){return o(r.error)},r.onabort=function(e){return o(new Error("Read aborted"))},r.readAsDataURL(e)}))},n.downloadBlob=function(e,n){void 0===n&&(n="file.txt");var o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=n,document.body.appendChild(r),r.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),document.body.removeChild(r)}}));
;/*!node_modules/office-viewer/lib/openxml/word/numbering/Lvl.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/numbering/Lvl",(function(e,r,l,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),i=e("node_modules/office-viewer/lib/openxml/word/Run"),n=e("node_modules/office-viewer/lib/OpenXML"),o=e("node_modules/office-viewer/lib/openxml/Types"),s=e("node_modules/office-viewer/lib/openxml/word/Paragraph"),c=function(){function e(){this.start=1,this.lvlText="%1.",this.isLgl=!1,this.lvlJc=o.ST_Jc.start,this.suff=o.ST_LevelSuffix.space}return e.fromXML=function(r,l){var a,o,c=new e;c.ilvl=l.getAttribute("w:ilvl");try{for(var u=t.__values(l.children),f=u.next();!f.done;f=u.next()){var v=f.value,d=v.tagName;switch(d){case"w:start":c.start=n.getValNumber(v);break;case"w:numFmt":c.numFmt=n.getVal(v);break;case"w:lvlText":c.lvlText=n.getVal(v);break;case"w:lvlJc":c.lvlJc=n.getVal(v);break;case"w:pPr":c.pPr=s.Paragraph.parseParagraphPr(r,v);break;case"w:rPr":c.rPr=i.Run.parseRunPr(r,v);break;case"w:isLgl":c.isLgl=n.getValBoolean(v);break;default:console.warn("Lvl: Unknown tag ",d,v)}}}catch(e){a={error:e}}finally{try{f&&!f.done&&(o=u.return)&&o.call(u)}finally{if(a)throw a.error}}return c},e}();r.Lvl=c}));
;/*!node_modules/office-viewer/lib/openxml/word/numbering/AbstractNum.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/numbering/AbstractNum",(function(e,t,l,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),n=e("node_modules/office-viewer/lib/openxml/word/numbering/Lvl"),o=e("node_modules/office-viewer/lib/OpenXML"),u=function(){function e(){this.lvls={}}return e.fromXML=function(t,l){var r,u,a=new e;a.abstractNumId=l.getAttribute("w:abstractNumId")||"",a.multiLevelType=l.getAttribute("w:multiLevelType");var v=l.getElementsByTagName("w:lvl");try{for(var m=i.__values(v),s=m.next();!s.done;s=m.next()){var f=s.value,d=f.getAttribute("w:ilvl")||"";a.lvls[d]=n.Lvl.fromXML(t,f)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(u=m.return)&&u.call(m)}finally{if(r)throw r.error}}var c=l.querySelector("multiLevelType");return c&&(a.multiLevelType=o.getVal(c)),a},e}();t.AbstractNum=u}));
;/*!node_modules/office-viewer/lib/openxml/word/numbering/Num.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/numbering/Num",(function(e,r,l,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),t=e("node_modules/office-viewer/lib/OpenXML"),i=e("node_modules/office-viewer/lib/openxml/word/numbering/Lvl"),u=function(){function e(){this.lvlOverride={lvls:{}}}return e.fromXML=function(r,l){var n,u,d=new e;d.numId=l.getAttribute("w:numId")||"";var v=l.querySelector("abstractNumId");v&&(d.abstractNumId=t.getVal(v));var a=l.querySelector("lvlOverride");if(a)try{for(var f=o.__values(a.children),m=f.next();!m.done;m=f.next()){var s=m.value,c=s.tagName;if("w:lvl"===c){var b=s.getAttribute("w:lvlId")||"";d.lvlOverride.lvls[b]=i.Lvl.fromXML(r,s)}else console.warn("Num: Unknown tag ",c,s)}}catch(e){n={error:e}}finally{try{m&&!m.done&&(u=f.return)&&u.call(f)}finally{if(n)throw n.error}}return d},e}();r.Num=u}));
;/*!node_modules/office-viewer/lib/openxml/word/numbering/Numbering.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/numbering/Numbering",(function(e,r,n,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),u=e("node_modules/office-viewer/lib/openxml/word/numbering/AbstractNum"),a=e("node_modules/office-viewer/lib/openxml/word/numbering/Num"),i=function(){function e(){this.abstractNums={},this.nums={},this.numData={}}return e.fromXML=function(r,n){var t,i,m,l,s=new e;try{for(var f=o.__values(n.getElementsByTagName("w:abstractNum")),d=f.next();!d.done;d=f.next()){var c=d.value,b=u.AbstractNum.fromXML(r,c);s.abstractNums[b.abstractNumId]=b}}catch(e){t={error:e}}finally{try{d&&!d.done&&(i=f.return)&&i.call(f)}finally{if(t)throw t.error}}try{for(var v=o.__values(n.getElementsByTagName("w:num")),w=v.next();!w.done;w=v.next()){var N=w.value,y=a.Num.fromXML(r,N);s.nums[y.numId]=y,s.numData[y.numId]={}}}catch(e){m={error:e}}finally{try{w&&!w.done&&(l=v.return)&&l.call(v)}finally{if(m)throw m.error}}return s},e}();r.Numbering=i}));
;/*!node_modules/office-viewer/lib/util/mergeRun.js*/
amis.define("node_modules/office-viewer/lib/util/mergeRun",(function(e,r,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),l=e("node_modules/office-viewer/lib/parse/parsePr");function i(e,r,t){var n=r?l.parsePr(e,r):{},a=t?l.parsePr(e,t):{};return JSON.stringify(n)===JSON.stringify(a)}function o(e,r){var t=e.getElementsByTagName("w:t")[0],n=r.getElementsByTagName("w:t")[0];if(t&&n){var a=n.textContent||"";t.textContent+=a||""}}function f(e){var r,t,n=e.tagName,l=e.children,i=!1,o=!1;try{for(var f=a.__values(l),u=f.next();!u.done;u=f.next()){var s=u.value;if("w:t"===s.tagName){i=!0,o="preserve"===s.getAttribute("xml:space");break}}}catch(e){r={error:e}}finally{try{u&&!u.done&&(t=f.return)&&t.call(f)}finally{if(r)throw r.error}}return"w:r"===n&&i&&!o}function u(e,r){var t,n,l,u,s=[],c=null;try{for(var v=a.__values(r.children),y=v.next();!y.done;y=v.next()){var d=y.value,m=d.tagName;if(f(d))if(c)i(e,c.getElementsByTagName("w:rPr")[0],d.getElementsByTagName("w:rPr")[0])?o(c,d):(c=d,s.push(d));else c=d,s.push(d);else"w:proofErr"!==m&&(c=null,s.push(d))}}catch(e){t={error:e}}finally{try{y&&!y.done&&(n=v.return)&&n.call(v)}finally{if(t)throw t.error}}r.innerHTML="";try{for(var g=a.__values(s),w=g.next();!w.done;w=g.next()){var h=w.value;r.appendChild(h)}}catch(e){l={error:e}}finally{try{w&&!w.done&&(u=g.return)&&u.call(g)}finally{if(l)throw l.error}}}r.canMerge=f,r.mergeRun=function(e,r){var t,n,l=r.getElementsByTagName("w:p");try{for(var i=a.__values(l),o=i.next();!o.done;o=i.next()){u(e,o.value)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},r.mergeRunInP=u}));
;/*!node_modules/office-viewer/lib/openxml/word/Section.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Section",(function(e,r,i,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),a=e("node_modules/office-viewer/lib/parse/parseSize"),n=function(){function e(){this.properties={},this.children=[]}return e.prototype.addChild=function(e){this.children.push(e)},e.parsePr=function(e){var r,i,t={};try{for(var n=o.__values(e.children),s=n.next();!s.done;s=n.next()){var l=s.value;switch(l.tagName){case"w:pgSz":t.pageSize={width:a.parseSize(l,"w:w"),height:a.parseSize(l,"w:h")};break;case"w:pgMar":t.pageMargin={left:a.parseSize(l,"w:left"),right:a.parseSize(l,"w:right"),top:a.parseSize(l,"w:top"),bottom:a.parseSize(l,"w:bottom"),header:a.parseSize(l,"w:header"),footer:a.parseSize(l,"w:footer"),gutter:a.parseSize(l,"w:gutter")}}}}catch(e){r={error:e}}finally{try{s&&!s.done&&(i=n.return)&&i.call(n)}finally{if(r)throw r.error}}return t},e}();r.Section=n}));
;/*!node_modules/office-viewer/lib/openxml/word/Body.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/Body",(function(e,o,r,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),t=e("node_modules/office-viewer/lib/openxml/word/Paragraph"),c=e("node_modules/office-viewer/lib/openxml/word/Section"),d=e("node_modules/office-viewer/lib/openxml/word/Table"),a=function(){function e(){this.sections=[],this.currentSection=new c.Section,this.sections.push(this.currentSection)}return e.prototype.addChild=function(e){this.currentSection.addChild(e)},e.prototype.addSection=function(e){this.currentSection.properties=e,this.currentSection=new c.Section,this.sections.push(this.currentSection)},e.fromXML=function(o,r){var n,a,s=new e;try{for(var l=i.__values(r.children),u=l.next();!u.done;u=l.next()){var f=u.value,h=f.tagName;switch(h){case"w:p":var w=t.Paragraph.fromXML(o,f);s.addChild(w);break;case"w:sectPr":s.addSection(c.Section.parsePr(f));break;case"w:tbl":var m=d.Table.fromXML(o,f);s.addChild(m);break;case"w:bookmarkEnd":break;default:console.warn("Body.fromXML Unknown key",h,f)}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}return s},e}();o.Body=a}));
;/*!node_modules/office-viewer/lib/openxml/word/WDocument.js*/
amis.define("node_modules/office-viewer/lib/openxml/word/WDocument",(function(e,o,r,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),n=e("node_modules/office-viewer/lib/parse/parseColor"),a=e("node_modules/office-viewer/lib/openxml/word/Body"),i=function(){function e(){}return e.fromXML=function(o,r){var t,i,c=new e,d=r.querySelector("body");d&&(c.body=a.Body.fromXML(o,d));var s=r.querySelector("background");if(s){var u={};try{for(var m=l.__values(s.attributes),f=m.next();!f.done;f=m.next()){switch(f.value.name){case"w:color":u.color=n.parseColorAttr(o,s,"w:color");break;case"w:themeColor":u.themeColor=n.parseColorAttr(o,s,"w:themeColor");break;case"w:themeShade":u.themeShade=n.parseColorAttr(o,s,"w:themeShade");break;case"w:themeTint":u.themeTint=n.parseColorAttr(o,s,"w:themeTint")}}}catch(e){t={error:e}}finally{try{f&&!f.done&&(i=m.return)&&i.call(m)}finally{if(t)throw t.error}}}return c},e}();o.WDocument=i}));
;/*!node_modules/fflate/lib/worker.cjs*/
amis.define('node_modules/fflate/lib/worker.cjs', function(require, exports, module, define) {

  "use strict";
  var ch2 = {};
  exports["default"] = (function (c, id, msg, transfer, cb) {
      var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
          c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
      ], { type: 'text/javascript' }))));
      w.onmessage = function (e) {
          var d = e.data, ed = d.$e$;
          if (ed) {
              var err = new Error(ed[0]);
              err['code'] = ed[1];
              err.stack = ed[2];
              cb(err, null);
          }
          else
              cb(null, d);
      };
      w.postMessage(msg, transfer);
      return w;
  });
  

});

;/*!node_modules/fflate/lib/index.cjs*/
amis.define('node_modules/fflate/lib/index.cjs', function(require, exports, module, define) {

  "use strict";
  // DEFLATE is a complex format; to read this code, you should probably check the RFC first:
  // https://tools.ietf.org/html/rfc1951
  // You may also wish to take a look at the guide I made about this program:
  // https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
  // Some of the following code is similar to that of UZIP.js:
  // https://github.com/photopea/UZIP.js
  // However, the vast majority of the codebase has diverged from UZIP.js to increase performance and reduce bundle size.
  // Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
  // is better for memory in most engines (I *think*).
  var node_worker_1 = require("node_modules/fflate/lib/worker.cjs");
  // aliases for shorter compressed code (most minifers don't do this)
  var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
  // fixed length extra bits
  var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
  // fixed distance extra bits
  // see fleb note
  var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
  // code length index map
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  // get base, reverse index map from extra bits
  var freb = function (eb, start) {
      var b = new u16(31);
      for (var i = 0; i < 31; ++i) {
          b[i] = start += 1 << eb[i - 1];
      }
      // numbers here are at max 18 bits
      var r = new u32(b[30]);
      for (var i = 1; i < 30; ++i) {
          for (var j = b[i]; j < b[i + 1]; ++j) {
              r[j] = ((j - b[i]) << 5) | i;
          }
      }
      return [b, r];
  };
  var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
  // we can ignore the fact that the other numbers are wrong; they never happen anyway
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
  // map of value to reverse (assuming 16 bits)
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
      // reverse table algorithm from SO
      var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
      x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
      x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
      rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
  }
  // create huffman tree from u8 "map": index -> code length for code index
  // mb (max bits) must be at most 15
  // TODO: optimize/split up?
  var hMap = (function (cd, mb, r) {
      var s = cd.length;
      // index
      var i = 0;
      // u16 "map": index -> # of codes with bit length = index
      var l = new u16(mb);
      // length of cd must be 288 (total # of codes)
      for (; i < s; ++i) {
          if (cd[i])
              ++l[cd[i] - 1];
      }
      // u16 "map": index -> minimum code for bit length = index
      var le = new u16(mb);
      for (i = 0; i < mb; ++i) {
          le[i] = (le[i - 1] + l[i - 1]) << 1;
      }
      var co;
      if (r) {
          // u16 "map": index -> number of actual bits, symbol for code
          co = new u16(1 << mb);
          // bits to remove for reverser
          var rvb = 15 - mb;
          for (i = 0; i < s; ++i) {
              // ignore 0 lengths
              if (cd[i]) {
                  // num encoding both symbol and bits read
                  var sv = (i << 4) | cd[i];
                  // free bits
                  var r_1 = mb - cd[i];
                  // start value
                  var v = le[cd[i] - 1]++ << r_1;
                  // m is end value
                  for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                      // every 16 bit value starting with the code yields the same result
                      co[rev[v] >>> rvb] = sv;
                  }
              }
          }
      }
      else {
          co = new u16(s);
          for (i = 0; i < s; ++i) {
              if (cd[i]) {
                  co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
              }
          }
      }
      return co;
  });
  // fixed length tree
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
      flt[i] = 8;
  for (var i = 144; i < 256; ++i)
      flt[i] = 9;
  for (var i = 256; i < 280; ++i)
      flt[i] = 7;
  for (var i = 280; i < 288; ++i)
      flt[i] = 8;
  // fixed distance tree
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
      fdt[i] = 5;
  // fixed length map
  var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
  // fixed distance map
  var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
  // find max of array
  var max = function (a) {
      var m = a[0];
      for (var i = 1; i < a.length; ++i) {
          if (a[i] > m)
              m = a[i];
      }
      return m;
  };
  // read d, starting at bit p and mask with m
  var bits = function (d, p, m) {
      var o = (p / 8) | 0;
      return ((d[o] | (d[o + 1] << 8)) >> (p & 7)) & m;
  };
  // read d, starting at bit p continuing for at least 16 bits
  var bits16 = function (d, p) {
      var o = (p / 8) | 0;
      return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >> (p & 7));
  };
  // get end of byte
  var shft = function (p) { return ((p + 7) / 8) | 0; };
  // typed array slice - allows garbage collector to free original reference,
  // while being more compatible than .slice
  var slc = function (v, s, e) {
      if (s == null || s < 0)
          s = 0;
      if (e == null || e > v.length)
          e = v.length;
      // can't use .constructor in case user-supplied
      var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s);
      n.set(v.subarray(s, e));
      return n;
  };
  /**
   * Codes for errors generated within this library
   */
  exports.FlateErrorCode = {
      UnexpectedEOF: 0,
      InvalidBlockType: 1,
      InvalidLengthLiteral: 2,
      InvalidDistance: 3,
      StreamFinished: 4,
      NoStreamHandler: 5,
      InvalidHeader: 6,
      NoCallback: 7,
      InvalidUTF8: 8,
      ExtraFieldTooLong: 9,
      InvalidDate: 10,
      FilenameTooLong: 11,
      StreamFinishing: 12,
      InvalidZipData: 13,
      UnknownCompressionMethod: 14
  };
  // error codes
  var ec = [
      'unexpected EOF',
      'invalid block type',
      'invalid length/literal',
      'invalid distance',
      'stream finished',
      'no stream handler',
      ,
      'no callback',
      'invalid UTF-8 data',
      'extra field too long',
      'date not in range 1980-2099',
      'filename too long',
      'stream finishing',
      'invalid zip data'
      // determined by unknown compression method
  ];
  ;
  var err = function (ind, msg, nt) {
      var e = new Error(msg || ec[ind]);
      e.code = ind;
      if (Error.captureStackTrace)
          Error.captureStackTrace(e, err);
      if (!nt)
          throw e;
      return e;
  };
  // expands raw DEFLATE data
  var inflt = function (dat, buf, st) {
      // source length
      var sl = dat.length;
      if (!sl || (st && st.f && !st.l))
          return buf || new u8(0);
      // have to estimate size
      var noBuf = !buf || st;
      // no state
      var noSt = !st || st.i;
      if (!st)
          st = {};
      // Assumes roughly 33% compression ratio average
      if (!buf)
          buf = new u8(sl * 3);
      // ensure buffer can fit at least l elements
      var cbuf = function (l) {
          var bl = buf.length;
          // need to increase size to fit
          if (l > bl) {
              // Double or set to necessary, whichever is greater
              var nbuf = new u8(Math.max(bl * 2, l));
              nbuf.set(buf);
              buf = nbuf;
          }
      };
      //  last chunk         bitpos           bytes
      var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
      // total bits
      var tbts = sl * 8;
      do {
          if (!lm) {
              // BFINAL - this is only 1 when last chunk is next
              final = bits(dat, pos, 1);
              // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
              var type = bits(dat, pos + 1, 3);
              pos += 3;
              if (!type) {
                  // go to end of byte boundary
                  var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                  if (t > sl) {
                      if (noSt)
                          err(0);
                      break;
                  }
                  // ensure size
                  if (noBuf)
                      cbuf(bt + l);
                  // Copy over uncompressed data
                  buf.set(dat.subarray(s, t), bt);
                  // Get new bitpos, update byte count
                  st.b = bt += l, st.p = pos = t * 8, st.f = final;
                  continue;
              }
              else if (type == 1)
                  lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
              else if (type == 2) {
                  //  literal                            lengths
                  var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                  var tl = hLit + bits(dat, pos + 5, 31) + 1;
                  pos += 14;
                  // length+distance tree
                  var ldt = new u8(tl);
                  // code length tree
                  var clt = new u8(19);
                  for (var i = 0; i < hcLen; ++i) {
                      // use index map to get real code
                      clt[clim[i]] = bits(dat, pos + i * 3, 7);
                  }
                  pos += hcLen * 3;
                  // code lengths bits
                  var clb = max(clt), clbmsk = (1 << clb) - 1;
                  // code lengths map
                  var clm = hMap(clt, clb, 1);
                  for (var i = 0; i < tl;) {
                      var r = clm[bits(dat, pos, clbmsk)];
                      // bits read
                      pos += r & 15;
                      // symbol
                      var s = r >>> 4;
                      // code length to copy
                      if (s < 16) {
                          ldt[i++] = s;
                      }
                      else {
                          //  copy   count
                          var c = 0, n = 0;
                          if (s == 16)
                              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                          else if (s == 17)
                              n = 3 + bits(dat, pos, 7), pos += 3;
                          else if (s == 18)
                              n = 11 + bits(dat, pos, 127), pos += 7;
                          while (n--)
                              ldt[i++] = c;
                      }
                  }
                  //    length tree                 distance tree
                  var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                  // max length bits
                  lbt = max(lt);
                  // max dist bits
                  dbt = max(dt);
                  lm = hMap(lt, lbt, 1);
                  dm = hMap(dt, dbt, 1);
              }
              else
                  err(1);
              if (pos > tbts) {
                  if (noSt)
                      err(0);
                  break;
              }
          }
          // Make sure the buffer can hold this + the largest possible addition
          // Maximum chunk size (practically, theoretically infinite) is 2^17;
          if (noBuf)
              cbuf(bt + 131072);
          var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
          var lpos = pos;
          for (;; lpos = pos) {
              // bits read, code
              var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
              pos += c & 15;
              if (pos > tbts) {
                  if (noSt)
                      err(0);
                  break;
              }
              if (!c)
                  err(2);
              if (sym < 256)
                  buf[bt++] = sym;
              else if (sym == 256) {
                  lpos = pos, lm = null;
                  break;
              }
              else {
                  var add = sym - 254;
                  // no extra bits needed if less
                  if (sym > 264) {
                      // index
                      var i = sym - 257, b = fleb[i];
                      add = bits(dat, pos, (1 << b) - 1) + fl[i];
                      pos += b;
                  }
                  // dist
                  var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                  if (!d)
                      err(3);
                  pos += d & 15;
                  var dt = fd[dsym];
                  if (dsym > 3) {
                      var b = fdeb[dsym];
                      dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                  }
                  if (pos > tbts) {
                      if (noSt)
                          err(0);
                      break;
                  }
                  if (noBuf)
                      cbuf(bt + 131072);
                  var end = bt + add;
                  for (; bt < end; bt += 4) {
                      buf[bt] = buf[bt - dt];
                      buf[bt + 1] = buf[bt + 1 - dt];
                      buf[bt + 2] = buf[bt + 2 - dt];
                      buf[bt + 3] = buf[bt + 3 - dt];
                  }
                  bt = end;
              }
          }
          st.l = lm, st.p = lpos, st.b = bt, st.f = final;
          if (lm)
              final = 1, st.m = lbt, st.d = dm, st.n = dbt;
      } while (!final);
      return bt == buf.length ? buf : slc(buf, 0, bt);
  };
  // starting at p, write the minimum number of bits that can hold v to d
  var wbits = function (d, p, v) {
      v <<= p & 7;
      var o = (p / 8) | 0;
      d[o] |= v;
      d[o + 1] |= v >>> 8;
  };
  // starting at p, write the minimum number of bits (>8) that can hold v to d
  var wbits16 = function (d, p, v) {
      v <<= p & 7;
      var o = (p / 8) | 0;
      d[o] |= v;
      d[o + 1] |= v >>> 8;
      d[o + 2] |= v >>> 16;
  };
  // creates code lengths from a frequency table
  var hTree = function (d, mb) {
      // Need extra info to make a tree
      var t = [];
      for (var i = 0; i < d.length; ++i) {
          if (d[i])
              t.push({ s: i, f: d[i] });
      }
      var s = t.length;
      var t2 = t.slice();
      if (!s)
          return [et, 0];
      if (s == 1) {
          var v = new u8(t[0].s + 1);
          v[t[0].s] = 1;
          return [v, 1];
      }
      t.sort(function (a, b) { return a.f - b.f; });
      // after i2 reaches last ind, will be stopped
      // freq must be greater than largest possible number of symbols
      t.push({ s: -1, f: 25001 });
      var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
      t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
      // efficient algorithm from UZIP.js
      // i0 is lookbehind, i2 is lookahead - after processing two low-freq
      // symbols that combined have high freq, will start processing i2 (high-freq,
      // non-composite) symbols instead
      // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
      while (i1 != s - 1) {
          l = t[t[i0].f < t[i2].f ? i0++ : i2++];
          r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
          t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
      }
      var maxSym = t2[0].s;
      for (var i = 1; i < s; ++i) {
          if (t2[i].s > maxSym)
              maxSym = t2[i].s;
      }
      // code lengths
      var tr = new u16(maxSym + 1);
      // max bits in tree
      var mbt = ln(t[i1 - 1], tr, 0);
      if (mbt > mb) {
          // more algorithms from UZIP.js
          // TODO: find out how this code works (debt)
          //  ind    debt
          var i = 0, dt = 0;
          //    left            cost
          var lft = mbt - mb, cst = 1 << lft;
          t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
          for (; i < s; ++i) {
              var i2_1 = t2[i].s;
              if (tr[i2_1] > mb) {
                  dt += cst - (1 << (mbt - tr[i2_1]));
                  tr[i2_1] = mb;
              }
              else
                  break;
          }
          dt >>>= lft;
          while (dt > 0) {
              var i2_2 = t2[i].s;
              if (tr[i2_2] < mb)
                  dt -= 1 << (mb - tr[i2_2]++ - 1);
              else
                  ++i;
          }
          for (; i >= 0 && dt; --i) {
              var i2_3 = t2[i].s;
              if (tr[i2_3] == mb) {
                  --tr[i2_3];
                  ++dt;
              }
          }
          mbt = mb;
      }
      return [new u8(tr), mbt];
  };
  // get the max length and assign length codes
  var ln = function (n, l, d) {
      return n.s == -1
          ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
          : (l[n.s] = d);
  };
  // length codes generation
  var lc = function (c) {
      var s = c.length;
      // Note that the semicolon was intentional
      while (s && !c[--s])
          ;
      var cl = new u16(++s);
      //  ind      num         streak
      var cli = 0, cln = c[0], cls = 1;
      var w = function (v) { cl[cli++] = v; };
      for (var i = 1; i <= s; ++i) {
          if (c[i] == cln && i != s)
              ++cls;
          else {
              if (!cln && cls > 2) {
                  for (; cls > 138; cls -= 138)
                      w(32754);
                  if (cls > 2) {
                      w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                      cls = 0;
                  }
              }
              else if (cls > 3) {
                  w(cln), --cls;
                  for (; cls > 6; cls -= 6)
                      w(8304);
                  if (cls > 2)
                      w(((cls - 3) << 5) | 8208), cls = 0;
              }
              while (cls--)
                  w(cln);
              cls = 1;
              cln = c[i];
          }
      }
      return [cl.subarray(0, cli), s];
  };
  // calculate the length of output from tree, code lengths
  var clen = function (cf, cl) {
      var l = 0;
      for (var i = 0; i < cl.length; ++i)
          l += cf[i] * cl[i];
      return l;
  };
  // writes a fixed block
  // returns the new bit pos
  var wfblk = function (out, pos, dat) {
      // no need to write 00 as type: TypedArray defaults to 0
      var s = dat.length;
      var o = shft(pos + 2);
      out[o] = s & 255;
      out[o + 1] = s >>> 8;
      out[o + 2] = out[o] ^ 255;
      out[o + 3] = out[o + 1] ^ 255;
      for (var i = 0; i < s; ++i)
          out[o + i + 4] = dat[i];
      return (o + 4 + s) * 8;
  };
  // writes a block
  var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
      wbits(out, p++, final);
      ++lf[256];
      var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
      var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
      var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
      var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
      var lcfreq = new u16(19);
      for (var i = 0; i < lclt.length; ++i)
          lcfreq[lclt[i] & 31]++;
      for (var i = 0; i < lcdt.length; ++i)
          lcfreq[lcdt[i] & 31]++;
      var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
      var nlcc = 19;
      for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
          ;
      var flen = (bl + 5) << 3;
      var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
      var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
      if (flen <= ftlen && flen <= dtlen)
          return wfblk(out, p, dat.subarray(bs, bs + bl));
      var lm, ll, dm, dl;
      wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
      if (dtlen < ftlen) {
          lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
          var llm = hMap(lct, mlcb, 0);
          wbits(out, p, nlc - 257);
          wbits(out, p + 5, ndc - 1);
          wbits(out, p + 10, nlcc - 4);
          p += 14;
          for (var i = 0; i < nlcc; ++i)
              wbits(out, p + 3 * i, lct[clim[i]]);
          p += 3 * nlcc;
          var lcts = [lclt, lcdt];
          for (var it = 0; it < 2; ++it) {
              var clct = lcts[it];
              for (var i = 0; i < clct.length; ++i) {
                  var len = clct[i] & 31;
                  wbits(out, p, llm[len]), p += lct[len];
                  if (len > 15)
                      wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
              }
          }
      }
      else {
          lm = flm, ll = flt, dm = fdm, dl = fdt;
      }
      for (var i = 0; i < li; ++i) {
          if (syms[i] > 255) {
              var len = (syms[i] >>> 18) & 31;
              wbits16(out, p, lm[len + 257]), p += ll[len + 257];
              if (len > 7)
                  wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
              var dst = syms[i] & 31;
              wbits16(out, p, dm[dst]), p += dl[dst];
              if (dst > 3)
                  wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
          }
          else {
              wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
          }
      }
      wbits16(out, p, lm[256]);
      return p + ll[256];
  };
  // deflate options (nice << 13) | chain
  var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
  // empty
  var et = /*#__PURE__*/ new u8(0);
  // compresses data into a raw DEFLATE buffer
  var dflt = function (dat, lvl, plvl, pre, post, lst) {
      var s = dat.length;
      var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7000)) + post);
      // writing to this writes to the output buffer
      var w = o.subarray(pre, o.length - post);
      var pos = 0;
      if (!lvl || s < 8) {
          for (var i = 0; i <= s; i += 65535) {
              // end
              var e = i + 65535;
              if (e >= s) {
                  // write final block
                  w[pos >> 3] = lst;
              }
              pos = wfblk(w, pos + 1, dat.subarray(i, e));
          }
      }
      else {
          var opt = deo[lvl - 1];
          var n = opt >>> 13, c = opt & 8191;
          var msk_1 = (1 << plvl) - 1;
          //    prev 2-byte val map    curr 2-byte val map
          var prev = new u16(32768), head = new u16(msk_1 + 1);
          var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
          var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
          // 24576 is an arbitrary number of maximum symbols per block
          // 424 buffer for last block
          var syms = new u32(25000);
          // length/literal freq   distance freq
          var lf = new u16(288), df = new u16(32);
          //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
          var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
          for (; i < s; ++i) {
              // hash value
              // deopt when i > s - 3 - at end, deopt acceptable
              var hv = hsh(i);
              // index mod 32768    previous index mod
              var imod = i & 32767, pimod = head[hv];
              prev[imod] = pimod;
              head[hv] = imod;
              // We always should modify head and prev, but only add symbols if
              // this data is not yet processed ("wait" for wait index)
              if (wi <= i) {
                  // bytes remaining
                  var rem = s - i;
                  if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                      pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                      li = lc_1 = eb = 0, bs = i;
                      for (var j = 0; j < 286; ++j)
                          lf[j] = 0;
                      for (var j = 0; j < 30; ++j)
                          df[j] = 0;
                  }
                  //  len    dist   chain
                  var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                  if (rem > 2 && hv == hsh(i - dif)) {
                      var maxn = Math.min(n, rem) - 1;
                      var maxd = Math.min(32767, i);
                      // max possible length
                      // not capped at dif because decompressors implement "rolling" index population
                      var ml = Math.min(258, rem);
                      while (dif <= maxd && --ch_1 && imod != pimod) {
                          if (dat[i + l] == dat[i + l - dif]) {
                              var nl = 0;
                              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                  ;
                              if (nl > l) {
                                  l = nl, d = dif;
                                  // break out early when we reach "nice" (we are satisfied enough)
                                  if (nl > maxn)
                                      break;
                                  // now, find the rarest 2-byte sequence within this
                                  // length of literals and search for that instead.
                                  // Much faster than just using the start
                                  var mmd = Math.min(dif, nl - 2);
                                  var md = 0;
                                  for (var j = 0; j < mmd; ++j) {
                                      var ti = (i - dif + j + 32768) & 32767;
                                      var pti = prev[ti];
                                      var cd = (ti - pti + 32768) & 32767;
                                      if (cd > md)
                                          md = cd, pimod = ti;
                                  }
                              }
                          }
                          // check the previous match
                          imod = pimod, pimod = prev[imod];
                          dif += (imod - pimod + 32768) & 32767;
                      }
                  }
                  // d will be nonzero only when a match was found
                  if (d) {
                      // store both dist and len data in one Uint32
                      // Make sure this is recognized as a len/dist with 28th bit (2^28)
                      syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                      var lin = revfl[l] & 31, din = revfd[d] & 31;
                      eb += fleb[lin] + fdeb[din];
                      ++lf[257 + lin];
                      ++df[din];
                      wi = i + l;
                      ++lc_1;
                  }
                  else {
                      syms[li++] = dat[i];
                      ++lf[dat[i]];
                  }
              }
          }
          pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
          // this is the easiest way to avoid needing to maintain state
          if (!lst && pos & 7)
              pos = wfblk(w, pos + 1, et);
      }
      return slc(o, 0, pre + shft(pos) + post);
  };
  // CRC32 table
  var crct = /*#__PURE__*/ (function () {
      var t = new Int32Array(256);
      for (var i = 0; i < 256; ++i) {
          var c = i, k = 9;
          while (--k)
              c = ((c & 1) && -306674912) ^ (c >>> 1);
          t[i] = c;
      }
      return t;
  })();
  // CRC32
  var crc = function () {
      var c = -1;
      return {
          p: function (d) {
              // closures have awful performance
              var cr = c;
              for (var i = 0; i < d.length; ++i)
                  cr = crct[(cr & 255) ^ d[i]] ^ (cr >>> 8);
              c = cr;
          },
          d: function () { return ~c; }
      };
  };
  // Alder32
  var adler = function () {
      var a = 1, b = 0;
      return {
          p: function (d) {
              // closures have awful performance
              var n = a, m = b;
              var l = d.length | 0;
              for (var i = 0; i != l;) {
                  var e = Math.min(i + 2655, l);
                  for (; i < e; ++i)
                      m += n += d[i];
                  n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
              }
              a = n, b = m;
          },
          d: function () {
              a %= 65521, b %= 65521;
              return (a & 255) << 24 | (a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8);
          }
      };
  };
  ;
  // deflate with opts
  var dopt = function (dat, opt, pre, post, st) {
      return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
  };
  // Walmart object spread
  var mrg = function (a, b) {
      var o = {};
      for (var k in a)
          o[k] = a[k];
      for (var k in b)
          o[k] = b[k];
      return o;
  };
  // worker clone
  // This is possibly the craziest part of the entire codebase, despite how simple it may seem.
  // The only parameter to this function is a closure that returns an array of variables outside of the function scope.
  // We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
  // We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
  // The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
  // This took me three weeks to figure out how to do.
  var wcln = function (fn, fnStr, td) {
      var dt = fn();
      var st = fn.toString();
      var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/\s+/g, '').split(',');
      for (var i = 0; i < dt.length; ++i) {
          var v = dt[i], k = ks[i];
          if (typeof v == 'function') {
              fnStr += ';' + k + '=';
              var st_1 = v.toString();
              if (v.prototype) {
                  // for global objects
                  if (st_1.indexOf('[native code]') != -1) {
                      var spInd = st_1.indexOf(' ', 8) + 1;
                      fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                  }
                  else {
                      fnStr += st_1;
                      for (var t in v.prototype)
                          fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                  }
              }
              else
                  fnStr += st_1;
          }
          else
              td[k] = v;
      }
      return [fnStr, td];
  };
  var ch = [];
  // clone bufs
  var cbfs = function (v) {
      var tl = [];
      for (var k in v) {
          if (v[k].buffer) {
              tl.push((v[k] = new v[k].constructor(v[k])).buffer);
          }
      }
      return tl;
  };
  // use a worker to execute code
  var wrkr = function (fns, init, id, cb) {
      var _a;
      if (!ch[id]) {
          var fnStr = '', td_1 = {}, m = fns.length - 1;
          for (var i = 0; i < m; ++i)
              _a = wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
          ch[id] = wcln(fns[m], fnStr, td_1);
      }
      var td = mrg({}, ch[id][1]);
      return node_worker_1["default"](ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, cbfs(td), cb);
  };
  // base async inflate fn
  var bInflt = function () { return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gu8]; };
  var bDflt = function () { return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf]; };
  // gzip extra
  var gze = function () { return [gzh, gzhl, wbytes, crc, crct]; };
  // gunzip extra
  var guze = function () { return [gzs, gzl]; };
  // zlib extra
  var zle = function () { return [zlh, wbytes, adler]; };
  // unzlib extra
  var zule = function () { return [zlv]; };
  // post buf
  var pbf = function (msg) { return postMessage(msg, [msg.buffer]); };
  // get u8
  var gu8 = function (o) { return o && o.size && new u8(o.size); };
  // async helper
  var cbify = function (dat, opts, fns, init, id, cb) {
      var w = wrkr(fns, init, id, function (err, dat) {
          w.terminate();
          cb(err, dat);
      });
      w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
      return function () { w.terminate(); };
  };
  // auto stream
  var astrm = function (strm) {
      strm.ondata = function (dat, final) { return postMessage([dat, final], [dat.buffer]); };
      return function (ev) { return strm.push(ev.data[0], ev.data[1]); };
  };
  // async stream attach
  var astrmify = function (fns, strm, opts, init, id) {
      var t;
      var w = wrkr(fns, init, id, function (err, dat) {
          if (err)
              w.terminate(), strm.ondata.call(strm, err);
          else {
              if (dat[1])
                  w.terminate();
              strm.ondata.call(strm, err, dat[0], dat[1]);
          }
      });
      w.postMessage(opts);
      strm.push = function (d, f) {
          if (!strm.ondata)
              err(5);
          if (t)
              strm.ondata(err(4, 0, 1), null, !!f);
          w.postMessage([d, t = f], [d.buffer]);
      };
      strm.terminate = function () { w.terminate(); };
  };
  // read 2 bytes
  var b2 = function (d, b) { return d[b] | (d[b + 1] << 8); };
  // read 4 bytes
  var b4 = function (d, b) { return (d[b] | (d[b + 1] << 8) | (d[b + 2] << 16) | (d[b + 3] << 24)) >>> 0; };
  var b8 = function (d, b) { return b4(d, b) + (b4(d, b + 4) * 4294967296); };
  // write bytes
  var wbytes = function (d, b, v) {
      for (; v; ++b)
          d[b] = v, v >>>= 8;
  };
  // gzip header
  var gzh = function (c, o) {
      var fn = o.filename;
      c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
      if (o.mtime != 0)
          wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
      if (fn) {
          c[3] = 8;
          for (var i = 0; i <= fn.length; ++i)
              c[i + 10] = fn.charCodeAt(i);
      }
  };
  // gzip footer: -8 to -4 = CRC, -4 to -0 is length
  // gzip start
  var gzs = function (d) {
      if (d[0] != 31 || d[1] != 139 || d[2] != 8)
          err(6, 'invalid gzip data');
      var flg = d[3];
      var st = 10;
      if (flg & 4)
          st += d[10] | (d[11] << 8) + 2;
      for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
          ;
      return st + (flg & 2);
  };
  // gzip length
  var gzl = function (d) {
      var l = d.length;
      return ((d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16) | (d[l - 1] << 24)) >>> 0;
  };
  // gzip header length
  var gzhl = function (o) { return 10 + ((o.filename && (o.filename.length + 1)) || 0); };
  // zlib header
  var zlh = function (c, o) {
      var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
      c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
  };
  // zlib valid
  var zlv = function (d) {
      if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
          err(6, 'invalid zlib data');
      if (d[1] & 32)
          err(6, 'invalid zlib data: preset dictionaries not supported');
  };
  function AsyncCmpStrm(opts, cb) {
      if (!cb && typeof opts == 'function')
          cb = opts, opts = {};
      this.ondata = cb;
      return opts;
  }
  // zlib footer: -4 to -0 is Adler32
  /**
   * Streaming DEFLATE compression
   */
  var Deflate = /*#__PURE__*/ (function () {
      function Deflate(opts, cb) {
          if (!cb && typeof opts == 'function')
              cb = opts, opts = {};
          this.ondata = cb;
          this.o = opts || {};
      }
      Deflate.prototype.p = function (c, f) {
          this.ondata(dopt(c, this.o, 0, 0, !f), f);
      };
      /**
       * Pushes a chunk to be deflated
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Deflate.prototype.push = function (chunk, final) {
          if (!this.ondata)
              err(5);
          if (this.d)
              err(4);
          this.d = final;
          this.p(chunk, final || false);
      };
      return Deflate;
  }());
  exports.Deflate = Deflate;
  /**
   * Asynchronous streaming DEFLATE compression
   */
  var AsyncDeflate = /*#__PURE__*/ (function () {
      function AsyncDeflate(opts, cb) {
          astrmify([
              bDflt,
              function () { return [astrm, Deflate]; }
          ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
              var strm = new Deflate(ev.data);
              onmessage = astrm(strm);
          }, 6);
      }
      return AsyncDeflate;
  }());
  exports.AsyncDeflate = AsyncDeflate;
  function deflate(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return cbify(data, opts, [
          bDflt,
      ], function (ev) { return pbf(deflateSync(ev.data[0], ev.data[1])); }, 0, cb);
  }
  exports.deflate = deflate;
  /**
   * Compresses data with DEFLATE without any wrapper
   * @param data The data to compress
   * @param opts The compression options
   * @returns The deflated version of the data
   */
  function deflateSync(data, opts) {
      return dopt(data, opts || {}, 0, 0);
  }
  exports.deflateSync = deflateSync;
  /**
   * Streaming DEFLATE decompression
   */
  var Inflate = /*#__PURE__*/ (function () {
      /**
       * Creates an inflation stream
       * @param cb The callback to call whenever data is inflated
       */
      function Inflate(cb) {
          this.s = {};
          this.p = new u8(0);
          this.ondata = cb;
      }
      Inflate.prototype.e = function (c) {
          if (!this.ondata)
              err(5);
          if (this.d)
              err(4);
          var l = this.p.length;
          var n = new u8(l + c.length);
          n.set(this.p), n.set(c, l), this.p = n;
      };
      Inflate.prototype.c = function (final) {
          this.d = this.s.i = final || false;
          var bts = this.s.b;
          var dt = inflt(this.p, this.o, this.s);
          this.ondata(slc(dt, bts, this.s.b), this.d);
          this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
          this.p = slc(this.p, (this.s.p / 8) | 0), this.s.p &= 7;
      };
      /**
       * Pushes a chunk to be inflated
       * @param chunk The chunk to push
       * @param final Whether this is the final chunk
       */
      Inflate.prototype.push = function (chunk, final) {
          this.e(chunk), this.c(final);
      };
      return Inflate;
  }());
  exports.Inflate = Inflate;
  /**
   * Asynchronous streaming DEFLATE decompression
   */
  var AsyncInflate = /*#__PURE__*/ (function () {
      /**
       * Creates an asynchronous inflation stream
       * @param cb The callback to call whenever data is deflated
       */
      function AsyncInflate(cb) {
          this.ondata = cb;
          astrmify([
              bInflt,
              function () { return [astrm, Inflate]; }
          ], this, 0, function () {
              var strm = new Inflate();
              onmessage = astrm(strm);
          }, 7);
      }
      return AsyncInflate;
  }());
  exports.AsyncInflate = AsyncInflate;
  function inflate(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return cbify(data, opts, [
          bInflt
      ], function (ev) { return pbf(inflateSync(ev.data[0], gu8(ev.data[1]))); }, 1, cb);
  }
  exports.inflate = inflate;
  /**
   * Expands DEFLATE data with no wrapper
   * @param data The data to decompress
   * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
   * @returns The decompressed version of the data
   */
  function inflateSync(data, out) {
      return inflt(data, out);
  }
  exports.inflateSync = inflateSync;
  // before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
  /**
   * Streaming GZIP compression
   */
  var Gzip = /*#__PURE__*/ (function () {
      function Gzip(opts, cb) {
          this.c = crc();
          this.l = 0;
          this.v = 1;
          Deflate.call(this, opts, cb);
      }
      /**
       * Pushes a chunk to be GZIPped
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Gzip.prototype.push = function (chunk, final) {
          Deflate.prototype.push.call(this, chunk, final);
      };
      Gzip.prototype.p = function (c, f) {
          this.c.p(c);
          this.l += c.length;
          var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
          if (this.v)
              gzh(raw, this.o), this.v = 0;
          if (f)
              wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
          this.ondata(raw, f);
      };
      return Gzip;
  }());
  exports.Gzip = Gzip;
  exports.Compress = Gzip;
  /**
   * Asynchronous streaming GZIP compression
   */
  var AsyncGzip = /*#__PURE__*/ (function () {
      function AsyncGzip(opts, cb) {
          astrmify([
              bDflt,
              gze,
              function () { return [astrm, Deflate, Gzip]; }
          ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
              var strm = new Gzip(ev.data);
              onmessage = astrm(strm);
          }, 8);
      }
      return AsyncGzip;
  }());
  exports.AsyncGzip = AsyncGzip;
  exports.AsyncCompress = AsyncGzip;
  function gzip(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return cbify(data, opts, [
          bDflt,
          gze,
          function () { return [gzipSync]; }
      ], function (ev) { return pbf(gzipSync(ev.data[0], ev.data[1])); }, 2, cb);
  }
  exports.gzip = gzip;
  exports.compress = gzip;
  /**
   * Compresses data with GZIP
   * @param data The data to compress
   * @param opts The compression options
   * @returns The gzipped version of the data
   */
  function gzipSync(data, opts) {
      if (!opts)
          opts = {};
      var c = crc(), l = data.length;
      c.p(data);
      var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
      return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
  }
  exports.gzipSync = gzipSync;
  exports.compressSync = gzipSync;
  /**
   * Streaming GZIP decompression
   */
  var Gunzip = /*#__PURE__*/ (function () {
      /**
       * Creates a GUNZIP stream
       * @param cb The callback to call whenever data is inflated
       */
      function Gunzip(cb) {
          this.v = 1;
          Inflate.call(this, cb);
      }
      /**
       * Pushes a chunk to be GUNZIPped
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Gunzip.prototype.push = function (chunk, final) {
          Inflate.prototype.e.call(this, chunk);
          if (this.v) {
              var s = this.p.length > 3 ? gzs(this.p) : 4;
              if (s >= this.p.length && !final)
                  return;
              this.p = this.p.subarray(s), this.v = 0;
          }
          if (final) {
              if (this.p.length < 8)
                  err(6, 'invalid gzip data');
              this.p = this.p.subarray(0, -8);
          }
          // necessary to prevent TS from using the closure value
          // This allows for workerization to function correctly
          Inflate.prototype.c.call(this, final);
      };
      return Gunzip;
  }());
  exports.Gunzip = Gunzip;
  /**
   * Asynchronous streaming GZIP decompression
   */
  var AsyncGunzip = /*#__PURE__*/ (function () {
      /**
       * Creates an asynchronous GUNZIP stream
       * @param cb The callback to call whenever data is deflated
       */
      function AsyncGunzip(cb) {
          this.ondata = cb;
          astrmify([
              bInflt,
              guze,
              function () { return [astrm, Inflate, Gunzip]; }
          ], this, 0, function () {
              var strm = new Gunzip();
              onmessage = astrm(strm);
          }, 9);
      }
      return AsyncGunzip;
  }());
  exports.AsyncGunzip = AsyncGunzip;
  function gunzip(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return cbify(data, opts, [
          bInflt,
          guze,
          function () { return [gunzipSync]; }
      ], function (ev) { return pbf(gunzipSync(ev.data[0])); }, 3, cb);
  }
  exports.gunzip = gunzip;
  /**
   * Expands GZIP data
   * @param data The data to decompress
   * @param out Where to write the data. GZIP already encodes the output size, so providing this doesn't save memory.
   * @returns The decompressed version of the data
   */
  function gunzipSync(data, out) {
      return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
  }
  exports.gunzipSync = gunzipSync;
  /**
   * Streaming Zlib compression
   */
  var Zlib = /*#__PURE__*/ (function () {
      function Zlib(opts, cb) {
          this.c = adler();
          this.v = 1;
          Deflate.call(this, opts, cb);
      }
      /**
       * Pushes a chunk to be zlibbed
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Zlib.prototype.push = function (chunk, final) {
          Deflate.prototype.push.call(this, chunk, final);
      };
      Zlib.prototype.p = function (c, f) {
          this.c.p(c);
          var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
          if (this.v)
              zlh(raw, this.o), this.v = 0;
          if (f)
              wbytes(raw, raw.length - 4, this.c.d());
          this.ondata(raw, f);
      };
      return Zlib;
  }());
  exports.Zlib = Zlib;
  /**
   * Asynchronous streaming Zlib compression
   */
  var AsyncZlib = /*#__PURE__*/ (function () {
      function AsyncZlib(opts, cb) {
          astrmify([
              bDflt,
              zle,
              function () { return [astrm, Deflate, Zlib]; }
          ], this, AsyncCmpStrm.call(this, opts, cb), function (ev) {
              var strm = new Zlib(ev.data);
              onmessage = astrm(strm);
          }, 10);
      }
      return AsyncZlib;
  }());
  exports.AsyncZlib = AsyncZlib;
  function zlib(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return cbify(data, opts, [
          bDflt,
          zle,
          function () { return [zlibSync]; }
      ], function (ev) { return pbf(zlibSync(ev.data[0], ev.data[1])); }, 4, cb);
  }
  exports.zlib = zlib;
  /**
   * Compress data with Zlib
   * @param data The data to compress
   * @param opts The compression options
   * @returns The zlib-compressed version of the data
   */
  function zlibSync(data, opts) {
      if (!opts)
          opts = {};
      var a = adler();
      a.p(data);
      var d = dopt(data, opts, 2, 4);
      return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
  }
  exports.zlibSync = zlibSync;
  /**
   * Streaming Zlib decompression
   */
  var Unzlib = /*#__PURE__*/ (function () {
      /**
       * Creates a Zlib decompression stream
       * @param cb The callback to call whenever data is inflated
       */
      function Unzlib(cb) {
          this.v = 1;
          Inflate.call(this, cb);
      }
      /**
       * Pushes a chunk to be unzlibbed
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Unzlib.prototype.push = function (chunk, final) {
          Inflate.prototype.e.call(this, chunk);
          if (this.v) {
              if (this.p.length < 2 && !final)
                  return;
              this.p = this.p.subarray(2), this.v = 0;
          }
          if (final) {
              if (this.p.length < 4)
                  err(6, 'invalid zlib data');
              this.p = this.p.subarray(0, -4);
          }
          // necessary to prevent TS from using the closure value
          // This allows for workerization to function correctly
          Inflate.prototype.c.call(this, final);
      };
      return Unzlib;
  }());
  exports.Unzlib = Unzlib;
  /**
   * Asynchronous streaming Zlib decompression
   */
  var AsyncUnzlib = /*#__PURE__*/ (function () {
      /**
       * Creates an asynchronous Zlib decompression stream
       * @param cb The callback to call whenever data is deflated
       */
      function AsyncUnzlib(cb) {
          this.ondata = cb;
          astrmify([
              bInflt,
              zule,
              function () { return [astrm, Inflate, Unzlib]; }
          ], this, 0, function () {
              var strm = new Unzlib();
              onmessage = astrm(strm);
          }, 11);
      }
      return AsyncUnzlib;
  }());
  exports.AsyncUnzlib = AsyncUnzlib;
  function unzlib(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return cbify(data, opts, [
          bInflt,
          zule,
          function () { return [unzlibSync]; }
      ], function (ev) { return pbf(unzlibSync(ev.data[0], gu8(ev.data[1]))); }, 5, cb);
  }
  exports.unzlib = unzlib;
  /**
   * Expands Zlib data
   * @param data The data to decompress
   * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
   * @returns The decompressed version of the data
   */
  function unzlibSync(data, out) {
      return inflt((zlv(data), data.subarray(2, -4)), out);
  }
  exports.unzlibSync = unzlibSync;
  /**
   * Streaming GZIP, Zlib, or raw DEFLATE decompression
   */
  var Decompress = /*#__PURE__*/ (function () {
      /**
       * Creates a decompression stream
       * @param cb The callback to call whenever data is decompressed
       */
      function Decompress(cb) {
          this.G = Gunzip;
          this.I = Inflate;
          this.Z = Unzlib;
          this.ondata = cb;
      }
      /**
       * Pushes a chunk to be decompressed
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Decompress.prototype.push = function (chunk, final) {
          if (!this.ondata)
              err(5);
          if (!this.s) {
              if (this.p && this.p.length) {
                  var n = new u8(this.p.length + chunk.length);
                  n.set(this.p), n.set(chunk, this.p.length);
              }
              else
                  this.p = chunk;
              if (this.p.length > 2) {
                  var _this_1 = this;
                  var cb = function () { _this_1.ondata.apply(_this_1, arguments); };
                  this.s = (this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8)
                      ? new this.G(cb)
                      : ((this.p[0] & 15) != 8 || (this.p[0] >> 4) > 7 || ((this.p[0] << 8 | this.p[1]) % 31))
                          ? new this.I(cb)
                          : new this.Z(cb);
                  this.s.push(this.p, final);
                  this.p = null;
              }
          }
          else
              this.s.push(chunk, final);
      };
      return Decompress;
  }());
  exports.Decompress = Decompress;
  /**
   * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
   */
  var AsyncDecompress = /*#__PURE__*/ (function () {
      /**
     * Creates an asynchronous decompression stream
     * @param cb The callback to call whenever data is decompressed
     */
      function AsyncDecompress(cb) {
          this.G = AsyncGunzip;
          this.I = AsyncInflate;
          this.Z = AsyncUnzlib;
          this.ondata = cb;
      }
      /**
       * Pushes a chunk to be decompressed
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      AsyncDecompress.prototype.push = function (chunk, final) {
          Decompress.prototype.push.call(this, chunk, final);
      };
      return AsyncDecompress;
  }());
  exports.AsyncDecompress = AsyncDecompress;
  function decompress(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      return (data[0] == 31 && data[1] == 139 && data[2] == 8)
          ? gunzip(data, opts, cb)
          : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))
              ? inflate(data, opts, cb)
              : unzlib(data, opts, cb);
  }
  exports.decompress = decompress;
  /**
   * Expands compressed GZIP, Zlib, or raw DEFLATE data, automatically detecting the format
   * @param data The data to decompress
   * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
   * @returns The decompressed version of the data
   */
  function decompressSync(data, out) {
      return (data[0] == 31 && data[1] == 139 && data[2] == 8)
          ? gunzipSync(data, out)
          : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))
              ? inflateSync(data, out)
              : unzlibSync(data, out);
  }
  exports.decompressSync = decompressSync;
  // flatten a directory structure
  var fltn = function (d, p, t, o) {
      for (var k in d) {
          var val = d[k], n = p + k, op = o;
          if (Array.isArray(val))
              op = mrg(o, val[1]), val = val[0];
          if (val instanceof u8)
              t[n] = [val, op];
          else {
              t[n += '/'] = [new u8(0), op];
              fltn(val, n, t, o);
          }
      }
  };
  // text encoder
  var te = typeof TextEncoder != 'undefined' && /*#__PURE__*/ new TextEncoder();
  // text decoder
  var td = typeof TextDecoder != 'undefined' && /*#__PURE__*/ new TextDecoder();
  // text decoder stream
  var tds = 0;
  try {
      td.decode(et, { stream: true });
      tds = 1;
  }
  catch (e) { }
  // decode UTF8
  var dutf8 = function (d) {
      for (var r = '', i = 0;;) {
          var c = d[i++];
          var eb = (c > 127) + (c > 223) + (c > 239);
          if (i + eb > d.length)
              return [r, slc(d, i - 1)];
          if (!eb)
              r += String.fromCharCode(c);
          else if (eb == 3) {
              c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | (d[i++] & 63)) - 65536,
                  r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
          }
          else if (eb & 1)
              r += String.fromCharCode((c & 31) << 6 | (d[i++] & 63));
          else
              r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | (d[i++] & 63));
      }
  };
  /**
   * Streaming UTF-8 decoding
   */
  var DecodeUTF8 = /*#__PURE__*/ (function () {
      /**
       * Creates a UTF-8 decoding stream
       * @param cb The callback to call whenever data is decoded
       */
      function DecodeUTF8(cb) {
          this.ondata = cb;
          if (tds)
              this.t = new TextDecoder();
          else
              this.p = et;
      }
      /**
       * Pushes a chunk to be decoded from UTF-8 binary
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      DecodeUTF8.prototype.push = function (chunk, final) {
          if (!this.ondata)
              err(5);
          final = !!final;
          if (this.t) {
              this.ondata(this.t.decode(chunk, { stream: true }), final);
              if (final) {
                  if (this.t.decode().length)
                      err(8);
                  this.t = null;
              }
              return;
          }
          if (!this.p)
              err(4);
          var dat = new u8(this.p.length + chunk.length);
          dat.set(this.p);
          dat.set(chunk, this.p.length);
          var _a = dutf8(dat), ch = _a[0], np = _a[1];
          if (final) {
              if (np.length)
                  err(8);
              this.p = null;
          }
          else
              this.p = np;
          this.ondata(ch, final);
      };
      return DecodeUTF8;
  }());
  exports.DecodeUTF8 = DecodeUTF8;
  /**
   * Streaming UTF-8 encoding
   */
  var EncodeUTF8 = /*#__PURE__*/ (function () {
      /**
       * Creates a UTF-8 decoding stream
       * @param cb The callback to call whenever data is encoded
       */
      function EncodeUTF8(cb) {
          this.ondata = cb;
      }
      /**
       * Pushes a chunk to be encoded to UTF-8
       * @param chunk The string data to push
       * @param final Whether this is the last chunk
       */
      EncodeUTF8.prototype.push = function (chunk, final) {
          if (!this.ondata)
              err(5);
          if (this.d)
              err(4);
          this.ondata(strToU8(chunk), this.d = final || false);
      };
      return EncodeUTF8;
  }());
  exports.EncodeUTF8 = EncodeUTF8;
  /**
   * Converts a string into a Uint8Array for use with compression/decompression methods
   * @param str The string to encode
   * @param latin1 Whether or not to interpret the data as Latin-1. This should
   *               not need to be true unless decoding a binary string.
   * @returns The string encoded in UTF-8/Latin-1 binary
   */
  function strToU8(str, latin1) {
      if (latin1) {
          var ar_1 = new u8(str.length);
          for (var i = 0; i < str.length; ++i)
              ar_1[i] = str.charCodeAt(i);
          return ar_1;
      }
      if (te)
          return te.encode(str);
      var l = str.length;
      var ar = new u8(str.length + (str.length >> 1));
      var ai = 0;
      var w = function (v) { ar[ai++] = v; };
      for (var i = 0; i < l; ++i) {
          if (ai + 5 > ar.length) {
              var n = new u8(ai + 8 + ((l - i) << 1));
              n.set(ar);
              ar = n;
          }
          var c = str.charCodeAt(i);
          if (c < 128 || latin1)
              w(c);
          else if (c < 2048)
              w(192 | (c >> 6)), w(128 | (c & 63));
          else if (c > 55295 && c < 57344)
              c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                  w(240 | (c >> 18)), w(128 | ((c >> 12) & 63)), w(128 | ((c >> 6) & 63)), w(128 | (c & 63));
          else
              w(224 | (c >> 12)), w(128 | ((c >> 6) & 63)), w(128 | (c & 63));
      }
      return slc(ar, 0, ai);
  }
  exports.strToU8 = strToU8;
  /**
   * Converts a Uint8Array to a string
   * @param dat The data to decode to string
   * @param latin1 Whether or not to interpret the data as Latin-1. This should
   *               not need to be true unless encoding to binary string.
   * @returns The original UTF-8/Latin-1 string
   */
  function strFromU8(dat, latin1) {
      if (latin1) {
          var r = '';
          for (var i = 0; i < dat.length; i += 16384)
              r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
          return r;
      }
      else if (td)
          return td.decode(dat);
      else {
          var _a = dutf8(dat), out = _a[0], ext = _a[1];
          if (ext.length)
              err(8);
          return out;
      }
  }
  exports.strFromU8 = strFromU8;
  ;
  // deflate bit flag
  var dbf = function (l) { return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0; };
  // skip local zip header
  var slzh = function (d, b) { return b + 30 + b2(d, b + 26) + b2(d, b + 28); };
  // read zip header
  var zh = function (d, b, z) {
      var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
      var _a = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a[0], su = _a[1], off = _a[2];
      return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
  };
  // read zip64 extra field
  var z64e = function (d, b) {
      for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
          ;
      return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
  };
  // extra field length
  var exfl = function (ex) {
      var le = 0;
      if (ex) {
          for (var k in ex) {
              var l = ex[k].length;
              if (l > 65535)
                  err(9);
              le += l + 4;
          }
      }
      return le;
  };
  // write zip header
  var wzh = function (d, b, f, fn, u, c, ce, co) {
      var fl = fn.length, ex = f.extra, col = co && co.length;
      var exl = exfl(ex);
      wbytes(d, b, ce != null ? 0x2014B50 : 0x4034B50), b += 4;
      if (ce != null)
          d[b++] = 20, d[b++] = f.os;
      d[b] = 20, b += 2; // spec compliance? what's that?
      d[b++] = (f.flag << 1) | (c < 0 && 8), d[b++] = u && 8;
      d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
      var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
      if (y < 0 || y > 119)
          err(10);
      wbytes(d, b, (y << 25) | ((dt.getMonth() + 1) << 21) | (dt.getDate() << 16) | (dt.getHours() << 11) | (dt.getMinutes() << 5) | (dt.getSeconds() >>> 1)), b += 4;
      if (c != -1) {
          wbytes(d, b, f.crc);
          wbytes(d, b + 4, c < 0 ? -c - 2 : c);
          wbytes(d, b + 8, f.size);
      }
      wbytes(d, b + 12, fl);
      wbytes(d, b + 14, exl), b += 16;
      if (ce != null) {
          wbytes(d, b, col);
          wbytes(d, b + 6, f.attrs);
          wbytes(d, b + 10, ce), b += 14;
      }
      d.set(fn, b);
      b += fl;
      if (exl) {
          for (var k in ex) {
              var exf = ex[k], l = exf.length;
              wbytes(d, b, +k);
              wbytes(d, b + 2, l);
              d.set(exf, b + 4), b += 4 + l;
          }
      }
      if (col)
          d.set(co, b), b += col;
      return b;
  };
  // write zip footer (end of central directory)
  var wzf = function (o, b, c, d, e) {
      wbytes(o, b, 0x6054B50); // skip disk
      wbytes(o, b + 8, c);
      wbytes(o, b + 10, c);
      wbytes(o, b + 12, d);
      wbytes(o, b + 16, e);
  };
  /**
   * A pass-through stream to keep data uncompressed in a ZIP archive.
   */
  var ZipPassThrough = /*#__PURE__*/ (function () {
      /**
       * Creates a pass-through stream that can be added to ZIP archives
       * @param filename The filename to associate with this data stream
       */
      function ZipPassThrough(filename) {
          this.filename = filename;
          this.c = crc();
          this.size = 0;
          this.compression = 0;
      }
      /**
       * Processes a chunk and pushes to the output stream. You can override this
       * method in a subclass for custom behavior, but by default this passes
       * the data through. You must call this.ondata(err, chunk, final) at some
       * point in this method.
       * @param chunk The chunk to process
       * @param final Whether this is the last chunk
       */
      ZipPassThrough.prototype.process = function (chunk, final) {
          this.ondata(null, chunk, final);
      };
      /**
       * Pushes a chunk to be added. If you are subclassing this with a custom
       * compression algorithm, note that you must push data from the source
       * file only, pre-compression.
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      ZipPassThrough.prototype.push = function (chunk, final) {
          if (!this.ondata)
              err(5);
          this.c.p(chunk);
          this.size += chunk.length;
          if (final)
              this.crc = this.c.d();
          this.process(chunk, final || false);
      };
      return ZipPassThrough;
  }());
  exports.ZipPassThrough = ZipPassThrough;
  // I don't extend because TypeScript extension adds 1kB of runtime bloat
  /**
   * Streaming DEFLATE compression for ZIP archives. Prefer using AsyncZipDeflate
   * for better performance
   */
  var ZipDeflate = /*#__PURE__*/ (function () {
      /**
       * Creates a DEFLATE stream that can be added to ZIP archives
       * @param filename The filename to associate with this data stream
       * @param opts The compression options
       */
      function ZipDeflate(filename, opts) {
          var _this_1 = this;
          if (!opts)
              opts = {};
          ZipPassThrough.call(this, filename);
          this.d = new Deflate(opts, function (dat, final) {
              _this_1.ondata(null, dat, final);
          });
          this.compression = 8;
          this.flag = dbf(opts.level);
      }
      ZipDeflate.prototype.process = function (chunk, final) {
          try {
              this.d.push(chunk, final);
          }
          catch (e) {
              this.ondata(e, null, final);
          }
      };
      /**
       * Pushes a chunk to be deflated
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      ZipDeflate.prototype.push = function (chunk, final) {
          ZipPassThrough.prototype.push.call(this, chunk, final);
      };
      return ZipDeflate;
  }());
  exports.ZipDeflate = ZipDeflate;
  /**
   * Asynchronous streaming DEFLATE compression for ZIP archives
   */
  var AsyncZipDeflate = /*#__PURE__*/ (function () {
      /**
       * Creates a DEFLATE stream that can be added to ZIP archives
       * @param filename The filename to associate with this data stream
       * @param opts The compression options
       */
      function AsyncZipDeflate(filename, opts) {
          var _this_1 = this;
          if (!opts)
              opts = {};
          ZipPassThrough.call(this, filename);
          this.d = new AsyncDeflate(opts, function (err, dat, final) {
              _this_1.ondata(err, dat, final);
          });
          this.compression = 8;
          this.flag = dbf(opts.level);
          this.terminate = this.d.terminate;
      }
      AsyncZipDeflate.prototype.process = function (chunk, final) {
          this.d.push(chunk, final);
      };
      /**
       * Pushes a chunk to be deflated
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      AsyncZipDeflate.prototype.push = function (chunk, final) {
          ZipPassThrough.prototype.push.call(this, chunk, final);
      };
      return AsyncZipDeflate;
  }());
  exports.AsyncZipDeflate = AsyncZipDeflate;
  // TODO: Better tree shaking
  /**
   * A zippable archive to which files can incrementally be added
   */
  var Zip = /*#__PURE__*/ (function () {
      /**
       * Creates an empty ZIP archive to which files can be added
       * @param cb The callback to call whenever data for the generated ZIP archive
       *           is available
       */
      function Zip(cb) {
          this.ondata = cb;
          this.u = [];
          this.d = 1;
      }
      /**
       * Adds a file to the ZIP archive
       * @param file The file stream to add
       */
      Zip.prototype.add = function (file) {
          var _this_1 = this;
          if (!this.ondata)
              err(5);
          // finishing or finished
          if (this.d & 2)
              this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, false);
          else {
              var f = strToU8(file.filename), fl_1 = f.length;
              var com = file.comment, o = com && strToU8(com);
              var u = fl_1 != file.filename.length || (o && (com.length != o.length));
              var hl_1 = fl_1 + exfl(file.extra) + 30;
              if (fl_1 > 65535)
                  this.ondata(err(11, 0, 1), null, false);
              var header = new u8(hl_1);
              wzh(header, 0, file, f, u, -1);
              var chks_1 = [header];
              var pAll_1 = function () {
                  for (var _i = 0, chks_2 = chks_1; _i < chks_2.length; _i++) {
                      var chk = chks_2[_i];
                      _this_1.ondata(null, chk, false);
                  }
                  chks_1 = [];
              };
              var tr_1 = this.d;
              this.d = 0;
              var ind_1 = this.u.length;
              var uf_1 = mrg(file, {
                  f: f,
                  u: u,
                  o: o,
                  t: function () {
                      if (file.terminate)
                          file.terminate();
                  },
                  r: function () {
                      pAll_1();
                      if (tr_1) {
                          var nxt = _this_1.u[ind_1 + 1];
                          if (nxt)
                              nxt.r();
                          else
                              _this_1.d = 1;
                      }
                      tr_1 = 1;
                  }
              });
              var cl_1 = 0;
              file.ondata = function (err, dat, final) {
                  if (err) {
                      _this_1.ondata(err, dat, final);
                      _this_1.terminate();
                  }
                  else {
                      cl_1 += dat.length;
                      chks_1.push(dat);
                      if (final) {
                          var dd = new u8(16);
                          wbytes(dd, 0, 0x8074B50);
                          wbytes(dd, 4, file.crc);
                          wbytes(dd, 8, cl_1);
                          wbytes(dd, 12, file.size);
                          chks_1.push(dd);
                          uf_1.c = cl_1, uf_1.b = hl_1 + cl_1 + 16, uf_1.crc = file.crc, uf_1.size = file.size;
                          if (tr_1)
                              uf_1.r();
                          tr_1 = 1;
                      }
                      else if (tr_1)
                          pAll_1();
                  }
              };
              this.u.push(uf_1);
          }
      };
      /**
       * Ends the process of adding files and prepares to emit the final chunks.
       * This *must* be called after adding all desired files for the resulting
       * ZIP file to work properly.
       */
      Zip.prototype.end = function () {
          var _this_1 = this;
          if (this.d & 2) {
              this.ondata(err(4 + (this.d & 1) * 8, 0, 1), null, true);
              return;
          }
          if (this.d)
              this.e();
          else
              this.u.push({
                  r: function () {
                      if (!(_this_1.d & 1))
                          return;
                      _this_1.u.splice(-1, 1);
                      _this_1.e();
                  },
                  t: function () { }
              });
          this.d = 3;
      };
      Zip.prototype.e = function () {
          var bt = 0, l = 0, tl = 0;
          for (var _i = 0, _a = this.u; _i < _a.length; _i++) {
              var f = _a[_i];
              tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
          }
          var out = new u8(tl + 22);
          for (var _b = 0, _c = this.u; _b < _c.length; _b++) {
              var f = _c[_b];
              wzh(out, bt, f, f.f, f.u, -f.c - 2, l, f.o);
              bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
          }
          wzf(out, bt, this.u.length, tl, l);
          this.ondata(null, out, true);
          this.d = 2;
      };
      /**
       * A method to terminate any internal workers used by the stream. Subsequent
       * calls to add() will fail.
       */
      Zip.prototype.terminate = function () {
          for (var _i = 0, _a = this.u; _i < _a.length; _i++) {
              var f = _a[_i];
              f.t();
          }
          this.d = 2;
      };
      return Zip;
  }());
  exports.Zip = Zip;
  function zip(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      var r = {};
      fltn(data, '', r, opts);
      var k = Object.keys(r);
      var lft = k.length, o = 0, tot = 0;
      var slft = lft, files = new Array(lft);
      var term = [];
      var tAll = function () {
          for (var i = 0; i < term.length; ++i)
              term[i]();
      };
      var cbd = function (a, b) {
          mt(function () { cb(a, b); });
      };
      mt(function () { cbd = cb; });
      var cbf = function () {
          var out = new u8(tot + 22), oe = o, cdl = tot - o;
          tot = 0;
          for (var i = 0; i < slft; ++i) {
              var f = files[i];
              try {
                  var l = f.c.length;
                  wzh(out, tot, f, f.f, f.u, l);
                  var badd = 30 + f.f.length + exfl(f.extra);
                  var loc = tot + badd;
                  out.set(f.c, loc);
                  wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
              }
              catch (e) {
                  return cbd(e, null);
              }
          }
          wzf(out, o, files.length, cdl, oe);
          cbd(null, out);
      };
      if (!lft)
          cbf();
      var _loop_1 = function (i) {
          var fn = k[i];
          var _a = r[fn], file = _a[0], p = _a[1];
          var c = crc(), size = file.length;
          c.p(file);
          var f = strToU8(fn), s = f.length;
          var com = p.comment, m = com && strToU8(com), ms = m && m.length;
          var exl = exfl(p.extra);
          var compression = p.level == 0 ? 0 : 8;
          var cbl = function (e, d) {
              if (e) {
                  tAll();
                  cbd(e, null);
              }
              else {
                  var l = d.length;
                  files[i] = mrg(p, {
                      size: size,
                      crc: c.d(),
                      c: d,
                      f: f,
                      m: m,
                      u: s != fn.length || (m && (com.length != ms)),
                      compression: compression
                  });
                  o += 30 + s + exl + l;
                  tot += 76 + 2 * (s + exl) + (ms || 0) + l;
                  if (!--lft)
                      cbf();
              }
          };
          if (s > 65535)
              cbl(err(11, 0, 1), null);
          if (!compression)
              cbl(null, file);
          else if (size < 160000) {
              try {
                  cbl(null, deflateSync(file, p));
              }
              catch (e) {
                  cbl(e, null);
              }
          }
          else
              term.push(deflate(file, p, cbl));
      };
      // Cannot use lft because it can decrease
      for (var i = 0; i < slft; ++i) {
          _loop_1(i);
      }
      return tAll;
  }
  exports.zip = zip;
  /**
   * Synchronously creates a ZIP file. Prefer using `zip` for better performance
   * with more than one file.
   * @param data The directory structure for the ZIP archive
   * @param opts The main options, merged with per-file options
   * @returns The generated ZIP archive
   */
  function zipSync(data, opts) {
      if (!opts)
          opts = {};
      var r = {};
      var files = [];
      fltn(data, '', r, opts);
      var o = 0;
      var tot = 0;
      for (var fn in r) {
          var _a = r[fn], file = _a[0], p = _a[1];
          var compression = p.level == 0 ? 0 : 8;
          var f = strToU8(fn), s = f.length;
          var com = p.comment, m = com && strToU8(com), ms = m && m.length;
          var exl = exfl(p.extra);
          if (s > 65535)
              err(11);
          var d = compression ? deflateSync(file, p) : file, l = d.length;
          var c = crc();
          c.p(file);
          files.push(mrg(p, {
              size: file.length,
              crc: c.d(),
              c: d,
              f: f,
              m: m,
              u: s != fn.length || (m && (com.length != ms)),
              o: o,
              compression: compression
          }));
          o += 30 + s + exl + l;
          tot += 76 + 2 * (s + exl) + (ms || 0) + l;
      }
      var out = new u8(tot + 22), oe = o, cdl = tot - o;
      for (var i = 0; i < files.length; ++i) {
          var f = files[i];
          wzh(out, f.o, f, f.f, f.u, f.c.length);
          var badd = 30 + f.f.length + exfl(f.extra);
          out.set(f.c, f.o + badd);
          wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
      }
      wzf(out, o, files.length, cdl, oe);
      return out;
  }
  exports.zipSync = zipSync;
  /**
   * Streaming pass-through decompression for ZIP archives
   */
  var UnzipPassThrough = /*#__PURE__*/ (function () {
      function UnzipPassThrough() {
      }
      UnzipPassThrough.prototype.push = function (data, final) {
          this.ondata(null, data, final);
      };
      UnzipPassThrough.compression = 0;
      return UnzipPassThrough;
  }());
  exports.UnzipPassThrough = UnzipPassThrough;
  /**
   * Streaming DEFLATE decompression for ZIP archives. Prefer AsyncZipInflate for
   * better performance.
   */
  var UnzipInflate = /*#__PURE__*/ (function () {
      /**
       * Creates a DEFLATE decompression that can be used in ZIP archives
       */
      function UnzipInflate() {
          var _this_1 = this;
          this.i = new Inflate(function (dat, final) {
              _this_1.ondata(null, dat, final);
          });
      }
      UnzipInflate.prototype.push = function (data, final) {
          try {
              this.i.push(data, final);
          }
          catch (e) {
              this.ondata(e, null, final);
          }
      };
      UnzipInflate.compression = 8;
      return UnzipInflate;
  }());
  exports.UnzipInflate = UnzipInflate;
  /**
   * Asynchronous streaming DEFLATE decompression for ZIP archives
   */
  var AsyncUnzipInflate = /*#__PURE__*/ (function () {
      /**
       * Creates a DEFLATE decompression that can be used in ZIP archives
       */
      function AsyncUnzipInflate(_, sz) {
          var _this_1 = this;
          if (sz < 320000) {
              this.i = new Inflate(function (dat, final) {
                  _this_1.ondata(null, dat, final);
              });
          }
          else {
              this.i = new AsyncInflate(function (err, dat, final) {
                  _this_1.ondata(err, dat, final);
              });
              this.terminate = this.i.terminate;
          }
      }
      AsyncUnzipInflate.prototype.push = function (data, final) {
          if (this.i.terminate)
              data = slc(data, 0);
          this.i.push(data, final);
      };
      AsyncUnzipInflate.compression = 8;
      return AsyncUnzipInflate;
  }());
  exports.AsyncUnzipInflate = AsyncUnzipInflate;
  /**
   * A ZIP archive decompression stream that emits files as they are discovered
   */
  var Unzip = /*#__PURE__*/ (function () {
      /**
       * Creates a ZIP decompression stream
       * @param cb The callback to call whenever a file in the ZIP archive is found
       */
      function Unzip(cb) {
          this.onfile = cb;
          this.k = [];
          this.o = {
              0: UnzipPassThrough
          };
          this.p = et;
      }
      /**
       * Pushes a chunk to be unzipped
       * @param chunk The chunk to push
       * @param final Whether this is the last chunk
       */
      Unzip.prototype.push = function (chunk, final) {
          var _this_1 = this;
          if (!this.onfile)
              err(5);
          if (!this.p)
              err(4);
          if (this.c > 0) {
              var len = Math.min(this.c, chunk.length);
              var toAdd = chunk.subarray(0, len);
              this.c -= len;
              if (this.d)
                  this.d.push(toAdd, !this.c);
              else
                  this.k[0].push(toAdd);
              chunk = chunk.subarray(len);
              if (chunk.length)
                  return this.push(chunk, final);
          }
          else {
              var f = 0, i = 0, is = void 0, buf = void 0;
              if (!this.p.length)
                  buf = chunk;
              else if (!chunk.length)
                  buf = this.p;
              else {
                  buf = new u8(this.p.length + chunk.length);
                  buf.set(this.p), buf.set(chunk, this.p.length);
              }
              var l = buf.length, oc = this.c, add = oc && this.d;
              var _loop_2 = function () {
                  var _a;
                  var sig = b4(buf, i);
                  if (sig == 0x4034B50) {
                      f = 1, is = i;
                      this_1.d = null;
                      this_1.c = 0;
                      var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);
                      if (l > i + 30 + fnl + es) {
                          var chks_3 = [];
                          this_1.k.unshift(chks_3);
                          f = 2;
                          var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);
                          var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);
                          if (sc_1 == 4294967295) {
                              _a = dd ? [-2] : z64e(buf, i), sc_1 = _a[0], su_1 = _a[1];
                          }
                          else if (dd)
                              sc_1 = -1;
                          i += es;
                          this_1.c = sc_1;
                          var d_1;
                          var file_1 = {
                              name: fn_1,
                              compression: cmp_1,
                              start: function () {
                                  if (!file_1.ondata)
                                      err(5);
                                  if (!sc_1)
                                      file_1.ondata(null, et, true);
                                  else {
                                      var ctr = _this_1.o[cmp_1];
                                      if (!ctr)
                                          file_1.ondata(err(14, 'unknown compression type ' + cmp_1, 1), null, false);
                                      d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                                      d_1.ondata = function (err, dat, final) { file_1.ondata(err, dat, final); };
                                      for (var _i = 0, chks_4 = chks_3; _i < chks_4.length; _i++) {
                                          var dat = chks_4[_i];
                                          d_1.push(dat, false);
                                      }
                                      if (_this_1.k[0] == chks_3 && _this_1.c)
                                          _this_1.d = d_1;
                                      else
                                          d_1.push(et, true);
                                  }
                              },
                              terminate: function () {
                                  if (d_1 && d_1.terminate)
                                      d_1.terminate();
                              }
                          };
                          if (sc_1 >= 0)
                              file_1.size = sc_1, file_1.originalSize = su_1;
                          this_1.onfile(file_1);
                      }
                      return "break";
                  }
                  else if (oc) {
                      if (sig == 0x8074B50) {
                          is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
                          return "break";
                      }
                      else if (sig == 0x2014B50) {
                          is = i -= 4, f = 3, this_1.c = 0;
                          return "break";
                      }
                  }
              };
              var this_1 = this;
              for (; i < l - 4; ++i) {
                  var state_1 = _loop_2();
                  if (state_1 === "break")
                      break;
              }
              this.p = et;
              if (oc < 0) {
                  var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 0x8074B50 && 4)) : buf.subarray(0, i);
                  if (add)
                      add.push(dat, !!f);
                  else
                      this.k[+(f == 2)].push(dat);
              }
              if (f & 2)
                  return this.push(buf.subarray(i), final);
              this.p = buf.subarray(i);
          }
          if (final) {
              if (this.c)
                  err(13);
              this.p = null;
          }
      };
      /**
       * Registers a decoder with the stream, allowing for files compressed with
       * the compression type provided to be expanded correctly
       * @param decoder The decoder constructor
       */
      Unzip.prototype.register = function (decoder) {
          this.o[decoder.compression] = decoder;
      };
      return Unzip;
  }());
  exports.Unzip = Unzip;
  var mt = typeof queueMicrotask == 'function' ? queueMicrotask : typeof setTimeout == 'function' ? setTimeout : function (fn) { fn(); };
  function unzip(data, opts, cb) {
      if (!cb)
          cb = opts, opts = {};
      if (typeof cb != 'function')
          err(7);
      var term = [];
      var tAll = function () {
          for (var i = 0; i < term.length; ++i)
              term[i]();
      };
      var files = {};
      var cbd = function (a, b) {
          mt(function () { cb(a, b); });
      };
      mt(function () { cbd = cb; });
      var e = data.length - 22;
      for (; b4(data, e) != 0x6054B50; --e) {
          if (!e || data.length - e > 65558) {
              cbd(err(13, 0, 1), null);
              return tAll;
          }
      }
      ;
      var lft = b2(data, e + 8);
      if (lft) {
          var c = lft;
          var o = b4(data, e + 16);
          var z = o == 4294967295 || c == 65535;
          if (z) {
              var ze = b4(data, e - 12);
              z = b4(data, ze) == 0x6064B50;
              if (z) {
                  c = lft = b4(data, ze + 32);
                  o = b4(data, ze + 48);
              }
          }
          var fltr = opts && opts.filter;
          var _loop_3 = function (i) {
              var _a = zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
              o = no;
              var cbl = function (e, d) {
                  if (e) {
                      tAll();
                      cbd(e, null);
                  }
                  else {
                      if (d)
                          files[fn] = d;
                      if (!--lft)
                          cbd(null, files);
                  }
              };
              if (!fltr || fltr({
                  name: fn,
                  size: sc,
                  originalSize: su,
                  compression: c_1
              })) {
                  if (!c_1)
                      cbl(null, slc(data, b, b + sc));
                  else if (c_1 == 8) {
                      var infl = data.subarray(b, b + sc);
                      if (sc < 320000) {
                          try {
                              cbl(null, inflateSync(infl, new u8(su)));
                          }
                          catch (e) {
                              cbl(e, null);
                          }
                      }
                      else
                          term.push(inflate(infl, { size: su }, cbl));
                  }
                  else
                      cbl(err(14, 'unknown compression type ' + c_1, 1), null);
              }
              else
                  cbl(null, null);
          };
          for (var i = 0; i < c; ++i) {
              _loop_3(i);
          }
      }
      else
          cbd(null, {});
      return tAll;
  }
  exports.unzip = unzip;
  /**
   * Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
   * performance with more than one file.
   * @param data The raw compressed ZIP file
   * @param opts The ZIP extraction options
   * @returns The decompressed files
   */
  function unzipSync(data, opts) {
      var files = {};
      var e = data.length - 22;
      for (; b4(data, e) != 0x6054B50; --e) {
          if (!e || data.length - e > 65558)
              err(13);
      }
      ;
      var c = b2(data, e + 8);
      if (!c)
          return {};
      var o = b4(data, e + 16);
      var z = o == 4294967295 || c == 65535;
      if (z) {
          var ze = b4(data, e - 12);
          z = b4(data, ze) == 0x6064B50;
          if (z) {
              c = b4(data, ze + 32);
              o = b4(data, ze + 48);
          }
      }
      var fltr = opts && opts.filter;
      for (var i = 0; i < c; ++i) {
          var _a = zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = slzh(data, off);
          o = no;
          if (!fltr || fltr({
              name: fn,
              size: sc,
              originalSize: su,
              compression: c_2
          })) {
              if (!c_2)
                  files[fn] = slc(data, b, b + sc);
              else if (c_2 == 8)
                  files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
              else
                  err(14, 'unknown compression type ' + c_2);
          }
      }
      return files;
  }
  exports.unzipSync = unzipSync;
  

});

;/*!node_modules/office-viewer/lib/package/ZipPackageParser.js*/
amis.define("node_modules/office-viewer/lib/package/ZipPackageParser",(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("node_modules/fflate/lib/index.cjs"),o=function(){function e(){}return e.prototype.load=function(e){this.zip=n.unzipSync(new Uint8Array(e),{filter:function(e){return e.originalSize<=1e7}})},e.prototype.getXML=function(e){var t=this.getFileByType(e,"string"),r=(new DOMParser).parseFromString(t,"application/xml"),i=r.querySelector("parsererror");if(i)throw new Error(i.textContent||"can't parse xml");return r},e.prototype.getFileByType=function(e,t){e=e.startsWith("/")?e.slice(1):e;var r=this.zip[e];if(r){if("string"===t)return n.strFromU8(r);if("blob"===t)return new Blob([r])}throw new Error("file not found")},e.prototype.fileExists=function(e){return(e=e.startsWith("/")?e.slice(1):e)in this.zip},e.prototype.generateZip=function(e){return this.zip["word/document.xml"]=n.strToU8(e),new Blob([n.zipSync(this.zip)])},e}();t.default=o}));
;/*!node_modules/office-viewer/lib/util/xml.js*/
amis.define("node_modules/office-viewer/lib/util/xml",(function(e,i,n,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.buildXML=function(e){return(new XMLSerializer).serializeToString(e)}}));
;/*!node_modules/office-viewer/lib/Word.js*/
amis.define("node_modules/office-viewer/lib/Word",(function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("node_modules/office-viewer/lib/node_modules/tslib/tslib.es6"),o=e("node_modules/office-viewer/lib/parse/parseRelationship"),s=e("node_modules/office-viewer/lib/openxml/ContentType"),a=e("node_modules/office-viewer/lib/openxml/Style"),l=e("node_modules/office-viewer/lib/openxml/Theme"),d=e("node_modules/office-viewer/lib/render/renderDocument"),p=e("node_modules/office-viewer/lib/util/blob"),u=e("node_modules/office-viewer/lib/openxml/word/numbering/Numbering"),c=e("node_modules/office-viewer/lib/util/dom"),h=e("node_modules/office-viewer/lib/render/renderStyle"),m=e("node_modules/office-viewer/lib/util/mergeRun"),f=e("node_modules/office-viewer/lib/openxml/word/WDocument"),y=e("node_modules/office-viewer/lib/render/renderRun"),v=e("node_modules/office-viewer/lib/package/ZipPackageParser"),g=e("node_modules/office-viewer/lib/util/xml"),b={imageDataURL:!1,classPrefix:"docx-viewer",inWrap:!0,bulletUseFont:!0,ignoreHeight:!0,ignoreWidth:!0,minLineHeight:1,enableVar:!1,debug:!1},w=function(){function e(t,i,r){void 0===r&&(r=new v.default),this.themes=[],this.styleIdMap={},this.styleIdNum=0,this.wrapClassName="docx-viewer-wrapper",this.inited=!1,r.load(t),this.id=e.globalId++,this.parser=r,this.renderOptions=n.__assign(n.__assign({},b),i)}return e.prototype.init=function(){this.inited||(this.initContentType(),this.initTheme(),this.initStyle(),this.initRelation(),this.initNumbering(),this.inited=!0)},e.prototype.initTheme=function(){var e,t;try{for(var i=n.__values(this.conentTypes.overrides),r=i.next();!r.done;r=i.next()){var o=r.value;if(o.partName.startsWith("/word/theme")){var s=this.parser.getXML(o.partName);this.themes.push(l.parseTheme(s))}}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},e.prototype.initStyle=function(){var e,t;try{for(var i=n.__values(this.conentTypes.overrides),r=i.next();!r.done;r=i.next()){r.value.partName.startsWith("/word/styles.xml")&&(this.styles=a.parseStyles(this,this.parser.getXML("/word/styles.xml")))}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},e.prototype.initRelation=function(){var e={};this.parser.fileExists("/_rels/.rels")&&(e=o.parseRelationships(this.parser.getXML("/_rels/.rels"),"root"));var t={};this.parser.fileExists("/word/_rels/document.xml.rels")&&(t=o.parseRelationships(this.parser.getXML("/word/_rels/document.xml.rels"),"word")),this.relationships=n.__assign(n.__assign({},e),t)},e.prototype.initContentType=function(){var e=this.parser.getXML("[Content_Types].xml");this.conentTypes=s.parseContentType(e)},e.prototype.initNumbering=function(){var e,t;try{for(var i=n.__values(this.conentTypes.overrides),r=i.next();!r.done;r=i.next()){var o=r.value;if(o.partName.startsWith("/word/numbering")){var s=this.parser.getXML(o.partName);this.numbering=u.Numbering.fromXML(this,s)}}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},e.prototype.getRelationship=function(e){return e?this.relationships[e]:null},e.prototype.replaceText=function(e){return!1!==this.renderOptions.enableVar&&this.renderOptions.replaceText?this.renderOptions.replaceText(e):e},e.prototype.loadImage=function(e){var t=e.target;"word"===e.part&&(t="word/"+t);var i=this.parser.getFileByType(t,"blob");return i?this.renderOptions.imageDataURL?p.blobToDataURL(i):new Promise((function(e,t){e(URL.createObjectURL(i))})):null},e.prototype.getXML=function(e){return this.parser.getXML(e)},e.prototype.getStyleIdDisplayName=function(e){return e.match(/^[a-zA-Z]+[a-zA-Z0-9\-\_]*$/)?this.getClassPrefix()+"-"+e:(e in this.styleIdMap||(this.styleIdMap[e]=this.genClassName()),this.styleIdMap[e])},e.prototype.genClassName=function(){return"docx-classname-"+this.styleIdNum++},e.prototype.appendStyle=function(e){var t=document.createElement("style");t.innerHTML=e,this.rootElement.appendChild(t)},e.prototype.getStyleClassName=function(e){var t=this.styles.styleMap[e];if(!t)return[];var i=[this.getStyleIdDisplayName(e)];return t.basedOn&&i.unshift(this.getStyleIdDisplayName(t.basedOn)),i},e.prototype.getClassPrefix=function(){return"".concat(this.renderOptions.classPrefix,"-").concat(this.id)},e.prototype.getThemeColor=function(e){return"var(--docx-".concat(this.id,"-theme-").concat(e,"-color)")},e.prototype.addClass=function(e,t){e.classList.add("".concat(this.getClassPrefix(),"-").concat(t))},e.prototype.updateVariable=function(){this.rootElement&&!1!==this.renderOptions.enableVar&&this.renderOptions.replaceText&&y.updateVariableText(this)},e.prototype.download=function(e){void 0===e&&(e="document.docx");var t=this.getXML("word/document.xml");if(this.renderOptions.enableVar&&this.renderOptions.replaceText){m.mergeRun(this,t);for(var i=t.getElementsByTagName("w:t"),r=0;r<i.length;r++)i[r].textContent=this.replaceText(i[r].textContent||"")}var n=this.parser.generateZip(g.buildXML(t));p.downloadBlob(n,e)},e.prototype.print=function(){var e,t;return n.__awaiter(this,void 0,void 0,(function(){var i;return n.__generator(this,(function(r){switch(r.label){case 0:return(i=document.createElement("iframe")).style.position="absolute",i.style.top="-10000px",document.body.appendChild(i),null===(e=i.contentDocument)||void 0===e||e.write('<div id="print"></div>'),[4,this.render(null===(t=i.contentDocument)||void 0===t?void 0:t.getElementById("print"))];case 1:return r.sent(),setTimeout((function(){var e,t;i.focus(),null===(e=i.contentWindow)||void 0===e||e.print(),null===(t=i.parentNode)||void 0===t||t.removeChild(i)}),100),window.focus(),[2]}}))}))},e.prototype.render=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,i,r,o,s;return n.__generator(this,(function(n){return this.init(),t=this.renderOptions,(i=t.debug)&&console.log("init",this),this.rootElement=e,e.innerHTML="",r=this.getXML("word/document.xml"),i&&console.log("documentData",r),t.enableVar&&t.replaceText&&m.mergeRun(this,r),o=f.WDocument.fromXML(this,r),i&&console.log("document",o),s=d.default(this,o),e.classList.add(this.getClassPrefix()),t.inWrap&&e.classList.add(this.wrapClassName),c.appendChild(e,h.renderStyle(this)),c.appendChild(e,s),[2]}))}))},e.globalId=0,e}();t.default=w}));
;/*!node_modules/office-viewer/lib/index.js*/
amis.define("node_modules/office-viewer/lib/index",(function(e,d,i,o){"use strict";Object.defineProperty(d,"__esModule",{value:!0});var f=e("node_modules/office-viewer/lib/Word"),l={Word:f.default};d.Word=f.default,d.default=l}));