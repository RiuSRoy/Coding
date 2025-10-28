import UserController from "./controller/UserController";
import DriverManager from "./manager/DriverManager";

const telgi = UserController.createDriver("Abdul Karim Telgi", "2003");
const mehta = UserController.createDriver("Harshad Mehta", "1993")

DriverManager.addDriver(telgi);
