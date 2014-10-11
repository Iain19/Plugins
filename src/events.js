/**
 * Cross-browser functions for work with Events
 *
 * @version 0.0.1
 */
(function() {
  'use strict';
  /**
   * @param {!HTMLElement} element
   * @param {string} type
   * @param {function} handler - event handler
   */
  this.addEvent = function(element, type, handler) {
    if (typeof element.addEventListener === 'function') {
      element.addEventListener(type, handler);
    } else {
      element.attachEvent('on' + type, handler);
    }
  };
  /**
   * @param {!HTMLElement} element
   * @param {string} type
   * @param {function} handler - event handler we want to remove
   */
  this.removeEvent = function(element, type, handler) {
    if (typeof element.removeEventListener === 'function') {
      element.removeEventListener(type, handler);
    } else {
      element.detachEvent('on' + type, handler);
    }
  };
}());
