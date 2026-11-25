# 🐾 The Midnight Campus Rescue

> **The story:** It's midnight, and the university campus is full of lost items! A rescue team is trying to return lost belongings to their owners before morning. But their system is a mess — some IDs are numbers, some are strings, and some reports contain completely unexpected data. Your mission is to build a small, type-safe Lost & Found system using TypeScript!

---

## Tasks

### 1️⃣ Types & Variables
- Create a `type` called `ItemID` that accepts either a `number` or a `string`.
- Create a union type `ItemCategory` containing `"electronics"`, `"books"`, and `"personal"`.
- Create an enum `ItemStatus` containing `Lost`, `Found`, and `Returned`.
- Create variables using explicit type annotations and type inference.

### 2️⃣ Interfaces & Objects
Create an interface `LostItem` containing:
- `id`
- `name`
- `category`
- `status`
- `description` (optional)
- `reportedAt` (readonly)

Create at least 2 lost items using this interface.

### 3️⃣ Functions
Write a function `reportItem()` that:
- Accepts an item name, category, and ID.
- Has a default value for the item's status.
- Returns a `LostItem`.

Write another function `findItem()` that accepts an array of items and an ID, and returns the matching item or `undefined`.

### 4️⃣ Arrays & Tuples
- Create an array containing the reported items.
- Create a tuple called `location` containing a building name and a room number.
- Log the location of the lost item.

### 5️⃣ Union Types & Type Narrowing
Some students report their IDs in different formats.

- Create a function that accepts an `ItemID`.
- Use a type guard to check whether the ID is a number or a string.
- Handle both cases correctly.

### 6️⃣ Generics
Create a generic function called `wrapInResponse<T>()` that takes any value and returns an object containing:
- `success`
- `data`

Use it with a `LostItem` and an array of `LostItem`.

### 7️⃣ Utility Types
The rescue team sometimes updates only part of an item's information.

- Use `Partial<LostItem>` to create an update object.
- Write a function that updates an existing item without replacing all its properties.

### 8️⃣ Classes & Access Modifiers
Create a class `RescueTeam` that:
- Has a `readonly` team name.
- Has a `private` array storing reported items.
- Has a method to add a lost item.
- Has a method to display all reported items.

---

## 🎯 Bonus Challenge

The rescue team receives unknown data from an external report.

Create a variable of type `unknown`, then use **type guards** to safely check its type before using it.

---

### Expected Result

Your program should be able to report lost items, search for them, update their information, and manage them through a rescue team — while TypeScript catches invalid data before the program runs.

*Run your TypeScript file and save the campus before sunrise! 🌙🐾*
