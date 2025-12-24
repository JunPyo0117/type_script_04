///////////////////////////////////////////////
// 싱클톤 패턴
// class Config {
//     private readonly option: any;
//     // private static _instance = new Config("test");
//     private static _instance: any;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//     private constructor(option: any) {
//         this.option = option;
//     }
//     public static getInstance() {
//         if (this._instance) {
//             return this._instance;
//         }
//         this._instance = new Config("test");
//         return this._instance;
//     }
// }
// const i1 = Config.getInstance();
// const i2 = Config.getInstance();
// console.log(Config.getInstance());
// console.log(i1 == i2);
///////////////////////////////////////////////
// 어뎁터 패턴
// class OldCalculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }
//     sub(a: number, b: number): number {
//         return a - b;
//     }
// }
// interface INewCalculator {
//     addAwithB(a: number, b: number): number;
//     subAwithB(a: number, b: number): number;
// }
// class Adapter extends OldCalculator implements INewCalculator {
//     addAwithB(a: number, b: number): number {
//         return this.add(a, b);
//     }
//     subAwithB(a: number, b: number): number {
//         return this.sub(a, b);
//     }
// }
// const a: INewCalculator = new Adapter();
// console.log(a.addAwithB(1, 2));
// console.log(a.subAwithB(1, 2));
///////////////////////////////////////////////
//builder 패턴
// class User {
//     private name?: string;
//     private height?: number;
//     private marketing?: boolean;
//     constructor(name?: string, height?: number, marketing?: boolean) {
//         if (name) this.name = name;
//         if (height) this.height = height;
//         if (marketing) this.marketing = marketing;
//     }
//     static Builder = class {
//         private _name?: string;
//         private _height?: number;
//         private _marketing?: boolean;
//         constructor(name?: string, height?: number, marketing?: boolean) {
//             if (name) this._name = name;
//             if (height) this._height = height;
//             if (marketing) this._marketing = marketing;
//         }
//         name(newName: string) {
//             this._name = newName;
//             return this;
//         }
//         height(newHeight: number) {
//             this._height = newHeight;
//             return this;
//         }
//         marketing(newMarketing: boolean) {
//             this._marketing = newMarketing;
//             return this;
//         }
//         build(): User {
//             return new User(this._name, this._height, this._marketing);
//         }
//     };
// }
// const u = new User.Builder()
//     .name("John")
//     .height(180)
//     .marketing(true)
//     .build();
// console.log(u);
// builder를 decorator로 구현
var BuilderInit = /** @class */ (function () {
    function BuilderInit() {
    }
    BuilderInit.Builder = /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.build = function () {
            return {};
        };
        return class_1;
    }());
    return BuilderInit;
}());
var User = function () {
    var _classDecorators = [Builder];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = BuilderInit;
    var User = _classThis = /** @class */ (function (_super) {
        __extends(User_1, _super);
        function User_1(name, height, marketing) {
            var _this = _super.call(this) || this;
            _this.name = name;
            _this.height = height;
            _this.marketing = marketing;
            return _this;
        }
        return User_1;
    }(_classSuper));
    __setFunctionName(_classThis, "User");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
function Builder(constructor, ctx) {
    var _a;
    var _ = new constructor();
    var keys = Object.keys(_); // name, height, marketing
    var temp = (_a = /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return class_2;
        }(constructor)),
        __setFunctionName(_a, "temp"),
        _a.Builder = /** @class */ (function () {
            function class_3() {
                var _loop_1 = function (key) {
                    var _b;
                    Object.defineProperties(this_1, (_b = {},
                        _b["_" + key] = {
                            value: null,
                            enumerable: true,
                            writable: true,
                            configurable: true,
                        },
                        _b[key] = {
                            value: function (newValue) {
                                this["_" + key] = newValue;
                                return this;
                            },
                            enumerable: false,
                            writable: false,
                            configurable: false,
                        },
                        _b));
                };
                var this_1 = this;
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    _loop_1(key);
                }
            }
            class_3.prototype.build = function () {
                var _this = this;
                return new (constructor.bind.apply(constructor, __spreadArray([void 0], keys.map(function (e) { return _this["_" + e]; }), false)))();
            };
            return class_3;
        }()),
        _a);
    // temp.prototype = Object.create(constructor.prototype);
    // temp.prototype.constructor = constructor;
    return temp;
}
var u1 = new User.Builder().name("John").build();
console.log(u1);
var u2 = new User.Builder().name("John").height(180).build();
console.log(u2);
var u3 = new User.Builder().name("John").height(180).marketing(true).build();
console.log(u3);
