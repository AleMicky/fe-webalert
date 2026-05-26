"use client"

type AuthUser = {
  nombreCompleto?: string
  userName?: string
  roles?: string[]
}

export function useAuth() {
  const user: AuthUser = {
    nombreCompleto: "Usuario demo",
    userName: "demo@fe-webalert.local",
    roles: ["admin"],
  }

  return {
    user,
    isAuthenticated: true,
    isLoading: false,
    isLoggingOut: false,
    logout: async () => {},
  }
}
