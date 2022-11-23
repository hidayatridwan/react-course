import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const { isLoading, setIsLoading } = useState(true);
  const { loadedMeetups, setLoadedMeetups } = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://react-getting-started-f66a0-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      })
      .catch((error) => console.log(error));
  }, []);

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;