
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model ShopConfig
 * 
 */
export type ShopConfig = $Result.DefaultSelection<Prisma.$ShopConfigPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShopUser
 * 
 */
export type ShopUser = $Result.DefaultSelection<Prisma.$ShopUserPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model BlockedSlot
 * 
 */
export type BlockedSlot = $Result.DefaultSelection<Prisma.$BlockedSlotPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model RecurrenceGroup
 * 
 */
export type RecurrenceGroup = $Result.DefaultSelection<Prisma.$RecurrenceGroupPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model DateException
 * 
 */
export type DateException = $Result.DefaultSelection<Prisma.$DateExceptionPayload>
/**
 * Model Blacklist
 * 
 */
export type Blacklist = $Result.DefaultSelection<Prisma.$BlacklistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ShopPlan: {
  FREE: 'FREE',
  PRO: 'PRO',
  BUSINESS: 'BUSINESS',
  ENTERPRISE: 'ENTERPRISE'
};

export type ShopPlan = (typeof ShopPlan)[keyof typeof ShopPlan]


export const SlotMode: {
  FIXED: 'FIXED',
  DYNAMIC: 'DYNAMIC'
};

export type SlotMode = (typeof SlotMode)[keyof typeof SlotMode]


export const ShopRole: {
  OWNER: 'OWNER',
  COLLABORATOR: 'COLLABORATOR'
};

export type ShopRole = (typeof ShopRole)[keyof typeof ShopRole]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW',
  EXPIRED: 'EXPIRED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type ShopPlan = $Enums.ShopPlan

export const ShopPlan: typeof $Enums.ShopPlan

export type SlotMode = $Enums.SlotMode

export const SlotMode: typeof $Enums.SlotMode

export type ShopRole = $Enums.ShopRole

export const ShopRole: typeof $Enums.ShopRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopConfig`: Exposes CRUD operations for the **ShopConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopConfigs
    * const shopConfigs = await prisma.shopConfig.findMany()
    * ```
    */
  get shopConfig(): Prisma.ShopConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopUser`: Exposes CRUD operations for the **ShopUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopUsers
    * const shopUsers = await prisma.shopUser.findMany()
    * ```
    */
  get shopUser(): Prisma.ShopUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedSlot`: Exposes CRUD operations for the **BlockedSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedSlots
    * const blockedSlots = await prisma.blockedSlot.findMany()
    * ```
    */
  get blockedSlot(): Prisma.BlockedSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurrenceGroup`: Exposes CRUD operations for the **RecurrenceGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurrenceGroups
    * const recurrenceGroups = await prisma.recurrenceGroup.findMany()
    * ```
    */
  get recurrenceGroup(): Prisma.RecurrenceGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dateException`: Exposes CRUD operations for the **DateException** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateExceptions
    * const dateExceptions = await prisma.dateException.findMany()
    * ```
    */
  get dateException(): Prisma.DateExceptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blacklist`: Exposes CRUD operations for the **Blacklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blacklists
    * const blacklists = await prisma.blacklist.findMany()
    * ```
    */
  get blacklist(): Prisma.BlacklistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Shop: 'Shop',
    ShopConfig: 'ShopConfig',
    User: 'User',
    ShopUser: 'ShopUser',
    Service: 'Service',
    Availability: 'Availability',
    BlockedSlot: 'BlockedSlot',
    Customer: 'Customer',
    RecurrenceGroup: 'RecurrenceGroup',
    Booking: 'Booking',
    DateException: 'DateException',
    Blacklist: 'Blacklist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "shop" | "shopConfig" | "user" | "shopUser" | "service" | "availability" | "blockedSlot" | "customer" | "recurrenceGroup" | "booking" | "dateException" | "blacklist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      ShopConfig: {
        payload: Prisma.$ShopConfigPayload<ExtArgs>
        fields: Prisma.ShopConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>
          }
          findFirst: {
            args: Prisma.ShopConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>
          }
          findMany: {
            args: Prisma.ShopConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>[]
          }
          create: {
            args: Prisma.ShopConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>
          }
          createMany: {
            args: Prisma.ShopConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>[]
          }
          delete: {
            args: Prisma.ShopConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>
          }
          update: {
            args: Prisma.ShopConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>
          }
          deleteMany: {
            args: Prisma.ShopConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>[]
          }
          upsert: {
            args: Prisma.ShopConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopConfigPayload>
          }
          aggregate: {
            args: Prisma.ShopConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopConfig>
          }
          groupBy: {
            args: Prisma.ShopConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ShopConfigCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShopUser: {
        payload: Prisma.$ShopUserPayload<ExtArgs>
        fields: Prisma.ShopUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          findFirst: {
            args: Prisma.ShopUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          findMany: {
            args: Prisma.ShopUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>[]
          }
          create: {
            args: Prisma.ShopUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          createMany: {
            args: Prisma.ShopUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>[]
          }
          delete: {
            args: Prisma.ShopUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          update: {
            args: Prisma.ShopUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          deleteMany: {
            args: Prisma.ShopUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>[]
          }
          upsert: {
            args: Prisma.ShopUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopUserPayload>
          }
          aggregate: {
            args: Prisma.ShopUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopUser>
          }
          groupBy: {
            args: Prisma.ShopUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopUserCountArgs<ExtArgs>
            result: $Utils.Optional<ShopUserCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      BlockedSlot: {
        payload: Prisma.$BlockedSlotPayload<ExtArgs>
        fields: Prisma.BlockedSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          findFirst: {
            args: Prisma.BlockedSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          findMany: {
            args: Prisma.BlockedSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>[]
          }
          create: {
            args: Prisma.BlockedSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          createMany: {
            args: Prisma.BlockedSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>[]
          }
          delete: {
            args: Prisma.BlockedSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          update: {
            args: Prisma.BlockedSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          deleteMany: {
            args: Prisma.BlockedSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>[]
          }
          upsert: {
            args: Prisma.BlockedSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          aggregate: {
            args: Prisma.BlockedSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedSlot>
          }
          groupBy: {
            args: Prisma.BlockedSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedSlotCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedSlotCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      RecurrenceGroup: {
        payload: Prisma.$RecurrenceGroupPayload<ExtArgs>
        fields: Prisma.RecurrenceGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurrenceGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurrenceGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>
          }
          findFirst: {
            args: Prisma.RecurrenceGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurrenceGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>
          }
          findMany: {
            args: Prisma.RecurrenceGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>[]
          }
          create: {
            args: Prisma.RecurrenceGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>
          }
          createMany: {
            args: Prisma.RecurrenceGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurrenceGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>[]
          }
          delete: {
            args: Prisma.RecurrenceGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>
          }
          update: {
            args: Prisma.RecurrenceGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>
          }
          deleteMany: {
            args: Prisma.RecurrenceGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurrenceGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurrenceGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>[]
          }
          upsert: {
            args: Prisma.RecurrenceGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrenceGroupPayload>
          }
          aggregate: {
            args: Prisma.RecurrenceGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurrenceGroup>
          }
          groupBy: {
            args: Prisma.RecurrenceGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurrenceGroupCountArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceGroupCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      DateException: {
        payload: Prisma.$DateExceptionPayload<ExtArgs>
        fields: Prisma.DateExceptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateExceptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateExceptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>
          }
          findFirst: {
            args: Prisma.DateExceptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateExceptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>
          }
          findMany: {
            args: Prisma.DateExceptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>[]
          }
          create: {
            args: Prisma.DateExceptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>
          }
          createMany: {
            args: Prisma.DateExceptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DateExceptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>[]
          }
          delete: {
            args: Prisma.DateExceptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>
          }
          update: {
            args: Prisma.DateExceptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>
          }
          deleteMany: {
            args: Prisma.DateExceptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DateExceptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DateExceptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>[]
          }
          upsert: {
            args: Prisma.DateExceptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateExceptionPayload>
          }
          aggregate: {
            args: Prisma.DateExceptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDateException>
          }
          groupBy: {
            args: Prisma.DateExceptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DateExceptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateExceptionCountArgs<ExtArgs>
            result: $Utils.Optional<DateExceptionCountAggregateOutputType> | number
          }
        }
      }
      Blacklist: {
        payload: Prisma.$BlacklistPayload<ExtArgs>
        fields: Prisma.BlacklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlacklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlacklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          findFirst: {
            args: Prisma.BlacklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlacklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          findMany: {
            args: Prisma.BlacklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          create: {
            args: Prisma.BlacklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          createMany: {
            args: Prisma.BlacklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlacklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          delete: {
            args: Prisma.BlacklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          update: {
            args: Prisma.BlacklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          deleteMany: {
            args: Prisma.BlacklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlacklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlacklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>[]
          }
          upsert: {
            args: Prisma.BlacklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistPayload>
          }
          aggregate: {
            args: Prisma.BlacklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlacklist>
          }
          groupBy: {
            args: Prisma.BlacklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlacklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlacklistCountArgs<ExtArgs>
            result: $Utils.Optional<BlacklistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    shop?: ShopOmit
    shopConfig?: ShopConfigOmit
    user?: UserOmit
    shopUser?: ShopUserOmit
    service?: ServiceOmit
    availability?: AvailabilityOmit
    blockedSlot?: BlockedSlotOmit
    customer?: CustomerOmit
    recurrenceGroup?: RecurrenceGroupOmit
    booking?: BookingOmit
    dateException?: DateExceptionOmit
    blacklist?: BlacklistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    users: number
    services: number
    availability: number
    bookings: number
    blockedSlots: number
    dateExceptions: number
    blacklist: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ShopCountOutputTypeCountUsersArgs
    services?: boolean | ShopCountOutputTypeCountServicesArgs
    availability?: boolean | ShopCountOutputTypeCountAvailabilityArgs
    bookings?: boolean | ShopCountOutputTypeCountBookingsArgs
    blockedSlots?: boolean | ShopCountOutputTypeCountBlockedSlotsArgs
    dateExceptions?: boolean | ShopCountOutputTypeCountDateExceptionsArgs
    blacklist?: boolean | ShopCountOutputTypeCountBlacklistArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountBlockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedSlotWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountDateExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateExceptionWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountBlacklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    shops: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shops?: boolean | UserCountOutputTypeCountShopsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookings: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    bookings: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type RecurrenceGroupCountOutputType
   */

  export type RecurrenceGroupCountOutputType = {
    bookings: number
  }

  export type RecurrenceGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RecurrenceGroupCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RecurrenceGroupCountOutputType without action
   */
  export type RecurrenceGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroupCountOutputType
     */
    select?: RecurrenceGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecurrenceGroupCountOutputType without action
   */
  export type RecurrenceGroupCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.ShopPlan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.ShopPlan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    name: string
    slug: string
    plan: $Enums.ShopPlan
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Shop$usersArgs<ExtArgs>
    services?: boolean | Shop$servicesArgs<ExtArgs>
    availability?: boolean | Shop$availabilityArgs<ExtArgs>
    bookings?: boolean | Shop$bookingsArgs<ExtArgs>
    blockedSlots?: boolean | Shop$blockedSlotsArgs<ExtArgs>
    config?: boolean | Shop$configArgs<ExtArgs>
    dateExceptions?: boolean | Shop$dateExceptionsArgs<ExtArgs>
    blacklist?: boolean | Shop$blacklistArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Shop$usersArgs<ExtArgs>
    services?: boolean | Shop$servicesArgs<ExtArgs>
    availability?: boolean | Shop$availabilityArgs<ExtArgs>
    bookings?: boolean | Shop$bookingsArgs<ExtArgs>
    blockedSlots?: boolean | Shop$blockedSlotsArgs<ExtArgs>
    config?: boolean | Shop$configArgs<ExtArgs>
    dateExceptions?: boolean | Shop$dateExceptionsArgs<ExtArgs>
    blacklist?: boolean | Shop$blacklistArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      users: Prisma.$ShopUserPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      blockedSlots: Prisma.$BlockedSlotPayload<ExtArgs>[]
      config: Prisma.$ShopConfigPayload<ExtArgs> | null
      dateExceptions: Prisma.$DateExceptionPayload<ExtArgs>[]
      blacklist: Prisma.$BlacklistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      plan: $Enums.ShopPlan
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Shop$usersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Shop$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends Shop$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Shop$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Shop$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedSlots<T extends Shop$blockedSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$blockedSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    config<T extends Shop$configArgs<ExtArgs> = {}>(args?: Subset<T, Shop$configArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dateExceptions<T extends Shop$dateExceptionsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$dateExceptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blacklist<T extends Shop$blacklistArgs<ExtArgs> = {}>(args?: Subset<T, Shop$blacklistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly slug: FieldRef<"Shop", 'String'>
    readonly plan: FieldRef<"Shop", 'ShopPlan'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.users
   */
  export type Shop$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    where?: ShopUserWhereInput
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    cursor?: ShopUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * Shop.services
   */
  export type Shop$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Shop.availability
   */
  export type Shop$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Shop.bookings
   */
  export type Shop$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Shop.blockedSlots
   */
  export type Shop$blockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    where?: BlockedSlotWhereInput
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    cursor?: BlockedSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * Shop.config
   */
  export type Shop$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    where?: ShopConfigWhereInput
  }

  /**
   * Shop.dateExceptions
   */
  export type Shop$dateExceptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    where?: DateExceptionWhereInput
    orderBy?: DateExceptionOrderByWithRelationInput | DateExceptionOrderByWithRelationInput[]
    cursor?: DateExceptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DateExceptionScalarFieldEnum | DateExceptionScalarFieldEnum[]
  }

  /**
   * Shop.blacklist
   */
  export type Shop$blacklistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    where?: BlacklistWhereInput
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    cursor?: BlacklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model ShopConfig
   */

  export type AggregateShopConfig = {
    _count: ShopConfigCountAggregateOutputType | null
    _avg: ShopConfigAvgAggregateOutputType | null
    _sum: ShopConfigSumAggregateOutputType | null
    _min: ShopConfigMinAggregateOutputType | null
    _max: ShopConfigMaxAggregateOutputType | null
  }

  export type ShopConfigAvgAggregateOutputType = {
    slotInterval: number | null
  }

  export type ShopConfigSumAggregateOutputType = {
    slotInterval: number | null
  }

  export type ShopConfigMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    primaryColor: string | null
    coverImage: string | null
    logo: string | null
    tagline: string | null
    showPrices: boolean | null
    slotMode: $Enums.SlotMode | null
    slotInterval: number | null
    logoStyle: string | null
    logoUrl: string | null
    legalMode: string | null
    legalUrl: string | null
    legalText: string | null
  }

  export type ShopConfigMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    primaryColor: string | null
    coverImage: string | null
    logo: string | null
    tagline: string | null
    showPrices: boolean | null
    slotMode: $Enums.SlotMode | null
    slotInterval: number | null
    logoStyle: string | null
    logoUrl: string | null
    legalMode: string | null
    legalUrl: string | null
    legalText: string | null
  }

  export type ShopConfigCountAggregateOutputType = {
    id: number
    shopId: number
    primaryColor: number
    coverImage: number
    logo: number
    tagline: number
    showPrices: number
    slotMode: number
    slotInterval: number
    logoStyle: number
    logoUrl: number
    legalMode: number
    legalUrl: number
    legalText: number
    _all: number
  }


  export type ShopConfigAvgAggregateInputType = {
    slotInterval?: true
  }

  export type ShopConfigSumAggregateInputType = {
    slotInterval?: true
  }

  export type ShopConfigMinAggregateInputType = {
    id?: true
    shopId?: true
    primaryColor?: true
    coverImage?: true
    logo?: true
    tagline?: true
    showPrices?: true
    slotMode?: true
    slotInterval?: true
    logoStyle?: true
    logoUrl?: true
    legalMode?: true
    legalUrl?: true
    legalText?: true
  }

  export type ShopConfigMaxAggregateInputType = {
    id?: true
    shopId?: true
    primaryColor?: true
    coverImage?: true
    logo?: true
    tagline?: true
    showPrices?: true
    slotMode?: true
    slotInterval?: true
    logoStyle?: true
    logoUrl?: true
    legalMode?: true
    legalUrl?: true
    legalText?: true
  }

  export type ShopConfigCountAggregateInputType = {
    id?: true
    shopId?: true
    primaryColor?: true
    coverImage?: true
    logo?: true
    tagline?: true
    showPrices?: true
    slotMode?: true
    slotInterval?: true
    logoStyle?: true
    logoUrl?: true
    legalMode?: true
    legalUrl?: true
    legalText?: true
    _all?: true
  }

  export type ShopConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopConfig to aggregate.
     */
    where?: ShopConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopConfigs to fetch.
     */
    orderBy?: ShopConfigOrderByWithRelationInput | ShopConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopConfigs
    **/
    _count?: true | ShopConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopConfigMaxAggregateInputType
  }

  export type GetShopConfigAggregateType<T extends ShopConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateShopConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopConfig[P]>
      : GetScalarType<T[P], AggregateShopConfig[P]>
  }




  export type ShopConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopConfigWhereInput
    orderBy?: ShopConfigOrderByWithAggregationInput | ShopConfigOrderByWithAggregationInput[]
    by: ShopConfigScalarFieldEnum[] | ShopConfigScalarFieldEnum
    having?: ShopConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopConfigCountAggregateInputType | true
    _avg?: ShopConfigAvgAggregateInputType
    _sum?: ShopConfigSumAggregateInputType
    _min?: ShopConfigMinAggregateInputType
    _max?: ShopConfigMaxAggregateInputType
  }

  export type ShopConfigGroupByOutputType = {
    id: string
    shopId: string
    primaryColor: string
    coverImage: string | null
    logo: string | null
    tagline: string | null
    showPrices: boolean
    slotMode: $Enums.SlotMode
    slotInterval: number
    logoStyle: string
    logoUrl: string | null
    legalMode: string
    legalUrl: string | null
    legalText: string | null
    _count: ShopConfigCountAggregateOutputType | null
    _avg: ShopConfigAvgAggregateOutputType | null
    _sum: ShopConfigSumAggregateOutputType | null
    _min: ShopConfigMinAggregateOutputType | null
    _max: ShopConfigMaxAggregateOutputType | null
  }

  type GetShopConfigGroupByPayload<T extends ShopConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ShopConfigGroupByOutputType[P]>
        }
      >
    >


  export type ShopConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    primaryColor?: boolean
    coverImage?: boolean
    logo?: boolean
    tagline?: boolean
    showPrices?: boolean
    slotMode?: boolean
    slotInterval?: boolean
    logoStyle?: boolean
    logoUrl?: boolean
    legalMode?: boolean
    legalUrl?: boolean
    legalText?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopConfig"]>

  export type ShopConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    primaryColor?: boolean
    coverImage?: boolean
    logo?: boolean
    tagline?: boolean
    showPrices?: boolean
    slotMode?: boolean
    slotInterval?: boolean
    logoStyle?: boolean
    logoUrl?: boolean
    legalMode?: boolean
    legalUrl?: boolean
    legalText?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopConfig"]>

  export type ShopConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    primaryColor?: boolean
    coverImage?: boolean
    logo?: boolean
    tagline?: boolean
    showPrices?: boolean
    slotMode?: boolean
    slotInterval?: boolean
    logoStyle?: boolean
    logoUrl?: boolean
    legalMode?: boolean
    legalUrl?: boolean
    legalText?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopConfig"]>

  export type ShopConfigSelectScalar = {
    id?: boolean
    shopId?: boolean
    primaryColor?: boolean
    coverImage?: boolean
    logo?: boolean
    tagline?: boolean
    showPrices?: boolean
    slotMode?: boolean
    slotInterval?: boolean
    logoStyle?: boolean
    logoUrl?: boolean
    legalMode?: boolean
    legalUrl?: boolean
    legalText?: boolean
  }

  export type ShopConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "primaryColor" | "coverImage" | "logo" | "tagline" | "showPrices" | "slotMode" | "slotInterval" | "logoStyle" | "logoUrl" | "legalMode" | "legalUrl" | "legalText", ExtArgs["result"]["shopConfig"]>
  export type ShopConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ShopConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ShopConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ShopConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopConfig"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      primaryColor: string
      coverImage: string | null
      logo: string | null
      tagline: string | null
      showPrices: boolean
      slotMode: $Enums.SlotMode
      slotInterval: number
      logoStyle: string
      logoUrl: string | null
      legalMode: string
      legalUrl: string | null
      legalText: string | null
    }, ExtArgs["result"]["shopConfig"]>
    composites: {}
  }

  type ShopConfigGetPayload<S extends boolean | null | undefined | ShopConfigDefaultArgs> = $Result.GetResult<Prisma.$ShopConfigPayload, S>

  type ShopConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopConfigCountAggregateInputType | true
    }

  export interface ShopConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopConfig'], meta: { name: 'ShopConfig' } }
    /**
     * Find zero or one ShopConfig that matches the filter.
     * @param {ShopConfigFindUniqueArgs} args - Arguments to find a ShopConfig
     * @example
     * // Get one ShopConfig
     * const shopConfig = await prisma.shopConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopConfigFindUniqueArgs>(args: SelectSubset<T, ShopConfigFindUniqueArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopConfigFindUniqueOrThrowArgs} args - Arguments to find a ShopConfig
     * @example
     * // Get one ShopConfig
     * const shopConfig = await prisma.shopConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigFindFirstArgs} args - Arguments to find a ShopConfig
     * @example
     * // Get one ShopConfig
     * const shopConfig = await prisma.shopConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopConfigFindFirstArgs>(args?: SelectSubset<T, ShopConfigFindFirstArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigFindFirstOrThrowArgs} args - Arguments to find a ShopConfig
     * @example
     * // Get one ShopConfig
     * const shopConfig = await prisma.shopConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopConfigs
     * const shopConfigs = await prisma.shopConfig.findMany()
     * 
     * // Get first 10 ShopConfigs
     * const shopConfigs = await prisma.shopConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopConfigWithIdOnly = await prisma.shopConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopConfigFindManyArgs>(args?: SelectSubset<T, ShopConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopConfig.
     * @param {ShopConfigCreateArgs} args - Arguments to create a ShopConfig.
     * @example
     * // Create one ShopConfig
     * const ShopConfig = await prisma.shopConfig.create({
     *   data: {
     *     // ... data to create a ShopConfig
     *   }
     * })
     * 
     */
    create<T extends ShopConfigCreateArgs>(args: SelectSubset<T, ShopConfigCreateArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopConfigs.
     * @param {ShopConfigCreateManyArgs} args - Arguments to create many ShopConfigs.
     * @example
     * // Create many ShopConfigs
     * const shopConfig = await prisma.shopConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopConfigCreateManyArgs>(args?: SelectSubset<T, ShopConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopConfigs and returns the data saved in the database.
     * @param {ShopConfigCreateManyAndReturnArgs} args - Arguments to create many ShopConfigs.
     * @example
     * // Create many ShopConfigs
     * const shopConfig = await prisma.shopConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopConfigs and only return the `id`
     * const shopConfigWithIdOnly = await prisma.shopConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopConfig.
     * @param {ShopConfigDeleteArgs} args - Arguments to delete one ShopConfig.
     * @example
     * // Delete one ShopConfig
     * const ShopConfig = await prisma.shopConfig.delete({
     *   where: {
     *     // ... filter to delete one ShopConfig
     *   }
     * })
     * 
     */
    delete<T extends ShopConfigDeleteArgs>(args: SelectSubset<T, ShopConfigDeleteArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopConfig.
     * @param {ShopConfigUpdateArgs} args - Arguments to update one ShopConfig.
     * @example
     * // Update one ShopConfig
     * const shopConfig = await prisma.shopConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopConfigUpdateArgs>(args: SelectSubset<T, ShopConfigUpdateArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopConfigs.
     * @param {ShopConfigDeleteManyArgs} args - Arguments to filter ShopConfigs to delete.
     * @example
     * // Delete a few ShopConfigs
     * const { count } = await prisma.shopConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopConfigDeleteManyArgs>(args?: SelectSubset<T, ShopConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopConfigs
     * const shopConfig = await prisma.shopConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopConfigUpdateManyArgs>(args: SelectSubset<T, ShopConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopConfigs and returns the data updated in the database.
     * @param {ShopConfigUpdateManyAndReturnArgs} args - Arguments to update many ShopConfigs.
     * @example
     * // Update many ShopConfigs
     * const shopConfig = await prisma.shopConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopConfigs and only return the `id`
     * const shopConfigWithIdOnly = await prisma.shopConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopConfig.
     * @param {ShopConfigUpsertArgs} args - Arguments to update or create a ShopConfig.
     * @example
     * // Update or create a ShopConfig
     * const shopConfig = await prisma.shopConfig.upsert({
     *   create: {
     *     // ... data to create a ShopConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopConfig we want to update
     *   }
     * })
     */
    upsert<T extends ShopConfigUpsertArgs>(args: SelectSubset<T, ShopConfigUpsertArgs<ExtArgs>>): Prisma__ShopConfigClient<$Result.GetResult<Prisma.$ShopConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigCountArgs} args - Arguments to filter ShopConfigs to count.
     * @example
     * // Count the number of ShopConfigs
     * const count = await prisma.shopConfig.count({
     *   where: {
     *     // ... the filter for the ShopConfigs we want to count
     *   }
     * })
    **/
    count<T extends ShopConfigCountArgs>(
      args?: Subset<T, ShopConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopConfigAggregateArgs>(args: Subset<T, ShopConfigAggregateArgs>): Prisma.PrismaPromise<GetShopConfigAggregateType<T>>

    /**
     * Group by ShopConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopConfigGroupByArgs['orderBy'] }
        : { orderBy?: ShopConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopConfig model
   */
  readonly fields: ShopConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopConfig model
   */
  interface ShopConfigFieldRefs {
    readonly id: FieldRef<"ShopConfig", 'String'>
    readonly shopId: FieldRef<"ShopConfig", 'String'>
    readonly primaryColor: FieldRef<"ShopConfig", 'String'>
    readonly coverImage: FieldRef<"ShopConfig", 'String'>
    readonly logo: FieldRef<"ShopConfig", 'String'>
    readonly tagline: FieldRef<"ShopConfig", 'String'>
    readonly showPrices: FieldRef<"ShopConfig", 'Boolean'>
    readonly slotMode: FieldRef<"ShopConfig", 'SlotMode'>
    readonly slotInterval: FieldRef<"ShopConfig", 'Int'>
    readonly logoStyle: FieldRef<"ShopConfig", 'String'>
    readonly logoUrl: FieldRef<"ShopConfig", 'String'>
    readonly legalMode: FieldRef<"ShopConfig", 'String'>
    readonly legalUrl: FieldRef<"ShopConfig", 'String'>
    readonly legalText: FieldRef<"ShopConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShopConfig findUnique
   */
  export type ShopConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * Filter, which ShopConfig to fetch.
     */
    where: ShopConfigWhereUniqueInput
  }

  /**
   * ShopConfig findUniqueOrThrow
   */
  export type ShopConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * Filter, which ShopConfig to fetch.
     */
    where: ShopConfigWhereUniqueInput
  }

  /**
   * ShopConfig findFirst
   */
  export type ShopConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * Filter, which ShopConfig to fetch.
     */
    where?: ShopConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopConfigs to fetch.
     */
    orderBy?: ShopConfigOrderByWithRelationInput | ShopConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopConfigs.
     */
    cursor?: ShopConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopConfigs.
     */
    distinct?: ShopConfigScalarFieldEnum | ShopConfigScalarFieldEnum[]
  }

  /**
   * ShopConfig findFirstOrThrow
   */
  export type ShopConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * Filter, which ShopConfig to fetch.
     */
    where?: ShopConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopConfigs to fetch.
     */
    orderBy?: ShopConfigOrderByWithRelationInput | ShopConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopConfigs.
     */
    cursor?: ShopConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopConfigs.
     */
    distinct?: ShopConfigScalarFieldEnum | ShopConfigScalarFieldEnum[]
  }

  /**
   * ShopConfig findMany
   */
  export type ShopConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * Filter, which ShopConfigs to fetch.
     */
    where?: ShopConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopConfigs to fetch.
     */
    orderBy?: ShopConfigOrderByWithRelationInput | ShopConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopConfigs.
     */
    cursor?: ShopConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopConfigs.
     */
    distinct?: ShopConfigScalarFieldEnum | ShopConfigScalarFieldEnum[]
  }

  /**
   * ShopConfig create
   */
  export type ShopConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopConfig.
     */
    data: XOR<ShopConfigCreateInput, ShopConfigUncheckedCreateInput>
  }

  /**
   * ShopConfig createMany
   */
  export type ShopConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopConfigs.
     */
    data: ShopConfigCreateManyInput | ShopConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopConfig createManyAndReturn
   */
  export type ShopConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * The data used to create many ShopConfigs.
     */
    data: ShopConfigCreateManyInput | ShopConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopConfig update
   */
  export type ShopConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopConfig.
     */
    data: XOR<ShopConfigUpdateInput, ShopConfigUncheckedUpdateInput>
    /**
     * Choose, which ShopConfig to update.
     */
    where: ShopConfigWhereUniqueInput
  }

  /**
   * ShopConfig updateMany
   */
  export type ShopConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopConfigs.
     */
    data: XOR<ShopConfigUpdateManyMutationInput, ShopConfigUncheckedUpdateManyInput>
    /**
     * Filter which ShopConfigs to update
     */
    where?: ShopConfigWhereInput
    /**
     * Limit how many ShopConfigs to update.
     */
    limit?: number
  }

  /**
   * ShopConfig updateManyAndReturn
   */
  export type ShopConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * The data used to update ShopConfigs.
     */
    data: XOR<ShopConfigUpdateManyMutationInput, ShopConfigUncheckedUpdateManyInput>
    /**
     * Filter which ShopConfigs to update
     */
    where?: ShopConfigWhereInput
    /**
     * Limit how many ShopConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopConfig upsert
   */
  export type ShopConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopConfig to update in case it exists.
     */
    where: ShopConfigWhereUniqueInput
    /**
     * In case the ShopConfig found by the `where` argument doesn't exist, create a new ShopConfig with this data.
     */
    create: XOR<ShopConfigCreateInput, ShopConfigUncheckedCreateInput>
    /**
     * In case the ShopConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopConfigUpdateInput, ShopConfigUncheckedUpdateInput>
  }

  /**
   * ShopConfig delete
   */
  export type ShopConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
    /**
     * Filter which ShopConfig to delete.
     */
    where: ShopConfigWhereUniqueInput
  }

  /**
   * ShopConfig deleteMany
   */
  export type ShopConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopConfigs to delete
     */
    where?: ShopConfigWhereInput
    /**
     * Limit how many ShopConfigs to delete.
     */
    limit?: number
  }

  /**
   * ShopConfig without action
   */
  export type ShopConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopConfig
     */
    select?: ShopConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopConfig
     */
    omit?: ShopConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopConfigInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    shops?: boolean | User$shopsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shops?: boolean | User$shopsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      shops: Prisma.$ShopUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shops<T extends User$shopsArgs<ExtArgs> = {}>(args?: Subset<T, User$shopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.shops
   */
  export type User$shopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    where?: ShopUserWhereInput
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    cursor?: ShopUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ShopUser
   */

  export type AggregateShopUser = {
    _count: ShopUserCountAggregateOutputType | null
    _min: ShopUserMinAggregateOutputType | null
    _max: ShopUserMaxAggregateOutputType | null
  }

  export type ShopUserMinAggregateOutputType = {
    id: string | null
    role: $Enums.ShopRole | null
    userId: string | null
    shopId: string | null
  }

  export type ShopUserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.ShopRole | null
    userId: string | null
    shopId: string | null
  }

  export type ShopUserCountAggregateOutputType = {
    id: number
    role: number
    userId: number
    shopId: number
    _all: number
  }


  export type ShopUserMinAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    shopId?: true
  }

  export type ShopUserMaxAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    shopId?: true
  }

  export type ShopUserCountAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    shopId?: true
    _all?: true
  }

  export type ShopUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUser to aggregate.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopUsers
    **/
    _count?: true | ShopUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopUserMaxAggregateInputType
  }

  export type GetShopUserAggregateType<T extends ShopUserAggregateArgs> = {
        [P in keyof T & keyof AggregateShopUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopUser[P]>
      : GetScalarType<T[P], AggregateShopUser[P]>
  }




  export type ShopUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopUserWhereInput
    orderBy?: ShopUserOrderByWithAggregationInput | ShopUserOrderByWithAggregationInput[]
    by: ShopUserScalarFieldEnum[] | ShopUserScalarFieldEnum
    having?: ShopUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopUserCountAggregateInputType | true
    _min?: ShopUserMinAggregateInputType
    _max?: ShopUserMaxAggregateInputType
  }

  export type ShopUserGroupByOutputType = {
    id: string
    role: $Enums.ShopRole
    userId: string
    shopId: string
    _count: ShopUserCountAggregateOutputType | null
    _min: ShopUserMinAggregateOutputType | null
    _max: ShopUserMaxAggregateOutputType | null
  }

  type GetShopUserGroupByPayload<T extends ShopUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopUserGroupByOutputType[P]>
            : GetScalarType<T[P], ShopUserGroupByOutputType[P]>
        }
      >
    >


  export type ShopUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    shopId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUser"]>

  export type ShopUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    shopId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUser"]>

  export type ShopUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    shopId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopUser"]>

  export type ShopUserSelectScalar = {
    id?: boolean
    role?: boolean
    userId?: boolean
    shopId?: boolean
  }

  export type ShopUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "userId" | "shopId", ExtArgs["result"]["shopUser"]>
  export type ShopUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ShopUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ShopUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ShopUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.ShopRole
      userId: string
      shopId: string
    }, ExtArgs["result"]["shopUser"]>
    composites: {}
  }

  type ShopUserGetPayload<S extends boolean | null | undefined | ShopUserDefaultArgs> = $Result.GetResult<Prisma.$ShopUserPayload, S>

  type ShopUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopUserCountAggregateInputType | true
    }

  export interface ShopUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopUser'], meta: { name: 'ShopUser' } }
    /**
     * Find zero or one ShopUser that matches the filter.
     * @param {ShopUserFindUniqueArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopUserFindUniqueArgs>(args: SelectSubset<T, ShopUserFindUniqueArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopUserFindUniqueOrThrowArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindFirstArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopUserFindFirstArgs>(args?: SelectSubset<T, ShopUserFindFirstArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindFirstOrThrowArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopUsers
     * const shopUsers = await prisma.shopUser.findMany()
     * 
     * // Get first 10 ShopUsers
     * const shopUsers = await prisma.shopUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopUserFindManyArgs>(args?: SelectSubset<T, ShopUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopUser.
     * @param {ShopUserCreateArgs} args - Arguments to create a ShopUser.
     * @example
     * // Create one ShopUser
     * const ShopUser = await prisma.shopUser.create({
     *   data: {
     *     // ... data to create a ShopUser
     *   }
     * })
     * 
     */
    create<T extends ShopUserCreateArgs>(args: SelectSubset<T, ShopUserCreateArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopUsers.
     * @param {ShopUserCreateManyArgs} args - Arguments to create many ShopUsers.
     * @example
     * // Create many ShopUsers
     * const shopUser = await prisma.shopUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopUserCreateManyArgs>(args?: SelectSubset<T, ShopUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopUsers and returns the data saved in the database.
     * @param {ShopUserCreateManyAndReturnArgs} args - Arguments to create many ShopUsers.
     * @example
     * // Create many ShopUsers
     * const shopUser = await prisma.shopUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopUsers and only return the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopUser.
     * @param {ShopUserDeleteArgs} args - Arguments to delete one ShopUser.
     * @example
     * // Delete one ShopUser
     * const ShopUser = await prisma.shopUser.delete({
     *   where: {
     *     // ... filter to delete one ShopUser
     *   }
     * })
     * 
     */
    delete<T extends ShopUserDeleteArgs>(args: SelectSubset<T, ShopUserDeleteArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopUser.
     * @param {ShopUserUpdateArgs} args - Arguments to update one ShopUser.
     * @example
     * // Update one ShopUser
     * const shopUser = await prisma.shopUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUserUpdateArgs>(args: SelectSubset<T, ShopUserUpdateArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopUsers.
     * @param {ShopUserDeleteManyArgs} args - Arguments to filter ShopUsers to delete.
     * @example
     * // Delete a few ShopUsers
     * const { count } = await prisma.shopUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopUserDeleteManyArgs>(args?: SelectSubset<T, ShopUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopUsers
     * const shopUser = await prisma.shopUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUserUpdateManyArgs>(args: SelectSubset<T, ShopUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopUsers and returns the data updated in the database.
     * @param {ShopUserUpdateManyAndReturnArgs} args - Arguments to update many ShopUsers.
     * @example
     * // Update many ShopUsers
     * const shopUser = await prisma.shopUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopUsers and only return the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopUser.
     * @param {ShopUserUpsertArgs} args - Arguments to update or create a ShopUser.
     * @example
     * // Update or create a ShopUser
     * const shopUser = await prisma.shopUser.upsert({
     *   create: {
     *     // ... data to create a ShopUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopUser we want to update
     *   }
     * })
     */
    upsert<T extends ShopUserUpsertArgs>(args: SelectSubset<T, ShopUserUpsertArgs<ExtArgs>>): Prisma__ShopUserClient<$Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserCountArgs} args - Arguments to filter ShopUsers to count.
     * @example
     * // Count the number of ShopUsers
     * const count = await prisma.shopUser.count({
     *   where: {
     *     // ... the filter for the ShopUsers we want to count
     *   }
     * })
    **/
    count<T extends ShopUserCountArgs>(
      args?: Subset<T, ShopUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopUserAggregateArgs>(args: Subset<T, ShopUserAggregateArgs>): Prisma.PrismaPromise<GetShopUserAggregateType<T>>

    /**
     * Group by ShopUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopUserGroupByArgs['orderBy'] }
        : { orderBy?: ShopUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopUser model
   */
  readonly fields: ShopUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopUser model
   */
  interface ShopUserFieldRefs {
    readonly id: FieldRef<"ShopUser", 'String'>
    readonly role: FieldRef<"ShopUser", 'ShopRole'>
    readonly userId: FieldRef<"ShopUser", 'String'>
    readonly shopId: FieldRef<"ShopUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShopUser findUnique
   */
  export type ShopUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser findUniqueOrThrow
   */
  export type ShopUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser findFirst
   */
  export type ShopUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopUsers.
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * ShopUser findFirstOrThrow
   */
  export type ShopUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUser to fetch.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopUsers.
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * ShopUser findMany
   */
  export type ShopUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter, which ShopUsers to fetch.
     */
    where?: ShopUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: ShopUserOrderByWithRelationInput | ShopUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopUsers.
     */
    cursor?: ShopUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: ShopUserScalarFieldEnum | ShopUserScalarFieldEnum[]
  }

  /**
   * ShopUser create
   */
  export type ShopUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopUser.
     */
    data: XOR<ShopUserCreateInput, ShopUserUncheckedCreateInput>
  }

  /**
   * ShopUser createMany
   */
  export type ShopUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopUsers.
     */
    data: ShopUserCreateManyInput | ShopUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopUser createManyAndReturn
   */
  export type ShopUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * The data used to create many ShopUsers.
     */
    data: ShopUserCreateManyInput | ShopUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopUser update
   */
  export type ShopUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopUser.
     */
    data: XOR<ShopUserUpdateInput, ShopUserUncheckedUpdateInput>
    /**
     * Choose, which ShopUser to update.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser updateMany
   */
  export type ShopUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopUsers.
     */
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyInput>
    /**
     * Filter which ShopUsers to update
     */
    where?: ShopUserWhereInput
    /**
     * Limit how many ShopUsers to update.
     */
    limit?: number
  }

  /**
   * ShopUser updateManyAndReturn
   */
  export type ShopUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * The data used to update ShopUsers.
     */
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyInput>
    /**
     * Filter which ShopUsers to update
     */
    where?: ShopUserWhereInput
    /**
     * Limit how many ShopUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopUser upsert
   */
  export type ShopUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopUser to update in case it exists.
     */
    where: ShopUserWhereUniqueInput
    /**
     * In case the ShopUser found by the `where` argument doesn't exist, create a new ShopUser with this data.
     */
    create: XOR<ShopUserCreateInput, ShopUserUncheckedCreateInput>
    /**
     * In case the ShopUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUserUpdateInput, ShopUserUncheckedUpdateInput>
  }

  /**
   * ShopUser delete
   */
  export type ShopUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
    /**
     * Filter which ShopUser to delete.
     */
    where: ShopUserWhereUniqueInput
  }

  /**
   * ShopUser deleteMany
   */
  export type ShopUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUsers to delete
     */
    where?: ShopUserWhereInput
    /**
     * Limit how many ShopUsers to delete.
     */
    limit?: number
  }

  /**
   * ShopUser without action
   */
  export type ShopUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: ShopUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: ShopUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopUserInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    duration: number | null
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    duration: number | null
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    duration: number | null
    price: number | null
    isActive: boolean | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    name: string | null
    duration: number | null
    price: number | null
    isActive: boolean | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    shopId: number
    name: number
    duration: number
    price: number
    isActive: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    duration?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    duration?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    duration?: true
    price?: true
    isActive?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    duration?: true
    price?: true
    isActive?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    shopId?: true
    name?: true
    duration?: true
    price?: true
    isActive?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    shopId: string
    name: string
    duration: number
    price: number | null
    isActive: boolean
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    shopId?: boolean
    name?: boolean
    duration?: boolean
    price?: boolean
    isActive?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "name" | "duration" | "price" | "isActive", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      name: string
      duration: number
      price: number | null
      isActive: boolean
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly shopId: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    breakStart: string | null
    breakEnd: string | null
    isActive: boolean | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    breakStart: string | null
    breakEnd: string | null
    isActive: boolean | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    shopId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    breakStart: number
    breakEnd: number
    isActive: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    shopId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    breakStart?: true
    breakEnd?: true
    isActive?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    shopId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    breakStart?: true
    breakEnd?: true
    isActive?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    shopId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    breakStart?: true
    breakEnd?: true
    isActive?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    shopId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart: string | null
    breakEnd: string | null
    isActive: boolean
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    isActive?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    shopId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    isActive?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "dayOfWeek" | "startTime" | "endTime" | "breakStart" | "breakEnd" | "isActive", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      breakStart: string | null
      breakEnd: string | null
      isActive: boolean
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly shopId: FieldRef<"Availability", 'String'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
    readonly breakStart: FieldRef<"Availability", 'String'>
    readonly breakEnd: FieldRef<"Availability", 'String'>
    readonly isActive: FieldRef<"Availability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model BlockedSlot
   */

  export type AggregateBlockedSlot = {
    _count: BlockedSlotCountAggregateOutputType | null
    _min: BlockedSlotMinAggregateOutputType | null
    _max: BlockedSlotMaxAggregateOutputType | null
  }

  export type BlockedSlotMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    startAt: Date | null
    endAt: Date | null
    reason: string | null
  }

  export type BlockedSlotMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    startAt: Date | null
    endAt: Date | null
    reason: string | null
  }

  export type BlockedSlotCountAggregateOutputType = {
    id: number
    shopId: number
    startAt: number
    endAt: number
    reason: number
    _all: number
  }


  export type BlockedSlotMinAggregateInputType = {
    id?: true
    shopId?: true
    startAt?: true
    endAt?: true
    reason?: true
  }

  export type BlockedSlotMaxAggregateInputType = {
    id?: true
    shopId?: true
    startAt?: true
    endAt?: true
    reason?: true
  }

  export type BlockedSlotCountAggregateInputType = {
    id?: true
    shopId?: true
    startAt?: true
    endAt?: true
    reason?: true
    _all?: true
  }

  export type BlockedSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedSlot to aggregate.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedSlots
    **/
    _count?: true | BlockedSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedSlotMaxAggregateInputType
  }

  export type GetBlockedSlotAggregateType<T extends BlockedSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedSlot[P]>
      : GetScalarType<T[P], AggregateBlockedSlot[P]>
  }




  export type BlockedSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedSlotWhereInput
    orderBy?: BlockedSlotOrderByWithAggregationInput | BlockedSlotOrderByWithAggregationInput[]
    by: BlockedSlotScalarFieldEnum[] | BlockedSlotScalarFieldEnum
    having?: BlockedSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedSlotCountAggregateInputType | true
    _min?: BlockedSlotMinAggregateInputType
    _max?: BlockedSlotMaxAggregateInputType
  }

  export type BlockedSlotGroupByOutputType = {
    id: string
    shopId: string
    startAt: Date
    endAt: Date
    reason: string | null
    _count: BlockedSlotCountAggregateOutputType | null
    _min: BlockedSlotMinAggregateOutputType | null
    _max: BlockedSlotMaxAggregateOutputType | null
  }

  type GetBlockedSlotGroupByPayload<T extends BlockedSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedSlotGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedSlotGroupByOutputType[P]>
        }
      >
    >


  export type BlockedSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedSlot"]>

  export type BlockedSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedSlot"]>

  export type BlockedSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedSlot"]>

  export type BlockedSlotSelectScalar = {
    id?: boolean
    shopId?: boolean
    startAt?: boolean
    endAt?: boolean
    reason?: boolean
  }

  export type BlockedSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "startAt" | "endAt" | "reason", ExtArgs["result"]["blockedSlot"]>
  export type BlockedSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type BlockedSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type BlockedSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $BlockedSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedSlot"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      startAt: Date
      endAt: Date
      reason: string | null
    }, ExtArgs["result"]["blockedSlot"]>
    composites: {}
  }

  type BlockedSlotGetPayload<S extends boolean | null | undefined | BlockedSlotDefaultArgs> = $Result.GetResult<Prisma.$BlockedSlotPayload, S>

  type BlockedSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedSlotCountAggregateInputType | true
    }

  export interface BlockedSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedSlot'], meta: { name: 'BlockedSlot' } }
    /**
     * Find zero or one BlockedSlot that matches the filter.
     * @param {BlockedSlotFindUniqueArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedSlotFindUniqueArgs>(args: SelectSubset<T, BlockedSlotFindUniqueArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedSlotFindUniqueOrThrowArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotFindFirstArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedSlotFindFirstArgs>(args?: SelectSubset<T, BlockedSlotFindFirstArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotFindFirstOrThrowArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedSlots
     * const blockedSlots = await prisma.blockedSlot.findMany()
     * 
     * // Get first 10 BlockedSlots
     * const blockedSlots = await prisma.blockedSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedSlotWithIdOnly = await prisma.blockedSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedSlotFindManyArgs>(args?: SelectSubset<T, BlockedSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedSlot.
     * @param {BlockedSlotCreateArgs} args - Arguments to create a BlockedSlot.
     * @example
     * // Create one BlockedSlot
     * const BlockedSlot = await prisma.blockedSlot.create({
     *   data: {
     *     // ... data to create a BlockedSlot
     *   }
     * })
     * 
     */
    create<T extends BlockedSlotCreateArgs>(args: SelectSubset<T, BlockedSlotCreateArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedSlots.
     * @param {BlockedSlotCreateManyArgs} args - Arguments to create many BlockedSlots.
     * @example
     * // Create many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedSlotCreateManyArgs>(args?: SelectSubset<T, BlockedSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedSlots and returns the data saved in the database.
     * @param {BlockedSlotCreateManyAndReturnArgs} args - Arguments to create many BlockedSlots.
     * @example
     * // Create many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedSlots and only return the `id`
     * const blockedSlotWithIdOnly = await prisma.blockedSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedSlot.
     * @param {BlockedSlotDeleteArgs} args - Arguments to delete one BlockedSlot.
     * @example
     * // Delete one BlockedSlot
     * const BlockedSlot = await prisma.blockedSlot.delete({
     *   where: {
     *     // ... filter to delete one BlockedSlot
     *   }
     * })
     * 
     */
    delete<T extends BlockedSlotDeleteArgs>(args: SelectSubset<T, BlockedSlotDeleteArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedSlot.
     * @param {BlockedSlotUpdateArgs} args - Arguments to update one BlockedSlot.
     * @example
     * // Update one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedSlotUpdateArgs>(args: SelectSubset<T, BlockedSlotUpdateArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedSlots.
     * @param {BlockedSlotDeleteManyArgs} args - Arguments to filter BlockedSlots to delete.
     * @example
     * // Delete a few BlockedSlots
     * const { count } = await prisma.blockedSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedSlotDeleteManyArgs>(args?: SelectSubset<T, BlockedSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedSlotUpdateManyArgs>(args: SelectSubset<T, BlockedSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedSlots and returns the data updated in the database.
     * @param {BlockedSlotUpdateManyAndReturnArgs} args - Arguments to update many BlockedSlots.
     * @example
     * // Update many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedSlots and only return the `id`
     * const blockedSlotWithIdOnly = await prisma.blockedSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockedSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedSlot.
     * @param {BlockedSlotUpsertArgs} args - Arguments to update or create a BlockedSlot.
     * @example
     * // Update or create a BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.upsert({
     *   create: {
     *     // ... data to create a BlockedSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedSlot we want to update
     *   }
     * })
     */
    upsert<T extends BlockedSlotUpsertArgs>(args: SelectSubset<T, BlockedSlotUpsertArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotCountArgs} args - Arguments to filter BlockedSlots to count.
     * @example
     * // Count the number of BlockedSlots
     * const count = await prisma.blockedSlot.count({
     *   where: {
     *     // ... the filter for the BlockedSlots we want to count
     *   }
     * })
    **/
    count<T extends BlockedSlotCountArgs>(
      args?: Subset<T, BlockedSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedSlotAggregateArgs>(args: Subset<T, BlockedSlotAggregateArgs>): Prisma.PrismaPromise<GetBlockedSlotAggregateType<T>>

    /**
     * Group by BlockedSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockedSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedSlotGroupByArgs['orderBy'] }
        : { orderBy?: BlockedSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockedSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedSlot model
   */
  readonly fields: BlockedSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockedSlot model
   */
  interface BlockedSlotFieldRefs {
    readonly id: FieldRef<"BlockedSlot", 'String'>
    readonly shopId: FieldRef<"BlockedSlot", 'String'>
    readonly startAt: FieldRef<"BlockedSlot", 'DateTime'>
    readonly endAt: FieldRef<"BlockedSlot", 'DateTime'>
    readonly reason: FieldRef<"BlockedSlot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BlockedSlot findUnique
   */
  export type BlockedSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot findUniqueOrThrow
   */
  export type BlockedSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot findFirst
   */
  export type BlockedSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedSlots.
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedSlots.
     */
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * BlockedSlot findFirstOrThrow
   */
  export type BlockedSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedSlots.
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedSlots.
     */
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * BlockedSlot findMany
   */
  export type BlockedSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlots to fetch.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedSlots.
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedSlots.
     */
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * BlockedSlot create
   */
  export type BlockedSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedSlot.
     */
    data: XOR<BlockedSlotCreateInput, BlockedSlotUncheckedCreateInput>
  }

  /**
   * BlockedSlot createMany
   */
  export type BlockedSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedSlots.
     */
    data: BlockedSlotCreateManyInput | BlockedSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedSlot createManyAndReturn
   */
  export type BlockedSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedSlots.
     */
    data: BlockedSlotCreateManyInput | BlockedSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedSlot update
   */
  export type BlockedSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedSlot.
     */
    data: XOR<BlockedSlotUpdateInput, BlockedSlotUncheckedUpdateInput>
    /**
     * Choose, which BlockedSlot to update.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot updateMany
   */
  export type BlockedSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedSlots.
     */
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyInput>
    /**
     * Filter which BlockedSlots to update
     */
    where?: BlockedSlotWhereInput
    /**
     * Limit how many BlockedSlots to update.
     */
    limit?: number
  }

  /**
   * BlockedSlot updateManyAndReturn
   */
  export type BlockedSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * The data used to update BlockedSlots.
     */
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyInput>
    /**
     * Filter which BlockedSlots to update
     */
    where?: BlockedSlotWhereInput
    /**
     * Limit how many BlockedSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedSlot upsert
   */
  export type BlockedSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedSlot to update in case it exists.
     */
    where: BlockedSlotWhereUniqueInput
    /**
     * In case the BlockedSlot found by the `where` argument doesn't exist, create a new BlockedSlot with this data.
     */
    create: XOR<BlockedSlotCreateInput, BlockedSlotUncheckedCreateInput>
    /**
     * In case the BlockedSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedSlotUpdateInput, BlockedSlotUncheckedUpdateInput>
  }

  /**
   * BlockedSlot delete
   */
  export type BlockedSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter which BlockedSlot to delete.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot deleteMany
   */
  export type BlockedSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedSlots to delete
     */
    where?: BlockedSlotWhereInput
    /**
     * Limit how many BlockedSlots to delete.
     */
    limit?: number
  }

  /**
   * BlockedSlot without action
   */
  export type BlockedSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    noShows: number | null
  }

  export type CustomerSumAggregateOutputType = {
    noShows: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    noShows: number | null
    isBlocked: boolean | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    noShows: number | null
    isBlocked: boolean | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    noShows: number
    isBlocked: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    noShows?: true
  }

  export type CustomerSumAggregateInputType = {
    noShows?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    noShows?: true
    isBlocked?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    noShows?: true
    isBlocked?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    noShows?: true
    isBlocked?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    noShows: number
    isBlocked: boolean
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    noShows?: boolean
    isBlocked?: boolean
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    noShows?: boolean
    isBlocked?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    noShows?: boolean
    isBlocked?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    noShows?: boolean
    isBlocked?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "noShows" | "isBlocked", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      noShows: number
      isBlocked: boolean
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly noShows: FieldRef<"Customer", 'Int'>
    readonly isBlocked: FieldRef<"Customer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model RecurrenceGroup
   */

  export type AggregateRecurrenceGroup = {
    _count: RecurrenceGroupCountAggregateOutputType | null
    _min: RecurrenceGroupMinAggregateOutputType | null
    _max: RecurrenceGroupMaxAggregateOutputType | null
  }

  export type RecurrenceGroupMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type RecurrenceGroupMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type RecurrenceGroupCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type RecurrenceGroupMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type RecurrenceGroupMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type RecurrenceGroupCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type RecurrenceGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurrenceGroup to aggregate.
     */
    where?: RecurrenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceGroups to fetch.
     */
    orderBy?: RecurrenceGroupOrderByWithRelationInput | RecurrenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurrenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurrenceGroups
    **/
    _count?: true | RecurrenceGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurrenceGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurrenceGroupMaxAggregateInputType
  }

  export type GetRecurrenceGroupAggregateType<T extends RecurrenceGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurrenceGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurrenceGroup[P]>
      : GetScalarType<T[P], AggregateRecurrenceGroup[P]>
  }




  export type RecurrenceGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurrenceGroupWhereInput
    orderBy?: RecurrenceGroupOrderByWithAggregationInput | RecurrenceGroupOrderByWithAggregationInput[]
    by: RecurrenceGroupScalarFieldEnum[] | RecurrenceGroupScalarFieldEnum
    having?: RecurrenceGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurrenceGroupCountAggregateInputType | true
    _min?: RecurrenceGroupMinAggregateInputType
    _max?: RecurrenceGroupMaxAggregateInputType
  }

  export type RecurrenceGroupGroupByOutputType = {
    id: string
    createdAt: Date
    _count: RecurrenceGroupCountAggregateOutputType | null
    _min: RecurrenceGroupMinAggregateOutputType | null
    _max: RecurrenceGroupMaxAggregateOutputType | null
  }

  type GetRecurrenceGroupGroupByPayload<T extends RecurrenceGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurrenceGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurrenceGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurrenceGroupGroupByOutputType[P]>
            : GetScalarType<T[P], RecurrenceGroupGroupByOutputType[P]>
        }
      >
    >


  export type RecurrenceGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    bookings?: boolean | RecurrenceGroup$bookingsArgs<ExtArgs>
    _count?: boolean | RecurrenceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrenceGroup"]>

  export type RecurrenceGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recurrenceGroup"]>

  export type RecurrenceGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recurrenceGroup"]>

  export type RecurrenceGroupSelectScalar = {
    id?: boolean
    createdAt?: boolean
  }

  export type RecurrenceGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt", ExtArgs["result"]["recurrenceGroup"]>
  export type RecurrenceGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RecurrenceGroup$bookingsArgs<ExtArgs>
    _count?: boolean | RecurrenceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecurrenceGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RecurrenceGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecurrenceGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurrenceGroup"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
    }, ExtArgs["result"]["recurrenceGroup"]>
    composites: {}
  }

  type RecurrenceGroupGetPayload<S extends boolean | null | undefined | RecurrenceGroupDefaultArgs> = $Result.GetResult<Prisma.$RecurrenceGroupPayload, S>

  type RecurrenceGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurrenceGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurrenceGroupCountAggregateInputType | true
    }

  export interface RecurrenceGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurrenceGroup'], meta: { name: 'RecurrenceGroup' } }
    /**
     * Find zero or one RecurrenceGroup that matches the filter.
     * @param {RecurrenceGroupFindUniqueArgs} args - Arguments to find a RecurrenceGroup
     * @example
     * // Get one RecurrenceGroup
     * const recurrenceGroup = await prisma.recurrenceGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurrenceGroupFindUniqueArgs>(args: SelectSubset<T, RecurrenceGroupFindUniqueArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurrenceGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurrenceGroupFindUniqueOrThrowArgs} args - Arguments to find a RecurrenceGroup
     * @example
     * // Get one RecurrenceGroup
     * const recurrenceGroup = await prisma.recurrenceGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurrenceGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurrenceGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurrenceGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupFindFirstArgs} args - Arguments to find a RecurrenceGroup
     * @example
     * // Get one RecurrenceGroup
     * const recurrenceGroup = await prisma.recurrenceGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurrenceGroupFindFirstArgs>(args?: SelectSubset<T, RecurrenceGroupFindFirstArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurrenceGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupFindFirstOrThrowArgs} args - Arguments to find a RecurrenceGroup
     * @example
     * // Get one RecurrenceGroup
     * const recurrenceGroup = await prisma.recurrenceGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurrenceGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurrenceGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurrenceGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurrenceGroups
     * const recurrenceGroups = await prisma.recurrenceGroup.findMany()
     * 
     * // Get first 10 RecurrenceGroups
     * const recurrenceGroups = await prisma.recurrenceGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurrenceGroupWithIdOnly = await prisma.recurrenceGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurrenceGroupFindManyArgs>(args?: SelectSubset<T, RecurrenceGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurrenceGroup.
     * @param {RecurrenceGroupCreateArgs} args - Arguments to create a RecurrenceGroup.
     * @example
     * // Create one RecurrenceGroup
     * const RecurrenceGroup = await prisma.recurrenceGroup.create({
     *   data: {
     *     // ... data to create a RecurrenceGroup
     *   }
     * })
     * 
     */
    create<T extends RecurrenceGroupCreateArgs>(args: SelectSubset<T, RecurrenceGroupCreateArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurrenceGroups.
     * @param {RecurrenceGroupCreateManyArgs} args - Arguments to create many RecurrenceGroups.
     * @example
     * // Create many RecurrenceGroups
     * const recurrenceGroup = await prisma.recurrenceGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurrenceGroupCreateManyArgs>(args?: SelectSubset<T, RecurrenceGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurrenceGroups and returns the data saved in the database.
     * @param {RecurrenceGroupCreateManyAndReturnArgs} args - Arguments to create many RecurrenceGroups.
     * @example
     * // Create many RecurrenceGroups
     * const recurrenceGroup = await prisma.recurrenceGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurrenceGroups and only return the `id`
     * const recurrenceGroupWithIdOnly = await prisma.recurrenceGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurrenceGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurrenceGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurrenceGroup.
     * @param {RecurrenceGroupDeleteArgs} args - Arguments to delete one RecurrenceGroup.
     * @example
     * // Delete one RecurrenceGroup
     * const RecurrenceGroup = await prisma.recurrenceGroup.delete({
     *   where: {
     *     // ... filter to delete one RecurrenceGroup
     *   }
     * })
     * 
     */
    delete<T extends RecurrenceGroupDeleteArgs>(args: SelectSubset<T, RecurrenceGroupDeleteArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurrenceGroup.
     * @param {RecurrenceGroupUpdateArgs} args - Arguments to update one RecurrenceGroup.
     * @example
     * // Update one RecurrenceGroup
     * const recurrenceGroup = await prisma.recurrenceGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurrenceGroupUpdateArgs>(args: SelectSubset<T, RecurrenceGroupUpdateArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurrenceGroups.
     * @param {RecurrenceGroupDeleteManyArgs} args - Arguments to filter RecurrenceGroups to delete.
     * @example
     * // Delete a few RecurrenceGroups
     * const { count } = await prisma.recurrenceGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurrenceGroupDeleteManyArgs>(args?: SelectSubset<T, RecurrenceGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurrenceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurrenceGroups
     * const recurrenceGroup = await prisma.recurrenceGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurrenceGroupUpdateManyArgs>(args: SelectSubset<T, RecurrenceGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurrenceGroups and returns the data updated in the database.
     * @param {RecurrenceGroupUpdateManyAndReturnArgs} args - Arguments to update many RecurrenceGroups.
     * @example
     * // Update many RecurrenceGroups
     * const recurrenceGroup = await prisma.recurrenceGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurrenceGroups and only return the `id`
     * const recurrenceGroupWithIdOnly = await prisma.recurrenceGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurrenceGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurrenceGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurrenceGroup.
     * @param {RecurrenceGroupUpsertArgs} args - Arguments to update or create a RecurrenceGroup.
     * @example
     * // Update or create a RecurrenceGroup
     * const recurrenceGroup = await prisma.recurrenceGroup.upsert({
     *   create: {
     *     // ... data to create a RecurrenceGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurrenceGroup we want to update
     *   }
     * })
     */
    upsert<T extends RecurrenceGroupUpsertArgs>(args: SelectSubset<T, RecurrenceGroupUpsertArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurrenceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupCountArgs} args - Arguments to filter RecurrenceGroups to count.
     * @example
     * // Count the number of RecurrenceGroups
     * const count = await prisma.recurrenceGroup.count({
     *   where: {
     *     // ... the filter for the RecurrenceGroups we want to count
     *   }
     * })
    **/
    count<T extends RecurrenceGroupCountArgs>(
      args?: Subset<T, RecurrenceGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurrenceGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurrenceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurrenceGroupAggregateArgs>(args: Subset<T, RecurrenceGroupAggregateArgs>): Prisma.PrismaPromise<GetRecurrenceGroupAggregateType<T>>

    /**
     * Group by RecurrenceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurrenceGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurrenceGroupGroupByArgs['orderBy'] }
        : { orderBy?: RecurrenceGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurrenceGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurrenceGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurrenceGroup model
   */
  readonly fields: RecurrenceGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurrenceGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurrenceGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends RecurrenceGroup$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, RecurrenceGroup$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurrenceGroup model
   */
  interface RecurrenceGroupFieldRefs {
    readonly id: FieldRef<"RecurrenceGroup", 'String'>
    readonly createdAt: FieldRef<"RecurrenceGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurrenceGroup findUnique
   */
  export type RecurrenceGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceGroup to fetch.
     */
    where: RecurrenceGroupWhereUniqueInput
  }

  /**
   * RecurrenceGroup findUniqueOrThrow
   */
  export type RecurrenceGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceGroup to fetch.
     */
    where: RecurrenceGroupWhereUniqueInput
  }

  /**
   * RecurrenceGroup findFirst
   */
  export type RecurrenceGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceGroup to fetch.
     */
    where?: RecurrenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceGroups to fetch.
     */
    orderBy?: RecurrenceGroupOrderByWithRelationInput | RecurrenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurrenceGroups.
     */
    cursor?: RecurrenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurrenceGroups.
     */
    distinct?: RecurrenceGroupScalarFieldEnum | RecurrenceGroupScalarFieldEnum[]
  }

  /**
   * RecurrenceGroup findFirstOrThrow
   */
  export type RecurrenceGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceGroup to fetch.
     */
    where?: RecurrenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceGroups to fetch.
     */
    orderBy?: RecurrenceGroupOrderByWithRelationInput | RecurrenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurrenceGroups.
     */
    cursor?: RecurrenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurrenceGroups.
     */
    distinct?: RecurrenceGroupScalarFieldEnum | RecurrenceGroupScalarFieldEnum[]
  }

  /**
   * RecurrenceGroup findMany
   */
  export type RecurrenceGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * Filter, which RecurrenceGroups to fetch.
     */
    where?: RecurrenceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurrenceGroups to fetch.
     */
    orderBy?: RecurrenceGroupOrderByWithRelationInput | RecurrenceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurrenceGroups.
     */
    cursor?: RecurrenceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurrenceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurrenceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurrenceGroups.
     */
    distinct?: RecurrenceGroupScalarFieldEnum | RecurrenceGroupScalarFieldEnum[]
  }

  /**
   * RecurrenceGroup create
   */
  export type RecurrenceGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a RecurrenceGroup.
     */
    data?: XOR<RecurrenceGroupCreateInput, RecurrenceGroupUncheckedCreateInput>
  }

  /**
   * RecurrenceGroup createMany
   */
  export type RecurrenceGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurrenceGroups.
     */
    data: RecurrenceGroupCreateManyInput | RecurrenceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurrenceGroup createManyAndReturn
   */
  export type RecurrenceGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * The data used to create many RecurrenceGroups.
     */
    data: RecurrenceGroupCreateManyInput | RecurrenceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecurrenceGroup update
   */
  export type RecurrenceGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a RecurrenceGroup.
     */
    data: XOR<RecurrenceGroupUpdateInput, RecurrenceGroupUncheckedUpdateInput>
    /**
     * Choose, which RecurrenceGroup to update.
     */
    where: RecurrenceGroupWhereUniqueInput
  }

  /**
   * RecurrenceGroup updateMany
   */
  export type RecurrenceGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurrenceGroups.
     */
    data: XOR<RecurrenceGroupUpdateManyMutationInput, RecurrenceGroupUncheckedUpdateManyInput>
    /**
     * Filter which RecurrenceGroups to update
     */
    where?: RecurrenceGroupWhereInput
    /**
     * Limit how many RecurrenceGroups to update.
     */
    limit?: number
  }

  /**
   * RecurrenceGroup updateManyAndReturn
   */
  export type RecurrenceGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * The data used to update RecurrenceGroups.
     */
    data: XOR<RecurrenceGroupUpdateManyMutationInput, RecurrenceGroupUncheckedUpdateManyInput>
    /**
     * Filter which RecurrenceGroups to update
     */
    where?: RecurrenceGroupWhereInput
    /**
     * Limit how many RecurrenceGroups to update.
     */
    limit?: number
  }

  /**
   * RecurrenceGroup upsert
   */
  export type RecurrenceGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the RecurrenceGroup to update in case it exists.
     */
    where: RecurrenceGroupWhereUniqueInput
    /**
     * In case the RecurrenceGroup found by the `where` argument doesn't exist, create a new RecurrenceGroup with this data.
     */
    create: XOR<RecurrenceGroupCreateInput, RecurrenceGroupUncheckedCreateInput>
    /**
     * In case the RecurrenceGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurrenceGroupUpdateInput, RecurrenceGroupUncheckedUpdateInput>
  }

  /**
   * RecurrenceGroup delete
   */
  export type RecurrenceGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    /**
     * Filter which RecurrenceGroup to delete.
     */
    where: RecurrenceGroupWhereUniqueInput
  }

  /**
   * RecurrenceGroup deleteMany
   */
  export type RecurrenceGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurrenceGroups to delete
     */
    where?: RecurrenceGroupWhereInput
    /**
     * Limit how many RecurrenceGroups to delete.
     */
    limit?: number
  }

  /**
   * RecurrenceGroup.bookings
   */
  export type RecurrenceGroup$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * RecurrenceGroup without action
   */
  export type RecurrenceGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    customerId: string | null
    serviceId: string | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.BookingStatus | null
    otpCode: string | null
    otpExpiresAt: Date | null
    lockedAt: Date | null
    lockedUntil: Date | null
    reminder24hSentAt: Date | null
    reminder2hSentAt: Date | null
    recurrenceGroupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    customerId: string | null
    serviceId: string | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.BookingStatus | null
    otpCode: string | null
    otpExpiresAt: Date | null
    lockedAt: Date | null
    lockedUntil: Date | null
    reminder24hSentAt: Date | null
    reminder2hSentAt: Date | null
    recurrenceGroupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    shopId: number
    customerId: number
    serviceId: number
    startAt: number
    endAt: number
    status: number
    otpCode: number
    otpExpiresAt: number
    lockedAt: number
    lockedUntil: number
    reminder24hSentAt: number
    reminder2hSentAt: number
    recurrenceGroupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    shopId?: true
    customerId?: true
    serviceId?: true
    startAt?: true
    endAt?: true
    status?: true
    otpCode?: true
    otpExpiresAt?: true
    lockedAt?: true
    lockedUntil?: true
    reminder24hSentAt?: true
    reminder2hSentAt?: true
    recurrenceGroupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    shopId?: true
    customerId?: true
    serviceId?: true
    startAt?: true
    endAt?: true
    status?: true
    otpCode?: true
    otpExpiresAt?: true
    lockedAt?: true
    lockedUntil?: true
    reminder24hSentAt?: true
    reminder2hSentAt?: true
    recurrenceGroupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    shopId?: true
    customerId?: true
    serviceId?: true
    startAt?: true
    endAt?: true
    status?: true
    otpCode?: true
    otpExpiresAt?: true
    lockedAt?: true
    lockedUntil?: true
    reminder24hSentAt?: true
    reminder2hSentAt?: true
    recurrenceGroupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    shopId: string
    customerId: string
    serviceId: string
    startAt: Date
    endAt: Date
    status: $Enums.BookingStatus
    otpCode: string | null
    otpExpiresAt: Date | null
    lockedAt: Date | null
    lockedUntil: Date | null
    reminder24hSentAt: Date | null
    reminder2hSentAt: Date | null
    recurrenceGroupId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    serviceId?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
    lockedAt?: boolean
    lockedUntil?: boolean
    reminder24hSentAt?: boolean
    reminder2hSentAt?: boolean
    recurrenceGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recurrenceGroup?: boolean | Booking$recurrenceGroupArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    serviceId?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
    lockedAt?: boolean
    lockedUntil?: boolean
    reminder24hSentAt?: boolean
    reminder2hSentAt?: boolean
    recurrenceGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recurrenceGroup?: boolean | Booking$recurrenceGroupArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    serviceId?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
    lockedAt?: boolean
    lockedUntil?: boolean
    reminder24hSentAt?: boolean
    reminder2hSentAt?: boolean
    recurrenceGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recurrenceGroup?: boolean | Booking$recurrenceGroupArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    shopId?: boolean
    customerId?: boolean
    serviceId?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    otpCode?: boolean
    otpExpiresAt?: boolean
    lockedAt?: boolean
    lockedUntil?: boolean
    reminder24hSentAt?: boolean
    reminder2hSentAt?: boolean
    recurrenceGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "customerId" | "serviceId" | "startAt" | "endAt" | "status" | "otpCode" | "otpExpiresAt" | "lockedAt" | "lockedUntil" | "reminder24hSentAt" | "reminder2hSentAt" | "recurrenceGroupId" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recurrenceGroup?: boolean | Booking$recurrenceGroupArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recurrenceGroup?: boolean | Booking$recurrenceGroupArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    recurrenceGroup?: boolean | Booking$recurrenceGroupArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      recurrenceGroup: Prisma.$RecurrenceGroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      customerId: string
      serviceId: string
      startAt: Date
      endAt: Date
      status: $Enums.BookingStatus
      otpCode: string | null
      otpExpiresAt: Date | null
      lockedAt: Date | null
      lockedUntil: Date | null
      reminder24hSentAt: Date | null
      reminder2hSentAt: Date | null
      recurrenceGroupId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurrenceGroup<T extends Booking$recurrenceGroupArgs<ExtArgs> = {}>(args?: Subset<T, Booking$recurrenceGroupArgs<ExtArgs>>): Prisma__RecurrenceGroupClient<$Result.GetResult<Prisma.$RecurrenceGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly shopId: FieldRef<"Booking", 'String'>
    readonly customerId: FieldRef<"Booking", 'String'>
    readonly serviceId: FieldRef<"Booking", 'String'>
    readonly startAt: FieldRef<"Booking", 'DateTime'>
    readonly endAt: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly otpCode: FieldRef<"Booking", 'String'>
    readonly otpExpiresAt: FieldRef<"Booking", 'DateTime'>
    readonly lockedAt: FieldRef<"Booking", 'DateTime'>
    readonly lockedUntil: FieldRef<"Booking", 'DateTime'>
    readonly reminder24hSentAt: FieldRef<"Booking", 'DateTime'>
    readonly reminder2hSentAt: FieldRef<"Booking", 'DateTime'>
    readonly recurrenceGroupId: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.recurrenceGroup
   */
  export type Booking$recurrenceGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceGroup
     */
    select?: RecurrenceGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurrenceGroup
     */
    omit?: RecurrenceGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceGroupInclude<ExtArgs> | null
    where?: RecurrenceGroupWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model DateException
   */

  export type AggregateDateException = {
    _count: DateExceptionCountAggregateOutputType | null
    _min: DateExceptionMinAggregateOutputType | null
    _max: DateExceptionMaxAggregateOutputType | null
  }

  export type DateExceptionMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    date: Date | null
    isOpen: boolean | null
    startTime: string | null
    endTime: string | null
    breakStart: string | null
    breakEnd: string | null
    reason: string | null
  }

  export type DateExceptionMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    date: Date | null
    isOpen: boolean | null
    startTime: string | null
    endTime: string | null
    breakStart: string | null
    breakEnd: string | null
    reason: string | null
  }

  export type DateExceptionCountAggregateOutputType = {
    id: number
    shopId: number
    date: number
    isOpen: number
    startTime: number
    endTime: number
    breakStart: number
    breakEnd: number
    reason: number
    _all: number
  }


  export type DateExceptionMinAggregateInputType = {
    id?: true
    shopId?: true
    date?: true
    isOpen?: true
    startTime?: true
    endTime?: true
    breakStart?: true
    breakEnd?: true
    reason?: true
  }

  export type DateExceptionMaxAggregateInputType = {
    id?: true
    shopId?: true
    date?: true
    isOpen?: true
    startTime?: true
    endTime?: true
    breakStart?: true
    breakEnd?: true
    reason?: true
  }

  export type DateExceptionCountAggregateInputType = {
    id?: true
    shopId?: true
    date?: true
    isOpen?: true
    startTime?: true
    endTime?: true
    breakStart?: true
    breakEnd?: true
    reason?: true
    _all?: true
  }

  export type DateExceptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateException to aggregate.
     */
    where?: DateExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateExceptions to fetch.
     */
    orderBy?: DateExceptionOrderByWithRelationInput | DateExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateExceptions
    **/
    _count?: true | DateExceptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateExceptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateExceptionMaxAggregateInputType
  }

  export type GetDateExceptionAggregateType<T extends DateExceptionAggregateArgs> = {
        [P in keyof T & keyof AggregateDateException]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateException[P]>
      : GetScalarType<T[P], AggregateDateException[P]>
  }




  export type DateExceptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateExceptionWhereInput
    orderBy?: DateExceptionOrderByWithAggregationInput | DateExceptionOrderByWithAggregationInput[]
    by: DateExceptionScalarFieldEnum[] | DateExceptionScalarFieldEnum
    having?: DateExceptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateExceptionCountAggregateInputType | true
    _min?: DateExceptionMinAggregateInputType
    _max?: DateExceptionMaxAggregateInputType
  }

  export type DateExceptionGroupByOutputType = {
    id: string
    shopId: string
    date: Date
    isOpen: boolean
    startTime: string | null
    endTime: string | null
    breakStart: string | null
    breakEnd: string | null
    reason: string | null
    _count: DateExceptionCountAggregateOutputType | null
    _min: DateExceptionMinAggregateOutputType | null
    _max: DateExceptionMaxAggregateOutputType | null
  }

  type GetDateExceptionGroupByPayload<T extends DateExceptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateExceptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateExceptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateExceptionGroupByOutputType[P]>
            : GetScalarType<T[P], DateExceptionGroupByOutputType[P]>
        }
      >
    >


  export type DateExceptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    date?: boolean
    isOpen?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    reason?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateException"]>

  export type DateExceptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    date?: boolean
    isOpen?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    reason?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateException"]>

  export type DateExceptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    date?: boolean
    isOpen?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    reason?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateException"]>

  export type DateExceptionSelectScalar = {
    id?: boolean
    shopId?: boolean
    date?: boolean
    isOpen?: boolean
    startTime?: boolean
    endTime?: boolean
    breakStart?: boolean
    breakEnd?: boolean
    reason?: boolean
  }

  export type DateExceptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "date" | "isOpen" | "startTime" | "endTime" | "breakStart" | "breakEnd" | "reason", ExtArgs["result"]["dateException"]>
  export type DateExceptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type DateExceptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type DateExceptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $DateExceptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DateException"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      date: Date
      isOpen: boolean
      startTime: string | null
      endTime: string | null
      breakStart: string | null
      breakEnd: string | null
      reason: string | null
    }, ExtArgs["result"]["dateException"]>
    composites: {}
  }

  type DateExceptionGetPayload<S extends boolean | null | undefined | DateExceptionDefaultArgs> = $Result.GetResult<Prisma.$DateExceptionPayload, S>

  type DateExceptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DateExceptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DateExceptionCountAggregateInputType | true
    }

  export interface DateExceptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DateException'], meta: { name: 'DateException' } }
    /**
     * Find zero or one DateException that matches the filter.
     * @param {DateExceptionFindUniqueArgs} args - Arguments to find a DateException
     * @example
     * // Get one DateException
     * const dateException = await prisma.dateException.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DateExceptionFindUniqueArgs>(args: SelectSubset<T, DateExceptionFindUniqueArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DateException that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DateExceptionFindUniqueOrThrowArgs} args - Arguments to find a DateException
     * @example
     * // Get one DateException
     * const dateException = await prisma.dateException.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DateExceptionFindUniqueOrThrowArgs>(args: SelectSubset<T, DateExceptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateException that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionFindFirstArgs} args - Arguments to find a DateException
     * @example
     * // Get one DateException
     * const dateException = await prisma.dateException.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DateExceptionFindFirstArgs>(args?: SelectSubset<T, DateExceptionFindFirstArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateException that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionFindFirstOrThrowArgs} args - Arguments to find a DateException
     * @example
     * // Get one DateException
     * const dateException = await prisma.dateException.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DateExceptionFindFirstOrThrowArgs>(args?: SelectSubset<T, DateExceptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DateExceptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateExceptions
     * const dateExceptions = await prisma.dateException.findMany()
     * 
     * // Get first 10 DateExceptions
     * const dateExceptions = await prisma.dateException.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateExceptionWithIdOnly = await prisma.dateException.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DateExceptionFindManyArgs>(args?: SelectSubset<T, DateExceptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DateException.
     * @param {DateExceptionCreateArgs} args - Arguments to create a DateException.
     * @example
     * // Create one DateException
     * const DateException = await prisma.dateException.create({
     *   data: {
     *     // ... data to create a DateException
     *   }
     * })
     * 
     */
    create<T extends DateExceptionCreateArgs>(args: SelectSubset<T, DateExceptionCreateArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DateExceptions.
     * @param {DateExceptionCreateManyArgs} args - Arguments to create many DateExceptions.
     * @example
     * // Create many DateExceptions
     * const dateException = await prisma.dateException.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DateExceptionCreateManyArgs>(args?: SelectSubset<T, DateExceptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DateExceptions and returns the data saved in the database.
     * @param {DateExceptionCreateManyAndReturnArgs} args - Arguments to create many DateExceptions.
     * @example
     * // Create many DateExceptions
     * const dateException = await prisma.dateException.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DateExceptions and only return the `id`
     * const dateExceptionWithIdOnly = await prisma.dateException.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DateExceptionCreateManyAndReturnArgs>(args?: SelectSubset<T, DateExceptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DateException.
     * @param {DateExceptionDeleteArgs} args - Arguments to delete one DateException.
     * @example
     * // Delete one DateException
     * const DateException = await prisma.dateException.delete({
     *   where: {
     *     // ... filter to delete one DateException
     *   }
     * })
     * 
     */
    delete<T extends DateExceptionDeleteArgs>(args: SelectSubset<T, DateExceptionDeleteArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DateException.
     * @param {DateExceptionUpdateArgs} args - Arguments to update one DateException.
     * @example
     * // Update one DateException
     * const dateException = await prisma.dateException.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DateExceptionUpdateArgs>(args: SelectSubset<T, DateExceptionUpdateArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DateExceptions.
     * @param {DateExceptionDeleteManyArgs} args - Arguments to filter DateExceptions to delete.
     * @example
     * // Delete a few DateExceptions
     * const { count } = await prisma.dateException.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DateExceptionDeleteManyArgs>(args?: SelectSubset<T, DateExceptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateExceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateExceptions
     * const dateException = await prisma.dateException.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DateExceptionUpdateManyArgs>(args: SelectSubset<T, DateExceptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateExceptions and returns the data updated in the database.
     * @param {DateExceptionUpdateManyAndReturnArgs} args - Arguments to update many DateExceptions.
     * @example
     * // Update many DateExceptions
     * const dateException = await prisma.dateException.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DateExceptions and only return the `id`
     * const dateExceptionWithIdOnly = await prisma.dateException.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DateExceptionUpdateManyAndReturnArgs>(args: SelectSubset<T, DateExceptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DateException.
     * @param {DateExceptionUpsertArgs} args - Arguments to update or create a DateException.
     * @example
     * // Update or create a DateException
     * const dateException = await prisma.dateException.upsert({
     *   create: {
     *     // ... data to create a DateException
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateException we want to update
     *   }
     * })
     */
    upsert<T extends DateExceptionUpsertArgs>(args: SelectSubset<T, DateExceptionUpsertArgs<ExtArgs>>): Prisma__DateExceptionClient<$Result.GetResult<Prisma.$DateExceptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DateExceptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionCountArgs} args - Arguments to filter DateExceptions to count.
     * @example
     * // Count the number of DateExceptions
     * const count = await prisma.dateException.count({
     *   where: {
     *     // ... the filter for the DateExceptions we want to count
     *   }
     * })
    **/
    count<T extends DateExceptionCountArgs>(
      args?: Subset<T, DateExceptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateExceptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateException.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DateExceptionAggregateArgs>(args: Subset<T, DateExceptionAggregateArgs>): Prisma.PrismaPromise<GetDateExceptionAggregateType<T>>

    /**
     * Group by DateException.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateExceptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DateExceptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateExceptionGroupByArgs['orderBy'] }
        : { orderBy?: DateExceptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DateExceptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateExceptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DateException model
   */
  readonly fields: DateExceptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DateException.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateExceptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DateException model
   */
  interface DateExceptionFieldRefs {
    readonly id: FieldRef<"DateException", 'String'>
    readonly shopId: FieldRef<"DateException", 'String'>
    readonly date: FieldRef<"DateException", 'DateTime'>
    readonly isOpen: FieldRef<"DateException", 'Boolean'>
    readonly startTime: FieldRef<"DateException", 'String'>
    readonly endTime: FieldRef<"DateException", 'String'>
    readonly breakStart: FieldRef<"DateException", 'String'>
    readonly breakEnd: FieldRef<"DateException", 'String'>
    readonly reason: FieldRef<"DateException", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DateException findUnique
   */
  export type DateExceptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * Filter, which DateException to fetch.
     */
    where: DateExceptionWhereUniqueInput
  }

  /**
   * DateException findUniqueOrThrow
   */
  export type DateExceptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * Filter, which DateException to fetch.
     */
    where: DateExceptionWhereUniqueInput
  }

  /**
   * DateException findFirst
   */
  export type DateExceptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * Filter, which DateException to fetch.
     */
    where?: DateExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateExceptions to fetch.
     */
    orderBy?: DateExceptionOrderByWithRelationInput | DateExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateExceptions.
     */
    cursor?: DateExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateExceptions.
     */
    distinct?: DateExceptionScalarFieldEnum | DateExceptionScalarFieldEnum[]
  }

  /**
   * DateException findFirstOrThrow
   */
  export type DateExceptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * Filter, which DateException to fetch.
     */
    where?: DateExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateExceptions to fetch.
     */
    orderBy?: DateExceptionOrderByWithRelationInput | DateExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateExceptions.
     */
    cursor?: DateExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateExceptions.
     */
    distinct?: DateExceptionScalarFieldEnum | DateExceptionScalarFieldEnum[]
  }

  /**
   * DateException findMany
   */
  export type DateExceptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * Filter, which DateExceptions to fetch.
     */
    where?: DateExceptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateExceptions to fetch.
     */
    orderBy?: DateExceptionOrderByWithRelationInput | DateExceptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateExceptions.
     */
    cursor?: DateExceptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateExceptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateExceptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateExceptions.
     */
    distinct?: DateExceptionScalarFieldEnum | DateExceptionScalarFieldEnum[]
  }

  /**
   * DateException create
   */
  export type DateExceptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * The data needed to create a DateException.
     */
    data: XOR<DateExceptionCreateInput, DateExceptionUncheckedCreateInput>
  }

  /**
   * DateException createMany
   */
  export type DateExceptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DateExceptions.
     */
    data: DateExceptionCreateManyInput | DateExceptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateException createManyAndReturn
   */
  export type DateExceptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * The data used to create many DateExceptions.
     */
    data: DateExceptionCreateManyInput | DateExceptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateException update
   */
  export type DateExceptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * The data needed to update a DateException.
     */
    data: XOR<DateExceptionUpdateInput, DateExceptionUncheckedUpdateInput>
    /**
     * Choose, which DateException to update.
     */
    where: DateExceptionWhereUniqueInput
  }

  /**
   * DateException updateMany
   */
  export type DateExceptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DateExceptions.
     */
    data: XOR<DateExceptionUpdateManyMutationInput, DateExceptionUncheckedUpdateManyInput>
    /**
     * Filter which DateExceptions to update
     */
    where?: DateExceptionWhereInput
    /**
     * Limit how many DateExceptions to update.
     */
    limit?: number
  }

  /**
   * DateException updateManyAndReturn
   */
  export type DateExceptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * The data used to update DateExceptions.
     */
    data: XOR<DateExceptionUpdateManyMutationInput, DateExceptionUncheckedUpdateManyInput>
    /**
     * Filter which DateExceptions to update
     */
    where?: DateExceptionWhereInput
    /**
     * Limit how many DateExceptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateException upsert
   */
  export type DateExceptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * The filter to search for the DateException to update in case it exists.
     */
    where: DateExceptionWhereUniqueInput
    /**
     * In case the DateException found by the `where` argument doesn't exist, create a new DateException with this data.
     */
    create: XOR<DateExceptionCreateInput, DateExceptionUncheckedCreateInput>
    /**
     * In case the DateException was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateExceptionUpdateInput, DateExceptionUncheckedUpdateInput>
  }

  /**
   * DateException delete
   */
  export type DateExceptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
    /**
     * Filter which DateException to delete.
     */
    where: DateExceptionWhereUniqueInput
  }

  /**
   * DateException deleteMany
   */
  export type DateExceptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateExceptions to delete
     */
    where?: DateExceptionWhereInput
    /**
     * Limit how many DateExceptions to delete.
     */
    limit?: number
  }

  /**
   * DateException without action
   */
  export type DateExceptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateException
     */
    select?: DateExceptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateException
     */
    omit?: DateExceptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateExceptionInclude<ExtArgs> | null
  }


  /**
   * Model Blacklist
   */

  export type AggregateBlacklist = {
    _count: BlacklistCountAggregateOutputType | null
    _min: BlacklistMinAggregateOutputType | null
    _max: BlacklistMaxAggregateOutputType | null
  }

  export type BlacklistMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    email: string | null
    phone: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type BlacklistMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    email: string | null
    phone: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type BlacklistCountAggregateOutputType = {
    id: number
    shopId: number
    email: number
    phone: number
    reason: number
    createdAt: number
    _all: number
  }


  export type BlacklistMinAggregateInputType = {
    id?: true
    shopId?: true
    email?: true
    phone?: true
    reason?: true
    createdAt?: true
  }

  export type BlacklistMaxAggregateInputType = {
    id?: true
    shopId?: true
    email?: true
    phone?: true
    reason?: true
    createdAt?: true
  }

  export type BlacklistCountAggregateInputType = {
    id?: true
    shopId?: true
    email?: true
    phone?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type BlacklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blacklist to aggregate.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blacklists
    **/
    _count?: true | BlacklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlacklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlacklistMaxAggregateInputType
  }

  export type GetBlacklistAggregateType<T extends BlacklistAggregateArgs> = {
        [P in keyof T & keyof AggregateBlacklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklist[P]>
      : GetScalarType<T[P], AggregateBlacklist[P]>
  }




  export type BlacklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistWhereInput
    orderBy?: BlacklistOrderByWithAggregationInput | BlacklistOrderByWithAggregationInput[]
    by: BlacklistScalarFieldEnum[] | BlacklistScalarFieldEnum
    having?: BlacklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlacklistCountAggregateInputType | true
    _min?: BlacklistMinAggregateInputType
    _max?: BlacklistMaxAggregateInputType
  }

  export type BlacklistGroupByOutputType = {
    id: string
    shopId: string
    email: string | null
    phone: string | null
    reason: string | null
    createdAt: Date
    _count: BlacklistCountAggregateOutputType | null
    _min: BlacklistMinAggregateOutputType | null
    _max: BlacklistMaxAggregateOutputType | null
  }

  type GetBlacklistGroupByPayload<T extends BlacklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlacklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlacklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistGroupByOutputType[P]>
        }
      >
    >


  export type BlacklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    email?: boolean
    phone?: boolean
    reason?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blacklist"]>

  export type BlacklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    email?: boolean
    phone?: boolean
    reason?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blacklist"]>

  export type BlacklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    email?: boolean
    phone?: boolean
    reason?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blacklist"]>

  export type BlacklistSelectScalar = {
    id?: boolean
    shopId?: boolean
    email?: boolean
    phone?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type BlacklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "email" | "phone" | "reason" | "createdAt", ExtArgs["result"]["blacklist"]>
  export type BlacklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type BlacklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }
  export type BlacklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $BlacklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blacklist"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      email: string | null
      phone: string | null
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["blacklist"]>
    composites: {}
  }

  type BlacklistGetPayload<S extends boolean | null | undefined | BlacklistDefaultArgs> = $Result.GetResult<Prisma.$BlacklistPayload, S>

  type BlacklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlacklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlacklistCountAggregateInputType | true
    }

  export interface BlacklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blacklist'], meta: { name: 'Blacklist' } }
    /**
     * Find zero or one Blacklist that matches the filter.
     * @param {BlacklistFindUniqueArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistFindUniqueArgs>(args: SelectSubset<T, BlacklistFindUniqueArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blacklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistFindUniqueOrThrowArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistFindUniqueOrThrowArgs>(args: SelectSubset<T, BlacklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blacklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindFirstArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistFindFirstArgs>(args?: SelectSubset<T, BlacklistFindFirstArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blacklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindFirstOrThrowArgs} args - Arguments to find a Blacklist
     * @example
     * // Get one Blacklist
     * const blacklist = await prisma.blacklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistFindFirstOrThrowArgs>(args?: SelectSubset<T, BlacklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blacklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blacklists
     * const blacklists = await prisma.blacklist.findMany()
     * 
     * // Get first 10 Blacklists
     * const blacklists = await prisma.blacklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlacklistFindManyArgs>(args?: SelectSubset<T, BlacklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blacklist.
     * @param {BlacklistCreateArgs} args - Arguments to create a Blacklist.
     * @example
     * // Create one Blacklist
     * const Blacklist = await prisma.blacklist.create({
     *   data: {
     *     // ... data to create a Blacklist
     *   }
     * })
     * 
     */
    create<T extends BlacklistCreateArgs>(args: SelectSubset<T, BlacklistCreateArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blacklists.
     * @param {BlacklistCreateManyArgs} args - Arguments to create many Blacklists.
     * @example
     * // Create many Blacklists
     * const blacklist = await prisma.blacklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlacklistCreateManyArgs>(args?: SelectSubset<T, BlacklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blacklists and returns the data saved in the database.
     * @param {BlacklistCreateManyAndReturnArgs} args - Arguments to create many Blacklists.
     * @example
     * // Create many Blacklists
     * const blacklist = await prisma.blacklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blacklists and only return the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlacklistCreateManyAndReturnArgs>(args?: SelectSubset<T, BlacklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blacklist.
     * @param {BlacklistDeleteArgs} args - Arguments to delete one Blacklist.
     * @example
     * // Delete one Blacklist
     * const Blacklist = await prisma.blacklist.delete({
     *   where: {
     *     // ... filter to delete one Blacklist
     *   }
     * })
     * 
     */
    delete<T extends BlacklistDeleteArgs>(args: SelectSubset<T, BlacklistDeleteArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blacklist.
     * @param {BlacklistUpdateArgs} args - Arguments to update one Blacklist.
     * @example
     * // Update one Blacklist
     * const blacklist = await prisma.blacklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlacklistUpdateArgs>(args: SelectSubset<T, BlacklistUpdateArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blacklists.
     * @param {BlacklistDeleteManyArgs} args - Arguments to filter Blacklists to delete.
     * @example
     * // Delete a few Blacklists
     * const { count } = await prisma.blacklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlacklistDeleteManyArgs>(args?: SelectSubset<T, BlacklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blacklists
     * const blacklist = await prisma.blacklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlacklistUpdateManyArgs>(args: SelectSubset<T, BlacklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blacklists and returns the data updated in the database.
     * @param {BlacklistUpdateManyAndReturnArgs} args - Arguments to update many Blacklists.
     * @example
     * // Update many Blacklists
     * const blacklist = await prisma.blacklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blacklists and only return the `id`
     * const blacklistWithIdOnly = await prisma.blacklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlacklistUpdateManyAndReturnArgs>(args: SelectSubset<T, BlacklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blacklist.
     * @param {BlacklistUpsertArgs} args - Arguments to update or create a Blacklist.
     * @example
     * // Update or create a Blacklist
     * const blacklist = await prisma.blacklist.upsert({
     *   create: {
     *     // ... data to create a Blacklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blacklist we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistUpsertArgs>(args: SelectSubset<T, BlacklistUpsertArgs<ExtArgs>>): Prisma__BlacklistClient<$Result.GetResult<Prisma.$BlacklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistCountArgs} args - Arguments to filter Blacklists to count.
     * @example
     * // Count the number of Blacklists
     * const count = await prisma.blacklist.count({
     *   where: {
     *     // ... the filter for the Blacklists we want to count
     *   }
     * })
    **/
    count<T extends BlacklistCountArgs>(
      args?: Subset<T, BlacklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlacklistAggregateArgs>(args: Subset<T, BlacklistAggregateArgs>): Prisma.PrismaPromise<GetBlacklistAggregateType<T>>

    /**
     * Group by Blacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlacklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlacklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlacklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blacklist model
   */
  readonly fields: BlacklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blacklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blacklist model
   */
  interface BlacklistFieldRefs {
    readonly id: FieldRef<"Blacklist", 'String'>
    readonly shopId: FieldRef<"Blacklist", 'String'>
    readonly email: FieldRef<"Blacklist", 'String'>
    readonly phone: FieldRef<"Blacklist", 'String'>
    readonly reason: FieldRef<"Blacklist", 'String'>
    readonly createdAt: FieldRef<"Blacklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blacklist findUnique
   */
  export type BlacklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist findUniqueOrThrow
   */
  export type BlacklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist findFirst
   */
  export type BlacklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist findFirstOrThrow
   */
  export type BlacklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklist to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist findMany
   */
  export type BlacklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter, which Blacklists to fetch.
     */
    where?: BlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blacklists to fetch.
     */
    orderBy?: BlacklistOrderByWithRelationInput | BlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blacklists.
     */
    cursor?: BlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blacklists.
     */
    distinct?: BlacklistScalarFieldEnum | BlacklistScalarFieldEnum[]
  }

  /**
   * Blacklist create
   */
  export type BlacklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Blacklist.
     */
    data: XOR<BlacklistCreateInput, BlacklistUncheckedCreateInput>
  }

  /**
   * Blacklist createMany
   */
  export type BlacklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blacklists.
     */
    data: BlacklistCreateManyInput | BlacklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blacklist createManyAndReturn
   */
  export type BlacklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The data used to create many Blacklists.
     */
    data: BlacklistCreateManyInput | BlacklistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blacklist update
   */
  export type BlacklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Blacklist.
     */
    data: XOR<BlacklistUpdateInput, BlacklistUncheckedUpdateInput>
    /**
     * Choose, which Blacklist to update.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist updateMany
   */
  export type BlacklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blacklists.
     */
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyInput>
    /**
     * Filter which Blacklists to update
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to update.
     */
    limit?: number
  }

  /**
   * Blacklist updateManyAndReturn
   */
  export type BlacklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * The data used to update Blacklists.
     */
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyInput>
    /**
     * Filter which Blacklists to update
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blacklist upsert
   */
  export type BlacklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Blacklist to update in case it exists.
     */
    where: BlacklistWhereUniqueInput
    /**
     * In case the Blacklist found by the `where` argument doesn't exist, create a new Blacklist with this data.
     */
    create: XOR<BlacklistCreateInput, BlacklistUncheckedCreateInput>
    /**
     * In case the Blacklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistUpdateInput, BlacklistUncheckedUpdateInput>
  }

  /**
   * Blacklist delete
   */
  export type BlacklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
    /**
     * Filter which Blacklist to delete.
     */
    where: BlacklistWhereUniqueInput
  }

  /**
   * Blacklist deleteMany
   */
  export type BlacklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blacklists to delete
     */
    where?: BlacklistWhereInput
    /**
     * Limit how many Blacklists to delete.
     */
    limit?: number
  }

  /**
   * Blacklist without action
   */
  export type BlacklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blacklist
     */
    select?: BlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blacklist
     */
    omit?: BlacklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlacklistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ShopConfigScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    primaryColor: 'primaryColor',
    coverImage: 'coverImage',
    logo: 'logo',
    tagline: 'tagline',
    showPrices: 'showPrices',
    slotMode: 'slotMode',
    slotInterval: 'slotInterval',
    logoStyle: 'logoStyle',
    logoUrl: 'logoUrl',
    legalMode: 'legalMode',
    legalUrl: 'legalUrl',
    legalText: 'legalText'
  };

  export type ShopConfigScalarFieldEnum = (typeof ShopConfigScalarFieldEnum)[keyof typeof ShopConfigScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShopUserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    userId: 'userId',
    shopId: 'shopId'
  };

  export type ShopUserScalarFieldEnum = (typeof ShopUserScalarFieldEnum)[keyof typeof ShopUserScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    duration: 'duration',
    price: 'price',
    isActive: 'isActive'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    breakStart: 'breakStart',
    breakEnd: 'breakEnd',
    isActive: 'isActive'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const BlockedSlotScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    startAt: 'startAt',
    endAt: 'endAt',
    reason: 'reason'
  };

  export type BlockedSlotScalarFieldEnum = (typeof BlockedSlotScalarFieldEnum)[keyof typeof BlockedSlotScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    noShows: 'noShows',
    isBlocked: 'isBlocked'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const RecurrenceGroupScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type RecurrenceGroupScalarFieldEnum = (typeof RecurrenceGroupScalarFieldEnum)[keyof typeof RecurrenceGroupScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    customerId: 'customerId',
    serviceId: 'serviceId',
    startAt: 'startAt',
    endAt: 'endAt',
    status: 'status',
    otpCode: 'otpCode',
    otpExpiresAt: 'otpExpiresAt',
    lockedAt: 'lockedAt',
    lockedUntil: 'lockedUntil',
    reminder24hSentAt: 'reminder24hSentAt',
    reminder2hSentAt: 'reminder2hSentAt',
    recurrenceGroupId: 'recurrenceGroupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const DateExceptionScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    date: 'date',
    isOpen: 'isOpen',
    startTime: 'startTime',
    endTime: 'endTime',
    breakStart: 'breakStart',
    breakEnd: 'breakEnd',
    reason: 'reason'
  };

  export type DateExceptionScalarFieldEnum = (typeof DateExceptionScalarFieldEnum)[keyof typeof DateExceptionScalarFieldEnum]


  export const BlacklistScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    email: 'email',
    phone: 'phone',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type BlacklistScalarFieldEnum = (typeof BlacklistScalarFieldEnum)[keyof typeof BlacklistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ShopPlan'
   */
  export type EnumShopPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopPlan'>
    


  /**
   * Reference to a field of type 'ShopPlan[]'
   */
  export type ListEnumShopPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopPlan[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SlotMode'
   */
  export type EnumSlotModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotMode'>
    


  /**
   * Reference to a field of type 'SlotMode[]'
   */
  export type ListEnumSlotModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotMode[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ShopRole'
   */
  export type EnumShopRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopRole'>
    


  /**
   * Reference to a field of type 'ShopRole[]'
   */
  export type ListEnumShopRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShopRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    slug?: StringFilter<"Shop"> | string
    plan?: EnumShopPlanFilter<"Shop"> | $Enums.ShopPlan
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    users?: ShopUserListRelationFilter
    services?: ServiceListRelationFilter
    availability?: AvailabilityListRelationFilter
    bookings?: BookingListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
    config?: XOR<ShopConfigNullableScalarRelationFilter, ShopConfigWhereInput> | null
    dateExceptions?: DateExceptionListRelationFilter
    blacklist?: BlacklistListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: ShopUserOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    blockedSlots?: BlockedSlotOrderByRelationAggregateInput
    config?: ShopConfigOrderByWithRelationInput
    dateExceptions?: DateExceptionOrderByRelationAggregateInput
    blacklist?: BlacklistOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    plan?: EnumShopPlanFilter<"Shop"> | $Enums.ShopPlan
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    users?: ShopUserListRelationFilter
    services?: ServiceListRelationFilter
    availability?: AvailabilityListRelationFilter
    bookings?: BookingListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
    config?: XOR<ShopConfigNullableScalarRelationFilter, ShopConfigWhereInput> | null
    dateExceptions?: DateExceptionListRelationFilter
    blacklist?: BlacklistListRelationFilter
  }, "id" | "slug">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    slug?: StringWithAggregatesFilter<"Shop"> | string
    plan?: EnumShopPlanWithAggregatesFilter<"Shop"> | $Enums.ShopPlan
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type ShopConfigWhereInput = {
    AND?: ShopConfigWhereInput | ShopConfigWhereInput[]
    OR?: ShopConfigWhereInput[]
    NOT?: ShopConfigWhereInput | ShopConfigWhereInput[]
    id?: StringFilter<"ShopConfig"> | string
    shopId?: StringFilter<"ShopConfig"> | string
    primaryColor?: StringFilter<"ShopConfig"> | string
    coverImage?: StringNullableFilter<"ShopConfig"> | string | null
    logo?: StringNullableFilter<"ShopConfig"> | string | null
    tagline?: StringNullableFilter<"ShopConfig"> | string | null
    showPrices?: BoolFilter<"ShopConfig"> | boolean
    slotMode?: EnumSlotModeFilter<"ShopConfig"> | $Enums.SlotMode
    slotInterval?: IntFilter<"ShopConfig"> | number
    logoStyle?: StringFilter<"ShopConfig"> | string
    logoUrl?: StringNullableFilter<"ShopConfig"> | string | null
    legalMode?: StringFilter<"ShopConfig"> | string
    legalUrl?: StringNullableFilter<"ShopConfig"> | string | null
    legalText?: StringNullableFilter<"ShopConfig"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type ShopConfigOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    primaryColor?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    tagline?: SortOrderInput | SortOrder
    showPrices?: SortOrder
    slotMode?: SortOrder
    slotInterval?: SortOrder
    logoStyle?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    legalMode?: SortOrder
    legalUrl?: SortOrderInput | SortOrder
    legalText?: SortOrderInput | SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type ShopConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId?: string
    AND?: ShopConfigWhereInput | ShopConfigWhereInput[]
    OR?: ShopConfigWhereInput[]
    NOT?: ShopConfigWhereInput | ShopConfigWhereInput[]
    primaryColor?: StringFilter<"ShopConfig"> | string
    coverImage?: StringNullableFilter<"ShopConfig"> | string | null
    logo?: StringNullableFilter<"ShopConfig"> | string | null
    tagline?: StringNullableFilter<"ShopConfig"> | string | null
    showPrices?: BoolFilter<"ShopConfig"> | boolean
    slotMode?: EnumSlotModeFilter<"ShopConfig"> | $Enums.SlotMode
    slotInterval?: IntFilter<"ShopConfig"> | number
    logoStyle?: StringFilter<"ShopConfig"> | string
    logoUrl?: StringNullableFilter<"ShopConfig"> | string | null
    legalMode?: StringFilter<"ShopConfig"> | string
    legalUrl?: StringNullableFilter<"ShopConfig"> | string | null
    legalText?: StringNullableFilter<"ShopConfig"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId">

  export type ShopConfigOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    primaryColor?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    tagline?: SortOrderInput | SortOrder
    showPrices?: SortOrder
    slotMode?: SortOrder
    slotInterval?: SortOrder
    logoStyle?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    legalMode?: SortOrder
    legalUrl?: SortOrderInput | SortOrder
    legalText?: SortOrderInput | SortOrder
    _count?: ShopConfigCountOrderByAggregateInput
    _avg?: ShopConfigAvgOrderByAggregateInput
    _max?: ShopConfigMaxOrderByAggregateInput
    _min?: ShopConfigMinOrderByAggregateInput
    _sum?: ShopConfigSumOrderByAggregateInput
  }

  export type ShopConfigScalarWhereWithAggregatesInput = {
    AND?: ShopConfigScalarWhereWithAggregatesInput | ShopConfigScalarWhereWithAggregatesInput[]
    OR?: ShopConfigScalarWhereWithAggregatesInput[]
    NOT?: ShopConfigScalarWhereWithAggregatesInput | ShopConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopConfig"> | string
    shopId?: StringWithAggregatesFilter<"ShopConfig"> | string
    primaryColor?: StringWithAggregatesFilter<"ShopConfig"> | string
    coverImage?: StringNullableWithAggregatesFilter<"ShopConfig"> | string | null
    logo?: StringNullableWithAggregatesFilter<"ShopConfig"> | string | null
    tagline?: StringNullableWithAggregatesFilter<"ShopConfig"> | string | null
    showPrices?: BoolWithAggregatesFilter<"ShopConfig"> | boolean
    slotMode?: EnumSlotModeWithAggregatesFilter<"ShopConfig"> | $Enums.SlotMode
    slotInterval?: IntWithAggregatesFilter<"ShopConfig"> | number
    logoStyle?: StringWithAggregatesFilter<"ShopConfig"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"ShopConfig"> | string | null
    legalMode?: StringWithAggregatesFilter<"ShopConfig"> | string
    legalUrl?: StringNullableWithAggregatesFilter<"ShopConfig"> | string | null
    legalText?: StringNullableWithAggregatesFilter<"ShopConfig"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    shops?: ShopUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    shops?: ShopUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    shops?: ShopUserListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShopUserWhereInput = {
    AND?: ShopUserWhereInput | ShopUserWhereInput[]
    OR?: ShopUserWhereInput[]
    NOT?: ShopUserWhereInput | ShopUserWhereInput[]
    id?: StringFilter<"ShopUser"> | string
    role?: EnumShopRoleFilter<"ShopUser"> | $Enums.ShopRole
    userId?: StringFilter<"ShopUser"> | string
    shopId?: StringFilter<"ShopUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type ShopUserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    user?: UserOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
  }

  export type ShopUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_shopId?: ShopUserUserIdShopIdCompoundUniqueInput
    AND?: ShopUserWhereInput | ShopUserWhereInput[]
    OR?: ShopUserWhereInput[]
    NOT?: ShopUserWhereInput | ShopUserWhereInput[]
    role?: EnumShopRoleFilter<"ShopUser"> | $Enums.ShopRole
    userId?: StringFilter<"ShopUser"> | string
    shopId?: StringFilter<"ShopUser"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "userId_shopId">

  export type ShopUserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
    _count?: ShopUserCountOrderByAggregateInput
    _max?: ShopUserMaxOrderByAggregateInput
    _min?: ShopUserMinOrderByAggregateInput
  }

  export type ShopUserScalarWhereWithAggregatesInput = {
    AND?: ShopUserScalarWhereWithAggregatesInput | ShopUserScalarWhereWithAggregatesInput[]
    OR?: ShopUserScalarWhereWithAggregatesInput[]
    NOT?: ShopUserScalarWhereWithAggregatesInput | ShopUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopUser"> | string
    role?: EnumShopRoleWithAggregatesFilter<"ShopUser"> | $Enums.ShopRole
    userId?: StringWithAggregatesFilter<"ShopUser"> | string
    shopId?: StringWithAggregatesFilter<"ShopUser"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    shopId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatNullableFilter<"Service"> | number | null
    isActive?: BoolFilter<"Service"> | boolean
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrderInput | SortOrder
    isActive?: SortOrder
    shop?: ShopOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    shopId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatNullableFilter<"Service"> | number | null
    isActive?: BoolFilter<"Service"> | boolean
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    bookings?: BookingListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    shopId?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    duration?: IntWithAggregatesFilter<"Service"> | number
    price?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    shopId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    breakStart?: StringNullableFilter<"Availability"> | string | null
    breakEnd?: StringNullableFilter<"Availability"> | string | null
    isActive?: BoolFilter<"Availability"> | boolean
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrderInput | SortOrder
    breakEnd?: SortOrderInput | SortOrder
    isActive?: SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_dayOfWeek?: AvailabilityShopIdDayOfWeekCompoundUniqueInput
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    shopId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    breakStart?: StringNullableFilter<"Availability"> | string | null
    breakEnd?: StringNullableFilter<"Availability"> | string | null
    isActive?: BoolFilter<"Availability"> | boolean
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId_dayOfWeek">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrderInput | SortOrder
    breakEnd?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    shopId?: StringWithAggregatesFilter<"Availability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"Availability"> | number
    startTime?: StringWithAggregatesFilter<"Availability"> | string
    endTime?: StringWithAggregatesFilter<"Availability"> | string
    breakStart?: StringNullableWithAggregatesFilter<"Availability"> | string | null
    breakEnd?: StringNullableWithAggregatesFilter<"Availability"> | string | null
    isActive?: BoolWithAggregatesFilter<"Availability"> | boolean
  }

  export type BlockedSlotWhereInput = {
    AND?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    OR?: BlockedSlotWhereInput[]
    NOT?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    id?: StringFilter<"BlockedSlot"> | string
    shopId?: StringFilter<"BlockedSlot"> | string
    startAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    endAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    reason?: StringNullableFilter<"BlockedSlot"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type BlockedSlotOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrderInput | SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type BlockedSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    OR?: BlockedSlotWhereInput[]
    NOT?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    shopId?: StringFilter<"BlockedSlot"> | string
    startAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    endAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    reason?: StringNullableFilter<"BlockedSlot"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type BlockedSlotOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: BlockedSlotCountOrderByAggregateInput
    _max?: BlockedSlotMaxOrderByAggregateInput
    _min?: BlockedSlotMinOrderByAggregateInput
  }

  export type BlockedSlotScalarWhereWithAggregatesInput = {
    AND?: BlockedSlotScalarWhereWithAggregatesInput | BlockedSlotScalarWhereWithAggregatesInput[]
    OR?: BlockedSlotScalarWhereWithAggregatesInput[]
    NOT?: BlockedSlotScalarWhereWithAggregatesInput | BlockedSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlockedSlot"> | string
    shopId?: StringWithAggregatesFilter<"BlockedSlot"> | string
    startAt?: DateTimeWithAggregatesFilter<"BlockedSlot"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"BlockedSlot"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"BlockedSlot"> | string | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    noShows?: IntFilter<"Customer"> | number
    isBlocked?: BoolFilter<"Customer"> | boolean
    bookings?: BookingListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    noShows?: SortOrder
    isBlocked?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    noShows?: IntFilter<"Customer"> | number
    isBlocked?: BoolFilter<"Customer"> | boolean
    bookings?: BookingListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    noShows?: SortOrder
    isBlocked?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    noShows?: IntWithAggregatesFilter<"Customer"> | number
    isBlocked?: BoolWithAggregatesFilter<"Customer"> | boolean
  }

  export type RecurrenceGroupWhereInput = {
    AND?: RecurrenceGroupWhereInput | RecurrenceGroupWhereInput[]
    OR?: RecurrenceGroupWhereInput[]
    NOT?: RecurrenceGroupWhereInput | RecurrenceGroupWhereInput[]
    id?: StringFilter<"RecurrenceGroup"> | string
    createdAt?: DateTimeFilter<"RecurrenceGroup"> | Date | string
    bookings?: BookingListRelationFilter
  }

  export type RecurrenceGroupOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type RecurrenceGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecurrenceGroupWhereInput | RecurrenceGroupWhereInput[]
    OR?: RecurrenceGroupWhereInput[]
    NOT?: RecurrenceGroupWhereInput | RecurrenceGroupWhereInput[]
    createdAt?: DateTimeFilter<"RecurrenceGroup"> | Date | string
    bookings?: BookingListRelationFilter
  }, "id">

  export type RecurrenceGroupOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: RecurrenceGroupCountOrderByAggregateInput
    _max?: RecurrenceGroupMaxOrderByAggregateInput
    _min?: RecurrenceGroupMinOrderByAggregateInput
  }

  export type RecurrenceGroupScalarWhereWithAggregatesInput = {
    AND?: RecurrenceGroupScalarWhereWithAggregatesInput | RecurrenceGroupScalarWhereWithAggregatesInput[]
    OR?: RecurrenceGroupScalarWhereWithAggregatesInput[]
    NOT?: RecurrenceGroupScalarWhereWithAggregatesInput | RecurrenceGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurrenceGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RecurrenceGroup"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    shopId?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    startAt?: DateTimeFilter<"Booking"> | Date | string
    endAt?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    otpCode?: StringNullableFilter<"Booking"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    lockedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    lockedUntil?: DateTimeNullableFilter<"Booking"> | Date | string | null
    reminder24hSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    reminder2hSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    recurrenceGroupId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    recurrenceGroup?: XOR<RecurrenceGroupNullableScalarRelationFilter, RecurrenceGroupWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    lockedAt?: SortOrderInput | SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    reminder24hSentAt?: SortOrderInput | SortOrder
    reminder2hSentAt?: SortOrderInput | SortOrder
    recurrenceGroupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    recurrenceGroup?: RecurrenceGroupOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    shopId?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    startAt?: DateTimeFilter<"Booking"> | Date | string
    endAt?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    otpCode?: StringNullableFilter<"Booking"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    lockedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    lockedUntil?: DateTimeNullableFilter<"Booking"> | Date | string | null
    reminder24hSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    reminder2hSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    recurrenceGroupId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    recurrenceGroup?: XOR<RecurrenceGroupNullableScalarRelationFilter, RecurrenceGroupWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    lockedAt?: SortOrderInput | SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    reminder24hSentAt?: SortOrderInput | SortOrder
    reminder2hSentAt?: SortOrderInput | SortOrder
    recurrenceGroupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    shopId?: StringWithAggregatesFilter<"Booking"> | string
    customerId?: StringWithAggregatesFilter<"Booking"> | string
    serviceId?: StringWithAggregatesFilter<"Booking"> | string
    startAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    otpCode?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    lockedAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    reminder24hSentAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    reminder2hSentAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    recurrenceGroupId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type DateExceptionWhereInput = {
    AND?: DateExceptionWhereInput | DateExceptionWhereInput[]
    OR?: DateExceptionWhereInput[]
    NOT?: DateExceptionWhereInput | DateExceptionWhereInput[]
    id?: StringFilter<"DateException"> | string
    shopId?: StringFilter<"DateException"> | string
    date?: DateTimeFilter<"DateException"> | Date | string
    isOpen?: BoolFilter<"DateException"> | boolean
    startTime?: StringNullableFilter<"DateException"> | string | null
    endTime?: StringNullableFilter<"DateException"> | string | null
    breakStart?: StringNullableFilter<"DateException"> | string | null
    breakEnd?: StringNullableFilter<"DateException"> | string | null
    reason?: StringNullableFilter<"DateException"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type DateExceptionOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isOpen?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    breakStart?: SortOrderInput | SortOrder
    breakEnd?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type DateExceptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_date?: DateExceptionShopIdDateCompoundUniqueInput
    AND?: DateExceptionWhereInput | DateExceptionWhereInput[]
    OR?: DateExceptionWhereInput[]
    NOT?: DateExceptionWhereInput | DateExceptionWhereInput[]
    shopId?: StringFilter<"DateException"> | string
    date?: DateTimeFilter<"DateException"> | Date | string
    isOpen?: BoolFilter<"DateException"> | boolean
    startTime?: StringNullableFilter<"DateException"> | string | null
    endTime?: StringNullableFilter<"DateException"> | string | null
    breakStart?: StringNullableFilter<"DateException"> | string | null
    breakEnd?: StringNullableFilter<"DateException"> | string | null
    reason?: StringNullableFilter<"DateException"> | string | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId_date">

  export type DateExceptionOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isOpen?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    breakStart?: SortOrderInput | SortOrder
    breakEnd?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: DateExceptionCountOrderByAggregateInput
    _max?: DateExceptionMaxOrderByAggregateInput
    _min?: DateExceptionMinOrderByAggregateInput
  }

  export type DateExceptionScalarWhereWithAggregatesInput = {
    AND?: DateExceptionScalarWhereWithAggregatesInput | DateExceptionScalarWhereWithAggregatesInput[]
    OR?: DateExceptionScalarWhereWithAggregatesInput[]
    NOT?: DateExceptionScalarWhereWithAggregatesInput | DateExceptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DateException"> | string
    shopId?: StringWithAggregatesFilter<"DateException"> | string
    date?: DateTimeWithAggregatesFilter<"DateException"> | Date | string
    isOpen?: BoolWithAggregatesFilter<"DateException"> | boolean
    startTime?: StringNullableWithAggregatesFilter<"DateException"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"DateException"> | string | null
    breakStart?: StringNullableWithAggregatesFilter<"DateException"> | string | null
    breakEnd?: StringNullableWithAggregatesFilter<"DateException"> | string | null
    reason?: StringNullableWithAggregatesFilter<"DateException"> | string | null
  }

  export type BlacklistWhereInput = {
    AND?: BlacklistWhereInput | BlacklistWhereInput[]
    OR?: BlacklistWhereInput[]
    NOT?: BlacklistWhereInput | BlacklistWhereInput[]
    id?: StringFilter<"Blacklist"> | string
    shopId?: StringFilter<"Blacklist"> | string
    email?: StringNullableFilter<"Blacklist"> | string | null
    phone?: StringNullableFilter<"Blacklist"> | string | null
    reason?: StringNullableFilter<"Blacklist"> | string | null
    createdAt?: DateTimeFilter<"Blacklist"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type BlacklistOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
  }

  export type BlacklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_email?: BlacklistShopIdEmailCompoundUniqueInput
    shopId_phone?: BlacklistShopIdPhoneCompoundUniqueInput
    AND?: BlacklistWhereInput | BlacklistWhereInput[]
    OR?: BlacklistWhereInput[]
    NOT?: BlacklistWhereInput | BlacklistWhereInput[]
    shopId?: StringFilter<"Blacklist"> | string
    email?: StringNullableFilter<"Blacklist"> | string | null
    phone?: StringNullableFilter<"Blacklist"> | string | null
    reason?: StringNullableFilter<"Blacklist"> | string | null
    createdAt?: DateTimeFilter<"Blacklist"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId_email" | "shopId_phone">

  export type BlacklistOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BlacklistCountOrderByAggregateInput
    _max?: BlacklistMaxOrderByAggregateInput
    _min?: BlacklistMinOrderByAggregateInput
  }

  export type BlacklistScalarWhereWithAggregatesInput = {
    AND?: BlacklistScalarWhereWithAggregatesInput | BlacklistScalarWhereWithAggregatesInput[]
    OR?: BlacklistScalarWhereWithAggregatesInput[]
    NOT?: BlacklistScalarWhereWithAggregatesInput | BlacklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blacklist"> | string
    shopId?: StringWithAggregatesFilter<"Blacklist"> | string
    email?: StringNullableWithAggregatesFilter<"Blacklist"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Blacklist"> | string | null
    reason?: StringNullableWithAggregatesFilter<"Blacklist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Blacklist"> | Date | string
  }

  export type ShopCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopConfigCreateInput = {
    id?: string
    primaryColor?: string
    coverImage?: string | null
    logo?: string | null
    tagline?: string | null
    showPrices?: boolean
    slotMode?: $Enums.SlotMode
    slotInterval?: number
    logoStyle?: string
    logoUrl?: string | null
    legalMode?: string
    legalUrl?: string | null
    legalText?: string | null
    shop: ShopCreateNestedOneWithoutConfigInput
  }

  export type ShopConfigUncheckedCreateInput = {
    id?: string
    shopId: string
    primaryColor?: string
    coverImage?: string | null
    logo?: string | null
    tagline?: string | null
    showPrices?: boolean
    slotMode?: $Enums.SlotMode
    slotInterval?: number
    logoStyle?: string
    logoUrl?: string | null
    legalMode?: string
    legalUrl?: string | null
    legalText?: string | null
  }

  export type ShopConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    showPrices?: BoolFieldUpdateOperationsInput | boolean
    slotMode?: EnumSlotModeFieldUpdateOperationsInput | $Enums.SlotMode
    slotInterval?: IntFieldUpdateOperationsInput | number
    logoStyle?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalMode?: StringFieldUpdateOperationsInput | string
    legalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalText?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutConfigNestedInput
  }

  export type ShopConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    showPrices?: BoolFieldUpdateOperationsInput | boolean
    slotMode?: EnumSlotModeFieldUpdateOperationsInput | $Enums.SlotMode
    slotInterval?: IntFieldUpdateOperationsInput | number
    logoStyle?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalMode?: StringFieldUpdateOperationsInput | string
    legalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopConfigCreateManyInput = {
    id?: string
    shopId: string
    primaryColor?: string
    coverImage?: string | null
    logo?: string | null
    tagline?: string | null
    showPrices?: boolean
    slotMode?: $Enums.SlotMode
    slotInterval?: number
    logoStyle?: string
    logoUrl?: string | null
    legalMode?: string
    legalUrl?: string | null
    legalText?: string | null
  }

  export type ShopConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    showPrices?: BoolFieldUpdateOperationsInput | boolean
    slotMode?: EnumSlotModeFieldUpdateOperationsInput | $Enums.SlotMode
    slotInterval?: IntFieldUpdateOperationsInput | number
    logoStyle?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalMode?: StringFieldUpdateOperationsInput | string
    legalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    showPrices?: BoolFieldUpdateOperationsInput | boolean
    slotMode?: EnumSlotModeFieldUpdateOperationsInput | $Enums.SlotMode
    slotInterval?: IntFieldUpdateOperationsInput | number
    logoStyle?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalMode?: StringFieldUpdateOperationsInput | string
    legalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    shops?: ShopUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    shops?: ShopUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: ShopUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shops?: ShopUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserCreateInput = {
    id?: string
    role?: $Enums.ShopRole
    user: UserCreateNestedOneWithoutShopsInput
    shop: ShopCreateNestedOneWithoutUsersInput
  }

  export type ShopUserUncheckedCreateInput = {
    id?: string
    role?: $Enums.ShopRole
    userId: string
    shopId: string
  }

  export type ShopUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    user?: UserUpdateOneRequiredWithoutShopsNestedInput
    shop?: ShopUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ShopUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    userId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUserCreateManyInput = {
    id?: string
    role?: $Enums.ShopRole
    userId: string
    shopId: string
  }

  export type ShopUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
  }

  export type ShopUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    userId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
    shop: ShopCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    shopId: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    shop?: ShopUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    shopId: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart?: string | null
    breakEnd?: string | null
    isActive?: boolean
    shop: ShopCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    shopId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart?: string | null
    breakEnd?: string | null
    isActive?: boolean
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    shop?: ShopUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    shopId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart?: string | null
    breakEnd?: string | null
    isActive?: boolean
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockedSlotCreateInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason?: string | null
    shop: ShopCreateNestedOneWithoutBlockedSlotsInput
  }

  export type BlockedSlotUncheckedCreateInput = {
    id?: string
    shopId: string
    startAt: Date | string
    endAt: Date | string
    reason?: string | null
  }

  export type BlockedSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutBlockedSlotsNestedInput
  }

  export type BlockedSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedSlotCreateManyInput = {
    id?: string
    shopId: string
    startAt: Date | string
    endAt: Date | string
    reason?: string | null
  }

  export type BlockedSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    noShows?: number
    isBlocked?: boolean
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    noShows?: number
    isBlocked?: boolean
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    noShows?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    noShows?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    noShows?: number
    isBlocked?: boolean
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    noShows?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    noShows?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurrenceGroupCreateInput = {
    id?: string
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutRecurrenceGroupInput
  }

  export type RecurrenceGroupUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutRecurrenceGroupInput
  }

  export type RecurrenceGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutRecurrenceGroupNestedInput
  }

  export type RecurrenceGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutRecurrenceGroupNestedInput
  }

  export type RecurrenceGroupCreateManyInput = {
    id?: string
    createdAt?: Date | string
  }

  export type RecurrenceGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurrenceGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    recurrenceGroup?: RecurrenceGroupCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    shopId: string
    customerId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    recurrenceGroup?: RecurrenceGroupUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    shopId: string
    customerId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateExceptionCreateInput = {
    id?: string
    date: Date | string
    isOpen: boolean
    startTime?: string | null
    endTime?: string | null
    breakStart?: string | null
    breakEnd?: string | null
    reason?: string | null
    shop: ShopCreateNestedOneWithoutDateExceptionsInput
  }

  export type DateExceptionUncheckedCreateInput = {
    id?: string
    shopId: string
    date: Date | string
    isOpen: boolean
    startTime?: string | null
    endTime?: string | null
    breakStart?: string | null
    breakEnd?: string | null
    reason?: string | null
  }

  export type DateExceptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutDateExceptionsNestedInput
  }

  export type DateExceptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateExceptionCreateManyInput = {
    id?: string
    shopId: string
    date: Date | string
    isOpen: boolean
    startTime?: string | null
    endTime?: string | null
    breakStart?: string | null
    breakEnd?: string | null
    reason?: string | null
  }

  export type DateExceptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateExceptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlacklistCreateInput = {
    id?: string
    email?: string | null
    phone?: string | null
    reason?: string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutBlacklistInput
  }

  export type BlacklistUncheckedCreateInput = {
    id?: string
    shopId: string
    email?: string | null
    phone?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type BlacklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBlacklistNestedInput
  }

  export type BlacklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistCreateManyInput = {
    id?: string
    shopId: string
    email?: string | null
    phone?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type BlacklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumShopPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanFilter<$PrismaModel> | $Enums.ShopPlan
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ShopUserListRelationFilter = {
    every?: ShopUserWhereInput
    some?: ShopUserWhereInput
    none?: ShopUserWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BlockedSlotListRelationFilter = {
    every?: BlockedSlotWhereInput
    some?: BlockedSlotWhereInput
    none?: BlockedSlotWhereInput
  }

  export type ShopConfigNullableScalarRelationFilter = {
    is?: ShopConfigWhereInput | null
    isNot?: ShopConfigWhereInput | null
  }

  export type DateExceptionListRelationFilter = {
    every?: DateExceptionWhereInput
    some?: DateExceptionWhereInput
    none?: DateExceptionWhereInput
  }

  export type BlacklistListRelationFilter = {
    every?: BlacklistWhereInput
    some?: BlacklistWhereInput
    none?: BlacklistWhereInput
  }

  export type ShopUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DateExceptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlacklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumShopPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanWithAggregatesFilter<$PrismaModel> | $Enums.ShopPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopPlanFilter<$PrismaModel>
    _max?: NestedEnumShopPlanFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSlotModeFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotMode | EnumSlotModeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotModeFilter<$PrismaModel> | $Enums.SlotMode
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ShopConfigCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    primaryColor?: SortOrder
    coverImage?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    showPrices?: SortOrder
    slotMode?: SortOrder
    slotInterval?: SortOrder
    logoStyle?: SortOrder
    logoUrl?: SortOrder
    legalMode?: SortOrder
    legalUrl?: SortOrder
    legalText?: SortOrder
  }

  export type ShopConfigAvgOrderByAggregateInput = {
    slotInterval?: SortOrder
  }

  export type ShopConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    primaryColor?: SortOrder
    coverImage?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    showPrices?: SortOrder
    slotMode?: SortOrder
    slotInterval?: SortOrder
    logoStyle?: SortOrder
    logoUrl?: SortOrder
    legalMode?: SortOrder
    legalUrl?: SortOrder
    legalText?: SortOrder
  }

  export type ShopConfigMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    primaryColor?: SortOrder
    coverImage?: SortOrder
    logo?: SortOrder
    tagline?: SortOrder
    showPrices?: SortOrder
    slotMode?: SortOrder
    slotInterval?: SortOrder
    logoStyle?: SortOrder
    logoUrl?: SortOrder
    legalMode?: SortOrder
    legalUrl?: SortOrder
    legalText?: SortOrder
  }

  export type ShopConfigSumOrderByAggregateInput = {
    slotInterval?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSlotModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotMode | EnumSlotModeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotModeWithAggregatesFilter<$PrismaModel> | $Enums.SlotMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotModeFilter<$PrismaModel>
    _max?: NestedEnumSlotModeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumShopRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleFilter<$PrismaModel> | $Enums.ShopRole
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShopUserUserIdShopIdCompoundUniqueInput = {
    userId: string
    shopId: string
  }

  export type ShopUserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ShopUserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type ShopUserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    shopId?: SortOrder
  }

  export type EnumShopRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleWithAggregatesFilter<$PrismaModel> | $Enums.ShopRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopRoleFilter<$PrismaModel>
    _max?: NestedEnumShopRoleFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    name?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AvailabilityShopIdDayOfWeekCompoundUniqueInput = {
    shopId: string
    dayOfWeek: number
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
    isActive?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
    isActive?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
    isActive?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type BlockedSlotCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
  }

  export type BlockedSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
  }

  export type BlockedSlotMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    reason?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    noShows?: SortOrder
    isBlocked?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    noShows?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    noShows?: SortOrder
    isBlocked?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    noShows?: SortOrder
    isBlocked?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    noShows?: SortOrder
  }

  export type RecurrenceGroupCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type RecurrenceGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type RecurrenceGroupMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type RecurrenceGroupNullableScalarRelationFilter = {
    is?: RecurrenceGroupWhereInput | null
    isNot?: RecurrenceGroupWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    otpCode?: SortOrder
    otpExpiresAt?: SortOrder
    lockedAt?: SortOrder
    lockedUntil?: SortOrder
    reminder24hSentAt?: SortOrder
    reminder2hSentAt?: SortOrder
    recurrenceGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    otpCode?: SortOrder
    otpExpiresAt?: SortOrder
    lockedAt?: SortOrder
    lockedUntil?: SortOrder
    reminder24hSentAt?: SortOrder
    reminder2hSentAt?: SortOrder
    recurrenceGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    serviceId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    otpCode?: SortOrder
    otpExpiresAt?: SortOrder
    lockedAt?: SortOrder
    lockedUntil?: SortOrder
    reminder24hSentAt?: SortOrder
    reminder2hSentAt?: SortOrder
    recurrenceGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateExceptionShopIdDateCompoundUniqueInput = {
    shopId: string
    date: Date | string
  }

  export type DateExceptionCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isOpen?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
    reason?: SortOrder
  }

  export type DateExceptionMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isOpen?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
    reason?: SortOrder
  }

  export type DateExceptionMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    date?: SortOrder
    isOpen?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    breakStart?: SortOrder
    breakEnd?: SortOrder
    reason?: SortOrder
  }

  export type BlacklistShopIdEmailCompoundUniqueInput = {
    shopId: string
    email: string
  }

  export type BlacklistShopIdPhoneCompoundUniqueInput = {
    shopId: string
    phone: string
  }

  export type BlacklistCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type ShopUserCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutShopInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutShopInput = {
    create?: XOR<AvailabilityCreateWithoutShopInput, AvailabilityUncheckedCreateWithoutShopInput> | AvailabilityCreateWithoutShopInput[] | AvailabilityUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutShopInput | AvailabilityCreateOrConnectWithoutShopInput[]
    createMany?: AvailabilityCreateManyShopInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutShopInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BlockedSlotCreateNestedManyWithoutShopInput = {
    create?: XOR<BlockedSlotCreateWithoutShopInput, BlockedSlotUncheckedCreateWithoutShopInput> | BlockedSlotCreateWithoutShopInput[] | BlockedSlotUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutShopInput | BlockedSlotCreateOrConnectWithoutShopInput[]
    createMany?: BlockedSlotCreateManyShopInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type ShopConfigCreateNestedOneWithoutShopInput = {
    create?: XOR<ShopConfigCreateWithoutShopInput, ShopConfigUncheckedCreateWithoutShopInput>
    connectOrCreate?: ShopConfigCreateOrConnectWithoutShopInput
    connect?: ShopConfigWhereUniqueInput
  }

  export type DateExceptionCreateNestedManyWithoutShopInput = {
    create?: XOR<DateExceptionCreateWithoutShopInput, DateExceptionUncheckedCreateWithoutShopInput> | DateExceptionCreateWithoutShopInput[] | DateExceptionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DateExceptionCreateOrConnectWithoutShopInput | DateExceptionCreateOrConnectWithoutShopInput[]
    createMany?: DateExceptionCreateManyShopInputEnvelope
    connect?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
  }

  export type BlacklistCreateNestedManyWithoutShopInput = {
    create?: XOR<BlacklistCreateWithoutShopInput, BlacklistUncheckedCreateWithoutShopInput> | BlacklistCreateWithoutShopInput[] | BlacklistUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutShopInput | BlacklistCreateOrConnectWithoutShopInput[]
    createMany?: BlacklistCreateManyShopInputEnvelope
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
  }

  export type ShopUserUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<AvailabilityCreateWithoutShopInput, AvailabilityUncheckedCreateWithoutShopInput> | AvailabilityCreateWithoutShopInput[] | AvailabilityUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutShopInput | AvailabilityCreateOrConnectWithoutShopInput[]
    createMany?: AvailabilityCreateManyShopInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BlockedSlotUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<BlockedSlotCreateWithoutShopInput, BlockedSlotUncheckedCreateWithoutShopInput> | BlockedSlotCreateWithoutShopInput[] | BlockedSlotUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutShopInput | BlockedSlotCreateOrConnectWithoutShopInput[]
    createMany?: BlockedSlotCreateManyShopInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type ShopConfigUncheckedCreateNestedOneWithoutShopInput = {
    create?: XOR<ShopConfigCreateWithoutShopInput, ShopConfigUncheckedCreateWithoutShopInput>
    connectOrCreate?: ShopConfigCreateOrConnectWithoutShopInput
    connect?: ShopConfigWhereUniqueInput
  }

  export type DateExceptionUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<DateExceptionCreateWithoutShopInput, DateExceptionUncheckedCreateWithoutShopInput> | DateExceptionCreateWithoutShopInput[] | DateExceptionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DateExceptionCreateOrConnectWithoutShopInput | DateExceptionCreateOrConnectWithoutShopInput[]
    createMany?: DateExceptionCreateManyShopInputEnvelope
    connect?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
  }

  export type BlacklistUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<BlacklistCreateWithoutShopInput, BlacklistUncheckedCreateWithoutShopInput> | BlacklistCreateWithoutShopInput[] | BlacklistUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutShopInput | BlacklistCreateOrConnectWithoutShopInput[]
    createMany?: BlacklistCreateManyShopInputEnvelope
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumShopPlanFieldUpdateOperationsInput = {
    set?: $Enums.ShopPlan
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ShopUserUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutShopInput | ShopUserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutShopInput | ShopUserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutShopInput | ShopUserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutShopNestedInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutShopInput | ServiceUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutShopInput | ServiceUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutShopInput | ServiceUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutShopNestedInput = {
    create?: XOR<AvailabilityCreateWithoutShopInput, AvailabilityUncheckedCreateWithoutShopInput> | AvailabilityCreateWithoutShopInput[] | AvailabilityUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutShopInput | AvailabilityCreateOrConnectWithoutShopInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutShopInput | AvailabilityUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: AvailabilityCreateManyShopInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutShopInput | AvailabilityUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutShopInput | AvailabilityUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutShopNestedInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShopInput | BookingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShopInput | BookingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShopInput | BookingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BlockedSlotUpdateManyWithoutShopNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutShopInput, BlockedSlotUncheckedCreateWithoutShopInput> | BlockedSlotCreateWithoutShopInput[] | BlockedSlotUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutShopInput | BlockedSlotCreateOrConnectWithoutShopInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutShopInput | BlockedSlotUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BlockedSlotCreateManyShopInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutShopInput | BlockedSlotUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutShopInput | BlockedSlotUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type ShopConfigUpdateOneWithoutShopNestedInput = {
    create?: XOR<ShopConfigCreateWithoutShopInput, ShopConfigUncheckedCreateWithoutShopInput>
    connectOrCreate?: ShopConfigCreateOrConnectWithoutShopInput
    upsert?: ShopConfigUpsertWithoutShopInput
    disconnect?: ShopConfigWhereInput | boolean
    delete?: ShopConfigWhereInput | boolean
    connect?: ShopConfigWhereUniqueInput
    update?: XOR<XOR<ShopConfigUpdateToOneWithWhereWithoutShopInput, ShopConfigUpdateWithoutShopInput>, ShopConfigUncheckedUpdateWithoutShopInput>
  }

  export type DateExceptionUpdateManyWithoutShopNestedInput = {
    create?: XOR<DateExceptionCreateWithoutShopInput, DateExceptionUncheckedCreateWithoutShopInput> | DateExceptionCreateWithoutShopInput[] | DateExceptionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DateExceptionCreateOrConnectWithoutShopInput | DateExceptionCreateOrConnectWithoutShopInput[]
    upsert?: DateExceptionUpsertWithWhereUniqueWithoutShopInput | DateExceptionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: DateExceptionCreateManyShopInputEnvelope
    set?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    disconnect?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    delete?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    connect?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    update?: DateExceptionUpdateWithWhereUniqueWithoutShopInput | DateExceptionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: DateExceptionUpdateManyWithWhereWithoutShopInput | DateExceptionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: DateExceptionScalarWhereInput | DateExceptionScalarWhereInput[]
  }

  export type BlacklistUpdateManyWithoutShopNestedInput = {
    create?: XOR<BlacklistCreateWithoutShopInput, BlacklistUncheckedCreateWithoutShopInput> | BlacklistCreateWithoutShopInput[] | BlacklistUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutShopInput | BlacklistCreateOrConnectWithoutShopInput[]
    upsert?: BlacklistUpsertWithWhereUniqueWithoutShopInput | BlacklistUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BlacklistCreateManyShopInputEnvelope
    set?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    disconnect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    delete?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    update?: BlacklistUpdateWithWhereUniqueWithoutShopInput | BlacklistUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BlacklistUpdateManyWithWhereWithoutShopInput | BlacklistUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
  }

  export type ShopUserUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput> | ShopUserCreateWithoutShopInput[] | ShopUserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutShopInput | ShopUserCreateOrConnectWithoutShopInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutShopInput | ShopUserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopUserCreateManyShopInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutShopInput | ShopUserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutShopInput | ShopUserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput> | ServiceCreateWithoutShopInput[] | ServiceUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutShopInput | ServiceCreateOrConnectWithoutShopInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutShopInput | ServiceUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ServiceCreateManyShopInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutShopInput | ServiceUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutShopInput | ServiceUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<AvailabilityCreateWithoutShopInput, AvailabilityUncheckedCreateWithoutShopInput> | AvailabilityCreateWithoutShopInput[] | AvailabilityUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutShopInput | AvailabilityCreateOrConnectWithoutShopInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutShopInput | AvailabilityUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: AvailabilityCreateManyShopInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutShopInput | AvailabilityUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutShopInput | AvailabilityUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput> | BookingCreateWithoutShopInput[] | BookingUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutShopInput | BookingCreateOrConnectWithoutShopInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutShopInput | BookingUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BookingCreateManyShopInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutShopInput | BookingUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutShopInput | BookingUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BlockedSlotUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutShopInput, BlockedSlotUncheckedCreateWithoutShopInput> | BlockedSlotCreateWithoutShopInput[] | BlockedSlotUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutShopInput | BlockedSlotCreateOrConnectWithoutShopInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutShopInput | BlockedSlotUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BlockedSlotCreateManyShopInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutShopInput | BlockedSlotUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutShopInput | BlockedSlotUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type ShopConfigUncheckedUpdateOneWithoutShopNestedInput = {
    create?: XOR<ShopConfigCreateWithoutShopInput, ShopConfigUncheckedCreateWithoutShopInput>
    connectOrCreate?: ShopConfigCreateOrConnectWithoutShopInput
    upsert?: ShopConfigUpsertWithoutShopInput
    disconnect?: ShopConfigWhereInput | boolean
    delete?: ShopConfigWhereInput | boolean
    connect?: ShopConfigWhereUniqueInput
    update?: XOR<XOR<ShopConfigUpdateToOneWithWhereWithoutShopInput, ShopConfigUpdateWithoutShopInput>, ShopConfigUncheckedUpdateWithoutShopInput>
  }

  export type DateExceptionUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<DateExceptionCreateWithoutShopInput, DateExceptionUncheckedCreateWithoutShopInput> | DateExceptionCreateWithoutShopInput[] | DateExceptionUncheckedCreateWithoutShopInput[]
    connectOrCreate?: DateExceptionCreateOrConnectWithoutShopInput | DateExceptionCreateOrConnectWithoutShopInput[]
    upsert?: DateExceptionUpsertWithWhereUniqueWithoutShopInput | DateExceptionUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: DateExceptionCreateManyShopInputEnvelope
    set?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    disconnect?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    delete?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    connect?: DateExceptionWhereUniqueInput | DateExceptionWhereUniqueInput[]
    update?: DateExceptionUpdateWithWhereUniqueWithoutShopInput | DateExceptionUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: DateExceptionUpdateManyWithWhereWithoutShopInput | DateExceptionUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: DateExceptionScalarWhereInput | DateExceptionScalarWhereInput[]
  }

  export type BlacklistUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<BlacklistCreateWithoutShopInput, BlacklistUncheckedCreateWithoutShopInput> | BlacklistCreateWithoutShopInput[] | BlacklistUncheckedCreateWithoutShopInput[]
    connectOrCreate?: BlacklistCreateOrConnectWithoutShopInput | BlacklistCreateOrConnectWithoutShopInput[]
    upsert?: BlacklistUpsertWithWhereUniqueWithoutShopInput | BlacklistUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: BlacklistCreateManyShopInputEnvelope
    set?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    disconnect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    delete?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    connect?: BlacklistWhereUniqueInput | BlacklistWhereUniqueInput[]
    update?: BlacklistUpdateWithWhereUniqueWithoutShopInput | BlacklistUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: BlacklistUpdateManyWithWhereWithoutShopInput | BlacklistUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutConfigInput = {
    create?: XOR<ShopCreateWithoutConfigInput, ShopUncheckedCreateWithoutConfigInput>
    connectOrCreate?: ShopCreateOrConnectWithoutConfigInput
    connect?: ShopWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSlotModeFieldUpdateOperationsInput = {
    set?: $Enums.SlotMode
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShopUpdateOneRequiredWithoutConfigNestedInput = {
    create?: XOR<ShopCreateWithoutConfigInput, ShopUncheckedCreateWithoutConfigInput>
    connectOrCreate?: ShopCreateOrConnectWithoutConfigInput
    upsert?: ShopUpsertWithoutConfigInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutConfigInput, ShopUpdateWithoutConfigInput>, ShopUncheckedUpdateWithoutConfigInput>
  }

  export type ShopUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ShopUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
  }

  export type ShopUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutUserInput | ShopUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutUserInput | ShopUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutUserInput | ShopUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type ShopUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput> | ShopUserCreateWithoutUserInput[] | ShopUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShopUserCreateOrConnectWithoutUserInput | ShopUserCreateOrConnectWithoutUserInput[]
    upsert?: ShopUserUpsertWithWhereUniqueWithoutUserInput | ShopUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShopUserCreateManyUserInputEnvelope
    set?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    disconnect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    delete?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    connect?: ShopUserWhereUniqueInput | ShopUserWhereUniqueInput[]
    update?: ShopUserUpdateWithWhereUniqueWithoutUserInput | ShopUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShopUserUpdateManyWithWhereWithoutUserInput | ShopUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShopsInput = {
    create?: XOR<UserCreateWithoutShopsInput, UserUncheckedCreateWithoutShopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopsInput
    connect?: UserWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutUsersInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput
    connect?: ShopWhereUniqueInput
  }

  export type EnumShopRoleFieldUpdateOperationsInput = {
    set?: $Enums.ShopRole
  }

  export type UserUpdateOneRequiredWithoutShopsNestedInput = {
    create?: XOR<UserCreateWithoutShopsInput, UserUncheckedCreateWithoutShopsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShopsInput
    upsert?: UserUpsertWithoutShopsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShopsInput, UserUpdateWithoutShopsInput>, UserUncheckedUpdateWithoutShopsInput>
  }

  export type ShopUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput
    upsert?: ShopUpsertWithoutUsersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutUsersInput, ShopUpdateWithoutUsersInput>, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type ShopCreateNestedOneWithoutServicesInput = {
    create?: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutServicesInput
    connect?: ShopWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShopUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutServicesInput
    upsert?: ShopUpsertWithoutServicesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutServicesInput, ShopUpdateWithoutServicesInput>, ShopUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<ShopCreateWithoutAvailabilityInput, ShopUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAvailabilityInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<ShopCreateWithoutAvailabilityInput, ShopUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAvailabilityInput
    upsert?: ShopUpsertWithoutAvailabilityInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutAvailabilityInput, ShopUpdateWithoutAvailabilityInput>, ShopUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ShopCreateNestedOneWithoutBlockedSlotsInput = {
    create?: XOR<ShopCreateWithoutBlockedSlotsInput, ShopUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBlockedSlotsInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutBlockedSlotsNestedInput = {
    create?: XOR<ShopCreateWithoutBlockedSlotsInput, ShopUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBlockedSlotsInput
    upsert?: ShopUpsertWithoutBlockedSlotsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutBlockedSlotsInput, ShopUpdateWithoutBlockedSlotsInput>, ShopUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingCreateNestedManyWithoutRecurrenceGroupInput = {
    create?: XOR<BookingCreateWithoutRecurrenceGroupInput, BookingUncheckedCreateWithoutRecurrenceGroupInput> | BookingCreateWithoutRecurrenceGroupInput[] | BookingUncheckedCreateWithoutRecurrenceGroupInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRecurrenceGroupInput | BookingCreateOrConnectWithoutRecurrenceGroupInput[]
    createMany?: BookingCreateManyRecurrenceGroupInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRecurrenceGroupInput = {
    create?: XOR<BookingCreateWithoutRecurrenceGroupInput, BookingUncheckedCreateWithoutRecurrenceGroupInput> | BookingCreateWithoutRecurrenceGroupInput[] | BookingUncheckedCreateWithoutRecurrenceGroupInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRecurrenceGroupInput | BookingCreateOrConnectWithoutRecurrenceGroupInput[]
    createMany?: BookingCreateManyRecurrenceGroupInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUpdateManyWithoutRecurrenceGroupNestedInput = {
    create?: XOR<BookingCreateWithoutRecurrenceGroupInput, BookingUncheckedCreateWithoutRecurrenceGroupInput> | BookingCreateWithoutRecurrenceGroupInput[] | BookingUncheckedCreateWithoutRecurrenceGroupInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRecurrenceGroupInput | BookingCreateOrConnectWithoutRecurrenceGroupInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRecurrenceGroupInput | BookingUpsertWithWhereUniqueWithoutRecurrenceGroupInput[]
    createMany?: BookingCreateManyRecurrenceGroupInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRecurrenceGroupInput | BookingUpdateWithWhereUniqueWithoutRecurrenceGroupInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRecurrenceGroupInput | BookingUpdateManyWithWhereWithoutRecurrenceGroupInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRecurrenceGroupNestedInput = {
    create?: XOR<BookingCreateWithoutRecurrenceGroupInput, BookingUncheckedCreateWithoutRecurrenceGroupInput> | BookingCreateWithoutRecurrenceGroupInput[] | BookingUncheckedCreateWithoutRecurrenceGroupInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRecurrenceGroupInput | BookingCreateOrConnectWithoutRecurrenceGroupInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRecurrenceGroupInput | BookingUpsertWithWhereUniqueWithoutRecurrenceGroupInput[]
    createMany?: BookingCreateManyRecurrenceGroupInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRecurrenceGroupInput | BookingUpdateWithWhereUniqueWithoutRecurrenceGroupInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRecurrenceGroupInput | BookingUpdateManyWithWhereWithoutRecurrenceGroupInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBookingsInput
    connect?: ShopWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type RecurrenceGroupCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RecurrenceGroupCreateWithoutBookingsInput, RecurrenceGroupUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RecurrenceGroupCreateOrConnectWithoutBookingsInput
    connect?: RecurrenceGroupWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ShopUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBookingsInput
    upsert?: ShopUpsertWithoutBookingsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutBookingsInput, ShopUpdateWithoutBookingsInput>, ShopUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type RecurrenceGroupUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<RecurrenceGroupCreateWithoutBookingsInput, RecurrenceGroupUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RecurrenceGroupCreateOrConnectWithoutBookingsInput
    upsert?: RecurrenceGroupUpsertWithoutBookingsInput
    disconnect?: RecurrenceGroupWhereInput | boolean
    delete?: RecurrenceGroupWhereInput | boolean
    connect?: RecurrenceGroupWhereUniqueInput
    update?: XOR<XOR<RecurrenceGroupUpdateToOneWithWhereWithoutBookingsInput, RecurrenceGroupUpdateWithoutBookingsInput>, RecurrenceGroupUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopCreateNestedOneWithoutDateExceptionsInput = {
    create?: XOR<ShopCreateWithoutDateExceptionsInput, ShopUncheckedCreateWithoutDateExceptionsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutDateExceptionsInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutDateExceptionsNestedInput = {
    create?: XOR<ShopCreateWithoutDateExceptionsInput, ShopUncheckedCreateWithoutDateExceptionsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutDateExceptionsInput
    upsert?: ShopUpsertWithoutDateExceptionsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutDateExceptionsInput, ShopUpdateWithoutDateExceptionsInput>, ShopUncheckedUpdateWithoutDateExceptionsInput>
  }

  export type ShopCreateNestedOneWithoutBlacklistInput = {
    create?: XOR<ShopCreateWithoutBlacklistInput, ShopUncheckedCreateWithoutBlacklistInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBlacklistInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutBlacklistNestedInput = {
    create?: XOR<ShopCreateWithoutBlacklistInput, ShopUncheckedCreateWithoutBlacklistInput>
    connectOrCreate?: ShopCreateOrConnectWithoutBlacklistInput
    upsert?: ShopUpsertWithoutBlacklistInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutBlacklistInput, ShopUpdateWithoutBlacklistInput>, ShopUncheckedUpdateWithoutBlacklistInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumShopPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanFilter<$PrismaModel> | $Enums.ShopPlan
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumShopPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopPlan | EnumShopPlanFieldRefInput<$PrismaModel>
    in?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopPlan[] | ListEnumShopPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumShopPlanWithAggregatesFilter<$PrismaModel> | $Enums.ShopPlan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopPlanFilter<$PrismaModel>
    _max?: NestedEnumShopPlanFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSlotModeFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotMode | EnumSlotModeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotModeFilter<$PrismaModel> | $Enums.SlotMode
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSlotModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotMode | EnumSlotModeFieldRefInput<$PrismaModel>
    in?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotMode[] | ListEnumSlotModeFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotModeWithAggregatesFilter<$PrismaModel> | $Enums.SlotMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotModeFilter<$PrismaModel>
    _max?: NestedEnumSlotModeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumShopRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleFilter<$PrismaModel> | $Enums.ShopRole
  }

  export type NestedEnumShopRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShopRole | EnumShopRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShopRole[] | ListEnumShopRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumShopRoleWithAggregatesFilter<$PrismaModel> | $Enums.ShopRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShopRoleFilter<$PrismaModel>
    _max?: NestedEnumShopRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ShopUserCreateWithoutShopInput = {
    id?: string
    role?: $Enums.ShopRole
    user: UserCreateNestedOneWithoutShopsInput
  }

  export type ShopUserUncheckedCreateWithoutShopInput = {
    id?: string
    role?: $Enums.ShopRole
    userId: string
  }

  export type ShopUserCreateOrConnectWithoutShopInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput>
  }

  export type ShopUserCreateManyShopInputEnvelope = {
    data: ShopUserCreateManyShopInput | ShopUserCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutShopInput = {
    id?: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutShopInput = {
    id?: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutShopInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput>
  }

  export type ServiceCreateManyShopInputEnvelope = {
    data: ServiceCreateManyShopInput | ServiceCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityCreateWithoutShopInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart?: string | null
    breakEnd?: string | null
    isActive?: boolean
  }

  export type AvailabilityUncheckedCreateWithoutShopInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart?: string | null
    breakEnd?: string | null
    isActive?: boolean
  }

  export type AvailabilityCreateOrConnectWithoutShopInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutShopInput, AvailabilityUncheckedCreateWithoutShopInput>
  }

  export type AvailabilityCreateManyShopInputEnvelope = {
    data: AvailabilityCreateManyShopInput | AvailabilityCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutShopInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    recurrenceGroup?: RecurrenceGroupCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutShopInput = {
    id?: string
    customerId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutShopInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput>
  }

  export type BookingCreateManyShopInputEnvelope = {
    data: BookingCreateManyShopInput | BookingCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type BlockedSlotCreateWithoutShopInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason?: string | null
  }

  export type BlockedSlotUncheckedCreateWithoutShopInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason?: string | null
  }

  export type BlockedSlotCreateOrConnectWithoutShopInput = {
    where: BlockedSlotWhereUniqueInput
    create: XOR<BlockedSlotCreateWithoutShopInput, BlockedSlotUncheckedCreateWithoutShopInput>
  }

  export type BlockedSlotCreateManyShopInputEnvelope = {
    data: BlockedSlotCreateManyShopInput | BlockedSlotCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopConfigCreateWithoutShopInput = {
    id?: string
    primaryColor?: string
    coverImage?: string | null
    logo?: string | null
    tagline?: string | null
    showPrices?: boolean
    slotMode?: $Enums.SlotMode
    slotInterval?: number
    logoStyle?: string
    logoUrl?: string | null
    legalMode?: string
    legalUrl?: string | null
    legalText?: string | null
  }

  export type ShopConfigUncheckedCreateWithoutShopInput = {
    id?: string
    primaryColor?: string
    coverImage?: string | null
    logo?: string | null
    tagline?: string | null
    showPrices?: boolean
    slotMode?: $Enums.SlotMode
    slotInterval?: number
    logoStyle?: string
    logoUrl?: string | null
    legalMode?: string
    legalUrl?: string | null
    legalText?: string | null
  }

  export type ShopConfigCreateOrConnectWithoutShopInput = {
    where: ShopConfigWhereUniqueInput
    create: XOR<ShopConfigCreateWithoutShopInput, ShopConfigUncheckedCreateWithoutShopInput>
  }

  export type DateExceptionCreateWithoutShopInput = {
    id?: string
    date: Date | string
    isOpen: boolean
    startTime?: string | null
    endTime?: string | null
    breakStart?: string | null
    breakEnd?: string | null
    reason?: string | null
  }

  export type DateExceptionUncheckedCreateWithoutShopInput = {
    id?: string
    date: Date | string
    isOpen: boolean
    startTime?: string | null
    endTime?: string | null
    breakStart?: string | null
    breakEnd?: string | null
    reason?: string | null
  }

  export type DateExceptionCreateOrConnectWithoutShopInput = {
    where: DateExceptionWhereUniqueInput
    create: XOR<DateExceptionCreateWithoutShopInput, DateExceptionUncheckedCreateWithoutShopInput>
  }

  export type DateExceptionCreateManyShopInputEnvelope = {
    data: DateExceptionCreateManyShopInput | DateExceptionCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type BlacklistCreateWithoutShopInput = {
    id?: string
    email?: string | null
    phone?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type BlacklistUncheckedCreateWithoutShopInput = {
    id?: string
    email?: string | null
    phone?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type BlacklistCreateOrConnectWithoutShopInput = {
    where: BlacklistWhereUniqueInput
    create: XOR<BlacklistCreateWithoutShopInput, BlacklistUncheckedCreateWithoutShopInput>
  }

  export type BlacklistCreateManyShopInputEnvelope = {
    data: BlacklistCreateManyShopInput | BlacklistCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopUserUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopUserWhereUniqueInput
    update: XOR<ShopUserUpdateWithoutShopInput, ShopUserUncheckedUpdateWithoutShopInput>
    create: XOR<ShopUserCreateWithoutShopInput, ShopUserUncheckedCreateWithoutShopInput>
  }

  export type ShopUserUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopUserWhereUniqueInput
    data: XOR<ShopUserUpdateWithoutShopInput, ShopUserUncheckedUpdateWithoutShopInput>
  }

  export type ShopUserUpdateManyWithWhereWithoutShopInput = {
    where: ShopUserScalarWhereInput
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopUserScalarWhereInput = {
    AND?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
    OR?: ShopUserScalarWhereInput[]
    NOT?: ShopUserScalarWhereInput | ShopUserScalarWhereInput[]
    id?: StringFilter<"ShopUser"> | string
    role?: EnumShopRoleFilter<"ShopUser"> | $Enums.ShopRole
    userId?: StringFilter<"ShopUser"> | string
    shopId?: StringFilter<"ShopUser"> | string
  }

  export type ServiceUpsertWithWhereUniqueWithoutShopInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutShopInput, ServiceUncheckedUpdateWithoutShopInput>
    create: XOR<ServiceCreateWithoutShopInput, ServiceUncheckedCreateWithoutShopInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutShopInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutShopInput, ServiceUncheckedUpdateWithoutShopInput>
  }

  export type ServiceUpdateManyWithWhereWithoutShopInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutShopInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    shopId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatNullableFilter<"Service"> | number | null
    isActive?: BoolFilter<"Service"> | boolean
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutShopInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutShopInput, AvailabilityUncheckedUpdateWithoutShopInput>
    create: XOR<AvailabilityCreateWithoutShopInput, AvailabilityUncheckedCreateWithoutShopInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutShopInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutShopInput, AvailabilityUncheckedUpdateWithoutShopInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutShopInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutShopInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    shopId?: StringFilter<"Availability"> | string
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    breakStart?: StringNullableFilter<"Availability"> | string | null
    breakEnd?: StringNullableFilter<"Availability"> | string | null
    isActive?: BoolFilter<"Availability"> | boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutShopInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutShopInput, BookingUncheckedUpdateWithoutShopInput>
    create: XOR<BookingCreateWithoutShopInput, BookingUncheckedCreateWithoutShopInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutShopInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutShopInput, BookingUncheckedUpdateWithoutShopInput>
  }

  export type BookingUpdateManyWithWhereWithoutShopInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutShopInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    shopId?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    serviceId?: StringFilter<"Booking"> | string
    startAt?: DateTimeFilter<"Booking"> | Date | string
    endAt?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    otpCode?: StringNullableFilter<"Booking"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    lockedAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    lockedUntil?: DateTimeNullableFilter<"Booking"> | Date | string | null
    reminder24hSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    reminder2hSentAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    recurrenceGroupId?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BlockedSlotUpsertWithWhereUniqueWithoutShopInput = {
    where: BlockedSlotWhereUniqueInput
    update: XOR<BlockedSlotUpdateWithoutShopInput, BlockedSlotUncheckedUpdateWithoutShopInput>
    create: XOR<BlockedSlotCreateWithoutShopInput, BlockedSlotUncheckedCreateWithoutShopInput>
  }

  export type BlockedSlotUpdateWithWhereUniqueWithoutShopInput = {
    where: BlockedSlotWhereUniqueInput
    data: XOR<BlockedSlotUpdateWithoutShopInput, BlockedSlotUncheckedUpdateWithoutShopInput>
  }

  export type BlockedSlotUpdateManyWithWhereWithoutShopInput = {
    where: BlockedSlotScalarWhereInput
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyWithoutShopInput>
  }

  export type BlockedSlotScalarWhereInput = {
    AND?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
    OR?: BlockedSlotScalarWhereInput[]
    NOT?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
    id?: StringFilter<"BlockedSlot"> | string
    shopId?: StringFilter<"BlockedSlot"> | string
    startAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    endAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    reason?: StringNullableFilter<"BlockedSlot"> | string | null
  }

  export type ShopConfigUpsertWithoutShopInput = {
    update: XOR<ShopConfigUpdateWithoutShopInput, ShopConfigUncheckedUpdateWithoutShopInput>
    create: XOR<ShopConfigCreateWithoutShopInput, ShopConfigUncheckedCreateWithoutShopInput>
    where?: ShopConfigWhereInput
  }

  export type ShopConfigUpdateToOneWithWhereWithoutShopInput = {
    where?: ShopConfigWhereInput
    data: XOR<ShopConfigUpdateWithoutShopInput, ShopConfigUncheckedUpdateWithoutShopInput>
  }

  export type ShopConfigUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    showPrices?: BoolFieldUpdateOperationsInput | boolean
    slotMode?: EnumSlotModeFieldUpdateOperationsInput | $Enums.SlotMode
    slotInterval?: IntFieldUpdateOperationsInput | number
    logoStyle?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalMode?: StringFieldUpdateOperationsInput | string
    legalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopConfigUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    showPrices?: BoolFieldUpdateOperationsInput | boolean
    slotMode?: EnumSlotModeFieldUpdateOperationsInput | $Enums.SlotMode
    slotInterval?: IntFieldUpdateOperationsInput | number
    logoStyle?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalMode?: StringFieldUpdateOperationsInput | string
    legalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    legalText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateExceptionUpsertWithWhereUniqueWithoutShopInput = {
    where: DateExceptionWhereUniqueInput
    update: XOR<DateExceptionUpdateWithoutShopInput, DateExceptionUncheckedUpdateWithoutShopInput>
    create: XOR<DateExceptionCreateWithoutShopInput, DateExceptionUncheckedCreateWithoutShopInput>
  }

  export type DateExceptionUpdateWithWhereUniqueWithoutShopInput = {
    where: DateExceptionWhereUniqueInput
    data: XOR<DateExceptionUpdateWithoutShopInput, DateExceptionUncheckedUpdateWithoutShopInput>
  }

  export type DateExceptionUpdateManyWithWhereWithoutShopInput = {
    where: DateExceptionScalarWhereInput
    data: XOR<DateExceptionUpdateManyMutationInput, DateExceptionUncheckedUpdateManyWithoutShopInput>
  }

  export type DateExceptionScalarWhereInput = {
    AND?: DateExceptionScalarWhereInput | DateExceptionScalarWhereInput[]
    OR?: DateExceptionScalarWhereInput[]
    NOT?: DateExceptionScalarWhereInput | DateExceptionScalarWhereInput[]
    id?: StringFilter<"DateException"> | string
    shopId?: StringFilter<"DateException"> | string
    date?: DateTimeFilter<"DateException"> | Date | string
    isOpen?: BoolFilter<"DateException"> | boolean
    startTime?: StringNullableFilter<"DateException"> | string | null
    endTime?: StringNullableFilter<"DateException"> | string | null
    breakStart?: StringNullableFilter<"DateException"> | string | null
    breakEnd?: StringNullableFilter<"DateException"> | string | null
    reason?: StringNullableFilter<"DateException"> | string | null
  }

  export type BlacklistUpsertWithWhereUniqueWithoutShopInput = {
    where: BlacklistWhereUniqueInput
    update: XOR<BlacklistUpdateWithoutShopInput, BlacklistUncheckedUpdateWithoutShopInput>
    create: XOR<BlacklistCreateWithoutShopInput, BlacklistUncheckedCreateWithoutShopInput>
  }

  export type BlacklistUpdateWithWhereUniqueWithoutShopInput = {
    where: BlacklistWhereUniqueInput
    data: XOR<BlacklistUpdateWithoutShopInput, BlacklistUncheckedUpdateWithoutShopInput>
  }

  export type BlacklistUpdateManyWithWhereWithoutShopInput = {
    where: BlacklistScalarWhereInput
    data: XOR<BlacklistUpdateManyMutationInput, BlacklistUncheckedUpdateManyWithoutShopInput>
  }

  export type BlacklistScalarWhereInput = {
    AND?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
    OR?: BlacklistScalarWhereInput[]
    NOT?: BlacklistScalarWhereInput | BlacklistScalarWhereInput[]
    id?: StringFilter<"Blacklist"> | string
    shopId?: StringFilter<"Blacklist"> | string
    email?: StringNullableFilter<"Blacklist"> | string | null
    phone?: StringNullableFilter<"Blacklist"> | string | null
    reason?: StringNullableFilter<"Blacklist"> | string | null
    createdAt?: DateTimeFilter<"Blacklist"> | Date | string
  }

  export type ShopCreateWithoutConfigInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutConfigInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutConfigInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutConfigInput, ShopUncheckedCreateWithoutConfigInput>
  }

  export type ShopUpsertWithoutConfigInput = {
    update: XOR<ShopUpdateWithoutConfigInput, ShopUncheckedUpdateWithoutConfigInput>
    create: XOR<ShopCreateWithoutConfigInput, ShopUncheckedCreateWithoutConfigInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutConfigInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutConfigInput, ShopUncheckedUpdateWithoutConfigInput>
  }

  export type ShopUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUserCreateWithoutUserInput = {
    id?: string
    role?: $Enums.ShopRole
    shop: ShopCreateNestedOneWithoutUsersInput
  }

  export type ShopUserUncheckedCreateWithoutUserInput = {
    id?: string
    role?: $Enums.ShopRole
    shopId: string
  }

  export type ShopUserCreateOrConnectWithoutUserInput = {
    where: ShopUserWhereUniqueInput
    create: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput>
  }

  export type ShopUserCreateManyUserInputEnvelope = {
    data: ShopUserCreateManyUserInput | ShopUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ShopUserWhereUniqueInput
    update: XOR<ShopUserUpdateWithoutUserInput, ShopUserUncheckedUpdateWithoutUserInput>
    create: XOR<ShopUserCreateWithoutUserInput, ShopUserUncheckedCreateWithoutUserInput>
  }

  export type ShopUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ShopUserWhereUniqueInput
    data: XOR<ShopUserUpdateWithoutUserInput, ShopUserUncheckedUpdateWithoutUserInput>
  }

  export type ShopUserUpdateManyWithWhereWithoutUserInput = {
    where: ShopUserScalarWhereInput
    data: XOR<ShopUserUpdateManyMutationInput, ShopUserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutShopsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutShopsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutShopsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopsInput, UserUncheckedCreateWithoutShopsInput>
  }

  export type ShopCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutUsersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutShopsInput = {
    update: XOR<UserUpdateWithoutShopsInput, UserUncheckedUpdateWithoutShopsInput>
    create: XOR<UserCreateWithoutShopsInput, UserUncheckedCreateWithoutShopsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShopsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShopsInput, UserUncheckedUpdateWithoutShopsInput>
  }

  export type UserUpdateWithoutShopsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutShopsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUpsertWithoutUsersInput = {
    update: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutUsersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type ShopUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutServicesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutServicesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
  }

  export type BookingCreateWithoutServiceInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
    recurrenceGroup?: RecurrenceGroupCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: string
    shopId: string
    customerId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutServicesInput = {
    update: XOR<ShopUpdateWithoutServicesInput, ShopUncheckedUpdateWithoutServicesInput>
    create: XOR<ShopCreateWithoutServicesInput, ShopUncheckedCreateWithoutServicesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutServicesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutServicesInput, ShopUncheckedUpdateWithoutServicesInput>
  }

  export type ShopUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type ShopCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutAvailabilityInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutAvailabilityInput, ShopUncheckedCreateWithoutAvailabilityInput>
  }

  export type ShopUpsertWithoutAvailabilityInput = {
    update: XOR<ShopUpdateWithoutAvailabilityInput, ShopUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<ShopCreateWithoutAvailabilityInput, ShopUncheckedCreateWithoutAvailabilityInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutAvailabilityInput, ShopUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ShopUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutBlockedSlotsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutBlockedSlotsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutBlockedSlotsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutBlockedSlotsInput, ShopUncheckedCreateWithoutBlockedSlotsInput>
  }

  export type ShopUpsertWithoutBlockedSlotsInput = {
    update: XOR<ShopUpdateWithoutBlockedSlotsInput, ShopUncheckedUpdateWithoutBlockedSlotsInput>
    create: XOR<ShopCreateWithoutBlockedSlotsInput, ShopUncheckedCreateWithoutBlockedSlotsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutBlockedSlotsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutBlockedSlotsInput, ShopUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type ShopUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type BookingCreateWithoutCustomerInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    recurrenceGroup?: RecurrenceGroupCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    shopId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingCreateWithoutRecurrenceGroupInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shop: ShopCreateNestedOneWithoutBookingsInput
    customer: CustomerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutRecurrenceGroupInput = {
    id?: string
    shopId: string
    customerId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutRecurrenceGroupInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRecurrenceGroupInput, BookingUncheckedCreateWithoutRecurrenceGroupInput>
  }

  export type BookingCreateManyRecurrenceGroupInputEnvelope = {
    data: BookingCreateManyRecurrenceGroupInput | BookingCreateManyRecurrenceGroupInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutRecurrenceGroupInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRecurrenceGroupInput, BookingUncheckedUpdateWithoutRecurrenceGroupInput>
    create: XOR<BookingCreateWithoutRecurrenceGroupInput, BookingUncheckedCreateWithoutRecurrenceGroupInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRecurrenceGroupInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRecurrenceGroupInput, BookingUncheckedUpdateWithoutRecurrenceGroupInput>
  }

  export type BookingUpdateManyWithWhereWithoutRecurrenceGroupInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRecurrenceGroupInput>
  }

  export type ShopCreateWithoutBookingsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutBookingsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
  }

  export type CustomerCreateWithoutBookingsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    noShows?: number
    isBlocked?: boolean
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    id?: string
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    noShows?: number
    isBlocked?: boolean
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
    shop: ShopCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    shopId: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type RecurrenceGroupCreateWithoutBookingsInput = {
    id?: string
    createdAt?: Date | string
  }

  export type RecurrenceGroupUncheckedCreateWithoutBookingsInput = {
    id?: string
    createdAt?: Date | string
  }

  export type RecurrenceGroupCreateOrConnectWithoutBookingsInput = {
    where: RecurrenceGroupWhereUniqueInput
    create: XOR<RecurrenceGroupCreateWithoutBookingsInput, RecurrenceGroupUncheckedCreateWithoutBookingsInput>
  }

  export type ShopUpsertWithoutBookingsInput = {
    update: XOR<ShopUpdateWithoutBookingsInput, ShopUncheckedUpdateWithoutBookingsInput>
    create: XOR<ShopCreateWithoutBookingsInput, ShopUncheckedCreateWithoutBookingsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutBookingsInput, ShopUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    noShows?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    noShows?: IntFieldUpdateOperationsInput | number
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUpsertWithoutBookingsInput = {
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    shop?: ShopUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurrenceGroupUpsertWithoutBookingsInput = {
    update: XOR<RecurrenceGroupUpdateWithoutBookingsInput, RecurrenceGroupUncheckedUpdateWithoutBookingsInput>
    create: XOR<RecurrenceGroupCreateWithoutBookingsInput, RecurrenceGroupUncheckedCreateWithoutBookingsInput>
    where?: RecurrenceGroupWhereInput
  }

  export type RecurrenceGroupUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RecurrenceGroupWhereInput
    data: XOR<RecurrenceGroupUpdateWithoutBookingsInput, RecurrenceGroupUncheckedUpdateWithoutBookingsInput>
  }

  export type RecurrenceGroupUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurrenceGroupUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateWithoutDateExceptionsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    blacklist?: BlacklistCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutDateExceptionsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    blacklist?: BlacklistUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutDateExceptionsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutDateExceptionsInput, ShopUncheckedCreateWithoutDateExceptionsInput>
  }

  export type ShopUpsertWithoutDateExceptionsInput = {
    update: XOR<ShopUpdateWithoutDateExceptionsInput, ShopUncheckedUpdateWithoutDateExceptionsInput>
    create: XOR<ShopCreateWithoutDateExceptionsInput, ShopUncheckedCreateWithoutDateExceptionsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutDateExceptionsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutDateExceptionsInput, ShopUncheckedUpdateWithoutDateExceptionsInput>
  }

  export type ShopUpdateWithoutDateExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    blacklist?: BlacklistUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutDateExceptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    blacklist?: BlacklistUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutBlacklistInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserCreateNestedManyWithoutShopInput
    services?: ServiceCreateNestedManyWithoutShopInput
    availability?: AvailabilityCreateNestedManyWithoutShopInput
    bookings?: BookingCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutShopInput
    config?: ShopConfigCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutBlacklistInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.ShopPlan
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ShopUserUncheckedCreateNestedManyWithoutShopInput
    services?: ServiceUncheckedCreateNestedManyWithoutShopInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutShopInput
    bookings?: BookingUncheckedCreateNestedManyWithoutShopInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutShopInput
    config?: ShopConfigUncheckedCreateNestedOneWithoutShopInput
    dateExceptions?: DateExceptionUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutBlacklistInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutBlacklistInput, ShopUncheckedCreateWithoutBlacklistInput>
  }

  export type ShopUpsertWithoutBlacklistInput = {
    update: XOR<ShopUpdateWithoutBlacklistInput, ShopUncheckedUpdateWithoutBlacklistInput>
    create: XOR<ShopCreateWithoutBlacklistInput, ShopUncheckedCreateWithoutBlacklistInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutBlacklistInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutBlacklistInput, ShopUncheckedUpdateWithoutBlacklistInput>
  }

  export type ShopUpdateWithoutBlacklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUpdateManyWithoutShopNestedInput
    services?: ServiceUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUpdateManyWithoutShopNestedInput
    bookings?: BookingUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutShopNestedInput
    config?: ShopConfigUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutBlacklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumShopPlanFieldUpdateOperationsInput | $Enums.ShopPlan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ShopUserUncheckedUpdateManyWithoutShopNestedInput
    services?: ServiceUncheckedUpdateManyWithoutShopNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutShopNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutShopNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutShopNestedInput
    config?: ShopConfigUncheckedUpdateOneWithoutShopNestedInput
    dateExceptions?: DateExceptionUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopUserCreateManyShopInput = {
    id?: string
    role?: $Enums.ShopRole
    userId: string
  }

  export type ServiceCreateManyShopInput = {
    id?: string
    name: string
    duration: number
    price?: number | null
    isActive?: boolean
  }

  export type AvailabilityCreateManyShopInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    breakStart?: string | null
    breakEnd?: string | null
    isActive?: boolean
  }

  export type BookingCreateManyShopInput = {
    id?: string
    customerId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockedSlotCreateManyShopInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    reason?: string | null
  }

  export type DateExceptionCreateManyShopInput = {
    id?: string
    date: Date | string
    isOpen: boolean
    startTime?: string | null
    endTime?: string | null
    breakStart?: string | null
    breakEnd?: string | null
    reason?: string | null
  }

  export type BlacklistCreateManyShopInput = {
    id?: string
    email?: string | null
    phone?: string | null
    reason?: string | null
    createdAt?: Date | string
  }

  export type ShopUserUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    user?: UserUpdateOneRequiredWithoutShopsNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUserUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    recurrenceGroup?: RecurrenceGroupUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedSlotUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlockedSlotUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateExceptionUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateExceptionUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateExceptionUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    breakStart?: NullableStringFieldUpdateOperationsInput | string | null
    breakEnd?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BlacklistUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUserCreateManyUserInput = {
    id?: string
    role?: $Enums.ShopRole
    shopId: string
  }

  export type ShopUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    shop?: ShopUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ShopUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    shopId?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumShopRoleFieldUpdateOperationsInput | $Enums.ShopRole
    shopId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyServiceInput = {
    id?: string
    shopId: string
    customerId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    recurrenceGroup?: RecurrenceGroupUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyCustomerInput = {
    id?: string
    shopId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    recurrenceGroupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    recurrenceGroup?: RecurrenceGroupUpdateOneWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyRecurrenceGroupInput = {
    id?: string
    shopId: string
    customerId: string
    serviceId: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.BookingStatus
    otpCode?: string | null
    otpExpiresAt?: Date | string | null
    lockedAt?: Date | string | null
    lockedUntil?: Date | string | null
    reminder24hSentAt?: Date | string | null
    reminder2hSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutRecurrenceGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutBookingsNestedInput
    customer?: CustomerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutRecurrenceGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutRecurrenceGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder24hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reminder2hSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}