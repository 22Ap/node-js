# JavaScript Prototypes vs `__proto__`

| Feature        | `prototype`        | `__proto__` |
|---------------|-------------------|-------------|
| Affects All Instances? | ✅ Yes | ⚠️ Yes (Unexpectedly) |
| Best Practice? | ✅ Yes | ❌ No (Can cause issues) |
| Can Modify Instance? | ❌ No | ✅ Yes (For one instance only) |

## Code Example
```javascript
Person.prototype.greet = function() {
    console.log("Hello!");
}; // ✅ Best way to add a method

p1.__proto__.greet = function() {
    console.log("Hi!"); 
}; // ❌ Affects all instances unexpectedly
