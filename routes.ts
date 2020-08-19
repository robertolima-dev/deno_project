import { ServerRequest } from 'https://deno.land/std/http/server.ts'
import { urls } from './myapp/urls.ts'
import { PermissionMiddleware } from './middlewares/permission_middleware.ts'

export class RouterResolver
{
    permissionMiddleware: PermissionMiddleware = new PermissionMiddleware()
    urlMatches(pattern : string, url : string) : boolean
    {
        var regexp = new RegExp(pattern)
        var test = regexp.test(url)
        return test
    }

    getUrlController(request: ServerRequest)
    {
        let urlNotFound = false
        for (let set of urls) {
            if(this.urlMatches(set.reg, request.url)) {
                if (this.permissionMiddleware.userIsAllowed(request)) {
                    urlNotFound = true
                    set.controller.returnResponse(request)
                } else {
                    urlNotFound = true
                    request.respond({ body: 'Permission denied' })
                }
            } 
        }
        if (!urlNotFound) {
            request.respond({ body: '404' })
        }
    }
}