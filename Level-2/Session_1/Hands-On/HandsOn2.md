### Hands-On (Part 2) 

1. **Type Narrowing (`createUserTS`):** Update `id` to accept `number | string`. Use `typeof` to convert it to a `number` when it is a `string`.
2. **Utility Types (`updateUserTS`):** Change `updates: User` to `updates: Partial<User>` so you can update only the fields you want. _(Bonus: use `Partial<Omit<User, "id">>` to lock `id`.)_
3. **Generics (`getUsersByRoleTS`):** Make the function generic (`<T Role extends role: { }>`) so it works on any array of objects that have a `role`.

---
