import { AppUser } from "../models/AppUser";

class AppUserController {

    private appUsers: Record<string, AppUser> = {};
    private appUserCount: number = 0;

    registerAppUser(firstName: string, lastName: string, phoneNumber: string) {
        const appUser: AppUser = {
            id: this.appUserCount.toString(),
            firstName,
            lastName,
            phoneNumber,
            rating: 5,
            tripsCompleted: 0,
            isDeleted: false
        };
        this.appUsers[appUser.id] = appUser;
        this.appUserCount++;
        return appUser;
    }

    getAppUserDetails(driverId: string) {
        return this.appUsers[driverId];
    }
}

export default new AppUserController();