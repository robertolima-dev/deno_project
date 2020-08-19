import { ServerRequest } from 'https://deno.land/std/http/server.ts'

export class ProfileController
{
    public returnResponse(request: ServerRequest) 
    {
        request.respond({ body: 'PROFILE' })
    }
}