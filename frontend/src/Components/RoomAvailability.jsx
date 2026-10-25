
import { useState } from "react";
import "./RoomAvailability.css";

const rooms = [
  {
    id: 1,
    name: "Meeting Room A",
    capacity: 6,
    type: "Meeting Room",
    facilities: "Wi-Fi, Whiteboard",
  },
  {
    id: 2,
    name: "Meeting Room B",
    capacity: 10,
    type: "Meeting Room",
    facilities: "Wi-Fi, Projector",
  },
  {
    id: 3,
    name: "Conference Room",
    capacity: 20,
    type: "Conference Room",
    facilities: "Wi-Fi, Projector, Video Conferencing",
  },
  {
    id: 4,
    name: "Open Workspace",
    capacity: 12,
    type: "Workspace",
    facilities: "Wi-Fi, Power Outlets",
  },
];

// Sample booking data for demonstration.
// Each number represents the index of a booked hourly slot.
const sampleBookings = {
  1: [1, 4],
  2: [2, 5, 7],
  3: [0, 3, 6],
  4: [4, 8],
};

const timeSlots = [
  { start: "08:00", end: "09:00", label: "8–9 AM" },
  { start: "09:00", end: "10:00", label: "9–10 AM" },
  { start: "10:00", end: "11:00", label: "10–11 AM" },
  { start: "11:00", end: "12:00", label: "11 AM–12 PM" },
  { start: "12:00", end: "13:00", label: "12–1 PM" },
  { start: "13:00", end: "14:00", label: "1–2 PM" },
  { start: "14:00", end: "15:00", label: "2–3 PM" },
  { start: "15:00", end: "16:00", label: "3–4 PM" },
  { start: "16:00", end: "17:00", label: "4–5 PM" },
];

function RoomAvailability() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  const [roomFilter, setRoomFilter] = useState("all");
  const [selectedSlot, setSelectedSlot] = useState(null);

  function changeDate(numberOfDays) {
    setSelectedDate((previousDate) => {
      const newDate = new Date(previousDate);
      newDate.setDate(newDate.getDate() + numberOfDays);
      return newDate;
    });

    setSelectedSlot(null);
  }

  function formatDate(date) {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  const visibleRooms =
    roomFilter === "all"
      ? rooms
      : rooms.filter((room) => String(room.id) === roomFilter);

  function handleSlotSelection(room, slot, index) {
    const bookedSlots = sampleBookings[room.id] || [];

    if (bookedSlots.includes(index)) {
      return;
    }

    setSelectedSlot({
      roomId: room.id,
      roomName: room.name,
      startTime: slot.start,
      endTime: slot.end,
      date: selectedDate.toLocaleDateString("en-CA"),
    });
  }

  function handleContinueBooking() {
    if (!selectedSlot) {
      return;
    }

    // Later, navigate to your booking form or booking page.
    console.log("Selected booking:", selectedSlot);

    alert(
      `Selected ${selectedSlot.roomName}\n` +
      `Date: ${selectedSlot.date}\n` +
      `Time: ${selectedSlot.startTime} - ${selectedSlot.endTime}`
    );
  }

  return (
    <section className="room-availability">
      <div className="availability-header">
        <div>
          <h2>Room Availability</h2>
          <p>Find an available room for your preferred time.</p>
        </div>

        <div className="date-navigation">
          <button
            type="button"
            className="date-nav-button"
            onClick={() => changeDate(-1)}
            aria-label="Previous day"
          >
            &#8592;
          </button>

          <span className="selected-date">
            {formatDate(selectedDate)}
          </span>

          <button
            type="button"
            className="date-nav-button"
            onClick={() => changeDate(1)}
            aria-label="Next day"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="availability-toolbar">
        <label htmlFor="room-filter">Filter rooms</label>

        <select
          id="room-filter"
          value={roomFilter}
          onChange={(event) => {
            setRoomFilter(event.target.value);
            setSelectedSlot(null);
          }}
        >
          <option value="all">All Rooms</option>

          {rooms.map((room) => (
            <option key={room.id} value={String(room.id)}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      <div className="availability-legend">
        <span>
          <span className="legend-dot available-dot"></span>
          Available
        </span>

        <span>
          <span className="legend-dot booked-dot"></span>
          Booked
        </span>

        <span>
          <span className="legend-dot selected-dot"></span>
          Selected
        </span>
      </div>

      <div className="room-list">
        {visibleRooms.map((room) => {
          const bookedSlots = sampleBookings[room.id] || [];

          return (
            <article className="room-card" key={room.id}>
              <div className="room-details">
                <div className="room-icon" aria-hidden="true">
                  &#127970;
                </div>

                <div className="room-info">
                  <h3>{room.name}</h3>

                  <p>
                    {room.type} · Capacity: {room.capacity} people
                  </p>

                  <span className="room-facilities">
                    {room.facilities}
                  </span>
                </div>
              </div>

              <div className="room-slots">
                {timeSlots.map((slot, index) => {
                  const isBooked = bookedSlots.includes(index);

                  const isSelected =
                    selectedSlot?.roomId === room.id &&
                    selectedSlot?.startTime === slot.start;

                  let slotClass = "time-slot available";

                  if (isBooked) {
                    slotClass = "time-slot booked";
                  } else if (isSelected) {
                    slotClass = "time-slot selected";
                  }

                  return (
                    <button
                      key={slot.start}
                      type="button"
                      className={slotClass}
                      disabled={isBooked}
                      aria-pressed={isSelected}
                      onClick={() =>
                        handleSlotSelection(room, slot, index)
                      }
                    >
                      <span>{slot.label}</span>

                      <small>
                        {isBooked
                          ? "Booked"
                          : isSelected
                          ? "Selected"
                          : "Available"}
                      </small>
                    </button>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      {selectedSlot && (
        <div className="booking-selection">
          <div>
            <h3>Selected Time Slot</h3>

            <p>
              {selectedSlot.roomName} · {selectedSlot.date}
            </p>

            <p>
              {selectedSlot.startTime} – {selectedSlot.endTime}
            </p>
          </div>

          <button
            type="button"
            className="continue-booking-button"
            onClick={handleContinueBooking}
          >
            Continue Booking &#8594;
          </button>
        </div>
      )}
    </section>
  );
}

export default RoomAvailability;
