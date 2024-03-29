/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){!function(t,n){return"function"==typeof define&&define.amd?define(["jquery","waypoints"],n):n(t.jQuery)}(window,function(t){var n,i;return n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i=function(t,n){var i;return t.wrap(n.wrapper),i=t.parent(),i.data("isWaypointStickyWrapper",!0)},t.waypoints("extendFn","sticky",function(a){var r,s,e;return s=t.extend({},t.fn.waypoint.defaults,n,a),r=i(this,s),e=s.handler,s.handler=function(n){var i,a;return i=t(this).children(":first"),a=-1!==s.direction.indexOf(n),i.toggleClass(s.stuckClass,a),r.height(a?i.outerHeight():""),null!=e?e.call(this,n):void 0},r.waypoint(s),this.data("stuckClass",s.stuckClass)}),t.waypoints("extendFn","unsticky",function(){var t;return t=this.parent(),t.data("isWaypointStickyWrapper")?(t.waypoint("destroy"),this.unwrap(),this.removeClass(this.data("stuckClass"))):this})})}).call(this);