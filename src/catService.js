import cats from './cats.js';
import { v4 } from 'uuid';
import { getBreedById } from './breedService.js';

export function readCats() {
    return cats;
}

export function addCat(cat) {
    const breedName = getBreedById(cat.breed)?.name || 'Unknown Breed';
    const newCat = {
        id: v4(),
        name: cat.name,
        description: cat.description,
        imageUrl: cat.imageUrl,
        breed: breedName
    };

    cats.push(newCat);
}

export function getCatById(catId) {
    return cats.find(cat => cat.id === catId);
}

export function editCat(catId, editedCat) {
    const catIndex = cats.findIndex(cat => cat.id === catId);

    cats[catIndex] = {
        id: catId,
        ...catData,
    };

     
}