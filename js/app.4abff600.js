(function(e){function t(t){for(var i,o,s=t[0],l=t[1],p=t[2],c=0,u=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,p||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/titan-params-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0417":function(e,t,a){},1725:function(e){e.exports=JSON.parse('{"assort_mix":{"type":{"default":"Race","description":"Which type of assortative mixing to do (currently only Race)","type":"enum","values":["Race"]},"coefficient":{"default":0.75,"description":"proportion of","type":"float","min":0,"max":1}},"calibration":{"needle":{"act":{"default":1,"description":"Scales number of needle acts during needle transmission","type":"float","min":0}},"sex":{"act":{"default":1,"description":"Scales number of sex acts during sex trasmission","type":"float","min":0},"partner":{"default":1,"description":"Scales probability of partner acquisition","type":"float","min":0}},"transmission":{"default":1,"description":"Scales probability of transmission","type":"float","min":0},"test_frequency":{"default":1,"description":"Scaling factor for testing frequency","type":"float","min":0},"mortality":{"default":1,"description":"Scaling factor for all cause mortality rates","type":"float","min":0},"haart_coverage":{"default":1,"description":"Scaling factor for enrollment on ART probability","type":"float","min":0},"incarceration":{"default":1,"description":"Scaling factor for probability of becoming incarcerated","type":"float","min":0}},"classes":{"races":{"default":["WHITE","BLACK"],"description":"Which races to use in model (currently only \'WHITE\' and \'BLACK\' supported)","type":"array","values":["WHITE","BLACK"]},"sex_types":{"description":"Which sex types to use in model","type":"definition","fields":{"gender":{"type":"enum","values":["M","F","O"]},"cis_trans":{"type":"enum","values":["cis","trans"]},"sleeps_with":{"type":"keys"}},"default":{"HM":{"gender":"M","cis_trans":"cis","sleeps_with":["HF","MTF"]},"HF":{"gender":"F","cis_trans":"cis","sleeps_with":["HM"]},"MSM":{"gender":"M","cis_trans":"cis","sleeps_with":["MSM","MTF"]},"WSW":{"gender":"F","cis_trans":"cis","sleeps_with":["WSW","MTF"]},"MTF":{"gender":"F","cis_trans":"trans","sleeps_with":["WSW","HM","MSM"]}}},"bond_types":{"default":["sexualOnly","multiplex","social"],"description":"Types of bonds a relationship can have","type":"enum","values":["sexualOnly","multiplex","social"]},"drug_types":{"default":["Inj","NonInj","None"],"description":"Types of drugs that an agent can use in the model","type":"array","values":["Inj","NonInj","None"]},"populations":{"default":["PWID"],"description":"Which demographic populations to track in addition to sex_types","type":"array","values":["PWID"]}},"demographics":{"type":"sub-dict","description":"Paramters controlling population class level probabilities and behaviors","keys":["races","populations"],"default":{"ppl":{"default":0,"description":"Percentage of agent population with given parent key that is this class.  Across races this must add up to one, and at the sex type level within a race, this must also add up to one. Other demographic params can have proportions of any value.","type":"float","min":0,"max":1},"hiv":{"init":{"default":0,"description":"Probability that an agent in this class initially has HIV","type":"float","min":0,"max":1},"dx":{"init":{"default":0,"description":"Probability that an agent with HIV is initially diagnosed and \'knows\' their HIV status, therefore enabling enrollment in treatment","type":"float","min":0,"max":1},"prob":{"default":0,"description":"Probability that an agent with HIV becomes diagnosed at a given time step and \'knows\' their HIV status, therefore enabling enrollment in treatment","type":"float","min":0,"max":1}},"transmission":{"default":1,"description":"Scaling factor for transmission probability by race (only effective at race level)","type":"float","min":0}},"aids":{"init":{"default":0,"description":"Probability that an agent in this class with HIV has AIDS initially","type":"float","min":0,"max":1}},"haart":{"init":{"default":0,"description":"Probability that an agent in this class with HIV is initially enrolled in HAART","type":"float","min":0,"max":1},"prob":{"default":0,"description":"Probability that an agent in this class with HIV becomes enrolled in HAART at a given time step","type":"float","min":0,"max":1},"adherence":{"default":0,"description":"Probability that an agent is assigne adherence of 5, otherwise randomly assigned 1-4","type":"float","min":0,"max":1},"discontinue":{"default":0,"description":"Probability that an agent on HAART discontinues HAART in a given time step","type":"float","min":0,"max":1}},"incar":{"init":{"default":0,"description":"Probability that an agent in this class is initially incarcerated","type":"float","min":0,"max":1},"prob":{"default":0,"description":"Probability that an agent in this class becomes incarcerated at a given time step","type":"float","min":0,"max":1},"duration":{"prob":{"type":"bin","description":"Binned probabilities of incarceration duration during model run","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":0.4,"min":1,"max":2},"2":{"prob":0.475,"min":1,"max":13},"3":{"prob":0.065,"min":13,"max":26},"4":{"prob":0.045,"min":26,"max":78},"5":{"prob":0.01,"min":78,"max":130},"6":{"prob":0.01,"min":130,"max":260}}},"init":{"type":"bin","description":"Binned probabilities of incarceration duration when initializing population","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":0.14,"min":1,"max":13},"2":{"prob":0.09,"min":13,"max":26},"3":{"prob":0.2,"min":26,"max":78},"4":{"prob":0.11,"min":78,"max":130},"5":{"prob":0.16,"min":130,"max":260},"6":{"prob":0.3,"min":260,"max":520}}}}},"num_partners":{"default":0,"description":"Mean number of partners for an agent in this class if using model.population.num_partners.type = poisson","type":"float","min":0},"num_needle_acts":{"default":0,"description":"???","type":"float","min":0},"safe_sex":{"default":0,"description":"Pobability of safe sex (condom use) per sex act","type":"float","min":0,"max":1},"needle_sharing":{"default":0,"description":"Probability of sharing a needle per act","type":"float","min":0,"max":1},"prep":{"discontinue":{"default":0,"description":"Probability that an agent on PrEP discontinues PrEP at a given time step","type":"float","min":0,"max":1},"adherence":{"default":0,"description":"Probability that an agent on PrEP is assigned an adherence of 1, otherwise assigned 0","type":"float","min":0,"max":1},"coverage":{"default":0,"description":"Target percentage of PrEP coverage for this population class","type":"float","min":0,"max":1}},"high_risk":{"init":{"default":0,"description":"Probability that an agent is initially marked as high risk","type":"float","min":0,"max":1}},"vaccine":{"init":{"default":0,"description":"Probability that an agent is initially vaccinated","type":"float","min":0,"max":1},"prob":{"default":0,"description":"Probability that an agent becomes vaccinated at a given time step","type":"float","min":0,"max":1},"booster":{"interval":{"default":0,"description":"Number of time steps from vaccination at which booster vaccine is required","type":"int","min":0},"prob":{"default":0,"description":"Probability of an agent getting booster vaccine at required time step","type":"float","min":0,"max":1}}},"assort_mix":{"coefficient":{"default":0,"description":"Probability that an agent partners with someone of their own race (if assort_mix.type == Race)","type":"float","min":0,"max":1}},"age":{"type":"bin","description":"Binned probabilities of ages by race, last bin should be 1 to have default","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":0.085,"min":15,"max":24},"2":{"prob":0.291,"min":25,"max":34},"3":{"prob":0.511,"min":35,"max":44},"4":{"prob":0.96,"min":45,"max":54},"5":{"prob":1,"min":55,"max":80}}},"death_rate":{"base":{"default":10.4,"type":"float","description":"Death rate by race per 1000 person years in base case"},"hiv":{"default":20.8,"type":"float","description":"Death rate by race per 1000 person years if hiv+ (but no aids)"},"aids":{"default":41.6,"type":"float","description":"Death rate by race per 1000 person years if aids"}}}},"features":{"incar":{"default":false,"description":"Whether incarceration will be used in the model","type":"boolean"},"prep":{"default":false,"description":"Whether PrEP will be used in the model","type":"boolean"},"high_risk":{"default":false,"description":"Whether high risk will be used in the model","type":"boolean"},"haart":{"default":false,"description":"Whether haart will be used in the model","type":"boolean"},"die_and_replace":{"default":false,"description":"Whether agents can die in the model, if so they will be replaced","type":"boolean"},"static_n":{"default":false,"description":"????","type":"boolean"},"agent_zero":{"default":false,"description":"Whether to create 4 \\"agent_zeros\\" to initialize HIV in the population","type":"boolean"},"assort_mix":{"default":false,"description":"Whether to use assortative mixing when partnering","type":"boolean"},"vaccine":{"default":false,"description":"Whether to use a vaccine in the model","type":"boolean"},"partner_tracing":{"default":false,"description":"Whether to trace a newly diagnosed agent\'s partners, so that they become diagnosed at the next time step","type":"boolean"},"msmw":{"default":false,"description":"Whether to have agents that are men who sleep with men and women - it is not quite a sex type, but adjusts their risks and probabilities accordingly","type":"boolean"},"pca":{"default":false,"description":"Whether to have peer change agents spreading awareness of PrEP","type":"boolean"}},"haart":{"start":{"default":0,"description":"time step at which ART therapy begins in the model","type":"int","min":0},"coverage":{"default":0,"description":"target coverage of ART for HIV+ population","type":"flaot","min":0,"max":1},"transmission":{"prob":{"default":1,"description":"scaling factor for effictiveness of ART therapy on transmission probability","type":"float","min":0}}},"high_risk":{"partner_scale":{"default":300,"description":"Linear increase to partner number during high risk period","type":"int","min":0},"proportion":{"default":0.3,"description":"Probability an agent whose partner is incarcerated enters high risk group","type":"float","min":0,"max":1},"condom_use_type":{"default":"Race","description":"Which type of factor to use when determining condom usage","type":"enum","values":["Race","Acts"]},"sex_based":{"type":"sub-dict","description":"Duration of high risk for each sex_type","keys":["sex_types"],"default":{"duration":{"default":6,"description":"Number of time steps an agent of this sex type is high risk","type":"int","min":0}}}},"hiv":{"dx":{"risk_reduction":{"default":0,"description":"risk redection in transmission probability for diagnosed agents","type":"float","min":0,"max":1}},"acute":{"infectivity":{"default":4.3,"description":"Infectivity multiplier ratio for acute status infections","type":"float","min":0}},"aids":{"prob":{"default":1,"description":"Probability of an agent with hiv progressing to aids at a given time step (scaled by haart adherence)","type":"float","min":0,"max":1}}},"incar":{"hiv":{"dx":{"default":0.69,"description":"Probability an agent with HIV who is incarcerated gets diagnosed while in prison","type":"float","min":0,"max":1}},"haart":{"prob":{"default":0.51,"description":"Probability an agent who is incarcerated is enrolled in haart","type":"float","min":0,"max":1},"adherence":{"default":0.21,"description":"Probability an agent who is incarcerated is adherent","type":"float","min":0,"max":1},"discontinue":{"default":0.12,"description":"Probability an agent who is incarcerated discontinues haart","type":"float","min":0,"max":1}}},"model":{"processes":{"default":1,"description":"Number of processes in parallel to use for computation","type":"int","min":1},"seed":{"run":{"default":0,"description":"Seed for random number generator for running the model. 0 is pure random, -1 for stepwise through number of number of iterations (num_reps), other numbers will be used to explicitly set the seed.","type":"int"},"net":{"default":0,"description":"Seed for random number generator for creating the network. 0 is pure random, other numbers will be used to explicitly set the seed. -1 for stepwise through number of monte carlo iterations (-n flag on command line).","type":"int"},"ppl":{"default":0,"description":"Seed for random number generator for creating the population. 0 is pure random, other numbers will be used to explicitly set the seed. -1 for stepwise through number of monte carlo iterations (-n flag on command line).","type":"int"}},"num_reps":{"default":1,"description":"Number of times to repeat simulation, if run seed is set to -1, it will step through run seeds during simulation","type":"int"},"num_pop":{"default":100,"description":"Size of population to model","type":"int","min":1},"time_range":{"default":12,"description":"Number of time steps to run the model","type":"int","min":1},"burn_duration":{"default":6,"description":"Number of time steps of burn in period, if 0, there is no burn in period.","type":"int"},"network":{"type":{"default":"scale_free","description":"Algorithm used for network initialization","type":"enum","values":["scale_free","max_k_comp_size"]},"component_size":{"max":{"default":100,"description":"Largest allowable size of a sub-graph in the network at initialization","type":"int","min":1}}},"population":{"num_partners":{"type":{"default":"poisson","description":"How to determine the mean number of partners for an agent","type":"enum","values":["poisson","bins"]},"bins":{"type":"bin","description":"Binned probabilities of number of partners","fields":{"prob":{"type":"float","min":0,"max":1}},"default":{"0":{"prob":"0.083,"},"1":{"prob":"0.181,"},"2":{"prob":"0.229,"},"3":{"prob":"0.172,"},"4":{"prob":"0.112,"},"5":{"prob":"0.102,"},"6":{"prob":"0.071,"},"7":{"prob":"0.028,"},"8":{"prob":"0.019,"},"9":{"prob":"0.005,"}}}}}},"msmw":{"hiv":{"prob":{"default":".01","description":"Probability of HM who is MSMW additionally converting to HIV","type":"float","min":0,"max":1}}},"needle_exchange":{"prevalence":{"default":1,"description":"Scales needle sharing prevalence when determining probability of unsafe needle sharing","type":"float","min":0},"coverage":{"default":0,"description":"Target coverage when enrolling IDU agents in needle exchange","type":"float","min":0,"max":1},"init_at_pop":{"default":0,"description":"When the total number of HIV diagnoses surpasses this number, enrollment in needle exchange is triggered","type":"int","min":0}},"outputs":{"print_frequency":{"default":10,"description":"How frequently to update the component states, visualization, network stats reports during  a run","type":"int"},"draw_figures":{"default":false,"description":"Whether to plot the network during the run of a model","type":"boolean"},"edge_list":{"default":false,"description":"Whether to write the graph\'s edge list during the run of a model","type":"boolean"},"calc_network_stats":{"default":false,"description":"Whether to write the network statistics during the run of a model","type":"boolean"},"calc_component_stats":{"default":false,"descriptions":"Whether to calculate and save statistics on network components during model run","type":"boolean"},"reports":{"default":["deathReport","incarReport","newlyhighriskReport","prepReport","basicReport"],"description":"Which reports to save from run of the model","type":"array","values":["deathReport","incarReport","newlyhighriskReport","prepReport","basicReport"]}},"partnership":{"sex":{"duration":{"type":"bin","description":"Binned probabilities of length of a partnership\'s sexual durations","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":0.585,"min":1,"max":6},"2":{"prob":0.701,"min":7,"max":12},"3":{"prob":0.822,"min":13,"max":24},"4":{"prob":0.882,"min":25,"max":36},"5":{"prob":1,"min":37,"max":48}}},"frequency":{"type":"bin","description":"Binned probabilities of number of sex acts of a partnership at a given time step","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":0.585,"min":1,"max":6},"2":{"prob":0.701,"min":7,"max":12},"3":{"prob":0.822,"min":13,"max":24},"4":{"prob":0.882,"min":25,"max":36},"5":{"prob":1,"min":37,"max":48}}},"transmission":{"type":"sub-dict","description":"probability of transmitting HIV for a given sex type","keys":["sex_types"],"default":{"type":"bin","description":"Binned probabilities of transmitting HIV","fields":{"prob":{"type":"float","min":0,"max":1}},"default":{"0":{"prob":0.001},"1":{"prob":0.001},"2":{"prob":0.0008},"3":{"prob":0.0004},"4":{"prob":0.0002},"5":{"prob":0}}}},"role_scaling":{"type":"sub-dict","description":"Scaling factor for hiv transmission for a given sex type for each sex role","keys":["sex_types"],"default":{"vers":{"type":"float","description":"Scaling factor for hiv transmission for a given sex type for vers role","min":0,"default":1},"top":{"type":"float","description":"Scaling factor for hiv transmission for a given sex type for top role","min":0,"default":1},"bottom":{"type":"float","description":"Scaling factor for hiv transmission for a given sex type for bottom role","min":0,"default":1}}}},"needle":{"duration":{"type":"bin","description":"Binned probabilities of length of a partnership\'s needle sharing durations","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":1,"min":1,"max":6}}},"frequency":{"type":"bin","description":"Binned probabilities of frequency of a partnership\'s needle sharing","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":1,"min":1,"max":6}}},"transmission":{"type":"bin","description":"Binned probabilities of transmission from needle sharing","fields":{"prob":{"type":"float","min":0,"max":1}},"default":{"0":{"prob":0.007},"1":{"prob":0.007},"2":{"prob":0.0056},"3":{"prob":0.0028},"4":{"prob":0.0014},"5":{"prob":0.0002}}}},"interaction":{"type":"sub-dict","keys":["bond_types"],"description":"Binned probabilities by relationship type of interaction at a given time step","default":{"type":"bin","description":"Binned probabilities of interaction at a given time step","fields":{"prob":{"type":"float","min":0,"max":1},"min":{"type":"int","min":0},"max":{"type":"int","min":0}},"default":{"1":{"prob":0.306,"min":0,"max":0},"2":{"prob":0.144,"min":1,"max":1},"3":{"prob":0.067,"min":2,"max":2},"4":{"prob":0.106,"min":4,"max":4},"5":{"prob":0.15,"min":5,"max":29},"6":{"prob":0.228,"min":30,"max":30}}}},"bond":{"type":{"type":"sub-dict","keys":["populations"],"description":"Probabilities of bond types by popultation","default":{"social":{"default":0.308,"description":"Probability of a social bond type for PWID","type":"float","min":0,"max":1},"multiplex":{"default":0.105,"description":"Probability of a multiplex bond type for PWID","type":"float","min":0,"max":1},"sexualOnly":{"default":0.587,"description":"Probability of a sexualOnly bond type for PWID","type":"float","min":0,"max":1}}}}},"prep":{"type":{"default":["Oral"],"values":["Oral","Inj"],"description":"Type of PrEP used in model","type":"array"},"target":{"default":0.3,"description":"Target coverage for PrEP therapy at 10 years","type":"float","min":0,"max":1},"start":{"default":0,"description":"Timestep at which prep should start in the model","type":"int","min":0},"efficacy":{"adherent":{"default":0.96,"description":"Probability of PrEP efficacy if agent is adherent","type":"float","min":0,"max":1},"non_adherant":{"default":0.76,"description":"Probabilty of PrEP efficacy if agent is non-adherent","type":"float","min":0,"max":1}},"discontinue":{"default":0.15,"description":"The probabability that an agent on PrEP discontinues PrEP at a given time step","type":"float","min":0,"max":1},"target_model":{"default":"CDCwomen","values":["CDCwomen","Allcomers","HighPN5","HighPN10","SR","Rec","MSM"],"description":"which model to use to determine who is enrolled in PrEP","type":"enum"},"half_life":{"default":40,"description":"Half life of injectable PrEP, used to calculate agent\'s prep load","type":"float","min":0},"peak_load":{"default":4.91,"description":"Maximum prep load that an agent can have (load at injection time step)","type":"float","min":0},"lai":{"prob":{"default":0,"description":"Probability of getting long acting injectable prep","type":"float","min":0,"max":1}},"pca":{"awareness":{"starting":{"default":0,"description":"Agent awareness of PrEP at time zero","type":"float","min":0},"prob":{"default":0.055,"description":"Probability an agent becomes aware of PrEP","type":"float","min":0,"max":1}},"prep":{"prob":{"default":".1275","description":"Probability of attempting * chance of initiating oral or inj PrEP","type":"float","min":0,"max":1}},"choice":{"default":"bridge","description":"how the PCA is selected","type":"enum","values":["bridge","eigenvector","random"]},"opinion":{"threshold":{"default":3,"description":"Opinion needed to initiate PrEP on a 0-4 scale (translated from 1-5 scale)","type":"float","min":0,"max":4},"transmission":{"default":0.005,"description":"Per-act probability of opinion change in less-prominent partner","type":"float","min":0,"max":1}},"knowledge":{"transmission":{"default":0.01,"description":"Per-act probability of knowledge change in unaware partner","type":"float","min":0,"max":1}},"attitude":{"type":"bin","description":"Probability distribution for attitude /opinion level","fields":{"prob":{"type":"float","min":0,"max":1}},"default":{"0":{"prob":0.167},"1":{"prob":0.082},"2":{"prob":0.184},"3":{"prob":0.139},"4":{"prob":0.429}}}}},"vaccine":{"type":{"default":"RV144","description":"type of vaccine to use, affects transmission probability","type":"enum","values":["RV144","HVTN702"]},"booster":{"default":true,"description":"Whether to use booster vaccines","type":"boolean"},"start":{"default":1,"description":"Time step at which to start vaccination","type":"int","min":0},"init":{"default":true,"description":"Whether to initialize the population with vaccination","type":"boolean"}}}')},"2ca9":function(e,t,a){"use strict";var i=a("2d36"),n=a.n(i);n.a},"2d36":function(e,t,a){},"32ba":function(e,t,a){},3447:function(e,t,a){e.exports=a.p+"img/titan_logo.ce6fc21d.png"},3639:function(e,t,a){"use strict";var i=a("32ba"),n=a.n(i);n.a},"438f":function(e,t,a){},"519e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.errored?a("div",[a("h1",[e._v("Error!")])]):a("div",[a("SideBar",{attrs:{sections:e.sections}}),a("router-view",{attrs:{params:e.params}})],1)])},r=[],o=(a("b64b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar-left"},[i("vk-nav",{directives:[{name:"vk-scroll",rawName:"v-vk-scroll"}]},[i("img",{attrs:{src:a("3447"),alt:"TITAN logo"}}),i("vk-nav-item-header",{attrs:{title:"TITAN Params"}}),i("vk-nav-item-divider"),i("li",{staticClass:"uk-parent"},[i("router-link",{attrs:{to:"/params"}},[e._v("Params")]),i("ul",{staticClass:"uk-nav-sub"},e._l(e.sections,(function(t){return i("div",{key:t},[i("li",{},[i("router-link",{attrs:{to:"/params#"+t+"-1"}},[e._v(e._s(t))])],1)])})),0)],1),i("vk-nav-item-divider"),i("li",{staticClass:"uk-parent"},[i("router-link",{attrs:{to:"/docs"}},[e._v("Docs")])],1)],1)],1)}),s=[],l={name:"SideBar",props:{sections:Array}},p=l,d=(a("a736"),a("2877")),c=Object(d["a"])(p,o,s,!1,null,null,null),u=c.exports,m={name:"app",components:{SideBar:u},props:{params:Object,errored:Boolean},data:function(){return{localParams:this.params}},computed:{sections:function(){return Object.keys(this.localParams)}}},f=m,h=Object(d["a"])(f,n,r,!1,null,null,null),b=h.exports,y=a("6d68"),g=a("5320"),v=(a("1941"),a("998c")),x=a.n(v),_=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main uk-section uk-section-default"},[a("div",{staticClass:"uk-container"},[a("h1",[e._v("Params")]),a("Param",{attrs:{level:1,params:e.params}})],1)])},P=[],k=a("5702"),S={name:"MainContent",components:{Param:k["default"]},props:{params:Object}},T=S,I=(a("3639"),Object(d["a"])(T,w,P,!1,null,null,null)),M=I.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticClass:"main uk-section uk-section-default"},[a("div",{staticClass:"uk-container"},[a("span",{domProps:{innerHTML:e._s(e.docsMd)}})])])},A=[],H=a("e0c1"),j=a.n(H),O="# Docs\n\nThe TITAN model uses various parameters to control the set up and running of the agent based model.  This website serves as a guide to what parameters currently exist and how to use this information to adjust the parameters needed for a specific run of the model.\n\n## Getting Started\n\nThe model takes several command line arguments for the setting and parameters:\n1) (required) a path to either a single [yaml](https://gettaurus.org/docs/YAMLTutorial/) file or a directory of yaml files;\n2) (optional) a setting name; and\n3) (optional) a true/false for whether to use the `base` setting (default `True`).\n\nEither a file or directory may be used for params, it just depends on if you like all params in one file or the organization of breaking it into multiple files.  The yaml file(s) only need to contain parameters that the user wishes to change from the default. Any unspecified parameters will revert to the defaults. The subset of parameters given to the model will be combined with all of the defaults to calculate the full parameter specification for a model run.  This full specification is additionally saved off to the `results` directory with the reports so that the run can be reproduced in the future.\n\nIf using `run_titan.py`:\n```bash\npython -m run_titan -p /dir/to/my_params -S atlanta\n```\n\nIf submitting a job using `subTitan.sh`:\n```bash\n./subTitan my_params/ -S atlanta\n```\n\nThe fully computed parameters for your model run can be found in your results directory as `params.yml`.\n\n### Settings\n\nSettings allow base populations to be defined and easily re-used across model runs.  They typically are named after the city they are modeled after.  One exception is `base`, which contains complex population-based defaults and can be used in combination with any other setting (or no setting). Any values set at this level will override what is in the `default` field of a parameter definition.\n\nThe order of preference for a parameter value is:\n\n1. Param files (`-p` flag or first argument to `subTitan.sh`)\n2. City Setting files (`-S` flag)\n3. Base Setting files (`-b` flag)\n4. Parameter definition defaults\n\n### Key Parameters\n\nParameters span a variety of areas, and many of them will either have a good default or will not be used at all based on the features in use in the model (e.g., if incarceration is off, the incarceration params won't be used).  However, some parameters are required for every model as they are pivotal to how the model runs.  These are:\n\n(**NB:** `classes` are foundational, but will make more sense once you've read everything else - circle back to this)\n* `classes`: There are defaults here; however they should always be reviewed.  Where a parameter of type `sub-dict` has `keys`, these keys refer to the parameters that have been set in classes.  For example, if `WHITE` is set as one of the races, where `races` is a `key` for a `sub-dict`, they yaml might look like:\n\n```yml\nsubdict_param:\n  WHITE:\n    ppl: .9\n```\n\n* `demographics`: For each of the populations that are set in the `classes` params, there should be a corresponding demographics key.  At a minimum, the `ppl` (population) percentage should be set. The model will validate that all the population percentages add up to 1 at both the `races` and `sex_types` levels.  So if our races are `WHITE` and `BLACK` (the default) and our only `sex_types` are `MSM` and `ABC` and our `populations` is `PWID` (the default), below is a minimal yaml needed to set that up.\n\n```yml\nclasses:\n  sex_types:\n    MSM: # this is a sex_type definition for a cis man who sleeps with cis men\n      gender: M\n      cis_trans: cis\n      sleeps_with:\n        - MSM\n    ABC: # this a sex_type definition that highlights how you can define a \"new\" sex_type with the params\n      gender: O\n      cis_trans: trans\n      sleeps_with: []\n\ndemographics:\n  WHITE:\n    ppl: 0.6 # 60% of the total population is WHITE\n    MSM:\n      ppl: 1.0 # 100% of the white population is MSM\n    PWID:\n      ppl: 0.1 # 10% of the white population is PWID - note, this is not a sex type so is outside of the summing to 100% constraint\n  BLACK:\n    ppl: 0.4 # 40% of the total population is BLACK\n    MSM:\n      ppl: 0.9 # 90% of the black population is MSM\n    ABC:\n      ppl: 0.1 # 10% of the black population is ABC\n    # PWID not needed to be specified if not used in the BLACK population as the default ppl is 0\n```\n\n* `features`: By default all `features` are set to `false` so that they are not in use.  If you want to use a feature (e.g. `incar`), update the `features` params accordingly.  Many features files have a related section which has the related parameters for that feature when it is on.\n\n```yml\nfeatures:\n  incar: true\n  vaccine: true\n\nincar:\n  haart:\n    prob: 0.9\n```\n\n* `model`: This controls core parts of the model, such as the population size, random seeds, and network type.\n\n### Data Types\n\nEvery parameter is associated with a data type to ensure that what is entered is what the model expects.  The types are:\n\n* `float`: a floating point number (e.g.`0.67`)\n* `int`: an integer (e.g. `2`)\n* `boolean`: a `true` or `false` value\n* `enum`: a value from a set list (see `values` of same definition for valid options)\n* `array`: a list of values from a set list (see `values` of same definition for valid options)\n* `bin`: a sub-structure with numeric keys and set fields (see `fields` of same definition for required sub-fields)\n* `sub-dict`: a sub-structure with keys that are based on the fields in `classes` (e.g. `races`)\n* `definition`: a sub-substructure with keys you define, but required fields (see `fields` of same definition for required sub-fields). Within a `definition`'s fields there is the option of a special `type` of `keys`, which means the values acceptable for that field are the keys that are defined in the definition (see `classes.sex_types` for an example).\n\n```yml\nfloat_param: 0.67\nint_param: 1\nboolean_param: true\nenum_param: option_a # values were option_a, option_b, option_c\narray_param: # values were option_a, option_b, option_c\n  - option_b\n  - option_c\nbin_param:\n  1:\n    prob: 0.45\n    min: 1\n    max: 6\n  2:\n    prob: 0.55\n    min: 7\n    max: 34\nsubdict_param:\n  CLASS_A:\n    my_param: 4\n  CLASS_B:\n    my_param: 5\ndefinition_param:\n  MY_PARAM:\n    weight: 20\n    age: 32\n  YOUR_PARAM:\n    weight: 22\n    age: 14\n```\n\nIn addition to the data types, there may be a `min`, `max`, or `values` set for the field.  This will ensure that the value is greater than or equal to the `min`, less than or equal to the `max` or listed within `values`.\n",C={name:"DocsContent",data:function(){return{docsMd:j()(O)}}},E=C,B=(a("2ca9"),Object(d["a"])(E,W,A,!1,null,null,null)),R=B.exports;i["a"].use(_["a"]);var N=[{path:"/params",name:"params",component:M},{path:"/docs",name:"docs",component:R},{path:"*",redirect:"/params"}],D=new _["a"]({mode:"history",base:"/titan-params-app/",routes:N,scrollBehavior:function(e,t,a){return a||(e.hash?{selector:e.hash}:{x:0,y:0})}}),F=D,q=a("1725");i["a"].use(y["a"]),i["a"].use(g["a"]),i["a"].use(x.a),i["a"].config.productionTip=!1,new i["a"]({el:"#app",router:F,render:function(e){return e(b,{props:{params:this.params,errored:this.errored}})},data:{params:q,errored:!1}})},5702:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:e.style},["default"in e.params?a("ParamItem",{attrs:{params:e.params,level:e.level,title:"<keys>"}}):e._l(e.params,(function(t,i){return a("div",{key:i,attrs:{id:i+"-"+e.level}},[t.constructor!==Object?a("Field",{attrs:{name:i,item:t}}):a("div",[1===e.level?a("hr"):e._e(),"default"in t?a("ParamItem",{attrs:{params:t,level:e.level,title:i}}):a("ParamHeader",{attrs:{title:i}},[a("Param",{attrs:{level:e.nextLevel,params:t}})],1)],1)],1)}))],2)},n=[],r=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ParamHeader",{attrs:{title:e.title,type:e.params.type}},[a("ul",{staticClass:"uk-list param-body"},[a("li",[e._v(e._s(e.params.description))]),e._l(e.nonStandardParams,(function(e,t){return a("Field",{key:t,attrs:{name:t,item:e}})})),e.params.default.constructor===Object?a("div",[a("li",[a("strong",[e._v("default:")])]),a("Param",{attrs:{level:e.nextLevel,params:e.params.default}})],1):a("Field",{attrs:{name:"default",item:e.params.default}})],2)])}),o=[],s=(a("4de4"),a("caad"),a("13d5"),a("b64b"),a("d3b7"),a("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[e.item.constructor===Object?a("span",[a("strong",[e._v(e._s(e.name)+":")]),a("ul",e._l(e.item,(function(e,t){return a("Field",{key:t,attrs:{name:t,item:e}})})),1)]):e.item.constructor===Array?a("span",{staticClass:"inline"},[a("strong",[e._v(e._s(e.name)+":")]),a("p",{staticClass:"mono"},[e._v(" [ "+e._s(e.joinArray())+" ]")])]):a("span",[a("strong",[e._v(e._s(e.name)+": ")]),a("span",{staticClass:"mono"},[e._v(e._s(e.item))])])])}),l=[],p=(a("a15b"),{name:"Field",props:{name:String,item:[String,Number,Array,Object,Boolean]},methods:{joinArray:function(){return this.item.join(", ")}}}),d=p,c=(a("6b18"),a("2877")),u=Object(c["a"])(d,s,l,!1,null,null,null),m=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-box-shadow-small uk-padding-none"},[a("div",{staticClass:"uk-padding-small"},[a("div",{staticClass:"header"},[a("vk-icon",{attrs:{icon:"chevron-right",ratio:"0.7"}}),a("h4",{staticClass:"mono"},[e._v(e._s(e.title))]),e.type?a("p",{staticClass:"mono"},[e._v(" ::"+e._s(e.type))]):e._e()],1),e._t("default")],2)])},h=[],b={name:"ParamHeader",props:{title:String,type:String}},y=b,g=(a("af45"),Object(c["a"])(y,f,h,!1,null,null,null)),v=g.exports,x={name:"ParamItem",props:{level:Number,params:Object,title:String},data:function(){return{standardItems:["default","type","description"]}},components:{Param:function(){return Promise.resolve().then(a.bind(null,"5702"))},Field:m,ParamHeader:v},computed:{nonStandardParams:function(){var e=this;return Object.keys(this.params).filter((function(t){return!e.standardItems.includes(t)})).reduce((function(t,a){return t[a]=e.params[a],t}),{})},nextLevel:function(){return this.level+1}}},_=x,w=(a("6531"),Object(c["a"])(_,r,o,!1,null,null,null)),P=w.exports,k={name:"Param",props:{level:Number,params:Object},components:{ParamItem:P,Field:m,ParamHeader:v},computed:{style:function(){return 1===this.level?"padding-left: 0px":"padding-left: 30px"},nextLevel:function(){return this.level+1}}},S=k,T=Object(c["a"])(S,i,n,!1,null,null,null);t["default"]=T.exports},6531:function(e,t,a){"use strict";var i=a("519e"),n=a.n(i);n.a},"6b18":function(e,t,a){"use strict";var i=a("438f"),n=a.n(i);n.a},a0a6:function(e,t,a){},a736:function(e,t,a){"use strict";var i=a("a0a6"),n=a.n(i);n.a},af45:function(e,t,a){"use strict";var i=a("0417"),n=a.n(i);n.a}});
//# sourceMappingURL=app.4abff600.js.map