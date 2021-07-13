
import * as api from '../src/api';
import defaultExport from '../src/api';
import {countries} from '../src/countries';
import {Country} from '../src/Country';

describe('Public API', () => {
    it('Default Import', () => {
        expect(defaultExport).toBe(countries);
    });

    it('countries', () => {
        expect(api.countries).toBe(countries);
    });

    it('Country', () => {
        expect(api.Country).toBe(Country);
    });
});
