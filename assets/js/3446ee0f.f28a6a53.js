"use strict";(self.webpackChunkchia_dev_guides=self.webpackChunkchia_dev_guides||[]).push([[8158],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(4334),l="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),i=n(7294),l=n(4334),r=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,r=e.lazy,c=e.block,m=e.defaultValue,h=e.values,k=e.groupId,f=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),y=w.tabGroupChoices,C=w.setTabGroupChoices,x=(0,i.useState)(b),T=x[0],O=x[1],z=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var I=y[k];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&O(I)}var D=function(e){var t=e.currentTarget,n=z.indexOf(t),a=v[n].value;a!==T&&(E(t),O(a),null!=k&&C(k,String(a)))},W=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=z.indexOf(e.currentTarget)+1;n=null!=(a=z[i])?a:z[0];break;case"ArrowLeft":var l,r=z.indexOf(e.currentTarget)-1;n=null!=(l=z[r])?l:z[z.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return z.push(e)},onKeyDown:W,onFocus:D,onClick:D},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,r.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},1389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=n(5488),o=n(5162),s=["components"],u={slug:"/crash-course/chialisp",title:"Chialisp"},p=void 0,d={unversionedId:"crash-course/chialisp",id:"crash-course/chialisp",title:"Chialisp",description:"For this section of the course, you will learn how to set up your development environment, write Chialisp code, and execute it on the command-line.",source:"@site/guides/crash-course/chialisp.md",sourceDirName:"crash-course",slug:"/crash-course/chialisp",permalink:"/guides/crash-course/chialisp",draft:!1,editUrl:"https://github.com/Chia-Network/chia-dev-guides/edit/main/guides/crash-course/chialisp.md",tags:[],version:"current",frontMatter:{slug:"/crash-course/chialisp",title:"Chialisp"}},c={},m=[{value:"Dev Tools",id:"dev-tools",level:2},{value:"Chia Dev Tools",id:"chia-dev-tools",level:3},{value:"Run",id:"run",level:3},{value:"Brun",id:"brun",level:3},{value:"Writing a Chialisp Puzzle",id:"writing-puzzle",level:2},{value:"Comparisons and If",id:"comparisons-and-if",level:2},{value:"Text Editor",id:"text-editor",level:2},{value:"Chialisp Files",id:"chialisp-files",level:2},{value:"Convention",id:"convention",level:3}],h={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For this section of the course, you will learn how to set up your development environment, write Chialisp code, and execute it on the command-line."),(0,l.kt)("h2",{id:"dev-tools"},"Dev Tools"),(0,l.kt)("p",null,"To get started with Chialisp, you will first want to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-dev-tools"},"install Chia Dev Tools"),"."),(0,l.kt)("p",null,"Here is a summary of the instructions:"),(0,l.kt)(r.Z,{groupId:"OS",defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux/MacOS",value:"linux-macos"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir learning\ncd learning\npy -m venv venv\n./venv/Scripts/activate\npip install chia-dev-tools\ncdv --version\n"))),(0,l.kt)(o.Z,{value:"linux-macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir learning\ncd learning\npython3 -m venv venv\n. ./venv/bin/activate\npip install chia-dev-tools\ncdv --version\n")))),(0,l.kt)("p",null,"This will install the Chia Dev Tools within your activated virtual environment. You'll want to make sure this virtual environment is activated before working on Chialisp. You'll see a ",(0,l.kt)("inlineCode",{parentName:"p"},"(venv)")," on the left of your terminal prompt."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Virtual environments allow you to install specific Python packages that will only be usable with the environment that is currently active. This allows you to switch between different environments for different projects, or if you just want to use different software versions.")),(0,l.kt)("h3",{id:"chia-dev-tools"},"Chia Dev Tools"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cdv")," command provides a set of useful commands for building and running Chialisp programs, as well as some utilities for deploying smart coins on the Chia blockchain, which we will cover later on."),(0,l.kt)("p",null,"Run the following to see what commands it provides:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv\n")),(0,l.kt)("p",null,"For example, a Chialisp file can be built like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp build something.clsp\n")),(0,l.kt)("h3",{id:"run"},"Run"),(0,l.kt)("p",null,"You also have access to the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," command that can be used to compile Chialisp code directly."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If Chialisp code doesn't depend on any external parameters, the compiler will simplify it to the smallest form it can, which often means that this command will return the final output of the program."),(0,l.kt)("p",{parentName:"admonition"},"If this is the case, you can skip the ",(0,l.kt)("inlineCode",{parentName:"p"},"brun")," command.")),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"run '(+ 2 3)'\n")),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"5\n")),(0,l.kt)("hr",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The syntax ",(0,l.kt)("inlineCode",{parentName:"p"},"(+ 2 3)")," may look confusing. In Chialisp, we place the operator first, followed by the operands. This is known as ",(0,l.kt)("strong",{parentName:"p"},"prefix notation"),". Think of this as the equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"2 + 3")," in math and most other programming languages."),(0,l.kt)("p",{parentName:"admonition"},"It is set up this way because every program in Chialisp is written as a list, where the first item is the operator. ",(0,l.kt)("inlineCode",{parentName:"p"},"(+ 2 3)")," is a list of three elements with the first being the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," operator, and thus it's a valid Chialisp program.")),(0,l.kt)("h3",{id:"brun"},"Brun"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"brun")," command is different from the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," command in that it doesn't compile code. Instead, it takes the result of the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," command and executes it on the Chialisp Virtual Machine (CLVM) directly."),(0,l.kt)("p",null,"If you need to pass external parameters into the program, you will need to first compile it with ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"brun")," command with the parameters."),(0,l.kt)("p",null,"For example, let's say that the ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," command produced the following CLVM bytecode output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"2\n")),(0,l.kt)("p",null,"You could run it like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brun '2' '(42)'\n")),(0,l.kt)("p",null,"Which should produce the following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"42\n")),(0,l.kt)("p",null,"So Chialisp can calculate the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy"},"meaning of life"),"!"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"writing-puzzle"},"Writing a Chialisp Puzzle"),(0,l.kt)("p",null,"Let's start off with some terminology. Firstly, coins on the Chia blockchain use Chialisp programs named ",(0,l.kt)("strong",{parentName:"p"},"puzzles")," to secure the value stored within. The parameters to a puzzle are called its ",(0,l.kt)("strong",{parentName:"p"},"solution"),"."),(0,l.kt)("p",null,"To create puzzles that require a solution, we will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"mod")," operator. It allows us to take arguments passed in to customize the functionality and result of the puzzle."),(0,l.kt)("p",null,"A very basic example would be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"run '(mod (arg1 arg2) (+ arg1 arg2))'\n")),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"(+ 2 5)\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"What in the world is ",(0,l.kt)("inlineCode",{parentName:"p"},"(+ 2 5)")," that ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," returned? This is an example of Chialisp bytecode that is later executed by the Chialisp Virtual Machine (CLVM). It is not very human-readable, but don't worry about that, as you are not required to understand CLVM bytecode in order to use it."),(0,l.kt)("p",{parentName:"admonition"},"Our first command, ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),", will take Chialisp code and compile it to bytecode. Next, ",(0,l.kt)("inlineCode",{parentName:"p"},"brun")," will take that bytecode and execute it.")),(0,l.kt)("p",null,"We will then run this puzzle with the ",(0,l.kt)("inlineCode",{parentName:"p"},"brun")," command, followed by a solution of your choice:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(+ 2 5)' '(10 5)'\n")),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"15\n")),(0,l.kt)("admonition",{title:"reminder",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"We are now using ",(0,l.kt)("inlineCode",{parentName:"p"},"mod")," to demand a solution for our puzzle. Whenever this is the case, you will be required to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"brun")," command after ",(0,l.kt)("inlineCode",{parentName:"p"},"run"),".")),(0,l.kt)("p",null,"Pay close attention to the location of quotes and parenthesis. It's easy to get lost! With ",(0,l.kt)("inlineCode",{parentName:"p"},"brun"),", the solution is passed in as a distinct value surrounded by quotes. ",(0,l.kt)("inlineCode",{parentName:"p"},"(10, 5)")," is the solution in this example and translates to ",(0,l.kt)("inlineCode",{parentName:"p"},"arg1 = 10")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"arg2 = 5"),"."),(0,l.kt)("p",null,"You can run it again with a different solution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(+ 2 5)' '(20 7)'\n")),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"27\n")),(0,l.kt)("p",null,"At this point you have a working Chialisp puzzle that will take inputs and give back an output. Congrats on making it this far!"),(0,l.kt)("h2",{id:"comparisons-and-if"},"Comparisons and If"),(0,l.kt)("p",null,"Going with a contrived example, let's say we wanted to add two numbers and return ",(0,l.kt)("inlineCode",{parentName:"p"},"large")," if they were ",(0,l.kt)("inlineCode",{parentName:"p"},"> 100"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"small")," if they were ",(0,l.kt)("inlineCode",{parentName:"p"},"<= 100"),"."),(0,l.kt)("p",null,"You can compare two values like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"(> apples oranges)\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"apples")," is larger than ",(0,l.kt)("inlineCode",{parentName:"p"},"oranges"),", this returns ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),". Otherwise, the output is ",(0,l.kt)("inlineCode",{parentName:"p"},"()"),", which is equivalent to ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,l.kt)("p",null,"You can then use an if statement to return one of two different things depending on the result."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"(if <comparison> <result if true> <result if false>)\n")),(0,l.kt)("p",null,"A concrete example of an ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," would be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'run \'(if 1 "true" "false")\'\n')),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},'"true"\n')),(0,l.kt)("p",null,"Now, we will add ",(0,l.kt)("inlineCode",{parentName:"p"},"arg1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"arg2")," with the code ",(0,l.kt)("inlineCode",{parentName:"p"},"(+ arg1 arg2)")," and compare it to the literal value ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),". This comparison will determine whether the ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),". We end up with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'run \'(mod (arg1 arg2) (if (> (+ arg1 arg2) 100) "large" "small"))\'\n')),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},'(a (i (> (+ 2 5) (q . 100)) (q 1 . "large") (q 1 . "small")) 1)\n')),(0,l.kt)("p",null,"Next, let's put this bytecode through ",(0,l.kt)("inlineCode",{parentName:"p"},"brun"),", giving it a solution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(10 90)'\n")),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"small\n")),(0,l.kt)("p",null,"Now, again with a different solution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brun '(a (i (> (+ 2 5) (q . 100)) (q 1 . \"large\") (q 1 . \"small\")) 1)' '(10 91)'\n")),(0,l.kt)("p",null,"Which should return the following result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-chialisp"},"large\n")),(0,l.kt)("p",null,"The difference here being the new solution of ",(0,l.kt)("inlineCode",{parentName:"p"},"(10 91)"),". When added together, ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"91")," are greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),"."),(0,l.kt)("h2",{id:"text-editor"},"Text Editor"),(0,l.kt)("p",null,"Up to this point, we've been using the command line to write and run Chialisp programs. While this is efficient for quickly prototyping and testing small programs, it doesn't scale very well."),(0,l.kt)("p",null,"When writing larger programs in Chialisp, it'll be much easier to use a text editor of your choice and save them to a file. Both ",(0,l.kt)("a",{parentName:"p",href:"https://atom.io"},"Atom")," and ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," have extensions to improve the quality of life of writing Chialisp code. However, any LISP-based syntax highlighting will help as well."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you decide to use ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),", we have begun development on a ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ChiaNetwork.chialisp"},"Chialisp language server extension"),"."),(0,l.kt)("p",{parentName:"admonition"},"You may need to click the dropdown in the editor to install the prerelease version.")),(0,l.kt)("h2",{id:"chialisp-files"},"Chialisp Files"),(0,l.kt)("p",null,"We will be storing Chialisp code in files, then building and running the files on the command line using Chia Dev Tools. There are a few commands that we can use more effectively after setting up a project in this way."),(0,l.kt)("h3",{id:"convention"},"Convention"),(0,l.kt)("p",null,"The following file extensions are used for Chialisp:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Extension"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".clsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Chialisp source code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".clvm")),(0,l.kt)("td",{parentName:"tr",align:null},"Deserialized CLVM bytecode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".clvm.hex")),(0,l.kt)("td",{parentName:"tr",align:null},"Serialized CLVM bytecode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".clsp.hex")),(0,l.kt)("td",{parentName:"tr",align:null},"Generated CLVM bytecode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".sym")),(0,l.kt)("td",{parentName:"tr",align:null},"Generated Chialisp symbol table")))))}k.isMDXComponent=!0}}]);