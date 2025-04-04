// public fields
// writable, enumerable, and configurable props defined on each class instance or class constructor

// syntax

class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
/**
syntax restrictions:
The name of a static property (field or method) cannot be prototype.
The name of a class field (static or instance) cannot be constructor.
 */
