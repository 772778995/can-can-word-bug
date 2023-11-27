const getType = (obj: any) => Object.prototype.toString.apply(obj).match(/(?<=\[object )[^\]]+/)![0]

export default getType
