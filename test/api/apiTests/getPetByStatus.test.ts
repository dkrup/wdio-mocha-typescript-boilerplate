import {CreateGetPetByStatusRequest} from "../apiTestsData/CreateGetPetByStatusRequest";
import {ParamsPetDTO} from '../apiTestsData/ParamsPetDTO';

describe('Pet tests', () => {
    it('Get Pet by Status test', async () => {
        const status = 'available';

        const paramsDTO = new ParamsPetDTO(status);
        const petGetRequest = new CreateGetPetByStatusRequest(paramsDTO);
        const response = await petGetRequest.createRequest();

        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
    });
});
