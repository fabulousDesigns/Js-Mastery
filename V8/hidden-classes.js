function Room() {
    this.bed = "king-sized";
    this.desk = true;
    this.tv = "42-inch"
}
let room1 = new Room();
let room2 = new Room();
console.log(room2.tv);
console.log(room1.tv);
console.log(room2.bed);
console.log(room1.bed);
console.log(room2.desk);
console.log(room1.desk);
// Here, the V8 engine creates a “hidden class” for Room objects. When I access room1.bed or room2.tv, the engine knows exactly where these properties are stored because all rooms share the same layout.

// Adding a Chair: Breaking the Standard
// Now let’s say I want to add a chair to one room only:
room1.chair = "Recliner"
// This is where the trouble starts. By adding a new property dynamically, room1 no longer matches the original hidden class. V8 creates a new hidden class for room1, which slows things down.

// Another Change, Another Hidden Class
// If I make a different change to another room, it causes even more inefficiency:
room2.sofa = "Leather";
// Now room1 and room2 both have unique hidden classes. Each new layout requires V8 to re-optimize its access patterns, which adds overhead.

// The “Consistent Room” Approach
// If I know in advance that some rooms will need chairs or sofas, I can include those properties from the start:

function RoomConsistent(chair, sofa) {
    this.bed = "King-sized";
    this.desk = true;
    this.tv = "42-inch";
    this.chair = chair || null; // Default to null if not provided
    this.sofa = sofa || null;
}

let room3 = new RoomConsistent("Recliner", null);
let room4 = new RoomConsistent(null, "Leather");

// Now all rooms share the same hidden class, even if some properties are unused. This keeps V8 running efficiently.

// The Takeaway
// When designing objects in JavaScript:
// Stick to consistent structures whenever possible.
// Initialize all properties upfront, even if some are left as null or undefined.
// Avoid dynamically adding or deleting properties after an object is created.
// By keeping your “hotel rooms” predictable, you let V8 optimize your code for the best performance.