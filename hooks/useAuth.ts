import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Presentation Mode: Use localStorage to simulate a logged-in state instantly
    // bypassing the need for a live Firebase configuration on Vercel.
    const checkDemoAuth = () => {
      const isDemoLoggedIn = typeof window !== 'undefined' && localStorage.getItem('demo_logged_in') === 'true';
      if (isDemoLoggedIn) {
        setUser({
          uid: "demo-user-123",
          displayName: "Sarah Jenkins",
          email: "sarah.j@example.com"
        } as User);
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    checkDemoAuth();
  }, []);

  return { user, loading };
}
