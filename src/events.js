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
   * @param {function} listener
   */
  this.addEvent = function(element, type, listener) {
    if (typeof element.addEventListener === 'function') {
      element.addEventListener(type, listener);
    } else {
      element.attachEvent('on' + type, listener);
    }
  };
  /**
   * @param {!HTMLElement} element
   * @param {string} type
   * @param {function} listener
   */
  this.removeEvent = function(element, type, listener) {
    if (typeof element.removeEventListener === 'function') {
      element.removeEventListener(type, listener);
    } else {
      element.detachEvent('on' + type, listener);
    }
  };
}());
