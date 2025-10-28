/**
 * Urban Company - Service Marketplace Application
 *
 * Design Patterns Demonstrated:
 * 1. Factory Pattern (with Singleton) - ServiceCategoryFactory
 * 2. Builder Pattern - ServiceBuilder
 * 3. Repository Pattern - ServiceRepository, BookingRepository, TechnicianRepository
 * 4. Strategy Pattern - Pricing strategies (Standard, PeakHour, Discount)
 * 5. Observer Pattern - Booking notifications (Notification, Logging, Analytics)
 * 6. Decorator Pattern - Technician skill enhancement (Certified, Experienced, Premium)
 * 7. Composite Pattern - Hierarchical service structure
 */

import ServiceController from "./controller/ServiceController";
import BookingController from "./controller/BookingController";
import TechnicianController from "./controller/TechnicianController";
import { ServiceCategory } from "./models/Service";
import { PeakHourPricingStrategy } from "./strategies/PeakHourPricingStrategy";
import { DiscountPricingStrategy } from "./strategies/DiscountPricingStrategy";

console.log("=".repeat(80));
console.log("URBAN COMPANY - SERVICE MARKETPLACE DEMO");
console.log("=".repeat(80));

// ============================================================================
// 1. HIERARCHICAL SERVICE CREATION (Composite Pattern + Factory + Builder)
// ============================================================================
console.log("\n📋 STEP 1: Creating Hierarchical Service Structure");
console.log("-".repeat(80));

// SALON HIERARCHY: SALON -> WOMEN'S -> FACIAL -> O3 Hydra Facial
console.log("\n🏪 Building Salon Service Hierarchy...");

// Level 1: Root category
const womensServices = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Women's Services",
    "All beauty and grooming services for women"
);
console.log(`✓ Created category: ${womensServices.title} (ID: ${womensServices.id})`);

const mensServices = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Men's Services",
    "All grooming services for men"
);
console.log(`✓ Created category: ${mensServices.title} (ID: ${mensServices.id})`);

// Level 2: Sub-categories under Women's
const facialCategory = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Facial",
    "Facial treatments and skin care",
    womensServices.id
);
console.log(`✓ Created sub-category: ${facialCategory.title} (ID: ${facialCategory.id})`);

const hairCategory = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Hair Care",
    "Hair treatments and styling",
    womensServices.id
);
console.log(`✓ Created sub-category: ${hairCategory.title} (ID: ${hairCategory.id})`);

// Level 3: Specific service types under Facial
const hydraFacialType = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Hydra Facial",
    "Deep cleansing hydra facial treatments",
    facialCategory.id
);
console.log(`✓ Created service type: ${hydraFacialType.title} (ID: ${hydraFacialType.id})`);

const cleanupCategory = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Cleanup & Detan",
    "Face cleanup and detan services",
    facialCategory.id
);
console.log(`✓ Created service type: ${cleanupCategory.title} (ID: ${cleanupCategory.id})`);

// Level 4: Bookable services (leaf nodes)
const o3HydraFacial = ServiceController.createBookableService(
    ServiceCategory.SALON,
    "O3+ Hydra Facial",
    "Premium O3+ hydra facial for deep cleansing and hydration",
    60,
    1500,
    hydraFacialType.id!
);
console.log(`✓ Created bookable service: ${o3HydraFacial.title} (ID: ${o3HydraFacial.id}, ₹${o3HydraFacial.basePrice})`);

const cherylHydraFacial = ServiceController.createBookableService(
    ServiceCategory.SALON,
    "Cheryl's Hydra Facial",
    "Cheryl's signature hydra facial treatment",
    45,
    1200,
    hydraFacialType.id!
);
console.log(`✓ Created bookable service: ${cherylHydraFacial.title} (ID: ${cherylHydraFacial.id}, ₹${cherylHydraFacial.basePrice})`);

const basicCleanup = ServiceController.createBookableService(
    ServiceCategory.SALON,
    "Basic Cleanup",
    "Essential face cleanup service",
    30,
    600,
    cleanupCategory.id!
);
console.log(`✓ Created bookable service: ${basicCleanup.title} (ID: ${basicCleanup.id}, ₹${basicCleanup.basePrice})`);

// Hair services under Women's
const hairColorCategory = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Hair Coloring",
    "Professional hair coloring services",
    hairCategory.id
);

const globalHairColor = ServiceController.createBookableService(
    ServiceCategory.SALON,
    "Global Hair Color",
    "Full hair coloring service",
    90,
    2500,
    hairColorCategory.id!
);
console.log(`✓ Created bookable service: ${globalHairColor.title} (ID: ${globalHairColor.id}, ₹${globalHairColor.basePrice})`);

// Men's services
const mensHairCategory = ServiceController.createCategory(
    ServiceCategory.SALON,
    "Hair Cut & Styling",
    "Men's haircut and styling services",
    mensServices.id
);

const mensHaircut = ServiceController.createBookableService(
    ServiceCategory.SALON,
    "Basic Haircut",
    "Professional men's haircut",
    30,
    400,
    mensHairCategory.id!
);
console.log(`✓ Created bookable service: ${mensHaircut.title} (ID: ${mensHaircut.id}, ₹${mensHaircut.basePrice})`);

// CLEANING HIERARCHY
console.log("\n🧹 Building Cleaning Service Hierarchy...");

const homeCleaningCat = ServiceController.createCategory(
    ServiceCategory.CLEANING,
    "Home Cleaning",
    "Residential cleaning services"
);
console.log(`✓ Created category: ${homeCleaningCat.title} (ID: ${homeCleaningCat.id})`);

const deepCleaningCat = ServiceController.createCategory(
    ServiceCategory.CLEANING,
    "Deep Cleaning",
    "Intensive deep cleaning services",
    homeCleaningCat.id
);

const fullHomeDeepClean = ServiceController.createBookableService(
    ServiceCategory.CLEANING,
    "Full Home Deep Cleaning",
    "Complete deep cleaning of entire home",
    180,
    3500,
    deepCleaningCat.id!
);
console.log(`✓ Created bookable service: ${fullHomeDeepClean.title} (ID: ${fullHomeDeepClean.id}, ₹${fullHomeDeepClean.basePrice})`);

const kitchenDeepClean = ServiceController.createBookableService(
    ServiceCategory.CLEANING,
    "Kitchen Deep Cleaning",
    "Specialized kitchen deep cleaning",
    90,
    1500,
    deepCleaningCat.id!
);
console.log(`✓ Created bookable service: ${kitchenDeepClean.title} (ID: ${kitchenDeepClean.id}, ₹${kitchenDeepClean.basePrice})`);

// Display hierarchical tree
ServiceController.displayServiceTree(ServiceCategory.SALON);
ServiceController.displayServiceTree(ServiceCategory.CLEANING);

// ============================================================================
// 2. PRICING STRATEGIES (Strategy Pattern)
// ============================================================================
console.log("\n💰 STEP 2: Testing Different Pricing Strategies");
console.log("-".repeat(80));

// Standard pricing
const standardPrice = ServiceController.calculateServicePrice(o3HydraFacial);
console.log(`Standard Price for ${o3HydraFacial.title}: ₹${standardPrice}`);

// Peak hour pricing (50% increase)
ServiceController.setPricingStrategy(new PeakHourPricingStrategy());
const peakPrice = ServiceController.calculateServicePrice(o3HydraFacial, { isPeakHour: true });
console.log(`Peak Hour Price for ${o3HydraFacial.title}: ₹${peakPrice}`);

// Discount pricing (20% off)
ServiceController.setPricingStrategy(new DiscountPricingStrategy(20));
const discountPrice = ServiceController.calculateServicePrice(o3HydraFacial);
console.log(`Discounted Price for ${o3HydraFacial.title}: ₹${discountPrice} (20% off)`);

// Show hierarchy for a specific service
console.log(`\n🔍 Service Hierarchy Path for "${o3HydraFacial.title}":`);
const hierarchy = ServiceController.getServiceHierarchy(o3HydraFacial.id!, ServiceCategory.SALON);
console.log(hierarchy.map(s => s.title).join(" → "));

// ============================================================================
// 3. USER BROWSING SERVICES (Composite Pattern Navigation)
// ============================================================================
console.log("\n🔍 STEP 3: User Browsing Services - View Women's Services");
console.log("-".repeat(80));

// User wants to see all services under "Women's Services"
console.log("\n👤 User: Show me all services under Women's Services");
ServiceController.displayServicesUnder(womensServices.id!, ServiceCategory.SALON);

// Get all bookable services under Women's
const womensBookableServices = ServiceController.getBookableServicesUnder(womensServices.id!, ServiceCategory.SALON);
console.log(`\n📦 Total Bookable Services under Women's Services: ${womensBookableServices.length}`);
womensBookableServices.forEach(service => {
    const hierarchy = ServiceController.getServiceHierarchy(service.id!, ServiceCategory.SALON);
    const path = hierarchy.map(s => s.title).join(" > ");
    console.log(`  • ${service.title} - ₹${service.basePrice} (${service.duration}min)`);
    console.log(`    Path: ${path}`);
});

// User wants to see services under Facial category
console.log("\n\n👤 User: Show me all services under Facial");
ServiceController.displayServicesUnder(facialCategory.id!, ServiceCategory.SALON);

// Get only bookable services under Facial
const facialBookableServices = ServiceController.getBookableServicesUnder(facialCategory.id!, ServiceCategory.SALON);
console.log(`\n📦 Bookable Services under Facial: ${facialBookableServices.length}`);
facialBookableServices.forEach(service => {
    console.log(`  • ${service.title} - ₹${service.basePrice} (${service.duration}min)`);
});

// ============================================================================
// 4. TECHNICIAN MANAGEMENT (Decorator Pattern)
// ============================================================================
console.log("\n👨‍🔧 STEP 4: Adding Technicians with Skills (Decorator Pattern)");
console.log("-".repeat(80));

// Add basic technician
let tech1 = TechnicianController.addTechnician(
    "Rajesh Kumar",
    "rajesh@email.com",
    "9876543210",
    "Home Cleaning"
);
console.log(`✓ Added: ${tech1.getDescription()} - Rate: ₹${tech1.getHourlyRate()}/hr`);

// Decorate with experience
tech1 = TechnicianController.addExperience(tech1, 5);
console.log(`✓ Enhanced: ${tech1.getDescription()} - Rate: ₹${tech1.getHourlyRate()}/hr`);

// Decorate with certification
tech1 = TechnicianController.addCertification(tech1, ["ISO Certified", "Safety Training"]);
console.log(`✓ Enhanced: ${tech1.getDescription()} - Rate: ₹${tech1.getHourlyRate()}/hr`);

// Add salon technician
let tech2 = TechnicianController.addTechnician(
    "Priya Sharma",
    "priya@email.com",
    "9876543211",
    "Hair & Beauty"
);
console.log(`✓ Added: ${tech2.getDescription()} - Rate: ₹${tech2.getHourlyRate()}/hr`);

// Make premium
tech2 = TechnicianController.makePremium(tech2);
tech2 = TechnicianController.addExperience(tech2, 8);
console.log(`✓ Enhanced: ${tech2.getDescription()} - Rate: ₹${tech2.getHourlyRate()}/hr`);

// ============================================================================
// 5. BOOKING LIFECYCLE (Observer Pattern)
// ============================================================================
console.log("\n📅 STEP 5: Booking Lifecycle with Observer Pattern");
console.log("-".repeat(80));

// Create booking for O3 Hydra Facial
const booking = BookingController.createBooking(
    o3HydraFacial.id!,
    101, // customer ID
    new Date(2025, 11, 15, 10, 0), // scheduled for Dec 15, 2025 at 10:00 AM
    discountPrice,
    "123, MG Road, Bangalore"
);
console.log(`\n✓ Booking Created: #${booking.id} - Status: ${booking.getStatus()}`);

// Confirm booking
console.log("\n→ Confirming booking...");
BookingController.confirmBooking(booking.id!);
console.log(`  Current Status: ${booking.getStatus()}`);

// Assign technician
console.log("\n→ Assigning technician...");
BookingController.assignTechnician(booking.id!, 2); // Assigning Priya (salon specialist)
console.log(`  Current Status: ${booking.getStatus()}`);

// Start service
console.log("\n→ Starting service...");
BookingController.startService(booking.id!);
console.log(`  Current Status: ${booking.getStatus()}`);

// Complete service
console.log("\n→ Completing service...");
BookingController.completeBooking(booking.id!);
console.log(`  Current Status: ${booking.getStatus()}`);

// ============================================================================
// 6. ANOTHER BOOKING - CANCELLATION SCENARIO
// ============================================================================
console.log("\n📅 STEP 6: Booking Cancellation Scenario");
console.log("-".repeat(80));

const booking2 = BookingController.createBooking(
    mensHaircut.id!,
    102,
    new Date(2025, 11, 16, 14, 0),
    mensHaircut.basePrice,
    "456, Brigade Road, Bangalore"
);
console.log(`\n✓ Booking Created: #${booking2.id} - Status: ${booking2.getStatus()}`);

console.log("\n→ Confirming booking...");
BookingController.confirmBooking(booking2.id!);

console.log("\n→ Cancelling booking...");
BookingController.cancelBooking(booking2.id!);
console.log(`  Current Status: ${booking2.getStatus()}`);

// ============================================================================
// 7. REPORTING & ANALYTICS
// ============================================================================
console.log("\n📊 STEP 7: System Summary");
console.log("-".repeat(80));

const allServices = ServiceController.getAllServices();
console.log(`\nTotal Services: ${allServices.length}`);
allServices.forEach(s => {
    console.log(`  • ${s.title} (${s.category}) - ₹${s.basePrice}`);
});

const allTechnicians = TechnicianController.getAllTechnicians();
console.log(`\nTotal Technicians: ${allTechnicians.length}`);

const allBookings = BookingController.getAllBookings();
console.log(`\nTotal Bookings: ${allBookings.length}`);
allBookings.forEach(b => {
    console.log(`  • Booking #${b.id} - Status: ${b.getStatus()} - Price: ₹${b.totalPrice}`);
});

console.log("\n" + "=".repeat(80));
console.log("DEMO COMPLETED SUCCESSFULLY!");
console.log("=".repeat(80));

console.log("\n📚 Design Patterns Used:");
console.log("  1. ✓ Factory Pattern - Service category creation");
console.log("  2. ✓ Singleton Pattern - Single factory instance");
console.log("  3. ✓ Builder Pattern - Service object construction");
console.log("  4. ✓ Repository Pattern - Data access abstraction");
console.log("  5. ✓ Strategy Pattern - Dynamic pricing algorithms");
console.log("  6. ✓ Observer Pattern - Booking event notifications");
console.log("  7. ✓ Composite Pattern - Hierarchical service structure");
console.log("  8. ✓ Decorator Pattern - Technician skill enhancement");
console.log();