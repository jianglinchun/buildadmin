/**
 * 手机号码验证
 * 用于表单验证
 */
export function validatorMobile(rule: any, mobile: string | number, callback: Function) {
    // 允许空值，若需必填请添加多验证规则
    if (mobile == '') {
        callback()
    }
    if (!/^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(mobile.toString())) {
        callback(new Error('请输入正确的手机号！'))
    }
    callback()
}

/**
 * 账户名验证
 */
export function validatorAccount(rule: any, val: string, callback: Function) {
    if (val == '') {
        callback()
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(val)) {
        callback(new Error('请输入正确的账户'))
    }
    callback()
}

/**
 * 密码验证
 */
export function validatorPassword(rule: any, val: string, callback: Function) {
    if (val == '') {
        callback()
    }
    if (!/^[a-zA-Z0-9_]{6,32}$/.test(val)) {
        callback(new Error('请输入正确的密码'))
    }
    callback()
}
