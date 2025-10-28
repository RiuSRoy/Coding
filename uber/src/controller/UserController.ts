import { Driver } from "../models/Driver";
import { Rider } from "../models/Rider";

class UserController {
    static userId = 1;

    static cabId = 1000;
    
    createDriver(name: string, cabNumberPlate: string) {
        const driver: Driver = {
            rating: 5,
            name,
            id: UserController.userId,
            cab: cabNumberPlate
        }
        UserController.userId++;
        return driver;
    }


    createRider(name: string) {
        const rider: Rider = {
            rating: 5,
            name,
            id: UserController.userId
        }
        UserController.userId++;
        return rider;
    }
}

export default new UserController();