(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(6),o=a(5),l=a(0),u=a.n(l);function i(e){var t=e.countTotalFeedback,a=e.good,n=e.bad,r=e.neutral,c=e.countPositiveFeedbackPercentage;return u.a.createElement(u.a.Fragment,null,t()>0?u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"Good: ",a),u.a.createElement("p",null,"Neutral: ",r),u.a.createElement("p",null,"Bad: ",n),u.a.createElement("p",null,"Total: ",t()),u.a.createElement("p",null,"Positive feedback: ",c(),"%")):u.a.createElement("p",null,"No feedback given"))}function d(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{name:"good",onClick:e.onLeaveFeedback},"Good"),u.a.createElement("button",{name:"neutral",onClick:e.onLeaveFeedback},"Neutral"),u.a.createElement("button",{name:"bad",onClick:e.onLeaveFeedback},"Bad"))}function b(e){var t=e.title,a=e.children;return u.a.createElement("div",null,u.a.createElement("h2",null,t),a)}var s=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.buttonClickHandler=function(t){switch(t.target.name){case"good":e.setState((function(e){return{good:e.good+1}}));break;case"neutral":e.setState((function(e){return{neutral:e.neutral+1}}));break;case"bad":e.setState((function(e){return{bad:e.bad+1}}))}},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return Math.floor(e.state.good/t*100)},e}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(b,{title:"Please leave feedback"},u.a.createElement(d,{onLeaveFeedback:this.buttonClickHandler})),u.a.createElement(b,{title:"Statistics"},u.a.createElement(i,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,countTotalFeedback:this.countTotalFeedback,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage})))}}]),a}(l.Component),m=a(4);a.n(m).a.render(u.a.createElement(s,null),document.querySelector("#root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.f248b3ce.chunk.js.map