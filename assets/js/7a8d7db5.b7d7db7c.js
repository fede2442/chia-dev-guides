"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[2330],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(4334),r="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(3117),l=a(7294),r=a(4334),o=a(2389),i=a(7392),s=a(7094),u=a(2466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a,o=e.lazy,m=e.block,d=e.defaultValue,h=e.values,k=e.groupId,f=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,C=(0,l.useState)(y),I=C[0],O=C[1],x=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var P=w[k];null!=P&&P!==I&&b.some((function(e){return e.value===P}))&&O(P)}var E=function(e){var t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==I&&(S(t),O(n),null!=k&&T(k,String(n)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,l=x.indexOf(e.currentTarget)+1;a=null!=(n=x[l])?n:x[0];break;case"ArrowLeft":var r,o=x.indexOf(e.currentTarget)-1;a=null!=(r=x[o])?r:x[x.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,a=e.label,o=e.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},5381:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=a(3117),l=a(102),r=(a(7294),a(3905)),o=a(5488),i=a(5162),s=["components"],u={id:"simulator-user-guide",slug:"/simulator-user-guide",title:"Simulator User Guide"},c=void 0,p={unversionedId:"simulator/simulator-user-guide",id:"simulator/simulator-user-guide",title:"Simulator User Guide",description:"Intro",source:"@site/guides/simulator/simulator-user-guide.mdx",sourceDirName:"simulator",slug:"/simulator-user-guide",permalink:"/guides/simulator-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/simulator/simulator-user-guide.mdx",tags:[],version:"current",frontMatter:{id:"simulator-user-guide",slug:"/simulator-user-guide",title:"Simulator User Guide"},sidebar:"tutorialSidebar",previous:{title:"DataLayer User Guide",permalink:"/guides/datalayer-user-guide"},next:{title:"Why Chia is Great",permalink:"/guides/why-chia-is-great-video-series"}},m={},d=[{value:"Intro",id:"intro",level:2},{value:"Install chia-dev-tools",id:"install-chia-dev-tools",level:3},{value:"Install and configure the simulator",id:"install-and-configure-the-simulator",level:3},{value:"Use the simulator",id:"use-the-simulator",level:3}],h={toc:d};function k(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This document will guide you through the process of setting up Chia's Simulator. For additional technical resources, see the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/12rpcs/simulator",title:"Simulator RPC API"},"Simulator RPC API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/13cli/simulator",title:"Simulator CLI Reference"},"Simulator CLI Reference"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is possible to run the simulator and either Chia's testnet or mainnet simultaneously. This is because the simulator will use its own ports and directories.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"install-chia-dev-tools"},"Install chia-dev-tools"),(0,r.kt)("p",null,"The simulator is included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-dev-tools")," GitHub repository. If you have already installed the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-dev-tools"),", feel free to skip to the ",(0,r.kt)("a",{parentName:"p",href:"#install-and-configure-the-simulator"},"next section"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a new terminal window and run the following to clone the chia-dev-tools repository, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-dev-tools.git -b main\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change to the cloned repository:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd chia-dev-tools\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create and activate a virtual environment:"),(0,r.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"python -m venv venv\n.\\venv\\Scripts\\Activate.ps1\n"))),(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\n. ./venv/bin/activate\n"))),(0,r.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\n. ./venv/bin/activate\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},".")," (chia-dev-tools):"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install .\n")),(0,r.kt)("p",null,"Several packages will be installed, including a bundled copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),". This process will typically take several minutes."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"chia-dev-tools")," should now be installed and configured properly. To test it, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv --help\n")),(0,r.kt)("p",{parentName:"li"},"You should get a usage statement. At this point, you're ready to set up the simulator."))),(0,r.kt)("h3",{id:"install-and-configure-the-simulator"},"Install and configure the simulator"),(0,r.kt)("p",null,"The simulator commands can all be accessed under ",(0,r.kt)("inlineCode",{parentName:"p"},"cdv sim"),". For a full list of the simulator commands, see our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/13cli/simulator",title:"Simulator CLI Reference"},"Simulator CLI Reference"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the simulator")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim create\n")),(0,r.kt)("p",null,"If you do not already have any keys in your OS keychain, you will be prompted to create one:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"No keys in keychain. Press 'q' to quit, or press any other key to generate a new key.")),(0,r.kt)("p",null,"After pressing any key (other than ",(0,r.kt)("inlineCode",{parentName:"p"},"q"),"), a new public/private key pair will be generated:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Generating private key")),(0,r.kt)("p",null,"If you already have one or more keys installed, you will be prompted to select one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Fingerprints:\nIf you already used one of these keys, select that fingerprint to skip the plotting process. Otherwise, select any key below.\n1) 3339549250\n2) 1239193935\n3) 378808701\nChoose a simulator key [1-3] ('q' to quit, or 'g' to generate a new key): 2\n")),(0,r.kt)("p",null,"This command will create several k-19 plots. These plots are significantly smaller than the k-32 plots used on mainnet (8 MiB vs 100 GiB). They will take less than a minute to create on most computers."),(0,r.kt)("p",null,"This command will also install a new version of Chia that contains a config file that is already set up for the simulator to run on its own ports."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now that you have the simulator environment set up, you can set the CHIA_ROOT env var to point to this environment. This will enable you to run the simulator from outside of chia-dev-tools:"),(0,r.kt)(o.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:CHIA_ROOT='~/.chia/simulator/main'\n"))),(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CHIA_ROOT=~/.chia/simulator/main\n"))),(0,r.kt)(i.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CHIA_ROOT=~/.chia/simulator/main\n")))),(0,r.kt)("p",{parentName:"li"},"Note that by setting CHIA_ROOT to the simulator in the current Powershell/terminal window, this enables you to run the simulator in tandem with a full node running on either the testnet or on mainnet. This is because the simulator uses different ports than a normal full node."))),(0,r.kt)("h3",{id:"use-the-simulator"},"Use the simulator"),(0,r.kt)("p",null,"This section will cover the basic commands for using the simulator."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start the simulator:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia start simulator\n")),(0,r.kt)("p",null,"This command is the equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"chia start node")," on testnet and mainnet."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Start your Chia wallet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia start wallet\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia_wallet: started\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Verify that the Chia simulator is running and synced:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia show -s\n")),(0,r.kt)("p",null,"The result will show that the network is ",(0,r.kt)("inlineCode",{parentName:"p"},"simulator0")," and the block height is 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Network: simulator0    Port: 44159   RPC Port: 22840\nNode ID: fba97a7cc4d9d96e581c0d28a77a3f6ca5f3a8be668164c2ae033ededc9a3c47\nGenesis Challenge: eb8c4d20b322be8d9fddbf9412016bdffe9a2901d7edb0e364e94266d0e095f7\nCurrent Blockchain Status: Full Node Synced\n\nPeak: Hash: 3cf2239c9d43050497b2b895d33e4c1427edc35bcced8e070da2b9ca60008e0f\n      Time: Mon Sep 26 2022 21:00:46 HKT                  Height:          1\n\nEstimated network space: 0.000 MiB\nCurrent difficulty: 1024\nCurrent VDF sub_slot_iters: 1024\nTotal iterations since the start of the blockchain: 11942\n\n  Height: |   Hash:\n        1 | 3cf2239c9d43050497b2b895d33e4c1427edc35bcced8e070da2b9ca60008e0f\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Farm a new block")),(0,r.kt)("p",null,"There are two ways to farm a new block. The simpler solution is with a CLI call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim farm\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Farmed 1 Transaction blocks\nBlock Height is now: 2\n")),(0,r.kt)("p",null,"If you want to direct the farming rewards to a specific address, you can call the RPC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'chia rpc full_node farm_block \'{"address":"<farming reward address>"}\'\n')),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "new_peak_height": 3,\n    "success": true\n}\n')),(0,r.kt)("p",null,"For more info on this command, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/12rpcs/simulator#farm_block"},"RPC documentation"),"."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Show your wallet's status (including the prefarm):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,r.kt)("p",null,"Result (in step 4 we farmed two blocks, thereby receiving 4 TXCH in rewards):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Wallet height: 3\nSync status: Synced\nBalances, fingerprint: 502984008\n\nChia Wallet:\n   -Total Balance:         21000004.0 txch (21000004000000000000 mojo)\n   -Pending Total Balance: 21000004.0 txch (21000004000000000000 mojo)\n   -Spendable:             21000004.0 txch (21000004000000000000 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n \nConnections:\nType      IP                                     Ports       NodeID      Last Connect      MiB Up|Dwn\nFULL_NODE 127.0.0.1                              44159/44159 fba97a7c... Sep 27 04:46:26      0.0|0.1    \n                                                 -Height: No Info    -Hash: No Info    -Trusted: True\n")),(0,r.kt)("p",null,"Note that your wallet is a normal Chia wallet, but it's running within the simulator. This could be helpful, for example, for testing reorgs. You can manually set up a reorg with the simulator and see how your wallet handles it."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Edit the simulator's configuration")),(0,r.kt)("p",null,"The simulator's config is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.chia/simulator/main/config/config.yaml"),". Just as with mainnet and testnet, if you make changes to this config, you will need to restart the simulator for the changes to take effect. This will not affect your regular Chia node."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Enable/disable auto farming")),(0,r.kt)("p",null,"By default, as soon as a new spend bundle enters the mempool, a new block will be farmed. In certain cases this may not be the desired behavior. To disable auto farming, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim autofarm off\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Auto farming is now off\n")),(0,r.kt)("p",null,"This action will take effect immediately; there is no need to restart the simulator."),(0,r.kt)("p",null,"To enable auto farming, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cdv sim autofarm on\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Auto farming is now on\n")))}k.isMDXComponent=!0}}]);