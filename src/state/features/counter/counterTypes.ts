import {StatusResponse} from "../../../sharedTypes/StatusResponse";

export interface Counter{
    count : number;
    status? : StatusResponse;
}