import { EmptyGoals } from "./components/empty-goals";
import useSWR from "swr";
import { Summary } from "./components/summary";
import { Dialog } from "./components/ui/dialog";
import { getSummary } from "./service/get-summary";
import { Logo } from "./components/ui/logo";
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    console.log('Eu to aquiiii');

    async function teste() {
      const result = await getSummary("/summary");

      console.log('useEffect', result);
    }

    teste();
  }, [])
  const { data, isLoading, error } = useSWR("/summary", async (url) => {
    const result = await getSummary(url);

      console.log('swr', result);

    return result;
  }, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });
  const summary = data ? data : { total: 0, goalsPerDay: null, completed: 0};

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Logo />
      </div>
    );
  }

  console.log({data, isLoading, error});

  return (
   <h1>sdsdsdsdssd</h1>
  );
}
