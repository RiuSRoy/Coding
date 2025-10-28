Theatre {
    city,
}

Screen {
    threatreId,
    rows: number,
    col: number,
    seats: Seat[]
    slotToPriceMap: Record<number, number>
}

MovieSlot {
    movieId: MovieId,
    startTime: number,
    duration: number,
    screenId: 
}

Movie: {
    genre: string,
    title: string,
    img: string
}

booking {
    userId: ,
    movieSlotId: MovieSlot,
}

Seat {
    x: string,
    y: string,
    status: "BOOKED" | "LOCKED" | "AVAILABLE" | "UNAVAILABLE"
}


// findSeat

findTheatres(city: string, movieId: string) {
    // fetch and return all theatres with city 
}




showSeats(theatreId: number) {

    // fetech all screens
    // display seats with status = "AVAILABLE"
}


bookSeat(seatId: number) {


    

    // mark seatId status = "LOCKED"

    // proceed with payment
    // on payment success, mark seatId status = "BOOKED"
}

1. if seat === "AVAILABLE", row level locking of status
2. showCoupons
3. Applycoupon -> final discountedPrice
2. create booking status = "LOCKED" 
3. initiate a call to PopStateEvet
4. Webhook call comes
5.if success, status = "BOOKED"
"FAILED" if failed














