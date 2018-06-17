"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const h_1 = require("./h");
const Foo = () => h_1.h("div", null, "foo");
console.log(JSON.stringify(h_1.h("section", { bar: "bar" },
    h_1.h(Foo, null)), null, 2));
