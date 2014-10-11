/**
 * Cross-browser functions for work with Events
 *
 * @version 0.0.1
 */
(function() {
  'use strict';
  /**
   * @param {!HTMLElement} element
   * @param {string} event - event we want to handle on
   * @param {function} handler - event handler
   */
  this.addEvent = function(element, event, handler) {
    if (typeof element.addEventListener === 'function') {
      element.addEventListener(event, handler);
    } else {
      element.attachEvent('on' + event, handler);
    }
  };
  /**
   * @param {!HTMLElement} element
   * @param {string} event - event we want to remove a handle from
   * @param {function} handler - event handler we want to remove
   */
  this.removeEvent = function(element, event, handler) {
    if (typeof element.removeEventListener === 'function') {
      element.removeEventListener(event, handler);
    } else {
      element.detachEvent('on' + event, handler);
    }
  };
}());
