import { ServerRequest } from 'https://deno.land/std/http/server.ts'

export class UserController
{
    public returnResponse(request: ServerRequest) 
    {
        request.respond({ body: 'USER' })
    }
}