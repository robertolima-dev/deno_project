import { ServerRequest } from 'https://deno.land/std/http/server.ts'

export class AdminController
{
    public returnResponse(request: ServerRequest) 
    {
        request.respond({ body: 'ADMIN' })
    }
}