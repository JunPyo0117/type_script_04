///////////////////////////////////////////////
// 싱클톤 패턴
// class Config {
//     private readonly option: any;
//     // private static _instance = new Config("test");
//     private static _instance: any;

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

// // builder를 decorator로 구현
// abstract class BuilderInit {
//     static Builder = class<T extends object> {
//         [props: string]: Function;
//         build(): Partial<T> {
//             return {} as Partial<T>;
//         }
//     }
// }

// @Builder
// class User extends BuilderInit {
//     static Builder: any;  // 데코레이터가 런타임에 추가
    
//     constructor(
//         private name: string,
//         private height: number,
//         private marketing: boolean
//     ) {
//         super();
//     }
//     // static Builder = class {}
// }

// function Builder(
//     constructor: { new ( ...args: any[]): any },
//     ctx: ClassDecoratorContext
// ) {
//     const _ = new constructor();
//     const keys = Object.keys(_); // name, height, marketing

//     function temp(this: any, ...args: any[]) {
//         return constructor.apply(this, args);
//     }
    
//     temp.prototype = Object.create(constructor.prototype);
//     temp.prototype.constructor = constructor;
    
//     temp.Builder = class {
//         constructor() {
//             for ( const key of keys) {
//                 Object.defineProperties(this, {
//                     ["_" + key]: {
//                         value: null,
//                         enumerable: true,
//                         writable: true,
//                         configurable: true,
//                     },
//                     [key]: {
//                         value: function(newValue: any): typeof Builder {
//                             this["_" + key] = newValue;
//                             return this;
//                         },
//                         enumerable: false,
//                         writable: false,
//                         configurable: false,
//                     },
//                 });
//             }
//         }
        
//         build() {
//             return new constructor( ...keys.map((e) => (this as any)["_" + e]));
//         }
//     };
    
//     return temp as any;
// }

// const u1 = new User.Builder().name("John").build();
// console.log(u1);

// const u2 = new User.Builder().name("John").height(180).build();
// console.log(u2);

// const u3 = new User.Builder().name("John").height(180).marketing(true).build();
// console.log(u3);

///////////////////////////////////////////////

// proxy 패턴

// Subject - API가 정의된 인터페이스
// interface IPrinter {
//     init();
//     print(data: any)
// }

// // Real Subject - 실제 기능을 제공하는 클래스
// class Printer implements IPrinter {
//     init() {
//         console.log("Printer initialized");
//     }
//     print(data: any) {
//         console.log("Printing data: ", data);
//     }
// }

// // Proxy - 실제 기능을 제공하는 클래스를 래핑하고 추가 기능을 제공하는 클래스
// class PrinterProxy implements IPrinter {
//     constructor(private printer: Printer) {}

//     init() {
//         this.logging();
//         if (this.printer) return this.printer;
//         this.printer = new Printer();
//         return this.printer;
//     }
//     print(data: object & { id: string}) {
//         this.logging();
//         if (this.IsAuth(data.id)) {
//             this.printer.print(data);
//         };
//     }

//     private logging() {
//         console.log("PrinterProxy logging");
//     }

//     private IsAuth(id: string) {
//         if (id === "1234") return true;
//         return false;
//     }
// }


///////////////////////////////////////////////

// // template 패턴
// abstract class DatabaseETL {

//     public async process() {
//         const payload = await this.loadData();
//         const output = this.transformData(payload);
//         return output
//     } 
//     protected abstract loadData(): any[];
//     protected abstract transformData(originalData: any[]): any[];

//     save(data: Promise<any[]>) {
//         console.log("Saving data: ", data);
//     }
// }

// class CSVDatabaseETL extends DatabaseETL {
//     loadData() {
//         console.log("Loading data from CSV");
//         return [];
//     }
//     transformData(originalData: any[]) {
//         console.log("Transforming data from CSV");
//         return originalData.map((e) => e);
//     }
// }

// class MySQLDatabaseETL extends DatabaseETL {
//     loadData() {
//         console.log("Loading data from MySQL");
//         return [];
//     }
//     transformData(originalData: any[]) {
//         console.log("Transforming data from MySQL");
//         return originalData.map((e) => e);
//     }
// }

// class MongoDBDatabaseETL extends DatabaseETL {
//     loadData() {
//         console.log("Loading data from MongoDB");
//         return [];
//     }
//     transformData(originalData: any[]) {
//         console.log("Transforming data from MongoDB");
//         return originalData.map((e) => e);
//     }
// }


// // Node.1
// const csvETL = new CSVDatabaseETL();
// const result1 = csvETL.process();
// csvETL.save(result1);

// // Node.2
// const MongoDBETL = new MongoDBDatabaseETL();
// const result2 = MongoDBETL.process();
// MongoDBETL.save(result2);

// // Node.3
// const MySQLETL = new MySQLDatabaseETL();
// const result3 = MySQLETL.process();
// MySQLETL.save(result3);

///////////////////////////////////////////////

// observer 패턴
interface IObserver {
    update(data: any): void;
}

class ConsoleObserver implements IObserver {
    update(data: any) {
        console.log("Console: " + String(data));
    }
}

class LoggingObserver implements IObserver {
    update(data: any) {
        console.log("[Logging] update");
    }
}

abstract class ConfigTemplate {
    private observers: IObserver[] = [];

    public addObserver(observer: IObserver) {
        this.observers.push(observer);
    }

    public removeObserver(observer: IObserver) {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    public notify(payload: any) {
        for (const observer of this.observers) {
            observer.update(payload);
        }
    }
}

class Config extends ConfigTemplate {
    constructor(private value: string) {
        super();
    }

    public changeValue(newValue: string) {
        this.value = newValue;
        this.notify(newValue);
    }
}

const c = new Config("test");
c.addObserver(new ConsoleObserver());
c.addObserver(new LoggingObserver());
c.changeValue("test2");