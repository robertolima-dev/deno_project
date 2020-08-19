import { FlagsParser } from './flags_parser.ts'
import { Server, serve } from 'https://deno.land/std/http/server.ts'
import { RouterResolver } from './routes.ts'
const { args } = Deno

class WebServer 
{ 

    // flag parser 
    s : Server;
    urlResolver : RouterResolver
    constructor() 
    {
        var flagParser = new FlagsParser(args)
        this.urlResolver = new RouterResolver()
        this.s = serve({ port: flagParser.getPort() })
        console.log('Running on port: ' + flagParser.getPort())
    }
    // port

    // run
    async run() : Promise<void>
    {
        // console.log('server is running: ' + params.p)
        for await ( const req of this.s)
        {
            this.urlResolver.getUrlController(req)
        }
    }
}

var server = new WebServer()
await server.run()