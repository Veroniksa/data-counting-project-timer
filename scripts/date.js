import {
    DateTime
} from "./linux.js";

export function diffDates(data1, data2) {
    const iso1 = DateTime.fromISO(data1);
    const iso2 = DateTime.fromISO(data2);

    return iso2.diff(iso1, ["years", "months", "days"]).toObject();

}
export function hello() {

}