import { parse } from 'https://deno.land/std/flags/mod.ts'

export class FlagsParser 
{

    port: number;

    constructor(args : string[]) 
    {
        var params = parse(args)
        this.port = params.port
    }

    getPort() : number 
    {
        return this.port
    }
}