import AppUserController from "./controllers/AppUserController";
import DriverController from "./controllers/DriverController";
import OnlineDriverController from "./controllers/OnlineDriverController";
import TripController from "./controllers/TripController";
import VehicleController from "./controllers/VehicleController";
import { Trip } from "./models/Trip";
import { ADD_ON_REQUEST, TripRequestData } from "./models/TripRequestData";
import { VehicleSubType, VehicleType } from "./models/Vehicle";

const jodhuDriver = DriverController.registerDriver("Jodhu", "Singh", "12345", "5J458JGH");
const modhuDriver = DriverController.registerDriver("Modhu", "Ali", "45563", "UEDHWI45");


const jodhuSwift = VehicleController.registerVehicle("KA-01-1234", "swift desire", jodhuDriver.id);

const riya = AppUserController.registerAppUser("Riya", "Talukdar", "64322");

OnlineDriverController.driverComesOnline(jodhuDriver, jodhuSwift, { lat: 12.9716, lng: 77.5946, address: "Sikanderpur" });
OnlineDriverController.driverComesOnline(modhuDriver, jodhuSwift, { lat: 12.9716, lng: 77.5946, address: "Sikanderpur" });

const riyaTripReq = {
    userId: riya.id,
    startLocation: {
        lat: 13.921,
        lng: 34.642,
        address: "Metro Station"
    },
    endLocation: {
        lat: 78.45,
        lng: 34.111,
        address: "Ocus Technopolis"
    },
    vehicleType: VehicleType.CAR,
    vehicleSubType: VehicleSubType.SEDAN,
    addOns: [ADD_ON_REQUEST.WIFI, ADD_ON_REQUEST.PRIORITY_BOOKING],
}
const riyaTripPrice = TripController.calculatePriceForTrip(riyaTripReq);



const matched = TripController.findNearbyDriver(riyaTripReq, riyaTripPrice);
if (!matched) {
    console.log("No driver found!");
} else {
    const { trip, onlineDriver } = matched;
    TripController.acceptTripRequest(trip, onlineDriver);
    TripController.shareOtpAndStartTrip(trip.otp, trip);
}










