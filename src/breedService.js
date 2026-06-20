import breeds from './breed.js';
import { v4 } from 'uuid';

export function readBreeds() {
    return breeds;
}

export function addBreed(breedName) {
    const newBreed = {
        id: v4(),
        name: breedName
    };
    breeds.push(newBreed);
}