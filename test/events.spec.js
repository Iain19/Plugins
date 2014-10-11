describe('events plugin', function() {
  var context;

  beforeEach(function() {
    context = {};
    runEventsPlugin.call(context);
  });

  it('should expose addEvent', function() {
    expect(typeof context.addEvent).toBe('function');
  });

  it('should expose removeEvent', function() {
    expect(typeof context.removeEvent).toBe('function');
  });

  describe('addEvent', function() {
    it('should call #addEventListener with given type and listener if given element has the method', function() {
      var elementMock = jasmine.createSpyObj('element', ['addEventListener']);
      var type = 'click';
      var listener = function() {};

      context.addEvent(elementMock, type, listener);

      expect(elementMock.addEventListener).toHaveBeenCalledWith(type, listener);
      expect(elementMock.addEventListener.callCount).toBe(1);
    });

    it('should call #attachEvent with given type and listener if given element has not #addEventListener', function() {
      var elementMock = jasmine.createSpyObj('element', ['attachEvent']);
      var type = 'click';
      var listener = function() {};

      context.addEvent(elementMock, type, listener);

      expect(elementMock.attachEvent).toHaveBeenCalledWith('on' + type, listener);
      expect(elementMock.attachEvent.callCount).toBe(1);
    });
  });

  describe('removeEvent', function() {
    it('should call #removeEventListener with given type and listener if given element has the method', function() {
      var elementMock = jasmine.createSpyObj('element', ['removeEventListener']);
      var type = 'click';
      var listener = function() {};

      context.removeEvent(elementMock, type, listener);

      expect(elementMock.removeEventListener).toHaveBeenCalledWith(type, listener);
      expect(elementMock.removeEventListener.callCount).toBe(1);
    });

    it('should call #detachEvent with given type and listener if given element has not #removeEventListener', function() {
      var elementMock = jasmine.createSpyObj('element', ['detachEvent']);
      var type = 'click';
      var listener = function() {};

      context.removeEvent(elementMock, type, listener);

      expect(elementMock.detachEvent).toHaveBeenCalledWith('on' + type, listener);
      expect(elementMock.detachEvent.callCount).toBe(1);
    });
  });
});
