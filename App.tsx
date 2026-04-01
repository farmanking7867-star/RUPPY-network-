import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

import Login from "@/pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";
import Mining from "@/pages/mining";
import Wallet from "@/pages/wallet";
import Referrals from "@/pages/referrals";
import History from "@/pages/history";
import Tasks from "@/pages/tasks";
import Leaderboard from "@/pages/leaderboard";
import Landing from "@/pages/landing";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import HowItWorks from "@/pages/how-it-works";
import NotFound from "@/pages/not-found";

const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const [resource, config] = args;
  const token = localStorage.getItem("ruppy_token");
  if (token && typeof resource === "string" && resource.startsWith("/api/")) {
    const newConfig = config || {};
    newConfig.headers = {
      ...newConfig.headers,
      Authorization: `Bearer ${token}`
    };
    return originalFetch(resource, newConfig);
  }
  return originalFetch(...args);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false },
  },
});

function ProtectedRoute({ component: Component }: { component: any }) {
  const [location, setLocation] = useLocation();
  const token = localStorage.getItem("ruppy_token");

  useEffect(() => {
    if (!token) setLocation("/landing");
  }, [token, location, setLocation]);

  if (!token) return null;
  return <Component />;
}

function HandleGoogleToken() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const googleToken = params.get("google_token");
    if (googleToken) {
      localStorage.setItem("ruppy_token", googleToken);
      queryClient.invalidateQueries();
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
      setLocation("/");
    }
  }, [setLocation]);
  return null;
}

function Router() {
  return (
    <>
      <HandleGoogleToken />
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/how-it-works" component={HowItWorks} />

        <Route path="/" component={() => <ProtectedRoute component={Home} />} />
        <Route path="/mining" component={() => <ProtectedRoute component={Mining} />} />
        <Route path="/wallet" component={() => <ProtectedRoute component={Wallet} />} />
        <Route path="/referrals" component={() => <ProtectedRoute component={Referrals} />} />
        <Route path="/history" component={() => <ProtectedRoute component={History} />} />
        <Route path="/tasks" component={() => <ProtectedRoute component={Tasks} />} />
        <Route path="/leaderboard" component={() => <ProtectedRoute component={Leaderboard} />} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
