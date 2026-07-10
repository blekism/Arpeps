// Mock auth service backed by localStorage.
// Not real security — placeholder for a future backend.

export type User = { id: string; email: string; name: string };

const USERS_KEY = "pc.users";
const SESSION_KEY = "pc.session";

type StoredUser = User & { password: string };

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getSession(): User | null {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) ?? "null");
  } catch {
    return null;
  }
}

export function register(email: string, password: string, name: string): User {
  const users = readUsers();
  if (users.some((u) => u.email === email))
    throw new Error("Email already registered");
  const user: StoredUser = {
    id: crypto.randomUUID(),
    email,
    name,
    password,
  };
  users.push(user);
  writeUsers(users);
  const session: User = { id: user.id, email: user.email, name: user.name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function login(email: string, password: string): User {
  const users = readUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid email or password");
  const session: User = { id: user.id, email: user.email, name: user.name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}
