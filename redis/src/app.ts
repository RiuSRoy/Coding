import { QueryController } from "./controller/QueryController";
import { InMemoryDatabase } from "./service/inMemoryDb";

export type AttributeType = Record<string, string | number | boolean>;
const inMemoryDatabase = new InMemoryDatabase<AttributeType>();
const queryController = new QueryController(inMemoryDatabase);

queryController.put("sde_bootcamp", { title: "SDE-Bootcamp", price: "30000.00", enrolled: false, estimated_time: "30" })
queryController.put("sde_kickstart", { title: "SDE-Kickstart", price: "4000", enrolled: true, estimated_time: 8 })
queryController.get("sde_bootcamp");
console.log('\n');

queryController.keys();
console.log('\n');


queryController.get("sde_kickstart");
console.log('\n');

queryController.put("sde_bootcamp", { title: "SDE-Bootcamp", enrolled: true, estimated_time: "30" })

queryController.delete("sde_kickstart");

queryController.get("sde_kickstart")