const getType = <
  Obj extends any,
  Res extends Obj extends String
    ? 'String'
    : Obj extends number
    ? 'Number'
    : Obj extends boolean
    ? 'Boolean'
    : Obj extends Array<any>
    ? 'Array'
    : Obj extends Function
    ? 'Function'
    : Obj extends RegExp
    ? 'RegExp'
    : Obj extends Date
    ? 'Date'
    : Obj extends Map<any, any>
    ? 'Map'
    : Obj extends Set<any>
    ? 'Set'
    : Obj extends Symbol
    ? 'Symbol'
    : Obj extends BigInt
    ? 'BigInt'
    : Obj extends null
    ? 'Null'
    : Obj extends undefined
    ? 'Undefined'
    : Obj extends Promise<any>
    ? 'Promise'
    : Obj extends Error
    ? 'Error'
    : Obj extends File
    ? 'File'
    : Obj extends FormData
    ? 'FormData'
    : Obj extends FileList
    ? 'FileList'
    : Obj extends File
    ? 'File'
    : Obj extends Blob
    ? 'Blob'
    : Obj extends ArrayBuffer
    ? 'ArrayBuffer'
    : Obj extends Int8Array
    ? 'Int8Array'
    : Obj extends Uint8ClampedArray
    ? 'Uint8ClampedArray'
    : Obj extends Uint8Array
    ? 'Uint8Array'
    : Obj extends Object
    ? 'Object'
    : string
>(
  obj: Obj
) => Object.prototype.toString.apply(obj).match(/(?<=\[object )[^\]]+/)![0] as Res

export default getType
