import logo from './assets/logo-in-orbit.svg';
import letsStart from './assets/lets-start-illustration.svg';
import { Plus } from 'lucide-react';
import { Button } from './components/ui/button';

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit logo" />
      <img src={letsStart} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed maxw80 text-center">
        You haven't registered any goals yet, how about creating one now?
      </p>

      <Button>
        <Plus className="size-4" />
        Add goal
      </Button>
    </div>
  );
}
