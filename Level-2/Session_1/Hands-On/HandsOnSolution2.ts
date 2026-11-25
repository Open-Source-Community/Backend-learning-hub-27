export {};

type Role = "admin" | "member" | "guest";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  createdAt: Date;
  isActive: boolean;
}

// Edit 1: Type Narrowing (`number | string`)
function createUserTS(
  id: number | string,
  name: string,
  email: string,
  role: Role,
): User {
  const numericId = typeof id === "string" ? Number(id) : id;

  return {
    id: numericId,
    name,
    email,
    role,
    createdAt: new Date(),
    isActive: true,
  };
}

// Edit 2: Utility Type (`Partial`)
function updateUserTS(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

// Edit 3: Generics (`T extends { role: Role }`)
function getUsersByRoleTS<T extends { role: Role }>(
  users: T[],
  role: Role,
): T[] {
  return users.filter((user) => user.role === role);
}

// Quick test
const user1 = createUserTS(1, "Ahmed", "ahmed@example.com", "admin");
const user2 = createUserTS("2", "Sara", "sara@example.com", "member");
const updatedSara = updateUserTS(user2, { name: "Sara Ali" });
const admins = getUsersByRoleTS([user1, updatedSara], "admin");
