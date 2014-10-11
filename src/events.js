/**
 * Cross-browser functions for work with Events
 *
 * @version 0.0.1
 */
(function() {
  'use strict';
  /**
   * @param {HTMLElement} elem - element on which we hang event handler
   * @param {string} event - event we want to handle on
   * @param {function} handler - event handler
   */
  this.addEvent = function(elem, event, handler) {
    if (typeof elem.addEventListener === 'function') {
      elem.addEventListener(event, handler);
    } else {
      elem.attachEvent('on' + event, handler);
    }
  };
  /**
   * @param {HTMLElement} elem - element from which we remove event handler
   * @param {string} event - event we want to remove a handle from
   * @param {function} handler - event handler we want to remove
   */
  this.removeEvent = function(elem, event, handler) {
    if (typeof elem.removeEventListener === 'function') {
      elem.removeEventListener(event, handler);
    } else {
      elem.detachEvent('on' + event, handler);
    }
  };
}());
