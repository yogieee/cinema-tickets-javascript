/* eslint-disable */

export default class SeatReservationService {
  reserveSeat(accountId, totalSeatsToAllocate) {
    if (!Number.isInteger(accountId)) {
      console.log("asadas" + accountId);
      throw new TypeError("accountId must be an integer");
    }

    if (!Number.isInteger(totalSeatsToAllocate)) {
      throw new TypeError("totalSeatsToAllocate must be an integer");
    }
  }
}
