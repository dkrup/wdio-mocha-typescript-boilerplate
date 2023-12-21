import axios from 'axios';
import {ParamsPetDTO} from './ParamsPetDTO';

export class CreateGetPetByStatusRequest {
    private dto: ParamsPetDTO;

    constructor(dto: ParamsPetDTO) {
        this.dto = dto;
    }

    public async createRequest(): Promise<any> {
        try {
            return await axios({
                method: 'GET',
                url: `https://petstore.swagger.io/v2/pet/findByStatus?${this.dto.status}`,
            });
        } catch (e) {
            throw new Error(e);
        }
    }
}
