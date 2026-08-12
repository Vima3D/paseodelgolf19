import { useState, useEffect } from "react";

export function useOpeningStatus() {
  const [timeString, setTimeString] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setTimeString(`${hours}:${minutes}`);

      const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const minutesToday = now.getHours() * 60 + now.getMinutes();

      const openDays = [0, 1, 2, 5, 6]; // Sun, Mon, Tue, Fri, Sat
      let open = false;

      if (openDays.includes(day) && minutesToday >= 13 * 60) {
        open = true;
      }

      // Check if past midnight (00:00 - 00:59) and previous day was open
      const previousDay = (day + 6) % 7;
      if (openDays.includes(previousDay) && minutesToday < 60) {
        open = true;
      }

      setIsOpen(open);
    }

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeString, isOpen };
}
