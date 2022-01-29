import { getInputs, getOutputs } from "easymidi";

const listDevices = () => {
    return { inputs: getInputs(), outputs: getOutputs() };
}

const midiValueToDb = (value: number) => midiFaderLevels[value]
// array index corresponds to midi value
// TODO: Type the rest of this out from the fader level table
const midiFaderLevels = [-Infinity, -80.0, -76.7, -73.3, ]

export { listDevices, midiValueToDb };