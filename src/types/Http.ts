/* eslint-disable no-unused-vars */
export enum HttpCode {
  /** 继续 */
  CONTINUE = 100,
  /** 切换协议 */
  SWITCHING_PROTOCOLS = 101,
  /** 处理中 */
  PROCESSING = 102,
  /** 成功 */
  OK = 200,
  /** 已创建 */
  CREATED = 201,
  /** 已接受 */
  ACCEPTED = 202,
  /** 非授权信息 */
  NON_AUTHORITATIVE_INFORMATION = 203,
  /** 无内容 */
  NO_CONTENT = 204,
  /** 重置内容 */
  RESET_CONTENT = 205,
  /** 部分内容 */
  PARTIAL_CONTENT = 206,
  /** 多状态 */
  MULTI_STATUS = 207,
  /** 多种选择 */
  MULTIPLE_CHOICES = 300,
  /** 永久移动 */
  MOVED_PERMANENTLY = 301,
  /** 临时移动 */
  MOVED_TEMPORARILY = 302,
  /** 查看其他位置 */
  SEE_OTHER = 303,
  /** 未修改 */
  NOT_MODIFIED = 304,
  /** 使用代理 */
  USE_PROXY = 305,
  /** 临时重定向 */
  TEMPORARY_REDIRECT = 307,
  /** 错误请求 */
  BAD_REQUEST = 400,
  /** 未授权 */
  UNAUTHORIZED = 401,
  /** 需要付款 */
  PAYMENT_REQUIRED = 402,
  /** 禁止访问 */
  FORBIDDEN = 403,
  /** 未找到 */
  NOT_FOUND = 404,
  /** 方法不允许 */
  METHOD_NOT_ALLOWED = 405,
  /** 不可接受 */
  NOT_ACCEPTABLE = 406,
  /** 需要代理身份验证 */
  PROXY_AUTHENTICATION_REQUIRED = 407,
  /** 请求超时 */
  REQUEST_TIME_OUT = 408,
  /** 冲突 */
  CONFLICT = 409,
  /** 已删除 */
  GONE = 410,
  /** 需要内容长度 */
  LENGTH_REQUIRED = 411,
  /** 前提条件失败 */
  PRECONDITION_FAILED = 412,
  /** 请求实体过大 */
  REQUEST_ENTITY_TOO_LARGE = 413,
  /** 请求的 URI 过长 */
  REQUEST_URI_TOO_LARGE = 414,
  /** 不支持的媒体类型 */
  UNSUPPORTED_MEDIA_TYPE = 415,
  /** 请求范围不符合要求 */
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  /** 期望失败 */
  EXPECTATION_FAILED = 417,
  /** 我是茶壶 */
  IM_A_TEAPOT = 418,
  /** 无法处理的实体 */
  UNPROCESSABLE_ENTITY = 422,
  /** 已锁定 */
  LOCKED = 423,
  /** 依赖失败 */
  FAILED_DEPENDENCY = 424,
  /** 无序集合 */
  UNORDERED_COLLECTION = 425,
  /** 需要升级 */
  UPGRADE_REQUIRED = 426,
  /** 需要先决条件 */
  PRECONDITION_REQUIRED = 428,
  /** 请求过多 */
  TOO_MANY_REQUESTS = 429,
  /** 请求头字段过大 */
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
  /** 服务器内部错误 */
  INTERNAL_SERVER_ERROR = 500,
  /** 未实现 */
  NOT_IMPLEMENTED = 501,
  /** 错误网关 */
  BAD_GATEWAY = 502,
  /** 服务不可用 */
  SERVICE_UNAVAILABLE = 503,
  /** 网关超时 */
  GATEWAY_TIME_OUT = 504,
  /** 不支持的 HTTP 版本 */
  HTTP_VERSION_NOT_SUPPORTED = 505,
  /** 变体也进行了协商 */
  VARIANT_ALSO_NEGOTIATES = 506,
  /** 存储空间不足 */
  INSUFFICIENT_STORAGE = 507,
  /** 带宽限制超出 */
  BANDWIDTH_LIMIT_EXCEEDED = 509,
  /** 未扩展 */
  NOT_EXTENDED = 510,
  /** 需要网络身份验证 */
  NETWORK_AUTHENTICATION_REQUIRED = 511
}

export const HttpCodeChinaLableMap: Record<HttpCode, string> = {
  [HttpCode.CONTINUE]: '继续',
  [HttpCode.SWITCHING_PROTOCOLS]: '切换协议',
  [HttpCode.PROCESSING]: '处理中',
  [HttpCode.OK]: '成功',
  [HttpCode.CREATED]: '已创建',
  [HttpCode.ACCEPTED]: '已接受',
  [HttpCode.NON_AUTHORITATIVE_INFORMATION]: '非授权信息',
  [HttpCode.NO_CONTENT]: '无内容',
  [HttpCode.RESET_CONTENT]: '重置内容',
  [HttpCode.PARTIAL_CONTENT]: '部分内容',
  [HttpCode.MULTI_STATUS]: '多状态',
  [HttpCode.MULTIPLE_CHOICES]: '多种选择',
  [HttpCode.MOVED_PERMANENTLY]: '永久移动',
  [HttpCode.MOVED_TEMPORARILY]: '临时移动',
  [HttpCode.SEE_OTHER]: '查看其他位置',
  [HttpCode.NOT_MODIFIED]: '未修改',
  [HttpCode.USE_PROXY]: '使用代理',
  [HttpCode.TEMPORARY_REDIRECT]: '临时重定向',
  [HttpCode.BAD_REQUEST]: '错误请求',
  [HttpCode.UNAUTHORIZED]: '未授权',
  [HttpCode.PAYMENT_REQUIRED]: '需要付款',
  [HttpCode.FORBIDDEN]: '禁止访问',
  [HttpCode.NOT_FOUND]: '未找到',
  [HttpCode.METHOD_NOT_ALLOWED]: '方法不允许',
  [HttpCode.NOT_ACCEPTABLE]: '不可接受',
  [HttpCode.PROXY_AUTHENTICATION_REQUIRED]: '需要代理身份验证',
  [HttpCode.REQUEST_TIME_OUT]: '请求超时',
  [HttpCode.CONFLICT]: '冲突',
  [HttpCode.GONE]: '已删除',
  [HttpCode.LENGTH_REQUIRED]: '需要内容长度',
  [HttpCode.PRECONDITION_FAILED]: '前提条件失败',
  [HttpCode.REQUEST_ENTITY_TOO_LARGE]: '请求实体过大',
  [HttpCode.REQUEST_URI_TOO_LARGE]: '请求的',
  [HttpCode.UNSUPPORTED_MEDIA_TYPE]: '不支持的媒体类型',
  [HttpCode.REQUESTED_RANGE_NOT_SATISFIABLE]: '请求范围不符合要求',
  [HttpCode.EXPECTATION_FAILED]: '期望失败',
  [HttpCode.IM_A_TEAPOT]: '我是茶壶',
  [HttpCode.UNPROCESSABLE_ENTITY]: '无法处理的实体',
  [HttpCode.LOCKED]: '已锁定',
  [HttpCode.FAILED_DEPENDENCY]: '依赖失败',
  [HttpCode.UNORDERED_COLLECTION]: '无序集合',
  [HttpCode.UPGRADE_REQUIRED]: '需要升级',
  [HttpCode.PRECONDITION_REQUIRED]: '需要先决条件',
  [HttpCode.TOO_MANY_REQUESTS]: '请求过多',
  [HttpCode.REQUEST_HEADER_FIELDS_TOO_LARGE]: '请求头字段过大',
  [HttpCode.INTERNAL_SERVER_ERROR]: '服务器内部错误',
  [HttpCode.NOT_IMPLEMENTED]: '未实现',
  [HttpCode.BAD_GATEWAY]: '错误网关',
  [HttpCode.SERVICE_UNAVAILABLE]: '服务不可用',
  [HttpCode.GATEWAY_TIME_OUT]: '网关超时',
  [HttpCode.HTTP_VERSION_NOT_SUPPORTED]: '不支持的',
  [HttpCode.VARIANT_ALSO_NEGOTIATES]: '变体也进行了协商',
  [HttpCode.INSUFFICIENT_STORAGE]: '存储空间不足',
  [HttpCode.BANDWIDTH_LIMIT_EXCEEDED]: '带宽限制超出',
  [HttpCode.NOT_EXTENDED]: '未扩展',
  [HttpCode.NETWORK_AUTHENTICATION_REQUIRED]: '需要网络身份验证'
}