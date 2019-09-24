import { controller, get, post, put } from '../lib/decorator'
import {
    getConfig,
    setHeader,
    setBanner,
    setBannerSider,
    setSupportPay
} from '../service/config'

@controller('/api/v0/config')
class configController {
    @get('/all')
    async getConfig(ctx, next) {
        const res = await getConfig()
        if(res && !Array.isArray(res)) {
            // 将数据转化为json
            for(let key in res) {
                let v = res[key]
                res[key] = JSON.parse(v)
            }

            ctx.status = 200
            ctx.body = {
                data: res,
                state: 200
            }
        }else {
            ctx.status = 403
            ctx.body = {
                data: res ? res.join(',') : '服务器错误',
                state: 403
            }
        }
    }

    @post('/setHeader')
    async setHeader(ctx, next) {
        const data = ctx.request.body
        const res = await setHeader(data)
        if(res && !Array.isArray(res)) {
            ctx.status = 200
            ctx.body = {
                data: '保存成功',
                state: 200
            }
        }else {
            ctx.status = 403
            ctx.body = {
                data: res ? res.join(',') : '服务器错误',
                state: 403
            }
        }
    }

    @post('/setBanner')
    async setBanner(ctx, next) {
        const data = ctx.request.body
        const res = await setBanner(data)
        if(res && !Array.isArray(res)) {
            ctx.status = 200
            ctx.body = {
                data: '保存成功',
                state: 200
            }
        }else {
            ctx.status = 403
            ctx.body = {
                data: res ? res.join(',') : '服务器错误',
                state: 403
            }
        }
    }

    @post('/setBannerSider')
    async setBannerSider(ctx, next) {
        const data = ctx.request.body
        const res = await setBannerSider(data)
        if(res && !Array.isArray(res)) {
            ctx.status = 200
            ctx.body = {
                data: '保存成功',
                state: 200
            }
        }else {
            ctx.status = 403
            ctx.body = {
                data: res ? res.join(',') : '服务器错误',
                state: 403
            }
        }
    }

    @post('/setSupportPay')
    async setSupportPay(ctx, next) {
        const data = ctx.request.body
        const res = await setSupportPay(data)
        if(res && !Array.isArray(res)) {
            ctx.status = 200
            ctx.body = {
                data: '保存成功',
                state: 200
            }
        }else {
            ctx.status = 403
            ctx.body = {
                data: res ? res.join(',') : '服务器错误',
                state: 403
            }
        }
    }
}

export default configController
