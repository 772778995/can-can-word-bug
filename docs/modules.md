[can-can-word-bug](README.md) / Exports

# can-can-word-bug

## Table of contents

### Type Aliases

- [DeepMerge](modules.md#deepmerge)
- [DeepPartial](modules.md#deeppartial)
- [DeepRequired](modules.md#deeprequired)
- [EitherOr](modules.md#eitheror)
- [Enumerate](modules.md#enumerate)
- [ExtractCommonProps](modules.md#extractcommonprops)
- [HTMLElementTagName](modules.md#htmlelementtagname)
- [Object](modules.md#object)
- [PartialBy](modules.md#partialby)
- [RangeNum](modules.md#rangenum)
- [ReadonlyBy](modules.md#readonlyby)
- [RequiredBy](modules.md#requiredby)
- [ValueOf](modules.md#valueof)
- [Writable](modules.md#writable)
- [WritableBy](modules.md#writableby)

### Functions

- [createEl](modules.md#createel)
- [decrypt](modules.md#decrypt)
- [delay](modules.md#delay)
- [encrypt](modules.md#encrypt)
- [exportCsv](modules.md#exportcsv)
- [getCrypto](modules.md#getcrypto)
- [getCsvStr](modules.md#getcsvstr)
- [getImgFileInfo](modules.md#getimgfileinfo)
- [getLocalForage](modules.md#getlocalforage)
- [getType](modules.md#gettype)
- [getUUID](modules.md#getuuid)
- [isElementVisible](modules.md#iselementvisible)
- [uploadFile](modules.md#uploadfile)

## Type Aliases

### DeepMerge

Ƭ **DeepMerge**\<`T`, `U`\>: `T` extends `object` ? `U` extends `object` ? \{ [K in keyof (T & U)]: K extends keyof T ? K extends keyof U ? DeepMerge\<T[K], U[K]\> : T[K] : K extends keyof U ? U[K] : never } : `T` : `U`

**`Example`**

```ts
// 深度合并 TypeA 和 TypeB
// 示例类型
type TypeA = {
  a: {
    x: number
    y: number
  }
  b: string
}
type TypeB = {
  a: {
    y: string
    z: boolean
  }
  c: number
}
type MergedType = DeepMerge<TypeA, TypeB>
```

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[src/types/DeepMerge.ts:21](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/DeepMerge.ts#L21)

___

### DeepPartial

Ƭ **DeepPartial**\<`T`\>: \{ [P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial\<U\>[] : T[P] extends ReadonlyArray\<infer U\> ? ReadonlyArray\<DeepPartial\<U\>\> : DeepPartial\<T[P]\> }

Partial 泛型深度化

**`Example`**

```ts
type Person = {
 name: string
 address: {
   country: string
 }
}
type PersonPartial = DeepPartial<Person>;
// {
//   name?: Deep<string | undefined>;
//   address?: Deep<{
//     country: string;
//   } | undefined>;
// }
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/DeepPartial.ts:18](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/DeepPartial.ts#L18)

___

### DeepRequired

Ƭ **DeepRequired**\<`T`\>: \{ [P in keyof T]-?: T[P] extends (infer U)[] ? DeepRequired\<U\>[] : T[P] extends ReadonlyArray\<infer U\> ? ReadonlyArray\<DeepRequired\<U\>\> : DeepRequired\<T[P]\> }

Required 泛型深度化

**`Example`**

```ts
type Person = {
 name?: string
 address?: {
   country?: string
 }
}
type PersonRequired = DeepRequired<Person>;
// {
//   name: string
//   address: {
//     country: string
//   }
// }
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/DeepRequired.ts:18](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/DeepRequired.ts#L18)

___

### EitherOr

Ƭ **EitherOr**\<`O`, `L`, `R`\>: `PartialEither`\<`Pick`\<`O`, `L` \| `R` & keyof `O`\>, `L`\> \| `PartialEither`\<`Pick`\<`O`, `L` \| `R` & keyof `O`\>, `R`\> & `Omit`\<`O`, `L` \| `R`\>

属性二选一

**`Example`**

```ts
type RawType = { a: 'a', b: 'b' }
type ResType = EitherOr<RawType, 'a', 'b'> // 只能存在 a 或者 b

const a: ResType = { a: 'a' }
const b: ResType = { b: 'b' }
const c: ResType = { a: 'a', b: 'b', } // 报错
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |
| `L` | extends `string` |
| `R` | extends `string` |

#### Defined in

[src/types/EitherOr.ts:40](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/EitherOr.ts#L40)

___

### Enumerate

Ƭ **Enumerate**\<`T`, `R`\>: `R`[``"length"``] extends `T` ? `R`[`number`] : [`Enumerate`](modules.md#enumerate)\<`T`, [`R`[``"length"``], ...R]\>

构建一个连续的数字枚举类型，最大不超过 999

**`See`**

https://www.fullstackbb.com/typescript/type-in-certain-number-range/#:~:text=%E4%BD%BF%E7%94%A8%20TypeScript%20%E7%B1%BB%E5%9E%8B%E9%99%90%E5%AE%9A%E6%95%B0%E5%AD%97%E7%9A%84%E8%8C%83%E5%9B%B4%201%20%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%20%E5%A6%82%E6%9E%9C%E6%98%AF%E6%AF%94%E8%BE%83%E5%B0%8F%E7%9A%84%E8%8C%83%E5%9B%B4%E5%A6%82%201~10%20%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%AE%80%E5%8D%95%E5%9C%B0%E4%BD%BF%E7%94%A8%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%85%A8%E9%83%A8%E6%9E%9A%E4%B8%BE%E5%87%BA%E6%9D%A5%EF%BC%9A,0%20%E5%88%B0%E6%8C%87%E5%AE%9A%E6%95%B0%E5%80%BC%E7%9A%84%E6%9E%9A%E4%B8%BE%EF%BC%8C%E6%9C%89%E6%97%B6%E5%80%99%E6%88%91%E4%BB%AC%E4%B8%8D%E6%83%B3%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%EF%BC%8C%E8%80%8C%E6%98%AF%E5%B8%8C%E6%9C%9B%E9%99%90%E5%AE%9A%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%8C%BA%E9%97%B4%EF%BC%8C%E5%80%9F%E5%8A%A9%20Exclude%20%E5%8F%AF%E4%BB%A5%E5%BE%88%E7%AE%80%E5%8D%95%E5%B0%B1%E8%83%BD%E5%AE%9E%E7%8E%B0%EF%BC%9A%20...%205%20%E9%99%90%E5%AE%9A%E5%B0%8F%E6%95%B0%E8%8C%83%E5%9B%B4%20

**`Example`**

```ts
type ToFive = Enumerate<5> // 0 | 1 | 2 | 3 | 4
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |
| `R` | extends `number`[] = [] |

#### Defined in

[src/types/Enumerate.ts:7](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/Enumerate.ts#L7)

___

### ExtractCommonProps

Ƭ **ExtractCommonProps**\<`T1`, `T2`\>: \{ [K in keyof T1 & keyof T2]: T1[K] \| T2[K] }

提取两个类型的公共属性并返回一个新的类型

**`Example`**

```ts
type TypeA = {
  prop1: number;
  prop2: number;
}
type TypeB = {
  prop1: string;
  prop3: boolean;
}

type TypeC = ExtractCommonProps<TypeA, TypeB> // { prop1: number | string }
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T1` | 类型一 |
| `T2` | 类型二 |

#### Defined in

[src/types/ExtractCommonProps.ts:17](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/ExtractCommonProps.ts#L17)

___

### HTMLElementTagName

Ƭ **HTMLElementTagName**: keyof `HTMLElementTagNameMap`

#### Defined in

[src/types/HTMLElementTagName.ts:1](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/HTMLElementTagName.ts#L1)

___

### Object

Ƭ **Object**: `Object`

引用数据类型替代 any 类型

**`Example`**

```ts
const unknowObj: any = {} // 戳啦
const unknowObj: Object = {}
```

#### Index signature

▪ [k: `string` \| `number`]: `unknown`

#### Defined in

[src/types/Object.ts:7](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/Object.ts#L7)

___

### PartialBy

Ƭ **PartialBy**\<`T`, `K`\>: `Omit`\<`T`, `K`\> & `Partial`\<`Pick`\<`T`, `K`\>\>

使类型指定的属性为可选属性

**`Example`**

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}
const partialPerson: PartialBy<Person, 'age' | 'address'> = {
  name: 'John',
  age: 30, // 可选属性，可选择性地提供
};
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/PartialBy.ts:14](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/PartialBy.ts#L14)

___

### RangeNum

Ƭ **RangeNum**\<`Min`, `Max`\>: `Exclude`\<[`Enumerate`](modules.md#enumerate)\<`Max`\>, [`Enumerate`](modules.md#enumerate)\<`Min`\>\>

构建数字范围之间的类型

**`See`**

https://www.fullstackbb.com/typescript/type-in-certain-number-range/#:~:text=%E4%BD%BF%E7%94%A8%20TypeScript%20%E7%B1%BB%E5%9E%8B%E9%99%90%E5%AE%9A%E6%95%B0%E5%AD%97%E7%9A%84%E8%8C%83%E5%9B%B4%201%20%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%20%E5%A6%82%E6%9E%9C%E6%98%AF%E6%AF%94%E8%BE%83%E5%B0%8F%E7%9A%84%E8%8C%83%E5%9B%B4%E5%A6%82%201~10%20%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%AE%80%E5%8D%95%E5%9C%B0%E4%BD%BF%E7%94%A8%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E5%85%A8%E9%83%A8%E6%9E%9A%E4%B8%BE%E5%87%BA%E6%9D%A5%EF%BC%9A,0%20%E5%88%B0%E6%8C%87%E5%AE%9A%E6%95%B0%E5%80%BC%E7%9A%84%E6%9E%9A%E4%B8%BE%EF%BC%8C%E6%9C%89%E6%97%B6%E5%80%99%E6%88%91%E4%BB%AC%E4%B8%8D%E6%83%B3%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%EF%BC%8C%E8%80%8C%E6%98%AF%E5%B8%8C%E6%9C%9B%E9%99%90%E5%AE%9A%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%8C%BA%E9%97%B4%EF%BC%8C%E5%80%9F%E5%8A%A9%20Exclude%20%E5%8F%AF%E4%BB%A5%E5%BE%88%E7%AE%80%E5%8D%95%E5%B0%B1%E8%83%BD%E5%AE%9E%E7%8E%B0%EF%BC%9A%20...%205%20%E9%99%90%E5%AE%9A%E5%B0%8F%E6%95%B0%E8%8C%83%E5%9B%B4%20

**`Example`**

```ts
type FiveToTen = RangeNum<5, 10> // 5 | 6 | 7 | 8 | 9
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Min` | extends `number` |
| `Max` | extends `number` |

#### Defined in

[src/types/RangeNum.ts:9](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/RangeNum.ts#L9)

___

### ReadonlyBy

Ƭ **ReadonlyBy**\<`T`, `K`\>: `Omit`\<`T`, `K`\> & `Readonly`\<`Pick`\<`T`, `K`\>\>

使类型指定的属性为可选属性

**`Example`**

```ts
interface Person {
  name: string;
  age: number;
  address: string;
}
const readonlyPerson: ReadonlyBy<Person, 'age' | 'address'> = {
  name: 'John',  // writable
  age: 30,       // readonly
  address: 'xxx' // readonly
};
readonlyPerson.name = 'whc4088' // success
readonlyPerson.address = 'xxx'  // error
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/ReadonlyBy.ts:17](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/ReadonlyBy.ts#L17)

___

### RequiredBy

Ƭ **RequiredBy**\<`T`, `K`\>: `Omit`\<`T`, `K`\> & `Required`\<`Pick`\<`T`, `K`\>\>

使类型指定的属性为可选属性

**`Example`**

```ts
interface Person {
  name?: string;
  age?: number;
  address?: string;
}
const requiredPerson: RequiredBy<Person, 'age' | 'address'> = {
  age: 30, // 必选属性
  address: 'xxx'
};
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/RequiredBy.ts:14](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/RequiredBy.ts#L14)

___

### ValueOf

Ƭ **ValueOf**\<`T`\>: `T`[keyof `T`]

遍历类型的值的类型，类似关键字 keyof

**`Example`**

```ts
interface Person {
 name: string;
 age: number;
}
type PersonValues = ValueOf<Person>; // string | number
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/ValueOf.ts:10](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/ValueOf.ts#L10)

___

### Writable

Ƭ **Writable**\<`T`\>: \{ -readonly [P in keyof T]: T[P] }

与 Readonly 相反，从一个对象类型中去掉 readonly 修饰符，使其所有属性可写。

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/Writable.ts:4](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/Writable.ts#L4)

___

### WritableBy

Ƭ **WritableBy**\<`T`, `K`\>: `Omit`\<`T`, `K`\> & [`Writable`](modules.md#writable)\<`Pick`\<`T`, `K`\>\>

使类型指定的属性为可选属性

**`Example`**

```ts
type Person = Readonly<{
  name: string;
  age: number;
  address: string;
}>
const writablePerson: WritableBy<Person, 'age' | 'address'> = {
  name: '只读属性',
  age: 30, // 可写属性
  address: 'xxx'
};
writablePerson.age = 12   // success
writablePerson.name = 'xxx' // error
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/WritableBy.ts:19](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/types/WritableBy.ts#L19)

## Functions

### createEl

▸ **createEl**\<`TagName`, `Attrs`\>(`tagName`, `attrs?`): `HTMLElementTagNameMap`[`TagName`]

创建HTML元素

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TagName` | extends keyof `HTMLElementTagNameMap` |
| `Attrs` | extends [`DeepPartial`](modules.md#deeppartial)\<`HTMLElementTagNameMap`[`TagName`]\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagName` | `TagName` | HTML标签名 |
| `attrs` | `Attrs` | 属性 |

#### Returns

`HTMLElementTagNameMap`[`TagName`]

HTML元素

#### Defined in

[src/el/createEl.ts:10](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/el/createEl.ts#L10)

___

### decrypt

▸ **decrypt**(`key`, `str`): `string`

解密字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 密钥 |
| `str` | `string` | 需要解密的字符串 |

#### Returns

`string`

#### Defined in

[src/string/getCrypto.ts:15](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/string/getCrypto.ts#L15)

___

### delay

▸ **delay**(`time?`): `Promise`\<`unknown`\>

promise 延迟函数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `time` | `number` | `300` | 延迟多少毫秒 **`Default`** ```ts 300 ``` |

#### Returns

`Promise`\<`unknown`\>

**`Example`**

```ts
const fn = async () => {
  await delay(10000)
  console.log('hello')
}
```

#### Defined in

[src/promise/delay.ts:9](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/promise/delay.ts#L9)

___

### encrypt

▸ **encrypt**(`key`, `str`): `string`

加密字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 密钥 |
| `str` | `string` | 需要加密的字符串 |

#### Returns

`string`

#### Defined in

[src/string/getCrypto.ts:8](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/string/getCrypto.ts#L8)

___

### exportCsv

▸ **exportCsv**(`fileName`, `data`): `void`

导出 csv 文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | 文件名 |
| `data` | \{ `[x: string]`: `string`;  }[] | 表格内容 |

#### Returns

`void`

**`Example`**

```ts
exportCsv([
 { name: '姓名', phone: '手机号', department: '部门' },
 { name: '张三', phone: '13777777777', department: '技术部' }
])
```

#### Defined in

[src/file/csv.ts:25](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/file/csv.ts#L25)

___

### getCrypto

▸ **getCrypto**(`key`): `Object`

获取加密解密的方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 密钥 |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `decrypt` | (`str`: `string`) => `string` |
| `encrypt` | (`str`: `string`) => `string` |

#### Defined in

[src/string/getCrypto.ts:21](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/string/getCrypto.ts#L21)

___

### getCsvStr

▸ **getCsvStr**(`data`): `string`

获取 csv 表格字符串

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | \{ `[x: string]`: `string`;  }[] | 表格内容 |

#### Returns

`string`

csv 表格字符串

**`Example`**

```ts
getCsvStr([
 { name: '姓名', phone: '手机号', department: '部门' },
 { name: '张三', phone: '13777777777', department: '技术部' }
]) // 姓名,手机号,部门\r\n张三,13777777777,技术部
```

#### Defined in

[src/file/csv.ts:13](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/file/csv.ts#L13)

___

### getImgFileInfo

▸ **getImgFileInfo**(`file`): `Promise`\<\{ `height`: `number` ; `width`: `number`  }\>

获取图片的的宽高

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` \| `Uint8Array` \| `Blob` |

#### Returns

`Promise`\<\{ `height`: `number` ; `width`: `number`  }\>

#### Defined in

[src/img/getImgFileInfo.ts:5](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/img/getImgFileInfo.ts#L5)

___

### getLocalForage

▸ **getLocalForage**\<`T`\>(`opts?`): `Omit`\<`LocalForage`, ``"setItem"`` \| ``"getItem"`` \| ``"removeItem"`` \| ``"keys"`` \| ``"iterate"``\> & \{ `getItem`: \<K\>(`key`: `K`) => `Promise`\<``null`` \| `T`[`K`]\> ; `iterate`: \<K, Cb\>(`cb`: `Cb`) => `Promise`\<`void`\> ; `keys`: \<K\>() => `Promise`\<`K`[]\> ; `removeItem`: \<K\>(`key`: `K`) => `Promise`\<`void`\> ; `setItem`: \<K\>(`key`: `K`, `val`: `T`[`K`]) => `Promise`\<`void`\>  }

获取 localForage

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `LocalForageOptions` |

#### Returns

`Omit`\<`LocalForage`, ``"setItem"`` \| ``"getItem"`` \| ``"removeItem"`` \| ``"keys"`` \| ``"iterate"``\> & \{ `getItem`: \<K\>(`key`: `K`) => `Promise`\<``null`` \| `T`[`K`]\> ; `iterate`: \<K, Cb\>(`cb`: `Cb`) => `Promise`\<`void`\> ; `keys`: \<K\>() => `Promise`\<`K`[]\> ; `removeItem`: \<K\>(`key`: `K`) => `Promise`\<`void`\> ; `setItem`: \<K\>(`key`: `K`, `val`: `T`[`K`]) => `Promise`\<`void`\>  }

**`Example`**

```ts
const localForage = getLocalForage<{
  yourKey: 'yourValue'
}>()

// 设置key对应的值
localForage.setItem('yourKey', 'yourValue')

// 获取key对应的值
localForage.getItem('yourKey')
  .then(val => {
    console.log(val) // 'yourValue'
  })

// 删除key对应的值
localForage.removeItem('yourKey')

// 删除所有的key，并且重置数据库
localForage.clear()

// 迭代数据库中所有的键值对，如果有一个value是undefined，就会推出，并且将 该键传入成功回调内
localForage
  .iterate((v, k, i) => {
    console.log(v, k, i)
  })
  .then(() => console.log('迭代完成'))
```

#### Defined in

[src/storage/getLocalForage.ts:45](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/storage/getLocalForage.ts#L45)

___

### getType

▸ **getType**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`string`

#### Defined in

[src/type/getType.ts:1](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/type/getType.ts#L1)

___

### getUUID

▸ **getUUID**(): `string`

获取 UUID

#### Returns

`string`

**`Example`**

```ts
getUUID() // b250d159-e1b6-4a87-9002-885d90033be3
```

#### Defined in

[src/string/getUUID.ts:6](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/string/getUUID.ts#L6)

___

### isElementVisible

▸ **isElementVisible**(`target`, `container?`): `boolean`

判断元素是否可见

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `HTMLElement` | `undefined` | 目标元素 |
| `container` | `HTMLElement` | `document.body` | 容器元素 **`Default`** ```ts document.body ``` |

#### Returns

`boolean`

#### Defined in

[src/el/isElementVisible.ts:2](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/el/isElementVisible.ts#L2)

___

### uploadFile

▸ **uploadFile**\<`Opts`, `Res`\>(`opts?`): `Promise`\<`Res`\>

上传文件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Opts` | extends `Object` |
| `Res` | extends `TFile` \| `TFile`[] \| \{ `fileList`: `TFile`[] ; `zipFile`: `Blob`  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | `Opts` | 配置选项 |

#### Returns

`Promise`\<`Res`\>

#### Defined in

[src/file/uploadFile.ts:11](https://github.com/772778995/can-can-word-bug/blob/b1651b7/src/file/uploadFile.ts#L11)
