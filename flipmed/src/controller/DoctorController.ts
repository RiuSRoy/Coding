import { Doctor } from "../models/Doctor";
import { DoctorService } from "../services/DoctorService"

export class DoctorController {

    registerDoc(doctorId: string, name: string, speciality: string) {
        const doctorService = new DoctorService();
        const doctor: Doctor = doctorService.createDoctor(doctorId, name, speciality);
        console.log(`Welcome Dr. ${name} !!`);
        return doctor;
    }
}