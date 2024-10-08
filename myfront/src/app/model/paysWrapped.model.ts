import { Pays } from './pays.model';

export class PaysWrapper {
    _embedded!: { paysList: Pays[] };  // Or whatever the key name from the backend's JSON structure is
}
