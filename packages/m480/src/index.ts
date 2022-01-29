import * as utils from "./util";
import M480 from "./m480";

export default { M480, utils };

console.log(utils.listDevices());

console.log(utils.midiValueToDb(127));
