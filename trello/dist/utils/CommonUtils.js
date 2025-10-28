"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomId = void 0;
function getRandomId(min = 1, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomId = getRandomId;
