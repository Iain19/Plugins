/**
 * Cross-browser functions for work with Events
 *
 * @version 0.0.1
 *
 * @param {object} extendableObject - extend object with new methods. If not specified, 'window' will be used.
 */
(function(extendableObject) {
  'use strict';
  if (!(extendableObject instanceof Object)) {
    extendableObject = window;
  }
  /**
   * @param {HTMLElement} elem - element on which we hang event handler
   * @param {string} event - event we want to handle on
   * @param {function} handler - event handler
   * @param {boolean} elem - flag that define a using of capturing or bubbling stage of event
   */
  extendableObject.addEvent = function(elem, event, handler, useCapture) {
    if (useCapture === undefined) {
      useCapture = false;
    }
    if (typeof elem.addEventListener === 'function') {
      elem.addEventListener(event, handler, useCapture);
    } else {
      elem.attachEvent('on' + event, handler);
    }
  };
  /**
   * @param {HTMLElement} elem - element from which we remove event handler
   * @param {string} event - event we want to remove a handle from
   * @param {function} handler - event handler we want to remove
   * @param {boolean} elem - flag stage phase
   */
  extendableObject.removeEvent = function(elem, event, handler, useCapture) {
    if (useCapture === undefined) {
      useCapture = false;
    }
    if (typeof elem.removeEventListener === 'function') {
      elem.removeEventListener(event, handler, useCapture);
    } else {
      elem.detachEvent('on' + event, handler);
    }
  };
}());