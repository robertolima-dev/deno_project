import { ServerRequest } from 'https://deno.land/std/http/server.ts'

export class CustomerController
{
    public returnResponse(request: ServerRequest) 
    {
        request.respond({ body: 'CUSTOMER' })
    }
}