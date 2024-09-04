interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const fetcher = (): TimeLeft => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(`2024-12-31`) - +new Date();
    let timeLeft: TimeLeft;

    if (difference > 0) {
      timeLeft = {
        days: -1800,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  return calculateTimeLeft();
};

import useSWR from "swr";

export default function Timer() {
  const { data: timeLeft } = useSWR<TimeLeft>("timer", fetcher, {
    refreshInterval: 1000,
  });

  return (
    <div className="text-center flex gap-20 font-bold p-4">
      <div className="text-3xl font-bold">
        <p className="text-sm color-gray-300 font-bold mr-10">Days</p>
        {timeLeft?.days}
      </div>
      <div className="text-3xl font-bold">
        <p className="text-sm color-gray-300 font-bold">Hours</p>
        {timeLeft?.hours}
      </div>
      <div className="text-3xl font-bold">
        <p className="text-sm color-gray-300 font-bold">Minutes</p>
        {timeLeft?.minutes}
      </div>
      <div className="text-3xl font-bold">
        <p className="text-sm color-gray-300 font-bold">Seconds</p>
        {timeLeft?.seconds}
      </div>
    </div>
  );
}
