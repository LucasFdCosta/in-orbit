import { CheckCircle2, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';
import { InOrbitIcon } from './in-orbit-icon';
import { Progress, ProgressIndicator } from './ui/progress-bar';
import { Separator } from './ui/separator';
import { OutlineButton } from './ui/outline-button';

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">Aug 5 to 10</span>
        </div>

        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Add goal
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>
            You've completed <span className="text-zinc-100">8</span> of{' '}
            <span className="text-zinc-100">15</span> activities this week
          </span>
          <span>58%</span>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Swim
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Work out
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Sunbathe
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Your week</h2>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Sunday <span className="text-zinc-400 text-sm">(Aug 10)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Monday <span className="text-zinc-400 text-sm">(Aug 11)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Tuesday <span className="text-zinc-400 text-sm">(Aug 12)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  You've completed{' '}
                  <span className="text-zinc-100">"Sunbathe"</span> at{' '}
                  <span className="text-zinc-100">10:00am</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
