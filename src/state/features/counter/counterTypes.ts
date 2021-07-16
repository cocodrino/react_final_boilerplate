import {StatusResponse} from "../../../shared/types/StatusResponse";

export interface Counter{
    count : number;
    status? : StatusResponse;
}