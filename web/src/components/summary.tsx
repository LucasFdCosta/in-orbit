import { CheckCircle2, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { DialogTrigger } from './ui/dialog';
import { InOrbitIcon } from './in-orbit-icon';
import { Progress, ProgressIndicator } from './ui/progress-bar';
import { Separator } from './ui/separator';
import { getSummary } from '../http/get-summary';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { PendingGoals } from './pending-goals';
// import ptBR from 'dayjs/locale/pt-BR';

// dayjs.locale(ptBR);

export function Summary() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  if (!data) {
    return null;
  }

  const firstDayOfWeek = dayjs().startOf('week').format('MMM D');
  const lastDayOfWeek = dayjs().endOf('week').format('MMM D');

  const completedPercentage = Math.round((data.completed * 100) / data.total);

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">
            {firstDayOfWeek} - {lastDayOfWeek}
          </span>
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
          <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>
            You've completed{' '}
            <span className="text-zinc-100">{data?.completed}</span> of{' '}
            <span className="text-zinc-100">{data?.total}</span> activities this
            week
          </span>
          <span>{completedPercentage}%</span>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Your week</h2>
          {Object.entries(data.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd');
            const formattedDate = dayjs(date).format('MMMM D');

            return (
              <div key={date} className="flex flex-col gap-4">
                <h3 className="font-medium">
                  {weekDay}{' '}
                  <span className="text-zinc-400 text-sm">
                    ({formattedDate})
                  </span>
                </h3>

                <ul className="flex flex-col gap-3">
                  {goals.map(goal => {
                    const time = dayjs(goal.completedAt).format('hh:mma');

                    return (
                      <li key={goal.id} className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 text-pink-500" />
                        <span className="text-sm text-zinc-400">
                          You've completed{' '}
                          <span className="text-zinc-100">{goal.title}</span> at{' '}
                          <span className="text-zinc-100">{time}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
