import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "First MeetUp",
    image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/6f/13/26/exterior.jpg?w=900&h=-1&s=1',
    address: "Galle, Sri Lanka",
    description: "This is the meetup page",
  },
  {
    id: "m2",
    title: "Second MeetUp",
    image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/6f/13/26/exterior.jpg?w=900&h=-1&s=1',
    address: "Galle, Sri Lanka",
    description: "This is the meetup page",
  },
];

function AllMeetUpPage() {
  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetupList meetups={DUMMY_DATA}/>
    </section>
  );
}

export default AllMeetUpPage;
